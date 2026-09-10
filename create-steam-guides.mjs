import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const src = 'C:\\Users\\Proteinbeer\\Downloads\\danmaek_steam_guides_20_20260910';
const out = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\src\\content\\posts';

const files = [
  { file: '01_스팀_게임파일_무결성검사.txt', slug: 'steam-file-integrity', title: '스팀 게임 파일 무결성 검사, 재설치 전에 먼저 해봐야 하는 이유', alt: '스팀 게임 무결성 검사 화면', tags: ['스팀', '무결성 검사', '게임 오류', '파일 복구', '재설치'] },
  { file: '02_스팀_게임_시작옵션.txt', slug: 'steam-launch-options', title: '스팀 게임 시작 옵션, 모르는 명령어를 그대로 넣으면 안 되는 이유', alt: '스팀 시작 옵션 설정 화면', tags: ['스팀', '시작 옵션', 'launch options', '게임 설정', '최적화'] },
  { file: '03_스팀_오버레이.txt', slug: 'steam-overlay', title: '스팀 오버레이 안 뜰 때, Shift와 Tab보다 먼저 확인할 설정', alt: '스팀 오버레이 화면', tags: ['스팀', '오버레이', '단축키', '게임 중', '설정'] },
  { file: '04_스팀_성능모니터_FPS.txt', slug: 'steam-fps-monitor', title: '스팀 FPS 표시, 이제 숫자 하나보다 CPU와 GPU를 같이 봐야 하는 이유', alt: '스팀 성능 모니터 FPS 표시', tags: ['스팀', 'FPS', '성능 모니터', 'CPU', 'GPU'] },
  { file: '05_스팀_컨트롤러_스팀입력.txt', slug: 'steam-controller-input', title: '스팀 패드 인식 안 될 때, 드라이버보다 스팀 입력을 먼저 볼 이유', alt: '스팀 컨트롤러 설정 화면', tags: ['스팀', '컨트롤러', '패드', '스팀 입력', '조작'] },
  { file: '06_스팀_빅픽처모드.txt', slug: 'steam-big-picture', title: '스팀 빅 픽처 모드, TV 연결할 때 일반 화면보다 편한 이유', alt: '스팀 빅 픽처 모드 화면', tags: ['스팀', '빅 픽처', 'TV', '콘솔', '컨트롤러'] },
  { file: '07_스팀_게임녹화.txt', slug: 'steam-game-recording', title: '스팀 게임 녹화, 별도 프로그램 없이 클립을 남길 때 편한 점', alt: '스팀 게임 녹화 설정', tags: ['스팀', '게임 녹화', '클립', '백그라운드', '녹화'] },
  { file: '08_스팀_리모트플레이.txt', slug: 'steam-remote-play', title: '스팀 리모트 플레이, 사양 낮은 노트북에서도 고사양 게임이 되는 원리', alt: '스팀 리모트 플레이 화면', tags: ['스팀', '리모트 플레이', '원격', '스트리밍', '노트북'] },
  { file: '09_스팀_리모트플레이투게더.txt', slug: 'steam-remote-play-together', title: '스팀 리모트 플레이 투게더, 친구가 게임을 안 사도 같이 할 수 있는 조건', alt: '스팀 리모트 플레이 투게더 초대', tags: ['스팀', '리모트 플레이 투게더', '협동', '멀티', '친구'] },
  { file: '10_스팀_창작마당_모드.txt', slug: 'steam-workshop-mods', title: '스팀 창작마당 모드 설치와 삭제, 구독 취소만으로 끝나지 않을 때', alt: '스팀 창작마당 모드 목록', tags: ['스팀', '창작마당', '모드', '구독', '설치'] },
  { file: '11_스팀_베타브랜치.txt', slug: 'steam-beta-branch', title: '스팀 베타 브랜치 참여 방법, 최신 버전이 항상 정답은 아닌 이유', alt: '스팀 베타 브랜치 선택 화면', tags: ['스팀', '베타', '브랜치', '테스트', '버전'] },
  { file: '12_스팀_DLC_설치관리.txt', slug: 'steam-dlc-management', title: '스팀 DLC 샀는데 게임에 안 나올 때, 재구매 전에 확인할 곳', alt: '스팀 DLC 설치 관리 화면', tags: ['스팀', 'DLC', '설치', '구매', '추가 콘텐츠'] },
  { file: '13_스팀_게임언어변경.txt', slug: 'steam-language-change', title: '스팀 게임 언어 변경, 한국어가 있는데 영어로 나올 때 확인할 순서', alt: '스팀 게임 언어 설정', tags: ['스팀', '언어 변경', '한국어', '설정', '게임'] },
  { file: '14_스팀_자동업데이트_관리.txt', slug: 'steam-auto-update', title: '스팀 자동 업데이트 끄는 법, 완전히 막는 버튼이 없는 이유', alt: '스팀 자동 업데이트 설정', tags: ['스팀', '자동 업데이트', '업데이트 관리', '다운로드', '설정'] },
  { file: '15_스팀_비스팀게임_추가.txt', slug: 'steam-non-steam-games', title: '스팀에 비스팀 게임 추가, 라이브러리에 넣어도 스팀 게임이 되는 것은 아니다', alt: '스팀 비스팀 게임 추가 화면', tags: ['스팀', '비스팀 게임', '라이브러리', '추가', '런처'] },
  { file: '16_스팀_스크린샷_폴더.txt', slug: 'steam-screenshot-folder', title: '스팀 스크린샷 저장 위치, F12로 찍었는데 사진 폴더에 없는 이유', alt: '스팀 스크린샷 관리 화면', tags: ['스팀', '스크린샷', 'F12', '저장 위치', '캡처'] },
  { file: '17_스팀_게임실행안됨.txt', slug: 'steam-game-not-launching', title: '스팀 게임 실행 안 될 때, 삭제부터 하지 말고 이 순서로 확인', alt: '스팀 게임 실행 오류', tags: ['스팀', '게임 실행', '오류', '문제 해결', '실행 안 됨'] },
  { file: '18_스팀_디스크쓰기오류.txt', slug: 'steam-disk-write-error', title: '스팀 디스크 쓰기 오류, 인터넷보다 저장장치를 먼저 봐야 하는 이유', alt: '스팀 디스크 쓰기 오류 화면', tags: ['스팀', '디스크 오류', '쓰기 오류', '저장장치', '다운로드'] },
  { file: '19_스팀_콘텐츠파일잠김.txt', slug: 'steam-content-locked', title: '스팀 콘텐츠 파일 잠김 오류, 파일이 열려 있는 곳부터 찾아야 하는 이유', alt: '스팀 콘텐츠 파일 잠김 오류', tags: ['스팀', '콘텐츠 파일', '잠김', '오류', '업데이트'] },
  { file: '20_스팀_결제보류.txt', slug: 'steam-payment-pending', title: '스팀 결제 보류인데 카드에서는 빠져나갔다, 다시 결제하면 안 되는 이유', alt: '스팀 결제 보류 화면', tags: ['스팀', '결제', '보류', '카드', '오류'] },
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

for (let i = 0; i < files.length; i++) {
  const info = files[i];
  const raw = readFileSync(join(src, info.file), 'utf8');
  const lines = raw.split('\n');

  const titleLine = lines.find(l => l.trim()) || '';

  let introEnd = lines.findIndex(l => /^1\.\s/.test(l.trim()));
  if (introEnd === -1) introEnd = lines.length;
  const intro = lines.slice(1, introEnd).map(l => l.trim()).filter(l => l).join('\n\n');

  const descMatch = intro.split('\n\n')[0] || titleLine;
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
  body += `<img class="post-landscape-image" src="/assets/posts/guide-images/steam-home.jpg" alt="${info.alt}" width="1280" height="720" loading="lazy" decoding="async" />\n\n`;

  sections.forEach((sec, idx) => {
    body += `## ${idx + 1}. ${sec.title}\n\n`;
    body += sec.paragraphs.join('\n\n') + '\n\n';
    if (idx === 1 || idx === 3 || idx === 5) {
      body += banner + '\n\n';
    }
  });

  body = body.trimEnd() + '\n';

  const date = '2026-08-24';

  const fm = `---
title: "${info.title}"
description: "${description}"
date: ${date}
updated: ${date}
category: "가이드"
subcategory: "스팀"
tags:
${info.tags.map(t => `  - "${t}"`).join('\n')}
image: "/assets/posts/guide-images/steam-home.jpg"
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

console.log(`\nDone! Created ${files.length} Steam guide posts.`);
