---
title: "귀무자 웨이 오브 더 소드 PC 최적화 설정, 저사양 추천 그래픽 옵션"
description: "귀무자 웨이 오브 더 소드의 PC 설정을 정리했다. 시스템 요구 사항과 해상도별 성능 측정, DLSS 4.5·FSR 3.1 업스케일링 선택, 레이트레이싱과 볼류메트릭 옵션 판단, 하드웨어 구간별 추천 설정표, 스터터링과 크래시 해결책을 담았다."
date: 2026-09-08
updated: 2026-09-08
category: "가이드"
subcategory: "귀무자"
tags:
  - "귀무자"
  - "웨이 오브 더 소드"
  - "캡콤"
  - "PC 설정"
  - "성능"
  - "그래픽"
  - "액션"
image: "/assets/posts/guide-images/onimusha-way-of-the-sword-2026-09.jpg"
imageAlt: "귀무자 웨이 오브 더 소드 PC 최적화 설정 가이드 대표 이미지"
imageWidth: 1280
imageHeight: 720
hideHeroImage: true
hideDescription: true
---

<p class="affiliate-disclosure">
  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
</p>

귀무자 웨이 오브 더 소드는 RE 엔진으로 만든 2026년 9월 4일 출시작으로, 최신 엔진의 프레임 관리를 기대할 수 있는 동시에 볼류메트릭 안개와 그림자가 전투 중 프레임을 끌어내리기 쉽습니다. PC 버전은 DLSS 4.5와 FSR 3.1을 처음부터 지원하고 있어 설정값만 제대로 고르면 낮은 사양에서도 60프레임을 노려볼 만합니다. 이 글은 해외 성능 분석을 종합해 옵션별 영향과 구간별 권장 설정을 정리했습니다.

요구 사항 자체는 낮은 편입니다. 최소 사양은 1080p 저옵션 30프레임, 권장 사양은 1080p 중옵션 60프레임을 목표로 하며, SSD 설치는 공식 요구 조건입니다. 아래 프리셋을 기준으로 자신의 하드웨어에 맞는 조정을 시작하면 됩니다.

<img class="post-landscape-image post-landscape-image--high" src="/assets/posts/guide-images/onimusha-way-of-the-sword-2026-09.jpg" alt="귀무자 웨이 오브 더 소드 PC 최적화 설정 가이드 대표 이미지" width="1280" height="720" loading="lazy" decoding="async" />

## 1. RE 엔진과 시스템 요구 사항

| 항목 | 최소 사양 | 권장 사양 |
| --- | --- | --- |
| CPU | Intel Core i5-8400 / AMD Ryzen 3 3100 | Intel Core i5-10400 / AMD Ryzen 5 3600 |
| 메모리 | 16GB | 16GB |
| GPU | GTX 1660 6GB / RX 5500 XT 8GB | RTX 2060 SUPER 8GB / RX 6600 8GB |
| 저장 공간 | 50GB SSD | 50GB SSD |
| 목표 성능 | 1080p 저옵션 30프레임(업스케일) | 1080p 중옵션 60프레임(업스케일) |
| OS·API | Windows 11 / DirectX 12 | Windows 11 / DirectX 12 |

공식 요구 사양은 전부 64비트 Windows 11과 DirectX 12를 전제로 합니다. 저장 공간은 SSD만 인정되며, 이는 에셋 스트리밍 때문에 생겨난 조건이므로 기계식 디스크 설치는 프레임 문제의 원인이 됩니다.

성능 지표를 볼 때는 VRAM을 먼저 확인합니다. 텍스처 하이는 1440p에서 약 8GB를 요구하는 것으로 측정되어, 6GB 카드는 미디엄, 4GB 카드는 로우를 권장합니다. 레이트레이싱을 켜면 VRAM 사용이 추가로 늘어납니다.

## 2. 해상도별 성능 측정 결과

1080p 최대 옵션에서는 모든 테스트 GPU가 60프레임을 넘겼습니다. RTX 5090은 평균 220프레임 이상을 기록했고 RTX 2080 Ti도 평균 78프레임을 찍었는데, 이 해상도에서는 CPU 병목이 먼저 나타날 정도로 GPU 여유가 큽니다.

1440p 최대 옵션은 상위 5개 GPU가 60프레임 이상을 유지했고 RTX 3080은 G-Sync 모니터 전제로 부드럽게 흘렀습니다. RX 6900 XT는 평균 68프레임이지만 일부 구간 50프레임 아래로 내려가, 제품 선택 시 평균 수치만 믿지 말고 프레임 타임을 함께 봐야 합니다.

