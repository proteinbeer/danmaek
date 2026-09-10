import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const postsDir = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\src\\content\\posts';

const slugs = [
  'ps5-game-download-stuck', 'ps5-game-lock-icon', 'ps5-restore-licenses',
  'ps5-console-sharing', 'ps5-ps4-to-ps5-upgrade', 'ps5-save-transfer',
  'ps5-remote-play', 'ps5-share-play', 'ps5-party-voice-chat', 'ps5-discord-voice',
  'ps5-3d-audio-headphones', 'ps5-tv-3d-audio', 'ps5-audio-focus',
  'ps5-hdmi-black-screen', 'ps5-hdmi-device-link', 'ps5-safe-mode',
  'ps5-clear-cache-rebuild-database', 'ps5-game-crash-freeze', 'ps5-disc-read-error',
  'ps5-dlc-not-showing', 'ps5-nat-type', 'ps5-wifi-disconnect',
  'ps5-lan-disconnected', 'ps5-slow-download', 'ps5-capture-upload',
  'ps5-trophy-capture', 'ps5-accessibility', 'psn-online-id-change',
  'ps5-child-account-parental', 'ps5-factory-reset-backup'
];

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const dates = [];
for (let day = 22; day <= 31; day++) dates.push(`2026-08-${String(day).padStart(2, '0')}`);
dates.push('2026-09-01');
// 11 dates. 30 posts -> 8 dates x 3 post, 3 dates x 2 post
const counts = [...Array(8).fill(3), ...Array(3).fill(2)];
const shuffledDates = shuffle(dates);

const assignments = [];
const shuffledCounts = shuffle(counts);
let idx = 0;
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