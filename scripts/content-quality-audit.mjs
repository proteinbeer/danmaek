import fs from 'node:fs';
import path from 'node:path';

const postsDir = path.join(process.cwd(), 'src', 'content', 'posts');

function frontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return match ? match[1] : '';
}

function value(frontmatterText, key) {
  const match = frontmatterText.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'));
  return match ? match[1].trim().replace(/^["']|["']$/g, '') : '';
}

function bodyText(source) {
  return source.replace(/^---\r?\n[\s\S]*?\r?\n---/, '').replace(/<[^>]+>/g, ' ');
}

const rows = fs.readdirSync(postsDir)
  .filter((file) => file.endsWith('.md'))
  .map((file) => {
    const source = fs.readFileSync(path.join(postsDir, file), 'utf8');
    const fm = frontmatter(source);
    const text = bodyText(source);
    return {
      file,
      title: value(fm, 'title'),
      category: value(fm, 'category'),
      subcategory: value(fm, 'subcategory'),
      draft: /^draft:\s*true\s*$/m.test(fm),
      words: (text.match(/[가-힣A-Za-z0-9]+/g) || []).length,
      h2: (source.match(/^##\s+/gm) || []).length
    };
  });

const publicRows = rows.filter((row) => !row.draft);
const thinPublic = publicRows.filter((row) => row.words < 450);
const publicCoupons = publicRows.filter((row) => row.category === '쿠폰');
const thinPublicCoupons = publicCoupons.filter((row) => row.words < 600 || row.h2 < 4);
const byCategory = publicRows.reduce((acc, row) => {
  acc[row.category] = (acc[row.category] || 0) + 1;
  return acc;
}, {});

console.log(JSON.stringify({
  totalPosts: rows.length,
  publicPosts: publicRows.length,
  draftPosts: rows.length - publicRows.length,
  publicByCategory: byCategory,
  thinPublicCount: thinPublic.length,
  publicCouponCount: publicCoupons.length,
  thinPublicCouponCount: thinPublicCoupons.length,
  shortestPublic: [...publicRows].sort((a, b) => a.words - b.words).slice(0, 20)
}, null, 2));

if (thinPublic.length > 0 || thinPublicCoupons.length > 0) {
  process.exitCode = 1;
}
