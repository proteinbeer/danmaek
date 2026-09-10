---
title: "워드프레스 PHP 메모리 부족 오류, 한도만 올리면 문제가 다시 생기는 이유"
description: "워드프레스에서 허용된 메모리를 모두 사용했다는 오류가 나오면 가장 먼저 메모리 한도를 올리는 방법을 찾게 됩니다."
date: 2026-08-22
updated: 2026-08-22
category: "가이드"
subcategory: "워드프레스"
tags:
  - "워드프레스"
  - "PHP"
  - "메모리"
  - "메모리 한도"
  - "오류"
image: "/assets/posts/guide-images/wordpress-guide.jpg"
imageAlt: "워드프레스 PHP 메모리 한도 설정"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

워드프레스에서 허용된 메모리를 모두 사용했다는 오류가 나오면 가장 먼저 메모리 한도를 올리는 방법을 찾게 됩니다.

실제로 한도를 높이면 사이트가 바로 살아나는 경우가 있지만, 원인이 그대로라면 며칠 뒤 더 큰 숫자에서 같은 문제가 반복될 수 있죠.

PHP 메모리는 한 번의 요청에서 워드프레스와 플러그인이 사용할 수 있는 작업 공간입니다. 공간이 부족한 이유가 사이트 규모 때문인지, 특정 플러그인이 과도하게 사용하는지부터 나눠서 봐야 합니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/wordpress-guide.jpg" alt="워드프레스 PHP 메모리 한도 설정" width="1200" height="675" loading="lazy" decoding="async" />

## 1. 메모리 오류가 생기는 순간

대형 이미지를 처리하거나 백업을 만들고, 많은 상품을 한꺼번에 불러오거나 무거운 편집기를 열 때 메모리 사용량이 급격히 늘 수 있습니다.

평소 사이트는 정상인데 특정 작업에서만 오류가 난다면 그 작업이 얼마나 많은 메모리를 요구하는지 먼저 볼 필요가 있죠.

관리자 화면만 느리고 방문자 페이지는 정상인 경우도 있습니다. 관리자 작업은 업데이트, 플러그인 관리처럼 한 번에 더 많은 기능을 불러오기 때문에 메모리 요구량이 커질 수 있습니다.

## 2. 사이트 건강도에서 현재 값을 확인

워드프레스 사이트 건강도 정보에서는 PHP와 서버 환경의 여러 값을 확인할 수 있죠.

현재 메모리 한도와 업로드 관련 제한, PHP 버전 같은 정보를 먼저 보시면 무작정 설정 파일을 수정하는 것보다 안전합니다.

호스팅 관리 화면에서도 PHP 설정을 제공하는 경우가 많습니다. 직접 서버 파일을 수정하기 전에 호스팅이 제공하는 공식 설정 메뉴가 있는지 확인하시는 편이 좋습니다.

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

## 3. 한도를 올려도 해결되지 않는 경우

메모리 한도를 높였는데도 짧은 시간 안에 다시 꽉 찬다면 특정 플러그인이나 작업이 비정상적으로 자원을 쓰고 있을 수 있죠.

이때 계속 숫자만 키우면 문제가 늦게 나타날 뿐 원인은 남습니다.

최근 설치한 플러그인, 대형 통계 플러그인, 이미지 처리, 백업, 가져오기 작업을 차례로 확인하시면 됩니다. 오류가 특정 기능에서만 재현된다면 그 기능을 중심으로 범위를 좁히는 편이 빠릅니다.

## 4. 호스팅 상한선도 따로 있다

워드프레스 설정에서 원하는 숫자를 지정하더라도 실제 서버가 더 낮은 PHP 한도를 강제로 적용하면 그 이상 사용할 수 없습니다.

공유 호스팅에서는 요금제별로 메모리와 실행 시간 제한이 정해진 경우가 있어 설정값만 바꿔서는 해결되지 않을 수 있죠.

이럴 때는 호스팅 지원에 실제 적용 가능한 PHP 메모리 한도를 문의하는 것이 정확합니다. 고사양 요금제로 올리기 전에 문제가 특정 플러그인 때문인지 먼저 확인하는 편이 비용도 줄일 수 있습니다.

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

## 5. 플러그인 수만 보고 판단하지 않는다

플러그인이 스무 개 있다고 해서 열 개보다 무조건 메모리를 많이 쓰는 것은 아닙니다.

가벼운 기능 여러 개보다 복잡한 페이지 빌더, 백업, 통계 플러그인 하나가 특정 요청에서 훨씬 많은 메모리를 사용할 수 있죠.

그래서 개수보다 역할과 실제 사용량을 보는 편이 맞습니다. 사용하지 않는 플러그인은 정리하되 숫자를 줄이는 것 자체를 목표로 삼을 필요는 없습니다.

## 6. 메모리 한도는 치료보다 안전망

저는 메모리 한도를 올리는 작업을 해결책보다 숨통을 틔우는 응급조치로 봅니다.

정상적인 작업이 조금 더 많은 메모리를 필요로 한다면 효과적이지만, 비정상적인 사용량까지 계속 받아주는 방식은 결국 같은 오류를 늦출 뿐입니다.

현재 한도 확인, 오류가 나는 작업 확인, 최근 플러그인 변경 확인, 호스팅 상한선 확인 순서로 보시면 되죠. 숫자를 올리기 전에 왜 모자랐는지를 찾는 것이 장기적으로 가장 안정적인 해결입니다.

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

## 7. 업데이트 직후라면 버전 궁합을 확인

워드프레스나 PHP를 업데이트한 직후 메모리 사용량이 크게 늘었다면 플러그인의 호환 문제도 살펴볼 필요가 있습니다.

예전 방식으로 동작하던 기능이 새 환경에서 오류를 반복하거나 불필요한 처리를 계속하면서 메모리를 잡아먹을 수 있습니다.

플러그인 개발사가 현재 PHP 버전을 지원하는지, 같은 증상에 대한 수정판이 나왔는지 확인하시면 좋죠. 단순히 서버 사양이 낮다고 결론 내리기 전에 소프트웨어 조합을 보는 이유입니다.

## 8. 관리자 작업을 나눠서 실행

대량 이미지 처리, 백업, 가져오기, 데이터 정리 같은 무거운 작업을 동시에 실행하면 각각은 정상이어도 한순간에 메모리가 부족해질 수 있습니다.

큰 작업은 하나씩 끝낸 뒤 다음 작업을 진행하면 같은 서버에서도 안정적으로 처리되는 경우가 있습니다.

사이트 운영에서는 최고 사양보다 자원을 몰아서 쓰지 않는 방식도 중요하죠. 특히 공유 호스팅이라면 무거운 작업 시간을 방문자가 적은 때로 나누는 것만으로도 오류 빈도를 줄일 수 있습니다.

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
