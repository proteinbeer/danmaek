import fs from 'node:fs';
import path from 'node:path';

const postsDir = path.join(process.cwd(), 'src', 'content', 'posts');

const banner = `<div style="margin: 38px 0 30px; text-align: center;">
  <div style="width: 250px; max-width: 100%; margin: 0 auto; overflow: hidden;">
<!-- COUPANG PARTNERS DYNAMIC BANNER START -->
<script src="https://ads-partners.coupang.com/g.js"></script>
<script>
\tnew PartnersCoupang.G({"id":1021110,"template":"carousel","trackingCode":"AF7638395","width":"250","height":"250","tsource":""});
</script>
<!-- COUPANG PARTNERS DYNAMIC BANNER END -->
  </div>
</div>`;

const bannerBlockRe = /\n*<div style="margin: 38px 0 30px; text-align: center;">\s*<div style="width: 250px; max-width: 100%; margin: 0 auto; overflow: hidden;">\s*<!-- COUPANG PARTNERS DYNAMIC BANNER START -->[\s\S]*?<!-- COUPANG PARTNERS DYNAMIC BANNER END -->\s*<\/div>\s*<\/div>\n*/g;

function splitFrontmatter(source) {
  const match = source.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  if (!match) return { frontmatter: '', body: source };
  return {
    frontmatter: match[0].trimEnd(),
    body: source.slice(match[0].length)
  };
}

function restoreBanners(body) {
  const cleanBody = body.replace(bannerBlockRe, '\n\n').trim();
  const lines = cleanBody.split(/\r?\n/);
  const out = [];
  let inserted = 0;
  let currentNumberedSection = null;

  const closeSection = () => {
    if (currentNumberedSection === null || currentNumberedSection % 2 !== 0) return;
    while (out.length > 0 && out[out.length - 1].trim() === '') out.pop();
    out.push('', banner, '');
    inserted += 1;
  };

  for (const line of lines) {
    const heading = line.match(/^##\s+(\d+)\./);
    if (line.startsWith('## ')) {
      closeSection();
      currentNumberedSection = null;
    }
    out.push(line);
    if (!heading) continue;
    const number = Number(heading[1]);
    currentNumberedSection = Number.isFinite(number) ? number : null;
  }

  closeSection();

  return {
    body: out.join('\n').replace(/\n{4,}/g, '\n\n\n').trim(),
    inserted
  };
}

const changed = [];
let insertedTotal = 0;

for (const file of fs.readdirSync(postsDir).filter((name) => name.endsWith('.md'))) {
  const filePath = path.join(postsDir, file);
  const source = fs.readFileSync(filePath, 'utf8');
  const { frontmatter, body } = splitFrontmatter(source);
  const result = restoreBanners(body);
  if (result.inserted === 0) continue;

  const nextSource = `${frontmatter}\n\n${result.body}\n`;
  if (nextSource === source) continue;

  fs.writeFileSync(filePath, nextSource, 'utf8');
  changed.push({ file, banners: result.inserted });
  insertedTotal += result.inserted;
}

console.log(JSON.stringify({
  changedPosts: changed.length,
  insertedBanners: insertedTotal,
  sample: changed.slice(0, 20)
}, null, 2));
