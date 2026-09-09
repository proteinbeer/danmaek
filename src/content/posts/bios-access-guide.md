---
title: "바이오스(BIOS) 진입하는 법, 제조사별 단축키 정리"
description: "윈도우에서 바이오스(펌웨어) 설정 화면으로 들어가는 방법과 데스크톱·노트북 제조사별 단축키를 정리했습니다. 키를 놓쳤을 때 재시작 옵션으로 진입하는 방법도 담았습니다."
date: 2026-09-06
updated: 2026-09-06
category: "가이드"
subcategory: "PC·하드웨어"
tags:
  - "바이오스"
  - "BIOS"
  - "UEFI"
  - "진입 방법"
  - "부팅 옵션"
image: "/assets/posts/guide-images/hero-bloom.jpg"
imageAlt: "메인보드 펌웨어 설정 화면으로 진입하는 바이오스"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

윈도우 설치용 USB로 부팅하려면, 부팅 순서를 바꾸려면, 메모리 오버클럭(XMP)을 켜려면 **바이오스(BIOS/UEFI) 진입이 필요**합니다. 하지만 전원을 켜자마자 어느 키를 눌러야 하는지 매번 헷갈리기 마련이죠.

바이오스 진입 방법은 크게 부팅 직후 단축키를 누르는 방법과 윈도우에서 재시작 옵션으로 들어가는 방법 두 가지가 있습니다. 두 방법 모두 아래에 정리했습니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/hero-bloom.jpg" alt="메인보드 펌웨어 설정 화면으로 진입하는 바이오스" width="1200" height="675" loading="lazy" decoding="async" />

## 1. 부팅 직후 단축키로 진입

컴퓨터 전원을 켜고 **제조사 로고가 보이는 순간** 정해진 키를 연타하면 바이오스로 들어갑니다.

- 데스크톱 메인보드: **ASUS(Gigabyte)는 Del(Delete)**, 애즈락·MSI는 Del이 대표적입니다. 일부 보드는 F2도 함께 됩니다.
- 노트북: **F2**가 가장 흔하고, 삼성은 F2, LG는 F2, HP는 F10 또는 Esc, 레노버는 F2 또는 Fn+F2를 씁니다.
- 부팅 메뉴(USB 선택)는 **F11, F12, Esc**로 바로 들어갈 수 있는 경우가 많습니다.

키를 누르는 타이밍이 어렵다면 **로고가 떠 있는 동안 왼쪽 1초당 2~3번씩 연타**하면 됩니다. 너무 빨리 지나가거나 이미 윈도우가 떠버렸다면 아래 재시작 방법을 사용하시기 바랍니다.

## 2. 윈도우에서 재시작 옵션으로 진입

빠른 부팅 때문에 단축키 타이밍을 놓치기 쉽습니다. 윈도우에는 재부팅 중에 바이오스로 보내주는 메뉴가 있습니다.

- 설정 → 시스템 → 복구 → **고급 시작 옵션**의 "지금 다시 시작"을 누릅니다.
- 재부팅된 **옵션 선택** 화면에서 문제 해결 → 고급 옵션 → UEFI 펌웨어 설정 → 다시 시작을 선택합니다.
- 바이오스 버전이 오래되지 않았다면 이 경로로 대부분 진입할 수 있습니다.

이 방법은 키보드가 없거나 단축키가 안 먹히는 기기에서도 동작하므로, 빠른 부팅이 켜진 최신 PC에서는 가장 확실한 방법입니다.

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

## 3. 진입이 안 될 때 점검 사항

단축키도 재시작 옵션도 안 된다면 아래 항목을 확인합니다.

- **무선 키보드**를 쓴다면 표시등이 켜질 때까지 기다렸다가 누르고, 여의치 않으면 **유선 키보드**를 꽂아 재시도합니다.
- USB 포트가 바이오스 단계에서 인식되지 않는 경우가 있습니다. 본체 후면의 메인보드 USB 포트에 직접 꽂아보세요.
- 윈도우가 문제 없이 떠서 옵션 화면이 안 나온다면 **빠른 시작**을 끄고 재부팅할 수 있습니다.
- 하드웨어가 매우 오래된 경우 UEFI가 아닌 레거시 BIOS용 진입 키(F1 등)를 쓰는 메인보드도 있으니, 제조사 공식 문서에서 해당 모델의 키를 확인하시기 바랍니다.

## 4. 바이오스에서 자주 하는 설정

진입 후 어떤 메뉴가 있는지 알아두면 바이오스가 더 이상 낯설지 않습니다.

- **부팅 순서(Boot Priority)**: USB나 새 SSD를 첫 번째로 지정해 부팅하려 할 때 사용합니다.
- **XMP/EXPO**: 메모리 예정 성능을 켜는 옵션으로, 정상 속도로 쓰려면 활성화합니다.
- **팬 설정(Fan Control)**: 온도별 팬 속도를 조절해 소음과 냉각 밸런스를 맞춥니다.
- **설정 저장 후 종료**: 변경 내용을 꼭 **Save & Exit(저장 후 종료)**로 빠져야 적용됩니다.

마우스가 되는 바이오스가 많지만, 방향키와 엔터, Esc로 모든 항목을 조작할 수 있으니 키보드만으로도 충분합니다. 실수로 설정을 바꿨다면 **Load Optimized Defaults(기본값 복원)**로 되돌리면 됩니다.

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
