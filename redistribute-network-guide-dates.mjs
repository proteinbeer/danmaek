import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const postsDir = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\src\\content\\posts';

const slugs = readdirSync(postsDir)
  .filter(f => f.startsWith('network-') && f.endsWith('.md'))
  .map(f => f.replace(/\.md$/, ''))
  .sort();

if (slugs.length !== 30) {
  console.error('Expected 30 network posts, found', slugs.length);
  process.exit(1);
}

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const dates = ['2026-08-21', '2026-08-22', '2026-08-23', '2026-08-24', '2026-08-25', '2026-08-26', '2026-08-27'];
// 7 dates. 30 posts -> 4 x 5 + 2 x 5 = 30 (5 dates x 4, 2 dates x 5)
const counts = [4, 4, 4, 4, 4, 5, 5];

const assignments = [];
const shuffledDates = shuffle(dates);
const shuffledCounts = shuffle(counts);
for (let d = 0; d < shuffledDates.length; d++) {
  for (let c = 0; c < shuffledCounts[d]; c++) {
    assignments.push(shuffledDates[d]);
  }
}

const shuffledSlugs = shuffle(slugs);

let failed = [];
for (let i = 0; i < shuffledSlugs.length; i++) {
  const slug = shuffledSlugs[i];
  const file = join(postsDir, `${slug}.md`);
  const raw = readFileSync(file, 'utf8');
  const newDate = assignments[i];
  const updated = raw.replace(/^date:\s*2026-08-01$/m, `date: ${newDate}`)
                     .replace(/^updated:\s*2026-08-01$/m, `updated: ${newDate}`);
  if (raw === updated) failed.push(slug);
  writeFileSync(file, updated, 'utf8');
  console.log(`${slug}: 2026-08-01 -> ${newDate}`);
}

console.log('\n=== Date distribution ===');
const dist = {};
assignments.forEach(d => dist[d] = (dist[d] || 0) + 1);
Object.entries(dist).sort().forEach(([d, n]) => console.log(`${d}: ${n}`));

if (failed.length) console.log('\nFAILED to update:', failed);