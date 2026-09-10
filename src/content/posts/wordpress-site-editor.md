---
title: "워드프레스 헤더 하나 바꿨는데 전체가 달라진다면, 사이트 편집기부터 이해할 것"
description: "블록 테마를 사용하는 워드프레스에서는 외모, 편집기에서 헤더와 푸터, 템플릿, 전체 스타일을 한곳에서 수정할 수 있습니다."
date: 2026-08-22
updated: 2026-08-22
category: "가이드"
subcategory: "워드프레스"
tags:
  - "워드프레스"
  - "사이트 편집기"
  - "블록 테마"
  - "템플릿"
  - "헤더"
image: "/assets/posts/guide-images/wordpress-guide.jpg"
imageAlt: "워드프레스 사이트 편집기 화면"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

블록 테마를 사용하는 워드프레스에서는 외모, 편집기에서 헤더와 푸터, 템플릿, 전체 스타일을 한곳에서 수정할 수 있습니다.

문제는 페이지 하나만 바꾼다고 생각하고 저장했는데 사이트 전체가 달라지는 일이 생길 수 있다는 점입니다.

사이트 편집기는 개별 글 편집기와 역할이 다릅니다. 반복해서 사용하는 구조와 전체 스타일을 만지는 공간이므로 어떤 대상을 수정하고 있는지 먼저 확인하는 습관이 필요합니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/wordpress-guide.jpg" alt="워드프레스 사이트 편집기 화면" width="1200" height="675" loading="lazy" decoding="async" />

## 1. 사이트 편집기는 블록 테마에서 보인다

외모 메뉴에 사이트 편집기가 보인다면 현재 블록 테마를 사용하고 있을 가능성이 높습니다.

최근 워드프레스에서는 이 화면에서 사이트 정체성, 스타일, 페이지, 내비게이션, 패턴, 템플릿을 관리할 수 있죠.

클래식 테마에서는 같은 메뉴 구성이 보이지 않을 수 있습니다. 인터넷 설명과 내 화면이 다르다면 워드프레스 버전보다 먼저 테마 방식이 다른지 확인하시는 편이 좋습니다.

## 2. 페이지와 템플릿은 같은 것이 아니다

페이지는 실제 본문 콘텐츠이고 템플릿은 그 콘텐츠가 들어가는 공통 구조입니다.

페이지 본문을 바꾸면 그 페이지 내용만 달라지지만 템플릿을 수정하면 같은 템플릿을 사용하는 여러 페이지가 함께 바뀔 수 있죠.

사이트 편집기에서 페이지를 열었을 때 지금 본문을 수정하는지 템플릿을 수정하는지 구분하시면 됩니다. 전체가 갑자기 바뀌는 실수는 이 둘을 혼동할 때 많이 생깁니다.

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

## 3. 헤더와 푸터는 반복 구조

헤더와 푸터는 보통 템플릿 파트로 관리되며 여러 페이지에서 반복해서 사용됩니다.

로고 하나를 바꾸거나 메뉴 위치를 수정했을 때 사이트 전체에 반영되는 것이 정상입니다.

특정 페이지만 다른 헤더가 필요하다면 공통 헤더를 직접 바꾸기보다 별도 템플릿이나 다른 구조를 만드는 쪽이 맞죠. 반복 요소를 개별 페이지처럼 다루면 나중에 관리가 꼬일 수 있습니다.

## 4. 스타일은 사이트 전체에 영향을 줄 수 있다

사이트 편집기의 스타일에서는 글꼴, 색상, 여백, 블록 기본 디자인을 전역으로 바꿀 수 있습니다.

특정 버튼 하나를 수정하다가 같은 종류의 모든 버튼에 적용하는 기능을 사용하면 다른 페이지까지 디자인이 변할 수 있죠.

저장 전에는 변경 대상 목록을 확인하시는 편이 좋습니다. 사이트 편집기는 한 번의 저장에 템플릿과 패턴, 내비게이션 변경이 함께 포함될 수 있습니다.

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

## 5. 저장 화면을 그냥 넘기지 않는다

사이트 편집기에서 저장을 누르면 어떤 항목이 변경됐는지 목록이 표시될 수 있죠.

여기서 예상하지 못한 템플릿과 메뉴가 함께 선택돼 있다면 바로 저장하기 전에 변경 범위를 다시 확인하시면 됩니다.

한 번에 여러 곳을 만진 뒤 저장하면 어떤 수정이 문제였는지 되돌리기 어려워집니다. 큰 디자인 변경은 한 덩어리씩 저장하고 화면을 확인하는 편이 안전합니다.

## 6. 목록 보기와 명령 팔레트 활용

블록이 여러 겹으로 들어간 헤더와 템플릿은 화면에서 원하는 요소를 클릭하기 어렵습니다.

목록 보기를 열면 블록 구조를 계층으로 확인할 수 있어 잘못된 상위 그룹을 선택하는 일을 줄일 수 있죠.

최근 사이트 편집기에는 명령 팔레트도 있어 템플릿과 페이지, 설정으로 빠르게 이동할 수 있습니다. 익숙해지면 관리자 메뉴를 계속 돌아다니는 것보다 훨씬 빠르게 원하는 편집 위치를 찾을 수 있습니다.

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

## 7. 큰 변경 전에는 스테이징에서 확인

사이트 전체 스타일과 공통 템플릿을 바꾸는 작업은 작은 글 수정과 영향 범위가 다릅니다.

운영 중인 사이트라면 스테이징에서 먼저 수정하고 모바일과 데스크톱 화면을 확인한 뒤 반영하는 편이 좋죠.

특히 헤더 메뉴와 광고 위치, 글 템플릿을 함께 바꾸는 경우에는 여러 페이지를 직접 열어보셔야 합니다. 편집기 미리보기만으로 실제 모든 화면을 확인했다고 생각하지 않는 편이 안전합니다.

## 8. 사이트 편집기는 전체 구조를 만지는 도구

저는 사이트 편집기를 페이지 빌더의 큰 버전이 아니라 워드프레스 사이트의 공통 규칙을 관리하는 장소로 보는 편이 이해하기 쉽다고 생각하죠.

그래서 작은 수정도 어디에 적용되는지 알고 저장하는 것이 중요합니다.

페이지, 템플릿, 템플릿 파트, 스타일을 구분하고 저장 전 변경 대상을 확인하시면 됩니다. 헤더 하나를 바꿨는데 전체가 달라진 것은 오류가 아니라 공통 구조를 수정했기 때문일 수 있죠.

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
