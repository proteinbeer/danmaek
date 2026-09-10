import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const src = 'C:\\Users\\Proteinbeer\\Downloads\\danmaek_windows_guides_20_20260910';
const out = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\src\\content\\posts';

const files = [
  { file: '01_윈도우11_복원지점.txt', slug: 'win11-restore-point', title: '윈도우 11 복원 지점, 미리 만들어야 하는 이유와 만드는 방법', alt: '윈도우 11 복원 지점 설정 화면', tags: ['윈도우 11', '복원 지점', '시스템 복원', '백업', '오류 해결'] },
  { file: '02_윈도우11_업데이트삭제.txt', slug: 'win11-update-delete', title: '윈도우 11 업데이트 삭제, 설치 직후 오류가 생겼다면 먼저 확인', alt: '윈도우 11 업데이트 기록 화면', tags: ['윈도우 11', '업데이트', '업데이트 삭제', '오류 해결', '시스템'] },
  { file: '03_비트로커_복구키.txt', slug: 'win11-bitlocker-recovery', title: '비트로커 복구 키가 갑자기 뜰 때, 포맷 전에 먼저 확인할 것', alt: '비트로커 복구 키 입력 화면', tags: ['윈도우 11', '비트로커', '복구 키', '암호화', '보안'] },
  { file: '04_윈도우11_기본앱변경.txt', slug: 'win11-default-app', title: '윈도우 11 기본 앱 변경, 브라우저와 사진 앱이 자꾸 돌아갈 때', alt: '윈도우 11 기본 앱 설정 화면', tags: ['윈도우 11', '기본 앱', '파일 연결', '브라우저', '설정'] },
  { file: '05_윈도우11_파일확장자표시.txt', slug: 'win11-file-extension', title: '윈도우 11 파일 확장자 표시, 같은 이름 파일을 구분해야 하는 이유', alt: '파일 확장자가 표시된 탐색기 화면', tags: ['윈도우 11', '파일 확장자', '파일 탐색기', '설정', '보안'] },
  { file: '06_윈도우11_숨김파일표시.txt', slug: 'win11-hidden-files', title: '윈도우 11 숨김 파일 표시, 보이지 않는 폴더를 찾기 전 주의할 점', alt: '숨김 파일이 표시된 탐색기 화면', tags: ['윈도우 11', '숨김 파일', '시스템 파일', '파일 탐색기', '설정'] },
  { file: '07_윈도우11_클립보드기록.txt', slug: 'win11-clipboard-history', title: '윈도우 11 클립보드 기록, 복사한 내용을 여러 개 남기는 방법', alt: '윈도우 11 클립보드 기록 창', tags: ['윈도우 11', '클립보드', '복사 붙여넣기', '기록', '생산성'] },
  { file: '08_윈도우11_가상데스크톱.txt', slug: 'win11-virtual-desktop', title: '윈도우 11 가상 데스크톱, 창을 닫지 않고 작업 공간 나누는 방법', alt: '윈도우 11 가상 데스크톱 화면', tags: ['윈도우 11', '가상 데스크톱', '멀티태스킹', '작업 공간', '생산성'] },
  { file: '09_윈도우11_집중모드.txt', slug: 'win11-focus-mode', title: '윈도우 11 집중 모드, 알림은 남기고 방해만 줄이는 설정 방법', alt: '윈도우 11 집중 기능 설정 화면', tags: ['윈도우 11', '집중 모드', '방해 금지', '알림', '생산성'] },
  { file: '10_윈도우11_전원모드.txt', slug: 'win11-power-mode', title: '윈도우 11 전원 모드, 성능과 배터리가 생각보다 크게 갈리는 이유', alt: '윈도우 11 전원 모드 설정 화면', tags: ['윈도우 11', '전원 모드', '배터리', '성능', '노트북'] },
  { file: '11_윈도우11_절전_최대절전.txt', slug: 'win11-sleep-hibernate', title: '윈도우 11 절전과 최대 절전, 노트북을 오래 안 쓸 때 다른 선택', alt: '윈도우 11 전원 옵션 화면', tags: ['윈도우 11', '절전', '최대 절전', '배터리', '노트북'] },
  { file: '12_윈도우11_HDR설정.txt', slug: 'win11-hdr-setup', title: '윈도우 11 HDR 설정, 켰는데 화면이 이상해지는 이유부터 확인', alt: '윈도우 11 HDR 설정 화면', tags: ['윈도우 11', 'HDR', '디스플레이', '모니터', '설정'] },
  { file: '13_윈도우11_주사율변경.txt', slug: 'win11-refresh-rate', title: '윈도우 11 주사율 변경, 144Hz 모니터가 60Hz로 보일 때', alt: '윈도우 11 고급 디스플레이 설정 화면', tags: ['윈도우 11', '주사율', '144Hz', '모니터', '디스플레이'] },
  { file: '14_윈도우11_창모드게임최적화.txt', slug: 'win11-windowed-game-optimize', title: '윈도우 11 창 모드 게임 최적화, 전체 화면보다 나아질 수 있는 이유', alt: '윈도우 11 그래픽 설정 화면', tags: ['윈도우 11', '창 모드', '게임 최적화', '프레임', '그래픽'] },
  { file: '15_원드라이브_바탕화면백업.txt', slug: 'win11-onedrive-desktop-backup', title: '원드라이브 바탕화면 백업, 파일이 갑자기 옮겨진 것처럼 보이는 이유', alt: '원드라이브 백업 관리 화면', tags: ['윈도우 11', '원드라이브', '바탕화면 백업', '클라우드', '동기화'] },
  { file: '16_윈도우11_샌드박스.txt', slug: 'win11-sandbox', title: '윈도우 11 샌드박스, 수상한 프로그램을 본체에 설치하기 싫을 때', alt: '윈도우 11 샌드박스 실행 화면', tags: ['윈도우 11', '샌드박스', '보안', '테스트', '가상'] },
  { file: '17_윈도우11_원격데스크톱.txt', slug: 'win11-remote-desktop', title: '윈도우 11 원격 데스크톱, 집 PC에 밖에서 접속하기 전 확인할 것', alt: '윈도우 11 원격 데스크톱 설정 화면', tags: ['윈도우 11', '원격 데스크톱', '원격 접속', '네트워크', '보안'] },
  { file: '18_윈도우11_근거리공유.txt', slug: 'win11-nearby-sharing', title: '윈도우 11 근거리 공유, USB 없이 PC끼리 파일 보내는 방법', alt: '윈도우 11 근거리 공유 화면', tags: ['윈도우 11', '근거리 공유', '파일 전송', '블루투스', '와이파이'] },
  { file: '19_윈도우11_프린터오프라인.txt', slug: 'win11-printer-offline', title: '윈도우 11 프린터 오프라인, 연결돼 있는데 인쇄가 안 되는 이유', alt: '윈도우 11 프린터 설정 화면', tags: ['윈도우 11', '프린터', '오프라인', '인쇄', '네트워크'] },
  { file: '20_윈도우11_사용자계정_관리자권한.txt', slug: 'win11-admin-account', title: '윈도우 11 새 사용자 계정, 관리자 권한을 아무에게나 주면 안 되는 이유', alt: '윈도우 11 사용자 계정 설정 화면', tags: ['윈도우 11', '사용자 계정', '관리자 권한', '보안', '설정'] },
];

