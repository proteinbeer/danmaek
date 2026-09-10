import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const src = 'C:\\Users\\Proteinbeer\\Downloads\\danmaek_wordpress_guides_20_ascii_20260910';
const out = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\src\\content\\posts';

const files = [
  { file: '01_wordpress_critical_error_recovery.txt', slug: 'wordpress-critical-error-recovery', title: '워드프레스 치명적 오류가 떴다면, 삭제보다 복구 모드부터 볼 이유', alt: '워드프레스 치명적 오류 화면과 복구 모드', tags: ['워드프레스', '치명적 오류', '복구 모드', '장애', 'PHP'] },
  { file: '02_wordpress_plugin_conflict_check.txt', slug: 'wordpress-plugin-conflict-check', title: '워드프레스 플러그인 업데이트 후 깨졌다면, 원인 찾는 순서가 따로 있습니다', alt: '워드프레스 플러그인 목록과 충돌 확인', tags: ['워드프레스', '플러그인', '충돌', '업데이트', '복구'] },
  { file: '03_wordpress_login_loop_fix.txt', slug: 'wordpress-login-loop-fix', title: '워드프레스 로그인했는데 다시 로그인 화면, 비밀번호보다 먼저 볼 곳', alt: '워드프레스 로그인 화면이 반복되는 문제', tags: ['워드프레스', '로그인', '쿠키', '세션', '관리자'] },
  { file: '04_wordpress_database_connection_error.txt', slug: 'wordpress-database-connection-error', title: '워드프레스 데이터베이스 연결 오류, 사이트가 통째로 멈췄을 때 볼 순서', alt: '워드프레스 데이터베이스 연결 오류 화면', tags: ['워드프레스', '데이터베이스', '연결 오류', '호스팅', '서버'] },
  { file: '05_wordpress_php_memory_limit.txt', slug: 'wordpress-php-memory-limit', title: '워드프레스 PHP 메모리 부족 오류, 한도만 올리면 문제가 다시 생기는 이유', alt: '워드프레스 PHP 메모리 한도 설정', tags: ['워드프레스', 'PHP', '메모리', '메모리 한도', '오류'] },
  { file: '06_wordpress_image_upload_error.txt', slug: 'wordpress-image-upload-error', title: '워드프레스 이미지 업로드가 실패한다면, 파일보다 서버부터 볼 이유', alt: '워드프레스 미디어 업로드 화면', tags: ['워드프레스', '이미지', '업로드', '미디어', '오류'] },
  { file: '07_wordpress_upload_size_limit.txt', slug: 'wordpress-upload-size-limit', title: '워드프레스 큰 파일만 업로드가 안 된다면, 용량 제한은 한곳이 아닙니다', alt: '워드프레스 최대 업로드 크기 설정', tags: ['워드프레스', '업로드', '용량 제한', 'PHP', '미디어'] },
  { file: '08_wordpress_email_not_sending.txt', slug: 'wordpress-email-not-sending', title: '워드프레스 이메일이 안 온다면, 문의 알림과 비밀번호 메일까지 막히는 이유', alt: '워드프레스 이메일 발송 설정', tags: ['워드프레스', '이메일', '발송', 'SMTP', '문의 폼'] },
  { file: '09_wordpress_scheduled_post_failed.txt', slug: 'wordpress-scheduled-post-failed', title: '워드프레스 예약 발행이 실패한다면, 정해진 시간에 글이 안 올라가는 이유', alt: '워드프레스 예약 발행 설정 화면', tags: ['워드프레스', '예약', '예약 발행', '발행', '시간'] },
  { file: '10_wordpress_cache_changes_not_showing.txt', slug: 'wordpress-cache-not-updating', title: '워드프레스 글을 수정했는데 그대로라면, 저장보다 캐시부터 볼 상황', alt: '워드프레스 캐시 갱신 확인', tags: ['워드프레스', '캐시', '수정', 'CDN', '반영'] },
  { file: '11_wordpress_permalink_404_fix.txt', slug: 'wordpress-permalink-404-fix', title: '워드프레스 글만 404가 뜬다면, 삭제보다 고유주소부터 확인할 이유', alt: '워드프레스 고유주소 설정 화면', tags: ['워드프레스', '404', '고유주소', '주소', '오류'] },
  { file: '12_wordpress_search_visibility_settings.txt', slug: 'wordpress-search-visibility', title: '워드프레스 검색 노출이 갑자기 줄었다면, 공개 설정 하나부터 볼 이유', alt: '워드프레스 검색엔진 노출 설정', tags: ['워드프레스', '검색', '검색 노출', 'SEO', '색인'] },
  { file: '13_wordpress_user_roles_permissions.txt', slug: 'wordpress-user-roles', title: '워드프레스 사용자 권한, 같이 운영한다고 모두 관리자면 위험한 이유', alt: '워드프레스 사용자 역할과 권한', tags: ['워드프레스', '권한', '사용자 역할', '보안', '관리자'] },
  { file: '14_wordpress_revisions_restore.txt', slug: 'wordpress-revisions-restore', title: '워드프레스 글을 잘못 덮어썼다면, 리비전에서 되돌릴 수 있는 범위', alt: '워드프레스 리비전 비교 화면', tags: ['워드프레스', '리비전', '복원', '수정', '이력'] },
  { file: '15_wordpress_site_health_check.txt', slug: 'wordpress-site-health-check', title: '워드프레스 사이트 건강도, 초록색보다 먼저 봐야 할 경고가 있습니다', alt: '워드프레스 사이트 건강도 화면', tags: ['워드프레스', '사이트 건강도', '점검', 'PHP', '서버'] },
  { file: '16_wordpress_staging_site.txt', slug: 'wordpress-staging-site', title: '워드프레스 운영 사이트에서 바로 시험하면 위험한 이유, 스테이징이 필요한 순간', alt: '워드프레스 스테이징 환경 개념', tags: ['워드프레스', '스테이징', '테스트', '업데이트', '운영'] },
  { file: '17_wordpress_child_theme.txt', slug: 'wordpress-child-theme', title: '워드프레스 테마 수정이 업데이트 뒤 사라진다면, 자식 테마가 필요한 이유', alt: '워드프레스 자식 테마 개념', tags: ['워드프레스', '자식 테마', '테마', '업데이트', '수정'] },
  { file: '18_wordpress_site_editor.txt', slug: 'wordpress-site-editor', title: '워드프레스 헤더 하나 바꿨는데 전체가 달라진다면, 사이트 편집기부터 이해할 것', alt: '워드프레스 사이트 편집기 화면', tags: ['워드프레스', '사이트 편집기', '블록 테마', '템플릿', '헤더'] },
  { file: '19_wordpress_synced_patterns.txt', slug: 'wordpress-synced-patterns', title: '워드프레스 같은 문구를 여러 글에 쓴다면, 동기화 패턴이 편한 이유', alt: '워드프레스 동기화 패턴 개념', tags: ['워드프레스', '패턴', '동기화', '블록', '반복 콘텐츠'] },
  { file: '20_wordpress_block_theme_menu.txt', slug: 'wordpress-block-theme-menu', title: '워드프레스 메뉴가 안 보인다면, 블록 테마에서 위치가 달라진 이유', alt: '워드프레스 블록 테마 내비게이션', tags: ['워드프레스', '메뉴', '내비게이션', '블록 테마', '헤더'] },
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
  if (!titleLine || titleLine === info.title) {
    console.log(`WARN: ${info.file} first line mismatch: "${titleLine}"`);
  }

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
  body += `<img class="post-landscape-image" src="/assets/posts/guide-images/wordpress-guide.jpg" alt="${info.alt}" width="1200" height="675" loading="lazy" decoding="async" />\n\n`;

  sections.forEach((sec, idx) => {
    body += `## ${idx + 1}. ${sec.title}\n\n`;
    body += sec.paragraphs.join('\n\n') + '\n\n';
    if (idx === 1 || idx === 3 || idx === 5 || idx === 7) {
      body += banner + '\n\n';
    }
  });

  body = body.trimEnd() + '\n';

  const date = '2026-08-21';

  const fm = `---
title: "${info.title}"
description: "${description}"
date: ${date}
updated: ${date}
category: "가이드"
subcategory: "워드프레스"
tags:
${info.tags.map(t => `  - "${t}"`).join('\n')}
image: "/assets/posts/guide-images/wordpress-guide.jpg"
imageAlt: "${info.alt}"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---
`;

  const full = fm + '\n' + body;
  writeFileSync(join(out, `${info.slug}.md`), full, 'utf8');
  console.log(`Created: ${info.slug}.md (date: ${date})`);
}

console.log(`\nDone! Created ${files.length} wordpress guide posts.`);