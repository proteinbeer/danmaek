---
title: "윈도우 11 설치 USB 만들고 클린 설치하는 법"
description: "윈도우 11 설치 USB를 만드는 방법과 이를 활용한 클린 설치 과정을 정리했습니다. 공식 미디어 제작 도구와 Rufus 두 가지 방법으로 준비할 수 있습니다."
date: 2026-08-28
updated: 2026-08-28
category: "가이드"
subcategory: "윈도우 11"
tags:
  - "윈도우 11"
  - "설치 USB"
  - "클린 설치"
  - "부팅 USB"
  - "Rufus"
image: "/assets/posts/guide-images/hero-bloom.jpg"
imageAlt: "윈도우 11 설치 미디어를 만드는 PC 환경"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

오래 쓰던 PC가 갑자기 느려지거나 문제가 생겼을 때, 윈도우 11 설치 USB 하나면 언제든 깨끗한 상태로 되돌릴 수 있습니다. 저장 공간을 완전히 정리하고 싶은 분, 중고 PC에 윈도우를 다시 설치하려는 분께 유용하죠.

설치 USB는 마이크로소프트 공식 미디어 제작 도구만으로도 충분히 만들 수 있고, ISO 파일을 활용해 Rufus로 만들 수도 있습니다. 준비물부터 설치 완료까지 순서대로 정리했습니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/hero-bloom.jpg" alt="윈도우 11 설치 미디어를 만드는 PC 환경" width="1200" height="675" loading="lazy" decoding="async" />

## 1. 준비물 확인

시작하기 전에 필요한 장비를 먼저 확인합니다.

- **8GB 이상 USB 메모리** (안에 있는 데이터는 모두 삭제되므로 미리 백업)
- 인터넷이 연결된 PC
- 마이크로소프트 계정 (클린 설치 시 로그인으로 정품 인증 가능)

설치할 PC가 윈도우 11 요구 사항(TPM 2.0, 보안 부팅 지원)을 충족하는지도 확인하면 이후 부팅 문제를 피할 수 있습니다.

## 2. 공식 미디어 제작 도구로 설치 USB 만들기

방법이 가장 간단하기 때문에 처음 설치하는 분께 추천하는 방식입니다. 마이크로소프트 공식 도구를 내려받아 USB에 바로 기록해줍니다.

1. [마이크로소프트 윈도우 11 다운로드 페이지](https://www.microsoft.com/ko-kr/software-download/windows11)에 접속합니다.
2. 페이지 아래의 **지금 도구 다운로드** 버튼을 눌러 미디어 제작 도구를 내려받습니다.
3. 실행 후 라이선스와 언어/버전 설정을 진행합니다.
4. **USB 플래시 드라이브**를 선택하고 대상 USB를 지정합니다.
5. 기록이 끝나면 그대로 부팅 USB로 사용할 수 있습니다.

주의할 점은 대상 USB의 데이터가 전부 지워진다는 것입니다. 도구 실행 전에 꼭 백업을 하시기 바랍니다.

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

## 3. Rufus로 설치 USB 만들기

ISO 파일을 보관해두고 필요할 때마다 부팅 USB를 만들고 싶은 분은 Rufus를 사용합니다. 무료 프로그램이므로 공식 사이트에서 내려받아 쓰시면 됩니다.

1. 미디어 제작 도구에서 언어/버전을 선택할 때 **ISO 파일** 옵션을 골라 이미지 파일을 내려받습니다.
2. [Rufus 공식 사이트](https://rufus.ie/ko/)에서 최신 버전을 받아 실행합니다.
3. 장치에 USB를 선택하고 부팅 유형에 **선택한 ISO 이미지**를 지정합니다.
4. 파티션 유형에서 **GPT (UEFI)**를 선택하고 **시작**을 누르면 완료됩니다.

Rufus는 ISO를 사용해도 되고, 이미 만들어둔 설치 디스크 이미지를 그대로 옮길 수도 있어 활용도가 높습니다.

## 4. USB로 부팅하기 위한 설정

만든 USB를 설치할 PC에 꽂고 재부팅하면 대부분 바로 설치 화면으로 진입합니다. 진입하지 않는다면 펌웨어(바이오스)에서 부팅 순서를 바꿔야 합니다.

- 부팅 직후 **DEL, F2, F10, F12** 중 해당하는 키를 눌러 바이오스/부팅 메뉴로 들어갑니다.
- **Boot 순서나 일회성 부팅 메뉴(Boot Menu, 보통 F11·F12)**에서 USB를 맨 위로 올립니다.
- 저장 후 재부팅하면 Windows 로고와 함께 설치 화면이 나타납니다.

USB가 인식되지 않는다면 **USB 3.0 포트 대신 USB 2.0 포트**에 연결하거나, 보안 부팅(Secure Boot) 설정을 확인해보시기 바랍니다.

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

## 5. 클린 설치 진행

설치 화면까지 진입했다면 이후 과정은 간단합니다.

1. 언어, 시간 및 통화 형식, 키보드 종류를 선택하고 **다음**을 누릅니다.
2. **지금 설치**를 클릭하고 제품 키 입력 화면에서 **제품 키가 없음**을 선택해 진행합니다. (마이크로소프트 계정 로그인으로도 정품 인증 가능)
3. 설치 유형에서 **사용자 지정: Windows만 설치(고급)**를 선택합니다.
4. 대상 디스크의 기존 파티션을 선택해 **삭제**한 뒤, 여유 공간에 **새로 만들기**로 파티션을 만들고 설치를 진행합니다.
5. 파일 복사와 재부팅이 반복되며 설치가 마무리됩니다.

기존 파티션을 삭제하면 그 안의 모든 데이터가 사라집니다. 중요한 파일은 별도 저장 장치에 백업해두셨는지 반드시 확인하시기 바랍니다.

## 6. 설치 후 초기 설정

클린 설치가 끝나면 첫 부팅 설정이 시작됩니다. 지역, 키보드 레이아웃, 마이크로소프트 계정 로그인, 개인 정보 설정 등을 순서대로 진행하면 바탕화면이 나타납니다.

초기 설정 단계에서 지침이 저절로 따라지면서 일부 데이터(바탕화면, 문서)가 윈도우 복원 기능을 통해 다시 돌아오기도 합니다. 그동안 쓰던 프로그램은 남아 있지 않으므로 필요한 프로그램을 다시 설치하시면 됩니다.

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
