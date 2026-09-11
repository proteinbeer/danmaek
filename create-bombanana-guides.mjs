import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const src = 'C:\\Users\\Proteinbeer\\Downloads\\danmaek_bombanana_guides_15_fixed_v2_20260911';
const out = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\src\\content\\posts';

const files = [
  { file: '01_beginner_guide.txt', slug: 'beginner-guide', tags: ['초보자 가이드', '입문', '협동', '폭탄 해체'] },
  { file: '02_role_choice.txt', slug: 'role-choice', tags: ['역할 추천', '장님 원숭이', '벙어리 원숭이', '귀머거리 원숭이'] },
  { file: '03_blind_monkey.txt', slug: 'blind-monkey', tags: ['장님 원숭이', '조작', '공략', '역할'] },
  { file: '04_mute_monkey.txt', slug: 'mute-monkey', tags: ['벙어리 원숭이', '설명서', '손짓', '역할'] },
  { file: '05_deaf_monkey.txt', slug: 'deaf-monkey', tags: ['귀머거리 원숭이', '중계', '지시', '역할'] },
  { file: '06_communication.txt', slug: 'communication-guide', tags: ['소통 규칙', '통신', '팀워크', '손짓'] },
  { file: '07_campaign_guide.txt', slug: 'campaign-guide', tags: ['캠페인', '30스테이지', '스토리', '진행'] },
  { file: '08_endless_mode.txt', slug: 'endless-mode', tags: ['엔들리스', '무한 모드', '웨이브', '기록'] },
  { file: '09_custom_mode.txt', slug: 'custom-mode', tags: ['커스텀 모드', '난이도', '타이머', '연습'] },
  { file: '10_multiplayer_matchmaking.txt', slug: 'multiplayer-matchmaking', tags: ['매치메이킹', '친구 초대', '멀티', '매칭'] },
  { file: '11_voice_chat_fix.txt', slug: 'voice-chat-fix', tags: ['음성 채팅', '마이크', '오류 해결', '설정'] },
  { file: '12_puzzle_modules.txt', slug: 'puzzle-modules', tags: ['퍼즐 모듈', '카오스 모듈', '공략', '14종'] },
  { file: '13_environment_hazards.txt', slug: 'environment-hazards', tags: ['정전', '환경 방해', '대응', '팀워크'] },
  { file: '14_system_requirements.txt', slug: 'system-requirements', tags: ['사양', '최소 사양', '권장 사양', '스팀 덱'] },
  { file: '15_crash_patch.txt', slug: 'crash-patch', tags: ['튕김', '실행 오류', '패치', '해결'] },
];

const gameTags = ['봄바나나', 'BOMBANANA'];

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
  src: '/assets/posts/guide-images/bombanana-2026-01.jpg',
  alt: '봄바나나(BOMBANANA) 스팀 3인 협동 폭탄 해체 게임 대표 이미지',
  width: '460',
  height: '215'
};

const date = '2026-09-09';

const dedupeConsecutive = (arr) => {
  const result = [];
  for (const item of arr) {
    if (result.length === 0 || result[result.length - 1] !== item) {
      result.push(item);
    }
  }
  return result;
};

const escapeYaml = (s) => s.replace(/"/g, '\\"');

for (let i = 0; i < files.length; i++) {
  const info = files[i];
  const raw = readFileSync(join(src, info.file), 'utf8');
  const lines = raw.split(/\r?\n/);

  const title = lines[0].trim();

  let introEnd = lines.findIndex(l => /^1\.\s/.test(l.trim()));
  if (introEnd === -1) introEnd = lines.length;
  const intro = dedupeConsecutive(
    lines.slice(1, introEnd)
      .map(l => l.trim())
      .filter(l => l && l !== '메인 이미지 링크' && !/^https?:\/\//.test(l))
  ).join('\n\n');

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

  let body = '';
  body += '<p class="affiliate-disclosure">\n  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.\n</p>\n\n';
  body += intro + '\n\n';
  body += `<img class="post-landscape-image" src="${image.src}" alt="${image.alt}" width="${image.width}" height="${image.height}" loading="lazy" decoding="async" />\n\n`;

  sections.forEach((sec, idx) => {
    body += `## ${idx + 1}. ${sec.title}\n\n`;
    const paras = dedupeConsecutive(sec.paragraphs);
    body += paras.join('\n\n') + '\n\n';
    if (idx % 2 === 1) {
      body += banner + '\n\n';
    }
  });

  body = body.trimEnd() + '\n';

  const allTags = [...gameTags, ...info.tags];

  const fm = `---
title: "${escapeYaml(title)}"
description: "${escapeYaml(description)}"
date: ${date}
updated: ${date}
category: "가이드"
subcategory: "봄바나나"
tags:
${allTags.map(t => `  - "${escapeYaml(t)}"`).join('\n')}
image: "${image.src}"
imageAlt: "${image.alt}"
imageWidth: 460
imageHeight: 215
hideHeroImage: true
hideDescription: true
---
`;

  const full = fm + '\n' + body;
  const outName = `bombanana-${info.slug}.md`;
  writeFileSync(join(out, outName), full, 'utf8');
  console.log(`Created: ${outName} (${sections.length} sections, ${sections.filter((_, k) => k % 2 === 1).length} banners, date: ${date})`);
}

console.log(`\nDone! Created ${files.length} BOMBANANA guide posts.`);