import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const src = 'C:\\Users\\Proteinbeer\\Downloads\\danmaek_peripheral_guides_20_20260910';
const out = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\src\\content\\posts';

const files = [
  { file: '01_mouse_polling_rate_stutter.txt', slug: 'mouse-polling-rate', title: '마우스 폴링레이트 8000Hz로 올렸는데, 게임이 더 끊기는 이유', alt: '게이밍 마우스 폴링레이트 설정', tags: ['마우스', '폴링레이트', '게이밍 마우스', '프레임', '입력'] },
  { file: '02_mouse_dpi_pointer_speed.txt', slug: 'mouse-dpi-sensitivity', title: '마우스 DPI를 올렸는데 더 부정확하다면, 감도보다 먼저 볼 설정', alt: '마우스 DPI 설정 화면', tags: ['마우스', 'DPI', '감도', '포인터', '조준'] },
  { file: '03_wireless_mouse_usb3_interference.txt', slug: 'wireless-mouse-usb3-interference', title: '무선 마우스가 새 PC에서만 끊긴다면, USB 3.0 포트가 원인일 수 있다', alt: '무선 마우스 USB 수신기', tags: ['무선 마우스', 'USB 3.0', '간섭', '2.4GHz', '끊김'] },
  { file: '04_mouse_cursor_skipping_sensor_pad.txt', slug: 'mouse-cursor-skipping', title: '마우스 커서가 순간이동한다면, 센서보다 마우스패드를 먼저 볼 이유', alt: '마우스 센서와 패드', tags: ['마우스', '커서', '센서', '마우스패드', '추적'] },
  { file: '05_keyboard_chattering.txt', slug: 'keyboard-chattering', title: '키보드를 한 번 눌렀는데 두 글자씩 입력된다면, 교체 전에 볼 것', alt: '기계식 키보드 스위치', tags: ['키보드', '채터링', '기계식', '스위치', '중복 입력'] },
  { file: '06_keyboard_ghosting_nkro.txt', slug: 'keyboard-ghosting-nkro', title: '게임에서 키를 세 개만 눌러도 씹힌다면, 키보드 고스팅을 확인할 때', alt: '게이밍 키보드 동시입력', tags: ['키보드', '고스팅', '동시입력', 'NKRO', '게이밍'] },
  { file: '07_keyboard_input_latency.txt', slug: 'wireless-keyboard-latency', title: '무선 키보드인데 반응이 늦다면, 블루투스부터 의심해야 하는 이유', alt: '무선 키보드 연결', tags: ['무선 키보드', '반응 속도', '블루투스', '지연', '폴링레이트'] },
  { file: '08_usb_mic_low_volume.txt', slug: 'usb-mic-low-volume', title: 'USB 마이크 소리가 너무 작다면, 마이크를 가까이 대기 전에 볼 설정', alt: 'USB 마이크 볼륨 설정', tags: ['USB 마이크', '볼륨', '게인', '녹음', '오디오'] },
  { file: '09_usb_mic_noise.txt', slug: 'usb-mic-noise', title: 'USB 마이크에서 지지직 소리가 난다면, 노이즈 제거보다 먼저 할 것', alt: 'USB 마이크 잡음', tags: ['USB 마이크', '잡음', '노이즈', '지지직', '오디오'] },
  { file: '10_webcam_not_detected.txt', slug: 'webcam-not-detected', title: '웹캠을 꽂았는데 카메라가 없다고 뜬다면, USB보다 권한을 먼저 볼 때', alt: '웹캠 연결 및 설정', tags: ['웹캠', '카메라', '인식', '권한', 'USB'] },
  { file: '11_webcam_blurry_autofocus.txt', slug: 'webcam-blurry-quality', title: '웹캠이 4K인데도 흐릿하다면, 해상도보다 조명부터 바꿔야 하는 이유', alt: '웹캠 화질 비교', tags: ['웹캠', '화질', '4K', '조명', '자동초점'] },
  { file: '12_monitor_hdr_washed_out.txt', slug: 'monitor-hdr-washed-out', title: '모니터 HDR을 켰는데 색이 더 뿌옇다면, 고장이 아닐 수 있다', alt: '모니터 HDR 설정', tags: ['모니터', 'HDR', '색감', 'SDR', '디스플레이'] },
  { file: '13_monitor_overdrive_ghosting.txt', slug: 'monitor-overdrive-ghosting', title: '모니터 응답속도를 가장 빠르게 했는데, 오히려 잔상이 더 생기는 이유', alt: '모니터 오버드라이브 설정', tags: ['모니터', '응답속도', '오버드라이브', '잔상', '게이밍'] },
  { file: '14_monitor_vrr_tearing.txt', slug: 'monitor-vrr-tearing', title: '지싱크와 프리싱크를 켰는데 화면이 찢어진다면, 설정 하나가 빠졌을 수 있다', alt: '모니터 VRR 설정', tags: ['모니터', 'VRR', '지싱크', '프리싱크', '화면 찢어짐'] },
  { file: '15_usb_c_monitor_no_display.txt', slug: 'usb-c-monitor-no-display', title: 'USB C 케이블로 모니터를 연결했는데 충전만 된다면, 포트부터 봐야 한다', alt: 'USB C 모니터 연결', tags: ['USB C', '모니터', '영상 출력', '충전', '케이블'] },
  { file: '16_usb_hub_disconnect_power.txt', slug: 'usb-hub-disconnect', title: 'USB 허브에 여러 개 꽂았더니 자꾸 끊긴다면, 포트 수보다 전력이 문제다', alt: 'USB 허브 연결', tags: ['USB 허브', '끊김', '전력', '대역폭', '연결'] },
  { file: '17_external_ssd_slow_usb.txt', slug: 'external-ssd-slow', title: '외장 SSD가 내장 SSD보다 너무 느리다면, 케이블 하나로 속도가 갈린다', alt: '외장 SSD 속도 테스트', tags: ['외장 SSD', '속도', 'USB', '케이블', '전송'] },
  { file: '18_capture_card_black_screen_hdcp.txt', slug: 'capture-card-black-screen', title: '캡처보드에 검은 화면만 뜬다면, 해상도보다 HDCP를 먼저 확인할 때', alt: '캡처보드 연결', tags: ['캡처보드', '검은 화면', 'HDCP', '방송', '캡처'] },
  { file: '19_speaker_headset_static_noise.txt', slug: 'speaker-headset-noise', title: '스피커와 헤드셋에서 지지직 소리가 난다면, 볼륨보다 연결부터 바꿔야 한다', alt: '스피커 헤드셋 잡음', tags: ['스피커', '헤드셋', '잡음', '오디오', '3.5mm'] },
  { file: '20_bluetooth_headset_mic_quality.txt', slug: 'bluetooth-headset-mic-quality', title: '블루투스 헤드셋 마이크를 켰더니, 음악 음질이 갑자기 나빠지는 이유', alt: '블루투스 헤드셋', tags: ['블루투스', '헤드셋', '마이크', '음질', 'LE 오디오'] },
];

