---
title: "그래픽카드 온도 확인과 90도를 넘기는 과열 해결법, GPU 클럭이 내려갈 때"
description: "게임 중 그래픽카드 온도가 90도를 넘거나 성능이 자꾸 떨어진다면 다운클럭이 시작된 상태입니다. 온도를 확인하는 방법과 써멀, 방열판 청소로 해결하는 순서를 정리했습니다."
date: 2026-09-07
updated: 2026-09-07
category: "가이드"
subcategory: "PC·하드웨어"
tags:
  - "그래픽카드"
  - "GPU 온도"
  - "과열"
  - "써멀구리스"
image: "/assets/posts/guide-images/hero-bloom.jpg"
imageAlt: "그래픽카드 설치된 PC 내부와 GPU 온도 확인"
imageWidth: 1920
imageHeight: 1080
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

게임을 하다가 프레임이 급격히 떨어지거나 화면이 끊긴다면 그래픽카드 온도가 문제일 수 있습니다. GPU 온도를 확인하고, 필요하면 써멀 페이스트 재도포로 해결하는 과정을 소개합니다.

그래픽카드는 일정 온도를 넘으면 스스로 클럭을 낮춰 발열을 줄이는 보호 기능이 있습니다. 이 상태가 반복되면 게임 성능이 말도 안 되게 떨어집니다. 특히 90도 안팎을 넘나드는 고온이라면 쿨러 먼지, 써멀 페이스트 노후화, 케이스 통풍 부족 같은 원인이 있는지 점검해야 합니다. 온도를 정확히 확인하고, 원인을 찾아 단계적으로 해결하는 방법을 정리했습니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/hero-bloom.jpg" alt="그래픽카드 설치된 PC 내부와 GPU 온도 확인" width="1280" height="720" loading="lazy" decoding="async" />

## 1. GPU 온도 확인하는 법

온도는 게임을 실행한 상태에서 측정해야 의미가 있습니다. 작업 관리자로도 간단히 확인할 수 있습니다.

Windows의 작업 관리자를 켜고(GPU 섹션) 그래픽카드 온도를 실시간으로 볼 수 있습니다. 하지만 시간에 따른 변화를 더 정확히 보려면 **HWiNFO**나 **MSI Afterburner** 같은 무료 모니터링 도구가 좋습니다. 게임을 켠 채로 온도 로그를 기록하면 최고 온도가 어디까지 올라가는지 확인할 수 있습니다.

정상 범위는 제품마다 다르지만, 일반적으로 아이들(가만히 있을 때) 40~50도, 게임 중 65~80도 정도가 정상입니다. 85도를 넘어 계속 90도 주변에 머문다면 무언가 문제가 있을 가능성이 높습니다.

## 2. 과열이 성능에 미치는 영향

온도가 한계치를 넘으면 GPU가 클럭을 내립니다. 이 순간 프레임이 뚝 떨어지는 이유가 여기 있습니다.

그래픽카드의 부스트 클럭은 온도와 타이트하게 연동됩니다. 발열이 심해지면 칩셋이 손상되지 않도록 스스로 동작 속도를 낮추는데 이를 **써멀 스로틀링**이라고 합니다. 결과적으로 같은 게임인데도 처음엔 잘 돌다가 20~30분 뒤부터 프레임이 확 줄어드는 체감이 나타납니다.

온도가 높다고 하드웨어가 곧바로 고장 나는 것은 아니지만, 장기적으로는 수명을 줄이고 팬 소음도 커집니다. 온도가 지속적으로 높다면 관리가 필요한 상태라고 보면 됩니다.

<div style="margin: 38px 0 30px; text-align: center;">
  <div style="width: 250px; max-width: 100%; margin: 0 auto; overflow: hidden;">
<!-- COUPANG PARTNERS DYNAMIC BANNER START -->
<script is:inline src="https://ads-partners.coupang.com/g.js"></script>
<script is:inline>
	// @ts-ignore - PartnersCoupang is defined by external Coupang script
	new PartnersCoupang.G({"id":1021110,"template":"carousel","trackingCode":"AF7638395","width":"250","height":"250","tsource":""});
</script>
<!-- COUPANG PARTNERS DYNAMIC BANNER END -->
  </div>
</div>

## 3. PC 내부 먼지 청소와 통풍 개선

가장 흔한 과열 원인은 팬과 방열 핀에 쌓인 먼지입니다. 케이스 통풍 구조를 함께 점검하면 효과가 큽니다.

그래픽카드 팬과 방열판 사이에 먼지가 쌓이면 열을 식히는 효율이 급격히 떨어집니다. 한 달에 한 번 정도는 팬과 방열판 주변을 살펴보고, 에어 스프레이(또는 안전한 공기 압축기)로 불어서 먼지를 제거하는 것이 좋습니다. 컴퓨터를 좁은 벽 틈에 붙여 놓았거나 케이스 팬이 부족한 경우도 통풍을 막는 원인입니다.

케이스가 밀폐된 구조라면 전면 흡기, 후면 배기 팬을 확인하고, 하단에 그래픽카드 팬이 있다면 케이스 하단 통풍구를 막지 않아야 합니다. 간단한 청소만으로도 온도가 5~10도 이상 내려가는 경우가 많습니다.

## 4. 써멀 페이스트 재도포

3~5년 이상 사용한 그래픽카드는 써멀 페이스트가 마르면서 온도가 오를 수 있습니다. 재도포하면 원래 수준을 되찾는 경우가 많습니다.

그래픽카드를 분해해 GPU 칩 위의 마른 써멀 페이스트를 제거하고 새로 발라주는 작업입니다. 제품에 따라 분해 난이도가 다른데, 보증기간이 끝났거나 온도가 정말 심하게 올랐다면 고려해볼 만합니다. 작업할 때는 유튜브 등에서 해당 모델의 분해 방법을 먼저 확인하고, 정전기 방지 장갑과 고품질 써멀 페이스트를 준비하세요.

써멀 재도포만으로 온도가 수십도 낮아진 사례도 흔합니다. 다만 자칫 잘못 분해하면 팬 케이블이 끊기거나 방열판 접촉이 나빠질 수 있으니, 자신이 없으면 전문 수리를 맡기는 것도 방법입니다.

## 5. 그래도 온도가 높다면

먼지와 써멀이 정상이라면 그래픽카드 성능 설정이나 케이스 환경을 조정해볼 수 있습니다. 프레임 제한으로 발열을 줄이는 방법도 있습니다.

그래픽카드 소프트웨어에서 전력 제한(Power Limit)을 낮추거나 프레임 상한을 모니터 주사율에 맞추면 발열과 소음이 크게 줄어듭니다. 예를 들어 200프레임을 뽑을 수 있는 환경이라도 144로 제한하면 GPU가 하는 일이 줄어 열도 함께 감소합니다.

또한 케이스 전면에 흡기 팬이 없거나 후면 배기 팬이 고장이라면 팬을 추가하거나 교체하는 것도 고려하세요. 온도 문제가 계속되면 그래픽카드가 아닌 다른 부품(파워, 메모리 접촉 불량)이 원인일 수 있으니, 이때는 전문 점검을 받아보는 것이 좋습니다.

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
