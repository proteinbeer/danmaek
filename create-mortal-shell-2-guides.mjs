import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const src = 'C:\\Users\\Proteinbeer\\Downloads\\danmaek_mortal_shell2_guides_30_fixed_20260911';
const out = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\src\\content\\posts';

const files = [
  { file: '01_beginner_guide.txt', slug: 'beginner-guide', tags: ['초보자 가이드', '입문', '오픈월드', '셸'] },
  { file: '02_combat_guide.txt', slug: 'combat-guide', tags: ['전투 가이드', '패링', '경화', '자세'] },
  { file: '03_shells_all.txt', slug: 'all-shells', tags: ['셸 8개', '셸 정리', '획득', '목록'] },
  { file: '04_tiel_guide.txt', slug: 'tiel-guide', tags: ['티엘', '회피', '분신', '초반 셸'] },
  { file: '05_proxima_guide.txt', slug: 'proxima-guide', tags: ['프록시마', '셰터드 비컨', '초반 셸', '비교'] },
  { file: '06_eredrim_guide.txt', slug: 'eredrim-guide', tags: ['에레드림', '워든', '냉기 저항', '셸'] },
  { file: '07_genessa_guide.txt', slug: 'genessa-guide', tags: ['제네사', '분신', '세스터 세컨더스', '셸'] },
  { file: '08_late_shells.txt', slug: 'late-shells', tags: ['스메르트', '그라구', '라즐로', '사리엘'] },
  { file: '09_weapons.txt', slug: 'weapons', tags: ['근접 무기', '무기 8종', '무기 목록', '획득'] },
  { file: '10_sidearms.txt', slug: 'sidearms', tags: ['보조 무기', '보조 무기 8종', '원거리', '획득'] },
  { file: '11_tarstones.txt', slug: 'tarstones', tags: ['타르스톤', '75개', '장착', '수집'] },
  { file: '12_tarforge.txt', slug: 'tarforge', tags: ['타르포지', '강화', '재료', '업그레이드'] },
  { file: '13_healing.txt', slug: 'healing', tags: ['회복 강화', '23개', '생존', '수집'] },
  { file: '14_beacons.txt', slug: 'beacons', tags: ['비컨', '49개', '정화', '빠른 이동'] },
  { file: '15_dungeons.txt', slug: 'dungeons', tags: ['던전', '36개', '탐험', '보상'] },
  { file: '16_collectibles.txt', slug: 'collectibles', tags: ['수집품', '154개', '업적 100', '정리'] },
  { file: '17_progression_route.txt', slug: 'progression-route', tags: ['진행 순서', '보스 순서', '오픈월드', '루트'] },
  { file: '18_tar_golem.txt', slug: 'tar-golem', tags: ['타르 골렘', '첫 보스', '업적', '튜토리얼'] },
  { file: '19_magdalena.txt', slug: 'magdalena', tags: ['막달레나', '보스 공략', '화염', '글러티드 마이어'] },
  { file: '20_lost_child.txt', slug: 'lost-child', tags: ['로스트 차일드', '보스 공략', '생귀인 캐번', '패턴'] },
  { file: '21_nameless_captive.txt', slug: 'nameless-captive', tags: ['네임리스 캡티브', '패링', '7연속', '업적'] },
  { file: '22_droeg.txt', slug: 'droeg', tags: ['드뢰그', '보스 공략', '냉기 저항', '엄폐'] },
  { file: '23_hexapod.txt', slug: 'hexapod', tags: ['헥사포드', '보스 공략', '경화', '원거리'] },
  { file: '24_sir_isaac.txt', slug: 'sir-isaac', tags: ['서 아이작', '보스 공략', '2페이즈', '쌍검'] },
  { file: '25_malborn.txt', slug: 'malborn', tags: ['말본 오프스프링', '보스 공략', '제네사', '체력 막대'] },
  { file: '26_monolith.txt', slug: 'monolith', tags: ['모놀리스', '보스 공략', '레이저', '중앙 약점'] },
  { file: '27_orrem.txt', slug: 'orrem', tags: ['오렘', '보스 공략', '변형', '혈저주'] },
  { file: '28_zmey.txt', slug: 'zmey', tags: ['즈메이', '최종 보스', '우주 질병', '시드베어러'] },
  { file: '29_achievements_ngplus.txt', slug: 'achievements-ngplus', tags: ['업적', '53개', '새 게임 플러스', '플래티넘'] },
  { file: '30_pc_performance.txt', slug: 'pc-performance', tags: ['PC 사양', '최적화', '프레임', '9월 패치'] },
];

const gameTags = ['모탈 셸 2', 'Mortal Shell 2'];

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
  src: '/assets/posts/guide-images/mortal-shell-2-2026-01.jpg',
  alt: '모탈 셸 2(Mortal Shell 2) 소울라이크 액션 게임 대표 이미지',
  width: '686',
  height: '386'
};

const date = '2026-09-05';

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
  const seenParagraphs = new Set();
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

  sections.forEach((sec, idx) => {
    sec.paragraphs = sec.paragraphs.filter(p => {
      if (seenParagraphs.has(p)) return false;
      seenParagraphs.add(p);
      return true;
    });
  });

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
subcategory: "모탈 셸 2"
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
  const outName = `mortal-shell-2-${info.slug}.md`;
  writeFileSync(join(out, outName), full, 'utf8');
  console.log(`Created: ${outName} (${sections.length} sections, ${sections.filter((_, k) => k % 2 === 1).length} banners, date: ${date})`);
}

console.log(`\nDone! Created ${files.length} MORTAL SHELL 2 guide posts.`);