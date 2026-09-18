import fs from 'node:fs';
import path from 'node:path';

const txtDir = 'C:\\Users\\Proteinbeer\\Downloads\\단맥_네트워크_전면재작성_37개_2026_09_18';
const postsDir = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\src\\content\\posts';

const SLUG_MAP = {
  'network-nat-strict': 'network-strict-nat-type',
  'network-upnp-security': 'network-upnp-on-or-off',
  'network-vpn-slow': 'network-vpn-slow-internet'
};

const txtFiles = fs.readdirSync(txtDir)
  .filter(f => f.endsWith('.txt') && !f.startsWith('00_'))
  .sort();

let replaced = 0;
const notFound = [];
const draftCleared = [];

for (const txtFile of txtFiles) {
  const stem = txtFile.replace(/^\d+_/, '').replace('.txt', '');
  const slug = SLUG_MAP[stem] ?? stem;
  const mdFile = path.join(postsDir, `${slug}.md`);

  if (!fs.existsSync(mdFile)) {
    notFound.push({ txtFile, slug });
    continue;
  }

  const txtContent = fs.readFileSync(path.join(txtDir, txtFile), 'utf8');
  const txtLines = txtContent.split(/\r?\n/);
  const newTitle = txtLines[0].trim().replace(/^["']|["']$/g, '');
  const newBody = txtLines.slice(1).join('\n').trim();

  const mdContent = fs.readFileSync(mdFile, 'utf8');
  const fmMatch = mdContent.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) {
    console.log(`SKIP (no frontmatter): ${slug}.md`);
    continue;
  }

  let newFm = fmMatch[1].replace(/^title:.*$/m, `title: "${newTitle}"`);
  newFm = newFm.replace(/^updated:.*$/m, 'updated: 2026-09-18\naffiliate: false');

  if (/^draft:\s*true\s*$/m.test(newFm)) {
    newFm = newFm.replace(/^draft:\s*true\s*$/m, '');
    draftCleared.push(slug);
  }

  const newContent = `---\n${newFm}\n---\n\n${newBody}\n`;
  fs.writeFileSync(mdFile, newContent, 'utf8');
  replaced++;
  console.log(`✓ ${slug}.md → "${newTitle.slice(0, 40)}"`);
}

console.log(`\n--- Done: ${replaced} replaced, ${notFound.length} not found ---`);
if (draftCleared.length > 0) console.log('draft 제거:', draftCleared.join(', '));
if (notFound.length > 0) console.log('Not found:', JSON.stringify(notFound, null, 2));