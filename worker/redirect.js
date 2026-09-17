/* eslint-disable */
/**
 * 단맥 통합 글 301 리다이렉트 Worker (Cloudflare Workers)
 *
 * 배포 방법: Cloudflare 대시보드 > Workers & Pages > 새 Worker 생성 후
 * 아래 스크립트를 붙여넣고, 라우트(Routes)에서 danmaek.com/* 을 이 Worker로 연결합니다.
 *
 * - 옛 통합 전 게임 URL (`/posts/<옛slug>/`) 요청 시 canonical 통합 글로 HTTP 301 응답.
 * - 그 외 모든 요청은 원본(GitHub Pages 등)으로 그대로 전달합니다.
 *
 * 이 파일은 `npm run redirects:generate` 로 src/lib/postRedirects.ts 에서 자동 생성됩니다.
 */

const REDIRECT_MAP = {
  '/posts/halloween-the-game-civilian-characters-guide': '/posts/halloween-the-game-civilian-guide/',
  '/posts/halloween-the-game-civilian-stats-guide': '/posts/halloween-the-game-civilian-guide/',
  '/posts/halloween-the-game-michael-abilities-guide': '/posts/halloween-the-game-michael-myers-guide/',
  '/posts/halloween-the-game-shape-jump-guide': '/posts/halloween-the-game-michael-myers-guide/',
  '/posts/halloween-the-game-stalking-guide': '/posts/halloween-the-game-michael-myers-guide/',
  '/posts/halloween-the-game-haddonfield-heights-guide': '/posts/halloween-the-game-maps-guide/',
  '/posts/halloween-the-game-town-center-guide': '/posts/halloween-the-game-maps-guide/',
  '/posts/halloween-the-game-orange-grove-guide': '/posts/halloween-the-game-maps-guide/',
  '/posts/halloween-the-game-east-haddonfield-guide': '/posts/halloween-the-game-maps-guide/',
  '/posts/halloween-the-game-arrest-guide': '/posts/halloween-the-game-residents-police-guide/',
  '/posts/halloween-the-game-after-death-guide': '/posts/halloween-the-game-residents-police-guide/',
  '/posts/halloween-the-game-story-challenges-guide': '/posts/halloween-the-game-story-mode-guide/',
  '/posts/halloween-the-game-challenges-guide': '/posts/halloween-the-game-leveling-guide/',
  '/posts/halloween-the-game-perk-deck-guide': '/posts/halloween-the-game-leveling-guide/',
  '/posts/halloween-the-game-loot-guide': '/posts/halloween-the-game-escape-guide/',
  '/posts/monster-hunter-wilds-faq-guide': '/posts/monster-hunter-wilds-beginner-guide/',
  '/posts/monster-hunter-wilds-hunter-rank-guide': '/posts/monster-hunter-wilds-beginner-guide/',
  '/posts/monster-hunter-wilds-weapon-crafting-guide': '/posts/monster-hunter-wilds-armor-progression-guide/',
  '/posts/monster-hunter-wilds-food-guide': '/posts/monster-hunter-wilds-prep-and-items-guide/',
  '/posts/monster-hunter-wilds-capture-guide': '/posts/monster-hunter-wilds-monster-list-guide/',
  '/posts/bombanana-role-choice': '/posts/bombanana-beginner-guide/',
  '/posts/bombanana-mute-monkey': '/posts/bombanana-beginner-guide/',
  '/posts/bombanana-deaf-monkey': '/posts/bombanana-beginner-guide/',
  '/posts/bombanana-blind-monkey': '/posts/bombanana-beginner-guide/',
  '/posts/bombanana-communication-guide': '/posts/bombanana-beginner-guide/',
  '/posts/bombanana-puzzle-modules': '/posts/bombanana-campaign-guide/',
  '/posts/bombanana-environment-hazards': '/posts/bombanana-campaign-guide/',
  '/posts/bombanana-endless-mode': '/posts/bombanana-custom-mode/',
  '/posts/bombanana-voice-chat-fix': '/posts/bombanana-crash-patch/',
  '/posts/valheim-armor-tier-guide': '/posts/valheim-weapon-tier-list-guide/',
  '/posts/valheim-farming-taming-guide': '/posts/valheim-food-guide/',
  '/posts/valheim-1-0-deep-north-guide': '/posts/valheim-deep-north-in-depth-guide/',
  '/posts/dawnwalker-quest-order-guide': '/posts/dawnwalker-beginner-guide/',
  '/posts/dawnwalker-time-guide': '/posts/dawnwalker-beginner-guide/',
  '/posts/dawnwalker-gear-guide': '/posts/dawnwalker-combat-guide/',
  '/posts/dawnwalker-skill-build-guide': '/posts/dawnwalker-combat-guide/',
  '/posts/dawnwalker-ending-guide': '/posts/dawnwalker-choices-guide/',
  '/posts/dawnwalker-romance-guide': '/posts/dawnwalker-choices-guide/',
  '/posts/dawnwalker-trophy-guide': '/posts/dawnwalker-map-collectibles-guide/',
  '/posts/mewgenics-battle-tactics-guide': '/posts/mewgenics-guide/',
  '/posts/mewgenics-class-guide': '/posts/mewgenics-guide/',
  '/posts/mewgenics-mutation-guide': '/posts/mewgenics-breeding-guide/',
  '/posts/mewgenics-donation-guide': '/posts/mewgenics-house-guide/',
  '/posts/onimusha-combat-guide': '/posts/onimusha-beginner-guide/',
  '/posts/onimusha-difficulty-guide': '/posts/onimusha-beginner-guide/',
  '/posts/onimusha-skill-tree-guide': '/posts/onimusha-upgrade-guide/',
  '/posts/onimusha-soul-farming-guide': '/posts/onimusha-upgrade-guide/',
  '/posts/onimusha-charms-guide': '/posts/onimusha-upgrade-guide/',
  '/posts/onimusha-secrets-hidden-treasures-guide': '/posts/onimusha-collectibles-guide/',
  '/posts/onimusha-spirit-mirror-locations-guide': '/posts/onimusha-collectibles-guide/',
  '/posts/pragmata-hacking-basics': '/posts/pragmata-beginner-guide/',
  '/posts/pragmata-overdrive-guide': '/posts/pragmata-beginner-guide/',
  '/posts/pragmata-shelter-escape-hatch': '/posts/pragmata-beginner-guide/',
  '/posts/pragmata-attack-units': '/posts/pragmata-weapon-system/',
  '/posts/pragmata-defense-units': '/posts/pragmata-weapon-system/',
  '/posts/pragmata-tactical-units': '/posts/pragmata-weapon-system/',
  '/posts/pragmata-primary-units': '/posts/pragmata-weapon-system/',
  '/posts/pragmata-unit-printer': '/posts/pragmata-best-loadout/',
  '/posts/pragmata-firmware-updater': '/posts/pragmata-upgrade-priority/',
  '/posts/pragmata-hacking-nodes': '/posts/pragmata-upgrade-priority/',
  '/posts/pragmata-creator-boss': '/posts/pragmata-sector-guard/',
  '/posts/pragmata-garden-keeper': '/posts/pragmata-sector-guard/',
  '/posts/pragmata-lunadigger': '/posts/pragmata-sector-guard/',
  '/posts/pragmata-final-boss': '/posts/pragmata-sector-guard/',
  '/posts/pragmata-lunatic-mode': '/posts/pragmata-new-game-plus/',
  '/posts/pragmata-red-zone-pure-lunum': '/posts/pragmata-new-game-plus/',
  '/posts/pragmata-unknown-signal': '/posts/pragmata-new-game-plus/',
  '/posts/pragmata-collectibles-100': '/posts/pragmata-achievements-guide/',
  '/posts/pragmata-cabin-stamp-club': '/posts/pragmata-achievements-guide/',
  '/posts/pragmata-fps-optimization': '/posts/pragmata-pc-requirements/',
  '/posts/mortal-shell-2-combat-guide': '/posts/mortal-shell-2-beginner-guide/',
  '/posts/mortal-shell-2-progression-route': '/posts/mortal-shell-2-beginner-guide/',
  '/posts/mortal-shell-2-beacons': '/posts/mortal-shell-2-beginner-guide/',
  '/posts/mortal-shell-2-dungeons': '/posts/mortal-shell-2-beginner-guide/',
  '/posts/mortal-shell-2-eredrim-guide': '/posts/mortal-shell-2-all-shells/',
  '/posts/mortal-shell-2-genessa-guide': '/posts/mortal-shell-2-all-shells/',
  '/posts/mortal-shell-2-late-shells': '/posts/mortal-shell-2-all-shells/',
  '/posts/mortal-shell-2-proxima-guide': '/posts/mortal-shell-2-all-shells/',
  '/posts/mortal-shell-2-tiel-guide': '/posts/mortal-shell-2-all-shells/',
  '/posts/mortal-shell-2-sidearms': '/posts/mortal-shell-2-weapons/',
  '/posts/mortal-shell-2-healing': '/posts/mortal-shell-2-tarforge/',
  '/posts/mortal-shell-2-tarstones': '/posts/mortal-shell-2-tarforge/',
  '/posts/mortal-shell-2-tar-golem': '/posts/mortal-shell-2-zmey/',
  '/posts/mortal-shell-2-droeg': '/posts/mortal-shell-2-zmey/',
  '/posts/mortal-shell-2-hexapod': '/posts/mortal-shell-2-zmey/',
  '/posts/mortal-shell-2-lost-child': '/posts/mortal-shell-2-zmey/',
  '/posts/mortal-shell-2-magdalena': '/posts/mortal-shell-2-zmey/',
  '/posts/mortal-shell-2-malborn': '/posts/mortal-shell-2-zmey/',
  '/posts/mortal-shell-2-monolith': '/posts/mortal-shell-2-zmey/',
  '/posts/mortal-shell-2-nameless-captive': '/posts/mortal-shell-2-zmey/',
  '/posts/mortal-shell-2-orrem': '/posts/mortal-shell-2-zmey/',
  '/posts/mortal-shell-2-sir-isaac': '/posts/mortal-shell-2-zmey/',
  '/posts/mortal-shell-2-collectibles': '/posts/mortal-shell-2-achievements-ngplus/',
  '/posts/random-dice-2-battle-tips-guide': '/posts/random-dice-2-beginner-guide/',
  '/posts/random-dice-2-electric-deck-guide': '/posts/random-dice-2-deck-tier-guide/',
  '/posts/random-dice-2-gear-deck-guide': '/posts/random-dice-2-deck-tier-guide/',
  '/posts/random-dice-2-predation-deck-guide': '/posts/random-dice-2-deck-tier-guide/',
  '/posts/random-dice-2-resonance-deck-guide': '/posts/random-dice-2-deck-tier-guide/',
  '/posts/how-to-fish-fishing-basics': '/posts/how-to-fish-beginner-guide/',
  '/posts/how-to-fish-rods-lures': '/posts/how-to-fish-beginner-guide/',
  '/posts/how-to-fish-boat-radar': '/posts/how-to-fish-beginner-guide/',
  '/posts/how-to-fish-quest-items': '/posts/how-to-fish-island-progression/',
  '/posts/how-to-fish-rocks-tuna-albatross': '/posts/how-to-fish-island-progression/',
  '/posts/how-to-fish-desert-pufferfish': '/posts/how-to-fish-island-progression/',
  '/posts/how-to-fish-forest-piranha': '/posts/how-to-fish-island-progression/',
  '/posts/how-to-fish-grill-food': '/posts/how-to-fish-money-trickshots/',
  '/posts/how-to-fish-drip-variants': '/posts/how-to-fish-money-trickshots/',
  '/posts/how-to-fish-fishipedia': '/posts/how-to-fish-money-trickshots/',
  '/posts/how-to-fish-bean-speedrun': '/posts/how-to-fish-achievements/',
  '/posts/how-to-fish-handyman': '/posts/how-to-fish-achievements/',
  '/posts/how-to-fish-volcano-final-boss': '/posts/how-to-fish-lighthouse-spider-crab/',
  '/posts/how-to-fish-weapon-guide': '/posts/how-to-fish-lighthouse-spider-crab/',
  '/posts/how-to-fish-solo-guide': '/posts/how-to-fish-multiplayer/',
  '/posts/how-to-fish-steam-deck-cloud': '/posts/how-to-fish-pc-issues/',
  '/posts/how-to-fish-gambling': '/posts/how-to-fish-reel-of-fortune/',
};

const normalizePath = (pathname) => pathname.replace(/\/+$/, '');

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = normalizePath(url.pathname);
    const target = REDIRECT_MAP[path];
    if (target) {
      return new Response(null, {
        status: 301,
        headers: {
          Location: target,
          'Cache-Control': 'public, max-age=86400'
        }
      });
    }
    return fetch(request);
  }
};
