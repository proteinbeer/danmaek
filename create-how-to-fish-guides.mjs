import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const src = 'C:\\Users\\Proteinbeer\\Downloads\\danmaek_how_to_fish_guides_25_20260911';
const out = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\src\\content\\posts';

const files = [
  { file: '01_beginner_guide.txt', slug: 'beginner-guide', tags: ['초보자 가이드', '입문', '물고기 낚시', '생존'] },
  { file: '02_fishing_basics.txt', slug: 'fishing-basics', tags: ['낚시 기본', '낚싯대', '미끼', '전투'] },
  { file: '03_money_trickshots.txt', slug: 'money-trickshots', tags: ['돈 빠르게 모으기', '돈벌이', '트릭샷', '자금 확보'] },
  { file: '04_rods_lures.txt', slug: 'rods-lures', tags: ['낚싯대 추천', '루어', '장비', '업그레이드'] },
  { file: '05_weapon_guide.txt', slug: 'weapon-guide', tags: ['무기 추천', '전투 장비', '총기', '근접 무기'] },
  { file: '06_island_progression.txt', slug: 'island-progression', tags: ['섬 진행', '등대섬', '해금 순서', '퀘스트'] },
  { file: '07_lighthouse_spider_crab.txt', slug: 'lighthouse-spider-crab', tags: ['거미게 공략', '첫 보스', '맥주캔', '등대섬'] },
  { file: '08_forest_piranha.txt', slug: 'forest-piranha', tags: ['피라냐 공략', '숲섬', '보스', '전투'] },
  { file: '09_desert_pufferfish.txt', slug: 'desert-pufferfish', tags: ['복어 공략', '사막섬', '보스', '패턴'] },
  { file: '10_rocks_tuna_albatross.txt', slug: 'rocks-tuna-albatross', tags: ['참치 공략', '알바트로스', '바위섬', '보스'] },
  { file: '11_volcano_final_boss.txt', slug: 'volcano-final-boss', tags: ['최종 보스', '화산섬', '공략', '엔딩'] },
  { file: '12_drip_variants.txt', slug: 'drip-variants', tags: ['드립 변종', '희귀 물고기', '도감', '등장 조건'] },
  { file: '13_fishipedia.txt', slug: 'fishipedia', tags: ['도감', '피쉬페디아', '수집', '희귀 어종'] },
  { file: '14_quest_items.txt', slug: 'quest-items', tags: ['퀘스트 아이템', '전리품', '재료', '보관'] },
  { file: '15_multiplayer.txt', slug: 'multiplayer', tags: ['멀티플레이', '협동', '친구', '파티'] },
  { file: '16_solo_guide.txt', slug: 'solo-guide', tags: ['혼자 하기', '1인 플레이', '솔로', '진행 순서'] },
  { file: '17_boat_radar.txt', slug: 'boat-radar', tags: ['보트', '레이더', '이동', '섬 찾기'] },
  { file: '18_grill_food.txt', slug: 'grill-food', tags: ['그릴', '요리', '음식', '체력 회복'] },
  { file: '19_gambling.txt', slug: 'gambling', tags: ['도박', '룰렛', '돈 사용', '보상'] },
  { file: '20_reel_of_fortune.txt', slug: 'reel-of-fortune', tags: ['운의 릴', '룰렛', '잭팟', '확률'] },
  { file: '21_achievements.txt', slug: 'achievements', tags: ['업적', '도전 과제', '공략', '트로피'] },
  { file: '22_bean_speedrun.txt', slug: 'bean-speedrun', tags: ['스피드런', '빠른 클리어', '루트', '단축'] },
  { file: '23_handyman.txt', slug: 'handyman', tags: ['핸디맨', '잡역부', '수리', '공략'] },
  { file: '24_steam_deck_cloud.txt', slug: 'steam-deck-cloud', tags: ['스팀 덱', '스팀 클라우드', '설정', '호환'] },
  { file: '25_pc_issues.txt', slug: 'pc-issues', tags: ['PC 문제', '프레임', '최적화', '버그'] },
];

const gameTags = ['낚시 방법', 'HOW TO FISH'];

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
  src: '/assets/posts/guide-images/how-to-fish-2026-01.jpg',
  alt: '낚시 방법(HOW TO FISH) 스팀 생존 낚시 게임 대표 이미지',
  width: '460',
  height: '215'
};

const date = '2026-08-25';

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
subcategory: "낚시 방법"
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
  const outName = `how-to-fish-${info.slug}.md`;
  writeFileSync(join(out, outName), full, 'utf8');
  console.log(`Created: ${outName} (${sections.length} sections, ${sections.filter((_, k) => k % 2 === 1).length} banners, date: ${date})`);
}

console.log(`\nDone! Created ${files.length} HOW TO FISH guide posts.`);