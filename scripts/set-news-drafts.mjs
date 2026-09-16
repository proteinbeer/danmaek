import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const postsDir = path.resolve(__dirname, '../src/content/posts');
const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'));

let updated = 0;
let skipped = 0;

for (const file of files) {
  const filePath = path.join(postsDir, file);
  const raw = fs.readFileSync(filePath, 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) continue;
  const frontmatter = match[1];
  const categoryMatch = frontmatter.match(/^category\s*:\s*["']?\s*(뉴스|가이드|쿠폰)\s*["']?\s*$/m);
  if (!categoryMatch || categoryMatch[1] !== '뉴스') continue;

  if (/^draft\s*:\s*true\s*$/m.test(frontmatter)) {
    skipped++;
    continue;
  }

  let newFrontmatter;
  if (/^draft\s*:/m.test(frontmatter)) {
    newFrontmatter = frontmatter.replace(/^draft\s*:.*$/m, 'draft: true');
  } else {
    const dateMatch = frontmatter.match(/^(date[\s\S]*)/m);
    const lines = frontmatter.split('\n');
    const draftLine = 'draft: true';
    let index = lines.findIndex((line) => /^(updated|date)\s*:/.test(line));
    if (index === -1) index = lines.findIndex((line) => /^category\s*:/.test(line));
    lines.splice(index + 1, 0, draftLine);
    newFrontmatter = lines.join('\n');
  }

  const newRaw = raw.replace(frontmatter, newFrontmatter);
  fs.writeFileSync(filePath, newRaw, 'utf8');
  updated++;
}

console.log(`news posts updated to draft: ${updated}, already draft: ${skipped}`);