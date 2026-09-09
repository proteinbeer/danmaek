---
title: "발하임 멀티플레이 가이드, 친구와 함께하는 서버 설정 방법 총정리"
description: "발하임 멀티플레이의 시작부터 서버 운영까지 정리했습니다. 게임 내에서 친구를 초대해 함께 플레이하는 방법과 세계 파일 공유, 데디케이티드 서버를 직접 구축하는 방법과 하드웨어 요구 사항, 포트포워딩과 크로스플레이 설정, 관리자 명령과 밴·화이트리스트 파일 관리, 그리고 세계 데이터 백업과 복원까지 멀티플레이 운영에 필요한 내용을 차례로 다룹니다."
date: 2026-09-09
updated: 2026-09-09
category: "가이드"
subcategory: "발하임"
tags:
  - "발하임"
  - "멀티플레이"
  - "데디케이티드 서버"
  - "포트포워딩"
  - "크로스플레이"
  - "소환"
image: "/assets/posts/guide-images/valheim-deep-north-2026-01.jpg"
imageAlt: "발하임 멀티플레이 서버 가이드 대표 이미지"
imageWidth: 1280
imageHeight: 720
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

발하임은 친구들과 함께 세계를 공략하는 멀티플레이가 핵심 경험을 만드는 게임입니다. 혼자 탐험할 때와 달리 역할을 나누면 전투와 건설 속도가 크게 빨라지지만, 서버를 어떻게 운영하느냐에 따라 연결 상태가 갈립니다. 이 글은 게임 내 초대부터 직접 호스팅, 데디케이티드 서버까지 단계별로 정리했습니다.

멀티플레이의 가장 간단한 방법은 게임 내에서 세계를 만들 때 서버를 활성화하고 친구를 초대하는 것입니다. 시작 화면에서 새 세계를 만들거나 기존 세계를 선택할 때 '서버 시작' 옵션을 켜고 친구에게 서버명과 비밀번호를 공유하면 바로 플레이할 수 있습니다. 다만 호스트 컴퓨터가 켜져 있고 게임이 실행 중일 때만 접속이 가능하다는 제약이 있습니다.

<img class="post-landscape-image post-landscape-image--high" src="/assets/posts/guide-images/valheim-deep-north-2026-01.jpg" alt="발하임 멀티플레이 서버 가이드 대표 이미지" width="1280" height="720" loading="lazy" decoding="async" />

## 1. 게임 내 친구 초대와 세계 공유

게임 내 초대 방식은 가장 진입 장벽이 낮습니다. 호스트가 세계를 불러온 뒤 상대편에게 서버 접속 정보를 전달하면 게임에 합류할 수 있습니다. Steam 친구라면 친구 목록에서 바로 초대를 보낼 수 있고, 비밀번호를 설정하면 랜덤 유저의 침입을 막을 수 있습니다.

세계 데이터는 호스트의 컴퓨터에 저장됩니다. 호스트가 게임을 종료하면 서버도 함께 꺼지므로, 상대방이 원할 때 혼자 접속해야 하는 경우에는 세계 파일을 함께 보관하거나 아래에서 설명할 데디케이티드 서버를 사용합니다. 세계 파일은 .fwl과 .db 두 개로 구성되어 있어, 함께 백업해 두면 손상 없이 옮길 수 있습니다.

## 2. 데디케이티드 서버 구축을 위한 준비

데디케이티드 서버는 게임 내 호스트와 달리 별도 프로그램으로 돌며, 컴퓨터가 켜져 있는 한 24시간 세계를 유지합니다. 데디케이티드 서버는 게임 본편과 함께 제공되는 도구를 Steam 라이브러리에서 설치해 사용합니다. 세계, 포트, 비밀번호를 명령줄 인자로 지정해 실행하는 것이 기본입니다.

