---
title: "워드프레스 이메일이 안 온다면, 문의 알림과 비밀번호 메일까지 막히는 이유"
description: "워드프레스 문의 폼은 정상적으로 전송됐다고 나오는데 관리자에게 메일이 오지 않거나, 비밀번호 재설정 메일까지 도착하지 않는 경우가 있습니다."
date: 2026-08-22
updated: 2026-08-22
category: "가이드"
subcategory: "워드프레스"
tags:
  - "워드프레스"
  - "이메일"
  - "발송"
  - "SMTP"
  - "문의 폼"
image: "/assets/posts/guide-images/wordpress-guide.jpg"
imageAlt: "워드프레스 이메일 발송 설정"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

워드프레스 문의 폼은 정상적으로 전송됐다고 나오는데 관리자에게 메일이 오지 않거나, 비밀번호 재설정 메일까지 도착하지 않는 경우가 있습니다.

사이트 화면이 정상이라고 메일 발송까지 정상인 것은 아닙니다.

워드프레스는 서버의 메일 발송 환경에 의존하는 경우가 많고, 발송됐더라도 수신 서버에서 스팸으로 판단해 차단할 수 있죠. 그래서 문의 폼 플러그인을 계속 바꾸기보다 발송과 수신을 나눠서 확인하는 편이 좋습니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/wordpress-guide.jpg" alt="워드프레스 이메일 발송 설정" width="1200" height="675" loading="lazy" decoding="async" />

## 1. 스팸함과 관리자 이메일 확인

가장 먼저 스팸함과 프로모션함을 확인하시면 됩니다.

워드프레스가 보낸 메일이 실제로 발송됐어도 발신 주소의 신뢰도가 낮으면 받은편지함에 바로 들어오지 않을 수 있죠.

워드프레스 일반 설정에 등록된 관리자 이메일이 현재 사용하는 주소인지도 보셔야 합니다. 오래된 주소나 오타가 남아 있으면 복구 메일과 시스템 알림이 다른 곳으로 갈 수 있습니다.

## 2. 문의 폼만 문제인지 전체 메일 문제인지 구분

문의 폼 알림만 안 오는지, 비밀번호 재설정과 새 사용자 알림도 안 오는지 비교하시면 되죠.

시스템 메일까지 모두 실패한다면 특정 문의 폼보다 서버의 메일 발송 환경을 먼저 의심할 수 있습니다.

반대로 비밀번호 재설정 메일은 잘 오는데 문의 폼만 안 온다면 폼 플러그인의 받는 주소와 알림 설정을 확인하는 편이 맞습니다. 한 종류만 보고 서버 전체 문제로 판단하면 불필요한 작업이 늘어납니다.

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

## 3. 발신 주소를 내 도메인으로 맞춘다

사이트 도메인과 전혀 관계없는 주소를 발신자로 사용하는 설정은 수신 서버에서 신뢰하기 어려울 수 있죠.

가능하면 사이트 도메인과 연결된 발신 주소를 사용하고, 실제 답장 받을 주소는 별도로 지정하는 방식이 안정적입니다.

무료 메일 주소를 발신자로 억지로 넣는 설정은 인증 정책과 충돌할 수 있습니다. 사이트가 어느 주소를 대신해 보내는지 수신 서버가 검증하기 때문에 발신자 설정이 생각보다 중요합니다.

## 4. SMTP를 사용하는 이유

SMTP 방식은 인증된 메일 서버를 통해 워드프레스 메일을 보내도록 구성하는 방법입니다.

호스팅의 기본 발송 기능보다 발신 경로가 명확해지고 발송 기록을 확인하기 쉬워지는 장점이 있죠.

다만 SMTP 플러그인을 설치했다고 자동으로 모든 메일이 정상화되는 것은 아닙니다. 메일 계정 정보, 발신 주소, 도메인 인증이 제대로 설정돼야 하며 테스트 메일로 실제 수신까지 확인해야 합니다.

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

## 5. 도메인 인증도 중요

요즘 주요 메일 서비스는 발신 도메인이 정상적으로 인증돼 있는지 더 엄격하게 확인합니다.

메일 서버를 사용한다면 호스팅이나 메일 제공업체가 안내하는 DNS 인증 항목이 제대로 들어가 있는지 확인하시는 편이 좋죠.

이 부분이 틀리면 워드프레스에서는 발송 성공처럼 보여도 상대 메일 서버에서 거부하거나 스팸으로 분류할 수 있습니다. 발송 버튼이 눌렸다는 사실과 메일이 전달됐다는 사실은 다릅니다.

## 6. 복구 모드 메일도 예외가 아니다

치명적인 오류가 발생했을 때 워드프레스가 보내는 복구 안내도 이메일 환경의 영향을 받습니다.

평소 메일 발송 문제를 방치하면 정작 관리자 접속이 막힌 순간 필요한 복구 링크까지 받지 못할 수 있습니다.

사이트를 처음 만들었을 때 문의 폼만 시험하지 말고 비밀번호 재설정 메일과 시스템 알림도 한 번 확인해두는 편이 좋죠. 문제가 없을 때 검증해두면 장애 상황에서 훨씬 편합니다.

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

## 7. 메일 로그가 있으면 확인이 쉬워진다

발송 기록을 남기는 기능이 있으면 워드프레스가 실제로 어떤 주소로 어떤 메일을 만들었는지 확인하기 쉽습니다.

메일이 생성조차 안 됐는지, 생성됐지만 전달 과정에서 막혔는지를 나누는 데 도움이 되죠.

개인정보가 들어간 문의 내용을 로그에 장기간 저장할 필요는 없습니다. 필요한 범위의 발송 상태만 확인하고 보관 정책도 함께 정하는 편이 안전합니다.

## 8. 메일은 사이트 밖에서 끝나는 기능

저는 워드프레스 메일 문제를 사이트 내부 설정만으로 해결하려 하면 자주 막힌다고 봅니다.

워드프레스가 메일을 만들고, 서버가 보내고, 상대 메일 서비스가 받아들이는 세 단계가 모두 정상이어야 하기 때문입니다.

관리자 주소, 전체 메일 여부, 발신 주소, SMTP, 도메인 인증 순서로 확인하시면 범위를 빠르게 줄일 수 있죠. 문의 폼을 바꾸기 전에 메일이 어디에서 멈추는지 찾는 것이 먼저입니다.

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
