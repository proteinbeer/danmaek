---
title: "워드프레스 글을 수정했는데 그대로라면, 저장보다 캐시부터 볼 상황"
description: "워드프레스에서 글과 디자인을 수정하고 저장까지 했는데 방문자 화면에는 이전 내용이 그대로 보이는 경우가 있죠."
date: 2026-08-21
updated: 2026-08-21
category: "가이드"
subcategory: "워드프레스"
tags:
  - "워드프레스"
  - "캐시"
  - "수정"
  - "CDN"
  - "반영"
image: "/assets/posts/guide-images/wordpress-guide.jpg"
imageAlt: "워드프레스 캐시 갱신 확인"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

워드프레스에서 글과 디자인을 수정하고 저장까지 했는데 방문자 화면에는 이전 내용이 그대로 보이는 경우가 있죠.

다시 저장하고 테마까지 건드리기 전에 브라우저, 플러그인, 서버, CDN에 남은 캐시를 먼저 나눠서 확인하시면 됩니다.

캐시는 사이트를 빠르게 만드는 데 꼭 필요하지만 변경 직후에는 예전 화면을 잠시 보여주는 원인이 될 수 있습니다. 어디에 저장된 캐시인지에 따라 지우는 위치도 달라집니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/wordpress-guide.jpg" alt="워드프레스 캐시 갱신 확인" width="1200" height="675" loading="lazy" decoding="async" />

## 1. 관리자 화면에서 저장됐는지 확인

먼저 편집기를 다시 열어 수정한 내용이 실제로 저장돼 있는지 보시면 되죠.

편집 화면에는 새 내용이 있는데 방문자 화면만 옛날 내용이라면 저장 실패보다 출력 과정의 캐시를 의심할 근거가 생깁니다.

반대로 편집기 자체도 예전 내용으로 돌아갔다면 자동 저장이나 권한, 편집기 오류를 확인해야 합니다. 같은 증상처럼 보여도 저장 단계와 표시 단계는 구분할 필요가 있습니다.

## 2. 시크릿 창과 다른 기기로 비교

브라우저 캐시는 가장 간단하게 확인할 수 있죠.

시크릿 창이나 다른 기기에서 같은 글을 열었을 때 새 내용이 보인다면 현재 브라우저에 저장된 데이터가 원인일 가능성이 높습니다.

새로고침만으로는 캐시가 그대로 남는 경우가 있습니다. 해당 사이트의 캐시를 지운 뒤 다시 확인하면 브라우저 문제인지 빠르게 판단할 수 있습니다.

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

## 3. 캐시 플러그인 비우기

워드프레스 캐시 플러그인을 사용한다면 관리 메뉴에서 페이지 캐시를 비운 뒤 확인하시면 되죠.

좋은 캐시 플러그인은 글 발행과 수정 시 관련 페이지를 자동으로 갱신하지만 테마나 위젯 변경은 즉시 반영되지 않는 경우도 있습니다.

캐시 플러그인을 두 개 이상 겹쳐 쓰고 있다면 어느 플러그인이 최종 화면을 저장하는지 헷갈릴 수 있습니다. 페이지 캐시는 한 체계로 단순하게 유지하는 편이 관리하기 쉽죠.

## 4. 호스팅 서버 캐시도 따로 있다

관리형 워드프레스 호스팅은 플러그인과 별개로 서버에서 페이지를 캐시하는 경우가 있습니다.

워드프레스에서 캐시를 지웠는데도 그대로라면 호스팅 관리 화면에 캐시 비우기 기능이 있는지 확인하시면 됩니다.

서버 캐시가 자동으로 켜져 있는 서비스도 있어 사용자가 캐시 플러그인을 설치하지 않았는데 예전 화면이 남을 수 있죠. 호스팅 기능을 모르면 원인을 계속 워드프레스 안에서만 찾게 됩니다.

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

## 5. CDN 캐시는 가장 바깥에 있다

클라우드플레어 같은 CDN을 사용한다면 방문자와 서버 사이에 또 하나의 캐시가 존재할 수 있습니다.

원본 서버에서는 새 내용이 나오는데 외부에서만 옛 화면이 보인다면 CDN 캐시를 확인할 필요가 있죠.

모든 캐시를 항상 전체 삭제할 필요는 없습니다. 가능하다면 수정한 주소만 비우는 방식이 서버 부담과 사이트 성능을 덜 흔듭니다.

## 6. 테마 수정은 다른 파일을 보고 있을 수도 있다

캐시를 모두 비웠는데 디자인 수정만 반영되지 않는다면 실제로 적용 중인 테마와 수정한 파일이 같은지 확인하시면 됩니다.

스테이징 사이트와 운영 사이트를 동시에 관리하거나 자식 테마를 쓰는 경우 다른 환경을 수정하고 현재 사이트를 보고 있는 실수가 의외로 자주 생깁니다.

큰 색상 변경처럼 눈에 확실히 보이는 테스트를 잠시 적용하면 올바른 위치를 수정하고 있는지 구분하기 쉽죠. 확인 뒤에는 원래 디자인으로 되돌리시면 됩니다.

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

## 7. 캐시를 꺼놓는 것이 답은 아니다

변경 확인이 번거롭다고 캐시 기능을 전부 끄면 방문자 속도와 서버 부하가 나빠질 수 있습니다.

운영 사이트에서는 캐시를 유지하면서 수정할 때 정확히 비우는 절차를 아는 편이 훨씬 낫습니다.

사이트를 자주 수정하신다면 관리자 로그인 상태에서는 캐시를 우회하고 방문자에게만 캐시를 적용하는 설정도 확인할 수 있죠. 편집 작업과 실제 방문자 화면을 나눠 관리하기 편해집니다.

## 8. 수정이 안 된 게 아니라 옛 화면을 본 것

저는 이 문제를 워드프레스가 저장을 못 했다고 보기 전에 내가 어느 복사본을 보고 있는지 확인하는 문제라고 봅니다.

브라우저, 플러그인, 호스팅, CDN까지 같은 페이지가 여러 층에 저장될 수 있기 때문입니다.

편집기 저장 확인, 시크릿 창, 플러그인 캐시, 서버 캐시, CDN 순서로 가시면 대부분 빠르게 원인을 찾을 수 있습니다. 해결하려고 같은 글을 계속 저장하는 것보다 캐시가 있는 위치를 한 단계씩 벗겨보는 편이 정확합니다.

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
