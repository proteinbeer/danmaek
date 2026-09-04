---
title: "윈도우 11 블루스크린 원인과 해결 방법"
description: "윈도우 11에서 블루스크린(BSOD, 중지 코드 오류)이 발생할 때 원인을 파악하고 복구하는 방법을 단계별로 정리합니다."
date: 2026-09-03
updated: 2026-09-03
category: "가이드"
subcategory: "윈도우 11"
tags:
  - "윈도우 11"
  - "블루스크린"
  - "BSOD"
  - "중지 코드"
  - "오류 해결"
image: "/assets/posts/guide-images/hero-bloom.jpg"
imageAlt: "윈도우 11 블루스크린을 해결할 PC"
imageWidth: 1920
imageHeight: 1080
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

윈도우 11을 쓰다 보면 갑자기 파란 화면과 함께 오류 코드가 뜨면서 재부팅되는 경우가 있습니다. 바로 블루스크린(BSOD)이죠. 당황하지 말고 원인부터 파악하면 대부분 쉽게 해결됩니다. 블루스크린의 원인과 단계별 해결 방법을 정리했습니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/hero-bloom.jpg" alt="윈도우 11 블루스크린을 해결할 PC" width="1280" height="720" loading="lazy" decoding="async" />

## 1. 블루스크린이란 무엇인가

블루스크린은 치명적인 시스템 오류가 발생했을 때 화면 전체가 파란색으로 바뀌며 나오는 오류 화면입니다. 흔히 중지 코드(예: PAGE_FAULT_IN_NONPAGED_AREA, CRITICAL_PROCESS_DIED)가 함께 표시되고, 이 코드가 원인 단서가 됩니다.

블루스크린의 원인은 하드웨어 불량, 드라이버 충돌, 메모리 오류, 과열, 손상된 시스템 파일 등으로 매우 다양합니다. 화면에 적힌 중지 코드와 파일 이름을 메모하거나 사진으로 남겨 두면 해결에 큰 도움이 됩니다.

## 2. 원인 확인하기

블루스크린이 반복되면 먼저 어떤 오류가 나타나는지 확인해야 합니다. 중지 코드가 무엇인지, 어떤 드라이버나 파일이 이름으로 표시되는지 기록해 두면 됩니다. 이를 검색하거나 아래의 조치를 순서대로 적용하면 대부분 해결됩니다.

또한 최근에 설치한 드라이버, 프로그램, 일부 시스템 설정이 원인일 가능성이 높으므로, 문제가 생기기 전에 변경한 내용을 떠올리는 것도 큰 단서가 됩니다.

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

## 3. 드라이버와 시스템 업데이트

블루스크린의 흔한 원인은 오래되거나 충돌하는 드라이버입니다. 그래픽, 네트워크, 칩셋 드라이버를 최신 버전으로 업데이트하면 많은 오류가 해결됩니다. **설정 → Windows 업데이트 → 고급 옵션 → 선택적 업데이트**에서 드라이버 업데이트를 확인할 수 있습니다.

특히 최근에 새 하드웨어를 장착했는데 문제가 생겼다면 해당 드라이버를 제거하거나 이전 버전으로 되돌리는 것(롤백)도 효과적입니다. 제조사 공식 사이트에서 올바른 모델의 드라이버를 받는 것이 중요합니다.

## 4. 손상된 시스템 파일 복구

시스템 파일이 손상되어 블루스크린이 반복될 수 있습니다. 이때는 **전원 재부팅 중 윈도우 복구 환경으로 진입**하거나, 로그인된 상태에서 관리자 권한의 명령 프롬프트를 열어 손상 검사를 실행하면 됩니다.

검사 과정은 조금 걸릴 수 있습니다. 불안정한 동안에는 블루스크린이 반복되더라도 안전 모드에서 진입해 명령을 실행할 수 있으며, 손상된 파일이 있으면 자동으로 복구됩니다. 복구 후 재부팅했을 때 오류가 사라지는지 확인하면 됩니다.

## 5. 하드웨어 점검과 최후의 방법

위 방법들로 해결되지 않으면 하드웨어 문제를 의심해야 합니다. 메모리(RAM) 점검 명령을 실행하거나 디스크 오류 검사를 실행해 보고, 과열이 의심되면 냉각 상태를 확인해 보면 됩니다. 램이나 저장 장치의 불량, 전원 공급 문제가 블루스크린의 원인이 될 수 있습니다.

그래도 해결되지 않는다면 윈도우 복구(초기화)를 고려할 수 있습니다. 파일을 유지하면서 윈도우를 다시 설치하는 옵션을 선택하면 개인 파일을 보존하면서 시스템을 복구할 수 있죠. 하드웨어 문제가 계속된다면 전문 수리점의 진단을 받는 것이 좋습니다.

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

- [Microsoft Learn - 중지 코드 오류 문제 해결](https://learn.microsoft.com/en-us/troubleshoot/windows-client/performance/stop-code-error-troubleshooting)
- [Microsoft 지원 - Windows 블루스크린 오류 해결](https://support.microsoft.com/en-us/windows/resolving-blue-screen-errors-60b01860-58f2-be66-7516-5c45a66ae3c6)
