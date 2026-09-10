---
title: "RTX 5090 DLSS 5 테스트 중 610W, 녹은 전원 단자는 무엇을 말하나"
description: "RTX 5090에서 DLSS 5 테스트 중 전원 커넥터가 녹은 사례가 나왔습니다. 소비전력 610W 기록과 원인 해석, 고전력 GPU 시대의 전력 관리 중요성을 정리했습니다."
date: 2026-09-10
updated: 2026-09-10
category: "뉴스"
subcategory: "IT"
tags:
  - "RTX 5090"
  - "DLSS 5"
  - "엔비디아"
  - "그래픽카드"
  - "전원 커넥터"
image: "/assets/posts/news-images/rtx-5090-dlss5-power-2026-01.jpg"
imageAlt: "RTX 5090 그래픽카드 대표 이미지"
imageWidth: 1280
imageHeight: 720
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

RTX 5090에서 DLSS 5를 테스트하던 중 전원 커넥터가 녹았다는 사용자 사례가 나왔습니다. 공개된 기록에서는 NBA 2K27 테스트 과정에서 그래픽카드 소비전력이 610W를 넘긴 것으로 나타났습니다.

강한 제목이 나오기 쉬운 사건이지만 가장 먼저 짚어야 할 점이 있습니다. 현재 공개된 정보만으로 DLSS 5가 커넥터 손상의 직접 원인이라고 확정할 수는 없습니다.

<img class="post-landscape-image post-landscape-image--high" src="/assets/posts/news-images/rtx-5090-dlss5-power-2026-01.jpg" alt="RTX 5090 그래픽카드 대표 이미지" width="1280" height="720" loading="lazy" decoding="async" />

## 1. DLSS 5를 켜면 전력도 늘어날 수 있다

DLSS는 보통 성능을 높이거나 화질을 개선하는 기술로 알려져 있어서 전력을 줄여줄 것 같은 인상을 줍니다. 하지만 최신 신경망 렌더링 기능은 GPU 안의 연산 자원을 추가로 적극 활용할 수 있죠.

다른 테스트에서도 DLSS 5 기능을 적용했을 때 RTX 5090의 소비전력이 눈에 띄게 높아지는 사례가 관찰됐습니다. 특정 극한 환경에서는 500W를 훌쩍 넘는 수치도 보고됐습니다.
즉 화면에 보이는 프레임을 AI가 만들어준다고 해서 계산이 공짜로 생기는 것은 아닙니다. 더 복잡한 처리에는 결국 전력과 열이라는 현실적인 비용이 따라옵니다.

## 2. 하지만 610W와 녹은 단자를 바로 연결하면 안 된다

전원 커넥터가 녹는 원인은 하나가 아닙니다. 플러그가 끝까지 꽂히지 않았거나 케이블이 심하게 꺾였거나, 접점 저항과 전류 분배에 문제가 생기는 등 여러 조건이 영향을 줄 수 있습니다.

이번 사례 역시 DLSS 5 사용 중 높은 소비전력이 기록됐다는 사실과 커넥터 손상이 같은 시점에 나타났다는 사실이 있을 뿐입니다. 둘 사이의 직접적인 인과관계는 제조사 조사로 확인된 상태가 아니죠.

따라서 DLSS 5를 켜면 RTX 5090 전원 단자가 녹는다고 쓰시면 과장입니다. 한 사례가 경고 신호가 될 수는 있어도 일반적인 결함의 증거가 되지는 않습니다.

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

## 3. 5090의 진짜 문제는 여유 공간이 작다는 점

고성능 그래픽카드는 세대가 바뀔수록 순간적으로 처리해야 하는 전력이 커지고 있습니다. 전원 규격과 케이블은 그 전력을 작은 접점에 안정적으로 전달해야 하죠.

평소 400W대에서 움직이던 카드가 특정 작업에서 600W 가까이 올라간다면 시스템 전체가 받는 부담도 달라집니다. 파워서플라이 용량만 충분하다고 끝나는 문제가 아니라 연결 상태, 케이블 품질, 발열 관리까지 중요해집니다.

저는 그래서 숫자 경쟁보다 전력 전달 설계가 앞으로 더 중요해질 거라고 봅니다. 성능을 20% 높이는 것보다 600W를 안전하게 다루는 일이 소비자에게 더 현실적인 문제가 될 수 있기 때문입니다.
## 4. AI 그래픽 기술도 결국 물리 법칙을 피하지 못한다

DLSS 같은 기술은 적은 렌더링 비용으로 더 좋은 화면을 만드는 방향에서 출발했습니다. 그런데 기능이 복잡해지고 신경망이 더 많은 일을 맡게 되면 그 신경망을 돌리는 비용도 커집니다.

이 부분이 재미있습니다. 소프트웨어는 마법처럼 보이지만 마지막에는 GPU의 트랜지스터가 실제로 계산하고, 전기가 흐르고, 열이 발생합니다.

AI가 그래픽카드 효율을 높이는 동시에 새로운 전력 부하를 만들 수도 있다는 뜻입니다. 앞으로 DLSS 비교에서 프레임과 화질만 볼 게 아니라 소비전력까지 같이 보는 테스트가 더 중요해질 수 있습니다.

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

## 5. 지금 할 일은 공포보다 기본 점검

RTX 5090 이용자라면 이번 사례 하나만 보고 DLSS를 끌 필요는 없습니다. 대신 16핀 커넥터가 완전히 삽입됐는지, 케이블이 커넥터 바로 옆에서 과하게 꺾이지 않았는지 확인하는 기본 점검은 해볼 만합니다.

고전력 그래픽카드는 작은 접촉 불량의 결과도 커질 수 있습니다. 새 기술이 나올수록 소프트웨어 업데이트만 신경 쓰기 쉽지만, 수백 와트를 전달하는 물리적인 연결도 똑같이 중요하죠.

이번 사건의 핵심은 DLSS 5가 위험하다는 결론이 아닙니다. AI 렌더링 시대에도 더 높은 성능을 얻는 대가가 어디에 나타나는지 다시 보여준 사례라는 쪽이 더 정확합니다.

## 6. 성능표에 와트당 가치가 다시 들어와야 한다

그래픽카드 리뷰는 보통 평균 프레임과 최소 프레임을 중심으로 순위를 매깁니다. 하지만 최고급 GPU가 500W에서 600W를 넘나드는 시대가 되면 같은 10프레임 차이라도 의미가 달라집니다.

전력 사용량이 늘면 전기요금만 오르는 게 아닙니다. 파워서플라이, 케이스 통풍, 실내 발열, 소음까지 같이 따라오기 때문에 실제 PC 구성 비용이 커집니다.

그래서 저는 앞으로 최고 성능보다 와트당 성능이 일반 소비자에게 더 중요한 지표가 될 수 있다고 봅니다. 벤치마크 1등을 위해 시스템 전체를 더 크고 뜨겁게 만들어야 한다면 그 성능을 모든 사람이 원하는 건 아니기 때문입니다.
DLSS 5 같은 AI 렌더링이 발전할수록 이 논쟁은 더 흥미로워질 겁니다. 소프트웨어로 프레임을 높이는 기술이 하드웨어 전력까지 크게 끌어올린다면, 우리는 프레임 숫자 뒤에 숨어 있는 비용까지 함께 계산해야 합니다.

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