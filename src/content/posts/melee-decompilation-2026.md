---
title: "25년 된 스매시브라더스 밀리, 팬들이 6년 걸려 코드로 되살린 이유"
description: "2001년 게임큐브 게임 대난투 스매시브라더스 밀리의 팬 디컴파일 프로젝트가 6년 만에 100%에 도달했습니다. 방식을 알면 흥미로운 게임 보존의 사례를 정리했습니다."
date: 2026-09-10
updated: 2026-09-10
category: "뉴스"
subcategory: "게임"
tags:
  - "스매시브라더스"
  - "대난투 스매시브라더스"
  - "디컴파일"
  - "게임 보존"
  - "닌텐도"
image: "/assets/posts/news-images/melee-decompilation-2026-01.jpg"
imageAlt: "대난투 스매시브라더스 밀리 대표 이미지"
imageWidth: 1280
imageHeight: 720
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

2001년 게임큐브로 나온 대난투 스매시브라더스 밀리가 25년 만에 새로운 방식으로 되살아났습니다. 팬 개발자들이 6년 넘게 진행한 디컴파일 작업이 100%에 도달한 겁니다.

여기서 디컴파일은 닌텐도의 원본 소스코드가 유출됐다는 의미가 아닙니다. 완성된 게임의 기계어를 분석해 사람이 읽고 다시 컴파일할 수 있는 C 코드로 재구성하는 작업이죠.

<img class="post-landscape-image post-landscape-image--high" src="/assets/posts/news-images/melee-decompilation-2026-01.jpg" alt="대난투 스매시브라더스 밀리 대표 이미지" width="1280" height="720" loading="lazy" decoding="async" />

## 1. 100%라는 말이 특별한 이유

프로젝트가 목표로 한 것은 비슷하게 돌아가는 코드를 만드는 정도가 아니었습니다. 새로 작성한 C 코드를 컴파일했을 때 원본 게임큐브 실행 파일과 바이트 단위로 일치하도록 맞추는 작업이었습니다.

이 수준에 도달하면 게임이 내부에서 어떤 방식으로 움직이는지 훨씬 정확하게 이해할 수 있습니다. 캐릭터 움직임, 물리 계산, 메뉴, 전투 로직을 단순 추측이 아니라 코드 구조로 들여다볼 수 있게 되죠.

25년 된 게임을 한 줄씩 역으로 맞춰간 셈이라, 결과보다 과정 자체가 대단한 프로젝트입니다.

## 2. 게임 파일을 공짜로 배포하는 프로젝트는 아니다

이런 소식을 보면 곧바로 PC판을 무료로 받을 수 있느냐는 생각이 들 수 있습니다. 하지만 디컴파일 코드는 게임의 그래픽, 음악, 음성 같은 저작권 자산을 대신하지 않습니다.

실제로 실행하려면 합법적으로 보유한 원본 게임 디스크에서 필요한 자산을 추출하는 과정이 필요합니다. 프로젝트가 코드를 공개했다고 원본 게임 전체가 자유 소프트웨어가 된 것은 아니죠.

이 구분은 게임 보존 프로젝트에서 매우 중요합니다. 기술적으로 복원하는 일과 저작권이 사라지는 일은 전혀 다른 문제입니다.

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

## 3. 왜 멀쩡한 옛날 게임을 굳이 코드로 다시 만들까

게임큐브 실물 기기와 디스크는 시간이 갈수록 줄어듭니다. 에뮬레이터가 있어도 미래의 운영체제와 하드웨어에서 영원히 같은 방식으로 돌아간다는 보장은 없습니다.
코드 구조가 재구성되면 현대 PC나 다른 기기로 네이티브 포트를 만드는 길이 훨씬 넓어집니다. 해상도와 화면비 개선, 입력 지연 연구, 새로운 모드 제작 같은 작업도 더 정교하게 할 수 있죠.

저는 이게 게임 보존의 재미있는 부분이라고 봅니다. 박물관에 디스크 하나를 보관하는 것보다 게임이 어떻게 작동했는지를 이해할 수 있는 지식을 남기는 쪽이 더 오래갈 수도 있기 때문입니다.

## 4. 마지막에는 AI도 작업을 거들었다

6년 넘게 사람이 중심이 돼 진행한 프로젝트지만 막바지에는 AI 도구도 일부 작업에 활용된 것으로 전해졌습니다. 수많은 함수와 구조를 비교하고 반복해서 맞춰야 하는 디컴파일 특성상 AI가 보조 도구로 들어갈 여지가 큰 분야죠.

이 부분도 흥미롭습니다. AI가 게임을 새로 만드는 이야기만 많은데, 반대로 오래된 게임을 이해하고 보존하는 데도 사용할 수 있다는 사례이기 때문입니다.

다만 100% 완성이라는 결과를 AI가 혼자 만들었다고 보는 건 틀립니다. 핵심은 수년 동안 쌓인 사람들의 분석과 검증이고, AI는 마지막 구간에서 속도를 올린 도구에 가깝습니다.

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

## 5. 리마스터를 기다리지 않는 보존 방식

오래된 게임을 다시 즐기려면 보통 제작사가 리마스터나 리메이크를 내주길 기다립니다. 하지만 회사가 모든 옛 작품을 다시 출시할 수는 없습니다.

팬 디컴파일은 그 기다림과 다른 길입니다. 원작을 훼손하지 않으면서 기술 구조를 이해하고, 미래 하드웨어에서도 이어갈 기반을 만드는 방식이죠.

스매시브라더스 밀리는 지금도 대회와 커뮤니티가 살아 있는 특이한 25년 된 게임입니다. 그래서 이번 100% 달성은 옛날 게임 하나의 코드 복원보다, 살아 있는 게임 문화를 다음 세대로 넘기는 작업에 더 가깝게 느껴집니다.

## 6. 팬 프로젝트가 공식 제작사보다 오래 게임을 지키기도 한다

게임 회사는 신작을 만들어야 살아남기 때문에 20년 전 작품 하나를 영원히 관리하기 어렵습니다. 반면 팬에게는 그 한 작품이 평생 즐기는 취미가 될 수 있죠.

밀리 커뮤니티는 출시 후 25년이 지나도 대회와 기술 연구를 이어가고 있습니다. 디컴파일 프로젝트도 이런 장기적인 애정이 없었다면 6년 넘게 지속되기 어려웠을 겁니다.

이런 사례를 보면 게임 보존의 주체가 반드시 제작사만일 필요는 없다는 생각이 듭니다. 회사는 저작권과 원본 자산을 가지고 있고, 팬은 시간이 오래 걸리는 분석과 기록을 이어가는 서로 다른 역할을 할 수 있습니다.

물론 법적 경계를 지키는 것이 전제입니다. 원본 자산을 무단 배포하지 않고 기술 연구를 이어갈 수 있다면, 팬 커뮤니티는 상업적 가치가 줄어든 게임을 문화적으로는 계속 살아 있게 만드는 꽤 중요한 보존자가 될 수 있습니다.

무엇보다 이런 기록은 다음 세대 개발자에게도 자료가 됩니다. 오래된 게임의 손맛이 어떤 코드와 수치에서 나왔는지 직접 살펴볼 수 있기 때문입니다.

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