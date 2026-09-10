import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const src = 'C:\\Users\\Proteinbeer\\Downloads\\danmaek_switch_guides_30_short_titles_20260910';
const out = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\src\\content\\posts';

const files = [
  { file: '01_switch2_microsd_express_not_recognized.txt', slug: 'switch2-microsd-express-not-recognized', tags: ['스위치 2', '마이크로SD 익스프레스', '저장 공간', '인식 오류', '메모리 카드'] },
  { file: '02_switch2_storage_move_internal_microsd.txt', slug: 'switch2-storage-move-internal-microsd', tags: ['스위치 2', '저장 공간', '마이크로SD 익스프레스', '데이터 이동', '용량 정리'] },
  { file: '03_switch2_game_key_card_download.txt', slug: 'switch2-game-key-card-download', tags: ['스위치 2', '게임 키 카드', '다운로드', '패키지', '게임 카드'] },
  { file: '04_switch2_edition_upgrade_pack.txt', slug: 'switch2-edition-upgrade-pack', tags: ['스위치 2', '에디션 업그레이드', '업그레이드 패스', '게임', '보유 타이틀'] },
  { file: '05_switch2_virtual_game_card_second_console.txt', slug: 'switch2-virtual-game-card-second-console', tags: ['스위치 2', '버추얼 게임 카드', '페어링', '두 대', '다운로드 게임'] },
  { file: '06_switch2_virtual_game_card_family_lending.txt', slug: 'switch2-virtual-game-card-family-lending', tags: ['스위치 2', '버추얼 게임 카드', '가족 대여', '패밀리 그룹', '다운로드 게임'] },
  { file: '07_switch2_online_license_vs_virtual_card.txt', slug: 'switch2-online-license-vs-virtual-card', tags: ['스위치 2', '온라인 라이선스', '버추얼 게임 카드', '다운로드 게임', '본체 등록'] },
  { file: '08_switch2_download_game_wont_start.txt', slug: 'switch2-download-game-wont-start', tags: ['스위치 2', '다운로드 게임', '이용 권한', '버추얼 게임 카드', '실행 오류'] },
  { file: '09_switch_to_switch2_server_transfer.txt', slug: 'switch-to-switch2-server-transfer', tags: ['스위치 2', '데이터 이전', '서버 전송', '기기 이전', '세이브 이전'] },
  { file: '10_switch2_old_sd_screenshot_import.txt', slug: 'switch2-old-sd-screenshot-import', tags: ['스위치 2', '마이크로SD', '스크린샷', '동영상', '데이터 가져오기'] },
  { file: '11_switch2_user_profiles_save_data.txt', slug: 'switch2-user-profiles-save-data', tags: ['스위치 2', '유저', '세이브 데이터', '가족', '계정'] },
  { file: '12_switch2_download_code_region_error.txt', slug: 'switch2-download-code-region-error', tags: ['스위치 2', '다운로드 번호', '국가 설정', 'e숍', '등록 오류'] },
  { file: '13_switch2_parental_purchase_restriction.txt', slug: 'switch2-parental-purchase-restriction', tags: ['스위치 2', '자녀 보호', 'e숍', '구매 제한', '패밀리 그룹'] },
  { file: '14_switch2_parental_playtime_limit.txt', slug: 'switch2-parental-playtime-limit', tags: ['스위치 2', '자녀 보호', '플레이 시간', '제한 설정', '앱'] },
  { file: '15_switch2_gamechat_voice_setup.txt', slug: 'switch2-gamechat-voice-setup', tags: ['스위치 2', '게임챗', '음성 채팅', '마이크', '통화'] },
  { file: '16_switch2_gamechat_camera_setup.txt', slug: 'switch2-gamechat-camera-setup', tags: ['스위치 2', '게임챗', '카메라', 'USB 카메라', '영상 공유'] },
  { file: '17_switch2_bluetooth_audio_no_mic.txt', slug: 'switch2-bluetooth-audio-no-mic', tags: ['스위치 2', '블루투스', '이어폰', '마이크', '오디오'] },
  { file: '18_switch2_bluetooth_audio_lag_5ghz.txt', slug: 'switch2-bluetooth-audio-lag-5ghz', tags: ['스위치 2', '블루투스', '5GHz', '와이파이', '무선 간섭'] },
  { file: '19_switch2_tv_no_signal.txt', slug: 'switch2-tv-no-signal', tags: ['스위치 2', 'TV 모드', '검은 화면', 'HDMI', '독'] },
  { file: '20_switch2_old_charger_tv_mode.txt', slug: 'switch2-old-charger-tv-mode', tags: ['스위치 2', 'AC 어댑터', '충전기', 'TV 모드', '전원'] },
  { file: '21_switch2_tv_4k_120_hdr_setup.txt', slug: 'switch2-tv-4k-120-hdr-setup', tags: ['스위치 2', '4K', '120Hz', 'HDR', 'TV 설정'] },
  { file: '22_switch2_pro_controller_pairing.txt', slug: 'switch2-pro-controller-pairing', tags: ['스위치 2', '프로 컨트롤러', '페어링', '등록', '무선'] },
  { file: '23_switch2_old_joycon_compatibility.txt', slug: 'switch2-old-joycon-compatibility', tags: ['스위치 2', '조이콘', '하위 호환', '무선 연결', '주변기기'] },
  { file: '24_switch2_button_mapping_glgr.txt', slug: 'switch2-button-mapping-glgr', tags: ['스위치 2', '버튼 할당', 'GL', 'GR', '키 설정'] },
  { file: '25_switch2_screenshot_video_pc_transfer.txt', slug: 'switch2-screenshot-video-pc-transfer', tags: ['스위치 2', '스크린샷', 'PC 전송', 'USB', '영상'] },
  { file: '26_switch2_storage_cleanup_archive.txt', slug: 'switch2-storage-cleanup-archive', tags: ['스위치 2', '저장 공간', '세이브 데이터', '게임 데이터', '정리'] },
  { file: '27_switch2_system_update_failure.txt', slug: 'switch2-system-update-failure', tags: ['스위치 2', '본체 업데이트', '오류', '재기동', '네트워크'] },
  { file: '28_switch2_usb_camera_compatibility.txt', slug: 'switch2-usb-camera-compatibility', tags: ['스위치 2', 'USB 카메라', '웹캠', '호환', '게임챗'] },
  { file: '29_switch2_dock_lan_network.txt', slug: 'switch2-dock-lan-network', tags: ['스위치 2', '유선 연결', 'LAN', '독', '네트워크'] },
  { file: '30_switch2_battery_90_charge_adapter.txt', slug: 'switch2-battery-90-charge-adapter', tags: ['스위치 2', '배터리', '90% 충전', '충전 제한', '어댑터'] },
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
  body += '<img class="post-landscape-image" src="/assets/posts/guide-images/switch-guide.jpg" alt="닌텐도 스위치 본체와 게임 카드가 놓여 있는 이미지" width="1200" height="675" loading="lazy" decoding="async" />\n\n';

  sections.forEach((sec, idx) => {
    body += `## ${idx + 1}. ${sec.title}\n\n`;
    const paras = dedupeConsecutive(sec.paragraphs);
    body += paras.join('\n\n') + '\n\n';
    if (idx % 2 === 1) {
      body += banner + '\n\n';
    }
  });

  body = body.trimEnd() + '\n';

  const date = '2026-08-01';
  const title = lines[0].trim();

  const fm = `---
title: "${title}"
description: "${description}"
date: ${date}
updated: ${date}
category: "가이드"
subcategory: "스위치"
tags:
${info.tags.map(t => `  - "${t}"`).join('\n')}
image: "/assets/posts/guide-images/switch-guide.jpg"
imageAlt: "닌텐도 스위치 본체와 게임 카드가 놓여 있는 이미지"
imageWidth: 1200
imageHeight: 675
hideHeroImage: true
hideDescription: true
---
`;

  const full = fm + '\n' + body;
  writeFileSync(join(out, `${info.slug}.md`), full, 'utf8');
  console.log(`Created: ${info.slug}.md (${sections.length} sections)`);
}

console.log(`\nDone! Created ${files.length} switch guide posts.`);