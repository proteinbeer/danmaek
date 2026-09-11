import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

const outDir = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\public\\assets\\posts\\news-images';
const postsOut = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\src\\content\\posts';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';

function absolute(base, maybe) {
  if (!maybe) return null;
  let t = maybe.trim().replace(/&amp;/g, '&').replace(/&#038;/g, '&').replace(/&quot;/g, '"');
  if (/^https?:\/\//i.test(t)) return t;
  if (t.startsWith('//')) return 'https:' + t;
  try { return new URL(t, base).toString(); } catch { return null; }
}

async function fetchText(url) {
  for (const ua of [UA, 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)']) {
    try {
      const res = await fetch(url, { headers: { 'user-agent': ua, 'accept-language': 'en-US,en;q=0.9' }, redirect: 'follow', signal: AbortSignal.timeout(20000) });
      if (res.ok) return { html: await res.text(), status: res.status };
      if (res.status !== 401 && res.status !== 403) return { html: null, status: res.status };
    } catch (e) {
      return { html: null, error: String(e.message || e) };
    }
  }
  return { html: null, status: 401 };
}

function extractOgImage(html, base) {
  const metas = [...html.matchAll(/<meta[^>]+(?:property|name)=["'][^"']*(?:og:image|twitter:image)[^"']*["'][^>]*>/gi)].map((m) => m[0]);
  for (const meta of metas) {
    const c = meta.match(/content=["']([^"']+)["']/i);
    if (c) { const abs = absolute(base, c[1]); if (abs) return abs; }
  }
  const imgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map((m) => m[1]);
  for (const src of imgs) {
    const abs = absolute(base, src);
    if (abs && /\.(?:jpe?g|png|webp|avif|gif)(?:\?|$)/i.test(abs)) return abs;
  }
  return null;
}

async function download(imgUrl, dest) {
  try {
    const res = await fetch(imgUrl, { headers: { 'user-agent': UA, accept: 'image/avif,image/webp,image/*,*/*;q=0.8' }, redirect: 'follow', signal: AbortSignal.timeout(30000) });
    if (!res.ok) return { ok: false, status: res.status };
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 500) return { ok: false, status: `tiny(${buf.length})` };
    writeFileSync(dest, buf);
    return { ok: true, size: buf.length };
  } catch (e) { return { ok: false, error: String(e.message || e) }; }
}

const targets = process.argv.slice(2);
const pairs = [];
let cur = null;
for (const t of targets) {
  if (/^https?:\/\//i.test(t)) {
    if (cur) cur.urls.push(t);
  } else {
    cur = { slug: t, urls: [] };
    pairs.push(cur);
  }
}

(async () => {
  for (const { slug, urls } of pairs) {
    let done = false;
    for (const url of urls) {
      const { html, status } = await fetchText(url);
      if (!html) { console.log(`fetch fail ${slug}: ${url} (${status})`); continue; }
      const img = extractOgImage(html, url);
      if (!img) { console.log(`no og ${slug}: ${url}`); continue; }
      const mime = img.match(/\.(jpe?g|png|webp|avif|gif)(?:\?|$)/i);
      const ext = mime ? (mime[1] === 'jpeg' ? 'jpg' : mime[1].toLowerCase()) : 'jpg';
      const dest = join(outDir, `${slug}-01.${ext}`);
      const dl = await download(img, dest);
      if (!dl.ok) { console.log(`dl fail ${slug}: ${img.slice(0, 110)} (${dl.status || dl.error})`); continue; }
      const mdPath = join(postsOut, `${slug}.md`);
      const md = readFileSync(mdPath, 'utf8');
      const next = md.replace(/^image: .*$/m, `image: "/assets/posts/news-images/${slug}-01.${ext}"`);
      if (next !== md) writeFileSync(mdPath, next);
      console.log(`OK ${slug} <- ${img.slice(0, 110)} [${dl.size} bytes] .${ext}`);
      done = true;
      break;
    }
    if (!done) console.log(`FAIL ${slug} (no usable image)`);
  }
})();