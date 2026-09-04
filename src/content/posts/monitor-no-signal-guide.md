---
title: "모니터 신호 없음 뜰 때, 케이블보다 먼저 확인할 한 가지"
description: "컴퓨터는 켜졌는데 모니터에 신호 없음만 뜬다면 화면 자체보다 입력 신호가 어디에서 끊겼는지 확인하면 됩니다."
date: 2026-08-31
updated: 2026-08-31
category: "가이드"
subcategory: "PC·하드웨어"
tags:
  - "모니터"
  - "신호 없음"
  - "케이블"
  - "그래픽카드"
image: "/assets/posts/guide-images/hero-bloom.jpg"
imageAlt: "모니터에 연결하는 HDMI 케이블"
imageWidth: 1920
imageHeight: 1080
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>


컴퓨터는 켜졌는데 모니터에 "신호 없음"만 뜬다면 화면 자체보다 입력 신호가 어디서 끊겼는지 확인하셔야 합니다.

컴퓨터가 켜지고 마우스와 키보드의 표시등도 들어오는데 모니터만 "신호 없음"(No Signal)이 표시되는 경우가 있습니다. 이때는 모니터나 화면 자체의 고장보다는 컴퓨터에서 모니터로 영상 신호가 전달되는 연결 부분에서 문제가 생긴 경우가 많습니다. 케이블, 단자, 입력 선택 등을 하나씩 확인해보시면 원인을 좁힐 수 있습니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/hero-bloom.jpg" alt="모니터에 연결하는 HDMI 케이블" width="1280" height="720" loading="lazy" decoding="async" />


## 1. 모니터 입력 선택

HDMI와 디스플레이포트가 여러 개 있는 모니터라면 현재 케이블이 꽂힌 입력으로 설정돼 있는지 먼저 확인하시면 되죠.

대부분의 모니터는 HDMI, 디스플레이포트(DP), DVI, VGA 등 여러 개의 입력 단자를 제공합니다. 모니터는 기본적으로 마지막에 사용한 입력을 기억하지만, 전원을 끊거나 설정이 초기화되면 다른 입력으로 바뀌어 있을 수 있습니다.

모니터 앞면이나 뒷면에 있는 메뉴 버튼을 눌러 **입력 선택**(Source 또는 Input)을 열고, 실제로 케이블이 꽂힌 단자에 맞는 입력(예: HDMI-1, DP)을 선택하시면 됩니다. 케이블을 HDMI-2에 꽂아놓고 HDMI-1로 설정되어 있으면 신호 없음이 표시됩니다. 여러 단자를 테스트할 때는 이 입력 선택을 꼭 함께 확인해야 합니다.

## 2. 케이블 다시 연결

컴퓨터와 모니터 양쪽 케이블을 뺐다가 끝까지 다시 연결해보시면 됩니다. 가능하다면 다른 케이블이나 다른 단자로도 비교해보시는 것이 좋습니다.

케이블의 연결이 헐거워지거나 이물질이 끼면 신호가 간헐적으로 끊깁니다. 컴퓨터 쪽 단자와 모니터 쪽 단자 양쪽 모두를 뺐다가 끝까지 다시 꽂으시면 됩니다. 연결 시 "딸깍" 소리가 나는 클립이 있는 케이블은 클립을 확실히 잠가야 합니다.

기존 케이블로 안 된다면 **다른 케이블이나 다른 단자로** 교체해서 비교하시면 됩니다. 케이블 자체가 내부적으로 단선되어 있으면 신호 없음이 계속 나올 수 있습니다. HDMI 케이블이 하나뿐이라면 모니터의 다른 단자(예: HDMI-1 ↔ HDMI-2)로 옮겨 테스트해보는 것도 방법입니다.

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

## 3. 그래픽카드 단자 확인

별도의 그래픽카드를 사용하는 컴퓨터라면 모니터 케이블이 메인보드가 아니라 그래픽카드 쪽에 연결돼 있는지 확인하셔야 합니다.

별도의 그래픽카드(외장 그래픽)가 장착된 데스크톱에서는, 모니터 케이블을 **메인보드의 영상 단자**(보통 뒷면 위쪽에 세로로 있는 무리)가 아니라 **그래픽카드의 영상 단자**(보통 뒷면 아래쪽에 가로로 나열된 단자)에 연결해야 합니다.

메인보드의 내장 그래픽 단자에 연결하면, 외장 그래픽카드를 사용하는 시스템에서는 신호가 출력되지 않아 신호 없음이 표시될 수 있습니다. 그래픽카드용 단자에 케이블을 다시 연결하시면 됩니다. 그래도 안 된다면 그래픽카드가 확실히 슬롯에 장착되어 있고 전원 케이블이 연결되어 있는지도 확인할 필요가 있습니다.

## 4. 다른 화면으로 비교

텔레비전이나 다른 모니터에 연결해서 화면이 나온다면 기존 모니터나 케이블 문제를 의심할 수 있습니다.

컴퓨터를 텔레비전이나 다른 모니터에 연결해서 화면이 정상적으로 나온다면, 문제는 컴퓨터가 아니라 기존 모니터나 해당 케이블에 있을 가능성이 높습니다. 반대로 다른 화면에서도 신호 없음이 나온다면 컴퓨터 쪽(그래픽카드, 케이블, 드라이버) 문제일 가능성이 커집니다.

노트북을 사용하신다면 노트북 내장 화면은 나오는데 외부 모니터만 신호 없음이 표시되는 경우가 있습니다. 이때는 외장 모니터를 인식하도록 디스플레이 전환 단축키(보통 Fn키 조합)를 누르거나 **윈도우키 + P**를 눌러 "확장" 또는 "복제" 모드를 선택하시면 됩니다.

## 5. 컴퓨터 상태 확인

모니터가 정상인데도 계속 신호 없음이 나온다면 컴퓨터가 부팅 과정에서 멈춰 있을 수도 있습니다. 덮개를 열고 냉각팬이 도는지, 전원 표시등이 정상인지 확인하시면 됩니다. 부팅이 완료된 상태라면 케이스 내부의 먼지나 그래픽카드 장착 상태를 점검하고, 그래도 안 된다면 본체 전원을 완전히 차단한 뒤 다시 켜보는 방법이 있습니다.


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

- [Microsoft 공식 지원](https://support.microsoft.com/ko-kr/windows)
