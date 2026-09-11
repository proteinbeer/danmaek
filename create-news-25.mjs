import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const src = 'C:\\Users\\Proteinbeer\\Downloads\\danmaek_news_25_20260911';
const out = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\src\\content\\posts';

const files = [
  { file: '01_wardogs_launch_servers.txt', slug: 'wardogs-launch-servers', sub: '게임', tags: ['워독스', 'WARDOGS', '서버 접속', '동시 접속', '출시'] },
  { file: '02_ea_savvy_merger.txt', slug: 'ea-savvy-merger-2026', sub: 'IT', tags: ['EA', '사우디', '합병', '세비 게임즈', '게임 산업'] },
  { file: '03_early_access_meaning.txt', slug: 'early-access-meaning-2026', sub: '게임', tags: ['얼리 액세스', '게임 개발', '출시', '반품', '기대치'] },
  { file: '04_graphics_arms_race.txt', slug: 'graphics-arms-race-2026', sub: '게임', tags: ['그래픽', '게임 개발', 'AAA', '개발 비용', '인디 게임'] },
  { file: '05_control_resonant_requirements.txt', slug: 'control-resonant-requirements-2026', sub: '게임', tags: ['컨트롤', '레저넌트', 'PC 사양', 'RTX 5080', '시스템 요구 사양'] },
  { file: '06_rtx5090_8pin_mod.txt', slug: 'rtx5090-8pin-mod-2026', sub: '게임', tags: ['RTX 5090', '그래픽 카드', '커스텀 케이블', '과전력', '하드웨어'] },
  { file: '07_dlss5_desktop.txt', slug: 'dlss5-desktop-2026', sub: '게임', tags: ['DLSS 5', '엔비디아', '지포스', '업스케일링', '데스크톱'] },
  { file: '08_vr_shipments_down.txt', slug: 'vr-shipments-down-2026', sub: '게임', tags: ['VR', '가상 현실', '출하량', '밸브', '헤드셋'] },
  { file: '09_fruit_fly_doom.txt', slug: 'fruit-fly-doom-2026', sub: '게임', tags: ['초파리', '둠', '뇌 컴퓨터', '실험', 'AI'] },
  { file: '10_tsmc_august_revenue.txt', slug: 'tsmc-august-revenue-2026', sub: 'IT', tags: ['TSMC', '반도체', '매출', 'AI 칩', '파운드리'] },
  { file: '11_finalmouse_latency.txt', slug: 'finalmouse-latency-2026', sub: 'IT', tags: ['파이널마우스', '마우스', '클릭 지연', '게이밍', '반응 속도'] },
  { file: '12_google_tablet_again.txt', slug: 'google-tablet-again-2026', sub: 'IT', tags: ['구글', '태블릿', '픽셀', '제품 단종', '하드웨어'] },
  { file: '13_prime_video_lipsync.txt', slug: 'prime-video-lipsync-2026', sub: 'IT', tags: ['프라임 비디오', '아마존', 'AI', '더빙', '입모양'] },
  { file: '14_edge_ai_review.txt', slug: 'edge-ai-review-2026', sub: 'IT', tags: ['엣지', '브라우저', '확장 프로그램', 'AI', '검수'] },
  { file: '15_robot_protest_poland.txt', slug: 'robot-protest-poland-2026', sub: 'IT', tags: ['로봇', '시위', '폴란드', 'AI 자동화', '일자리'] },
  { file: '16_lg_smart_tv_privacy.txt', slug: 'lg-smart-tv-privacy-2026', sub: 'IT', tags: ['LG', '스마트 TV', '프라이버시', '추적', '개인정보'] },
  { file: '17_switzerland_microsoft_exit.txt', slug: 'switzerland-microsoft-exit-2026', sub: 'IT', tags: ['스위스', '마이크로소프트', '아웃룩', 'MS 365', '조달'] },
  { file: '18_openai_navier_stokes.txt', slug: 'openai-navier-stokes-2026', sub: 'IT', tags: ['OpenAI', '내비어-스토크스', '수학', 'AI', '유체역학'] },
  { file: '19_apple_a20_pro.txt', slug: 'apple-a20-pro-2026', sub: 'IT', tags: ['애플', 'A20 프로', '2나노', 'TSMC', '모바일 AP'] },
  { file: '20_dmatrix_nvlink.txt', slug: 'dmatrix-nvlink-2026', sub: 'IT', tags: ['D-Matrix', '엔비디아', 'NVLink', 'AI 칩', '서버'] },
  { file: '21_ai_debt_boom.txt', slug: 'ai-debt-boom-2026', sub: 'IT', tags: ['AI', '데이터센터', '부채', '빅테크', '투자'] },
  { file: '22_ai_datacenter_dotcom.txt', slug: 'ai-datacenter-dotcom-2026', sub: 'IT', tags: ['AI 데이터센터', '버블', '코인 채굴', '대역폭', '버블'] },
  { file: '23_asml_large_masks.txt', slug: 'asml-large-masks-2026', sub: 'IT', tags: ['ASML', 'EUV', '마스크', '반도체', '초미세 공정'] },
  { file: '24_tesla_cybercab_joystick.txt', slug: 'tesla-cybercab-joystick-2026', sub: 'IT', tags: ['테슬라', '사이버캡', '자율주행', '조이스틱', '모빌리티'] },
  { file: '25_corsair_tc80_chair.txt', slug: 'corsair-tc80-chair-2026', sub: '게임', tags: ['코르세어', '게이밍 의자', 'TC80', '사무용', '가구'] },
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

  const imgIdx = lines.findIndex(l => /메인 이미지 링크/i.test(l.trim()));
  let introStart = 1;
  if (imgIdx !== -1) {
    introStart = imgIdx + 1;
    while (introStart < lines.length && (!lines[introStart].trim() || /^https?:\/\//i.test(lines[introStart].trim()))) {
      introStart++;
    }
  }
  const intro = dedupeConsecutive(lines.slice(introStart, introEnd).map(l => l.trim()).filter(l => l)).join('\n\n');

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

  sections.forEach((sec, idx) => {
    body += `## ${idx + 1}. ${sec.title}\n\n`;
    body += dedupeConsecutive(sec.paragraphs).join('\n\n') + '\n\n';
    if (idx % 2 === 1) {
      body += banner + '\n\n';
    }
  });

  body = body.trimEnd() + '\n';

  const date = '2026-09-11T12:00:00';

  const fm = `---
title: "${title}"
description: "${description}"
date: ${date}
updated: ${date}
category: "뉴스"
subcategory: "${info.sub}"
tags:
${info.tags.map(t => `  - "${t}"`).join('\n')}
image: "https://img.danmaek.com/images/og-default.jpg"
imageAlt: "${title}"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---
`;

  const full = fm + '\n' + body;
  writeFileSync(join(out, `${info.slug}.md`), full, 'utf8');
  console.log(`Created: ${info.slug}.md (${sections.length} sections, sub: ${info.sub})`);
}

console.log(`\nDone! Created ${files.length} news posts.`);
