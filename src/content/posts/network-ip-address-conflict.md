---
title: "IP 주소 충돌이 뜬다, 같은 와이파이에서 생기는 원인"
description: "한 네트워크에서 두 기기가 같은 IP 주소를 쓰면 연결이 번갈아 끊기거나 아예 인터넷이 안 될 수 있습니다. 요즘 공유기는 DHCP로 주소를 자동 관리하기 때문에 흔하지 않지만, 수동 설정과 오래된 장비가 섞이면 여전히 발생합니다."
date: 2026-08-22
updated: 2026-08-22
category: "가이드"
subcategory: "네트워크"
tags:
  - "네트워크"
  - "IP 충돌"
  - "DHCP"
  - "와이파이"
  - "고정 IP"
image: "/assets/posts/guide-images/network-guide-common.jpg"
imageAlt: "노트북, 공유기, 랜선이 놓여 있는 이미지"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

한 네트워크에서 두 기기가 같은 IP 주소를 쓰면 연결이 번갈아 끊기거나 아예 인터넷이 안 될 수 있습니다. 요즘 공유기는 DHCP로 주소를 자동 관리하기 때문에 흔하지 않지만, 수동 설정과 오래된 장비가 섞이면 여전히 발생합니다.

네트워크 문제는 한 번 꼬이면 공유기, PC, 통신사 가운데 어디가 원인인지 헷갈리기 쉽습니다. 반대로 확인 순서만 정해두면 같은 증상도 생각보다 빠르게 원인을 찾을 수 있습니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/network-guide-common.jpg" alt="노트북, 공유기, 랜선이 놓여 있는 이미지" width="1200" height="675" loading="lazy" decoding="async" />

## 1. 먼저 증상을 정확히 나누기

먼저 IP 주소 충돌 문제를 한 문장으로 정리할 수 있어야 합니다. 같은 인터넷이 느리다는 표현도 유선만 느린지, 무선도 느린지, 한 기기만 그런지에 따라 원인이 완전히 달라집니다.

다른 기기와 다른 연결 방식으로 비교하시면 문제 범위를 크게 줄일 수 있습니다. 한 번에 여러 설정을 바꾸지 말고 정상인 조건과 문제가 생기는 조건을 하나씩 나누는 방식이 가장 효율적입니다.

## 2. 가장 흔한 원인부터 확인

두 PC에 같은 수동 IP를 입력한 경우. 공유기의 DHCP 범위 안 주소를 다른 기기에 수동으로 지정한 경우.

절전 뒤 복귀한 장비가 오래된 임대 주소를 그대로 유지한 경우. 공유기 두 대가 같은 네트워크에서 동시에 DHCP를 제공하는 경우.

이 원인들은 서로 비슷한 증상을 만들 수 있습니다. 그래서 인터넷 속도 측정 결과나 오류 문구 하나만 보고 바로 결론을 내리기보다 물리 연결, 주소 설정, 공유기 역할을 차례로 나눠보는 편이 좋습니다.

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

## 3. PC와 공유기에서 볼 부분

문제가 생긴 두 기기의 IPv4 주소가 같은지 확인합니다. 공유기 연결 기기 목록에서 중복 주소가 보이는지 봅니다. 공유기 두 대를 쓰는 경우 DHCP 서버가 하나만 켜져 있는지 확인합니다.

여기서 중요한 것은 정상값을 하나 확보하는 것입니다. 예를 들어 다른 케이블, 다른 포트, 다른 PC처럼 정상 동작하는 조건을 하나 찾으면 문제 장비를 비교하기 쉬워집니다.

## 4. 실제로 해결하는 순서

일반 기기는 자동 IP로 돌리고 고정이 필요한 장비는 DHCP 예약을 사용합니다. 공유기의 DHCP 임대 목록을 정리하고 재부팅합니다. 보조 공유기는 AP 모드로 바꿔 DHCP 충돌을 막습니다.

적용 뒤에는 바로 다음 설정으로 넘어가지 말고 같은 조건에서 다시 확인하시는 편이 좋습니다. 한 단계씩 바꿔야 어떤 조치가 실제로 문제를 해결했는지 알 수 있고, 나중에 같은 증상이 생겼을 때도 훨씬 빠르게 대응할 수 있습니다.

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

## 5. 그래도 해결되지 않을 때

위 단계에서 변화가 없다면 문제 범위를 집 밖으로 넓혀볼 차례입니다. 공유기까지는 정상인데 외부 서비스만 불안정하다면 통신사 회선, 외부 라우팅, 특정 서버 상태처럼 사용자가 직접 바꾸기 어려운 구간도 원인이 될 수 있습니다.

반대로 다른 기기에서는 정상인데 특정 PC에서만 반복된다면 네트워크 전체보다 해당 랜카드, 드라이버, 윈도우 설정을 보는 편이 맞습니다. 이처럼 정상인 기기 하나와 비교하는 방식이 가장 빠른 진단 도구가 되죠.

## 6. 설정을 바꿀 때 주의할 점

충돌이 생겼다고 모든 기기에 제각각 수동 IP를 넣기 시작하면 관리가 더 어려워집니다. 자동 할당을 기본으로 두고 필요한 장비만 예약하는 편이 안정적입니다.

네트워크 설정은 서로 연결돼 있어서 문제를 빨리 고치겠다고 초기화, 수동 IP, DNS 변경, 포트 설정을 한꺼번에 적용하면 오히려 원인을 잃을 수 있습니다. 바꾸기 전 값을 기록하고 한 번에 한 항목만 수정하는 습관이 중요합니다.

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

## 7. 마지막 판단 기준

IP 주소는 집 안 기기의 좌석 번호와 비슷합니다. 번호를 사람이 직접 관리하기 시작하면 처음에는 깔끔해 보여도 기기가 늘어날수록 중복이 생기기 쉬워집니다.

결국 네트워크 문제 해결은 가장 복잡한 설정을 찾는 일이 아니라 문제 구간을 정확히 잘라내는 일입니다. PC에서 공유기, 공유기에서 인터넷 회선 순서로 가까운 곳부터 확인하시면 불필요한 장비 교체와 시간 낭비를 크게 줄일 수 있습니다.

## 8. 정리

IP 주소 충돌 설정은 한 번 맞춰두면 끝나는 것처럼 보여도 공유기 교체, 윈도우 업데이트, 새 기기 추가 뒤에 조건이 달라질 수 있습니다. 예전에 정상적으로 쓰던 값이 지금 환경에서도 반드시 최선이라고 가정하지 않는 편이 좋습니다.

문제가 다시 생기면 처음 해결했던 설정을 그대로 반복하기보다 현재 링크 속도, IP 주소, 게이트웨이, 무선 대역처럼 기본 상태부터 다시 확인하시면 됩니다. 네트워크는 장비 하나가 아니라 연결된 전체 구조가 함께 움직이기 때문에 작은 변화가 다른 구간에 영향을 줄 수 있습니다.

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
