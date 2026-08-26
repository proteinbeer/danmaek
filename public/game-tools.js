function initGameTools() {
    const $ = id => document.getElementById(id);
    const pick = list => list[Math.floor(Math.random() * list.length)];
    const clamp = (value, min, max) => Math.min(Math.max(Number(value) || min, min), max);
    const shuffle = list => [...list].sort(() => Math.random() - 0.5);
    const set = (id, html) => {
        const element = $(id);
        if (element) element.innerHTML = html;
    };
    const bind = (id, event, handler) => {
        const element = $(id);
        if (element) element.addEventListener(event, handler);
    };
    const cardLine = text => `<div class="rounded-xl border border-gray-200 bg-zinc-50 px-3 py-2">${text}</div>`;
    const bilingualResult = (original, korean) => `
        <div class="game-bilingual-result">
            <div>${original}</div>
            <div>${korean}</div>
        </div>
    `;
    let rewardAudioContext = null;
    const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
    function playRewardSound(strong = false) {
        try {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (!AudioContextClass) return;
            rewardAudioContext ||= new AudioContextClass();
            const now = rewardAudioContext.currentTime;
            [392, 523.25, strong ? 783.99 : 659.25].forEach((frequency, index) => {
                const oscillator = rewardAudioContext.createOscillator();
                const gain = rewardAudioContext.createGain();
                oscillator.type = index === 2 ? 'triangle' : 'square';
                oscillator.frequency.setValueAtTime(frequency, now + index * 0.055);
                gain.gain.setValueAtTime(0.0001, now + index * 0.055);
                gain.gain.exponentialRampToValueAtTime(strong ? 0.14 : 0.08, now + index * 0.055 + 0.015);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.055 + 0.16);
                oscillator.connect(gain).connect(rewardAudioContext.destination);
                oscillator.start(now + index * 0.055);
                oscillator.stop(now + index * 0.055 + 0.18);
            });
        } catch {}
    }
    function ensureRewardFxStyles() {
        if (document.getElementById('rewardFxStyles')) return;
        const style = document.createElement('style');
        style.id = 'rewardFxStyles';
        style.textContent = `
            .lunch-fireworks { position: fixed; inset: 0; z-index: 250; pointer-events: none; overflow: hidden; }
            .lunch-confetti { position: absolute; left: var(--confetti-origin); bottom: -28px; width: var(--confetti-width); height: var(--confetti-height); border-radius: var(--confetti-radius); background: var(--confetti-color); opacity: 0; transform: translate(-50%, 0) scale(0.45) rotate(0deg); will-change: transform, opacity; animation: lunchConfettiBurst 1.35s cubic-bezier(.12,.72,.16,1) var(--confetti-delay) forwards; }
            .reward-roll-card { grid-column: 1 / -1; min-height: 4.4rem; display: flex; align-items: center; justify-content: center; text-align: center; perspective: 420px; }
            .reward-roll-dice { position: relative; width: 2.9rem; height: 2.9rem; transform-style: preserve-3d; animation: rewardDiceRoll3d 0.72s cubic-bezier(.3,.72,.18,1) infinite; }
            .reward-roll-face { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; border-radius: 0.62rem; border: 1px solid rgba(24,24,27,0.22); background: linear-gradient(145deg, #ffffff, #f4f4f5); box-shadow: inset -8px -8px 14px rgba(24,24,27,0.1), inset 5px 5px 10px rgba(255,255,255,0.92), 0 10px 18px rgba(24,24,27,0.12); color: #18181b; font-size: 1.25rem; font-weight: 900; line-height: 1; backface-visibility: hidden; }
            .reward-roll-face:nth-child(1) { transform: translateZ(1.45rem); }
            .reward-roll-face:nth-child(2) { transform: rotateY(90deg) translateZ(1.45rem); }
            .reward-roll-face:nth-child(3) { transform: rotateY(180deg) translateZ(1.45rem); }
            .reward-roll-face:nth-child(4) { transform: rotateY(-90deg) translateZ(1.45rem); }
            .reward-roll-face:nth-child(5) { transform: rotateX(90deg) translateZ(1.45rem); }
            .reward-roll-face:nth-child(6) { transform: rotateX(-90deg) translateZ(1.45rem); }
            @keyframes rewardDiceRoll3d { 0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateY(0); } 35% { transform: rotateX(120deg) rotateY(170deg) rotateZ(24deg) translateY(-4px); } 70% { transform: rotateX(245deg) rotateY(300deg) rotateZ(-18deg) translateY(1px); } 100% { transform: rotateX(360deg) rotateY(540deg) rotateZ(0deg) translateY(0); } }
            @keyframes lunchConfettiBurst { 0% { opacity: 0; transform: translate(-50%, 0) scale(0.45) rotate(0deg); } 8% { opacity: 1; } 72% { opacity: 1; transform: translate(calc(-50% + var(--confetti-x)), var(--confetti-y)) scale(1) rotate(var(--confetti-rotate)); } 100% { opacity: 0; transform: translate(calc(-50% + var(--confetti-fall-x)), var(--confetti-fall-y)) scale(0.92) rotate(var(--confetti-end-rotate)); } }
        `;
        document.head.appendChild(style);
    }
    function burstRewardConfetti(strong = false) {
        if (!strong) return;
        ensureRewardFxStyles();
        const layer = document.createElement('div');
        layer.className = 'lunch-fireworks';
        document.body.appendChild(layer);
        const colors = ['#f97316', '#facc15', '#ef4444', '#22c55e', '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899', '#ffffff'];
        const count = 72;
        const fragment = document.createDocumentFragment();
        for (let index = 0; index < count; index += 1) {
            const particle = document.createElement('span');
            const origin = 15 + Math.random() * 70;
            const horizontal = (Math.random() - 0.5) * window.innerWidth * 0.9;
            const vertical = -(window.innerHeight * (0.35 + Math.random() * 0.55));
            const rotation = Math.round((Math.random() * 900) - 450);
            particle.className = 'lunch-confetti';
            particle.style.setProperty('--confetti-color', colors[index % colors.length]);
            particle.style.setProperty('--confetti-origin', `${origin}%`);
            particle.style.setProperty('--confetti-x', `${horizontal}px`);
            particle.style.setProperty('--confetti-y', `${vertical}px`);
            particle.style.setProperty('--confetti-fall-x', `${horizontal + ((Math.random() - 0.5) * 28)}px`);
            particle.style.setProperty('--confetti-fall-y', `${vertical + 16 + (Math.random() * 34)}px`);
            particle.style.setProperty('--confetti-rotate', `${rotation}deg`);
            particle.style.setProperty('--confetti-end-rotate', `${rotation + 260 + Math.round(Math.random() * 420)}deg`);
            particle.style.setProperty('--confetti-width', `${8 + Math.round(Math.random() * 8)}px`);
            particle.style.setProperty('--confetti-height', `${12 + Math.round(Math.random() * 13)}px`);
            particle.style.setProperty('--confetti-radius', index % 3 === 0 ? '999px' : '2px');
            particle.style.setProperty('--confetti-delay', `${Math.round(Math.random() * 130)}ms`);
            fragment.appendChild(particle);
        }
        layer.appendChild(fragment);
        window.setTimeout(() => layer.remove(), 1750);
    }
    function rewardRollCard() {
        ensureRewardFxStyles();
        return '<div class="reward-roll-card rounded-xl border border-orange-200 bg-orange-50 px-3 py-3 shadow-sm"><span class="reward-roll-dice" aria-hidden="true"><span class="reward-roll-face">1</span><span class="reward-roll-face">2</span><span class="reward-roll-face">3</span><span class="reward-roll-face">4</span><span class="reward-roll-face">5</span><span class="reward-roll-face">6</span></span></div>';
    }
    async function animateReward(outputId, finalHtml, rollingLabels, strong = false) {
        const output = $(outputId);
        if (!output) return;
        for (let index = 0; index < 12; index += 1) {
            output.innerHTML = rewardRollCard();
            await wait(45 + index * 6);
        }
        output.innerHTML = finalHtml;
        playRewardSound(strong);
        burstRewardConfetti(strong);
    }

    const rarityTheme = {
        normal: {
            label: 'Normal',
            style: 'background:#ffffff;border-color:#d4d4d8;color:#52525b;',
            classes: '',
            chance: 0.7
        },
        rare: {
            label: 'Rare',
            style: 'background:#dbeafe;border-color:#60a5fa;color:#1d4ed8;',
            classes: '',
            chance: 0.84
        },
        epic: {
            label: 'Epic',
            style: 'background:#f3e8ff;border-color:#a855f7;color:#7e22ce;',
            classes: '',
            chance: 0.13
        },
        legendary: {
            label: 'Legendary',
            style: 'background:#fef3c7;border-color:#f59e0b;color:#92400e;',
            classes: 'rarity-legendary',
            chance: 0.025
        },
        mythic: {
            label: 'Mythic',
            style: 'background:#fee2e2;border-color:#ef4444;color:#b91c1c;',
            classes: 'rarity-mythic',
            chance: 0.005
        }
    };
    const koRarityLabel = { normal: '일반', rare: '희귀', epic: '에픽', legendary: '전설', mythic: '신화' };

    function rarityCard(rarity, title, detail = '', labelOverride) {
        const theme = rarityTheme[rarity] || rarityTheme.rare;
        const label = labelOverride || theme.label;
        return `<div class="rounded-xl border px-3 py-2 ${theme.classes}" style="${theme.style}">
            <div class="text-[10px] uppercase tracking-wide" data-sft-no-translate>${label}</div>
            <div class="text-sm font-black">${title}</div>
            ${detail ? `<div class="mt-1 text-[11px] font-bold opacity-80">${detail}</div>` : ''}
        </div>`;
    }

    function getWeight(id, fallback) {
        const element = $(id);
        const value = element ? Number(element.value) : fallback;
        return Number.isFinite(value) && value > 0 ? value : 0;
    }

    function weightedRarity(weights, forceMythic = false) {
        if (forceMythic) return 'mythic';
        const entries = ['normal', 'rare', 'epic', 'legendary', 'mythic'].map(rarity => [rarity, Math.max(Number(weights[rarity]) || 0, 0)]);
        const total = entries.reduce((sum, item) => sum + item[1], 0) || 1;
        let roll = Math.random() * total;
        for (const [rarity, weight] of entries) {
            roll -= weight;
            if (roll <= 0) return rarity;
        }
        return 'normal';
    }

    function probabilityWeights(prefix, defaults) {
        return {
            normal: getWeight(`${prefix}ProbNormal`, defaults.normal),
            rare: getWeight(`${prefix}ProbRare`, defaults.rare),
            epic: getWeight(`${prefix}ProbEpic`, defaults.epic),
            legendary: getWeight(`${prefix}ProbLegendary`, defaults.legendary),
            mythic: getWeight(`${prefix}ProbMythic`, defaults.mythic)
        };
    }

    let gachaPity = 0;
    const heroes = {
        normal: ['소환 실패', '먼지 조각', '빈 각인', '훈련 토큰', '흔한 불꽃'],
        mythic: ['아우렐리아 스타하트', '적월의 녹티스', '세라핀 제로', '카엘 노바 프라임'],
        legendary: ['솔 나이트', '루나 베이', '오리온 베일', '닉스 오로라', '아스트라 노바'],
        epic: ['미라 플럭스', '룬 아틀라스', '케이드 엠버', '아이리스 게일', '베가 프로스트'],
        rare: ['루크', '피프', '니아', '타로', '리오', '모스']
    };
    const defaultGachaWeights = { normal: 70, rare: 20, epic: 8, legendary: 1.5, mythic: 0.5 };
    const defaultLootWeights = { normal: 55, rare: 30, epic: 11, legendary: 3, mythic: 1 };
    const fixedGameLootWeights = { normal: 48, rare: 32, epic: 14, legendary: 5, mythic: 1 };

    function gachaPull() {
        gachaPity += 1;
        const rarity = weightedRarity(probabilityWeights('gacha', defaultGachaWeights), gachaPity >= 90);
        if (rarity === 'mythic') gachaPity = 0;
        return { rarity, name: pick(heroes[rarity]) };
    }

    async function renderGachaResults(results) {
        set('gachaPity', `${gachaPity} / 90`);
        const finalHtml = results.map(item => rarityCard(item.rarity, item.name, '영웅 소환', koRarityLabel[item.rarity])).join('');
        const strong = results.some(item => item.rarity === 'legendary' || item.rarity === 'mythic');
        await animateReward('gachaResults', finalHtml, Object.values(heroes).flat(), strong);
    }

    bind('gachaPullOne', 'click', () => renderGachaResults([gachaPull(false)]));
    bind('gachaPullTen', 'click', () => {
        const results = Array.from({ length: 10 }, () => gachaPull());
        renderGachaResults(results);
    });

    const lootByRarity = {
        normal: ['빈 주머니', '휘어진 못', '평범한 천', '금 깨진 자갈', '나무 토큰'],
        mythic: ['식김관', '용심유물', '적성 계약'],
        legendary: ['불사조 왕관', '별벼림 검', '천상 마적'],
        epic: ['공허 나침반', '용 비늘 갑옷', '폭풍 지팡이'],
        rare: ['은 열쇠', '달 부적', '서리 단검']
    };

    function lootDrop() {
        const rarity = weightedRarity(probabilityWeights('loot', defaultLootWeights), false);
        const name = pick(lootByRarity[rarity]);
        return { rarity, name, html: rarityCard(rarity, name, '아이템 박스 보상', koRarityLabel[rarity]) };
    }
    bind('lootOpenOne', 'click', () => {
        const reward = lootDrop();
        animateReward('lootBoxResults', reward.html, Object.values(lootByRarity).flat(), reward.rarity === 'legendary' || reward.rarity === 'mythic');
    });
    bind('lootOpenTen', 'click', () => {
        const rewards = Array.from({ length: 10 }, lootDrop);
        animateReward('lootBoxResults', rewards.map(item => item.html).join(''), Object.values(lootByRarity).flat(), rewards.some(item => item.rarity === 'legendary' || item.rarity === 'mythic'));
    });

    bind('rollDice', 'click', () => {
        const sides = clamp($('diceSides').value, 2, 100);
        const count = clamp($('diceCount').value, 1, 20);
        const mod = Number($('diceModifier').value) || 0;
        const rolls = Array.from({ length: count }, () => Math.floor(Math.random() * sides) + 1);
        const total = rolls.reduce((sum, value) => sum + value, 0) + mod;
        set('diceResult', `굴림: ${rolls.join(', ')}<br>합계: ${total}`);
    });

    const characterNames = ['Mira Ashvale', 'Korin Thorne', 'Sel Veyra', 'Alden Frost', 'Nyra Sol', 'Taro Vale'];
    const classes = ['Warden', 'Spellblade', 'Ranger', 'Oracle', 'Brawler', 'Artificer'];
    const origins = ['sky island', 'lost archive', 'desert city', 'frozen port', 'moon temple'];
    const weapons = ['crystal spear', 'clockwork bow', 'ember blade', 'rune staff', 'gravity hammer'];
    const traits = ['reckless but loyal', 'quietly brilliant', 'haunted by a promise', 'always smiling', 'never backs down'];
    const flaws = ['trusts the wrong people', 'hides every injury', 'cannot resist forbidden magic', 'runs from old debts'];
    const goals = ['restore a ruined home', 'find a vanished mentor', 'break a family curse', 'prove a false legend true'];
    const backstories = [
        'They survived a disaster that everyone else remembers differently.',
        'They once guarded a secret door and still hear it calling at night.',
        'They carry a map that changes whenever someone lies nearby.',
        'They were raised by rivals and learned to solve problems from both sides.'
    ];
    bind('generateRpgCharacter', 'click', () => {
        const name = pick(characterNames);
        const role = pick(classes);
        const origin = pick(origins);
        const weapon = pick(weapons);
        const trait = pick(traits);
        const flaw = pick(flaws);
        const goal = pick(goals);
        const backstory = pick(backstories);
        const ko = {
            'Mira Ashvale': '미라 애쉬베일', 'Korin Thorne': '코린 손', 'Sel Veyra': '셀 베이라', 'Alden Frost': '알덴 프로스트', 'Nyra Sol': '나이라 솔', 'Taro Vale': '타로 베일',
            Warden: '수호자', Spellblade: '마검사', Ranger: '순찰자', Oracle: '예언자', Brawler: '싸움꾼', Artificer: '장인',
            'sky island': '하늘섬', 'lost archive': '잃어버린 기록 보관소', 'desert city': '사막 도시', 'frozen port': '얼어붙은 항구', 'moon temple': '달의 신전',
            'crystal spear': '수정 창', 'clockwork bow': '태엽 활', 'ember blade': '잿불 검', 'rune staff': '룬 지팡이', 'gravity hammer': '중력 망치',
            'reckless but loyal': '무모하지만 의리 있음', 'quietly brilliant': '조용하지만 뛰어남', 'haunted by a promise': '오래된 약속에 사로잡힘', 'always smiling': '늘 웃고 있음', 'never backs down': '절대 물러서지 않음',
            'trusts the wrong people': '믿으면 안 되는 사람을 믿음', 'hides every injury': '상처를 늘 숨김', 'cannot resist forbidden magic': '금지된 마법을 거부하지 못함', 'runs from old debts': '오래된 빚에서 도망침',
            'restore a ruined home': '폐허가 된 고향을 되살리기', 'find a vanished mentor': '사라진 스승 찾기', 'break a family curse': '가문의 저주 깨기', 'prove a false legend true': '거짓 전설이 진짜임을 증명하기',
            'They survived a disaster that everyone else remembers differently.': '모두가 다르게 기억하는 재난에서 살아남았습니다.',
            'They once guarded a secret door and still hear it calling at night.': '한때 비밀 문을 지켰고, 아직도 밤마다 그 부름을 듣습니다.',
            'They carry a map that changes whenever someone lies nearby.': '근처에서 누군가 거짓말을 하면 변하는 지도를 들고 다닙니다.',
            'They were raised by rivals and learned to solve problems from both sides.': '라이벌들에게 길러져 양쪽 방식으로 문제를 푸는 법을 배웠습니다.'
        };
        set('rpgCharacterResult', bilingualResult(`
            <strong>${name}</strong><br>
            Class: ${role} from a ${origin}<br>
            Weapon: ${weapon}<br>
            Trait: ${trait}<br>
            Flaw: ${flaw}<br>
            Goal: ${goal}<br>
            Backstory: ${backstory}
        `, `
            <strong>${ko[name]}</strong><br>
            직업: ${ko[role]} · 출신: ${ko[origin]}<br>
            무기: ${ko[weapon]}<br>
            특징: ${ko[trait]}<br>
            약점: ${ko[flaw]}<br>
            목표: ${ko[goal]}<br>
            배경: ${ko[backstory]}
        `));
    });

    bind('generateQuest', 'click', () => {
        const objectives = ['Recover', 'Escort', 'Investigate', 'Protect', 'Steal back', 'Seal away'];
        const objects = ['a broken relic', 'a missing heir', 'a cursed map', 'the last lantern', 'a silent oracle'];
        const places = ['under the glass ruins', 'inside a moving tower', 'beneath the old arena', 'near the mirror lake'];
        const enemies = ['a masked guild', 'restless spirits', 'a jealous knight', 'wild clockwork beasts'];
        const complications = ['the employer is hiding the real reason', 'the target wants to be found', 'the reward is cursed', 'time resets at sunset'];
        const allies = ['a nervous cartographer', 'a retired monster hunter', 'a talking lock', 'a runaway noble'];
        const rewards = ['ancient favor', 'rare ore', 'a forbidden spell', 'a royal pardon'];
        const objective = pick(objectives);
        const object = pick(objects);
        const place = pick(places);
        const enemy = pick(enemies);
        const ally = pick(allies);
        const complication = pick(complications);
        const reward = pick(rewards);
        const ko = {
            Recover: '되찾기', Escort: '호위하기', Investigate: '조사하기', Protect: '지키기', 'Steal back': '몰래 되찾기', 'Seal away': '봉인하기',
            'a broken relic': '부서진 유물', 'a missing heir': '실종된 후계자', 'a cursed map': '저주받은 지도', 'the last lantern': '마지막 등불', 'a silent oracle': '침묵하는 예언자',
            'under the glass ruins': '유리 폐허 아래', 'inside a moving tower': '움직이는 탑 안', 'beneath the old arena': '오래된 투기장 밑', 'near the mirror lake': '거울 호수 근처',
            'a masked guild': '가면을 쓴 길드', 'restless spirits': '잠들지 못한 영혼들', 'a jealous knight': '질투심 많은 기사', 'wild clockwork beasts': '날뛰는 태엽 짐승들',
            'the employer is hiding the real reason': '의뢰인이 진짜 이유를 숨기고 있음', 'the target wants to be found': '대상이 발견되기를 바라고 있음', 'the reward is cursed': '보상이 저주받았음', 'time resets at sunset': '해질 때 시간이 되감김',
            'a nervous cartographer': '긴장한 지도 제작자', 'a retired monster hunter': '은퇴한 괴물 사냥꾼', 'a talking lock': '말하는 자물쇠', 'a runaway noble': '도망친 귀족',
            'ancient favor': '고대의 호의', 'rare ore': '희귀 광석', 'a forbidden spell': '금지된 주문', 'a royal pardon': '왕실 사면장'
        };
        set('questResult', bilingualResult(`
            <strong>${objective} ${object}</strong><br>
            Location: ${place}<br>
            Threat: ${enemy}<br>
            Ally: ${ally}<br>
            Twist: ${complication}<br>
            Reward: ${reward}
        `, `
            <strong>${ko[object]} ${ko[objective]}</strong><br>
            장소: ${ko[place]}<br>
            위협: ${ko[enemy]}<br>
            조력자: ${ko[ally]}<br>
            반전: ${ko[complication]}<br>
            보상: ${ko[reward]}
        `));
    });

    bind('generateGameLoot', 'click', () => {
        const prefixes = ['Ancient', 'Radiant', 'Cursed', 'Swift', 'Frozen', 'Wild', 'Hollow', 'Royal'];
        const bases = ['Blade', 'Amulet', 'Bow', 'Cloak', 'Ring', 'Lantern', 'Gauntlet', 'Grimoire'];
        const stats = ['+12 Power', '+8 Speed', '+20 Health', '+15 Focus', '+10 Luck', '+18 Guard'];
        const effects = ['burns nearby foes', 'reveals hidden paths', 'heals after victory', 'echoes the last spell', 'turns fear into shield power'];
        const drawbacks = ['whispers during rests', 'grows heavier after each battle', 'attracts rival treasure hunters', 'refuses to work under moonlight'];
        const lore = [
            'Found in a chest sealed beneath an abandoned champion hall.',
            'Forged for a hero who disappeared before the final battle.',
            'Said to remember every owner who failed its trial.',
            'Recovered from a vault that only opens during storms.'
        ];
        const rarity = weightedRarity(fixedGameLootWeights, false);
        const prefix = pick(prefixes);
        const base = pick(bases);
        const stat = pick(stats);
        const effect = pick(effects);
        const drawback = pick(drawbacks);
        const itemLore = pick(lore);
        const ko = {
            Ancient: '고대의', Radiant: '찬란한', Cursed: '저주받은', Swift: '날쌘', Frozen: '얼어붙은', Wild: '야생의', Hollow: '공허한', Royal: '왕실의',
            Blade: '검', Amulet: '부적', Bow: '활', Cloak: '망토', Ring: '반지', Lantern: '등불', Gauntlet: '건틀릿', Grimoire: '마도서',
            Power: '공격력', Speed: '속도', Health: '체력', Focus: '집중력', Luck: '행운', Guard: '방어',
            'burns nearby foes': '근처 적을 불태움', 'reveals hidden paths': '숨겨진 길을 드러냄', 'heals after victory': '승리 후 회복함', 'echoes the last spell': '마지막 주문을 메아리침', 'turns fear into shield power': '공포를 방패 힘으로 바꿈',
            'whispers during rests': '휴식 중 속삭임', 'grows heavier after each battle': '전투마다 더 무거워짐', 'attracts rival treasure hunters': '경쟁 보물 사냥꾼을 끌어들임', 'refuses to work under moonlight': '달빛 아래에서 작동하지 않음',
            'Found in a chest sealed beneath an abandoned champion hall.': '버려진 챔피언 회관 아래 봉인된 상자에서 발견되었습니다.',
            'Forged for a hero who disappeared before the final battle.': '최후의 전투 전에 사라진 영웅을 위해 제작되었습니다.',
            'Said to remember every owner who failed its trial.': '시험에 실패한 모든 주인을 기억한다고 전해집니다.',
            'Recovered from a vault that only opens during storms.': '폭풍이 칠 때만 열리는 금고에서 회수되었습니다.'
        };
        const koStat = stat.replace(/Power|Speed|Health|Focus|Luck|Guard/g, match => ko[match]);
        set('gameLootResult', bilingualResult(
            rarityCard(rarity, `${prefix} ${base}`, `${stat} - ${effect}<br>Drawback: ${drawback}<br>Lore: ${itemLore}`),
            rarityCard(rarity, `${ko[prefix]} ${ko[base]}`, `${koStat} - ${ko[effect]}<br>단점: ${ko[drawback]}<br>설정: ${ko[itemLore]}`, koRarityLabel[rarity])
        ));
    });

    function namesFrom(id) {
        const element = $(id);
        return ((element && element.value) || '').split(/\r?\n/).map(name => name.trim()).filter(Boolean);
    }

    bind('pickTeams', 'click', () => {
        const names = shuffle(namesFrom('teamNames'));
        const count = clamp($('teamCount').value, 2, 12);
        const teams = Array.from({ length: count }, () => []);
        names.forEach((name, index) => teams[index % count].push(name));
        set('teamResult', teams.map((team, index) => cardLine(`팀 ${index + 1}: ${team.join(', ') || '-'}`)).join(''));
    });

    bind('generateBracket', 'click', () => {
        const players = shuffle(namesFrom('bracketNames'));
        if (players.length < 2) {
            set('bracketResult', cardLine('Add at least two players.'));
            return;
        }
        if (players.length % 2) players.push('BYE');
        const matches = [];
        for (let index = 0; index < players.length; index += 2) {
            matches.push(cardLine(`${players[index]} vs ${players[index + 1]}`));
        }
        set('bracketResult', matches.join(''));
    });

    bind('flipCoin', 'click', () => set('decisionResult', pick(['앞면', '뒷면'])));
    bind('rollDecisionDie', 'click', () => set('decisionResult', `d6: ${Math.floor(Math.random() * 6) + 1}`));
    bind('pickDecision', 'click', () => {
        const options = namesFrom('decisionOptions');
        set('decisionResult', options.length ? pick(options) : '항목을 한 줄에 하나씩 입력해 주세요.');
    });

    let reactionTimer = null;
    let reactionReadyAt = 0;
    function setReactionPad(pad, text, stateClass = '') {
        pad.className = `reaction-pad min-h-32 rounded-2xl border bg-zinc-100 px-4 py-8 text-sm font-black text-zinc-700 cursor-pointer ${stateClass}`.trim();
        pad.innerHTML = `<span>${text}</span>`;
    }
    bind('reactionPad', 'click', () => {
        const pad = $('reactionPad');
        if (reactionReadyAt) {
            const ms = Date.now() - reactionReadyAt;
            reactionReadyAt = 0;
            setReactionPad(pad, '시작', 'border-gray-200');
            set('reactionResult', `${ms} ms`);
            return;
        }
        if (reactionTimer) {
            clearTimeout(reactionTimer);
            reactionTimer = null;
            set('reactionResult', '너무 빨라요. 다시 시도하세요.');
            setReactionPad(pad, '시작', 'border-gray-200');
            return;
        }
        setReactionPad(pad, '준비', 'is-waiting border-emerald-300');
        set('reactionResult', '--');
        reactionTimer = setTimeout(() => {
            reactionTimer = null;
            reactionReadyAt = Date.now();
            setReactionPad(pad, '클릭!', 'is-ready border-emerald-300 bg-emerald-100 text-emerald-800');
        }, 900 + Math.random() * 2200);
    });

    let memoryStage = 1;
    let memoryFirst = null;
    let memoryLock = false;
    let memoryMatched = 0;
    let memoryTimer = null;
    let memoryRoundId = 0;
    let memoryTimeExpired = false;
    const maxMemoryPairs = 18;
    const memorySymbols = [
        '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮',
        '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🦄', '🐝', '🦋', '🐞', '🐢', '🐙',
        '🍎', '🍊', '🍋', '🍉', '🍇', '🍓', '🫐', '🍒', '🍑', '🥝', '🍅', '🥕',
        '🌽', '🥑', '🍄', '🥐', '🍞', '🧀', '🍔', '🍕', '🌮', '🍣', '🍙', '🍪',
        '🍩', '🧁', '🍰', '🍫', '🍿', '🥨', '🥞', '🧇', '🍦', '🍭', '🥤', '☕'
    ];

    function stopMemoryTimer() {
        if (memoryTimer) clearInterval(memoryTimer);
        memoryTimer = null;
        $('memoryTimerBox')?.classList.remove('is-low-time');
    }

    function startMemoryTimer(pairCount, roundId) {
        stopMemoryTimer();
        const totalSeconds = 3 * (memoryStage <= 25
            ? Math.round(pairCount * (7 - (memoryStage - 1) * 0.08))
            : Math.max(8, Math.round(91 * Math.pow(0.965, memoryStage - 25))));
        const deadline = Date.now() + totalSeconds * 1000;
        const update = () => {
            if (roundId !== memoryRoundId) return stopMemoryTimer();
            const remainingMs = Math.max(0, deadline - Date.now());
            const remainingRatio = Math.max(0, Math.min(1, remainingMs / (totalSeconds * 1000)));
            const timerBar = $('memoryTimerBar');
            const timerBox = $('memoryTimerBox');
            if (timerBar) {
                timerBar.style.width = `${remainingRatio * 100}%`;
                timerBar.style.backgroundColor = '#18181b';
                timerBar.setAttribute('aria-valuenow', String(Math.round(remainingRatio * 100)));
            }
            timerBox?.classList.toggle('is-low-time', remainingRatio <= 1 / 3 && remainingMs > 0);
            if (remainingMs > 0) return;
            stopMemoryTimer();
            memoryTimeExpired = true;
            memoryLock = true;
            set('memoryResult', `시간 종료! 스테이지 ${memoryStage} 다시 시작...`);
            setTimeout(() => {
                if (roundId === memoryRoundId) startMemoryGame(false);
            }, 900);
        };
        update();
        memoryTimer = setInterval(update, 200);
    }

    function startMemoryGame(resetStage = false) {
        const grid = $('memoryGrid');
        if (!grid) return;
        if (resetStage) memoryStage = 1;
        stopMemoryTimer();
        memoryRoundId += 1;
        const roundId = memoryRoundId;
        memoryFirst = null;
        memoryLock = false;
        memoryTimeExpired = false;
        memoryMatched = 0;
        const pairCount = Math.min(maxMemoryPairs, memoryStage + 1);
        const symbols = shuffle([...memorySymbols]).slice(0, pairCount);
        const deck = shuffle([...symbols, ...symbols]);
        const columnCount = Math.min(8, Math.max(4, Math.ceil(Math.sqrt(deck.length))));
        grid.style.gridTemplateColumns = `repeat(${columnCount}, minmax(0, 1fr))`;
        grid.innerHTML = deck.map(symbol => `<button type="button" data-symbol="${symbol}" class="memory-card flex items-center justify-center rounded-xl border border-gray-200 bg-zinc-100 px-2 py-3 text-2xl font-black text-zinc-100 cursor-pointer">?</button>`).join('');
        set('memoryStage', String(memoryStage));
        set('memoryResult', `0 / ${pairCount}`);
        startMemoryTimer(pairCount, roundId);
    }

    bind('newMemoryGame', 'click', () => startMemoryGame(true));
    const memoryGrid = $('memoryGrid');
    if (memoryGrid) {
        memoryGrid.addEventListener('click', event => {
            const button = event.target.closest('.memory-card');
            if (!button || memoryLock || button.dataset.done === 'true' || button === memoryFirst) return;
            button.textContent = button.dataset.symbol;
            button.classList.remove('text-zinc-100');
            if (!memoryFirst) {
                memoryFirst = button;
                return;
            }
            const pairCount = Math.min(maxMemoryPairs, memoryStage + 1);
            if (memoryFirst.dataset.symbol === button.dataset.symbol) {
                memoryMatched += 1;
                memoryFirst.dataset.done = 'true';
                button.dataset.done = 'true';
                memoryFirst.classList.add('is-matched', 'bg-emerald-50', 'border-emerald-200', 'text-emerald-800');
                button.classList.add('is-matched', 'bg-emerald-50', 'border-emerald-200', 'text-emerald-800');
                memoryFirst = null;
                if (memoryMatched === pairCount) {
                    stopMemoryTimer();
                    set('memoryResult', `스테이지 클리어! 다음 스테이지가 시작됩니다.`);
                    memoryLock = true;
                    const roundId = memoryRoundId;
                    setTimeout(() => {
                        if (roundId !== memoryRoundId) return;
                        memoryStage += 1;
                        startMemoryGame(false);
                    }, 700);
                    return;
                }
            } else {
                memoryLock = true;
                const firstCard = memoryFirst;
                const secondCard = button;
                const roundId = memoryRoundId;
                firstCard.classList.add('is-missed', 'border-red-200', 'bg-red-50', 'text-red-800');
                button.classList.add('is-missed', 'border-red-200', 'bg-red-50', 'text-red-800');
                setTimeout(() => {
                    if (roundId !== memoryRoundId) return;
                    firstCard.textContent = '?';
                    secondCard.textContent = '?';
                    firstCard.classList.remove('is-missed', 'border-red-200', 'bg-red-50', 'text-red-800');
                    secondCard.classList.remove('is-missed', 'border-red-200', 'bg-red-50', 'text-red-800');
                    firstCard.classList.add('text-zinc-100');
                    secondCard.classList.add('text-zinc-100');
                    memoryFirst = null;
                    memoryLock = memoryTimeExpired;
                }, 650);
            }
            set('memoryResult', `${memoryMatched} / ${pairCount}`);
        });
        if (window.SFT_TOOL_PAGE?.slug === 'memory-card-game') startMemoryGame(true);
    }

    const impossibleChoiceSeeds = [
        { q: '영구적 이점을 선택하세요.', a: ['누군가 거짓말할 때를 항상 알 수 있다', 2, 0, 1, 1], b: ['항상 딱 맞는 말을 할 수 있다', 0, 1, 2, 1] },
        { q: '어떤 미래를 받아들이겠습니까?', a: ['놀라움 없는 평화로운 삶', -1, 2, 1, -1], b: ['발견으로 가득한 혼란스러운 삶', 2, -1, 0, 2] },
        { q: '불가능한 능력 하나를 선택하세요.', a: ['당신 빼고 모든 사람의 시간을 멈춘다', 2, 0, -1, 2], b: ['매일 대화 하나를 되감는다', 0, 1, 2, -1] },
        { q: '기억 하나만 남을 수 있습니다.', a: ['가장 행복했던 날', 0, 2, 2, -1], b: ['가장 중요한 교훈', 2, 0, 0, 1] },
        { q: '10년을 살아야 할 곳은?', a: ['아무도 모르는 아름다운 도시', 2, 0, -1, 1], b: ['사랑하는 모든 사람이 있는 지루한 마을', -1, 2, 2, -1] },
        { q: '성공의 대가를 고르세요.', a: ['일한 공로를 절대 인정받지 못한다', 0, 1, 2, 1], b: ['유명하지만 계속 오해받는다', 1, -1, -1, 2] },
        { q: '어떤 진실을 알고 싶겠습니까?', a: ['당신의 이야기가 어떻게 끝나는지', 2, -1, 0, 2], b: ['모두가 당신에 대해 진짜로 생각하는 것', 1, 0, 2, 1] },
        { q: '기묘한 동반자를 선택하세요.', a: ['항상 솔직한 로봇', 1, 2, 0, 0], b: ['허튼소리하지만 훌륭한 충고를 하는 유령', 2, -1, 1, 2] },
        { q: '문 하나를 열어야 합니다.', a: ['지구 어딘가 무작위 장소로 통하는 문', 2, 0, 0, 2], b: ['과거의 한 순간으로 통하는 문', 0, 2, 2, -1] },
        { q: '어떤 제약을 받겠습니까?', a: ['다시는 화면을 보지 못한다', 1, 1, 0, 2], b: ['집에서 10km 이상 떠나지 못한다', -1, 2, 1, -2] },
        { q: '사회적 초능력 하나를 선택하세요.', a: ['모든 낯선 사람의 신뢰를 얻는다', 0, 0, 2, 2], b: ['다시는 수치심을 느끼지 않는다', 1, 1, -1, 2] },
        { q: '어떤 세계를 방문하겠습니까?', a: ['과거의 완벽한 시뮬레이션', 2, 1, 0, 0], b: ['500년 후 예측 불가능한 도시', 2, -1, 0, 2] },
        { q: '영원히 따라다닐 것을 선택하세요.', a: ['나만의 테마 음악', 1, 0, 1, 2], b: ['생각을 큰 소리로 읽어주는 해설자', 2, -1, -1, 1] },
        { q: '하나만 지킬 수 있습니다.', a: ['찍은 모든 사진', 0, 2, 2, -1], b: ['보낸 모든 메시지', 1, 1, 2, 0] },
        { q: '어떤 거래가 더 좋겠습니까?', a: ['자유 시간 두 배, 수입 절반', 0, 2, 1, 1], b: ['수입 두 배, 모든 주말을 잃는다', -1, -1, 0, 2] },
        { q: '완벽한 기술을 고르세요.', a: ['모든 언어를 이해한다', 2, 0, 2, 1], b: ['모든 악기를 마스터한다', 1, 1, 1, 2] },
        { q: '어떤 미스터리는 영원히 남아야 합니다?', a: ['외계인이 존재하는지', 1, 1, 0, 0], b: ['가장 큰 결정이 옳았는지', 0, -1, 1, 2] },
        { q: '독특한 집을 선택하세요.', a: ['순간이동 가능한 작은 오두막', 2, 1, 0, 2], b: ['나갈 수 없는 거대한 저택', -2, 2, 0, -1] },
        { q: '인간에서 지우고 싶은 것은?', a: ['거짓말할 수 있는 능력', 0, 1, 2, 1], b: ['두려움이라는 감정', 1, -1, 0, 2] },
        { q: '두 번째 기회를 선택하세요.', a: ['인생 전체를 다시 살 수 있는 1년', 1, 2, 1, 0], b: ['매주 하나의 결정을 다시 할 수 있다', 0, 0, 1, 2] },
        { q: '어떤 부담을 지겠습니까?', a: ['다른 모든 사람의 감정을 느낀다', 0, -1, 3, -1], b: ['아무도 당신의 감정을 이해할 수 없다', 1, 1, -2, 2] },
        { q: '보장된 결과 하나를 고르세요.', a: ['친구들이 모두 꿈을 이룬다', 0, 1, 3, 0], b: ['당신이 가장 큰 꿈을 이룬다', 1, 0, -1, 3] },
        { q: '매일의 리셋을 선택하세요.', a: ['다른 나라에서 눈을 뜬다', 3, -2, 0, 2], b: ['유용한 재능 하나가 바뀐 채로 눈을 뜬다', 2, 0, 1, 1] },
        { q: '현실이 따라야 할 규칙은?', a: ['좋은 의도가 항상 중요하다', 0, 1, 3, -1], b: ['좋은 결과가 항상 중요하다', 1, 0, -1, 2] }
    ];
    const impossibleChoicePrompts = [
        '어떤 불가능한 미래를 받아들이겠습니까?', '살고 싶은 삶을 선택하세요.',
        '하나의 길만 남았습니다. 어떤 것?', '어떤 기묘한 거래를 하겠습니까?',
        '사라지기 전에 선택하세요.', '덜 불가능하게 들리는 현실은?',
        '당신의 본능이 지키려는 것은?', '어떤 문을 열겠습니까?',
        '감수할 수 있는 위험을 고르세요.', '더 당신 같은 트레이드오프는?',
        '하나의 선택이 영구됩니다. 고르세요.', '어떤 모험을 받아들이겠습니까?',
        '이 불가능한 세계에서 더 중요한 것은?', '어떤 운명에 더 직면하겠습니까?',
        '다음 삶의 규칙을 선택하세요.', '숨겨진 대가가 있는 선물은?',
        '발을 들일 미지의 것은?', '포기할 수 없는 것은?',
        '불가능한 이점을 선택하세요.', '어떤 이야기가 되고 싶겠습니까?'
    ];
    const impossibleChoiceBanks = [
        {
            score: [3, -1, 0, 1],
            options: [
                '매일 밤 거리가 변하는 도시를 탐험한다', '시간 너머 도서관에서 책 한 권을 읽는다',
                '매주 월요일마다 다른 나라에서 눈을 뜬다', '우주의 경계 너머에 무엇이 있는지 발견한다',
                '모든 동물의 언어를 이해한다', '지도 없이 미지의 행성을 방문한다',
                '만지는 모든 물건의 잊혀진 역사를 본다', '천 명의 낯선 사람이 나누는 꿈에 들어간다',
                '역사의 무작위 연도로 통하는 문을 연다', '새로 만든 세계 안에서 한 달을 보낸다',
                '미해결 미스터리 하나의 답을 안다', '해가 뜰 때마다 스스로 다시 그려지는 지도를 따른다',
                '아무도 기록하지 않은 지적 종족을 만난다', '길을 잃을 때마다 새로운 기술을 배운다',
                '방문한 모든 장소를 완벽하게 기억한다'
            ]
        },
        {
            score: [-1, 3, 1, -1],
            options: [
                '영원히 완벽한 같은 집에서 평화롭게 산다', '가장 행복한 날을 고치지 않고 반복할 수 있다',
                '사랑하는 사람들에게 항상 충분한 시간이 있다', '내일 나쁜 놀라움이 결코 오지 않는다는 것을 안다',
                '아무도 뺏을 수 없는 작은 공간을 가진다', '현재 소중히 여기는 모든 우정을 평생 유지한다',
                '매일 완전히 쉰 상태로 눈을 뜬다', '항상 의미 있는 간단한 직업을 가진다',
                '소중한 물건을 다시는 잃지 않는다', '모든 상황에서 자신이 어디에 속하는지 정확히 안다',
                '위로가 되는 전통 하나를 영원히 지킨다', '어려운 결정을 일주일 미리 할 수 있다',
                '모든 여정에서 안전하게 집으로 돌아간다', '마감, 알람, 예상치 못한 전화 없이 산다',
                '나머지 인생 동안 완벽한 계절 하나를 보존한다'
            ]
        },
        {
            score: [0, 1, 3, -1],
            options: [
                '외로운 모든 사람을 하루 동안 이해받게 해준다', '가장 큰 기회를 가장 친한 친구에게 준다',
                '판단하기 전에 상대방의 감정을 느낀다', '종결 없는 이별을 한 관계를 복구한다',
                '가족이 가장 행복한 기억만 기억하게 해준다', '한 낯선 사람의 가장 깊은 후회를 없앤다',
                '열 명이 당신 이름 모른 채 성공하게 도운다', '누군가 아플 때 항상 올바른 말을 찾는다',
                '만나는 모든 사람과 행운을 절반씩 나눈다', '친구가 몰래 도움이 필요할 때를 항상 안다',
                '적 하나를 평생 동맹으로 만든다', '한 약속이 깨지지 않게 만든다',
                '사랑하는 사람의 두려움을 대신 짊어져 용기 내게 해준다', '당신을 위한 두 번째 기회를 다른 사람에게 준다',
                '갈등하는 공동체가 다시 서로 신뢰하게 해준다'
            ]
        },
        {
            score: [1, -1, -1, 3],
            options: [
                '인생을 완전히 다시 만들 수 있는 보장된 기회를 잡는다', '아무도 돌아오지 못할 원정을 이끈다',
                '일 동안 하고 싶은 말을 있는 그대로 한다', '진심으로 믿는 꿈 하나에 모든 것을 건다',
                '세계 최고 전문가에게 공개적으로 도전한다', '가져갈 수 있는 것만으로 내일부터 새로 시작한다',
                '지시 없는 강력한 직책을 맡는다', '모든 계획이 불확실해지더라도 자유를 택한다',
                '아무도 되돌릴 수 없는 결정 하나를 내린다', '역사적 업적을 위해 명성을 교환한다',
                '아무도 이해하지 못하는 기술을 제일 먼저 시험한다', '모든 사람 앞에서 비인기 있는 진실을 변호한다',
                '평생에 한 번뿐인 임무를 위해 안락함을 뒤로 한다', '누구에게도 말하기 전에 가장 대담한 아이디어를 실행한다',
                '한 번의 불가능한 위기 동안 도시의 책임을 진다'
            ]
        }
    ];
    const generatedImpossibleChoices = [];
    let generatedChoiceIndex = 0;
    for (let leftBank = 0; leftBank < impossibleChoiceBanks.length; leftBank += 1) {
        for (let rightBank = leftBank + 1; rightBank < impossibleChoiceBanks.length; rightBank += 1) {
            impossibleChoiceBanks[leftBank].options.forEach((leftText, leftIndex) => {
                impossibleChoiceBanks[rightBank].options.forEach((rightText, rightIndex) => {
                    const swapSides = (leftIndex + rightIndex + leftBank + rightBank) % 2 === 1;
                    const left = [leftText, ...impossibleChoiceBanks[leftBank].score];
                    const right = [rightText, ...impossibleChoiceBanks[rightBank].score];
                    generatedImpossibleChoices.push({
                        q: impossibleChoicePrompts[generatedChoiceIndex % impossibleChoicePrompts.length],
                        a: swapSides ? right : left,
                        b: swapSides ? left : right
                    });
                    generatedChoiceIndex += 1;
                });
            });
        }
    }
    const impossibleChoices = [
        ...impossibleChoiceSeeds,
        ...shuffle(generatedImpossibleChoices).slice(0, 500 - impossibleChoiceSeeds.length)
    ];

    if (!$('impossibleChoicePulseStyle')) {
        const pulseStyle = document.createElement('style');
        pulseStyle.id = 'impossibleChoicePulseStyle';
        pulseStyle.textContent = `
            @keyframes impossibleChoicePulseA {
                0%, 49.99% { border-color:#fed7aa; background:#fffaf5; box-shadow:0 0 0 2px rgba(251,146,60,.08); }
                50%, 100% { border-color:#e5e7eb; background:#fff; box-shadow:none; }
            }
            @keyframes impossibleChoicePulseB {
                0%, 49.99% { border-color:#e5e7eb; background:#fff; box-shadow:none; }
                50%, 100% { border-color:#fed7aa; background:#fffaf5; box-shadow:0 0 0 2px rgba(251,146,60,.08); }
            }
            @keyframes impossibleChoiceSelected {
                0% { border-color:#fb923c; background:#fff7ed; box-shadow:0 0 0 0 rgba(249,115,22,0); }
                45% { border-color:#f97316; background:#ffedd5; box-shadow:0 0 0 4px rgba(249,115,22,.28), 0 0 20px rgba(249,115,22,.42); }
                100% { border-color:#fb923c; background:#fff7ed; box-shadow:0 0 0 0 rgba(249,115,22,0); }
            }
            .choice-pulse-a { animation:impossibleChoicePulseA .5s steps(1,end) infinite; }
            .choice-pulse-b { animation:impossibleChoicePulseB .5s steps(1,end) infinite; }
            .choice-selected { animation:impossibleChoiceSelected .58s ease-out both; }
            .choice-pulse-a, .choice-pulse-b { color: white !important; }
            #choiceOptionA, #choiceOptionB { color: white !important; }
        `;
        document.head.appendChild(pulseStyle);
    }
    let choiceDeck = [];
    let choiceIndex = 0;
    let choiceDecided = 0;
    let choiceScores = [0, 0, 0, 0];
    let choiceTimer = null;
    let choiceDeadline = 0;
    const choiceRoundCount = 10;

    function stopChoiceTimer() {
        if (choiceTimer) clearInterval(choiceTimer);
        choiceTimer = null;
        $('choiceTimerBox')?.classList.remove('is-low-time');
    }

    function setChoicePulse(active) {
        $('choiceOptionA')?.classList.toggle('choice-pulse-a', active);
        $('choiceOptionB')?.classList.toggle('choice-pulse-b', active);
    }

    function finishImpossibleChoice() {
        stopChoiceTimer();
        setChoicePulse(false);
        const labels = ['호기심', '묵직함', '공감', '대담함'];
        const top = choiceScores.indexOf(Math.max(...choiceScores));
        const archetypes = [
            ['호기심 탐험가', '확실함 대신 발견을 택하고 남들이 지나치는 문을 계속 엽니다.'],
            ['듬직한 수호자', '중요한 것을 지키고 안정을 중시하며, 소음과 중요함을 혼동하지 않습니다.'],
            ['따뜻한 이상주의자', '선택이 주변 사람들에게 미치는 영향으로 본능적으로 판단합니다.'],
            ['대담한 촉매', '일어날 일을 평생 고민하는 것보다 어려운 선택을 하는 편입니다.']
        ];
        const peak = Math.max(1, ...choiceScores.map(value => Math.abs(value)));
        const metrics = labels.map((label, index) => {
            const value = Math.round(Math.max(8, Math.min(100, 50 + (choiceScores[index] / peak) * 42)));
            return `<div class="text-left"><div class="mb-1 flex justify-between text-[11px] font-bold"><span>${label}</span><span>${value}%</span></div><div class="h-1.5 overflow-hidden rounded-full bg-orange-100"><span class="block h-full rounded-full bg-orange-500" style="width:${value}%"></span></div></div>`;
        }).join('');
        $('choiceOptions')?.classList.add('hidden');
        $('choiceQuestion')?.classList.add('hidden');
        $('choiceTimerBar').style.width = '0%';
        const result = $('choiceResult');
        if (result) {
            result.classList.remove('hidden');
            result.innerHTML = `<div class="text-lg font-black text-zinc-900">${archetypes[top][0]}</div><p class="mt-1 text-xs font-bold text-zinc-600">${archetypes[top][1]}</p><div class="mt-4 space-y-3">${metrics}</div><p class="mt-4 text-[11px] font-bold text-zinc-500">시간 내에 ${choiceDecided} / ${choiceRoundCount}개 선택 완료</p>`;
        }
        set('choiceRound', '완료');
        set('choiceStreak', `결정 ${choiceDecided}개`);
        set('newImpossibleChoice', '시작');
        $('newImpossibleChoice')?.classList.remove('hidden');
    }

    function showImpossibleChoice() {
        stopChoiceTimer();
        if (choiceIndex >= choiceRoundCount) return finishImpossibleChoice();
        const item = choiceDeck[choiceIndex];
        const optionA = $('choiceOptionA');
        const optionB = $('choiceOptionB');
        set('choiceRound', `선택 ${choiceIndex + 1} / ${choiceRoundCount}`);
        set('choiceStreak', `결정 ${choiceDecided}개`);
        set('choiceQuestion', item.q);
        set('choiceOptionA', item.a[0]);
        set('choiceOptionB', item.b[0]);
        [optionA, optionB].forEach(button => {
            button.disabled = false;
            button.classList.remove('border-orange-400', 'bg-orange-100', 'opacity-50', 'choice-selected');
        });
        setChoicePulse(true);
        $('choiceOptions')?.classList.remove('hidden');
        $('choiceQuestion')?.classList.remove('hidden');
        $('choiceResult')?.classList.add('hidden');
        const bar = $('choiceTimerBar');
        const timerBox = $('choiceTimerBox');
        choiceDeadline = performance.now() + 6000;
        const updateTimer = () => {
            const ratio = Math.max(0, (choiceDeadline - performance.now()) / 6000);
            if (bar) {
                bar.style.width = `${ratio * 100}%`;
                bar.style.backgroundColor = '#18181b';
                bar.setAttribute('aria-valuenow', String(Math.round(ratio * 100)));
            }
            timerBox?.classList.toggle('is-low-time', ratio <= 1 / 3 && ratio > 0);
            if (ratio > 0) return;
            stopChoiceTimer();
            setChoicePulse(false);
            [optionA, optionB].forEach(button => {
                button.disabled = true;
                button.classList.add('opacity-50');
            });
            set('choiceQuestion', '시간이 흘러갔습니다...');
            choiceIndex += 1;
            setTimeout(showImpossibleChoice, 500);
        };
        updateTimer();
        choiceTimer = setInterval(updateTimer, 50);
    }

    function chooseImpossibleOption(side) {
        if (!choiceTimer || choiceIndex >= choiceRoundCount) return;
        stopChoiceTimer();
        setChoicePulse(false);
        const item = choiceDeck[choiceIndex];
        const selected = side === 'a' ? item.a : item.b;
        selected.slice(1).forEach((value, index) => { choiceScores[index] += value; });
        choiceDecided += 1;
        const selectedButton = $(side === 'a' ? 'choiceOptionA' : 'choiceOptionB');
        selectedButton?.classList.add('choice-selected');
        [$('choiceOptionA'), $('choiceOptionB')].forEach(button => { if (button) button.disabled = true; });
        choiceIndex += 1;
        let advanced = false;
        const advance = () => {
            if (advanced) return;
            advanced = true;
            showImpossibleChoice();
        };
        selectedButton?.addEventListener('animationend', advance, { once: true });
        setTimeout(advance, 750);
    }

    function startImpossibleChoice() {
        stopChoiceTimer();
        choiceDeck = shuffle(impossibleChoices).slice(0, choiceRoundCount);
        choiceIndex = 0;
        choiceDecided = 0;
        choiceScores = [0, 0, 0, 0];
        set('newImpossibleChoice', '시작');
        $('newImpossibleChoice')?.classList.add('hidden');
        showImpossibleChoice();
    }

    bind('choiceOptionA', 'click', () => chooseImpossibleOption('a'));
    bind('choiceOptionB', 'click', () => chooseImpossibleOption('b'));
    bind('newImpossibleChoice', 'click', startImpossibleChoice);
    if (window.SFT_TOOL_PAGE?.slug === 'the-impossible-choice') startImpossibleChoice();
}