데디케이티드 서버를 돌릴 컴퓨터의 최소 사양은 4코어 CPU와 2GB 이상의 RAM입니다. 세계가 커지고 플레이어가 많아질수록 메모리 사용량이 커지므로, 6코어 이상 CPU와 4GB 이상의 RAM을 권장합니다. 서버 파일은 별도의 폴더에 설치하고 방화벽 규칙과 포트포워딩을 미리 설정해 두어야 외부 접속이 가능합니다.

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

## 3. 서버 실행 명령과 포트포워딩

데디케이티드 서버는 SteamCMD나 Steam 라이브러리에서 발하임 데디케이티드 서버를 설치한 뒤 실행 파일에 설정을 넣어 시작합니다. 기본 포트는 2456이며 UDP로 목록 질의에는 2457을 사용합니다. 공유기에서 해당 포트를 전달하고, 서버 컴퓨터의 방화벽에 UDP 2456-2457 규칙을 추가하면 인터넷을 통한 접속이 열립니다.

서버 이름과 세계 이름, 비밀번호는 명령줄에서 지정할 수 있고, 시작 배치 파일로 저장해 두면 재실행할 때마다 같은 설정을 유지합니다. 서버가 공용으로 표시되도록 -public 1 옵션을 주면 커뮤니티 서버 목록에 노출되어 친구가 브라우저에서도 검색할 수 있습니다.

## 4. 크로스플레이와 플랫폼 연동

발하임은 크로스플레이를 지원해 Steam과 Xbox, Microsoft Store 버전의 플레이어가 한 서버에서 만날 수 있습니다. 데디케이티드 서버에서 크로스플레이를 켜면 Azure 릴레이를 통해 서로 다른 플랫폼의 유저가 연결됩니다. 서버 시작 시 크로스플레이 옵션을 추가해 활성화합니다.

크로스플레이를 켜면 포트포워딩 없이 릴레이를 경유해 접속할 수 있어 설정이 간단해지는 장점이 있습니다. 다만 중계 서버를 경유하는 만큼 지연 시간이 늘어날 수 있습니다. 사내 LAN이나 같은 네트워크에서만 즐긴다면 크로스플레이 없이 직접 연결 방식이 더 빠릅니다.

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

## 5. 관리자 권한과 밴·화이트리스트

데디케이티드 서버 운영에 필요한 관리 기능은 텍스트 파일로 제어합니다. 서버 폴더 안의 adminlist.txt에 플레이어의 스팀 ID를 한 줄씩 넣으면 해당 플레이어에게 관리자 권한이 부여됩니다. bannedlist.txt는 특정 플레이어의 접속을 차단하고, permittedlist.txt는 화이트리스트 모드일 때 접속 가능한 이용자를 지정합니다.

플레이어의 스팀 ID는 게임 내에서 F2를 눌러 확인할 수 있습니다. 관리자 권한을 주면 서버 콘솔에서 킥과 밴 같은 관리 명령을 사용할 수 있지만, 치트성 명령은 별도로 허용되지 않습니다. 비밀번호와 화이트리스트를 함께 설정하면 열린 서버에서도 랜덤 유저를 배제할 수 있습니다.

## 6. 세계 백업과 멀티 일상 관리

발하임 서버는 세계가 저장될 때마다 자동으로 .old 백업 파일을 만듭니다. 하지만 오랜 기간 서버를 운영한다면 직접 .fwl과 .db 파일을 정기적으로 복사해 두는 것이 안전합니다. 백업 파일을 서버 폴더에 다시 넣으면 손상된 세계를 이전 상태로 복구할 수 있습니다.

게임 업데이트가 나오면 데디케이티드 서버도 같은 버전으로 업데이트해야 접속이 유지됩니다. Steam 라이브러리의 데디케이티드 서버 도구를 최신 버전으로 갱신하는 것만으로 충분하며, 업데이트 후에는 서버를 재시작해 새 버전을 적용합니다. 정기적인 백업과 업데이트 습관만 유지하면 친구들과 오랜 시간 안전하게 월드를 공략할 수 있습니다.

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
