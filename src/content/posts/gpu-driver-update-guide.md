---
title: "그래픽카드 드라이버 업데이트하는 법, NVIDIA·AMD·인텔 정리"
description: "새 게임이 랙이 걸리거나 화면이 깨질 때 점검할 그래픽카드 드라이버 업데이트 방법을 정리했습니다. NVIDIA, AMD, 인텔 각각의 순서와 클린 설치까지 다룹니다."
date: 2026-08-27
updated: 2026-08-27
category: "가이드"
subcategory: "PC·하드웨어"
tags:
  - "그래픽카드"
  - "드라이버"
  - "NVIDIA"
  - "AMD"
  - "인텔"
  - "DDU"
image: "/assets/posts/guide-images/hero-bloom.jpg"
imageAlt: "그래픽카드 드라이버를 업데이트할 데스크톱 PC"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>


새 게임이 나왔을 때 랙이 걸리거나 화면이 깨지면, 대부분 그래픽카드 드라이버부터 의심합니다. 드라이버는 게임 최적화에 직접 영향을 주기 때문에 업데이트만으로도 체감 성능이 달라지는 경우가 많죠.

그래픽카드 드라이버는 제조사마다 업데이트 방식이 조금 다릅니다. NVIDIA, AMD, 인텔 순서대로 정리했으니 본인 그래픽카드에 맞는 방법을 따라 하시면 됩니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/hero-bloom.jpg" alt="그래픽카드 드라이버를 업데이트할 데스크톱 PC" width="1200" height="675" loading="lazy" decoding="async" />


## 1. 현재 드라이버 버전 확인 먼저

업데이트 전에 현재 설치된 드라이버 버전을 확인해둡니다. 문제가 생겼을 때 이전 버전으로 되돌아가기 위한 기준이 되죠.

- Windows의 **dxdiag**를 실행해 디스플레이 탭에서 드라이버 버전을 확인할 수 있습니다. (시작 메뉴 검색에 **dxdiag** 입력)
- NVIDIA 사용자는 **NVIDIA 앱**, AMD 사용자는 **AMD Software**에서 현재 버전을 바로 볼 수 있습니다.
- **GPU-Z** 같은 유틸리티를 쓰면 세부 정보를 더 정확히 확인할 수 있습니다.

버전을 메모해두면 업데이트 전후 비교가 쉬워집니다.

## 2. NVIDIA 그래픽카드 업데이트

NVIDIA 앱을 쓰는 경우 가장 간단합니다. 기존의 지포스 익스피리언스를 대체하는 공식 앱이죠.

1. [NVIDIA 드라이버 다운로드 페이지](https://www.nvidia.com/ko-kr/drivers/)에 접속합니다.
2. 그래픽카드 모델과 운영체제를 선택하거나 **자동 감지**를 이용합니다.
3. 최신 드라이버를 내려받아 설치합니다. 설치 중 **사용자 지정(고급) 설치**에서 **클린 설치**를 선택하면 기존 설정이 초기화됩니다.

게임을 하루 앞두고 새 드라이버가 나오는 경우가 많으므로, 신작 게임이 랙이 걸리면 최신 드라이버부터 확인하시면 됩니다.

## 3. AMD 그래픽카드 업데이트

AMD는 공식 앱에서 드라이버 업데이트를 자동으로 진행할 수 있습니다.

1. [AMD 드라이버 지원 페이지](https://www.amd.com/ko/support)에서 자동 감지 도구를 내려받거나, 그래픽카드 모델을 직접 선택합니다.
2. **AMD Software: Adrenalin Edition**을 설치하면 앱 안에서 업데이트 알림과 설치를 처리합니다.
3. 드라이버 오류가 잦다면 앱의 **설정 → 시스템 → 업데이트 재설정**이나 클린 설치 옵션을 사용합니다.

AMD 라데온 소프트웨어는 게임별 프로필, 프레임 표시 등 부가 기능도 제공합니다.

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

## 4. 인텔 내장 그래픽 업데이트

내장 그래픽(인텔 UHD/아크)은 노트북과 사무용 PC에서 많이 쓰입니다. 별도 그래픽카드 없이 업데이트하는 방법입니다.

1. [인텔 드라이버 지원 페이지](https://www.intel.com/content/www/us/en/download-center/home.html)에 접속합니다.
2. **인텔 드라이버 및 지원 도우미(인텔 드라이버 & 지원 지원 프로그램)**를 내려받아 자동 감지를 진행합니다.
3. 발견된 드라이버를 설치하고 재부팅합니다.

인텔 그래픽 드라이버는 윈도우 업데이트로도 최신 버전이 자동 제공되므로, 특별한 문제가 없다면 윈도우 업데이트만으로도 충분합니다.

## 5. 반복되는 오류는 클린 설치(DDU)

드라이버를 여러 번 갈아끼웠는데도 오류가 반복된다면 **안전 모드에서 기존 드라이버를 완전히 제거**하고 다시 설치하는 것이 확실합니다.

- **DDU(Display Driver Uninstaller)**는 NVIDIA·AMD·인텔 드라이버를 잔여 파일까지 깨끗하게 지워주는 도구입니다.
- 안전 모드로 부팅한 뒤 DDU를 실행하고 **재부팅 후 설치** 옵션을 선택합니다.
- 이후 공식 사이트에서 최신 드라이버를 설치하면 깨끗한 상태로 시작됩니다.

클린 설치 후에는 첫 게임 실행 시 셰이더 컴파일이 다시 이뤄져 잠시 성능이 저하될 수 있는데, 한 번 실행하면 정상화됩니다.

## 6. 업데이트 후 확인과 롤백

드라이버를 바꾼 뒤에는 실제 게임에서 문제가 사라졌는지 확인합니다.

- 실행 중 크래시나 튕김이 개선됐는지, 가끔은 신규 드라이버가 오히려 문제를 만들기도 합니다.
- 업데이트 직후 문제가 생겼다면 **이전 버전 드라이버를 재설치**하거나 Windows의 장치 관리자에서 **드라이버 롤백**을 시도합니다.
- NVIDIA/AMD 모두 구버전 드라이버를 공식 페이지에서 내려받을 수 있습니다.

최신 드라이버만 정답은 아닙니다. 자주 쓰는 게임에 가장 안정적인 한 단계 이전 버전이 더 좋은 경우도 있으니, 문제가 생기면 다시 돌아가는 게 자연스럽죠.

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

- [NVIDIA 드라이버 다운로드](https://www.nvidia.com/ko-kr/drivers/)
- [AMD 드라이버 및 지원](https://www.amd.com/ko/support)
- [인텔 드라이버 및 지원](https://www.intel.com/content/www/us/en/download-center/home.html)