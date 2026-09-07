---
title: "와이파이 속도 올리는 법, 5GHz 채널과 QoS 설정 정리"
description: "인터넷 요금제는 그대로인데 와이파이가 느리다면 공유기 설정이 원인일 수 있습니다. 5GHz로 전환하고 채널과 QoS를 조정하면 체감 속도가 달라집니다."
date: 2026-08-28
updated: 2026-08-28
category: "가이드"
subcategory: "네트워크"
tags:
  - "와이파이"
  - "속도 향상"
  - "5GHz"
  - "채널"
  - "QoS"
  - "공유기"
image: "/assets/posts/guide-images/network-guide-common.jpg"
imageAlt: "와이파이 공유기와 네트워크 환경"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>


인터넷 요금제를 올렸는데도 와이파이가 여전히 느리다면 공유기 설정이 병목일 수 있습니다. 스마트폰과 PC가 모두 Wi-Fi 6를 지원한다고 해도 공유기 설정이 최적화되지 않으면 대역폭을 살리지 못하죠.

특히 2.4GHz 대역은 간섭이 많아 속도가 떨어지는 경우가 많습니다. 5GHz로 전환하고 채널·QoS를 정리하면 별도의 비용 없이 체감 속도가 달라질 수 있습니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/network-guide-common.jpg" alt="와이파이 공유기와 네트워크 환경" width="1200" height="675" loading="lazy" decoding="async" />


## 1. 2.4GHz와 5GHz의 차이

와이파이 대역은 주파수에 따라 속도와 도달 거리가 다릅니다.

- **2.4GHz**: 도달 거리가 길고 벽을 잘 통과하지만, 전자레인지·무선 마우스·이웃 공유기와 겹쳐 간섭이 많습니다.
- **5GHz**: 속도가 빠르고 간섭이 적지만, 벽이나 거리에 약합니다.

공유기에서 멀리 떨어진 방이라면 2.4GHz가 유리하고, 같은 공간에서 기기를 쓴다면 5GHz가 압도적으로 빠릅니다. 공유기가 **듀얼 밴드를 지원한다면 기기 위치에 따라 대역을 나눠 쓰는 것이 좋습니다.**

## 2. 공유기 관리자 페이지 접속

공유기 설정은 관리자 페이지에서 변경합니다.

1. PC를 공유기에 연결한 뒤 웹 브라우저를 엽니다.
2. 주소창에 **192.168.0.1 또는 192.168.1.1**을 입력해 관리자 화면에 접속합니다. (공유기 하단 라벨에 기본 주소가 적혀 있습니다)
3. 로그인 후 **무선 설정(Wi-Fi 설정)** 메뉴로 이동합니다.

관리자 비밀번호를 모른다면 공유기 초기화 버튼을 이용해 재시작하면 기본 비밀번호로 되돌아가지만, 설정 전체가 초기화되므로 주의해서 사용하시기 바랍니다.

## 3. 5GHz 전환과 채널 변경

무선 설정에서 5GHz 대역을 켜고 채널을 지정하면 간섭이 크게 줄어듭니다.

- 스마트폰이나 PC의 와이파이 목록에서 5GHz용 SSID(이름)를 확인하고 연결합니다.
- **2.4GHz 채널**은 서로 겹치지 않는 **1, 6, 11** 중 하나로 설정합니다. 주변 공유기가 사용하는 채널을 확인하려면 와이파이 분석 프로그램을 쓰면 됩니다.
- **5GHz 채널**은 **36, 40, 44, 48** 같은 낮은 번호를 권장합니다. 주변 네트워크와 겹칠 경우 다른 채널로 바꿔보시면 됩니다.
- 채널 대역폭은 기본값(보통 20/40MHz 또는 80MHz)을 유지하되, 안정성을 원하면 20MHz로 고정하는 방법도 있습니다.

채널 변경은 미리 알람이 뜨는 와이파이 연결이 잠깐 끊겼다가 다시 연결되므로, 작업 중인 기기가 있으면 잠깐 기다렸다가 진행하시기 바랍니다.

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

## 4. QoS 설정으로 대역폭 배분

여러 기기가 동시에 인터넷을 쓰면 게임 핑이 치고 동영상이 버벅이기 쉽습니다. QoS(서비스 품질) 설정으로 우선순위를 나눠주면 이 문제가 완화됩니다.

- 공유기 관리자에서 **QoS(우선순위, 대역폭 제어)** 메뉴를 엽니다.
- 게임·온라인 회의 등 중요한 용도를 우선순위로 지정하거나, 특정 기기에 대역폭을 배정합니다.
- 대용량 다운로드 기기의 속도 제한을 걸어 나머지 기기의 체감 속도를 지켜주는 방식도 있습니다.

공유기마다 메뉴 이름(우선순위, QoS, 대역폭 관리)이 다르니 보통 상단의 전문 설정 탭에서 찾으시면 됩니다. 기능이 없는 저가 공유기라면 최신 공유기 교체를 고려해볼 수 있습니다.

## 5. 위치, 펌웨어, 기기 상태 점검

설정 외에도 다음 항목들은 와이파이 속도에 큰 영향을 줍니다.

- 공유기를 **집 중앙, 바닥보다 높은 위치**에 두고 금속·전자기기(전자레인지, 무선 스피커)와 멀리 둡니다.
- 공유기 **펌웨어를 최신 버전으로 업데이트**합니다. 메뉴가 개선되고 성능 버그가 수정되는 경우가 많습니다.
- 고정으로 쓰는 PC·콘솔이라면 와이파이 대신 **유선(이더넷) 연결**이 정답입니다. 핑과 속도 모두 가장 안정적이죠.
- Wi-Fi 4(802.11n) 시절의 오래된 공유기라면 Wi-Fi 6(802.11ax) 지원 공유기로 교체하는 것이 속도 향상에 결정적입니다.

기가 인터넷을 쓰는데 2.4GHz만 연결돼 있다면, 그것 자체가 속도 제한의 원인인 경우가 많습니다. 연결 대역을 먼저 확인해보시기 바랍니다.

## 6. 속도 측정과 확인

설정을 마쳤다면 속도가 실제로 올랐는지 확인합니다. 총 다운로드 속도는 아무리 좋아도 인터넷 요금제와 공유기 성능에 묶여 있습니다.

- [Fast.com](https://fast.com)를 열면 다운로드, 업로드, 왕복 시간(핑)을 바로 확인할 수 있습니다.
- 스팀이나 콘솔의 대용량 다운로드 중 나타나는 실제 속도도 유의미한 지표가 됩니다.
- 측정할 때는 **다른 기기의 대역폭 사용을 멈추고** 공유기 가까이에서 측정해야 정확합니다.

요금제보다 크게 낮은 속도가 계속 나온다면, 공유기와 모뎀을 재부팅하거나 통신사 측 상황을 문의해보시기 바랍니다.

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
