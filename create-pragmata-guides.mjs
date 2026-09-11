import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const src = 'C:\\Users\\Proteinbeer\\Downloads\\danmaek_pragmata_guides_30_20260911';
const out = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\src\\content\\posts';

const files = [
  { file: '01_beginner_guide.txt', slug: 'beginner-guide', tags: ['초보자 가이드', '입문', '액션 어드벤처', '캡콤'] },
  { file: '02_hacking_basics.txt', slug: 'hacking-basics', tags: ['해킹 기본', '노드', '전투', '캡콤'] },
  { file: '03_hacking_nodes.txt', slug: 'hacking-nodes', tags: ['해킹 노드', '노드 추천', '보조 장비', '캡콤'] },
  { file: '04_overdrive_guide.txt', slug: 'overdrive-guide', tags: ['오버드라이브', '전투 시스템', '타이밍', '캡콤'] },
  { file: '05_upgrade_priority.txt', slug: 'upgrade-priority', tags: ['업그레이드', '재료 우선순위', '초반 성장', '캡콤'] },
  { file: '06_firmware_updater.txt', slug: 'firmware-updater', tags: ['펌웨어 업데이터', '휴', '다이애나', '성장'] },
  { file: '07_unit_printer.txt', slug: 'unit-printer', tags: ['유닛 프린터', '영구 장비', '제작', '재료'] },
  { file: '08_weapon_system.txt', slug: 'weapon-system', tags: ['무기 시스템', '유닛 4종', '주무기', '로드아웃'] },
  { file: '09_primary_units.txt', slug: 'primary-units', tags: ['주무기', '그립 건', '펄스 카빈', '추천'] },
  { file: '10_attack_units.txt', slug: 'attack-units', tags: ['공격 유닛', '추천', '차지 피어서', '쇼크웨이브 건'] },
  { file: '11_tactical_units.txt', slug: 'tactical-units', tags: ['전술 유닛', '추천', '스테이시스 넷', '해킹 보조'] },
  { file: '12_defense_units.txt', slug: 'defense-units', tags: ['방어 유닛', '추천', '디코이', '배리어'] },
  { file: '13_best_loadout.txt', slug: 'best-loadout', tags: ['로드아웃', '추천 조합', '빌드', '초반'] },
  { file: '14_sector_guard.txt', slug: 'sector-guard', tags: ['섹터가드', '첫 보스', '공략', '보스 패턴'] },
  { file: '15_creator_boss.txt', slug: 'creator-boss', tags: ['크리에이터', '보스 공략', '난이도', '2번째 보스'] },
  { file: '16_garden_keeper.txt', slug: 'garden-keeper', tags: ['가든 키퍼', '보스 공략', '전술 유닛', '패턴'] },
  { file: '17_lunadigger.txt', slug: 'lunadigger', tags: ['루나디거', '보스 공략', '저중력', '전투'] },
  { file: '18_final_boss.txt', slug: 'final-boss', tags: ['최종 보스', '공략', '엔딩', '준비물'] },
  { file: '19_shelter_escape_hatch.txt', slug: 'shelter-escape-hatch', tags: ['쉴터', '탈출 해치', '이동', '체크포인트'] },
  { file: '20_red_zone_pure_lunum.txt', slug: 'red-zone-pure-lunum', tags: ['레드 존', '순수 루넘', '도전 콘텐츠', '자원'] },
  { file: '21_collectibles_100.txt', slug: 'collectibles-100', tags: ['수집품', '100퍼센트', '탐색', '오브젝트 스캔'] },
  { file: '22_cabin_stamp_club.txt', slug: 'cabin-stamp-club', tags: ['캐빈 스탬프 클럽', '빙고', '보상', '키'] },
  { file: '23_achievements_guide.txt', slug: 'achievements-guide', tags: ['도전 과제', '업적', '100퍼센트', '로드맵'] },
  { file: '24_new_game_plus.txt', slug: 'new-game-plus', tags: ['뉴 게임 플러스', '2회차', '엔딩 후', '진행도'] },
  { file: '25_lunatic_mode.txt', slug: 'lunatic-mode', tags: ['루나틱', '최고 난도', '회차', '하드코어'] },
  { file: '26_unknown_signal.txt', slug: 'unknown-signal', tags: ['언노운 시그널', '진엔딩', '후반 콘텐츠', '클리어'] },
  { file: '27_pc_requirements.txt', slug: 'pc-requirements', tags: ['PC 사양', '최소 사양', '권장 사양', '하드웨어'] },
  { file: '28_fps_optimization.txt', slug: 'fps-optimization', tags: ['프레임', '최적화', '그래픽 설정', '성능'] },
  { file: '29_save_backup.txt', slug: 'save-backup', tags: ['세이브', '백업', '저장 위치', '스팀 클라우드'] },
  { file: '30_switch2_guide.txt', slug: 'switch2-guide', tags: ['스위치2', '플랫폼', '콘솔', 'PC 비교'] },
];

const gameTags = ['프라그마타', 'PRAGMATA'];

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
  src: '/assets/posts/guide-images/pragmata-2026-01.jpg',
  alt: '프라그마타(PRAGMATA) 캡콤 액션 어드벤처 게임 대표 이미지',
  width: '686',
  height: '386'
};

const date = '2026-09-11';

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
subcategory: "프라그마타"
tags:
${allTags.map(t => `  - "${escapeYaml(t)}"`).join('\n')}
image: "${image.src}"
imageAlt: "${image.alt}"
imageWidth: 686
imageHeight: 386
hideHeroImage: true
hideDescription: true
---
`;

  const full = fm + '\n' + body;
  const outName = `pragmata-${info.slug}.md`;
  writeFileSync(join(out, outName), full, 'utf8');
  console.log(`Created: ${outName} (${sections.length} sections, ${sections.filter((_, k) => k % 2 === 1).length} banners, date: ${date})`);
}

console.log(`\nDone! Created ${files.length} PRAGMATA guide posts.`);