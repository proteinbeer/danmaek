---
title: "WPA2와 WPA3 중 무엇을 써야 할까"
description: "새 공유기에는 WPA2, WPA3, WPA2/WPA3 혼합 모드가 함께 있는 경우가 많습니다."
date: 2026-08-05
updated: 2026-09-19
category: "IT"
subcategory: "네트워크"
tags:
  - "네트워크"
  - "WPA2"
  - "WPA3"
  - "와이파이 보안"
  - "호환성"
image: "/assets/posts/guide-images/network-guide-common.jpg"
imageAlt: "노트북, 공유기, 랜선이 놓여 있는 이미지"
imageWidth: 1200
imageHeight: 675
hideDescription: true
---
새 공유기에는 WPA2, WPA3, WPA2/WPA3 혼합 모드가 함께 있는 경우가
많습니다. 보안 수준만 보면 WPA3가 최신이지만 오래된 프린터나 IoT 기기가
있다면 호환성도 함께 봐야 합니다.

## WPA3에서 달라지는 점

WPA3-Personal은 WPA2-Personal에서 흔히 쓰는 PSK 방식 대신 SAE 기반
인증을 사용해 비밀번호 기반 무선 네트워크의 보호를 강화합니다. 하지만
공유기가 WPA3를 지원한다고 모든 클라이언트가 지원하는 것은 아닙니다.

WPA3 전용으로 바꾼 직후 최신 휴대폰은 잘 연결되는데 오래된 프린터만
실패한다면 인터넷 회선보다 그 기기의 WPA3 지원 여부를 먼저 확인합니다.

## 혼합 모드는 구형 기기를 위한 현실적인 선택입니다

WPA2/WPA3 Transition 또는 Mixed Mode는 WPA3 지원 기기와 WPA2 전용 기기를
같은 네트워크에 연결하기 위한 방식입니다. 다만 모든 연결이 WPA3만
사용하는 환경과 동일하다는 뜻은 아닙니다.

공유기가 여러 SSID나 IoT 네트워크를 지원한다면 최신 PC와 휴대폰은 WPA3
네트워크에 두고 WPA2가 필요한 IoT만 별도 네트워크로 분리하는 방법도
있습니다. 로컬 제어가 필요한 스마트 기기는 격리 설정 때문에 앱 연결이
실패할 수 있으므로 확인이 필요합니다.

아주 오래된 장비 하나 때문에 공유기 전체를 WEP나 오래된 WPA 방식으로
낮추는 것은 피하는 편이 좋습니다.

모든 기기가 WPA3를 지원하면 WPA3-Personal을 우선 고려하고, WPA2 전용
기기가 남아 있다면 혼합 모드나 별도 IoT 네트워크를 검토하면 됩니다. 가장
높은 숫자를 고르는 것보다 실제 연결 기기의 지원 범위를 보는 것이
중요합니다.
