---
title: "워드프레스 스팸 댓글, 차단 설정부터 플러그인까지"
description: "광고 댓글과 낚시성 링크가 반복적으로 달리면 관리와 신뢰도가 흔들립니다. 기본 댓글 설정, 금칙어, 캡차, 스팸 플러그인 순서로 워드프레스 스팸 댓글을 차단하는 방법을 정리했습니다."
date: 2026-08-22
updated: 2026-08-22
category: "가이드"
subcategory: "워드프레스"
tags:
  - "워드프레스"
  - "스팸 댓글"
  - "댓글"
  - "캡차"
  - "Akismet"
image: "/assets/posts/guide-images/wordpress-guide.jpg"
imageAlt: "스팸 댓글을 차단하는 워드프레스 설정 화면"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

글을 쓰고 얼마 지나지 않아 "재밌게 봤습니다"와 함께 **외부 링크가 심어져 있는 댓글**이 달리기 시작하면 그게 스팸 댓글입니다. 처음에는 하나둘이지만 승인을 건너뛰고 노출되기 시작하면 사이트 신뢰도가 떨어집니다.

스팸 댓글은 설정 몇 가지와 플러그인 하나로 대부분 자동 차단됩니다. 이 글에서는 설정 → 금칙어 → 캡차 → 플러그인 순서로 정리했습니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/wordpress-guide.jpg" alt="스팸 댓글을 차단하는 워드프레스 설정 화면" width="1200" height="675" loading="lazy" decoding="async" />

## 1. 댓글 기본 설정부터 단단하게

가장 흔한 스팸은 "몇 초 안에 댓글을 도배하는 자동 프로그램"에서 옵니다. 기본 설정으로 이들의 속도를 늦출 수 있습니다.

- 관리자 → 설정 → 토론에서 **댓글 작성 후 며칠 뒤 기존 댓글을 승인**을 켭니다.
- "댓글 작성자는 이전에 승인된 댓글이 있어야 합니다"를 켜면 처음 오는 방문자의 댓글이 바로 노출되지 않습니다.
- 댓글 알림으로 승인을 늦추는 방식보다, **자동으로 이메일 알림**이 가도록 설정해 관리 부담을 줄입니다.
- 기본으로 활성화된 댓글 양식 필드는 자동 프로그램이 채우기 좋은 구조이므로, 필요한 최소 필드만 남기는 것도 방법입니다.

이 단계만으로 바로 노출되는 스팸 비중이 크게 줄어듭니다. 승인 절차가 번거롭다면 아래 금칙어와 캡차를 추가해 보세요.

## 2. 금칙어와 링크 제한으로 걸러내기

설정 → 토론의 **금칙어 목록**에 단어를 넣으면 그 단어가 포함된 댓글이 자동으로 보류·삭제됩니다.

- 확실한 스팸 단어(예: 카지노, 성인광고성 용어, 특정 도박 사이트명)를 목록에 미리 넣어둡니다.
- 댓글에 링크가 1개 이상 포함되면 보류되도록 하는 유료/무료 플러그인 설정도 함께 적용합니다.
- 댓글 남긴 사람의 **이메일·URL 필드**가 빈 경우만 허용하는 설정을 쓰면 링크 심기 스팸을 걸러낼 수 있습니다.

금칙어는 완벽하지 않지만 확실한 단어 몇 개 목록으로 대량 도배를 막는 데 효율적입니다. 봇이 단어를 바꿔가며 우회하는 경우가 있으니 플러그인과 조합해서 쓰는 것이 좋습니다.

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

## 3. 캡차나 간단 질문으로 봇 막기

자동 프로그램은 폼을 채우는 데 강하지만, 인간만 알 수 있는 질문에는 약합니다.

