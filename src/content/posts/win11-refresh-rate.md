---
title: "윈도우 11 주사율 변경, 144Hz 모니터가 60Hz로 보일 때"
description: "144Hz나 165Hz 모니터를 연결했는데 움직임이 예전 60Hz 화면과 별 차이가 없다면 모니터 불량부터 의심하기 쉽습니다."
date: 2026-08-26
updated: 2026-08-26
category: "가이드"
subcategory: "윈도우 11"
tags:
  - "윈도우 11"
  - "주사율"
  - "144Hz"
  - "모니터"
  - "디스플레이"
image: "/assets/posts/guide-images/hero-bloom.jpg"
imageAlt: "윈도우 11 고급 디스플레이 설정 화면"
imageWidth: 1920
imageHeight: 1080
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

144Hz나 165Hz 모니터를 연결했는데 움직임이 예전 60Hz 화면과 별 차이가 없다면 모니터 불량부터 의심하기 쉽습니다.

하지만 윈도우에서 실제 주사율이 60Hz로 설정된 상태라면 고주사율 모니터도 60Hz처럼 동작합니다.

새 모니터를 연결하거나 그래픽 드라이버를 다시 설치한 뒤 이런 일이 생길 수 있습니다.

제품 상자에 적힌 최대 주사율과 현재 윈도우가 출력하는 주사율은 따로 확인해야 합니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/hero-bloom.jpg" alt="윈도우 11 고급 디스플레이 설정 화면" width="1280" height="720" loading="lazy" decoding="async" />

## 1. 현재 주사율 확인

설정에서 시스템, 디스플레이, 고급 디스플레이 순서로 들어가면 선택한 모니터의 해상도와 현재 주사율을 확인할 수 있습니다.

듀얼 모니터라면 상단에서 확인할 화면을 먼저 정확히 고릅니다.

주사율 선택 목록에는 해당 모니터와 현재 연결 조건에서 사용할 수 있는 값이 표시됩니다.

144Hz 모니터인데 60Hz만 보인다면 단순 설정 문제가 아니라 연결 조건을 더 확인해야 할 가능성이 큽니다.

고주사율을 선택한 뒤 화면이 잠깐 꺼졌다 돌아오는 것은 출력 모드가 바뀌면서 생길 수 있는 정상적인 과정입니다.

화면이 정상적으로 보이면 설정을 유지하면 됩니다.

## 2. 높은 주사율이 목록에 없을 때

먼저 현재 해상도를 확인합니다.

일부 모니터와 연결 방식은 최고 해상도에서 지원 가능한 주사율이 제한될 수 있습니다.

그래픽카드 포트와 모니터 포트, 케이블 규격도 중요합니다.

예전에 쓰던 케이블이 화면 출력은 가능해도 새 모니터의 최고 해상도와 고주사율 조합까지 지원하지 못할 수 있습니다.

그래픽 드라이버가 정상적으로 설치됐는지도 확인해야 합니다.

윈도우를 새로 설치한 직후 기본 디스플레이 드라이버로 동작하면 선택 가능한 출력 모드가 제한될 수 있습니다.

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

## 3. 게임 설정과 윈도우 설정은 따로 본다

윈도우를 144Hz로 설정해도 게임 내부에서 프레임 제한이나 별도 주사율 옵션이 걸려 있을 수 있습니다.

반대로 게임에서 높은 값을 선택해도 윈도우 출력 자체가 60Hz라면 원하는 체감을 얻기 어렵습니다.

그래서 고주사율 문제는 윈도우, 게임, 모니터 세 곳을 따로 확인하는 편이 좋습니다.

한 곳만 보고 설정이 맞다고 판단하면 원인을 놓치기 쉽습니다.

VRR을 지원하는 모니터라면 게임 프레임과 화면 주사율을 동적으로 맞춰 화면 찢어짐과 끊김을 줄이는 데 도움을 받을 수 있습니다.

고정 주사율 숫자만 높이는 것과 실제 게임이 부드럽게 보이는 것은 조금 다른 문제입니다.

## 4. 노트북은 동적 주사율도 확인

일부 윈도우 11 노트북은 동적 주사율을 지원합니다.

스크롤이나 펜 입력처럼 부드러움이 필요한 순간에는 높은 주사율을 쓰고 정적인 작업에서는 낮춰 배터리 사용을 줄이는 방식입니다.

항상 최고 주사율로 고정하면 화면은 부드럽지만 배터리 사용 시간이 줄 수 있습니다.

밖에서 오래 써야 하는 노트북이라면 동적 주사율이 더 현실적인 선택이 될 수 있습니다.

데스크톱에서는 전력보다 성능과 부드러움이 우선이라 최고 주사율 고정을 선호하는 경우가 많습니다.

같은 윈도우 설정이라도 기기 목적에 따라 답이 달라집니다.

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

## 5. 숫자만 높다고 체감이 같은 것은 아니다

60Hz에서 144Hz로 올라갈 때는 마우스 움직임과 스크롤만으로도 차이를 느끼는 사람이 많습니다.

하지만 144Hz에서 더 높은 주사율로 갈수록 체감은 개인과 게임 종류에 따라 달라질 수 있습니다.

게임 프레임이 주사율보다 훨씬 낮다면 모니터의 최대 성능을 계속 활용하는 것도 어렵습니다.

고주사율 모니터는 그래픽카드가 충분한 프레임을 내주는 환경에서 더 의미가 커집니다.

새 모니터를 사고도 차이가 없다고 느끼신다면 가장 먼저 윈도우의 고급 디스플레이를 열어보시면 됩니다.

의외로 비싼 모니터를 사놓고 몇 달 동안 60Hz로 쓰는 실수는 설정 한 번 때문에 생기죠.

## 6. 새 모니터를 샀다면 첫날 확인

고주사율 모니터를 새로 연결했다면 해상도, 주사율, HDR 세 가지를 첫날 함께 확인하는 습관이 좋습니다.

윈도우가 안전한 기본값으로 잡으면서 제품의 최고 성능보다 낮은 설정으로 시작하는 경우가 있기 때문입니다.

모니터 자체 메뉴에서 현재 입력 신호의 주사율을 보여주는 제품도 있습니다.

윈도우 값과 모니터 표시가 같은지 확인하면 실제 출력 상태를 더 확실하게 판단할 수 있습니다.

게임에서만 이상하다면 그래픽카드 제어 프로그램과 게임 내 프레임 제한도 봅니다.

주사율은 모니터 하나의 숫자가 아니라 윈도우와 그래픽카드와 게임이 함께 맞아야 체감되는 설정입니다.

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
