---
title: "인터넷이 자꾸 끊길 때, 공유기와 컴퓨터 점검 순서"
description: "인터넷이 몇 분 간격으로 끊기거나 주기적으로 재연결될 때, 공유기부터 컴퓨터까지 순서대로 점검하는 방법을 정리했습니다. 무선 간섭, IP 충돌, 회선 문제까지 다룹니다."
date: 2026-09-06
updated: 2026-09-06
category: "가이드"
subcategory: "네트워크"
tags:
  - "인터넷 끊김"
  - "와이파이 끊김"
  - "공유기"
  - "네트워크 안정화"
  - "인터넷 불안정"
image: "/assets/posts/guide-images/network-guide-common.jpg"
imageAlt: "인터넷이 자주 끊기는 공유기와 네트워크 환경"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

인터넷이 아예 안 되는 것도 답답하지만, **잠깐 되다가 몇 초~몇 분 만에 자꾸 끊기는 것**이 더 곤란할 때가 많습니다. 게임이나 화상 회의 중에 주기적으로 연결이 끊기면 원인 찾기도 쉽지 않죠.

끊김의 원인은 크게 공유기 문제, 무선 간섭, 컴퓨터 설정, 회선 문제로 나뉩니다. 어디서부터 손댈지 막막할 때 아래 순서대로 점검하면 대부분의 끊김 원인을 좁힐 수 있습니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/network-guide-common.jpg" alt="인터넷이 자주 끊기는 공유기와 네트워크 환경" width="1200" height="675" loading="lazy" decoding="async" />

## 1. 끊김의 패턴부터 기록

먼저 어떤 상황에서 끊기는지 기억해두면 원인을 절반은 좁힐 수 있습니다.

- **몇 분 간격으로 주기적**으로 끊긴다면 공유기나 무선 환경 문제일 가능성이 큽니다.
- **모든 기기**에서 동시에 끊기면 공유기나 회선 문제, 컴퓨터만 끊기면 해당 기기 문제입니다.
- 유선(랜케이블)에서는 안 끊기고 **무선에서만** 끊긴다면 무선 간섭이나 신호 문제입니다.

형광등, 전자레인지, 무선 전화기 같은 전자기기가 켜질 때 끊긴다면 간섭이 거의 확실합니다. 끊기는 타이밍을 적어두면 왜 끊기는지 설명할 수 있는 근거가 됩니다.

## 2. 공유기 재부팅과 펌웨어 점검

공유기는 오래 켜두면 내부 상태가 꼬여 연결을 제대로 유지하지 못합니다. 가장 먼저 공유기를 재부팅합니다.

- 공유기 전원 어댑터를 뽑고 **30초 이상** 두었다 다시 꽂습니다.
- 연결된 기기가 많다면(스마트폰, TV, IoT) 공유기가 과부하로 끊김을 일으키는 경우가 있습니다. 사용하지 않는 기기의 연결을 끊어보세요.
- 공유기 관리자 페이지의 **펌웨어 업데이트**가 있는지 확인합니다. 제조사는 끊김, 보안 문제를 펌웨어로 고치는 경우가 많습니다.

재부팅만으로 몇 시간 버티다 다시 끊긴다면 소프트웨어 문제보다 **하드웨어 과부하나 발열**을 의심해볼 수 있습니다. 공유기 배치를 통풍이 잘 되는 곳으로 바꾸는 것도 도움이 됩니다.

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

## 3. 무선 간섭과 주파수 확인

무선으로만 끊긴다면 **2.4GHz와 5GHz 주파수**를 확인합니다.

- 2.4GHz는 도달 거리가 길지만 간섭이 심해 끊김이 잦을 수 있습니다.
- 5GHz는 간섭이 적지만 벽을 통과하면 급격히 약해집니다. 자리를 꽉 채워 사용하세요.
- 공유기 설정에서 **채널을 자동이 아닌 고정**으로 바꾸면 이웃 공유기와 충돌을 피할 수 있습니다.

사용 중인 기기와 공유기 사이에 두꺼운 벽이나 금속 가구가 있다면 위치를 바꿔보시기 바랍니다. 신호가 약한 상태에서는 끊김보다는 느려지기 쉽지만, 경계 지점에서는 자주 끊기는 것처럼 느껴집니다.

## 4. IP 충돌과 전원 관리

아이피(IP) 주소가 동일 기기끼리 겹치면 한쪽이 밀리면서 연결이 반복적으로 끊길 수 있습니다.

- 공유기에서 **DHCP 범위 안의 IP를 고정(예약)**으로 잡아주면 충돌을 피할 수 있습니다.
- 컴퓨터의 **랜카드 전원 관리** 문제도 끊김의 원인입니다. 장치 관리자에서 랜카드 속성 → 전원 관리 → "전원을 절약하기 위해 컴퓨터가 이 장치를 끌 수 있음"을 해제합니다.
- 윈도우의 전원 옵션에서 USB 절전 모드가 켜져 있으면 무선 랜카드가 잠들어 끊길 수 있습니다. 절전 기능을 끄는 것이 좋습니다.

랜카드 드라이버가 오래되어 끊기는 경우도 많습니다. 제조사 사이트에서 최신 드라이버를 받아 설치해보시기 바랍니다.

## 5. 회선과 통신사 측 장애 확인

공유기와 컴퓨터를 모두 점검했는데도 끊긴다면 **통신사 회선 문제**일 수 있습니다.

- 공유기 없이 모뎀(ONT)에 랜케이블을 바로 꽂아 테스트합니다. 그래도 끊기면 회선 문제입니다.
- 통신사 공식 앱이나 홈페이지의 장애 안내가 있는지 확인합니다.
- 속도 테스트를 여러 번 돌려 평균 속도가 요금제보다 크게 낮다면 기사 점검을 신청하는 것이 좋습니다.

오래된 랜케이블이나 접촉이 불량한 단자도 끊김의 원인입니다. 케이블은 짧고 새 제품으로, 단자는 꽉 눌러 끼우는 것으로 교체해보시기 바랍니다.

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

## 출처

- [Microsoft 지원 - 네트워크 연결 문제 해결](https://support.microsoft.com/windows)
- [아이피타임 공식 고객지원](https://www.iptime.com/)