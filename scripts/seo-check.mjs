import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const site = 'https://danmaek.com';
const dist = path.join(root, 'dist');
const postsDir = path.join(root, 'src', 'content', 'posts');

const read = (file) => fs.readFile(file, 'utf8');
const exists = async (file) => !!(await fs.stat(file).catch(() => null));

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const getPostSlugs = async () => {
  const entries = await fs.readdir(postsDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && /\.mdx?$/.test(entry.name))
    .map((entry) => entry.name.replace(/\.mdx?$/, ''))
    .sort();
};

const pagePathForUrl = (url) => {
  const pathname = new URL(url).pathname;
  if (pathname === '/') return path.join(dist, 'index.html');
  if (path.extname(pathname)) return path.join(dist, pathname.replace(/^\/+/, ''));
  return path.join(dist, pathname.replace(/^\/+/, ''), 'index.html');
};

const extract = (html, regex) => html.match(regex)?.[1] ?? '';
const unique = (items) => [...new Set(items)];

const sitemapXml = await read(path.join(dist, 'sitemap.xml'));
const sitemapUrls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const postSlugs = await getPostSlugs();
const postUrls = postSlugs.map((slug) => `${site}/posts/${slug}/`);
const missingPostUrls = postUrls.filter((url) => !sitemapUrls.includes(url));

const htmlFiles = [];
for await (const file of walk(dist)) {
  if (file.endsWith('.html')) htmlFiles.push(file);
}

const canonicalErrors = [];
const noindexErrors = [];
const duplicateTitleMap = new Map();
const duplicateDescriptionMap = new Map();
const htmlByUrl = new Map();
const outgoingInternalLinks = new Map();
let structuredDataPostCount = 0;

for (const file of htmlFiles) {
  const html = await read(file);
  const relative = path.relative(dist, file).replace(/\\/g, '/');
  const pathname = relative === 'index.html' ? '/' : `/${relative.replace(/\/index\.html$/, '/')}`;
  const url = new URL(pathname, site).toString();
  htmlByUrl.set(url, html);

  if (sitemapUrls.includes(url) && /noindex|nofollow|X-Robots-Tag/i.test(html)) {
    noindexErrors.push(url);
  }

  const title = extract(html, /<title>(.*?)<\/title>/is).trim();
  const description = extract(html, /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/is).trim();
  if (title) duplicateTitleMap.set(title, [...(duplicateTitleMap.get(title) ?? []), url]);
  if (description) duplicateDescriptionMap.set(description, [...(duplicateDescriptionMap.get(description) ?? []), url]);

  const canonical = extract(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/is);
  if (sitemapUrls.includes(url) && canonical !== url) {
    canonicalErrors.push({ url, canonical });
  }

  const links = [...html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)]
    .map((match) => match[1])
    .filter((href) => href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:'))
    .map((href) => {
      try {
        const next = new URL(href, site);
        if (next.origin !== site) return null;
        next.hash = '';
        next.search = '';
        return next.toString();
      } catch {
        return null;
      }
    })
    .filter(Boolean);
  outgoingInternalLinks.set(url, unique(links));

  if (url.includes('/posts/') && html.includes('application/ld+json') && /"@type":"BlogPosting"|"@type": "BlogPosting"/.test(html)) {
    structuredDataPostCount += 1;
  }
}

const brokenInternalLinks = [];
for (const [from, links] of outgoingInternalLinks) {
  for (const link of links) {
    if (!htmlByUrl.has(link) && !sitemapUrls.includes(link) && !(await exists(pagePathForUrl(link)))) {
      brokenInternalLinks.push({ from, link });
    }
  }
}

const inbound = new Map(postUrls.map((url) => [url, 0]));
for (const [from, links] of outgoingInternalLinks) {
  for (const link of links) {
    if (inbound.has(link) && from !== link) inbound.set(link, inbound.get(link) + 1);
  }
}
const isolatedPostUrls = [...inbound.entries()].filter(([, count]) => count === 0).map(([url]) => url);

const sitemap404Urls = [];
for (const url of sitemapUrls) {
  if (!(await exists(pagePathForUrl(url)))) sitemap404Urls.push(url);
}

const duplicateTitles = [...duplicateTitleMap.entries()].filter(([, urls]) => urls.length > 1);
const duplicateDescriptions = [...duplicateDescriptionMap.entries()].filter(([, urls]) => urls.length > 1);

const report = {
  publicPostCount: postUrls.length,
  sitemapUrlCount: sitemapUrls.length,
  missingPostUrls,
  isolatedPostUrls,
  canonicalErrors,
  noindexErrors,
  brokenInternalLinks,
  sitemap404Urls,
  duplicateTitles,
  duplicateDescriptions,
  structuredDataPostCount,
  feedExists: await exists(path.join(dist, 'feed.xml')),
  rssExists: await exists(path.join(dist, 'rss.xml')),
  robotsExists: await exists(path.join(dist, 'robots.txt')),
  sitemapExists: await exists(path.join(dist, 'sitemap.xml'))
};

console.log(JSON.stringify({
  publicPostCount: report.publicPostCount,
  sitemapUrlCount: report.sitemapUrlCount,
  missingPostCount: report.missingPostUrls.length,
  isolatedPostCount: report.isolatedPostUrls.length,
  canonicalErrorCount: report.canonicalErrors.length,
  noindexErrorCount: report.noindexErrors.length,
  brokenInternalLinkCount: report.brokenInternalLinks.length,
  sitemap404Count: report.sitemap404Urls.length,
  duplicateTitleCount: report.duplicateTitles.length,
  duplicateDescriptionCount: report.duplicateDescriptions.length,
  structuredDataPostCount: report.structuredDataPostCount,
  feedExists: report.feedExists,
  rssExists: report.rssExists,
  robotsExists: report.robotsExists,
  sitemapExists: report.sitemapExists
}, null, 2));

await fs.writeFile(path.join(root, 'seo-check-report.json'), JSON.stringify(report, null, 2), 'utf8');

const hasFailure =
  report.missingPostUrls.length ||
  report.isolatedPostUrls.length ||
  report.canonicalErrors.length ||
  report.noindexErrors.length ||
  report.brokenInternalLinks.length ||
  report.sitemap404Urls.length ||
  !report.feedExists ||
  !report.robotsExists ||
  !report.sitemapExists;

if (hasFailure) {
  process.exitCode = 1;
}
