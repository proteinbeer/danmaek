---
title: "워드프레스 속도 최적화, 플러그인 없이 하는 순서"
description: "플러그인만 계속 늘리면 오히려 느려집니다. 이미지 압축, 캐시 설정, DB 정리처럼 바로 효과를 보는 순서대로 워드프레스 속도를 개선하는 방법을 정리했습니다."
date: 2026-08-23
updated: 2026-08-23
category: "가이드"
subcategory: "워드프레스"
tags:
  - "워드프레스"
  - "속도"
  - "최적화"
  - "캐시"
  - "WebP"
image: "/assets/posts/guide-images/wordpress-guide.jpg"
imageAlt: "워드프레스 사이트 속도를 측정하고 최적화하는 개념"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

워드프레스가 느려진다고 하면 단순히 "고성능 호스팅으로 옮기면 되겠지"라고 생각하기 쉽습니다. 그런데 실제로는 대부분의 속도 저하 원인이 **이미지 크기와 캐시 설정, 쌓인 데이터**에 있습니다.

이 글에서는 플러그인을 마구 추가하지 않고도 효과를 확실히 볼 수 있는 순서를 정리했습니다. 측정 → 이미지 → 캐시 → DB 정리 순서로 따라가면 체감 속도가 달라집니다.

<img class="post-landscape-image" src="/assets/posts/guide-images/wordpress-guide.jpg" alt="워드프레스 사이트 속도를 측정하고 최적화하는 개념" width="1200" height="675" loading="lazy" decoding="async" />

## 1. 어디서 느린지 먼저 측정하기

최적화의 시작은 추측이 아니라 측정입니다. 그래야 어느 지점이 가장 아픈지 보입니다.

- PageSpeed Insights에 사이트 주소를 넣으면 성능 점수와 개선 목록이 나옵니다.
- 크롬의 개발자 도구(F12) → 네트워크 탭에서 어떤 파일이 오래 걸리는지 볼 수 있습니다.
- 큰 이미지, 오래 걸리는 서버 응답, 원인이 되지 않는 스크립트가 순위로 표시됩니다.

측정 결과가 "이미지 최적화" 때문이라면 아래 단계로 바로 넘어가면 됩니다. 서버 응답 자체가 느리다면 캐시 설정부터 손을 대는 것이 맞습니다.

## 2. 이미지 크기와 포맷으로 줄이기

사이트를 무겁게 만드는 1순위는 언제나 이미지입니다. 글마다 원본 사진을 그대로 올리면 페이지 하나가 수 MB가 됩니다.

- 업로드 전에 **가로 1200~1600px 이하로 리사이즈**하고 품질 80% 수준으로 저장합니다.
- WebP 포맷을 지원하는 서버라면 JPEG보다 용량이 크게 줄어듭니다.
- 이미지 압축 플러그인은 **기존 글의 이미지까지 일괄 최적화**할 수 있는 것을 선택합니다.
- 로고나 아이콘처럼 작은 파일은 SVG나 적절한 크기의 PNG로 유지하는 것이 좋습니다.

이미지 최적화는 페이지의 다운로드 용량을 절반 이하로 만들 수 있습니다. 어떤 호스팅 속도보다 직접적인 효과죠.

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

## 3. 캐시 플러그인 하나로 시작하기

캐시는 "만들어진 화면을 그대로 재사용"하는 기능입니다. 페이지마다 PHP를 처음부터 실행하지 않으므로 응답이 훨씬 빨라집니다.

- 캐시 플러그인은 한 개만 설치하고 페이지 캐시를 켭니다.
- 브라우저 캐시도 같이 설정해서 재방문 방문자에게 같은 파일을 또 보내지 않습니다.
- CDN 옵션이 있는 플러그인을 선택하면 이미지까지 별도 캐시에 올라가 효과가 커집니다.
- 글을 수정했는데 화면이 예전 것이라면 **캐시를 비우고** 다시 확인하면 됩니다.

캐시 플러그인 과다 설치는 오히려 속도를 늦춥니다. 가장 많이 쓰는 캐시 플러그인 하나로 충분합니다.

## 4. DB 정리로 겉으로 안 보이는 무게 줄이기

글을 수정할 때마다 워드프레스는 **리비전(revision)**을 쌓습니다. 오래 운영한 사이트라면 DB가 가벼운 글보다 리비전이 훨씬 많은 경우가 있습니다.

- 글 리비전, 스팸 댓글, 임시 옵션을 정리하는 플러그인으로 주 1회 정리합니다.
- 정리 전에 DB 백업을 하나 만들어 두는 것이 안전합니다.
- 오래된 초안과 사용하지 않는 플러그인의 잔여 테이블도 확인해서 지웁니다.
- 동영상은 DB가 아니라 **외부 플랫폼(예: YouTube)에 올리고 링크만 겁니다.**

DB 정리는 눈에 보이는 변화보다 크지는 않지만, 관리자 화면과 글쓰기 반응이 확실히 가벼워집니다.

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

## 5. CDN과 호스팅을 다시 볼 때

위 방법으로도 충분하지 않은 상황은 방문자가 멀리 있거나, 남아있는 병목이 서버 자체일 때입니다.

- CDN을 도입하면 정적 파일이 가까운 서버에서 전달되어 해외 방문자 체감 속도가 크게 개선됩니다.
- 서버 응답 시간(TTFB)이 계속 느리다면 같은 요금제라도 **리전(서버 위치)**을 가까운 곳으로 옮길 수 있는지 확인합니다.
- 여러 사이트를 한 계정에 몰아 넣은 상태라면 분리하는 것도 효과가 큽니다.

속도 최적화의 순서는 항상 **이미지 → 캐시 → DB → 서버**입니다. 서버 교체는 마지막 단계에 두는 것이 비용 대비 효과가 좋습니다.

## 6. 반복 측정과 유지

최적화는 한 번으로 끝나지 않습니다. 새 글과 새 이미지가 계속 추가되니까요.

- 한 달에 한 번 페이지 속도를 측정해 개선 여부를 확인합니다.
- 이미지 최적화 설정을 업로드 시 자동 적용되게 유지합니다.
- 캐시와 DB 정리를 일정에 넣어두고, 플러그인은 필요한 것만 유지합니다.

측정 기록을 남겨두면 어떤 변화가 효과가 있었는지 한눈에 보입니다. 이 과정을 반복하면 사이트는 늘 가벼운 상태를 유지합니다.

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
