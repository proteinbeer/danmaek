# Danmaek

## 이미지 추가 규칙
- 새 이미지는 넣기 전에 항상 압축: 최대 가로 1280px로 리사이즈, JPEG 품질 82 정도로 저장
- 사진/스틸 컷은 절대 PNG로 저장하지 말 것 (JPG 사용)
- 목표: 이미지 1장당 300KB 이하
- 이미지 파일은 `public/assets/posts/` 아래에 저장하고, 글에서는 `/assets/posts/...` 경로로 참조

## 게시글(뉴스/가이드) 템플릿 규칙
뉴스 글이든 가이드 글이든 **모든 게시글은 이 템플릿을 그대로 적용**한다. 새 글 작성 시 아래 규칙을 반드시 따른다.
템플릿 기준: `src/content/posts/gta6-gameplay-reveal-vs-gta5.md`, `aion2-global-launch-2026.md` 등 기존 게임 뉴스 글.

### frontmatter
- `category`: 카테고리 이름 (예: "게임")
- `tags`: 문자열 배열
- `image`: 로컬 이미지는 `/assets/posts/...` 경로 사용
- `imageAlt`, `imageWidth`, `imageHeight`: 이미지와 함께 반드시 지정
- `hideHeroImage: true`, `hideDescription: true`: 뉴스/가이드 글은 히어로 이미지와 설명 자동출력을 끔

### 본문 구조 (순서 지키기)
1. 맨 위에 애드핏 공시: `<p class="affiliate-disclosure">이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.</p>`
2. 인트로 문단
3. 이미지 삽입: `<img class="post-landscape-image" src="/assets/posts/..." alt="..." width="1280" height="720" loading="lazy" decoding="async" />` (첫 이미지는 class에 `post-landscape-image--high` 추가 가능)
4. 소제목은 번호 매기기: `## 1. ...`, `## 2. ...`
5. 쿠팡 배너 삽입(본문 중간/마지막). 쿠팡 배너 기본 원칙:
   - **모든 게시글은 반드시 "참고한 자료" 바로 위(직전)에 쿠팡 배너 1개를 둔다** (템플릿과 동일 구조)
   - 뉴스 글은 본문 배너를 포함해 총 3개(작은 쿠팡 2개 + 참고자료 직전 배너 1개), 가이드 글은 총 2개(본문 중간 1개 + 참고자료 직전 1개)
   - 참고자료 직전에는 `margin: 40px 0 28px` 스타일의 배너를 사용
   ```html
   <div style="margin: 38px 0 30px; text-align: center;">
     <div style="width: 250px; max-width: 100%; margin: 0 auto; overflow: hidden;">
   <!-- COUPANG PARTNERS DYNAMIC BANNER START -->
   <script src="https://ads-partners.coupang.com/g.js"></script>
   <script>
   	new PartnersCoupang.G({"id":1021110,"template":"carousel","trackingCode":"AF7638395","width":"250","height":"250","tsource":""});
   </script>
   <!-- COUPANG PARTNERS DYNAMIC BANNER END -->
     </div>
   </div>
   ```
6. 마지막 참고자료는 **반드시 h2 헤딩**으로: `## 출처` (굵은 텍스트 `**참고한 자료**` 아님)
7. 참고자료 항목은 링크 목록: `- [제목 또는 사이트명](URL)`

### 관련 글 섹션 (레이아웃 자동 렌더링)
- 게시글 하단의 관련 글 섹션 헤딩은 **"단 글"** 로 고정됨. (부제목 없음. `src/layouts/PostLayout.astro`에서 관리)
- 이 헤딩 텍스트를 변경하고 싶을 때만 해당 파일을 수정한다.

## 쿠폰 글 문체 규칙
- 쿠폰 글과 쿠폰 카테고리 글에는 **"~죠/하죠/했죠"** 어미를 문장 약 30% 비중으로 넣는다.
- 이 규칙은 쿠폰 글 작성/수정 시 계속 적용한다.
