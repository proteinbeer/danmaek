---
title: "워드프레스 큰 파일만 업로드가 안 된다면, 용량 제한은 한곳이 아닙니다"
description: "워드프레스에서 작은 이미지는 잘 올라가는데 영상이나 큰 압축 파일만 거부되는 경우가 있죠."
date: 2026-08-23
updated: 2026-08-23
category: "가이드"
subcategory: "워드프레스"
tags:
  - "워드프레스"
  - "업로드"
  - "용량 제한"
  - "PHP"
  - "미디어"
image: "/assets/posts/guide-images/wordpress-guide.jpg"
imageAlt: "워드프레스 최대 업로드 크기 설정"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

워드프레스에서 작은 이미지는 잘 올라가는데 영상이나 큰 압축 파일만 거부되는 경우가 있죠.

관리자 화면에 최대 업로드 크기가 표시되지만 실제로는 서버의 여러 제한 중 가장 낮은 값이 적용될 수 있어 숫자 하나만 바꾸고 끝내기 어렵습니다.

업로드 용량은 워드프레스 자체보다 PHP와 호스팅 설정의 영향을 크게 받습니다. 그래서 플러그인을 먼저 설치하기보다 현재 서버에서 허용하는 값을 확인하는 것이 순서입니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/wordpress-guide.jpg" alt="워드프레스 최대 업로드 크기 설정" width="1200" height="675" loading="lazy" decoding="async" />

## 1. 미디어 추가 화면의 숫자 확인

미디어 추가 화면에는 현재 업로드 가능한 최대 파일 크기가 표시됩니다.

이 숫자보다 큰 파일이라면 워드프레스가 업로드를 시작하기 전부터 제한에 걸릴 수 있습니다.

사이트 건강도 정보에서도 최대 업로드 크기와 요청 데이터 크기를 확인할 수 있죠. 두 값이 다르다면 실제 업로드는 더 낮은 제한의 영향을 받을 수 있습니다.

## 2. 업로드 크기와 요청 크기는 다르다

서버에는 한 파일의 최대 업로드 크기와 한 번의 요청 전체 크기를 따로 제한하는 설정이 있습니다.

파일 하나는 제한 안에 들어와도 여러 파일을 동시에 올리거나 추가 데이터가 붙으면 전체 요청 크기에서 막힐 수 있죠.

그래서 한 번에 여러 개가 실패한다면 한 파일씩 올려보는 것도 좋은 비교 방법입니다. 같은 파일이 단독으로는 올라간다면 전체 요청 제한과 연관됐을 가능성이 있습니다.

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

## 3. 호스팅 관리 화면을 먼저 본다

많은 호스팅 서비스는 PHP 설정 메뉴에서 업로드 크기와 실행 시간 같은 값을 조절할 수 있게 제공합니다.

직접 설정 파일을 수정하기 전에 공식 관리 화면이 있는지 확인하시면 실수할 가능성을 줄일 수 있죠.

변경 가능한 최대값은 요금제와 서버 정책에 따라 다를 수 있습니다. 화면에서 값을 높였는데 실제 업로드 크기가 그대로라면 호스팅이 상위 제한을 걸고 있는지 문의하는 편이 빠릅니다.

## 4. 워드프레스 플러그인으로 해결되지 않는 경우

업로드 제한을 늘려준다는 플러그인을 설치해도 서버가 더 낮은 상한을 강제로 적용하면 실제 값은 올라가지 않을 수 있습니다.

플러그인이 표시 숫자만 바꾸고 서버 정책까지 바꾸지는 못하는 경우가 있기 때문입니다.

이럴 때 플러그인을 여러 개 바꾸기보다 호스팅의 PHP 설정과 사이트 건강도 값을 비교하시는 편이 정확하죠. 문제를 해결하려고 플러그인을 추가하다가 사이트만 더 복잡해질 수 있습니다.

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

## 5. 큰 영상은 워드프레스에 직접 올릴 필요가 적다

업로드 제한을 크게 늘릴 수 있다고 해서 모든 대형 파일을 워드프레스 서버에 넣는 것이 좋은 선택은 아닙니다.

영상은 저장 공간과 트래픽을 빠르게 사용하고 재생 성능까지 호스팅에 부담을 줄 수 있습니다.

블로그라면 유튜브 같은 외부 서비스에 영상을 올리고 삽입하는 방식이 더 효율적인 경우가 많습니다. 큰 파일을 올려야 하는 이유가 분명한지부터 판단하면 서버 비용을 줄일 수 있죠.

## 6. 가져오기 파일은 다른 접근이 필요할 수 있다

사이트 이전용 내보내기 파일처럼 꼭 큰 파일을 올려야 하는 경우에는 업로드 제한을 잠시 조정하거나 파일을 나누는 방법을 고려할 수 있습니다.

호스팅에서 별도 가져오기 기능을 제공한다면 브라우저 업로드보다 그 기능이 안정적인 경우도 있습니다.

대형 파일을 한 번 올리기 위해 서버 전체 제한을 지나치게 크게 유지할 필요는 없죠. 작업이 끝난 뒤 원래 수준으로 되돌리는 것도 보안과 자원 관리 측면에서 의미가 있습니다.

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

## 7. 실행 시간도 함께 확인

파일 크기 제한은 충분한데 업로드가 중간에 끊긴다면 서버의 실행 시간이나 네트워크 연결도 영향을 줄 수 있습니다.

특히 느린 회선에서 큰 파일을 올릴 때는 제한 시간 안에 요청이 끝나지 못해 실패할 수 있죠.

같은 파일을 더 빠른 네트워크에서 올려보거나 호스팅의 실행 제한을 확인하면 원인을 나누는 데 도움이 됩니다. 크기가 문제처럼 보여도 실제로는 시간 제한일 수 있습니다.

## 8. 큰 숫자보다 필요한 크기

저는 업로드 제한을 무조건 크게 만드는 것보다 사이트에서 실제로 필요한 파일 크기를 기준으로 정하는 편이 좋다고 봅니다.

이미지는 업로드 전에 줄이고, 영상은 외부 서비스를 활용하면 생각보다 높은 제한이 필요하지 않습니다.

현재 제한 확인, 호스팅 PHP 설정, 요청 크기, 실행 시간 순서로 보시면 되죠. 최대값을 키우는 것이 목적이 아니라 필요한 파일이 안정적으로 올라가는 환경을 만드는 것이 핵심입니다.

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
