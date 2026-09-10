---
title: "워드프레스 로그인했는데 다시 로그인 화면, 비밀번호보다 먼저 볼 곳"
description: "아이디와 비밀번호를 정확히 입력했는데 관리자 화면으로 가지 않고 다시 로그인 화면이 반복되는 경우가 있습니다."
date: 2026-08-22
updated: 2026-08-22
category: "가이드"
subcategory: "워드프레스"
tags:
  - "워드프레스"
  - "로그인"
  - "쿠키"
  - "세션"
  - "관리자"
image: "/assets/posts/guide-images/wordpress-guide.jpg"
imageAlt: "워드프레스 로그인 화면이 반복되는 문제"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

아이디와 비밀번호를 정확히 입력했는데 관리자 화면으로 가지 않고 다시 로그인 화면이 반복되는 경우가 있습니다.

비밀번호가 틀렸다는 메시지도 없고 계속 같은 화면만 나온다면 계정 자체보다 쿠키와 주소 설정을 먼저 확인할 필요가 있습니다.

워드프레스는 로그인 상태를 브라우저 쿠키로 유지하죠. 브라우저가 쿠키를 제대로 저장하지 못하거나 사이트 주소가 서로 어긋나면 로그인에 성공한 뒤에도 다시 로그아웃된 것처럼 보일 수 있습니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/wordpress-guide.jpg" alt="워드프레스 로그인 화면이 반복되는 문제" width="1200" height="675" loading="lazy" decoding="async" />

## 1. 비밀번호 오류와 구분

비밀번호가 틀린 경우에는 보통 로그인 실패 안내가 표시됩니다.

반대로 입력을 받아들인 것처럼 화면이 넘어갔다가 다시 같은 로그인 페이지로 돌아온다면 세션과 쿠키 문제를 먼저 의심해볼 수 있죠.

다른 브라우저나 시크릿 창에서 접속해보시면 범위를 빠르게 나눌 수 있습니다. 다른 브라우저에서는 된다면 서버보다 현재 브라우저의 저장 데이터가 원인일 가능성이 높습니다.

## 2. 쿠키와 캐시부터 정리

브라우저에서 해당 사이트의 쿠키와 캐시를 지운 뒤 다시 로그인해보시면 됩니다.

전체 인터넷 기록을 지울 필요는 없고 가능하다면 워드프레스 사이트에 해당하는 저장 데이터만 정리하는 편이 편하죠.

쿠키 차단 확장 프로그램이나 강한 개인정보 보호 설정도 확인하시면 좋습니다. 로그인 과정에서 필요한 쿠키가 막히면 비밀번호가 맞아도 관리자 상태를 유지하지 못할 수 있습니다.

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

## 3. 사이트 주소가 섞여 있지 않은지 확인

사이트를 최근에 HTTPS로 전환했거나 도메인을 바꿨다면 워드프레스 주소와 실제 접속 주소가 다르게 남아 있을 수 있죠.

한쪽은 www가 붙고 다른 쪽은 빠졌거나, 한쪽만 HTTPS인 상태에서도 쿠키가 예상한 주소와 다르게 처리될 수 있습니다.

관리자 화면에 잠깐이라도 들어갈 수 있다면 일반 설정에서 두 주소가 의도한 값인지 확인하시면 됩니다. 주소를 직접 수정할 때는 잘못 바꾸면 사이트 접속 자체가 꼬일 수 있으므로 백업을 먼저 두는 편이 안전하죠.

## 4. 보안 플러그인과 캐시 확인

로그인 주소를 바꾸는 보안 플러그인, 로그인 시도를 제한하는 플러그인, 서버 캐시가 관리자 페이지에 영향을 주는 경우도 있습니다.

문제가 특정 업데이트 뒤 시작됐다면 해당 기능을 잠시 끄고 비교해보는 것이 좋습니다.

로그인 페이지와 관리자 페이지는 일반 방문자용 페이지처럼 캐시하지 않는 것이 보통입니다. 캐시 설정을 직접 바꾼 적이 있다면 관리자 주소가 예외 처리돼 있는지 확인할 필요가 있죠.

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

## 5. 비밀번호 재설정은 마지막이 아니다

로그인이 반복된다고 비밀번호를 계속 바꾸는 것은 원인 해결과 관계없을 수 있습니다.

비밀번호 변경 메일이 정상적으로 오고 새 비밀번호도 같은 증상을 보인다면 계정 정보보다 브라우저와 사이트 환경 쪽에 더 무게를 두는 편이 맞습니다.

반대로 다른 브라우저와 다른 기기에서도 모두 실패하고 로그인 오류가 명확하게 표시된다면 계정 복구 절차를 사용하시면 되죠. 증상을 나눠보면 필요 없는 비밀번호 변경을 줄일 수 있습니다.

## 6. 로그인은 인증보다 상태 유지가 중요

워드프레스 로그인 문제는 비밀번호를 맞히는 단계와 로그인 상태를 유지하는 단계가 따로 있습니다.

후자가 깨지면 사용자는 분명히 로그인했는데 사이트는 계속 처음 화면으로 돌려보내는 것처럼 보이죠.

제가 확인한다면 다른 브라우저, 사이트 쿠키 삭제, 주소 통일, 보안과 캐시 플러그인 순서로 봅니다. 계정을 의심하기 전에 로그인 상태가 어디에서 끊기는지부터 확인하는 편이 가장 빠릅니다.

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

## 7. 관리자 주소를 여러 개 저장하지 않는다

도메인 변경이나 HTTPS 전환을 여러 번 거친 사이트에서는 예전 관리자 주소가 브라우저 즐겨찾기에 남아 있을 수 있죠.

옛 주소로 접속한 뒤 새 주소로 이동하는 과정에서 쿠키 범위가 달라지면 로그인 반복처럼 느껴지는 문제가 생길 수 있습니다.

현재 사용하는 대표 도메인 하나로 관리자 주소를 통일하고 오래된 즐겨찾기는 정리하시면 좋습니다. 특히 www가 붙는 주소와 붙지 않는 주소를 번갈아 쓰는 습관은 문제를 찾기 어렵게 만듭니다.

## 8. 로그인 문제를 보안 문제로 착각하지 않는다

계속 튕긴다고 해서 바로 해킹을 의심할 필요는 없죠. 실제 침해가 의심될 만한 비밀번호 변경 알림, 알 수 없는 관리자 계정, 파일 변조가 없다면 먼저 일반적인 로그인 환경 문제부터 확인하는 편이 합리적입니다.

다만 정상적으로 로그인되던 계정의 이메일과 비밀번호가 갑자기 바뀌었거나 모르는 사용자가 추가됐다면 이야기가 달라집니다. 이 경우에는 쿠키 정리보다 계정과 사이트 보안 점검을 우선하셔야 합니다.

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