- 댓글 양식에 간단한 질문("한글의 첫 글자는?")을 배치하면 봇이 해석하기 어려워 도배가 멈춥니다.
- 캡차 서비스(예: Cloudflare Turnstile)는 방문자에게 불편을 덜 주면서 봇을 구분해줍니다.
- 체크박스 방식보다 **숨겨진 필드(honeypot)** 방식을 쓰는 플러그인은 실제 방문자의 입력 경험이 그대로 유지됩니다.

캡차는 무료로 시작할 수 있습니다. 방문자 UX를 고려하면 요약 질문이나 숨김 필드가 가벼운 편이라 추천합니다.

## 4. Akismet과 전용 스팸 플러그인

가장 널리 쓰이는 방법은 **Akismet**입니다. 워드프레스에 기본 내장되어 있고, 라이선스를 무료로 받을 수 있습니다.

- 설치 후 워드프레스 계정과 연동하면 전 세계에 쌓인 스팸 패턴으로 댓글을 자동 판정합니다.
- 판정된 댓글은 스팸 목록으로 격리되므로 직접 삭제만 누르면 됩니다.
- Akismet 외 국내 서비스 기반 스팸 필터 플러그인도 있으니 스팸 유형에 맞는 것을 골라 쓸 수 있습니다.

악성 봇은 계속 진화하기 때문에 텍스트 규칙만으로는 한계가 있습니다. Akismet처럼 **패턴을 실시간으로 학습하는 서비스**를 켜두면 거의 손이 가지 않습니다.

## 5. 기존 스팸 한 번에 정리하기

이미 쌓인 스팸 댓글은 하나씩 지우기보다 한 번에 정리하는 것이 낫습니다.

- 댓글 목록에서 **스팸** 필터를 누르면 격리된 댓글만 나옵니다.
- 전체 선택 후 "스팸으로 이동" 또는 "휴지통으로 이동"을 실행해 일괄 처리합니다.
- 댓글 수가 많으면 데이터베이스 정리 플러그인으로 구간 삭제할 수 있습니다.
- 스팸을 지웠으면 봇의 재등록을 막기 위해 위 설정을 미리 적용해둔 상태를 유지합니다.

스팸을 삭제할 때는 실수로 정상 댓글을 지우지 않도록, 해당 댓글이 **스팸 목록인지 먼저 확인**하고 선택하시기 바랍니다.

## 6. 정기 점검과 유지

스팸 차단은 한 번 설정하면 끝나는 것이 아닙니다. 봇 패턴이 바뀌므로 주기적인 점검이 필요합니다.

- 한 달에 한 번 스팸 목록에 어떤 유형이 쌓였는지 확인해 금칙어를 갱신합니다.
- 플러그인(캡차, Akismet)의 업데이트를 놓치지 않습니다.
- 댓글 양식의 필드가 불필요하게 늘지 않았는지 확인합니다.
- 스팸 댓글 수가 급증하면 최근에 추가된 테마·플러그인이나 본문 홍보 게시물부터 원인을 찾습니다.

스팸 댓글은 "몰라서 피해를 보는 문제"에 가깝습니다. 기본 설정과 플러그인 하나만 제대로 해두어도 하루 수십 건의 도배가 거의 0으로 줄어듭니다.

<div style="margin: 40px 0 28px; text-align: center;">
  <div style="width: 250px; max-width: 100%; margin: 0 auto; overflow: hidden;">
<!-- COUPANG PARTNERS DYNAMIC BANNER START -->
<script src="https://ads-partners.coupang.com/g.js"></script>
<script>
	new PartnersCoupang.G({"id":1021110,"template":"carousel","trackingCode":"AF7638395","width":"250","height":"250","tsource":""});
</script>
<!-- COUPANG PARTNERS DYNAMIC BANNER END -->
  </div>
</div>

## 출처

- [워드프레스 공식 Akismet 페이지](https://akismet.com/)
- [워드프레스 토론 설정 도움말](https://wordpress.org/documentation/)
- [Cloudflare Turnstile](https://www.cloudflare.com/ko-kr/products/turnstile/)