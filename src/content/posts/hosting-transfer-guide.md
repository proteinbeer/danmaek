---
title: "호스팅 이전(마이그레이션), 1시간 안에 옮기는 방법"
description: "파일과 데이터베이스 백업부터 DNS 변경까지, 사이트가 살아있는 상태에서 호스팅을 옮기는 순서를 정리했습니다. 이전 후 확인해야 할 항목과 되돌리는 방법까지 다룹니다."
date: 2026-08-23
updated: 2026-08-23
category: "가이드"
subcategory: "호스팅"
tags:
  - "호스팅 이전"
  - "마이그레이션"
  - "DNS"
  - "워드프레스 이전"
  - "백업"
image: "/assets/posts/guide-images/hosting-guide.jpg"
imageAlt: "서버 간 데이터백업과 호스팅 이전 개념"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

호스팅을 옮겨야 하는 순간이 언젠가는 옵니다. 요금이 오르거나, 속도가 답답해지거나, 지원이 좁아지는 상황이 그렇죠. 그런데 이전을 막연하게 어렵게 느껴서 계속 미루는 분들이 정말 많습니다.

실상은 파일과 데이터베이스를 옮기고 도메인 주소만 바꾸면 되는데, 순서만 지키면 사이트가 죽지 않은 채 1시간 안에 끝납니다. 이 글에서 그 순서를 차례대로 정리했으니 천천히 따라오시면 됩니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/hosting-guide.jpg" alt="서버 간 데이터백업과 호스팅 이전 개념" width="1200" height="675" loading="lazy" decoding="async" />

## 1. 이전 전에 미리 준비할 것

이전은 "새 집에 짐을 넣고 주소를 바꾸는" 작업과 같습니다. 새 호스팅이 먼저 준비되어야 합니다.

- 새 호스팅에 **가입하고 결제를 먼저 완료**해 둡니다. 계정 생성과 승인에 하루 정도 걸리는 경우가 있으니 미리 해두세요.
- 이전 기간 계획을 세웁니다. 단 몇 분의 서비스 중단(DNS 전파)을 감수할 수 있는 시간대를 정합니다.
- 기존 호스팅의 **FTP(파일), 데이터베이스 관리 페이지, 도메인 네임서버 설정 화면** 접속 정보를 정리해둡니다.
- 워드프레스라면 관리자 계정의 이메일도 새 호스팅에서 쓸 이메일로 받을 수 있게 해둡니다.

이전 후 문제가 생겼을 때 기존 호스팅으로 되돌리려면 기존 계정을 **이전이 끝날 때까지 유지**해 두는 것이 안전합니다.

## 2. 파일과 데이터베이스 백업

이전의 핵심은 새 서버에 옮길 데이터를 정확히 뽑아내는 것입니다.

- **파일**: FTP 프로그램으로 웹 루트 폴더(예: `public_html`, `www`) 전체를 내려받습니다. 업로드된 이미지와 플러그인, 테마가 모두 포함되어야 합니다.
- **데이터베이스**: 호스팅의 DB 관리 페이지(phpMyAdmin 등)에서 "내보내기(Export)"로 SQL 파일 하나를 받습니다. 테이블 전체를 선택합니다.
- 다운로드 중 끊기면 다시 받아야 하니, 용량이 크다면 압축으로 받는 것이 좋습니다.
- 백업 파일 이름에 날짜를 넣어 나중에 어느 시점의 데이터인지 알 수 있게 하세요.

데이터베이스 비밀번호는 백업 파일에 들어가지 않지만, **설정 파일 안의 접속 정보**는 이전 후 반드시 새 호스팅 값으로 바꾸어야 합니다.

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

## 3. 새 호스팅에 업로드하고 DB 연결 바꾸기

이제 옮긴 데이터를 새 서버에 풀어놓고 연결 정보만 새 것으로 교체합니다.

- 새 호스팅의 웹 루트에 백업한 파일을 그대로 업로드합니다.
- DB 관리 페이지에서 **새 데이터베이스를 만들고 권한을 부여**한 뒤, 백업한 SQL 파일을 "가져오기(Import)"로 복원합니다.
- 워드프레스라면 `wp-config.php`에서 DB 이름, 사용자, 비밀번호, 호스트를 새 호스팅 값으로 수정합니다.
- 일부 호스팅은 DB 호스트가 `localhost`가 아닐 수 있으니, 새 호스팅 안내 화면의 값을 그대로 사용하세요.
- FTP 업로드 권한이 잘못되어 파일이 쌓이지 않는 경우도 있으니 업로드 완료 후 **파일 개수가 맞는지** 확인합니다.

## 4. 도메인 네임서버(DNS) 변경과 전파 시간

데이터가 새 서버에 들어갔으면 도메인이 그 서버를 보도록 주소를 바꿉니다.

- 도메인을 구매한 곳의 **네임서버 설정**에서 새 호스팅이 안내하는 네임서버 주소로 변경합니다.
- DNS 전파에는 최대 24~48시간이 걸리는데, 대부분 몇 시간 안에 반영됩니다.
- 이 기간 동안 사람마다 접속 경로가 달라질 수 있으므로 **공지글 하나를 띄워두는 것**도 방법입니다.
- 새 서버로 바뀌기 전까지 기존 호스팅은 유지해 두어야 사이트가 빈 화면이 되지 않습니다.

네임서버 변경 후 주소가 남아있는지 확인하려면 커맨드에서 `nslookup` 명령으로 검사해볼 수 있습니다.

## 5. 이전 후 확인할 것

주소가 새 서버를 가리키기 시작하면 아래 항목을 차례로 점검합니다.

- 사이트 모든 페이지가 열리는지, 이미지와 **HTTPS 자물쇠**가 정상인지
- 글쓰기, 댓글, 검색 같은 **DB가 필요한 기능**이 동작하는지
- SSL 인증서가 새 서버에 발급되어 있는지 (무료 인증서는 갱신도 자동인지 확인)
- 이메일 전송이 호스팅에서 처리된다면 메일 계정과 DNS(SPF 등) 설정을 마치는지

짧은 테스트로는 잘 보이는 사이트라도 설정 파일 하나가 어긋나면 일부 기능만 죽는 경우가 많습니다. 글쓰기와 로그인, 관리자 화면까지 전부 눌러보시기 바랍니다.

## 6. 문제가 생겼을 때 되돌리는 법

이전 후 필요하다면 기존 호스팅으로 즉시 복귀할 수 있어야 합니다.

- 네임서버를 **기존 호스팅 값으로 되돌리면** 몇 시간 내 접속이 다시 기존 서버로 옵니다.
- 이 사이 기존 데이터는 그대로 남아 있으므로 사이트가 비어 보이지 않습니다.
- 완전히 문제없이 전환된 뒤에는 기존 호스팅 계정을 **한 달 정도 유지한 다음 해지**하는 것이 안전합니다.

이전 전 백업 파일은 복귀가 완전히 끝난 뒤에도 한 번 더 보관해두세요. 호스팅을 옮기면 같은 실수를 반복하지 않도록, 다음 이전을 위해 백업 절차를 메모로 남겨두면 더 좋습니다.

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

- [워드프레스 공식 백업 문서](https://wordpress.org/documentation/article/backing-up-your-wordpress-site/)
- [ICANN 공식 사이트](https://www.icann.org/)
- [카페24 공식 사이트](https://www.cafe24.com/)