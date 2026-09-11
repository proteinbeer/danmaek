import { writeFileSync, readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const outDir = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\public\\assets\\posts\\news-images';
const postsOut = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\src\\content\\posts';
const txtDir = 'C:\\Users\\Proteinbeer\\Downloads\\danmaek_news_25_20260911';

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';

const slugOrder = [
  'wardogs-launch-servers', 'ea-savvy-merger-2026', 'early-access-meaning-2026', 'graphics-arms-race-2026',
  'control-resonant-requirements-2026', 'rtx5090-8pin-mod-2026', 'dlss5-desktop-2026', 'vr-shipments-down-2026',
  'fruit-fly-doom-2026', 'tsmc-august-revenue-2026', 'finalmouse-latency-2026', 'google-tablet-again-2026',
  'prime-video-lipsync-2026', 'edge-ai-review-2026', 'robot-protest-poland-2026', 'lg-smart-tv-privacy-2026',
  'switzerland-microsoft-exit-2026', 'openai-navier-stokes-2026', 'apple-a20-pro-2026', 'dmatrix-nvlink-2026',
  'ai-debt-boom-2026', 'ai-datacenter-dotcom-2026', 'asml-large-masks-2026', 'tesla-cybercab-joystick-2026',
  'corsair-tc80-chair-2026',
];

const txtFiles = readdirSync(txtDir).filter((f) => /\.txt$/i.test(f)).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

const posts = slugOrder.map((slug, i) => {
  const fileText = readFileSync(join(txtDir, txtFiles[i]), 'utf8');
  const m = fileText.match(/https?:\/\/[^\s)]+/);
  const url = m ? m[0].replace(/[.,;:!?]+$/, '') : null;
  return { slug, url };
});

console.log('Loaded URLs:');
for (const p of posts) console.log(`  ${p.slug} -> ${p.url || 'MISSING'}`);

function absolute(base, maybe) {
  if (!maybe) return null;
  let t = maybe.trim();
  t = t.replace(/&amp;/g, '&').replace(/&#038;/g, '&');
  if (/^https?:\/\//i.test(t)) return t;
  if (t.startsWith('//')) return 'https:' + t;
  if (t.startsWith('/')) return new URL(t, base).toString();
  return new URL(t, base).toString();
}

async function fetchText(url) {
  const uas = [
    UA,
    'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  ];
  for (const ua of uas) {
    try {
      const res = await fetch(url, { headers: { 'user-agent': ua, 'accept-language': 'en-US,en;q=0.9', accept: 'text/html,application/xhtml+xml' }, redirect: 'follow', signal: AbortSignal.timeout(20000) });
      if (res.ok) return { html: await res.text(), status: res.status };
      if (res.status !== 401 && res.status !== 403) return { html: null, status: res.status };
      continue;
    } catch (e) {
      return { html: null, error: String(e.message || e) };
    }
  }
  return { html: null, status: 401 };
}

function extractOgImage(html, base) {
  const metas = [...html.matchAll(/<meta[^>]+(?:property|name)=["'](?:og:image(?::secure_url)?|twitter:image(?:src)?)["'][^>]*>/gi)].map((m) => m[0]);
  for (const meta of metas) {
    const content = meta.match(/content=["']([^"']+)["']/i);
    if (content) {
      const abs = absolute(base, content[1]);
      if (abs) return abs;
    }
  }
  // first <img> inside article/card as a fallback
  const imgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map((m) => m[1]);
  for (const src of imgs) {
    const abs = absolute(base, src);
    if (abs && /\.(?:jpe?g|png|webp|avif)(?:\?|$)/i.test(abs)) return abs;
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
  } catch (e) {
    return { ok: false, error: String(e.message || e) };
  }
}

async function waybackOgImage(url) {
  for (let i = 0; i < 4; i++) {
    try {
      const r = await fetch('https://archive.org/wayback/available?url=' + encodeURIComponent(url) + '&timestamp=20260912', { signal: AbortSignal.timeout(15000) });
      if (r.status === 429) { await new Promise((s) => setTimeout(s, 12000)); continue; }
      const j = await r.json();
      const snap = j?.archived_snapshots?.closest?.url;
      if (!snap) return { snap: null };
      await new Promise((s) => setTimeout(s, 3000));
      const page = await fetch(snap, { headers: { 'user-agent': UA }, redirect: 'follow', signal: AbortSignal.timeout(25000) });
      if (!page.ok) return { snap: null };
      const html = await page.text();
      const img = extractOgImage(html, snap);
      return { snap, img };
    } catch (e) {
      if (i === 3) return { snap: null, error: String(e.message || e) };
      await new Promise((s) => setTimeout(s, 8000));
    }
  }
  return { snap: null };
}

const target = process.argv.slice(2);

(async () => {
  for (const p of posts) {
    if (target.length && !target.includes(p.slug)) continue;
    let { html, status, error } = await fetchText(p.url);
    if (!html && (status === 401 || status === 403)) {
      const wb = await waybackOgImage(p.url);
      html = wb.snap ? '<tmp>' : null;
      if (wb.snap && wb.img) {
        const img = wb.img;
        const mime = img.match(/\.(jpe?g|png|webp|avif|gif)(?:\?|$)/i);
        const ext = mime ? (mime[1] === 'jpeg' ? 'jpg' : mime[1].toLowerCase()) : 'jpg';
        const dest = join(outDir, `${p.slug}-01.${ext}`);
        const dl = await download(img, dest);
        if (!dl.ok) {
          console.log(`DLFAIL ${p.slug} [wb] ${img.slice(0, 110)} -> ${dl.status || dl.error}`);
          continue;
        }
        const mdPath = join(postsOut, `${p.slug}.md`);
        const md = readFileSync(mdPath, 'utf8');
        const next = md.replace(/^image: .*$/m, `image: "/assets/posts/news-images/${p.slug}-01.${ext}"`);
        if (next !== md) writeFileSync(mdPath, next);
        console.log(`OK ${p.slug} [wayback] <- ${img.slice(0, 110)} [${dl.size} bytes] as .${ext}`);
        continue;
      }
      console.log(`SKIP ${p.slug} [wayback unavailable: ${wb.snap || 'no snap'}]`); continue;
    }
    if (!html) { console.log(`SKIP ${p.slug} fetch fail: status=${status} err=${error || ''}`); continue; }
    const img = extractOgImage(html, p.url);
    if (!img) { console.log(`NOIMG ${p.slug} (status=${status})`); continue; }
    const mime = img.match(/\.(jpe?g|png|webp|avif|gif)(?:\?|$)/i);
    const ext = mime ? (mime[1] === 'jpeg' ? 'jpg' : mime[1].toLowerCase()) : 'jpg';
    const dest = join(outDir, `${p.slug}-01.${ext}`);
    const dl = await download(img, dest);
    if (!dl.ok) { console.log(`DLFAIL ${p.slug} ${img} -> ${dl.status || dl.error}`); continue; }
    // update frontmatter
    const mdPath = join(postsOut, `${p.slug}.md`);
    const md = readFileSync(mdPath, 'utf8');
    const next = md.replace(/^image: .*$/m, `image: "/assets/posts/news-images/${p.slug}-01.${ext}"`);
    if (next !== md) writeFileSync(mdPath, next);
    console.log(`OK ${p.slug} <- ${img} [${dl.size} bytes] as .${ext}`);
  }
})();