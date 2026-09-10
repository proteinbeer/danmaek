---
title: "윈도우 11 샌드박스, 수상한 프로그램을 본체에 설치하기 싫을 때"
description: "인터넷에서 받은 프로그램을 한번 실행해보고 싶지만 본체 윈도우에 바로 설치하기는 찝찝할 때가 있습니다."
date: 2026-08-23
updated: 2026-08-23
category: "가이드"
subcategory: "윈도우 11"
tags:
  - "윈도우 11"
  - "샌드박스"
  - "보안"
  - "테스트"
  - "가상"
image: "/assets/posts/guide-images/hero-bloom.jpg"
imageAlt: "윈도우 11 샌드박스 실행 화면"
imageWidth: 1920
imageHeight: 1080
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

인터넷에서 받은 프로그램을 한번 실행해보고 싶지만 본체 윈도우에 바로 설치하기는 찝찝할 때가 있습니다.

윈도우 샌드박스는 이런 상황에서 임시로 분리된 윈도우 환경을 열어 프로그램을 테스트할 수 있게 해주는 기능입니다.

일반 프로그램처럼 창 하나로 열리지만 안쪽은 본체와 분리된 별도 환경에 가깝습니다.

샌드박스를 닫으면 그 안에 설치한 프로그램과 파일 상태가 기본적으로 사라져 테스트 흔적을 남기지 않는 것이 특징입니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/hero-bloom.jpg" alt="윈도우 11 샌드박스 실행 화면" width="1280" height="720" loading="lazy" decoding="async" />

## 1. 윈도우 홈에서는 기본 지원되지 않는다

윈도우 샌드박스는 윈도우 11 프로, 엔터프라이즈, 교육용 같은 지원 에디션에서 사용할 수 있습니다.

윈도우 11 홈에서는 기본 기능으로 지원되지 않기 때문에 메뉴가 보이지 않는다고 고장난 것은 아닙니다.

가상화 기능을 사용할 수 있는 하드웨어 조건도 필요합니다.

PC의 가상화 지원 상태와 윈도우 에디션을 먼저 확인해야 기능을 켠 뒤 실행이 안 되는 상황을 줄일 수 있습니다.

지원 환경이 맞다면 윈도우 기능 켜기 또는 끄기 화면에서 윈도우 샌드박스를 활성화할 수 있습니다.

설치 뒤 재부팅이 필요할 수 있습니다.

## 2. 실행할 때마다 깨끗한 환경

샌드박스를 실행하면 별도의 윈도우 바탕화면이 열립니다.

여기에 필요한 파일을 복사하고 프로그램을 설치해 동작을 확인할 수 있습니다.

가장 큰 장점은 일회성이라는 점입니다.

창을 닫으면 기본적으로 설치한 앱과 파일이 삭제되고 다음 실행에서는 다시 깨끗한 환경이 시작됩니다.

그래서 테스트 프로그램이 본체 설정을 어지럽히는 일을 줄일 수 있습니다.

여러 유틸리티를 비교하거나 설치 뒤 남는 파일이 걱정될 때도 활용하기 좋습니다.

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

## 3. 샌드박스가 완벽한 보안 금고는 아니다

분리된 환경이라고 해서 인터넷에서 받은 모든 파일을 아무 생각 없이 실행해도 된다는 뜻은 아닙니다.

샌드박스도 네트워크와 클립보드 같은 기능을 통해 본체와 일정 부분 연결될 수 있고 설정에 따라 공유 범위가 달라질 수 있습니다.

정말 위험한 악성코드를 분석하는 전문 환경을 대신하는 용도로 생각하면 안 됩니다.

일반 사용자가 정체가 불분명한 프로그램을 본체에 바로 설치하는 위험을 줄이는 보조 수단에 가깝습니다.

회사 PC라면 보안 정책에서 가상 환경 사용 자체를 제한할 수도 있습니다.

업무 자료를 샌드박스로 복사하기 전에는 조직 규칙도 확인하는 편이 좋습니다.

## 4. 파일을 남기고 싶다면 먼저 복사

샌드박스에서 만든 문서나 내려받은 파일이 필요하다면 창을 닫기 전에 본체의 안전한 위치로 옮겨야 합니다.

닫은 뒤에는 기본적으로 샌드박스 안의 상태가 삭제됩니다.

이 특성이 장점이면서 가장 흔한 실수이기도 합니다.

테스트가 잘돼서 결과 파일까지 만들었는데 그대로 닫아버리면 다시 작업해야 할 수 있습니다.

반대로 필요 없는 파일은 일부러 정리할 필요가 없습니다.

샌드박스 자체를 닫는 것으로 환경을 버릴 수 있어 테스트용 PC처럼 관리할 부담이 적습니다.

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

## 5. 어떤 상황에서 가장 유용한가

새 프로그램을 잠깐 확인하거나 설치 프로그램의 동작을 보고 싶을 때 가장 편합니다.

브라우저 확장 도구와 함께 설치되는 앱이나 출처가 익숙하지 않은 유틸리티를 시험할 때도 본체보다 부담이 적습니다.

저는 샌드박스의 핵심을 위험한 파일 실행 기능보다 되돌리기 쉬운 테스트 공간이라고 봅니다.

정상 프로그램도 설치 뒤 레지스트리와 폴더를 많이 남길 수 있는데 샌드박스에서는 이런 흔적을 본체에서 분리할 수 있기 때문입니다.

윈도우 11 프로를 사용하면서 여러 프로그램을 자주 테스트하신다면 별도 가상 머신을 만들기 전에 먼저 써볼 만합니다.

한 번 켜두면 필요할 때 바로 열 수 있어 생각보다 활용 범위가 넓습니다.

## 6. 본체 파일을 넣을 때도 최소한으로

샌드박스를 테스트 공간으로 쓸 때는 본체의 문서 폴더 전체를 가져오기보다 필요한 파일만 복사하는 편이 좋습니다.

격리된 환경을 쓰는 이유가 위험 범위를 줄이는 것인데 중요한 개인 자료까지 함께 넣으면 장점이 줄어듭니다.

인터넷에서 받은 설치 파일을 시험하려면 먼저 파일의 출처와 디지털 서명도 확인합니다.

샌드박스는 확인 과정을 대신하는 것이 아니라 혹시 모를 영향을 본체에서 분리하는 추가 단계입니다.

테스트가 끝난 뒤 필요한 결과만 본체로 가져오고 샌드박스를 닫으면 됩니다.

이 단순한 흐름을 지키면 프로그램을 많이 시험하는 PC에서도 본체 환경을 비교적 깔끔하게 유지할 수 있습니다.

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
