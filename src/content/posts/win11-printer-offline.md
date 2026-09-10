---
title: "윈도우 11 프린터 오프라인, 연결돼 있는데 인쇄가 안 되는 이유"
description: "프린터 전원이 켜져 있고 같은 와이파이에 연결돼 있는데 윈도우에서는 오프라인이라고 표시되는 경우가 있습니다."
date: 2026-08-23
updated: 2026-08-23
category: "가이드"
subcategory: "윈도우 11"
tags:
  - "윈도우 11"
  - "프린터"
  - "오프라인"
  - "인쇄"
  - "네트워크"
image: "/assets/posts/guide-images/hero-bloom.jpg"
imageAlt: "윈도우 11 프린터 설정 화면"
imageWidth: 1920
imageHeight: 1080
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

프린터 전원이 켜져 있고 같은 와이파이에 연결돼 있는데 윈도우에서는 오프라인이라고 표시되는 경우가 있습니다.

이때 드라이버를 바로 다시 설치하기보다 프린터 상태와 인쇄 대기열, 윈도우 서비스를 순서대로 확인하는 편이 빠릅니다.

프린터 문제는 기기 고장과 네트워크 문제, 윈도우 대기열 문제가 비슷한 증상으로 나타납니다.

그래서 한 번에 여러 설정을 바꾸기보다 어디까지 통신이 되는지 단계별로 보는 것이 중요합니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/hero-bloom.jpg" alt="윈도우 11 프린터 설정 화면" width="1280" height="720" loading="lazy" decoding="async" />

## 1. 프린터와 네트워크부터 확인

프린터를 껐다가 전원을 분리하고 잠시 뒤 다시 연결합니다.

단순한 통신 오류라면 전원 재시작만으로 상태가 정상으로 돌아오는 경우가 있습니다.

무선 프린터라면 PC와 같은 와이파이 네트워크에 연결돼 있는지도 확인합니다.

공유기에서 일반 와이파이와 게스트 네트워크를 따로 쓰면 서로 인터넷은 되더라도 기기끼리 찾지 못할 수 있습니다.

프린터 화면이나 제조사 앱에서 현재 네트워크 상태를 확인할 수 있다면 IP와 연결 여부도 봅니다.

윈도우만 들여다보기 전에 프린터 자체가 실제로 네트워크에 붙어 있는지 확인하는 것이 먼저입니다.

## 2. 인쇄 대기열 정리

설정에서 블루투스 및 장치, 프린터 및 스캐너로 들어가 사용하는 프린터의 인쇄 대기열을 확인합니다.

오래된 인쇄 작업 하나가 멈춰 뒤의 작업까지 모두 막고 있을 수 있습니다.

대기열에 실패한 작업이 여러 개 쌓여 있다면 불필요한 항목을 취소하고 다시 인쇄해봅니다.

인쇄 일시 중지나 오프라인 사용 같은 설정이 켜져 있지 않은지도 확인합니다.

기본 프린터가 다른 장치로 지정돼 있는 경우도 있습니다.

사무실이나 집에서 프린터를 여러 대 사용한다면 실제로 어느 장치로 인쇄 명령이 보내졌는지부터 확인해야 합니다.

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

## 3. 프린트 스풀러 다시 시작

인쇄 대기열이 지워지지 않거나 작업이 계속 멈춘다면 프린트 스풀러 서비스를 다시 시작하는 방법이 있습니다.

윈도우 검색에서 서비스를 열고 프린트 스풀러를 찾아 다시 시작합니다.

프린트 스풀러는 인쇄 작업을 대기열에 넣고 프린터로 전달하는 역할을 합니다.

이 서비스가 꼬이면 프린터는 정상이어도 윈도우에서 작업이 계속 멈출 수 있습니다.

서비스를 다시 시작한 뒤에는 대기열을 다시 확인하고 테스트 인쇄를 진행합니다.

문제가 반복된다면 단순 대기열 오류가 아니라 드라이버나 네트워크 쪽을 더 봐야 합니다.

## 4. 프린터 제거 후 다시 추가

앞 단계로 해결되지 않으면 윈도우에서 해당 프린터를 제거한 뒤 다시 추가해볼 수 있습니다.

설정의 프린터 및 스캐너에서 장치를 삭제하고 프린터 전원과 네트워크가 정상인 상태에서 다시 검색합니다.

특히 공유기 교체 뒤 프린터 주소가 바뀌었거나 오래된 연결 정보가 남아 있을 때 도움이 될 수 있습니다.

다시 추가하면 윈도우가 현재 연결 상태를 기준으로 장치를 새로 등록합니다.

ARM 기반 PC에서는 제조사 설치 프로그램보다 윈도우의 프린터 추가 기능을 사용하는 것이 권장되는 경우가 있습니다.

코파일럿 플러스 PC에서 설치가 안 된다면 이 차이도 확인할 필요가 있습니다.

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

## 5. 드라이버 재설치는 마지막 쪽

프린터가 안 된다고 매번 드라이버부터 삭제하면 오히려 원인을 찾기 어려워집니다.

전원, 네트워크, 대기열, 스풀러, 장치 재등록 순서로 확인한 뒤 드라이버 문제를 보는 편이 깔끔합니다.

제조사에서 최신 드라이버나 펌웨어를 제공한다면 모델과 윈도우 버전에 맞는지 확인합니다.

오래된 프린터는 최신 윈도우에서 기능 일부가 제한될 수도 있습니다.

프린터 오프라인 표시는 프린터가 고장났다는 판정이 아니라 윈도우가 현재 정상적으로 통신하지 못하고 있다는 상태에 가깝습니다.

연결돼 보이는데 인쇄가 안 된다면 케이블이나 잉크보다 먼저 대기열과 네트워크부터 확인해보시는 것이 좋습니다.

## 6. 자꾸 오프라인이 반복될 때

프린터를 다시 추가하면 잠시 정상인데 며칠 뒤 또 오프라인이 된다면 네트워크 주소가 자주 바뀌는 상황도 확인할 필요가 있습니다.

공유기와 프린터가 재부팅될 때마다 연결 정보가 달라지면 윈도우가 기존 장치를 제대로 찾지 못하는 경우가 생길 수 있습니다.

이때는 프린터 제조사가 권장하는 네트워크 설정과 공유기 환경을 함께 확인합니다.

무작정 드라이버를 반복 설치하는 것보다 왜 장치 주소가 달라지는지 보는 편이 재발을 줄이는 데 도움이 됩니다.

여러 PC에서 동시에 같은 프린터가 오프라인이라면 한 PC의 윈도우 문제보다 프린터나 네트워크 쪽 가능성이 더 큽니다.

반대로 한 PC만 안 된다면 해당 PC의 대기열과 스풀러부터 보는 것이 순서입니다.

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
