---
title: "윈도우 11 시작 프로그램 관리로 부팅 속도 올리기"
description: "윈도우 11이 켜질 때 자동으로 실행되는 시작 프로그램을 설정 앱과 작업 관리자에서 정리해 부팅 속도를 높이는 방법을 정리합니다."
date: 2026-09-02
updated: 2026-09-02
category: "가이드"
subcategory: "윈도우 11"
tags:
  - "윈도우 11"
  - "시작 프로그램"
  - "부팅 속도"
  - "최적화"
  - "작업 관리자"
image: "/assets/posts/guide-images/hero-bloom.jpg"
imageAlt: "윈도우 11 시작 프로그램을 정리할 PC"
imageWidth: 1920
imageHeight: 1080
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

윈도우 11이 부팅될 때 너무 많은 프로그램이 자동으로 실행되면 로그인 후에도 한동안 버벅이게 되죠. 시작 프로그램 몇 개만 정리해도 부팅 속도는 확실히 빨라집니다. 설정 앱과 작업 관리자에서 시작 앱을 관리하는 방법을 정리했습니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/hero-bloom.jpg" alt="윈도우 11 시작 프로그램을 정리할 PC" width="1280" height="720" loading="lazy" decoding="async" />

## 1. 시작 앱의 의미와 확인

윈도우 11에서 시작 프로그램은 로그인할 때 자동으로 실행되는 앱을 뜻합니다. 메신저, 백신, 업데이트 도구처럼 매번 필요한 앱은 시작 프로그램으로 켜두면 편하지만, 사용하지 않는데 계속 실행되는 앱이 많으면 부팅이 느려지고 배터리도 빨리 닳습니다.

먼저 어떤 앱이 시작되고 있는지 확인하면 됩니다. 굳이 자주 쓰지 않는데 실행되는 앱을 찾아 끄는 것이 정리의 핵심이죠. 시작 프로그램은 모두 끄는 것이 아니라, 자주 쓰지 않거나 불필요한 것만 선별해 끄는 것이 좋습니다.

## 2. 설정 앱에서 끄기

가장 간단한 방법은 설정 앱을 이용하는 것입니다. **시작 버튼 → 설정 → 앱 → 시작**으로 이동하면 자동 실행되는 앱 목록이 나오고, 각 앱 옆의 토글을 꺼서 시작 프로그램에서 제외할 수 있습니다.

이 화면은 현재 부팅에 미치는 영향 정도를 함께 보여주어, 영향이 큰 앱부터 정리하기 좋습니다. 설정에서는 앱을 켜고 끄는 것에 그치지만, 실행 성능에 미치는 영향은 확인할 수 있습니다.

## 3. 작업 관리자에서 끄기

더 자세한 정보가 필요하면 작업 관리자를 사용하면 됩니다. **시작 버튼을 마우스 오른쪽 버튼으로 클릭 → 작업 관리자**를 열고, **시작 앱** 탭으로 이동하면 됩니다. 각 앱의 상태와 부팅 영향(없음/낮음/높음)이 표시됩니다.

제거할 앱을 선택하고 **사용 안 함**을 누르면 해당 앱이 시작 프로그램에서 꺼집니다. 이 화면은 설정보다 영향도를 정확히 보여주어, 실제로 부팅을 느리게 만드는 앱을 찾아내는 데 효과적입니다. 백신이나 시스템 필수 요소는 건드리지 않는 것이 안전합니다.

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

## 4. 시작 폴더에서 직접 관리

설정과 작업 관리자에 나타나지 않는 앱은 시작 폴더에서 직접 관리할 수 있습니다. **윈도우 키 + R**을 눌러 실행 창을 열고 `shell:startup`을 입력하면 현재 사용자의 시작 폴더가 열립니다. 여기 있는 바로가기를 삭제하거나 옮기면 시작 프로그램에서 빠집니다.

모든 사용자에게 적용하려면 `shell:common startup`을 사용하면 됩니다. 시작 폴더는 파일 탐색기처럼 보이므로, 잘못 지우지 않도록 조심해서 정리하면 됩니다. 의심되는 바로가기만 삭제하고 나머지는 그대로 두는 것이 좋습니다.

## 5. 정리 후 주의할 점

시작 프로그램을 모두 꺼두면 오히려 필요한 프로그램이 실행되지 않을 수 있습니다. 이후 정기적으로 켜고 싶은 앱은 다시 **사용**으로 바꾸거나 시작 폴더에 바로가기를 넣으면 됩니다.

백신, 드라이버 업데이트 도구, 클라우드 동기화 클라이언트처럼 백그라운드에서 반드시 돌아야 하는 앱은 끄지 않는 것이 좋습니다. 부팅 속도만을 위해 보안 관련 프로그램까지 끄면 오히려 시스템이 위험해질 수 있죠. 항상 '이 앱이 정말 자동 실행돼야 하나'를 기준으로 판단하면 됩니다.

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

- [Microsoft 지원 - Windows에서 시작 앱 구성](https://support.microsoft.com/en-us/windows/experience/startup-boot/configure-startup-applications-in-windows)
- [Microsoft Windows - 시작 프로그램 관리하기](https://www.microsoft.com/en-us/windows/learning-center/take-control-of-windows-startup)