const banner = `<div style="margin: 38px 0 30px; text-align: center;">
  <div style="width: 250px; max-width: 100%; margin: 0 auto; overflow: hidden;">
<!-- COUPANG PARTNERS DYNAMIC BANNER START -->
<script src="https://ads-partners.coupang.com/g.js"></script>
<script>
\tnew PartnersCoupang.G({"id":1021110,"template":"carousel","trackingCode":"AF7638395","width":"250","height":"250","tsource":""});
</script>
<!-- COUPANG PARTNERS DYNAMIC BANNER END -->
  </div>
</div>`;

for (let i = 0; i < files.length; i++) {
  const info = files[i];
  const raw = readFileSync(join(src, info.file), 'utf8');
  const lines = raw.split('\n');

  const titleLine = lines.find(l => l.trim()) || '';

  let introEnd = lines.findIndex(l => /^1\.\s/.test(l.trim()));
  if (introEnd === -1) introEnd = lines.length;
  const intro = lines.slice(1, introEnd).map(l => l.trim()).filter(l => l).join('\n\n');

  const descMatch = intro.split('\n\n')[0] || titleLine;
  const description = descMatch.length > 140 ? descMatch.slice(0, 137) + '...' : descMatch;

  const sections = [];
  let currentSection = null;
  for (let j = introEnd; j < lines.length; j++) {
    const trimmed = lines[j].trim();
    const secMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
    if (secMatch) {
      if (currentSection) sections.push(currentSection);
      currentSection = { title: secMatch[2], paragraphs: [] };
    } else if (currentSection && trimmed) {
      currentSection.paragraphs.push(trimmed);
    }
  }
  if (currentSection) sections.push(currentSection);

  let body = '';
  body += '<p class="affiliate-disclosure">\n  이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.\n</p>\n\n';
  body += intro + '\n\n';
  body += `<img class="post-landscape-image" src="/assets/posts/guide-images/dualsense-1200x675.jpg" alt="${info.alt}" width="1280" height="720" loading="lazy" decoding="async" />\n\n`;

  sections.forEach((sec, idx) => {
    body += `## ${idx + 1}. ${sec.title}\n\n`;
    body += sec.paragraphs.join('\n\n') + '\n\n';
    if (idx === 1 || idx === 3 || idx === 5) {
      body += banner + '\n\n';
    }
  });

  body = body.trimEnd() + '\n';

  const date = '2026-08-21';

  const fm = `---
title: "${info.title}"
description: "${description}"
date: ${date}
updated: ${date}
category: "가이드"
subcategory: "주변기기"
tags:
${info.tags.map(t => `  - "${t}"`).join('\n')}
image: "/assets/posts/guide-images/dualsense-1200x675.jpg"
imageAlt: "${info.alt}"
imageWidth: 1920
imageHeight: 1080
hideHeroImage: true
hideDescription: true
---
`;

  const full = fm + '\n' + body;
  writeFileSync(join(out, `${info.slug}.md`), full, 'utf8');
  console.log(`Created: ${info.slug}.md (date: ${date})`);
}

console.log(`\nDone! Created ${files.length} peripheral guide posts.`);
