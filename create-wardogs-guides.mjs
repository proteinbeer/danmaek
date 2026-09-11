import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const src = 'C:\\Users\\Proteinbeer\\Downloads\\danmaek_wardogs_guides_20_20260910_final';
const out = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\src\\content\\posts';

const files = [
  { file: '01_wardogs_system_requirements.txt', slug: 'wardogs-system-requirements', tags: ['워독스', 'WARDOGS', '시스템 요구 사양', '권장 사양', '60FPS'] },
  { file: '02_wardogs_fps_settings.txt', slug: 'wardogs-fps-settings', tags: ['워독스', 'WARDOGS', 'FPS', '그래픽 설정', '업스케일링'] },
  { file: '03_wardogs_stutter.txt', slug: 'wardogs-stutter', tags: ['워독스', 'WARDOGS', '끊김', '스터터', '프레임타임'] },
  { file: '04_wardogs_launch_error.txt', slug: 'wardogs-launch-error', tags: ['워독스', 'WARDOGS', '실행 오류', '안티 치트', '스팀'] },
  { file: '05_wardogs_bsod_anticheat.txt', slug: 'wardogs-bsod-anticheat', tags: ['워독스', 'WARDOGS', '블루스크린', '안티 치트', '커널 드라이버'] },
  { file: '06_wardogs_server_connection.txt', slug: 'wardogs-server-connection', tags: ['워독스', 'WARDOGS', '서버 접속', '연결 오류', '네트워크'] },
  { file: '07_wardogs_ping.txt', slug: 'wardogs-ping', tags: ['워독스', 'WARDOGS', '핑', '지연 시간', '네트워크'] },
  { file: '08_wardogs_packet_loss.txt', slug: 'wardogs-packet-loss', tags: ['워독스', 'WARDOGS', '패킷 손실', '순간이동', '네트워크'] },
  { file: '09_wardogs_voice_chat.txt', slug: 'wardogs-voice-chat', tags: ['워독스', 'WARDOGS', '음성 채팅', '근접 보이스', '마이크'] },
  { file: '10_wardogs_beginner.txt', slug: 'wardogs-beginner-tips', tags: ['워독스', 'WARDOGS', '초보자', '입문', '캐시 경제'] },
  { file: '11_wardogs_make_money.txt', slug: 'wardogs-make-money', tags: ['워독스', 'WARDOGS', '돈 버는 방법', '캐시', '팀플레이'] },
  { file: '12_wardogs_loadout_cash.txt', slug: 'wardogs-loadout-cash', tags: ['워독스', 'WARDOGS', '로드아웃', '장비 구매', '캐시'] },
  { file: '13_wardogs_three_teams.txt', slug: 'wardogs-three-teams', tags: ['워독스', 'WARDOGS', '3팀 전투', '전선', '멀티팀'] },
  { file: '14_wardogs_control_zone.txt', slug: 'wardogs-control-zone', tags: ['워독스', 'WARDOGS', '컨트롤 존', '거점', '승리 조건'] },
  { file: '15_wardogs_hot_zone.txt', slug: 'wardogs-hot-zone', tags: ['워독스', 'WARDOGS', '핫존', '현금 보상', '위험 관리'] },
  { file: '16_wardogs_vehicle_guide.txt', slug: 'wardogs-vehicle-guide', tags: ['워독스', 'WARDOGS', '차량', '탱크', '수송'] },
  { file: '17_wardogs_building.txt', slug: 'wardogs-building', tags: ['워독스', 'WARDOGS', '건설', '전진기지', '방어'] },
  { file: '18_wardogs_destruction.txt', slug: 'wardogs-destruction', tags: ['워독스', 'WARDOGS', '파괴', '환경 파괴', '동선'] },
  { file: '19_wardogs_sniper.txt', slug: 'wardogs-sniper-guide', tags: ['워독스', 'WARDOGS', '저격수', '길리 슈트', '장거리'] },
  { file: '20_wardogs_early_access.txt', slug: 'wardogs-early-access-guide', tags: ['워독스', 'WARDOGS', '얼리 액세스', '구매 기준', '가격'] },
];

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

const image = {
  src: '/assets/posts/guide-images/wardogs-2026-01.jpg',
  alt: '워독스(WARDOGS) 100인 3팀 전쟁 게임 대표 이미지',
  width: '1280',
  height: '720'
};

const dedupeConsecutive = (arr) => {
  const result = [];
  for (const item of arr) {
    if (result.length === 0 || result[result.length - 1] !== item) {
      result.push(item);
    }
  }
  return result;
};

for (let i = 0; i < files.length; i++) {
  const info = files[i];
  const raw = readFileSync(join(src, info.file), 'utf8');
  const lines = raw.split(/\r?\n/);

  const title = lines[0].trim();

  let introEnd = lines.findIndex(l => /^1\.\s/.test(l.trim()));
  if (introEnd === -1) introEnd = lines.length;
  const intro = dedupeConsecutive(lines.slice(1, introEnd).map(l => l.trim()).filter(l => l)).join('\n\n');

  const descMatch = intro.split('\n\n')[0] || title;
  const description = descMatch.length > 140 ? descMatch.slice(0, 137) + '...' : descMatch;

  const sections = [];
  let currentSection = null;
  for (let j = introEnd; j < lines.length; j++) {
    const trimmed = lines[j].trim();
    const secMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
    if (secMatch) {
      if (currentSection) sections.push(currentSection);
      currentSection = { title: secMatch[2], paragraphs: [] };
    } else if (currentSection && trimmed) {
      currentSection.paragraphs.push(trimmed);
    }
  }
  if (currentSection) sections.push(currentSection);

  const contentSections = sections.slice(0, 6);

  let body = '';
  body += '<p class="affiliate-disclosure">\n  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.\n</p>\n\n';
  body += intro + '\n\n';
  body += `<img class="post-landscape-image" src="${image.src}" alt="${image.alt}" width="${image.width}" height="${image.height}" loading="lazy" decoding="async" />\n\n`;

  contentSections.forEach((sec, idx) => {
    body += `## ${idx + 1}. ${sec.title}\n\n`;
    const paras = dedupeConsecutive(sec.paragraphs);
    body += paras.join('\n\n') + '\n\n';
    if (idx === 1 || idx === 3 || idx === 5) {
      body += banner + '\n\n';
    }
  });

  body = body.trimEnd() + '\n';

  const date = `2026-09-${String(11 + i).padStart(2, '0')}`;

  const fm = `---
title: "${title}"
description: "${description}"
date: ${date}
updated: ${date}
category: "가이드"
subcategory: "워독스"
tags:
${info.tags.map(t => `  - "${t}"`).join('\n')}
image: "${image.src}"
imageAlt: "${image.alt}"
imageWidth: 1280
imageHeight: 720
hideHeroImage: true
hideDescription: true
---
`;

  const full = fm + '\n' + body;
  writeFileSync(join(out, `${info.slug}.md`), full, 'utf8');
  console.log(`Created: ${info.slug}.md (${contentSections.length} sections, date: ${date})`);
}

console.log(`\nDone! Created ${files.length} wardogs guide posts.`);