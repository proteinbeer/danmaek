---
title: "워드프레스 글만 404가 뜬다면, 삭제보다 고유주소부터 확인할 이유"
description: "워드프레스 관리자 화면과 메인 페이지는 정상인데 글이나 카테고리만 404 오류가 뜨는 경우가 있습니다."
date: 2026-08-24
updated: 2026-08-24
category: "가이드"
subcategory: "워드프레스"
tags:
  - "워드프레스"
  - "404"
  - "고유주소"
  - "주소"
  - "오류"
image: "/assets/posts/guide-images/wordpress-guide.jpg"
imageAlt: "워드프레스 고유주소 설정 화면"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

워드프레스 관리자 화면과 메인 페이지는 정상인데 글이나 카테고리만 404 오류가 뜨는 경우가 있습니다.

이럴 때 게시물이 지워졌다고 생각하기 쉽지만 여러 글이 동시에 같은 증상을 보인다면 주소 규칙과 서버의 재작성 설정을 먼저 보는 편이 맞죠.

고유주소는 글을 저장하는 기능이 아니라 저장된 글을 어떤 주소로 연결할지 정하는 규칙입니다. 글이 그대로 있어도 길을 찾는 규칙이 깨지면 방문자는 없는 페이지처럼 보게 됩니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/wordpress-guide.jpg" alt="워드프레스 고유주소 설정 화면" width="1200" height="675" loading="lazy" decoding="async" />

## 1. 한 글인지 여러 글인지 구분

글 하나만 404라면 해당 글의 공개 상태와 주소를 확인하시면 됩니다.

반대로 수십 개 글과 카테고리가 동시에 안 열린다면 개별 콘텐츠보다 고유주소 전체 문제일 가능성이 큽니다.

관리자 글 목록에서 게시물이 정상적으로 존재하는지 먼저 보시면 되죠. 데이터가 살아 있다는 사실만 확인해도 삭제와 주소 문제를 빠르게 나눌 수 있습니다.

## 2. 고유주소 설정을 다시 저장

설정의 고유주소 화면에서 현재 구조를 확인하고 변경하지 않은 상태로 다시 저장해보시면 됩니다.

이 과정에서 워드프레스가 주소 재작성 규칙을 다시 생성해 정상으로 돌아오는 경우가 있죠.

문제를 해결하려고 주소 형식을 곧바로 다른 구조로 바꾸는 것은 추천하지 않습니다. 이미 검색엔진과 외부 링크에 등록된 주소가 있다면 새 문제를 만들 수 있습니다.

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

## 3. 서버 재작성 기능 확인

보기 좋은 고유주소는 웹서버의 주소 재작성 기능과 연결됩니다.

아파치 계열 서버에서는 재작성 기능과 설정 파일이 중요하고, 다른 서버 환경에서는 각 서버가 사용하는 규칙이 따로 적용되죠.

호스팅에서 서버 설정을 직접 만질 수 없다면 고유주소를 다시 저장한 뒤에도 문제가 남는지 확인하고 고객센터에 재작성 기능이 정상인지 문의하시면 됩니다. 권한을 임의로 크게 바꾸는 것보다 안전합니다.

## 4. 이전과 복원 뒤 자주 생기는 이유

호스팅 이전이나 백업 복원 뒤에는 예전 서버에서 사용하던 주소 규칙이 새 환경과 맞지 않을 수 있죠.

파일과 데이터베이스를 모두 옮겼는데 글만 404가 된다면 이전 자체가 실패했다고 보기보다 새 서버의 재작성 설정을 확인할 필요가 있습니다.

도메인까지 함께 바꿨다면 내부 링크가 예전 주소를 가리키는지도 보시면 됩니다. 이 경우 고유주소 문제와 오래된 링크 문제가 같이 보일 수 있어 하나씩 나눠서 확인하는 편이 좋죠.

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

## 5. 리디렉션과 보안 플러그인 확인

리디렉션 플러그인이나 보안 플러그인이 특정 주소 패턴을 바꾸면서 404를 만들 수도 있습니다.

문제가 최근 플러그인 업데이트나 설정 변경 직후 시작됐다면 해당 기능을 잠시 끄고 비교해보시면 됩니다.

캐시가 예전 404 화면을 저장하고 있는 경우도 있죠. 서버에서 문제를 해결한 뒤 시크릿 창과 캐시 삭제 상태에서 다시 확인해야 실제 복구 여부를 판단할 수 있습니다.

## 6. 주소 구조를 바꿔야 한다면 준비가 필요

날짜가 들어간 주소를 글 이름 중심으로 바꾸는 것처럼 고유주소 구조 자체를 변경해야 할 때도 있습니다.

하지만 이미 공개된 사이트라면 기존 주소에서 새 주소로 이동시키는 리디렉션 계획을 먼저 세우는 편이 안전하죠.

주소를 바꾸는 순간 기존 즐겨찾기와 외부 링크가 끊길 수 있습니다. 검색엔진도 새 주소를 다시 이해해야 하므로 단순 디자인 선택처럼 가볍게 바꿀 설정은 아닙니다.

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

## 7. 새 글만 정상일 때는 범위를 더 좁힌다

새로 만든 글은 열리는데 오래된 글만 404라면 과거에 사용한 카테고리 주소, 커스텀 글 유형, 예전 리디렉션 규칙을 확인할 필요가 있습니다.

전체 고유주소가 깨졌다면 보통 더 넓은 범위에서 문제가 나타나기 때문입니다.

특정 카테고리만 안 열린다면 카테고리 기본 주소와 플러그인 설정도 함께 볼 수 있죠. 범위를 먼저 좁히면 데이터베이스를 직접 건드릴 이유가 줄어듭니다.

## 8. 404는 글이 없다는 뜻만은 아니다

저는 워드프레스에서 여러 글이 동시에 404가 뜨면 콘텐츠보다 길 안내판이 망가졌다고 생각합니다.

글은 그대로 있는데 서버가 그 주소를 어느 글로 보내야 하는지 모르는 상태일 수 있기 때문입니다.

글 존재 확인, 고유주소 다시 저장, 서버 재작성, 최근 플러그인 변경, 캐시 순서로 보시면 됩니다. 삭제와 재작성부터 시작하지 않는 것이 가장 안전한 해결 순서입니다.

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
