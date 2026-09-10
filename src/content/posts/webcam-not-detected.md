---
title: "웹캠을 꽂았는데 카메라가 없다고 뜬다면, USB보다 권한을 먼저 볼 때"
description: "외장 웹캠을 연결했는데 줌이나 디스코드에서 카메라를 찾지 못하면 USB 고장부터 의심하기 쉽습니다."
date: 2026-08-21
updated: 2026-08-21
category: "가이드"
subcategory: "주변기기"
tags:
  - "웹캠"
  - "카메라"
  - "인식"
  - "권한"
  - "USB"
image: "/assets/posts/guide-images/dualsense-1200x675.jpg"
imageAlt: "웹캠 연결 및 설정"
imageWidth: 1920
imageHeight: 1080
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

외장 웹캠을 연결했는데 줌이나 디스코드에서 카메라를 찾지 못하면 USB 고장부터 의심하기 쉽습니다.

하지만 윈도우 11에서는 카메라 장치가 정상 인식돼도 개인정보 권한이 꺼져 있으면 앱에서 사용할 수 없죠.

반대로 권한은 정상인데 특정 앱 하나에서만 안 되는 경우도 있습니다.

장치 인식과 앱 권한을 분리해서 확인하면 불필요하게 드라이버를 지웠다 설치하는 일을 줄일 수 있습니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/dualsense-1200x675.jpg" alt="웹캠 연결 및 설정" width="1280" height="720" loading="lazy" decoding="async" />

## 1. 윈도우 카메라 설정 확인

설정, 블루투스 및 장치, 카메라로 들어가면 윈도우가 인식하고 있는 카메라를 확인할 수 있습니다.

여기에 웹캠 이름이 보인다면 USB 연결 자체는 정상일 가능성이 높습니다.

카메라를 선택하면 지원되는 제품에서는 밝기와 대비 같은 기본 설정도 확인할 수 있습니다.

장치가 아예 목록에 없다면 그때 USB 포트와 케이블, 장치 관리자를 확인하는 순서가 좋습니다.

## 2. 개인정보 권한 확인

설정, 개인정보 및 보안, 카메라에서 카메라 액세스가 켜져 있는지 확인하셔야 합니다.

마이크 권한과 마찬가지로 앱이 카메라를 사용할 수 있도록 허용하는 별도 설정이 있습니다.

마이크로소프트 스토어 앱은 앱별 권한을 확인할 수 있고, 일반 데스크톱 프로그램은 데스크톱 앱의 카메라 접근 허용이 켜져 있어야 합니다.

장치는 보이는데 앱만 카메라를 못 찾는다면 이 부분이 원인일 가능성이 큽니다.

브라우저에서 웹캠을 쓰는 경우에는 사이트 권한도 따로 있습니다.

윈도우에서 허용했더라도 브라우저가 특정 사이트의 카메라 사용을 차단하면 화면이 나오지 않습니다.

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

## 3. 다른 앱이 카메라를 잡고 있는지 확인

일부 웹캠과 프로그램 조합에서는 한 앱이 카메라를 사용 중일 때 다른 앱이 접근하지 못할 수 있습니다.

줌, 디스코드, 방송 프로그램, 브라우저 탭을 모두 종료한 뒤 카메라 앱 하나만 열어 테스트해보시면 됩니다.

작업 표시줄이나 알림 영역에서 카메라 사용 표시가 계속 켜져 있다면 어떤 프로그램이 카메라를 쓰는지 확인하시는 것도 좋습니다.

불필요한 앱을 종료하면 장치를 다시 연결하지 않아도 바로 정상화되는 경우가 있습니다.

## 4. USB 허브보다 본체 직접 연결

고해상도 웹캠은 영상 데이터를 계속 전송하기 때문에 값싼 USB 허브나 오래된 연장 케이블에서 문제가 생길 수 있습니다.

인식이 반복되거나 화면이 멈춘다면 PC의 다른 USB 포트에 직접 연결해 비교해보시면 됩니다.

4K 웹캠이나 높은 프레임을 지원하는 제품은 필요한 USB 규격이 따로 지정돼 있기도 합니다.

제품 설명에서 권장 포트를 확인하고, 같은 허브에 외장 SSD나 캡처보드를 동시에 연결한 경우에는 잠시 분리해보시는 편이 좋습니다.

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

## 5. 장치 관리자와 드라이버

장치 관리자에서 카메라 항목이나 이미징 장치에 웹캠이 표시되는지 확인할 수 있습니다.

노란 경고 표시가 있다면 장치를 제거한 뒤 재부팅하거나 제조사 드라이버를 다시 설치하는 방법을 시도할 수 있습니다.

윈도우가 기본 드라이버로 바로 지원하는 웹캠도 많아 무조건 제조사 프로그램이 필요한 것은 아닙니다.

오히려 오래된 전용 프로그램이 최신 윈도우와 충돌하는 경우도 있어 기본 상태부터 확인하는 편이 좋습니다.

## 6. 웹캠 불량인지 확인하는 마지막 단계

권한과 포트를 모두 확인했는데 장치 목록에도 나타나지 않는다면 다른 PC에 연결해보시면 됩니다.

다른 PC에서도 전혀 인식되지 않는다면 케이블이나 웹캠 본체 문제 가능성이 높아집니다.

제가 권하는 순서는 카메라 설정에서 장치 확인, 개인정보 권한 확인, 다른 앱 종료, USB 직접 연결, 다른 PC 테스트입니다.

이 순서대로 보시면 소프트웨어 문제와 하드웨어 문제를 꽤 빠르게 나눌 수 있습니다.

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

## 7. 회사 PC라면 관리자 정책도 확인

업무용 PC에서는 회사 보안 정책으로 카메라 접근 자체가 막혀 있을 수 있습니다.

개인정보 설정을 켜도 다시 꺼지거나 항목을 변경할 수 없다면 장치 고장보다 관리 정책을 먼저 의심하셔야 합니다.

이 경우 드라이버를 반복해서 지우는 것은 도움이 되지 않습니다.

회사에서 지급한 PC라면 관리자나 IT 담당자가 카메라 사용을 허용할 수 있는지 확인하는 편이 가장 빠릅니다.

웹캠에 물리적인 가림 셔터나 전원 스위치가 있는 제품도 있습니다.

장치는 정상 인식되는데 화면만 검다면 렌즈 덮개와 본체 스위치가 닫혀 있지 않은지도 확인하셔야 합니다.

노트북의 기능키로 카메라를 비활성화하는 모델도 있습니다.

윈도우 설정만 정상이라고 끝내지 말고 기기 자체의 카메라 차단 기능까지 한 번 확인하시면 됩니다.
