---
title: "비트로커 복구 키가 갑자기 뜰 때, 포맷 전에 먼저 확인할 것"
description: "평소처럼 컴퓨터를 켰는데 파란 화면에서 비트로커 복구 키를 요구하면 당황하기 쉽습니다."
date: 2026-08-26
updated: 2026-08-26
category: "가이드"
subcategory: "윈도우 11"
tags:
  - "윈도우 11"
  - "비트로커"
  - "복구 키"
  - "암호화"
  - "보안"
image: "/assets/posts/guide-images/hero-bloom.jpg"
imageAlt: "비트로커 복구 키 입력 화면"
imageWidth: 1920
imageHeight: 1080
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

평소처럼 컴퓨터를 켰는데 파란 화면에서 비트로커 복구 키를 요구하면 당황하기 쉽습니다.

비밀번호도 아닌 48자리 숫자를 갑자기 입력하라고 나오기 때문에 윈도우가 망가졌다고 생각할 수 있죠.

비트로커 복구 화면은 저장장치가 암호화돼 있고 윈도우가 평소와 다른 보안 상태를 감지했을 때 나타날 수 있습니다.

메인보드 설정 변경, 펌웨어 업데이트, 하드웨어 변경 같은 일이 계기가 되기도 합니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/hero-bloom.jpg" alt="비트로커 복구 키 입력 화면" width="1280" height="720" loading="lazy" decoding="async" />

## 1. 복구 키와 로그인 비밀번호는 다르다

비트로커 복구 키는 윈도우 로그인 암호나 PIN과 같은 것이 아닙니다.

암호화된 드라이브를 다시 열기 위한 48자리 숫자이며, 화면에는 어떤 키를 사용해야 하는지 구분할 수 있는 복구 키 식별 정보도 표시됩니다.

마이크로소프트 계정에 키가 여러 개 저장돼 있을 수도 있습니다.

이럴 때는 복구 화면의 키 식별 정보와 계정에 저장된 항목을 비교해서 맞는 키를 찾아야 합니다.

PIN을 여러 번 바꿨다고 해서 복구 키도 같이 바뀌는 것은 아닙니다.

둘을 같은 종류의 비밀번호로 생각하면 찾는 과정부터 꼬이기 쉽습니다.

## 2. 가장 먼저 마이크로소프트 계정 확인

개인 PC를 마이크로소프트 계정으로 설정했다면 복구 키가 해당 계정에 저장돼 있을 가능성이 큽니다.

다른 휴대전화나 PC에서 마이크로소프트 계정에 로그인한 뒤 장치에 연결된 비트로커 복구 키를 확인합니다.

윈도우 11 24H2 이후 일부 복구 화면에서는 어떤 마이크로소프트 계정과 연결된 키인지 힌트가 표시될 수 있습니다.

계정을 여러 개 쓰는 분이라면 이 정보가 어떤 계정부터 확인해야 하는지 판단하는 데 도움이 됩니다.

회사나 학교에서 관리하는 PC라면 개인 계정이 아니라 조직 계정에 키가 보관될 수 있습니다.

이 경우에는 임의로 초기화하지 말고 관리 담당자에게 먼저 확인하는 편이 맞습니다.

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

## 3. 계정에 없을 때 찾아볼 곳

비트로커를 설정할 때 복구 키를 USB나 파일로 저장했거나 종이로 출력했을 수 있습니다.

예전에 윈도우를 설치한 사람이 따로 있다면 그 사람의 계정에 저장돼 있을 가능성도 있습니다.

중고 PC는 특히 이 부분이 문제입니다.

이전 소유자의 계정에만 키가 있고 현재 사용자가 복구 키를 전달받지 못했다면 암호화된 기존 데이터에 접근하기 어려울 수 있습니다.

그래서 중고 PC를 인수하실 때는 윈도우 로그인만 되는지 보는 것보다 장치 암호화 상태와 복구 키 보관 여부까지 확인하는 편이 좋습니다.

평소에는 보이지 않던 문제가 펌웨어 업데이트 한 번 뒤에 갑자기 드러날 수 있기 때문입니다.

## 4. 키가 없으면 마이크로소프트도 만들어주지 못한다

복구 키는 암호화 보호의 핵심이라 마이크로소프트 고객지원에서도 잃어버린 키를 새로 만들어 제공할 수 없습니다.

이 점 때문에 복구 화면이 나온 뒤에야 처음 키의 존재를 알게 되면 상황이 꽤 난감해집니다.

키를 찾지 못하고 원래 보안 상태로 되돌리는 것도 불가능하다면 장치를 초기화해야 할 수 있습니다.

이 경우 암호화된 기존 파일을 살리는 것과 윈도우를 다시 쓰는 것은 별개의 문제가 됩니다.

포맷부터 하면 혹시 찾을 수 있었던 데이터까지 포기하게 됩니다.

따라서 계정, 조직 계정, USB, 출력물, 설치를 도와준 사람 순서로 복구 키를 먼저 찾아보는 것이 우선입니다.

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

## 5. 평소에 해둘 한 가지

비트로커가 정상 작동 중일 때 복구 키 위치를 한번 확인해두는 것이 가장 좋습니다.

복구 키 식별 정보와 저장 위치를 알아두면 실제 화면이 떴을 때 공포스러운 48자리 숫자가 아니라 찾을 수 있는 열쇠로 보이기 시작합니다.

특히 바이오스 업데이트나 메인보드 설정을 크게 바꾸기 전에는 복구 키를 확인해두시는 편이 안전합니다.

장치가 고장나지 않았는데도 보안 상태가 달라졌다는 이유로 복구 확인이 필요한 경우가 있기 때문입니다.

비트로커는 귀찮게 만드는 기능이 아니라 저장장치를 잃어버렸을 때 데이터를 지키는 기능입니다.

문제는 암호화 자체보다 복구 키를 어디에 뒀는지 모르는 상태에서 시작되죠.

## 6. 복구 화면이 반복해서 나타날 때

정확한 복구 키를 넣어 윈도우에 들어갔는데 다음 부팅에서도 계속 같은 화면이 뜬다면 원인이 된 보안 상태가 아직 정리되지 않았을 수 있습니다.

최근에 바꾼 바이오스 설정이나 펌웨어 업데이트가 있었는지 먼저 떠올려보는 편이 좋습니다.

윈도우에 들어간 뒤에는 비트로커 상태와 장치 암호화 설정을 확인하고 필요한 경우 제조사 안내도 함께 봅니다.

보안을 끄는 것을 첫 해결책으로 삼기보다 왜 매번 복구 확인이 필요한지 원인을 찾는 방향이 안전합니다.

특히 회사 PC에서는 임의로 암호화를 해제하면 정책 위반이 될 수 있습니다.

관리되는 장치라면 개인 판단으로 설정을 바꾸기 전에 담당 부서에 확인하는 것이 먼저입니다.

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
