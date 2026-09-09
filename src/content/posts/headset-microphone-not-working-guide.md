---
title: "헤드셋 마이크가 안 될 때 확인할 4가지"
description: "게임이나 화상 회의에서 헤드셋 마이크가 인식되지 않을 때, 연결 방식별로 확인할 순서를 정리했습니다. 기본 녹음 장치 설정부터 앱 권한까지 순서대로 점검하면 대부분 해결됩니다."
date: 2026-08-22
updated: 2026-08-22
category: "가이드"
subcategory: "주변기기"
tags:
  - "헤드셋"
  - "마이크"
  - "마이크 안 됨"
  - "음성 인식"
  - "주변기기"
image: "/assets/posts/guide-images/dualsense-1200x675.jpg"
imageAlt: "헤드셋 마이크 설정과 음성 입력을 나타내는 일러스트"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

헤드셋에서 소리는 잘 나는데 마이크만 안 되는 경우가 많습니다. 스피커로는 안 쓰고 마이크로만 안 되는 이유는, 대부분 **마이크가 기본 입력 장치로 잡히지 않았거나 권한이 꺼져 있다는 것**입니다.

이 글에서는 연결 방식에 상관없이 적용되는 확인 순서를 4단계로 정리했습니다. 순서대로 따라오면 하드웨어가 고장나서가 아니라면 대부분 바로 해결됩니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/dualsense-1200x675.jpg" alt="헤드셋 마이크 설정과 음성 입력을 나타내는 일러스트" width="1200" height="675" loading="lazy" decoding="async" />

## 1. 연결 방식부터 다시 확인

마이크가 인식되려면 연결 자체가 정상이어야 합니다. 먼저 어떻게 꽂혀 있는지 봅니다.

- 3.5mm 2홀(분리형) 헤드셋이라면 **초록색(스피커), 분홍색(마이크)** 단자를 구분해서 꽂았는지 확인합니다. 합체형 1홀 헤드셋은 한쪽 구멍에만 꽂아야 합니다.
- USB 헤드셋은 USB 단자를 뽑았다 다시 꽂고, 다른 USB 포트로 바꿔 봅니다.
- 무선(블루투스) 헤드셋은 페어링을 지우고 다시 연결합니다. 간혹 "헤드폰"으로만 연결되어 마이크가 켜지지 않는 경우가 있습니다.

단자를 잘못 꽂은 경우가 의외로 많습니다. 어떤 방식이든 **연결 순서를 바꿔보는 것**부터 시작하세요.

## 2. 기본 입력 장치와 녹음 탭 확인

윈도우는 여러 입력 장치 중 **기본 녹음 장치**로 잡힌 것만 앱에서 사용합니다. 헤드셋 마이크가 다른 장치로 밀려나면 여기서 안 잡힙니다.

- 설정 → 시스템 → 소리 → 입력에서 헤드셋 마이크가 표시되는지 확인합니다.
- 여러 마이크가 있다면 헤드셋 마이크를 **기본 장치로 선택**합니다.
- 소리 테스트를 눌러 막대가 움직이는지 보면 인식 여부를 바로 알 수 있습니다.
- 노트북은 내장 마이크가 자동으로 잡혀서 헤드셋 마이크가 무시되는 경우가 많습니다. 기본 장치를 헤드셋으로 바꿔주세요.

작업 표시줄 우측 하단의 스피커 아이콘을 우클릭하고 "소리 설정"으로 들어가면 입력 장치 목록을 한 번에 볼 수 있습니다.

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

## 3. 앱별 마이크 권한 확인

기본 장치가 맞는데도 특정 앱에서만 안 된다면 **앱 권한 설정**이 원인입니다. 윈도우는 앱마다 마이크 접근 허용을 별도로 관리합니다.

- 설정 → 개인 정보 및 보안 → 마이크로 들어갑니다.
- "앱에서 마이크에 액세스하도록 허용"이 켜져 있는지 확인합니다.
- 목록에서 해당 앱(게임, 디스코드, 줌)이 켜져 있는지 봅니다.
- 디스코드처럼 앱 자체에 입력 장치 선택 기능이 있다면 그쪽도 헤드셋으로 바꿔줍니다.

마이크 권한을 껐다가 다시 켜면 인식 오류가 풀리는 경우도 있습니다. 재부팅 없이 바로 이 설정을 토글해보세요.

## 4. 드라이버와 볼륨 수준 점검

모든 설정이 맞아도 드라이버가 오래되면 마이크가 인식되지 않습니다.

- 장치 관리자에서 "오디오 입력 및 출력"과 "사운드, 비디오 및 게임 컨트롤러" 항목에 느낌표가 있는지 확인합니다.
- 이상이 있다면 해당 장치를 우클릭하고 **드라이버 업데이트**를 실행합니다.
- 제조사 전용 소프트웨어가 있다면 마이크 볼륨이나 음소거 버튼 상태를 봅니다. 헤드셋 줄에 달린 **물리적 음소거 스위치**가 꺼져 있는지도 확인하세요.
- 녹음 탭에서 마이크를 우클릭 → 속성 → 수준에서 볼륨을 올려봅니다.

위 순서를 전부 통과했는데도 마이크가 안 된다면, 다른 컴퓨터에 꽂아 정상 작동하는지로 **하드웨어 고장 여부**를 판가름하면 됩니다. 다른 기기에서도 안 된다면 교체를 고려해보시기 바랍니다.

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
