---
title: "윈도우 11 자동 업데이트 일시중지와 차단 방법"
description: "윈도우 11 자동 업데이트가 불편할 때 일시중지하는 방법을 설명하고, 업데이트 시간을 조정하거나 특정 업데이트를 차단하는 방법을 정리합니다."
date: 2026-09-02
updated: 2026-09-02
category: "가이드"
subcategory: "윈도우 11"
tags:
  - "윈도우 11"
  - "윈도우 업데이트"
  - "업데이트 일시중지"
  - "자동 업데이트"
  - "시스템 설정"
image: "/assets/posts/guide-images/hero-bloom.jpg"
imageAlt: "윈도우 11 자동 업데이트 설정 화면"
imageWidth: 1920
imageHeight: 1080
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

윈도우 11은 업데이트를 자동으로 다운로드하고 설치하느라 정작 사용할 때 재부팅을 요구하기도 하죠. 중요한 일을 하는 동안 갑자기 업데이트가 진행되지 않도록 일시중지하는 방법을 정리했습니다. 완전 차단보다 일시중지가 훨씬 안전합니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/hero-bloom.jpg" alt="윈도우 11 자동 업데이트 설정 화면" width="1280" height="720" loading="lazy" decoding="async" />

## 1. 일시중지 기능의 의미

윈도우 11의 업데이트 일시중지는 몇 주 동안 업데이트 설치를 미루는 기능입니다. 보안 패치나 드라이버가 안정적으로 검증되기 전에 적용되는 것을 피하고 싶을 때 유용하죠. 일시중지는 완전 차단이 아니라 일시적으로 미루는 것이라 나중에 다시 업데이트를 받을 수 있습니다.

일시중지된 동안에도 일부 중요한 보안 업데이트는 설치될 수 있으므로, 완벽한 차단을 기대해서는 안 됩니다. 안정성이 중요하거나 특별한 작업이 있을 때 잠깐 미루는 용도로 이해하면 됩니다.

## 2. 설정에서 일시중지하기

일시중지는 설정 앱에서 아주 간단하게 진행됩니다. **시작 버튼 → 설정 → Windows 업데이트**로 이동하면 상단에 **업데이트 일시중지** 옵션이 보입니다. 옆의 드롭다운 메뉴에서 원하는 기간(1주에서 5주까지)을 선택하면 해당 기간 동안 업데이트가 일시중지됩니다.

만약 이미 일시중지를 사용 중이라면 **업데이트 다시 시작**을 눌러 언제든 새로운 업데이트를 받을 수 있습니다. 일시중지 기간이 끝나면 자동으로 업데이트 확인이 재개됩니다.

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

## 3. 활동 시간으로 재부팅 방지

업데이트가 설치된 뒤 자동 재부팅이 불편하다면 **활동 시간(사용 중인 시간)**을 설정하면 됩니다. **설정 → Windows 업데이트 → 고급 옵션 → 활동 시간**에서 사용 중인 시간을 정해두면, 그 시간대에는 윈도우가 재부팅하지 않습니다.

활동 시간은 매일 반복되며 최대 18시간으로 설정할 수 있습니다. 평소 PC를 쓰는 시간대를 넉넉하게 잡아두면 업데이트로 인한 예상치 못한 재부팅을 어느 정도 막을 수 있죠.

## 4. 업데이트 차단 방식

일시중지보다 더 강하게 막고 싶다면 그룹 정책이나 레지스트리를 이용할 수 있습니다. 다만 이 방식은 업데이트 자체를 막아 보안 패치를 놓칠 위험이 있어 신중해야 합니다. Pro 이상에서 사용할 수 있는 그룹 정책 편집기(gpedit.msc)를 열고, **컴퓨터 구성 → 관리 템플릿 → Windows 구성 요소 → Windows 업데이트**에서 자동 업데이트 구성을 조정하면 됩니다.

홈 에디션에서는 그룹 정책이 제공되지 않아 레지스트리 편집(regedit)으로 업데이트 서비스 문제를 조정하기도 하지만, 이는 권장되지 않습니다. 전문적인 지식 없이 시스템 파일을 건드리면 윈도우가 손상될 수 있으므로, 일반 사용자는 설정의 일시중지와 활동 시간을 활용하는 편이 안전합니다.

## 5. 일시중지 후 체크리스트

업데이트를 일시중지했다면, 꼭 다시 업데이트를 확인하도록 기억해 두는 것이 중요합니다. 일시중지 기간이 끝나는 날짜를 미리 파악해 두고, 여유가 있을 때 **업데이트 다시 시작**을 눌러 최신 보안 패치를 적용하면 됩니다.

또한 중요한 작업이 끝난 뒤에는 일시중지를 해제하지 않아도 Windows가 다시 업데이트를 확인하므로, 평소에는 굳이 차단할 필요가 없습니다. 보안 패치가 밀리지 않도록 업데이트를 최신 상태로 유지하는 습관이 가장 좋습니다.

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

- [Microsoft 지원 - Windows에서 업데이트 관리](https://support.microsoft.com/en-us/windows/manage-updates-in-windows-643e9ea7-3cf6-7da6-a25c-95d4f7f099fe)
- [Microsoft Windows - Windows 업데이트 일시중지하기](https://www.microsoft.com/en-us/windows/learning-center/windows-update-pause)
