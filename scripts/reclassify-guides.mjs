import fs from 'node:fs';
import path from 'node:path';

const postsDir = path.join(process.cwd(), 'src', 'content', 'posts');

const IT_SUBCATEGORIES = new Set(['윈도우 11', 'PC·하드웨어', '네트워크', '주변기기', '워드프레스']);

const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'));

let changed = 0;
const report = {};

for (const file of files) {
  const fullPath = path.join(postsDir, file);
  let source = fs.readFileSync(fullPath, 'utf8');
  const fmMatch = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) continue;
  const fm = fmMatch[1];
  const categoryMatch = fm.match(/^category\s*:\s*["']?\s*(뉴스|가이드|쿠폰)\s*["']?\s*$/m);
  const subcategoryMatch = fm.match(/^subcategory\s*:\s*["']?\s*(.*?)\s*["']?\s*$/m);
  if (!categoryMatch || categoryMatch[1] !== '가이드') continue;
  const sub = subcategoryMatch ? subcategoryMatch[1].replace(/^["']|["']$/g, '') : '';
  const newCategory = IT_SUBCATEGORIES.has(sub) ? 'IT' : '게임';
  const oldLine = categoryMatch[0];
  const newLine = oldLine.replace(/가이드/, newCategory);
  source = source.replace(oldLine, newLine);
  fs.writeFileSync(fullPath, source, 'utf8');
  if (!report[sub]) report[sub] = { toIT: 0, toGame: 0 };
  report[sub][newCategory === 'IT' ? 'toIT' : 'toGame'] += 1;
  changed += 1;
}

console.log('changed:', changed);
console.log(JSON.stringify(report, null, 2));