네이티브 4K 최대 옵션은 RTX 4090·5080·5090이 60프레임 이상이고 RX 9070 XT·7900 XTX는 FreeSync 환경에서 안정적입니다. 전반적으로 스터터링이 거의 없는 편으로 평가되며, 결국 프레임을 살리는 핵심은 업스케일링과 RT·볼류메트릭 옵션을 어떻게 고르느냐로 좁혀집니다.

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

## 3. 업스케일링 선택이 절반

게임은 DLSS 4.5(슈퍼 레졸루션), FSR 3.1, 그리고 캡콤 자체 TAAU를 지원합니다. 엔비디아 카드는 DLSS, AMD와 기타 카드는 FSR을 쓰되 RDNA3·RDNA4에서는 FSR 4.1(ML) 업스케일이 자동 적용됩니다.

모드 선택은 퀄리티부터 시작하는 것이 정석입니다. DLSS 4.5의 프리셋 M과 L이 설정에 내장되어 있는데, RTX 20·30 시리즈는 이 프리셋에서 성능 손실이 커질 수 있어 퀄리티 모드 기반으로 두는 것이 안전합니다.

FSR은 미세 지형과 식물에서 섬머가 나기 쉬워 퀄리티 모드를 권장하고, 6GB VRAM 카드는 밸런스 모드와 텍스처 미디엄을 병행하는 것을 추천합니다. 샤프니스는 30～50 정도가 선명도와 노이즈 균형에 적합합니다.

## 4. RT와 볼류메트릭 옵션 판단

레이트레이싱은 이 게임에서 가장 비싼 옵션이지만 반사 효과의 시각 개선은 크지 않습니다. 대부분의 유저에게는 완전히 끄는 것이 최선이며, 반사를 꼭 원하면 미디엄까지만 올려도 하이와 차이를 거의 체감하지 못합니다.

볼류메트릭 안개는 전투 프레임에 가장 큰 영향을 주는 옵션입니다. 하이에서 미디엄으로 내리는 것만으로 최대 20%가량의 프레임을 확보했다는 측정이 있고, 60프레임이 간당간당한 PC는 로우까지 내려도 시각 피해가 작은 편입니다.

섀도우는 미디엄～하이 선에서 멈추고, 스크린 스페이스 반사는 RT를 끈 뒤에도 젖은 바닥 표현을 살리므로 켜둘 것을 권장하되 저사양이면 꺼도 됩니다. 모션 블러와 심도 표현은 꺼두면 칼싸움 가시성이 좋아집니다.

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

## 5. 하드웨어 구간별 추천 설정표

낮은 사양(GTX 1660급)은 텍스처 미디엄, RT 오프, 볼류메트릭 로우, 섀도우 로우～미디엄, SSR 오프, 모션 블러 오프로 시작하고 FSR 밸런스 모드를 겁니다. 720p～1080p에서 30～50프레임을 확보하는 구성입니다.

중간 사양(RTX 2060 SUPER～3070 Ti급)은 RT 오프, 텍스처 하이(8GB)·미디엄(6GB), 필터링 16X, 메시·하늘·지면 미디엄, 섀도우 하이, 콘택트 섀도 온, AO 미디엄, SSR 온, 볼류메트릭 미디엄에 DLSS·FSR 퀄리티를 병행합니다. 1440p에서 60프레임을 노리는 정석 구성입니다.

높은 사양(RTX 4080급 이상)은 텍스처 하이와 RT 미디엄을 허용하고 나머지를 미디엄～하이로 올린 뒤 DLSS 퀄리티를 유지합니다. 스팀덱 같은 휴대 기기는 720p, FSR 밸런스, 전 옵션 로우, 30프레임 캡이 기준입니다.

## 6. 스터터링·크래시와 프레임 페이싱 해결책

첫 번째는 저장 장치입니다. 게임을 NVMe SSD에 설치해야 에셋 스트리밍이 원활하고, HDD에서는 셰이더 컴파일 스터터링이 크게 심해집니다. 공식 요구 조건도 SSD 필수이므로 설치 폴더부터 확인해야 합니다.

두 번째는 드라이버와 실행 환경입니다. 그래픽 드라이버를 최신으로 올리고, 실행 시 디스코드·지포스 오버레이를 끄면 DirectX 12 초기화 실패로 인한 실행 크래시를 피할 수 있습니다. Steam에서 파일 무결성 검사를 돌려 준비 캐시 손상을 복구하는 것도 도움이 됩니다.

세 번째는 프레임 제한입니다. 게임 내장 프레임 캡보다 드라이버 레벨 캡이 프레임 타임을 안정적으로 유지합니다. RTX는 NVIDIA 컨트롤 패널의 최대 프레임 속도, AMD는 Radeon Chill로 60프레임을 고정합니다. 추가로 셰이더 프리컴파일 항목(PreCompileShaders=1)을 config.ini에 반영하면 첫 로딩이 길어지는 대신 전투 스터터링이 줄어듭니다.

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
