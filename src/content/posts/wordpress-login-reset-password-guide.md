---
title: "워드프레스 로그인이 안 될 때, 관리자 비밀번호 되찾는 4가지 방법"
description: "워드프레스 관리자 비밀번호를 잊어버렸을 때 이메일로 재설정하는 방법부터 데이터베이스(phpMyAdmin)에서 직접 바꾸는 방법까지 정리했습니다. 로그인 페이지가 열리지 않을 때 점검할 것도 담았습니다."
date: 2026-09-06
updated: 2026-09-06
category: "가이드"
subcategory: "워드프레스"
tags:
  - "워드프레스"
  - "로그인 안 됨"
  - "비밀번호 재설정"
  - "관리자"
  - "phpMyAdmin"
image: "/assets/posts/guide-images/wordpress-guide.jpg"
imageAlt: "워드프레스 관리자 로그인과 비밀번호 재설정"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

워드프레스 관리자 비밀번호를 잊어버리면 글을 수정하고 플러그인을 관리하는 모든 작업이 멈춥니다. 다행히 워드프레스는 비밀번호를 되찾을 수 있는 경로가 여러 개 있습니다.

안 되는 방법 하나에 매달리지 말고, 이메일 재설정부터 데이터베이스 직접 수정까지 **순서대로** 시도하면 대부분 해결할 수 있습니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/wordpress-guide.jpg" alt="워드프레스 관리자 로그인과 비밀번호 재설정" width="1200" height="675" loading="lazy" decoding="async" />

## 1. 이메일로 비밀번호 재설정

가장 먼저 시도할 방법은 워드프레스 기본 제공 기능입니다.

- 로그인 화면에서 **"비밀번호 분실"** 링크를 클릭합니다.
- 관리자 계정의 아이디 또는 이메일을 입력하고 요청합니다.
- **스팸함, 알림 탭**까지 확인합니다. 메일이 늦게 오거나 분류되는 경우가 많습니다.

재설정 메일이 오지 않는다면 이메일 발송 기능(메일 서버)에 문제가 있을 수 있습니다. 이 경우 아래 데이터베이스 방법으로 진행하시기 바랍니다.

## 2. 로그인 페이지 자체가 안 열릴 때

비밀번호가 아니라 **로그인 화면이 뜨지 않는 것**이라면 별도의 문제 점검이 필요합니다.

- `주소/wp-admin`으로 직접 접속해봅니다. 관리자 접속 경로가 바뀐 경우가 아닌지 확인하세요.
- 최근 설치한 플러그인이 문제라면 **플러그인 폴더 이름을 일시적으로 변경**(예: `plugins` → `plugins_backup`)해 비활성화할 수 있습니다.
- 흰 화면(빈 화면)이 나오면 호스팅에서 **WP_DEBUG** 설정을 켜서 오류 메시지를 확인합니다.

로그인 화면이 열리는데 비밀번호만 틀리다고 나온다면 1번 또는 3번 방법으로 넘어가면 됩니다.

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

## 3. phpMyAdmin에서 비밀번호 직접 수정

이메일이 오지 않을 때 가장 확실한 방법은 호스팅의 데이터베이스 화면(phpMyAdmin)에서 비밀번호를 바꾸는 것입니다.

- 호스팅 관리 페이지에 로그인해 **데이터베이스 관리(phpMyAdmin)**에 들어갑니다.
- `wp_users` 테이블을 열고 관리자로 쓰는 사용자 행의 `user_pass` 열을 선택합니다.
- 함수를 **MD5**로 지정하고 새 비밀번호를 입력한 뒤 저장합니다. 저장 시 `"Hello1234"`처럼 새 비밀번호를 MD5로 변환해 넣게 됩니다.
- 저장 후 로그인 화면에서 **새 비밀번호**로 로그인합니다.

주의할 점은 `new_password` 형식이 아니라 **실제 새 비밀번호 문자열**을 넣고 함수만 MD5로 선택해야 한다는 것입니다. 그대로 저장하면 문자 그대로 저장됩니다.

## 4. emergency.php 또는 WP-CLI로 재설정

파일을 조작할 수 있다면 테마 폴더에 임시 코드를 넣어 비밀번호를 바꾸는 방법도 있습니다.

- 테마 폴더(`wp-content/themes/현재 테마`)의 `functions.php` 맨 끝에 비밀번호 변경 코드를 추가하고 관리자 페이지를 한 번 열면 비밀번호가 변경됩니다.
- 작업 후에는 반드시 **추가한 코드를 삭제**해야 사이트가 안전합니다.
- SSH 접속을 지원하는 호스팅이라면 `wp user update <id> --user_pass=새비밀번호` 명령으로 바로 바꿀 수 있습니다.

코드 삽입 방식은 실수가 나면 사이트가 깨질 수 있어 주의가 필요합니다. 확실하지 않다면 호스팅 고객센터가 비밀번호 초기화를 도와주는지 먼저 문의하는 것이 안전합니다.

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

- [WordPress 공식 문서 - 비밀번호 분실](https://wordpress.org/documentation/article/lost-password/)
- [워드프레스 코덱스 - 로그인 문제 해결](https://wordpress.org/documentation/category/troubleshooting/)