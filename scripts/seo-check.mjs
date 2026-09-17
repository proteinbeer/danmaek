import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const site = 'https://danmaek.com';
const dist = path.join(root, 'dist');
const postsDir = path.join(root, 'src', 'content', 'posts');
const srcDir = path.join(root, 'src');
const workerFile = path.join(root, 'worker', 'redirect.js');

const read = (file) => fs.readFile(file, 'utf8');
const exists = async (file) => !!(await fs.stat(file).catch(() => null));

const LEGACY_NETWORK_SUBHEADINGS = [
  '먼저 증상을 정확히 나누기',
  '가장 흔한 원인부터 확인',
  'PC와 공유기에서 볼 부분',
  '실제로 해결하는 순서',
  '그래도 해결되지 않을 때',
  '설정을 바꿀 때 주의할 점',
  '마지막 판단 기준',
  '\n## 정리\n'
];

const NETWORK_CHECK_SLUGS = [
  'network-unidentified-network', 'network-default-gateway-error', 'network-discovery-pc-missing',
  'network-ethernet-no-internet-wifi-ok', 'network-ip-address-conflict', 'network-6ghz-wifi-not-visible',
  'network-wifi7-same-speed', 'network-ap-bridge-mode', 'network-dhcp-reservation', 'network-strict-nat-type',
  'network-gbps-vs-megabytes', 'network-link-drops-100mbps', 'network-dns-change-slow', 'network-router-firmware-update',
  'network-upnp-on-or-off', 'network-vpn-slow-internet', 'network-dns-cache-flush', 'network-double-nat', 'network-gigabit-stuck-100mbps',
  'network-jitter-low-ping-stutter', 'network-port-forwarding-not-working', 'network-cgnat-port-forwarding',
  'network-static-ip-breaks-internet', 'network-wpa2-wpa3', 'network-dns-over-https', 'mesh-wifi-guide',
  'internet-keeps-disconnecting-guide', 'game-high-ping-guide', 'wifi-connected-no-internet-guide', 'wifi-speed-boost-guide',
  'network-public-private-profile', 'wifi-password-change-guide', 'wifi-coverage-guide', 'network-cat5e-cat6-cat6a',
  'network-wake-on-lan', 'network-guest-wifi-iot', 'network-packet-loss-game'
];

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
  const slugs = [];
  for (const entry of entries) {
    if (!entry.isFile() || !/\.mdx?$/.test(entry.name)) continue;
    const source = await read(path.join(postsDir, entry.name));
    const frontmatter = source.replace(/^\uFEFF/, '').match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
    if (/^draft:\s*true\s*$/m.test(frontmatter)) continue;
    if (/^category:\s*["']쿠폰["']\s*$/m.test(frontmatter)) continue;
    slugs.push(entry.name.replace(/\.mdx?$/, ''));
  }
  return slugs.sort();
};

const postSourceMap = async () => {
  const entries = await fs.readdir(postsDir, { withFileTypes: true });
  const map = new Map();
  for (const entry of entries) {
    if (!entry.isFile() || !/\.mdx?$/.test(entry.name)) continue;
    const source = await read(path.join(postsDir, entry.name));
    const frontmatter = source.replace(/^\uFEFF/, '').match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
    map.set(entry.name.replace(/\.mdx?$/, ''), { source, draft: /^draft:\s*true\s*$/m.test(frontmatter) });
  }
  return map;
};

const readRedirectMap = async () => {
  const source = await read(path.join(srcDir, 'lib', 'postRedirects.ts'));
  return [...source.matchAll(/^\s*'(.*?)'\s*:\s*'(.*?)',?\s*$/gm)].map((m) => ({
    from: m[1],
    to: m[2].replace(/\/$/, '')
  }));
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

const canonicals = [];
const noindexErrors = [];
const canonicalMismatchErrors = [];
const duplicateTitleMap = new Map();
const duplicateDescriptionMap = new Map();
const duplicateCanonicalMap = new Map();
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
  canonicals.push({ url, canonical });
  if (canonical) duplicateCanonicalMap.set(canonical, [...(duplicateCanonicalMap.get(canonical) ?? []), url]);
  if (sitemapUrls.includes(url) && canonical && canonical !== url) {
    canonicalMismatchErrors.push({ url, canonical });
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

const redirectMap = await readRedirectMap();
const redirectFromPaths = new Set(redirectMap.map((item) => `/posts/${item.from}/`));

const brokenInternalLinks = [];
const redirectLinkErrors = [];
for (const [from, links] of outgoingInternalLinks) {
  for (const link of links) {
    if (redirectFromPaths.has(link)) {
      redirectLinkErrors.push({ from, link });
      continue;
    }
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
const duplicateCanonicals = [...duplicateCanonicalMap.entries()].filter(([, urls]) => urls.length > 1);

const redirectTargetErrors = [];
for (const { from, to } of redirectMap) {
  const targetSlug = to.split('/').filter(Boolean).pop();
  if (!postSlugs.includes(targetSlug)) redirectTargetErrors.push({ from, to });
}

const redirectStubErrors = [];
for (const { from } of redirectMap) {
  const stub = path.join(dist, 'posts', from, 'index.html');
  if (await exists(stub)) redirectStubErrors.push(`/posts/${from}/`);
}

const postSources = await postSourceMap();

const legacyNetworkErrors = [];
for (const slug of NETWORK_CHECK_SLUGS) {
  const info = postSources.get(slug);
  if (!info) {
    legacyNetworkErrors.push(`missing file: ${slug}`);
    continue;
  }
  const body = info.source;
  for (const heading of LEGACY_NETWORK_SUBHEADINGS) {
    if (body.includes(heading)) {
      legacyNetworkErrors.push(`${slug}: legacy heading "${heading}"`);
    }
  }
}

const internalOldUrlInSource = [];
const oldUrlPattern = /\/posts\/([a-z0-9-]+)\//gi;
for (const postSource of postSources.values()) {
  const body = postSource.source;
  const matches = [...body.matchAll(oldUrlPattern)].map((m) => m[0]);
  for (const match of new Set(matches)) {
    if (redirectFromPaths.has(match)) internalOldUrlInSource.push({ post: 'source-of-' + (postSource.draft ? 'draft' : 'public'), link: match });
  }
}

for (const file of ['components/Header.astro', 'components/Footer.astro', 'components/BaseLayout.astro']) {
  const full = path.join(srcDir, file);
  if (!(await exists(full))) continue;
  const content = await read(full);
  if (/coupons\/|\/coupons|쿠폰/.test(content)) {
    noindexErrors.push(`coupon link remnant in ${file}`);
  }
}

const networkFileChecks = {};
for (const slug of NETWORK_CHECK_SLUGS) {
  const info = postSources.get(slug);
  networkFileChecks[slug] = info ? { exists: true, draft: info.draft, updated: /^updated:\s*\S+/m.test(info.source) ? true : false, h1: /^#\s/m.test(info.source) } : { exists: false };
}

const affiliateDisclosureErrors = [];
for (const [slug, info] of postSources) {
  const body = info.source;
  if (body.includes('affiliate-disclosure') && !/ads-partners\.coupang\.com|link\.coupang\.com|coupa\.ng/.test(body)) {
    affiliateDisclosureErrors.push(slug);
  }
}

const workerRedirectErrors = [];
if (await exists(workerFile)) {
  const worker = await read(workerFile);
  const workerPaths = [...worker.matchAll(/['"](\/posts\/[a-z0-9-]+)['"]\s*:\s*['"](\/posts\/[^'"]+)['"]/g)];
  const workerSet = new Set(workerPaths.map((m) => m[1]));
  for (const { from } of redirectMap) {
    const key = `/posts/${from}`;
    if (!workerSet.has(key)) workerRedirectErrors.push(`missing in worker: ${key}`);
  }
  for (const match of workerPaths) {
    const targetSlug = match[2].split('/').filter(Boolean).pop();
    if (!postSlugs.includes(targetSlug)) workerRedirectErrors.push(`worker target missing: ${match[2]}`);
  }
} else {
  workerRedirectErrors.push('worker/redirect.js not found. Run npm run redirects:generate');
}

const report = {
  publicPostCount: postUrls.length,
  sitemapUrlCount: sitemapUrls.length,
  missingPostUrls,
  isolatedPostUrls,
  noindexErrors,
  canonicalMismatchErrors,
  brokenInternalLinks,
  redirectLinkErrors,
  redirectTargetErrors,
  redirectStubErrors,
  workerRedirectErrors,
  legacyNetworkErrors,
  internalOldUrlInSource,
  affiliateDisclosureErrors,
  sitemap404Urls,
  duplicateTitles,
  duplicateDescriptions,
  duplicateCanonicals,
  structuredDataPostCount,
  networkFileChecks,
  robotsExists: await exists(path.join(dist, 'robots.txt')),
  sitemapExists: await exists(path.join(dist, 'sitemap.xml'))
};

const summary = {
  publicPostCount: report.publicPostCount,
  sitemapUrlCount: report.sitemapUrlCount,
  missingPostCount: report.missingPostUrls.length,
  isolatedPostCount: report.isolatedPostUrls.length,
  noindexOrCanonicalErrorCount: report.noindexErrors.length + report.canonicalMismatchErrors.length,
  brokenInternalLinkCount: report.brokenInternalLinks.length,
  redirectLinkCount: report.redirectLinkErrors.length,
  redirectTargetErrorCount: report.redirectTargetErrors.length,
  redirectStubCount: report.redirectStubErrors.length,
  workerRedirectErrorCount: report.workerRedirectErrors.length,
  legacyNetworkErrorCount: report.legacyNetworkErrors.length,
  internalOldUrlInSourceCount: report.internalOldUrlInSource.length,
  affiliateDisclosureErrorCount: report.affiliateDisclosureErrors.length,
  sitemap404Count: report.sitemap404Urls.length,
  duplicateTitleCount: report.duplicateTitles.length,
  duplicateDescriptionCount: report.duplicateDescriptions.length,
  duplicateCanonicalCount: report.duplicateCanonicals.length,
  structuredDataPostCount: report.structuredDataPostCount,
  robotsExists: report.robotsExists,
  sitemapExists: report.sitemapExists
};

console.log(JSON.stringify(summary, null, 2));
await fs.writeFile(path.join(root, 'seo-check-report.json'), JSON.stringify(report, null, 2), 'utf8');

const hasFailure =
  report.missingPostUrls.length ||
  report.isolatedPostUrls.length ||
  report.noindexErrors.length ||
  report.canonicalMismatchErrors.length ||
  report.brokenInternalLinks.length ||
  report.redirectLinkErrors.length ||
  report.redirectTargetErrors.length ||
  report.redirectStubErrors.length ||
  report.workerRedirectErrors.length ||
  report.legacyNetworkErrors.length ||
  report.internalOldUrlInSource.length ||
  report.affiliateDisclosureErrors.length ||
  report.sitemap404Urls.length ||
  !report.robotsExists ||
  !report.sitemapExists;

if (hasFailure) {
  process.exitCode = 1;
}