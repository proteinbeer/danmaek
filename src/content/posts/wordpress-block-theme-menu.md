---
title: "워드프레스 메뉴가 안 보인다면, 블록 테마에서 위치가 달라진 이유"
description: "워드프레스 사용법을 검색해 외모, 메뉴로 들어가라는 설명을 따라갔는데 내 관리자 화면에는 메뉴 항목 자체가 없는 경우가 있습니다."
date: 2026-08-23
updated: 2026-08-23
category: "가이드"
subcategory: "워드프레스"
tags:
  - "워드프레스"
  - "메뉴"
  - "내비게이션"
  - "블록 테마"
  - "헤더"
image: "/assets/posts/guide-images/wordpress-guide.jpg"
imageAlt: "워드프레스 블록 테마 내비게이션"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

워드프레스 사용법을 검색해 외모, 메뉴로 들어가라는 설명을 따라갔는데 내 관리자 화면에는 메뉴 항목 자체가 없는 경우가 있습니다.

최근 블록 테마에서는 내비게이션을 사이트 편집기와 내비게이션 블록에서 관리하기 때문에 예전 클래식 테마와 화면이 다를 수 있죠.

기능이 사라진 것이 아니라 관리 위치가 바뀐 것입니다. 인터넷 설명과 내 화면이 다르다면 플러그인 오류를 의심하기 전에 어떤 테마 방식을 사용하고 있는지 먼저 확인하시면 됩니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/wordpress-guide.jpg" alt="워드프레스 블록 테마 내비게이션" width="1200" height="675" loading="lazy" decoding="async" />

## 1. 블록 테마와 클래식 테마 차이

클래식 테마에서는 외모 메뉴 아래의 전통적인 메뉴 관리 화면을 사용하는 경우가 많습니다.

블록 테마에서는 외모, 편집기 안에서 사이트 전체 구조와 함께 내비게이션을 관리합니다.

같은 워드프레스라도 활성 테마에 따라 메뉴 위치가 달라질 수 있죠. 버전만 보고 설명을 고르기보다 현재 관리자 화면에 사이트 편집기가 있는지 확인하는 편이 빠릅니다.

## 2. 사이트 편집기 내비게이션 찾기

블록 테마에서는 외모, 편집기로 들어가 내비게이션 영역에서 저장된 메뉴를 확인할 수 있습니다.

여러 메뉴가 있다면 각각 이름을 바꾸고 항목 순서를 조정하거나 삭제할 수 있습니다.

메뉴를 만들었다고 화면에 자동으로 나타나는 것은 아닐 수 있죠. 실제 헤더에 내비게이션 블록이 있고 그 블록이 원하는 메뉴를 사용하도록 연결돼 있어야 합니다.

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

## 3. 메뉴를 만들었는데 안 보이는 이유

새 내비게이션을 저장했는데 사이트 헤더에는 예전 메뉴가 그대로 보인다면 헤더의 내비게이션 블록이 다른 메뉴를 선택하고 있을 수 있습니다.

사이트 편집기에서 헤더를 열고 내비게이션 블록의 설정을 확인하시면 되죠.

캐시 때문에 예전 메뉴가 남는 경우도 있습니다. 편집기에서는 정상인데 방문자 화면만 다르다면 캐시를 비우고 시크릿 창에서 다시 확인하시는 편이 좋습니다.

## 4. 하위 메뉴도 블록으로 관리

블록 테마의 내비게이션에서는 페이지 링크와 사용자 정의 링크를 블록처럼 추가하고 순서를 바꿀 수 있죠.

특정 항목 아래에 하위 메뉴를 넣을 때도 원하는 링크를 하위 구조로 배치하는 방식으로 관리합니다.

구조가 복잡해지면 화면에서 드래그하는 것보다 목록 보기를 사용하는 편이 정확합니다. 어떤 링크가 어느 상위 메뉴 안에 들어갔는지 계층을 한눈에 보기 쉽죠.

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

## 5. 페이지를 만들었다고 메뉴에 자동 추가되지는 않는다

새 페이지를 발행했는데 메뉴에 안 보인다고 오류는 아닙니다.

메뉴가 페이지 목록을 자동으로 사용하는 구조인지, 직접 선택한 링크 목록인지에 따라 새 페이지 반영 방식이 달라질 수 있습니다.

원하는 메뉴에 페이지 링크를 직접 추가하고 저장하시면 됩니다. 자동 목록을 사용하는 경우에는 필요하지 않은 페이지까지 메뉴에 들어갈 수 있어 사이트 구조에 맞춰 방식을 선택하는 편이 좋죠.

## 6. 여러 메뉴가 있을 때 이름을 붙인다

헤더 메뉴, 푸터 메뉴, 모바일용 메뉴처럼 내비게이션이 여러 개라면 이름을 명확히 정하는 편이 좋습니다.

이름 없이 비슷한 메뉴가 여러 개 있으면 어떤 블록이 어느 메뉴를 쓰는지 나중에 구분하기 어렵습니다.

최근 내비게이션 블록은 사용 중인 메뉴 이름을 확인하기 쉬워졌지만 처음부터 용도 중심으로 이름을 정해두는 것이 관리에 유리합니다. 메뉴 복사본을 만들 때도 테스트인지 운영용인지 표시하시면 좋죠.

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

## 7. 헤더 수정은 전체 페이지에 영향을 준다

헤더의 내비게이션은 여러 페이지가 공통으로 사용하는 템플릿 파트에 들어가는 경우가 많습니다.

메뉴 위치나 디자인을 바꾸면 사이트 전체 페이지에 반영되는 것이 정상입니다.

특정 페이지만 다른 메뉴가 필요하다면 공통 헤더를 직접 바꾸기보다 별도 템플릿을 만드는 방법을 고려할 수 있습니다. 공통 구조를 개별 페이지처럼 수정하면 예상보다 큰 범위가 변할 수 있습니다.

## 8. 메뉴가 없어진 게 아니라 편집 방식이 바뀌었다

저는 블록 테마를 처음 쓰면서 가장 혼란스러운 부분 중 하나가 예전 관리자 메뉴가 사라진 것처럼 보이는 점이라고 생각하죠.

하지만 기능을 사이트 편집기 안으로 모은 흐름을 이해하면 오히려 헤더와 메뉴를 한 화면에서 관리하기 편해집니다.

사이트 편집기 확인, 내비게이션 목록 확인, 헤더 블록 연결, 저장과 캐시 확인 순서로 보시면 됩니다. 예전 설명에서 외모, 메뉴를 찾지 못했다고 플러그인을 설치할 필요는 없습니다.

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
