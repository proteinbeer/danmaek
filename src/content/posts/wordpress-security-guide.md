---
title: "워드프레스 보안, 해킹 막는 필수 설정 5가지"
description: "해커가 노리는 순서대로 막을 수 있는 워드프레스 보안 설정을 정리했습니다. 관리자 계정 보호, 로그인 제한, 자동 업데이트, 파일 권한, 백업까지 하나씩 적용해보세요."
date: 2026-08-23
updated: 2026-08-23
category: "가이드"
subcategory: "워드프레스"
tags:
  - "워드프레스"
  - "보안"
  - "로그인 보호"
  - "백업"
  - "관리자"
image: "/assets/posts/guide-images/wordpress-guide.jpg"
imageAlt: "워드프레스 관리자 로그인과 보안 설정 개념"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

워드프레스가 해킹당하는 이유는 대부분 복잡한 공격이 아니라 **기본 설정을 하나씩 안 했기 때문**입니다. 관리자 아이디가 그대로 노출되거나, 로그인 시도를 무제한으로 받거나, 업데이트를 미루는 경우가 그렇죠.

이 글에서 해커가 실제로 노리는 5가지를 설정 순서대로 정리했습니다. 처음 워드프레스를 운영하신다면 이 순서 그대로 적용해보세요.

<img class="post-landscape-image" src="/assets/posts/guide-images/wordpress-guide.jpg" alt="워드프레스 관리자 로그인과 보안 설정 개념" width="1200" height="675" loading="lazy" decoding="async" />

## 1. 관리자 계정부터 강화하기

보안의 첫 시작은 계정입니다. 시도 횟수가 많아지면 곧 뚫리는 곳도 계정이죠.

- 아이디가 `admin`이나 본인 이름이라면 **새 관리자 계정을 만들어 옛 계정을 지웁니다.** 이미 공격자가 대상으로 정한 흔한 아이디이기 때문입니다.
- 비밀번호는 12자 이상으로 하고, 사이트마다 다른 비밀번호를 사용합니다.
- 비밀번호 관리 프로그램을 쓰면 기억 부담 없이 강한 비밀번호를 유지할 수 있습니다.
- 2단계 인증(2FA) 플러그인을 설치하면 비밀번호가 유출되어도 로그인이 보호됩니다.

## 2. 로그인 실패 제한과 사용자명 노출 막기

해커는 로그인 페이지를 대상으로 비밀번호를 무작위로 시도합니다. 이 시도를 막아야 합니다.

- 로그인 실패 횟수를 제한하는 플러그인을 켜서 5회 정도 실패 시 일정 시간 로그인을 막습니다.
- 무한히 시도할 수 있는 시점을 없애면 자동 공격이 사실상 의미를 잃습니다.
- 사용자명이 노출되는 페이지는 보이는 대로 제거하거나, 공개 사용자 정보를 끄는 설정을 적용합니다.
- 관리자 페이지 주소를 기본 `wp-login.php`에서 바꾸는 것도 시도를 줄이는 보조 수단이 됩니다.

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

## 3. 자동 업데이트와 코어·플러그인 관리

보안 패치는 "언제 해줬다"보다 **얼마나 오래 안 했나**가 더 중요합니다. 알려진 취약점은 공격 스크립트가 이미 돌아다니는 경우가 많으니까요.

- 워드프레스 코어의 **자동 업데이트를 켜두고**, 플러그인과 테마도 정기적으로 업데이트합니다.
- 쓰지 않는 플러그인·테마는 발견되자마자 **삭제**합니다. 설치된 것 자체가 공격면이 됩니다.
- 업데이트 전에 백업을 하나 만들어 두면 문제가 생겨도 되돌릴 수 있습니다.
- 잘 모르는 개발자의 플러그인은 리뷰와 업데이트 이력을 먼저 확인하고 설치합니다.

## 4. 파일 권한과 wp-config.php 보호

서버에서 파일 권한이 과하게 열려 있으면 해킹해서 파일을 뒤집어쓸 수 있습니다.

- 파일은 보통 `644`, 폴더는 `755`로 유지합니다. 전부 쓰기 권한(`777`)처럼 열면 안 됩니다.
- `wp-config.php`는 서버 설정에 따라 웹에서 접근을 차단하도록 보호합니다.
- FTP 계정을 사용한다면 **FTP용 전용 계정**을 만들어 사이트 파일만 접근할 수 있게 제한합니다.
- 데이터베이스 비밀번호는 무작위로 긴 값을 사용하고, 관리자 패널에서 바꿀 수 있는 곳이면 즉시 변경합니다.

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

## 5. 정기 백업과 복구 절차

아무리 막아도 뚫리는 상황은 완전히 없앨 수 없습니다. 그래서 **복구 계획**이 마지막 보안입니다.

- 데이터베이스와 파일을 **매일 또는 주 1회** 자동 백업하는 플러그인을 설정합니다.
- 백업본을 같은 서버가 아닌 **클라우드 저장소(외부 저장소)**에 보관합니다.
- 복구 연습을 한 번 해두면 실제 사고 때 당황하지 않습니다.
- 사고 징후(이상한 관리자 계정, 조회수 급증, 외부 링크 심기)를 알게 해주는 플러그인으로 초기 이상도 감지합니다.

보안은 완벽한 상태가 아니라, **기본 설정 → 점검 → 백업**이 반복되는 과정입니다. 위 5가지를 순서대로 적용하면 대부분의 무작위 공격에서 자유로워집니다.

## 6. 보안 플러그인 선택 기준

보안 플러그인도 종류가 많아 선택이 어려울 수 있습니다. 아래 기준으로 고르시면 됩니다.

- 업데이트가 자주 되고 유지보수가 확실한지 (사용자 수와 마지막 업데이트 확인)
- 방화벽, 로그인 보호, 스캔 기능이 한 번에 지원되는지
- 설정이 너무 많아 본인 사이트 속도에 부담을 주지 않는지
- 무료 버전만으로 필요한 기능이 갖춰지는지

여러 보안 플러그인을 동시에 쓰면 충돌이 나는 경우가 많으므로, 한 개만 선택해 제대로 설정하는 것이 좋습니다. 로그인 보호 하나면 충분한 소규모 사이트도 많죠.

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
