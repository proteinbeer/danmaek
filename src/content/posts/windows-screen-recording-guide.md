---
title: "윈도우 11 화면 녹화하는 법, 게임 바와 OBS 활용"
description: "윈도우 11에 내장된 게임 바(Game Bar)로 게임 녹화하는 방법과, 바탕화면까지 녹화하고 싶을 때 쓰는 OBS Studio를 정리했습니다. 단축키와 파일 위치도 함께 다룹니다."
date: 2026-08-27
updated: 2026-08-27
category: "가이드"
subcategory: "윈도우 11"
tags:
  - "화면 녹화"
  - "게임 바"
  - "Xbox Game Bar"
  - "OBS"
  - "게임 클립"
image: "/assets/posts/guide-images/hero-bloom.jpg"
imageAlt: "게임 바와 녹화 프로그램을 쓰는 윈도우 11 PC"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>


게임 클립을 남기고 싶거나 강의를 녹화해야 할 때, 별도 프로그램이 반드시 필요한 것은 아닙니다. 윈도우 11에는 기본 화면 녹화 기능이 내장되어 있기 때문이죠. **Windows + G** 키 하나로 게임 바(Game Bar)를 열어 바로 녹화를 시작할 수 있습니다.

다만 게임 바는 게임 창 위주로 동작해서, 바탕화면 전체를 녹화해야 할 때는 한계가 있습니다. 그 경우에는 무료 프로그램인 OBS Studio가 정답이죠. 상황별 사용법을 아래에 정리했습니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/hero-bloom.jpg" alt="게임 바와 녹화 프로그램을 쓰는 윈도우 11 PC" width="1200" height="675" loading="lazy" decoding="async" />


## 1. 게임 바로 기본 녹화하기

가장 간단한 윈도우 기본 기능부터 시작합니다. 게임을 실행한 뒤 진행하시면 됩니다.

1. 게임을 실행하고 **Windows + G**를 눌러 게임 바로를 엽니다.
2. 화면에 나타나는 **캡처(Capture)** 위젯에서 녹화 버튼(●)을 누릅니다.
3. 녹화를 끝내고 싶으면 **Windows + Alt + R**을 눌러 종료합니다.

최초 실행 시에는 게임 바 위젯을 배치하고 닫습니다. 위젯이 열려 있지 않아도 단축키 녹화는 동작합니다.

## 2. 녹화 품질과 저장 위치 설정

녹화 화질과 파일 크기는 설정에서 조절할 수 있습니다.

- **설정 → 게임 → 캡처**로 이동하면 녹화 품질, 최대 녹화 길이, 동영상 프레임 레이트 등을 바꿀 수 있습니다.
- 녹화 파일은 기본적으로 **Videos(동영상) 폴더의 Captures 폴더**에 저장됩니다. 여기에서 저장 위치도 변경할 수 있죠.
- 화질을 높이면 파일 크기가 커지므로, 편집 없이 그대로 공유한다면 기본 품질이면 충분합니다.

저장 위치를 바꾸면 나중에 파일을 찾는 게 훨씬 편해집니다.

## 3. 마이크와 게임 소리 함께 녹음하기

화면만 남기는 게 아니라 목소리도 함께 녹화하고 싶다면 캡처 위젯에서 오디오를 설정합니다.

- 게임 바 위젯 중 **오디오** 위젯을 열어 시스템 소리와 마이크 볼륨을 각각 조절합니다.
- 마이크가 켜져 있지 않으면 내 목소리가 녹음되지 않으므로, 시스템 설정에서 **기본 녹음 장치**가 제대로 선택됐는지 확인합니다.
- 녹화 도중에도 오디오 위젯으로 마이크 음소거를 켜고 끌 수 있습니다.

녹화 후 목소리가 안 들린다면 대부분 녹음 장치 선택 문제입니다. 장치를 확인하고 다시 녹화하시기 바랍니다.

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

## 4. 단축키로 빠르게 녹화하기

매번 게임 바를 열지 않아도 단축키만으로 녹화를 시작·종료할 수 있습니다.

- **Windows + Alt + R**: 녹화 시작/종료
- **Windows + Alt + G**: 지난 30초를 클립으로 저장 (배경 녹화가 켜져 있을 때)
- **Windows + Alt + Print Screen**: 현재 화면 캡처

게임 중 갑자기 멋진 순간이 나왔을 때, 녹화를 켜두지 않아도 **Windows + Alt + G**로 마지막 순간을 잡을 수 있습니다. 배경 녹화는 설정에서 켤 수 있지만 배터리와 성능을 조금 사용하므로 노트북이라면 신경 써야 합니다.

## 5. 녹화 파일 찾기와 활용

녹화한 파일은 저장 폴더에서 바로 확인할 수 있습니다.

- 저장 폴더에는 게임명과 시간이 포함된 파일명으로 클립이 생성됩니다.
- 기본 녹화 형식은 Windows에서 바로 재생되고, 편집 프로그램이나 동영상 공유에 그대로 쓸 수 있습니다.
- 편집이 필요하다면 무료 편집기(예: 자막·컷 편집이 되는 기본 편집 앱)로 다듬을 수 있습니다.

플레이 영상을 블로그나 공유 플랫폼에 올릴 때, 게임 바 클립은 추가 변환 없이 쓰기 편합니다.

## 6. 바탕화면까지 녹화하려면 OBS Studio

바탕화면, 브라우저, 강의 화면까지 통째로 녹화해야 한다면 게임 바 대신 **OBS Studio**를 추천합니다. 무료이며 방송·녹화의 표준 도구입니다.

1. [OBS 공식 사이트](https://obsproject.com/)에서 설치 파일을 받아 설치합니다.
2. **소스 목록의 + 버튼**에서 **디스플레이 캡처**를 추가하면 전체 화면이 녹화 대상이 됩니다.
3. 우측 **설정**에서 해상도·프레임·오디오를 정하고 **녹화 시작**을 누릅니다.

OBS는 장면(씬) 전환, 마이크와 데스크톱 오디오 분리 녹음, 해상도 설정이 자유로워, 게임 바로 부족한 부분을 모두 채워줍니다. 다만 설정 항목이 많아 처음엔 조금 어렵게 느껴지죠. 기본값으로 시작해 차근차근 익히시면 됩니다.

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
