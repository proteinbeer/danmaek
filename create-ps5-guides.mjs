import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const src = 'C:\\Users\\Proteinbeer\\Downloads\\danmaek_ps5_guides_30_20260910';
const out = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\src\\content\\posts';

const files = [
  { file: '01_ps5_game_download_stuck.txt', slug: 'ps5-game-download-stuck', title: 'PS5 게임 다운로드가 멈췄을 때, 다시 받기 전에 확인할 순서', tags: ['PS5', '다운로드', '설치', '네트워크', '저장 공간'] },
  { file: '02_ps5_game_lock_icon.txt', slug: 'ps5-game-lock-icon', title: 'PS5 게임에 자물쇠가 뜰 때, 다시 구매하기 전에 확인할 것', tags: ['PS5', '자물쇠', '라이선스', '게임 잠금', 'PSN'] },
  { file: '03_ps5_restore_licenses.txt', slug: 'ps5-restore-licenses', title: 'PS5 라이선스 복원은 언제 쓰나, 게임이 안 열릴 때 제대로 사용하는 법', tags: ['PS5', '라이선스 복원', 'DLC', '게임', '계정'] },
  { file: '04_ps5_console_sharing.txt', slug: 'ps5-console-sharing', title: 'PS5 콘솔 공유와 오프라인 플레이, 가족끼리 게임 나누는 설정', tags: ['PS5', '콘솔 공유', '게임 공유', '가족', '계정'] },
  { file: '05_ps5_ps4_to_ps5_upgrade.txt', slug: 'ps5-ps4-to-ps5-upgrade', title: 'PS4 게임을 PS5 버전으로 바꾸는 법, 같은 게임 두 개 뜰 때 구분하기', tags: ['PS5', 'PS4', '업그레이드', '게임 버전', '저장 공간'] },
  { file: '06_ps5_save_transfer.txt', slug: 'ps5-save-transfer', title: 'PS4 세이브를 PS5로 옮기는 법, 게임 진행이 안 보일 때 확인할 것', tags: ['PS5', 'PS4', '세이브', '클라우드', '데이터 전송'] },
  { file: '07_ps5_remote_play.txt', slug: 'ps5-remote-play', title: 'PS5 리모트 플레이 연결이 안 될 때, 집 밖에서도 끊기지 않게 설정하기', tags: ['PS5', '리모트 플레이', '원격', '네트워크', '와이파이'] },
  { file: '08_ps5_share_play.txt', slug: 'ps5-share-play', title: 'PS5 셰어 플레이 쓰는 법, 친구에게 게임 화면과 조작권 넘기기', tags: ['PS5', '셰어 플레이', '파티', '게임 공유', '친구'] },
  { file: '09_ps5_party_voice_chat.txt', slug: 'ps5-party-voice-chat', title: 'PS5 파티 음성 채팅이 안 들릴 때, 마이크보다 먼저 볼 설정', tags: ['PS5', '파티', '음성 채팅', '마이크', '헤드셋'] },
  { file: '10_ps5_discord_voice.txt', slug: 'ps5-discord-voice', title: 'PS5 디스코드 음성 채팅 연결법, 휴대폰 없이 바로 들어가는 방법', tags: ['PS5', '디스코드', '음성 채팅', '계정 연결', '파티'] },
  { file: '11_ps5_3d_audio_headphones.txt', slug: 'ps5-3d-audio-headphones', title: 'PS5 3D 오디오 설정법, 헤드셋이 답답하게 들릴 때 조절할 부분', tags: ['PS5', '3D 오디오', '헤드셋', '음향', '공간감'] },
  { file: '12_ps5_tv_3d_audio.txt', slug: 'ps5-tv-3d-audio', title: 'PS5 TV 스피커 3D 오디오, 별도 헤드셋 없이 공간감 맞추는 법', tags: ['PS5', 'TV', '3D 오디오', '사운드', '스피커'] },
  { file: '13_ps5_audio_focus.txt', slug: 'ps5-audio-focus', title: 'PS5 오디오 포커스 설정, 발소리와 대사가 잘 안 들릴 때 쓰는 기능', tags: ['PS5', '오디오 포커스', '발소리', '음향', '헤드셋'] },
  { file: '14_ps5_hdmi_black_screen.txt', slug: 'ps5-hdmi-black-screen', title: 'PS5 HDMI 화면이 검게 나올 때, 케이블 바꾸기 전에 확인할 설정', tags: ['PS5', 'HDMI', '검은 화면', '화면 출력', 'TV'] },
  { file: '15_ps5_hdmi_device_link.txt', slug: 'ps5-hdmi-device-link', title: 'PS5 켜면 TV도 같이 켜질 때, HDMI 기기 링크 원하는 대로 설정하기', tags: ['PS5', 'HDMI', '기기 링크', 'CEC', 'TV'] },
  { file: '16_ps5_safe_mode.txt', slug: 'ps5-safe-mode', title: 'PS5 안전 모드 들어가는 법, 초기화 전에 쓸 수 있는 복구 기능 정리', tags: ['PS5', '안전 모드', '복구', '초기화', '시스템'] },
  { file: '17_ps5_clear_cache_rebuild_database.txt', slug: 'ps5-clear-cache-rebuild-database', title: 'PS5 캐시 지우기와 데이터베이스 재구축, 느려졌을 때 차이와 사용 순서', tags: ['PS5', '캐시', '데이터베이스', '느림', '안전 모드'] },
  { file: '18_ps5_game_crash_freeze.txt', slug: 'ps5-game-crash-freeze', title: 'PS5 게임이 자꾸 튕기거나 멈출 때, 게임 문제와 본체 문제 구분하기', tags: ['PS5', '게임 튕김', '충돌', '오류', '본체'] },
  { file: '19_ps5_disc_read_error.txt', slug: 'ps5-disc-read-error', title: 'PS5 디스크를 못 읽을 때, 드라이브 고장 전에 확인할 다섯 가지', tags: ['PS5', '디스크', '드라이브', '게임', '오류'] },
  { file: '20_ps5_dlc_not_showing.txt', slug: 'ps5-dlc-not-showing', title: 'PS5 DLC가 설치됐는데 안 보일 때, 본편 지역과 계정부터 확인하기', tags: ['PS5', 'DLC', '추가 콘텐츠', '지역', '계정'] },
  { file: '21_ps5_nat_type.txt', slug: 'ps5-nat-type', title: 'PS5 NAT 타입 확인법, 온라인 게임과 파티가 안 될 때 보는 이유', tags: ['PS5', 'NAT', '네트워크', '파티', '공유기'] },
  { file: '22_ps5_wifi_disconnect.txt', slug: 'ps5-wifi-disconnect', title: 'PS5 와이파이가 자꾸 끊길 때, 5GHz보다 먼저 확인할 것', tags: ['PS5', '와이파이', '끊김', '5GHz', '공유기'] },
  { file: '23_ps5_lan_disconnected.txt', slug: 'ps5-lan-disconnected', title: 'PS5 LAN 케이블 연결 끊김 반복, 케이블보다 공유기부터 볼 때', tags: ['PS5', 'LAN', '유선', '끊김', '공유기'] },
  { file: '24_ps5_slow_download.txt', slug: 'ps5-slow-download', title: 'PS5 다운로드 속도가 느릴 때, DNS보다 효과 큰 점검 순서', tags: ['PS5', '다운로드', '속도', 'DNS', '네트워크'] },
  { file: '25_ps5_capture_upload.txt', slug: 'ps5-capture-upload', title: 'PS5 스크린샷을 휴대폰으로 옮기는 법, 자동 업로드가 안 될 때', tags: ['PS5', '스크린샷', '캡처', '휴대폰', '업로드'] },
  { file: '26_ps5_trophy_capture.txt', slug: 'ps5-trophy-capture', title: 'PS5 트로피 딸 때 스크린샷이 계속 쌓일 때, 자동 캡처 끄는 법', tags: ['PS5', '트로피', '캡처', '저장 공간', '스크린샷'] },
  { file: '27_ps5_accessibility.txt', slug: 'ps5-accessibility', title: 'PS5 접근성 설정 추천, 글씨와 소리가 불편할 때 바꿀 수 있는 기능', tags: ['PS5', '접근성', '확대', '자막', '설정'] },
  { file: '28_ps5_online_id_change.txt', slug: 'psn-online-id-change', title: 'PSN 온라인 ID 바꾸는 법, 변경 전에 오래된 게임 호환성 확인하기', tags: ['PSN', '온라인 ID', '계정', '이름 변경', 'PS5'] },
  { file: '29_ps5_child_account_parental_controls.txt', slug: 'ps5-child-account-parental', title: 'PS5 자녀 계정 설정법, 플레이 시간과 결제 한도 따로 관리하기', tags: ['PS5', '자녀 계정', '가족 관리', '플레이 시간', '결제 한도'] },
  { file: '30_ps5_factory_reset_backup.txt', slug: 'ps5-factory-reset-backup', title: 'PS5 초기화 전 백업할 것, 공장 초기화와 시스템 재설치 차이', tags: ['PS5', '초기화', '백업', '세이브', '시스템'] },
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

const dedupeConsecutive = (arr) => {
  const result = [];
  for (const item of arr) {
    if (result.length === 0 || result[result.length - 1] !== item) {
      result.push(item);
    }
  }
  return result;
};

for (let i = 0; i < files.length; i++) {
  const info = files[i];
  const raw = readFileSync(join(src, info.file), 'utf8');
  const lines = raw.split(/\r?\n/);

  let introEnd = lines.findIndex(l => /^1\.\s/.test(l.trim()));
  if (introEnd === -1) introEnd = lines.length;
  const introLines = dedupeConsecutive(lines.slice(1, introEnd).map(l => l.trim()).filter(l => l));
  const intro = introLines.join('\n\n');

  const descMatch = intro.split('\n\n')[0] || '';
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
  body += '<img class="post-landscape-image" src="/assets/posts/guide-images/playstation-ps.jpg" alt="PS5 게임과 시스템 설정 화면" width="1280" height="720" loading="lazy" decoding="async" />\n\n';

  sections.forEach((sec, idx) => {
    body += `## ${idx + 1}. ${sec.title}\n\n`;
    const paras = dedupeConsecutive(sec.paragraphs);
    body += paras.join('\n\n') + '\n\n';
    if (idx === 1 || idx === 3 || idx === 5 || idx === 7) {
      body += banner + '\n\n';
    }
  });

  body = body.trimEnd() + '\n';

  const date = '2026-08-01';

  const fm = `---
title: "${info.title}"
description: "${description}"
date: ${date}
updated: ${date}
category: "가이드"
subcategory: "플스"
tags:
${info.tags.map(t => `  - "${t}"`).join('\n')}
image: "/assets/posts/guide-images/playstation-ps.jpg"
imageAlt: "PS5 게임과 시스템 설정 화면"
imageWidth: 1280
imageHeight: 720
hideHeroImage: true
hideDescription: true
---
`;

  const full = fm + '\n' + body;
  writeFileSync(join(out, `${info.slug}.md`), full, 'utf8');
  console.log(`Created: ${info.slug}.md (date: ${date})`);
}

console.log(`\nDone! Created ${files.length} ps5 guide posts.`);