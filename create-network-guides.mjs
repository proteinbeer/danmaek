import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const src = 'C:\\Users\\Proteinbeer\\Downloads\\danmaek_network_guides_30_short_titles_20260910';
const out = 'C:\\Users\\Proteinbeer\\Desktop\\Vibe\\Danmaek\\src\\content\\posts';

const files = [
  { file: '01_gigabit_stuck_100mbps.txt', slug: 'network-gigabit-stuck-100mbps', tags: ['네트워크', '기가인터넷', '100Mbps', '랜선', '링크 속도'] },
  { file: '02_cat5e_cat6_cat6a.txt', slug: 'network-cat5e-cat6-cat6a', tags: ['네트워크', '랜선', 'Cat5e', 'Cat6', 'Cat6A'] },
  { file: '03_dns_change_slow.txt', slug: 'network-dns-change-slow', tags: ['네트워크', 'DNS', '1.1.1.1', '8.8.8.8', '인터넷 속도'] },
  { file: '04_dns_cache_flush.txt', slug: 'network-dns-cache-flush', tags: ['네트워크', 'DNS 캐시', '캐시 삭제', '사이트 접속', '윈도우'] },
  { file: '05_ethernet_no_internet_wifi_ok.txt', slug: 'network-ethernet-no-internet-wifi-ok', tags: ['네트워크', '이더넷', '인터넷 없음', '랜카드', '와이파이'] },
  { file: '06_unidentified_network.txt', slug: 'network-unidentified-network', tags: ['네트워크', '식별되지 않은 네트워크', 'DHCP', 'IP 주소', '윈도우'] },
  { file: '07_default_gateway_unavailable.txt', slug: 'network-default-gateway-error', tags: ['네트워크', '기본 게이트웨이', '오류', '공유기', 'ping'] },
  { file: '08_ip_address_conflict.txt', slug: 'network-ip-address-conflict', tags: ['네트워크', 'IP 충돌', 'DHCP', '와이파이', '고정 IP'] },
  { file: '09_static_ip_breaks_internet.txt', slug: 'network-static-ip-breaks-internet', tags: ['네트워크', '고정 IP', '게이트웨이', 'DNS', '인터넷 끊김'] },
  { file: '10_dhcp_reservation.txt', slug: 'network-dhcp-reservation', tags: ['네트워크', 'DHCP 예약', '고정 IP', '공유기', 'MAC 주소'] },
  { file: '11_port_forwarding_not_working.txt', slug: 'network-port-forwarding-not-working', tags: ['네트워크', '포트포워딩', 'CGNAT', '방화벽', '공유기'] },
  { file: '12_strict_nat_type.txt', slug: 'network-strict-nat-type', tags: ['네트워크', 'NAT 타입', '온라인 게임', 'UPnP', '이중 NAT'] },
  { file: '13_double_nat.txt', slug: 'network-double-nat', tags: ['네트워크', '이중 NAT', '공유기', 'AP 모드', '게임'] },
  { file: '14_cgnat_port_forwarding.txt', slug: 'network-cgnat-port-forwarding', tags: ['네트워크', 'CGNAT', '포트포워딩', '공인 IP', '통신사'] },
  { file: '15_upnp_on_or_off.txt', slug: 'network-upnp-on-or-off', tags: ['네트워크', 'UPnP', '공유기', '보안', '온라인 게임'] },
  { file: '16_router_firmware_update.txt', slug: 'network-router-firmware-update', tags: ['네트워크', '공유기', '펌웨어', '보안', '업데이트'] },
  { file: '17_guest_wifi_iot.txt', slug: 'network-guest-wifi-iot', tags: ['네트워크', '게스트 와이파이', 'IoT', '보안', '공유기'] },
  { file: '18_wpa2_wpa3.txt', slug: 'network-wpa2-wpa3', tags: ['네트워크', 'WPA2', 'WPA3', '와이파이 보안', '호환성'] },
  { file: '19_6ghz_wifi_not_visible.txt', slug: 'network-6ghz-wifi-not-visible', tags: ['네트워크', '6GHz', '와이파이 6E', '와이파이 7', '무선 랜'] },
  { file: '20_wifi7_same_speed.txt', slug: 'network-wifi7-same-speed', tags: ['네트워크', '와이파이 7', '속도', '공유기', '인터넷 회선'] },
  { file: '21_link_drops_to_100mbps.txt', slug: 'network-link-drops-100mbps', tags: ['네트워크', '1Gbps', '100Mbps', '랜카드', '랜선'] },
  { file: '22_packet_loss_game.txt', slug: 'network-packet-loss-game', tags: ['네트워크', '패킷 손실', '온라인 게임', 'ping', '끊김'] },
  { file: '23_jitter_low_ping_stutter.txt', slug: 'network-jitter-low-ping-stutter', tags: ['네트워크', '지터', '핑', '온라인 게임', '버벅임'] },
  { file: '24_gbps_vs_megabytes.txt', slug: 'network-gbps-vs-megabytes', tags: ['네트워크', '1Gbps', 'MB', '단위 변환', '다운로드 속도'] },
  { file: '25_vpn_slow_internet.txt', slug: 'network-vpn-slow-internet', tags: ['네트워크', 'VPN', '속도', '암호화', '분할 터널링'] },
  { file: '26_dns_over_https.txt', slug: 'network-dns-over-https', tags: ['네트워크', 'DNS over HTTPS', '암호화 DNS', '보안', '윈도우'] },
  { file: '27_public_private_network_profile.txt', slug: 'network-public-private-profile', tags: ['네트워크', '공용 네트워크', '개인 네트워크', '공유 폴더', '윈도우'] },
  { file: '28_network_discovery_pc_missing.txt', slug: 'network-discovery-pc-missing', tags: ['네트워크', '네트워크 검색', 'PC 안보임', '공유 폴더', '윈도우'] },
  { file: '29_wake_on_lan_not_working.txt', slug: 'network-wake-on-lan', tags: ['네트워크', 'Wake on LAN', '매직 패킷', '바이오스', '절전'] },
  { file: '30_ap_mode_bridge_mode.txt', slug: 'network-ap-bridge-mode', tags: ['네트워크', 'AP 모드', '브리지 모드', '공유기', '이중 NAT'] },
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
  body += '<img class="post-landscape-image" src="/assets/posts/guide-images/network-guide-common.jpg" alt="노트북, 공유기, 랜선이 놓여 있는 이미지" width="1200" height="675" loading="lazy" decoding="async" />\n\n';

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
subcategory: "네트워크"
tags:
${info.tags.map(t => `  - "${t}"`).join('\n')}
image: "/assets/posts/guide-images/network-guide-common.jpg"
imageAlt: "노트북, 공유기, 랜선이 놓여 있는 이미지"
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

console.log(`\nDone! Created ${files.length} network guide posts.`);