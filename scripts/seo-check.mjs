import fs from 'node:fs/promises';
import path from 'node:path';
import { RETIRED_SLUGS } from './retired-slugs.mjs';

const root = process.cwd();
const site = 'https://danmaek.com';
const dist = path.join(root, 'dist');
const postsDir = path.join(root, 'src', 'content', 'posts');
const srcDir = path.join(root, 'src');

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

const retiredPaths = new Set(RETIRED_SLUGS.map((slug) => `/posts/${slug}/`));

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
const duplicateCanonicals = [...duplicateCanonicalMap.entries()].filter(([, urls]) => urls.length > 1);

const retiredSitemapErrors = [];
const retiredRssErrors = [];
const retiredDistErrors = [];
const retiredSourceFileErrors = [];
const retiredInternalLinkErrors = [];

const rssXml = await read(path.join(dist, 'rss.xml'));
const rssItems = [...rssXml.matchAll(/<link>(.*?)<\/link>/g)].map((m) => m[1]);

for (const slug of RETIRED_SLUGS) {
  const url = `${site}/posts/${slug}/`;
  if (sitemapUrls.includes(url)) retiredSitemapErrors.push(url);
  if (rssItems.includes(url)) retiredRssErrors.push(url);
  if (await exists(path.join(dist, 'posts', slug, 'index.html'))) retiredDistErrors.push(url);
  if (await exists(path.join(postsDir, `${slug}.md`))) retiredSourceFileErrors.push(slug);
}

for (const [from, links] of outgoingInternalLinks) {
  for (const link of links) {
    if (retiredPaths.has(link)) retiredInternalLinkErrors.push({ from, link });
  }
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
    if (retiredPaths.has(match)) internalOldUrlInSource.push({ post: 'source-of-' + (postSource.draft ? 'draft' : 'public'), link: match });
  }
}

const duplicateParagraphErrors = [];
for (const [slug, info] of postSources) {
  const lines = info.source.split(/\r?\n/);
  let prev = null;
  for (let i = 0; i < lines.length; i += 1) {
    const t = lines[i].trim();
    const skip = t === '' || /^#{1,6}\s/.test(t) || /^<[^>]+>$/.test(t);
    if (skip) { if (t !== '') prev = null; continue; }
    if (t === prev) {
      duplicateParagraphErrors.push(`${slug}:${i + 1} repeated paragraph`);
    }
    prev = t;
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
for (const url of postUrls) {
  const html = htmlByUrl.get(url);
  if (!html) continue;
  const hasDisclosure = html.includes('이 게시물은 쿠팡 파트너스 활동의 일환으로');
  const hasCoupangBanner = /ads-partners\.coupang\.com/g.test(html);
  if (hasDisclosure !== hasCoupangBanner) {
    affiliateDisclosureErrors.push(`${url}: disclosure=${hasDisclosure} banner=${hasCoupangBanner}`);
  }
}

const report = {
  publicPostCount: postUrls.length,
  sitemapUrlCount: sitemapUrls.length,
  missingPostUrls,
  isolatedPostUrls,
  noindexErrors,
  canonicalMismatchErrors,
  brokenInternalLinks,
  retiredSitemapErrors,
  retiredRssErrors,
  retiredDistErrors,
  retiredSourceFileErrors,
  retiredInternalLinkErrors,
  legacyNetworkErrors,
  internalOldUrlInSource,
  duplicateParagraphErrors,
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
  retiredSitemapCount: report.retiredSitemapErrors.length,
  retiredRssCount: report.retiredRssErrors.length,
  retiredDistCount: report.retiredDistErrors.length,
  retiredSourceFileCount: report.retiredSourceFileErrors.length,
  retiredInternalLinkCount: report.retiredInternalLinkErrors.length,
  legacyNetworkErrorCount: report.legacyNetworkErrors.length,
  internalOldUrlInSourceCount: report.internalOldUrlInSource.length,
  duplicateParagraphErrorCount: report.duplicateParagraphErrors.length,
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
  report.retiredSitemapErrors.length ||
  report.retiredRssErrors.length ||
  report.retiredDistErrors.length ||
  report.retiredSourceFileErrors.length ||
  report.retiredInternalLinkErrors.length ||
  report.legacyNetworkErrors.length ||
  report.internalOldUrlInSource.length ||
  report.duplicateParagraphErrors.length ||
  report.affiliateDisclosureErrors.length ||
  report.sitemap404Urls.length ||
  !report.robotsExists ||
  !report.sitemapExists;

if (hasFailure) {
  process.exitCode = 1;
}