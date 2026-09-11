import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const src = 'C:\\Users\\Proteinbeer\\Downloads\\danmaek_starwars_zero_company_guides_25_20260911';
const out = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\src\\content\\posts';

const files = [
  { file: '01_beginner_guide.txt', slug: 'beginner-guide', tags: ['초보자 가이드', '입문', '전술 게임', '스타워즈'] },
  { file: '02_combat_basics.txt', slug: 'combat-basics', tags: ['전투 가이드', '기본기', '엄폐', '스타워즈'] },
  { file: '03_ap_advantage.txt', slug: 'ap-advantage', tags: ['행동 포인트', '어드밴티지', '자원 관리', '전투'] },
  { file: '04_cover_hit_chance.txt', slug: 'cover-hit-chance', tags: ['엄폐', '명중률', '위치 선정', '측면'] },
  { file: '05_overwatch_guide.txt', slug: 'overwatch-guide', tags: ['오버워치', '대기 사격', '전장 통제', '샤프슈터'] },
  { file: '06_start_specialization.txt', slug: 'start-specialization', tags: ['시작 특화', '추천', '솔저', '어설트'] },
  { file: '07_weapon_guide.txt', slug: 'weapon-guide', tags: ['무기 추천', '블라스터', '리피터', '행동 포인트'] },
  { file: '08_hawks_guide.txt', slug: 'hawks-guide', tags: ['호크스', '주인공', '커스터마이즈', '분대 운영'] },
  { file: '09_squad_composition.txt', slug: 'squad-composition', tags: ['분대 조합', '역할 분담', '메딕', '추천'] },
  { file: '10_specializations_overview.txt', slug: 'specializations-overview', tags: ['특화 정리', '8가지 특화', '어설트', '헤비'] },
  { file: '11_operations_vs_missions.txt', slug: 'operations-vs-missions', tags: ['작전', '미션', '인텔', '은하 지도'] },
  { file: '12_bonds_guide.txt', slug: 'bonds-guide', tags: ['유대 시스템', '시너지', '크로스 트레이닝', '성장'] },
  { file: '13_permadeath_guide.txt', slug: 'permadeath-guide', tags: ['영구 사망', '설정', '메딕', '회차 플레이'] },
  { file: '14_intel_cycle_guide.txt', slug: 'intel-cycle-guide', tags: ['인텔', '사이클', '자원 운영', '우선순위'] },
  { file: '15_early_mistakes.txt', slug: 'early-mistakes', tags: ['초반 실수', '초보자 팁', '실수 줄이기', '전투'] },
  { file: '16_clone_team_guide.txt', slug: 'clone-team-guide', tags: ['클론 분대', '클론 트루퍼', '델럭스', '코스메틱'] },
  { file: '17_playtime_and_planets.txt', slug: 'playtime-and-planets', tags: ['플레이타임', '볼륨', '행성', '분량'] },
  { file: '18_pc_requirements.txt', slug: 'pc-requirements', tags: ['시스템 요구 사항', '최소 사양', '권장 사양', '하드웨어'] },
  { file: '19_troubleshooting.txt', slug: 'troubleshooting', tags: ['실행 오류', '검은 화면', '해결 방법', 'EA 앱'] },
  { file: '20_patch_1_1.txt', slug: 'patch-1-1', tags: ['1.1 패치', '명중률', '오버워치', '업데이트'] },
  { file: '21_switch_steamdeck.txt', slug: 'switch-steamdeck', tags: ['닌텐도 스위치', '스팀 덱', '플랫폼', '휴대용'] },
  { file: '22_deluxe_edition.txt', slug: 'deluxe-edition', tags: ['디럭스 에디션', '코스메틱', '구매 가이드', '업그레이드'] },
  { file: '23_tel_rea_guide.txt', slug: 'tel-rea-guide', tags: ['텔 레아', '제다이', '파다완', '오퍼레이터'] },
  { file: '24_best_weapon_by_style.txt', slug: 'best-weapon-by-style', tags: ['무기 추천', '플레이스타일', '블라스터', '특화'] },
  { file: '25_achievements_completion.txt', slug: 'achievements-completion', tags: ['업적', '완성도', '재플레이 가치', '53개'] },
];

const gameTags = ['스타워즈 제로 컴퍼니', 'Star Wars Zero Company'];

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
  src: '/assets/posts/guide-images/star-wars-zero-company-2026-01.jpg',
  alt: '스타워즈 제로 컴퍼니(STAR WARS: Zero Company) 전술 게임 대표 이미지',
  width: '616',
  height: '353'
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

const dateFor = (idx) => {
  const day = 11 + idx;
  if (day <= 30) return `2026-09-${String(day).padStart(2, '0')}`;
  return `2026-10-${String(day - 30).padStart(2, '0')}`;
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

  const contentSections = sections.slice(0, 7);

  let body = '';
  body += '<p class="affiliate-disclosure">\n  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.\n</p>\n\n';
  body += intro + '\n\n';
  body += `<img class="post-landscape-image" src="${image.src}" alt="${image.alt}" width="${image.width}" height="${image.height}" loading="lazy" decoding="async" />\n\n`;

  contentSections.forEach((sec, idx) => {
    body += `## ${idx + 1}. ${sec.title}\n\n`;
    const paras = dedupeConsecutive(sec.paragraphs);
    body += paras.join('\n\n') + '\n\n';
    if (idx % 2 === 1) {
      body += banner + '\n\n';
    }
  });

  body = body.trimEnd() + '\n';

  const date = dateFor(i);
  const allTags = [...gameTags, ...info.tags];

  const fm = `---
title: "${escapeYaml(title)}"
description: "${escapeYaml(description)}"
date: ${date}
updated: ${date}
category: "가이드"
subcategory: "스타워즈 제로 컴퍼니"
tags:
${allTags.map(t => `  - "${escapeYaml(t)}"`).join('\n')}
image: "${image.src}"
imageAlt: "${image.alt}"
imageWidth: 616
imageHeight: 353
hideHeroImage: true
hideDescription: true
---
`;

  const full = fm + '\n' + body;
  writeFileSync(join(out, `star-wars-zero-company-${info.slug}.md`), full, 'utf8');
  console.log(`Created: star-wars-zero-company-${info.slug}.md (${contentSections.length} sections, ${contentSections.filter((_, k) => k % 2 === 1).length} banners, date: ${date})`);
}

console.log(`\nDone! Created ${files.length} Star Wars Zero Company guide posts.`);