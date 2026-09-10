import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const postsDir = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\src\\content\\posts';

const slugs = [
  'switch2-microsd-express-not-recognized', 'switch2-storage-move-internal-microsd',
  'switch2-game-key-card-download', 'switch2-edition-upgrade-pack',
  'switch2-virtual-game-card-second-console', 'switch2-virtual-game-card-family-lending',
  'switch2-online-license-vs-virtual-card', 'switch2-download-game-wont-start',
  'switch-to-switch2-server-transfer', 'switch2-old-sd-screenshot-import',
  'switch2-user-profiles-save-data', 'switch2-download-code-region-error',
  'switch2-parental-purchase-restriction', 'switch2-parental-playtime-limit',
  'switch2-gamechat-voice-setup', 'switch2-gamechat-camera-setup',
  'switch2-bluetooth-audio-no-mic', 'switch2-bluetooth-audio-lag-5ghz',
  'switch2-tv-no-signal', 'switch2-old-charger-tv-mode',
  'switch2-tv-4k-120-hdr-setup', 'switch2-pro-controller-pairing',
  'switch2-old-joycon-compatibility', 'switch2-button-mapping-glgr',
  'switch2-screenshot-video-pc-transfer', 'switch2-storage-cleanup-archive',
  'switch2-system-update-failure', 'switch2-usb-camera-compatibility',
  'switch2-dock-lan-network', 'switch2-battery-90-charge-adapter'
];

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const dates = ['2026-08-21', '2026-08-22', '2026-08-23'];
// 3 dates. 30 posts -> 10 per date
const counts = [10, 10, 10];

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