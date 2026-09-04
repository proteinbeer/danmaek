---
title: "유에스비 인식 안 될 때, 포맷하기 전 체크"
description: "유에스비를 꽂았는데 파일 탐색기에 보이지 않는다고 바로 포맷하면 안 됩니다. 연결 문제인지 드라이브 문자 문제인지부터 확인하시면 됩니다."
date: 2026-08-29
updated: 2026-08-29
category: "가이드"
subcategory: "PC·하드웨어"
tags:
  - "USB"
  - "인식 안 됨"
  - "디스크 관리"
  - "저장장치"
image: "/assets/posts/guide-images/hero-bloom.jpg"
imageAlt: "노트북에 꽂힌 USB 메모리"
imageWidth: 1920
imageHeight: 1080
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>


유에스비를 꽂았는데 파일 탐색기에 보이지 않는다고 바로 포맷하면 데이터를 잃을 수도 있습니다. 연결 문제인지 드라이브 문자 문제인지부터 확인하셔야 하죠.

USB 메모리나 외장하드를 컴퓨터에 꽂았는데 파일 탐색기에 보이지 않으면 많은 분이 당황해 바로 포맷을 시도합니다. 하지만 포맷은 드라이브 안의 모든 데이터를 지우므로, 인식 문제를 정확히 진단하기 전에 시도해서는 안 됩니다. 보이지 않는 이유는 드라이브 문자 누락, 연결 문제, 파티션 상태 등 다양하므로 아래 순서대로 확인해보시기 바랍니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/hero-bloom.jpg" alt="노트북에 꽂힌 USB 메모리" width="1280" height="720" loading="lazy" decoding="async" />


## 1. 다른 단자에서 확인

앞쪽 단자에서 안 된다면 뒤쪽 단자에 연결해보시고, 다른 컴퓨터에서도 인식되는지 비교해보시면 됩니다.

데스크톱 전면의 USB 단자는 케이스와 연결되는 구조라 간혹 접촉이 약하거나 전원 공급이 부족할 수 있습니다. **뒷면의 메인보드에 직접 연결된 USB 단자**에 꽂아보시면 됩니다. 전면 단자에서만 안 되는 경우 뒤쪽에서는 정상 인식되는 경우가 많습니다.

또한 USB 허브를 사용한다면 허브를 거치지 않고 컴퓨터에 직접 연결해보시면 됩니다. 허브의 전원이 부족하면 인식이 불안정해질 수 있습니다. 스마트폰 충전용 USB 단자와 데이터 전송용 USB 단자는 역할이 다를 수 있으니, 데이터 전송이 가능한 단자에 연결했는지도 확인하시면 됩니다.

## 2. 디스크 관리 확인

윈도우 디스크 관리에서 유에스비가 보이는데 파일 탐색기에만 없다면 드라이브 문자가 빠진 경우일 수도 있습니다.

USB가 연결되었는데 파일 탐색기에만 보이지 않는다면 윈도우가 드라이브를 인식했지만 **드라이브 문자**가 할당되지 않았을 수 있습니다. 이 경우 **디스크 관리**(시작 메뉴에서 "디스크 관리" 검색)를 열면 해당 드라이브가 "할당되지 않음" 또는 드라이브 문자 없이 표시될 수 있습니다.

디스크 관리에서 드라이브를 마우스 오른쪽 버튼으로 클릭한 뒤 **"드라이브 문자 및 경로 변경"** → **"추가"** 를 선택해 문자를 할당해보시면 됩니다. 드라이브 문자를 부여하면 파일 탐색기에 다시 나타납니다. 이 과정은 데이터를 지우지 않으므로 안전합니다. 드라이브가 "RAW"나 "온라인(오류)" 같은 상태로 표시된다면 다른 문제일 수 있습니다.

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

## 3. 장치 관리자 확인

장치 관리자에서 오류 표시가 있는 유에스비 장치가 있는지 확인하고 장치를 다시 검색해보시면 됩니다.

**장치 관리자**(시작 메뉴에서 검색)를 열어 **디스크 드라이브**와 **범용 직렬 버스 컨트롤러** 항목에 노란색 경고 표시가 없는지 확인하시면 됩니다. 드라이버 오류가 있는 USB 장치가 있으면 제대로 인식되지 않을 수 있습니다.

문제가 보인다면 해당 장치를 마우스 오른쪽 버튼으로 클릭해 **제거**한 뒤 컴퓨터를 다시 시작하거나, **동작 → 하드웨어 변경 사항 검색**을 실행해 드라이버를 다시 불러올 수 있습니다. 이것으로도 해결되지 않으면 USB 드라이버를 최신 버전으로 업데이트해보시면 됩니다.

## 4. 포맷은 마지막

디스크 관리에서 장치가 보이더라도 중요한 파일이 있다면 바로 포맷하지 않는 것이 좋습니다. 포맷하면 데이터가 사라질 수 있으니 필요한 자료가 있다면 복구 가능성부터 확인하셔야 합니다.

디스크 관리에서 USB가 인식되는데 파일 탐색기에는 안 보이고, 드라이브 문자가 "RAW"로 표시된다면 파일 시스템이 손상되었을 가능성이 있습니다. 이 상태에서 바로 포맷하면 데이터가 사라질 수 있습니다. 중요한 파일이 있다면 먼저 데이터 복구 도구나 전문 업체를 통해 복구 가능성을 확인하시면 됩니다.

파일이 없거나 백업되어 있다면 디스크 관리에서 드라이브를 **포맷**해 파일 시스템을 다시 구성할 수 있습니다. 포맷은 드라이브를 정상 사용할 수 있게 하는 마지막 수단으로, 반드시 필요한 경우에만 진행하시면 됩니다. 포맷 후에도 인식되지 않는다면 USB 고장이거나 저장장치 수명이 다했을 수 있습니다.

## 5. 정리

USB 인식 문제는 대부분 단자, 드라이브 문자, 드라이버와 같은 소프트웨어·연결 문제로 해결됩니다. 포맷 전에 위 단계를 꼭 확인해보시고, 중요한 데이터가 있다면 복구 가능성을 먼저 점검하시기 바랍니다.


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