// Random dates: 2026-08-24 ~ 2026-08-27
function seededShuffle(arr, seed) {
  let s = seed;
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 16807 + 0) % 2147483647;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const dates = ['2026-08-24', '2026-08-25', '2026-08-26', '2026-08-27'];
const shuffledDates = [];
for (const f of files) {
  shuffledDates.push(dates[Math.floor(Math.random() * dates.length)]);
}
// Ensure balanced: 5 per date
const balanced = [];
const pool = [];
for (const d of dates) {
  for (let i = 0; i < 5; i++) pool.push(d);
}
const shuffled = seededShuffle(pool, 42);

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

for (let i = 0; i < files.length; i++) {
  const info = files[i];
  const raw = readFileSync(join(src, info.file), 'utf8');
  const lines = raw.split('\n');

  // Title is first non-empty line
  const titleLine = lines.find(l => l.trim()) || '';

  // Intro: lines after title until first numbered section "1. "
  let introEnd = lines.findIndex(l => /^1\.\s/.test(l.trim()));
  if (introEnd === -1) introEnd = lines.length;
  const intro = lines.slice(1, introEnd).map(l => l.trim()).filter(l => l).join('\n\n');

  // Description: first paragraph of intro
  const descMatch = intro.split('\n\n')[0] || titleLine;
  const description = descMatch.length > 140 ? descMatch.slice(0, 137) + '...' : descMatch;

  // Sections
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

  // Build markdown body
  let body = '';

  // Disclosure
  body += '<p class="affiliate-disclosure">\n  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.\n</p>\n\n';

  // Intro
  body += intro + '\n\n';

  // Hero image
  body += `<img class="post-landscape-image" src="/assets/posts/guide-images/hero-bloom.jpg" alt="${info.alt}" width="1280" height="720" loading="lazy" decoding="async" />\n\n`;

  // Sections with banners
  sections.forEach((sec, idx) => {
    body += `## ${idx + 1}. ${sec.title}\n\n`;
    body += sec.paragraphs.join('\n\n') + '\n\n';
    if (idx === 1 || idx === 3 || idx === 5) {
      body += banner + '\n\n';
    }
  });

  // Remove trailing whitespace
  body = body.trimEnd() + '\n';

  const date = shuffled[i];

  // Frontmatter
  const fm = `---
title: "${info.title}"
description: "${description}"
date: ${date}
updated: ${date}
category: "가이드"
subcategory: "윈도우 11"
tags:
${info.tags.map(t => `  - "${t}"`).join('\n')}
image: "/assets/posts/guide-images/hero-bloom.jpg"
imageAlt: "${info.alt}"
imageWidth: 1920
imageHeight: 1080
hideHeroImage: true
hideDescription: true
---
`;

  const full = fm + '\n' + body;
  writeFileSync(join(out, `${info.slug}.md`), full, 'utf8');
  console.log(`Created: ${info.slug}.md (date: ${date})`);
}

console.log(`\nDone! Created ${files.length} posts.`);
