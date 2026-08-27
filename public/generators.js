function initGenerators() {
    const fantasyFirst = ['Aelar', 'Nyra', 'Thorne', 'Eldrin', 'Kaela', 'Mira', 'Darian', 'Sylas', 'Liora', 'Rowan', 'Seren', 'Vael', 'Arlen', 'Bryn', 'Cael', 'Doria', 'Eira', 'Faelan', 'Galen', 'Halwyn', 'Ilyra', 'Jareth', 'Korin', 'Maelis', 'Nerith', 'Oryn', 'Phaedra', 'Quillan', 'Rysa', 'Sable', 'Tavian', 'Ulric', 'Vanya', 'Wren', 'Xyra', 'Ysolde', 'Zorin', 'Althea', 'Bastian', 'Corvin', 'Delara', 'Elowen', 'Fenric', 'Gwyndor', 'Hester', 'Isolde', 'Jorren', 'Keir', 'Lysandra', 'Merric', 'Nimue', 'Orla', 'Perrin', 'Quorra', 'Rook', 'Selene', 'Torin', 'Una', 'Vesper', 'Willow', 'Yara', 'Zephyr'];
    const fantasyLast = ['Moonvale', 'Stormroot', 'Ashborne', 'Silverleaf', 'Duskwind', 'Emberfall', 'Dawnwhisper', 'Ironbloom', 'Nightbriar', 'Starling', 'Oakenhart', 'Ravenshade', 'Frostmere', 'Goldbrook', 'Highthorn', 'Mistwalker', 'Brightforge', 'Valeguard', 'Shadowmere', 'Windhollow', 'Stonebrook', 'Elderbranch', 'Rimeward', 'Flintwatch', 'Duskweaver', 'Rosemantle', 'Blackwater', 'Greenbough', 'Trueflame', 'Hawkwind', 'Oakenshield', 'Runebinder', 'Wolfsong', 'Briarfall', 'Suncrest', 'Mournvale', 'Cloudharp', 'Ironquill', 'Redwillow', 'Grimward', 'Larkspur', 'Evenwood', 'Glassriver', 'Thistlemoon', 'Dewmantle', 'Stormveil', 'Mossglen', 'Feywarden', 'Ashgrove', 'Starbrook'];
    const fantasyPlacePrefix = ['Elder', 'Moon', 'Storm', 'Amber', 'Raven', 'Silver', 'Thorn', 'Frost', 'Sun', 'Mist', 'Ash', 'Briar', 'Cinder', 'Dawn', 'Dusk', 'Ember', 'Fey', 'Glass', 'Gold', 'Grim', 'High', 'Hollow', 'Iron', 'Jade', 'Kings', 'Lion', 'Moss', 'Night', 'Oak', 'Pale', 'Quiet', 'Red', 'Rune', 'Sable', 'Shadow', 'Star', 'Stone', 'Thistle', 'Violet', 'White', 'Wild', 'Wolf', 'Wyrm', 'Yew', 'Zephyr', 'Crown', 'Deep', 'Ever', 'Fern', 'Grey', 'Lost', 'Marble', 'Old', 'Rose', 'Swan', 'Twin', 'Verdant'];
    const fantasyPlaceSuffix = ['Hollow', 'Keep', 'Vale', 'Grove', 'Reach', 'Harbor', 'Spire', 'Fen', 'Crossing', 'Sanctum', 'Abbey', 'Barrow', 'Bastion', 'Bridge', 'Brook', 'Burrow', 'Castle', 'Chapel', 'Citadel', 'Cliff', 'Cove', 'Dale', 'Dell', 'Falls', 'Field', 'Ford', 'Gate', 'Glen', 'Hearth', 'Hold', 'Isle', 'Landing', 'March', 'Market', 'Meadow', 'Mire', 'Pass', 'Peak', 'Port', 'Ridge', 'River', 'Road', 'Shrine', 'Spring', 'Tower', 'Watch', 'Wood', 'Woods', 'Wreath', 'Warren', 'Cradle', 'Crown', 'Labyrinth', 'Court', 'Haven', 'Monastery', 'Vault', 'Fountain'];
    const fantasyPlaceMiddle = ['of Ash', 'of Bells', 'of Crowns', 'of Embers', 'of Lanterns', 'of Ravens', 'of Roses', 'of Saints', 'of Thorns', 'of Wolves', 'under Moonlight', 'above the Mire', 'beyond the Gate', 'near the Old Road', 'at Worldroot', 'by the Glass Sea', 'under Starfall', 'of the Last King', 'of the First Flame', 'of Silent Rain'];
    const sciFiFirst = ['Nova', 'Orion', 'Vex', 'Lyra', 'Zane', 'Astra', 'Kairo', 'Nyx', 'Riven', 'Juno', 'Cade', 'Sera', 'Axiom', 'Bex', 'Cyra', 'Dax', 'Echo', 'Fenix', 'Galen', 'Halo', 'Ion', 'Jax', 'Kira', 'Lex', 'Mako', 'Nia', 'Onyx', 'Pax', 'Quin', 'Raze', 'Sable', 'Talon', 'Uma', 'Vega', 'Wynn', 'Xara', 'Yuri', 'Zen', 'Argo', 'Blake', 'Cira', 'Dray', 'Elix', 'Flux', 'Grix', 'Helio', 'Iris', 'Juno', 'Kade', 'Lux', 'Mira', 'Nero', 'Oberon', 'Pulse', 'Quasar', 'Rhea', 'Syn', 'Tera', 'Voss', 'Zero'];
    const sciFiLast = ['Prime', 'Vector', 'Flux', 'Cipher', 'Nexus', 'Pulse', 'Ion', 'Quasar', 'Apex', 'Binary', 'Core', 'Delta', 'Echo', 'Forge', 'Grid', 'Helix', 'Index', 'Javelin', 'Kinetic', 'Lattice', 'Matrix', 'Neon', 'Orbit', 'Photon', 'Quantum', 'Relay', 'Signal', 'Titan', 'Umbra', 'Vertex', 'Warp', 'Zenith', 'Array', 'Beacon', 'Circuit', 'Drift', 'Engine', 'Frame', 'Glyph', 'Halo', 'Impulse', 'Junction', 'Kernel', 'Loop', 'Module', 'Node', 'Omega', 'Protocol', 'Rift', 'Socket', 'Trace', 'Unit'];
    const sciFiPlacePrefix = ['Kepler', 'Helios', 'Vega', 'Axiom', 'Zenith', 'Eclipse', 'Titan', 'Cygnus', 'Nova', 'Arc', 'Andromeda', 'Borealis', 'Ceres', 'Draco', 'Europa', 'Fomalhaut', 'Galatea', 'Horizon', 'Io', 'Juno', 'Kestrel', 'Lumen', 'Mirage', 'Nadir', 'Oberon', 'Pioneer', 'Quanta', 'Rigel', 'Sagan', 'Triton', 'Umbriel', 'Vortex', 'Warden', 'Xenon', 'Ymir', 'Zeta', 'Aurora', 'Bastion', 'Calypso', 'Daedalus', 'Eos', 'Frontier', 'Gemini', 'Hyperion', 'Icarus', 'Janus', 'Kronos', 'Lazarus', 'Meridian', 'Neptune', 'Odyssey', 'Polaris', 'Radiant', 'Sirius', 'Talos', 'Unity', 'Vanguard', 'Waypoint'];
    const sciFiPlaceSuffix = ['Station', 'Sector', 'Colony', 'Outpost', 'Array', 'Gate', 'Prime', 'Nebula', 'Dock', 'Relay', 'Arcology', 'Belt', 'Citadel', 'Cluster', 'Core', 'Cradle', 'Depot', 'Drift', 'Envelope', 'Field', 'Grid', 'Halo', 'Hub', 'Junction', 'Lab', 'Lattice', 'Loop', 'Moon', 'Node', 'Port', 'Quadrant', 'Ring', 'Sanctuary', 'Shipyard', 'Spire', 'Terminal', 'Vault', 'World', 'Yard', 'Zone', 'Platform', 'Beacon', 'Exchange', 'Foundry', 'Observatory', 'Refuge', 'Shard', 'Slipway', 'Terrace', 'Vector'];
    const sciFiPlaceMiddle = ['Deep Orbit', 'Outer Rim', 'Low Halo', 'Darkside', 'Redline', 'Blue Shift', 'Eventide', 'Far Vector', 'Null Drift', 'Cold Sleep', 'Zero Point', 'Long Range', 'Solar Wake', 'Ghost Band', 'Ion Trail', 'Black Arc', 'Grey Signal', 'Night Relay', 'Twin Star', 'Silent Core'];
    const businessWords = ['Bright', 'Nimble', 'Core', 'Peak', 'Clear', 'Swift', 'North', 'Launch'];
    const businessTypes = ['Labs', 'Works', 'Studio', 'Systems', 'Forge', 'Group'];
    const usernameWords = ['pixel', 'rapid', 'quiet', 'neon', 'lucky', 'nova', 'bold', 'spark'];

    const generatedLists = {
        fantasyPerson: [],
        fantasyPlace: [],
        sciFiPerson: [],
        sciFiPlace: [],
        businessName: [],
        username: []
    };

    setupNameGenerator({
        key: 'fantasyPerson',
        countId: 'fantasyPersonCount',
        generateId: 'generateFantasyPersonName',
        downloadId: 'downloadFantasyPersonName',
        outputId: 'valFantasyPersonName',
        fileName: 'fantasy-person-names.txt',
        createName: () => `${pick(fantasyFirst)} ${pick(fantasyLast)}`
    }, generatedLists);

    setupNameGenerator({
        key: 'fantasyPlace',
        countId: 'fantasyPlaceCount',
        generateId: 'generateFantasyPlaceName',
        downloadId: 'downloadFantasyPlaceName',
        outputId: 'valFantasyPlaceName',
        fileName: 'fantasy-place-names.txt',
        createName: () => createFantasyPlaceName(fantasyPlacePrefix, fantasyPlaceSuffix, fantasyPlaceMiddle)
    }, generatedLists);

    setupNameGenerator({
        key: 'sciFiPerson',
        countId: 'sciFiPersonCount',
        generateId: 'generateSciFiPersonName',
        downloadId: 'downloadSciFiPersonName',
        outputId: 'valSciFiPersonName',
        fileName: 'sci-fi-person-names.txt',
        createName: () => `${pick(sciFiFirst)} ${pick(sciFiLast)}`
    }, generatedLists);

    setupNameGenerator({
        key: 'sciFiPlace',
        countId: 'sciFiPlaceCount',
        generateId: 'generateSciFiPlaceName',
        downloadId: 'downloadSciFiPlaceName',
        outputId: 'valSciFiPlaceName',
        fileName: 'sci-fi-place-names.txt',
        createName: () => createSciFiPlaceName(sciFiPlacePrefix, sciFiPlaceSuffix, sciFiPlaceMiddle)
    }, generatedLists);

    setupNameGenerator({
        key: 'businessName',
        countId: 'businessNameCount',
        generateId: 'generateBusinessName',
        downloadId: 'downloadBusinessName',
        outputId: 'valBusinessName',
        fileName: 'business-names.txt',
        createName: () => `${pick(businessWords)} ${pick(businessTypes)}`
    }, generatedLists);

    setupNameGenerator({
        key: 'username',
        countId: 'usernameCount',
        generateId: 'generateUsername',
        downloadId: 'downloadUsername',
        outputId: 'valUsername',
        fileName: 'usernames.txt',
        createName: () => `${pick(usernameWords)}_${pick(usernameWords)}_${randomInt(10, 999)}`
    }, generatedLists);

    setupCountSlider('passwordCount');
    setupCountSlider('randomNumberCount');
    setupCountSlider('uuidCount');
    setupCountSlider('loremCount');
    setupClampedNumberInput('loremLength', clampLoremLength);
    initLunchPicker();
    initWhoPaysRoulette();
    setupPasswordGenerator();
    setupRandomNumberGenerator();
    setupUuidGenerator();
    setupLoremIpsumGenerator();
}

function setupPasswordGenerator() {
    const generateButton = document.getElementById('generatePassword');
    const downloadButton = document.getElementById('downloadPassword');
    const output = document.getElementById('valPassword');
    const countInput = document.getElementById('passwordCount');
    const lengthInput = document.getElementById('passwordLength');
    if (!generateButton || !downloadButton || !output || !countInput || !lengthInput) return;

    generateButton.addEventListener('click', () => {
        output.innerText = createPassword();
    });
    downloadButton.addEventListener('click', () => {
        const count = clampCount(countInput.value);
        countInput.value = count;
        downloadTextFile('passwords.txt', Array.from({ length: count }, createPassword).join('\n'));
    });
}

function setupRandomNumberGenerator() {
    const generateButton = document.getElementById('generateRandomNumber');
    const downloadButton = document.getElementById('downloadRandomNumber');
    const output = document.getElementById('valRandomNumber');
    const countInput = document.getElementById('randomNumberCount');
    const minInput = document.getElementById('randomMin');
    const maxInput = document.getElementById('randomMax');
    if (!generateButton || !downloadButton || !output || !countInput || !minInput || !maxInput) return;

    generateButton.addEventListener('click', () => {
        output.innerText = createRandomNumber().toLocaleString();
    });
    downloadButton.addEventListener('click', () => {
        const count = clampCount(countInput.value);
        countInput.value = count;
        downloadTextFile('random-numbers.txt', Array.from({ length: count }, () => createRandomNumber()).join('\n'));
    });
}

function setupUuidGenerator() {
    const generateButton = document.getElementById('generateUuid');
    const downloadButton = document.getElementById('downloadUuid');
    const output = document.getElementById('valUuid');
    const countInput = document.getElementById('uuidCount');
    if (!generateButton || !downloadButton || !output || !countInput) return;

    generateButton.addEventListener('click', () => {
        output.innerText = createUuid();
    });
    downloadButton.addEventListener('click', () => {
        const count = clampCount(countInput.value);
        countInput.value = count;
        downloadTextFile('uuids.txt', Array.from({ length: count }, createUuid).join('\n'));
    });
}

function setupLoremIpsumGenerator() {
    const downloadButton = document.getElementById('downloadLoremIpsum');
    const lengthInput = document.getElementById('loremLength');
    const countInput = document.getElementById('loremCount');
    const countValue = document.getElementById('loremCountValue');
    if (!downloadButton || !lengthInput || !countInput || !countValue) return;

    downloadButton.addEventListener('click', () => {
        const length = clampLoremLength(lengthInput.value);
        const count = clampCount(countInput.value);
        lengthInput.value = length;
        countInput.value = count;
        countValue.innerText = count;
        downloadTextFile('lorem-ipsum.txt', Array.from({ length: count }, () => createLoremIpsum(length)).join('\n\n'));
    });
}

function initLunchPicker() {
    const presetSelect = document.getElementById('lunchPreset');
    const optionsInput = document.getElementById('lunchOptions');
    const excludedInput = document.getElementById('lunchExcluded');
    const avoidRecentInput = document.getElementById('lunchAvoidRecent');
    const spinButton = document.getElementById('spinLunch');
    const slotMachine = document.getElementById('lunchSlotMachine');
    const previousRow = document.getElementById('lunchSlotPrevious');
    const currentRow = document.getElementById('lunchSlotCurrent');
    const nextRow = document.getElementById('lunchSlotNext');
    const message = document.getElementById('lunchPickerMessage');
    const recentOutput = document.getElementById('lunchRecentResults');
    const creditsLink = document.getElementById('lunchPhotoCredits');
    const fireworks = document.getElementById('lunchFireworks');
    if (!presetSelect || !optionsInput || !excludedInput || !avoidRecentInput || !spinButton || !slotMachine) return;

    const requestedLocale = window.SFT_LOCALE || document.documentElement.lang || 'en';
    const locale = window.SFT_LUNCH_PRESETS?.[requestedLocale] ? requestedLocale : 'en';
    const presets = window.SFT_LUNCH_PRESETS?.[locale] || {};
    const photoLookup = window.SFT_LUNCH_PHOTOS?.[locale] || {};
    if (!Object.keys(presets).length) return;
    if (creditsLink) creditsLink.textContent = window.SFT_LUNCH_CREDITS_LABELS?.[locale] || 'Photo credits';
    const storageKey = 'sft-lunch-picker';
    const customStorageKey = 'sft-lunch-picker-custom-options';
    const defaultCustomOptions = (window.SFT_LUNCH_CUSTOM_DEFAULTS?.[locale] || ['Menu 1', 'Menu 2', 'Menu 3']).join('\n');
    let recent = [];
    let audioContext;
    let customOptions = defaultCustomOptions;
    let hasSavedCustom = false;
    try {
        hasSavedCustom = localStorage.getItem(customStorageKey) !== null;
        customOptions = hasSavedCustom ? localStorage.getItem(customStorageKey) || '' : defaultCustomOptions;
    } catch {}
    const text = (id, fallback) => document.getElementById(id)?.textContent.trim() || fallback;
    const labels = {
        ready: previousRow.textContent.trim(),
        choose: currentRow.textContent.trim(),
        spinWhenReady: nextRow.textContent.trim(),
        spin: spinButton.textContent.trim(),
        spinning: text('lunchLabelSpinning', 'Spinning...'),
        spinAgain: text('lunchLabelSpinAgain', 'Spin Again'),
        recent: text('lunchLabelRecent', 'Recent'),
        empty: message.textContent.trim() || 'Add at least one available lunch option.'
    };

    const normalizeLines = value => [...new Set(value.split(/\r?\n/).map(item => item.trim()).filter(Boolean))];
    const randomItem = items => {
        if (!items.length) return '';
        if (window.crypto?.getRandomValues) {
            const value = new Uint32Array(1);
            window.crypto.getRandomValues(value);
            return items[value[0] % items.length];
        }
        return items[Math.floor(Math.random() * items.length)];
    };
    const imageSource = item => photoLookup[item] ? `https://img.danmaek.com/assets/lunch-photos/${photoLookup[item]}.webp` : '';
    const preloadItems = items => {
        const sources = [...new Set(items.map(imageSource).filter(Boolean))];
        sources.forEach(source => {
            const image = new Image();
            image.src = source;
        });
    };
    const saveState = () => {
        try {
            localStorage.setItem(storageKey, JSON.stringify({ locale, preset: presetSelect.value, options: optionsInput.value, customOptions, excluded: excludedInput.value, avoidRecent: avoidRecentInput.checked, recent }));
        } catch {}
    };
    const saveCustomOptions = () => {
        try {
            localStorage.setItem(customStorageKey, customOptions);
            hasSavedCustom = true;
        } catch {}
    };
    const renderRecent = () => {
        recentOutput.textContent = recent.length ? `${labels.recent}: ${recent.join(' · ')}` : '';
        recentOutput.classList.toggle('hidden', !recent.length);
    };
    const renderSlotRow = (row, item, fallback) => {
        const label = item || fallback;
        const source = imageSource(item);
        const name = document.createElement('span');
        name.className = 'lunch-slot-name';
        name.textContent = label;
        if (!source) {
            row.replaceChildren(name);
            return;
        }
        const image = document.createElement('img');
        image.className = 'lunch-slot-image';
        image.src = source;
        image.alt = '';
        image.width = row === currentRow ? 48 : 34;
        image.height = row === currentRow ? 48 : 34;
        image.decoding = 'async';
        image.setAttribute('aria-hidden', 'true');
        image.addEventListener('error', () => image.remove(), { once: true });
        row.replaceChildren(image, name);
    };
    const setRows = (winner, pool) => {
        const alternatives = pool.filter(item => item !== winner);
        const previous = randomItem(alternatives);
        const next = randomItem(alternatives);
        renderSlotRow(previousRow, previous, labels.ready);
        renderSlotRow(currentRow, winner, labels.choose);
        renderSlotRow(nextRow, next, labels.spinWhenReady);
    };
    const setPreset = key => {
        if (key === 'custom') {
            optionsInput.value = customOptions;
            saveState();
            return;
        }
        optionsInput.value = (presets[key] || presets.mixed).join('\n');
        preloadItems(presets[key] || presets.mixed);
        saveState();
    };
    const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
    const getAudioContext = () => {
        if (audioContext) return audioContext;
        const Context = window.AudioContext || window.webkitAudioContext;
        if (!Context) return null;
        audioContext = new Context();
        return audioContext;
    };
    const playTone = (frequency, duration, volume = 0.035, delay = 0) => {
        const context = getAudioContext();
        if (!context) return;
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        const start = context.currentTime + delay;
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(frequency, start);
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(volume, start + 0.008);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
        oscillator.connect(gain).connect(context.destination);
        oscillator.start(start);
        oscillator.stop(start + duration + 0.02);
    };
    const playWinSound = () => {
        playTone(523.25, 0.16, 0.05);
        playTone(659.25, 0.18, 0.055, 0.11);
        playTone(783.99, 0.24, 0.06, 0.23);
    };
    const burstCelebration = reducedMotion => {
        if (!fireworks) return;
        if (fireworks.parentElement !== document.body) document.body.appendChild(fireworks);
        fireworks.replaceChildren();
        const colors = ['#f97316', '#facc15', '#ef4444', '#22c55e', '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899', '#ffffff'];
        const origins = [18, 50, 82];
        const count = reducedMotion ? 18 : 72;
        const fragment = document.createDocumentFragment();
        for (let index = 0; index < count; index += 1) {
            const particle = document.createElement('span');
            const origin = origins[index % origins.length] + ((Math.random() * 10) - 5);
            const horizontal = (Math.random() - 0.5) * Math.min(window.innerWidth * 0.42, 420);
            const vertical = -(window.innerHeight * (0.55 + Math.random() * 0.48));
            const width = 8 + Math.round(Math.random() * 7);
            const height = 12 + Math.round(Math.random() * 12);
            const rotation = Math.round((Math.random() * 900) - 450);
            particle.className = 'lunch-confetti';
            particle.style.setProperty('--confetti-color', colors[index % colors.length]);
            particle.style.setProperty('--confetti-origin', `${origin}%`);
            particle.style.setProperty('--confetti-x', `${horizontal}px`);
            particle.style.setProperty('--confetti-y', `${vertical}px`);
            particle.style.setProperty('--confetti-fall-x', `${horizontal + ((Math.random() - 0.5) * 28)}px`);
            particle.style.setProperty('--confetti-fall-y', `${vertical + 12 + (Math.random() * 30)}px`);
            particle.style.setProperty('--confetti-rotate', `${rotation}deg`);
            particle.style.setProperty('--confetti-end-rotate', `${rotation + 240 + Math.round(Math.random() * 400)}deg`);
            particle.style.setProperty('--confetti-width', `${width}px`);
            particle.style.setProperty('--confetti-height', `${height}px`);
            particle.style.setProperty('--confetti-radius', index % 3 === 0 ? '999px' : '2px');
            particle.style.setProperty('--confetti-delay', `${Math.round(Math.random() * 130)}ms`);
            fragment.appendChild(particle);
        }
        fireworks.appendChild(fragment);
        window.setTimeout(() => fireworks.replaceChildren(), 1700);
    };

    presetSelect.addEventListener('change', () => setPreset(presetSelect.value));
    optionsInput.addEventListener('input', () => {
        presetSelect.value = 'custom';
        customOptions = optionsInput.value;
        saveCustomOptions();
        saveState();
    });
    excludedInput.addEventListener('input', saveState);
    avoidRecentInput.addEventListener('change', saveState);
    spinButton.addEventListener('click', async () => {
        const options = normalizeLines(optionsInput.value);
        const excluded = new Set(normalizeLines(excludedInput.value).map(item => item.toLocaleLowerCase()));
        const available = options.filter(item => !excluded.has(item.toLocaleLowerCase()));
        let candidates = available;
        if (avoidRecentInput.checked) {
            const unused = candidates.filter(item => !recent.includes(item));
            if (unused.length) candidates = unused;
        }
        if (!candidates.length) {
            message.textContent = labels.empty;
            message.classList.remove('hidden');
            return;
        }

        message.classList.add('hidden');
        spinButton.disabled = true;
        spinButton.textContent = labels.spinning;
        slotMachine.classList.remove('is-complete');
        slotMachine.classList.add('is-spinning');
        getAudioContext()?.resume?.();
        const winner = randomItem(candidates);
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const steps = reducedMotion ? 3 : 24;
        for (let step = 0; step < steps; step += 1) {
            setRows(randomItem(candidates), candidates);
            if (!reducedMotion && step % 2 === 0) playTone(220 + (step * 8), 0.045, 0.02);
            const progress = step / Math.max(steps - 1, 1);
            await wait(reducedMotion ? 35 : 45 + Math.round(progress * progress * 145));
        }
        setRows(winner, available);
        slotMachine.classList.remove('is-spinning');
        slotMachine.classList.add('is-complete');
        playWinSound();
        burstCelebration(reducedMotion);
        recent = [winner, ...recent.filter(item => item !== winner)].slice(0, 5);
        renderRecent();
        saveState();
        spinButton.textContent = labels.spinAgain;
        spinButton.disabled = false;
    });

    try {
        const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
        const sameLocale = saved.locale === locale;
        recent = sameLocale && Array.isArray(saved.recent) ? saved.recent.slice(0, 5) : [];
        const savedPreset = sameLocale && (presets[saved.preset] || saved.preset === 'custom') ? saved.preset : 'mixed';
        if (!hasSavedCustom && saved.preset === 'custom' && typeof saved.options === 'string') {
            customOptions = saved.options;
            saveCustomOptions();
        } else if (!hasSavedCustom && typeof saved.customOptions === 'string') {
            customOptions = saved.customOptions;
            saveCustomOptions();
        }
        presetSelect.value = savedPreset;
        optionsInput.value = savedPreset === 'custom'
            ? customOptions
            : sameLocale && typeof saved.options === 'string' && saved.options.trim()
            ? saved.options
            : (presets[savedPreset] || presets.mixed).join('\n');
        excludedInput.value = sameLocale && typeof saved.excluded === 'string' ? saved.excluded : '';
        avoidRecentInput.checked = sameLocale ? saved.avoidRecent !== false : true;
    } catch {
        presetSelect.value = 'mixed';
        optionsInput.value = presets.mixed.join('\n');
    }
    renderRecent();
    preloadItems(normalizeLines(optionsInput.value));
    if (recent.length) {
        setRows(recent[0], normalizeLines(optionsInput.value));
    } else {
        renderSlotRow(previousRow, '', labels.ready);
        renderSlotRow(currentRow, '', labels.choose);
        renderSlotRow(nextRow, '', labels.spinWhenReady);
    }
}

function initWhoPaysRoulette() {
    const namesInput = document.getElementById('payerNames');
    const spinButton = document.getElementById('spinPayer');
    const slotMachine = document.getElementById('payerSlotMachine');
    const previousRow = document.getElementById('payerSlotPrevious');
    const currentRow = document.getElementById('payerSlotCurrent');
    const nextRow = document.getElementById('payerSlotNext');
    const message = document.getElementById('payerMessage');
    const fireworks = document.getElementById('payerFireworks');
    if (!namesInput || !spinButton || !slotMachine) return;

    const storageKey = 'sft-who-pays-roulette';
    const text = (id, fallback) => document.getElementById(id)?.textContent.trim() || fallback;
    const labels = {
        ready: previousRow.textContent.trim(),
        choose: currentRow.textContent.trim(),
        spinWhenReady: nextRow.textContent.trim(),
        spin: spinButton.textContent.trim(),
        spinning: text('payerLabelSpinning', 'Spinning...'),
        spinAgain: text('payerLabelSpinAgain', 'Spin Again'),
        pays: text('payerLabelPays', 'pays!'),
        empty: message.textContent.trim() || 'Add at least two names.'
    };
    let audioContext;

    const normalizeNames = value => [...new Set(value.split(/\r?\n/).map(name => name.trim()).filter(Boolean))];
    const randomIndex = length => {
        if (length <= 1) return 0;
        if (!window.crypto?.getRandomValues) return Math.floor(Math.random() * length);
        const limit = Math.floor(0x100000000 / length) * length;
        const values = new Uint32Array(1);
        do window.crypto.getRandomValues(values); while (values[0] >= limit);
        return values[0] % length;
    };
    const randomName = names => names[randomIndex(names.length)] || '';
    const getAudioContext = () => {
        if (audioContext) return audioContext;
        const Context = window.AudioContext || window.webkitAudioContext;
        if (!Context) return null;
        audioContext = new Context();
        return audioContext;
    };
    const playTone = (frequency, duration, volume = 0.035, delay = 0) => {
        const context = getAudioContext();
        if (!context) return;
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        const start = context.currentTime + delay;
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(frequency, start);
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(volume, start + 0.008);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
        oscillator.connect(gain).connect(context.destination);
        oscillator.start(start);
        oscillator.stop(start + duration + 0.02);
    };
    const playWinSound = () => {
        playTone(523.25, 0.16, 0.05);
        playTone(659.25, 0.18, 0.055, 0.11);
        playTone(783.99, 0.24, 0.06, 0.23);
    };
    const saveState = () => {
        try {
            localStorage.setItem(storageKey, JSON.stringify({ names: namesInput.value }));
        } catch {}
    };
    const renderRow = (row, name, fallback, winner = false) => {
        const avatar = document.createElement('span');
        avatar.className = 'payer-slot-avatar';
        avatar.setAttribute('aria-hidden', 'true');
        avatar.textContent = winner ? '💸' : '🧾';
        const label = document.createElement('span');
        label.className = 'lunch-slot-name';
        label.textContent = name ? `${name}${winner ? '!' : ''}` : fallback;
        row.replaceChildren(avatar, label);
    };
    const setRows = (selected, names, winner = false) => {
        const alternatives = names.filter(name => name !== selected);
        renderRow(previousRow, randomName(alternatives), labels.ready);
        renderRow(currentRow, selected, labels.choose, winner);
        renderRow(nextRow, randomName(alternatives), labels.spinWhenReady);
    };
    const burstCelebration = reducedMotion => {
        if (!fireworks) return;
        if (fireworks.parentElement !== document.body) document.body.appendChild(fireworks);
        fireworks.replaceChildren();
        const colors = ['#f97316', '#facc15', '#ef4444', '#22c55e', '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899', '#ffffff'];
        const origins = [14, 35, 65, 86];
        const count = reducedMotion ? 20 : 88;
        const fragment = document.createDocumentFragment();
        for (let index = 0; index < count; index += 1) {
            const particle = document.createElement('span');
            const origin = origins[index % origins.length] + ((Math.random() * 8) - 4);
            const horizontal = (Math.random() - 0.5) * Math.min(window.innerWidth * 0.46, 460);
            const vertical = -(window.innerHeight * (0.58 + Math.random() * 0.5));
            const rotation = Math.round((Math.random() * 900) - 450);
            particle.className = 'lunch-confetti';
            particle.style.setProperty('--confetti-color', colors[index % colors.length]);
            particle.style.setProperty('--confetti-origin', `${origin}%`);
            particle.style.setProperty('--confetti-x', `${horizontal}px`);
            particle.style.setProperty('--confetti-y', `${vertical}px`);
            particle.style.setProperty('--confetti-fall-x', `${horizontal + ((Math.random() - 0.5) * 32)}px`);
            particle.style.setProperty('--confetti-fall-y', `${vertical + 18 + (Math.random() * 36)}px`);
            particle.style.setProperty('--confetti-rotate', `${rotation}deg`);
            particle.style.setProperty('--confetti-end-rotate', `${rotation + 260 + Math.round(Math.random() * 420)}deg`);
            particle.style.setProperty('--confetti-width', `${8 + Math.round(Math.random() * 8)}px`);
            particle.style.setProperty('--confetti-height', `${12 + Math.round(Math.random() * 13)}px`);
            particle.style.setProperty('--confetti-radius', index % 3 === 0 ? '999px' : '2px');
            particle.style.setProperty('--confetti-delay', `${Math.round(Math.random() * 150)}ms`);
            fragment.appendChild(particle);
        }
        fireworks.appendChild(fragment);
        window.setTimeout(() => fireworks.replaceChildren(), 1750);
    };
    const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

    spinButton.addEventListener('click', async () => {
        const names = normalizeNames(namesInput.value);
        if (names.length < 2) {
            message.textContent = labels.empty;
            message.classList.remove('hidden');
            return;
        }
        saveState();
        message.classList.add('hidden');
        spinButton.disabled = true;
        spinButton.textContent = labels.spinning;
        slotMachine.classList.remove('is-complete');
        slotMachine.classList.add('is-spinning');
        getAudioContext()?.resume?.();
        const winner = randomName(names);
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const steps = reducedMotion ? 3 : 25;
        for (let step = 0; step < steps; step += 1) {
            setRows(randomName(names), names);
            if (!reducedMotion && step % 2 === 0) playTone(220 + (step * 8), 0.045, 0.02);
            const progress = step / Math.max(steps - 1, 1);
            await wait(reducedMotion ? 35 : 42 + Math.round(progress * progress * 150));
        }
        setRows(winner, names, true);
        slotMachine.classList.remove('is-spinning');
        slotMachine.classList.add('is-complete');
        playWinSound();
        burstCelebration(reducedMotion);
        spinButton.textContent = labels.spinAgain;
        spinButton.disabled = false;
    });

    try {
        const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
        if (typeof saved.names === 'string' && saved.names.trim()) namesInput.value = saved.names;
    } catch {}
    renderRow(previousRow, '', labels.ready);
    renderRow(currentRow, '', labels.choose);
    renderRow(nextRow, '', labels.spinWhenReady);
}

function setupNameGenerator(config, generatedLists) {
    const countInput = document.getElementById(config.countId);
    const output = document.getElementById(config.outputId);
    const generateButton = document.getElementById(config.generateId);
    const downloadButton = document.getElementById(config.downloadId);
    if (!countInput || !output || !generateButton || !downloadButton) return;
    downloadButton.textContent = '다운로드 영문';
    downloadButton.parentElement?.classList.add('generator-download-split');
    let koreanDownloadButton = downloadButton.parentElement?.querySelector(`[data-korean-download-for="${config.downloadId}"]`);
    if (!koreanDownloadButton) {
        koreanDownloadButton = downloadButton.cloneNode(true);
        koreanDownloadButton.id = `${config.downloadId}Korean`;
        koreanDownloadButton.dataset.koreanDownloadFor = config.downloadId;
        koreanDownloadButton.textContent = '다운로드 한국어';
        downloadButton.insertAdjacentElement('afterend', koreanDownloadButton);
    }
    setupCountSlider(config.countId);
    const recent = [];
    const createFreshName = () => {
        let name = config.createName();
        for (let attempt = 0; attempt < 20 && recent.includes(name); attempt += 1) {
            name = config.createName();
        }
        recent.push(name);
        if (recent.length > 80) recent.shift();
        return name;
    };

    generateButton.addEventListener('click', () => {
        generatedLists[config.key] = [createFreshName()];
        output.innerHTML = generatedLists[config.key].map(name => bilingualNameLine(name, transliterateGeneratedName(name))).join('');
    });

    if (downloadButton.dataset.englishDownloadReady !== 'true') {
        downloadButton.addEventListener('click', () => {
            const count = clampCount(countInput.value);
            countInput.value = count;
            const downloadNames = Array.from({ length: count }, createFreshName);
            downloadTextFile(config.fileName, downloadNames.join('\n'));
        });
        downloadButton.dataset.englishDownloadReady = 'true';
    }

    if (koreanDownloadButton.dataset.koreanDownloadReady !== 'true') {
        koreanDownloadButton.addEventListener('click', () => {
            const count = clampCount(countInput.value);
            countInput.value = count;
            const downloadNames = Array.from({ length: count }, createFreshName).map(transliterateGeneratedName);
            const koreanFileName = config.fileName.replace(/\.txt$/i, '-ko.txt');
            downloadTextFile(koreanFileName, downloadNames.join('\n'));
        });
        koreanDownloadButton.dataset.koreanDownloadReady = 'true';
    }
}

function escapeGeneratedText(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[char]));
}

function bilingualNameLine(original, korean) {
    return `<span class="bilingual-name-line"><span>${escapeGeneratedText(original)}</span><span>${escapeGeneratedText(korean)}</span></span>`;
}

function transliterateGeneratedName(name) {
    const phraseMap = {
        'of Ash': '오브 애시',
        'of Bells': '오브 벨스',
        'of Crowns': '오브 크라운스',
        'of Embers': '오브 엠버스',
        'of Lanterns': '오브 랜턴스',
        'of Ravens': '오브 레이븐스',
        'of Roses': '오브 로지스',
        'of Saints': '오브 세인츠',
        'of Thorns': '오브 손스',
        'of Wolves': '오브 울브스',
        'under Moonlight': '언더 문라이트',
        'above the Mire': '어보브 더 마이어',
        'beyond the Gate': '비욘드 더 게이트',
        'near the Old Road': '니어 디 올드 로드',
        'at Worldroot': '앳 월드루트',
        'by the Glass Sea': '바이 더 글래스 시',
        'under Starfall': '언더 스타폴',
        'of the Last King': '오브 더 라스트 킹',
        'of the First Flame': '오브 더 퍼스트 플레임',
        'of Silent Rain': '오브 사일런트 레인',
        'Deep Orbit': '딥 오빗',
        'Outer Rim': '아우터 림',
        'Low Halo': '로우 헤일로',
        Darkside: '다크사이드',
        Redline: '레드라인',
        'Blue Shift': '블루 시프트',
        Eventide: '이븐타이드',
        'Far Vector': '파 벡터',
        'Null Drift': '널 드리프트',
        'Cold Sleep': '콜드 슬립',
        'Zero Point': '제로 포인트',
        'Long Range': '롱 레인지',
        'Solar Wake': '솔라 웨이크',
        'Ghost Band': '고스트 밴드',
        'Ion Trail': '아이온 트레일',
        'Black Arc': '블랙 아크',
        'Grey Signal': '그레이 시그널',
        'Night Relay': '나이트 릴레이',
        'Twin Star': '트윈 스타',
        'Silent Core': '사일런트 코어'
    };
    const wordMap = {
        pixel: '픽셀', rapid: '래피드', quiet: '콰이어트', neon: '네온', lucky: '럭키', nova: '노바', bold: '볼드', spark: '스파크',
        Aelar: '에일라', Nyra: '나이라', Thorne: '손', Eldrin: '엘드린', Kaela: '카엘라', Mira: '미라', Darian: '다리안', Sylas: '사일러스', Liora: '리오라', Rowan: '로완', Seren: '세렌', Vael: '베일', Arlen: '알렌', Bryn: '브린', Cael: '카엘', Doria: '도리아', Eira: '에이라', Faelan: '페일란', Galen: '게일런', Halwyn: '할윈', Ilyra: '일리라', Jareth: '자레스', Korin: '코린', Maelis: '마엘리스', Nerith: '네리스', Oryn: '오린', Phaedra: '파이드라', Quillan: '퀼런', Rysa: '라이사', Sable: '세이블', Tavian: '타비안', Ulric: '울릭', Vanya: '바냐', Wren: '렌', Xyra: '자이라', Ysolde: '이솔데', Zorin: '조린', Althea: '알테아', Bastian: '바스티안', Corvin: '코빈', Delara: '델라라', Elowen: '엘로웬', Fenric: '펜릭', Gwyndor: '귄도르', Hester: '헤스터', Isolde: '이졸데', Jorren: '조렌', Keir: '키어', Lysandra: '리산드라', Merric: '메릭', Nimue: '니무에', Orla: '올라', Perrin: '페린', Quorra: '쿼라', Rook: '룩', Selene: '셀레네', Torin: '토린', Una: '우나', Vesper: '베스퍼', Willow: '윌로', Yara: '야라', Zephyr: '제퍼',
        Moonvale: '문베일', Stormroot: '스톰루트', Ashborne: '애시본', Silverleaf: '실버리프', Duskwind: '더스크윈드', Emberfall: '엠버폴', Dawnwhisper: '던위스퍼', Ironbloom: '아이언블룸', Nightbriar: '나이트브라이어', Starling: '스타링', Oakenhart: '오큰하트', Ravenshade: '레이븐셰이드', Frostmere: '프로스트미어', Goldbrook: '골드브룩', Highthorn: '하이손', Mistwalker: '미스트워커', Brightforge: '브라이트포지', Valeguard: '베일가드', Shadowmere: '섀도미어', Windhollow: '윈드할로', Stonebrook: '스톤브룩', Elderbranch: '엘더브랜치', Rimeward: '라임워드', Flintwatch: '플린트워치', Duskweaver: '더스크위버', Rosemantle: '로즈맨틀', Blackwater: '블랙워터', Greenbough: '그린바우', Trueflame: '트루플레임', Hawkwind: '호크윈드', Oakenshield: '오큰실드', Runebinder: '룬바인더', Wolfsong: '울프송', Briarfall: '브라이어폴', Suncrest: '선크레스트', Mournvale: '모른베일', Cloudharp: '클라우드하프', Ironquill: '아이언퀼', Redwillow: '레드윌로', Grimward: '그림워드', Larkspur: '라크스퍼', Evenwood: '이븐우드', Glassriver: '글래스리버', Thistlemoon: '시슬문', Dewmantle: '듀맨틀', Stormveil: '스톰베일', Mossglen: '모스글렌', Feywarden: '페이워든', Ashgrove: '애시그로브', Starbrook: '스타브룩',
        Bright: '브라이트', Nimble: '님블', Core: '코어', Peak: '피크', Clear: '클리어', Swift: '스위프트', North: '노스', Launch: '런치', Labs: '랩스', Works: '웍스', Studio: '스튜디오', Systems: '시스템즈', Forge: '포지', Group: '그룹',
        Nova: '노바', Orion: '오리온', Vex: '벡스', Lyra: '라이라', Zane: '제인', Astra: '아스트라', Kairo: '카이로', Nyx: '닉스', Riven: '리븐', Juno: '주노', Cade: '케이드', Sera: '세라', Axiom: '액시엄', Bex: '벡스', Cyra: '사이라', Dax: '댁스', Echo: '에코', Fenix: '피닉스', Halo: '헤일로', Ion: '아이온', Jax: '잭스', Kira: '키라', Lex: '렉스', Mako: '마코', Nia: '니아', Onyx: '오닉스', Pax: '팩스', Quin: '퀸', Raze: '레이즈', Talon: '탤런', Uma: '우마', Vega: '베가', Wynn: '윈', Xara: '자라', Yuri: '유리', Zen: '젠',
        Prime: '프라임', Vector: '벡터', Flux: '플럭스', Cipher: '사이퍼', Nexus: '넥서스', Pulse: '펄스', Quasar: '퀘이사', Apex: '에이펙스', Binary: '바이너리', Delta: '델타', Helix: '헬릭스', Matrix: '매트릭스', Neon: '네온', Orbit: '오빗', Photon: '포톤', Quantum: '퀀텀', Relay: '릴레이', Signal: '시그널', Titan: '타이탄', Umbra: '엄브라', Vertex: '버텍스', Warp: '워프', Zenith: '제니스',
        Argo: '아르고', Blake: '블레이크', Cira: '시라', Dray: '드레이', Elix: '엘릭스', Grix: '그릭스', Helio: '헬리오', Iris: '아이리스', Kade: '케이드', Lux: '럭스', Nero: '네로', Rhea: '레아', Syn: '신', Tera: '테라', Voss: '보스', Zero: '제로',
        Index: '인덱스', Javelin: '자벨린', Kinetic: '기네틱', Circuit: '서킷', Engine: '엔진', Frame: '프레임', Glyph: '글리프', Impulse: '임펄스', Kernel: '커널', Module: '모듈', Protocol: '프로토콜', Rift: '리프트', Socket: '소켓', Trace: '트레이스', Unit: '유닛',
        Elder: '엘더', Moon: '문', Storm: '폭풍', Amber: '호박', Raven: '까마귀', Silver: '은', Thorn: '가시', Frost: '서리', Sun: '태양', Mist: '안개', Ash: '재', Briar: '가시울타리', Cinder: '잿불', Dawn: '새벽', Dusk: '황혼', Ember: '불씨', Fey: '요정', Glass: '유리', Gold: '금', Grim: '그림자', High: '높은', Hollow: '허공', Iron: '강철', Jade: '옥', Kings: '왕의', Lion: '사자', Moss: '이끼', Night: '밤', Oak: '나무', Pale: '창백', Quiet: '고요', Red: '붉은', Rune: '룬', Star: '별', Stone: '돌', Violet: '보라', White: '하얀', Wild: '거친', Wolf: '늑대', Wyrm: '용', Yew: '주목', Crown: '왕관', Deep: '깊은', Ever: '영원', Fern: '양치', Grey: '잿빛', Lost: '잃어버린', Marble: '대리석', Old: '오래된', Rose: '장미', Swan: '백조', Twin: '쌍둥이', Verdant: '무성한',
        Keep: '요새', Vale: '계곡', Grove: '숲', Reach: '지역', Harbor: '항구', Spire: '첨탑', Fen: '늪', Crossing: '간이역', Sanctum: '성소', Abbey: '수도원', Barrow: '고분', Bastion: '요새', Bridge: '다리', Brook: '시내', Burrow: '굴', Castle: '성', Chapel: '예배당', Citadel: '시타델', Cliff: '절벽', Cove: '만', Dale: '골짜기', Dell: '협곡', Falls: '폭포', Field: '들판', Ford: '여울', Gate: '문', Glen: '골', Hearth: '벽로', Hold: '거점', Isle: '섬', Landing: '정박지', March: '경계', Market: '시장', Meadow: '초원', Mire: '진흙', Pass: '고개', Peak: '봉우리', Port: '항구', Ridge: '산등성이', River: '강', Road: '길', Shrine: '신전', Spring: '샘', Tower: '탑', Watch: '감시소', Wood: '숲', Woods: '숲속', Wreath: '화환', Warren: '굴', Cradle: '궤도', Court: '법정', Haven: '피난처', Monastery: '수도원', Vault: '금고', Fountain: '분수', Labyrinth: '미로',
        Kepler: '케플러', Helios: '헬리오스', Eclipse: '에클립스', Cygnus: '시구누스', Arc: '아크', Andromeda: '안드로메다', Borealis: '보레알리스', Ceres: '세레스', Draco: '드라코', Europa: '유로파', Fomalhaut: '포말하우트', Galatea: '갈라테아', Horizon: '호라이즌', Io: '이오', Kestrel: '케스트렐', Lumen: '루멘', Mirage: '미라주', Nadir: '나디르', Oberon: '오베론', Pioneer: '파이어니어', Quanta: '콴타', Rigel: '리겔', Sagan: '사간', Triton: '트리톤', Umbriel: '움브리엘', Vortex: '볼텍스', Warden: '워든', Xenon: '제논', Ymir: '이미르', Zeta: '제타', Aurora: '오로라', Calypso: '칼립소', Daedalus: '데달로스', Eos: '에오스', Frontier: '프론티어', Gemini: '제미니', Hyperion: '히페리온', Icarus: '이카로스', Janus: '야누스', Kronos: '크로노스', Lazarus: '라자루스', Meridian: '메리디안', Neptune: '넵툰', Odyssey: '오디세이', Polaris: '폴라리스', Radiant: '래디언트', Sirius: '시리우스', Talos: '탈로스', Unity: '유니티', Vanguard: '뱅가드', Waypoint: '웨이포인트',
        Station: '스테이션', Sector: '섹터', Colony: '식민지', Outpost: '전초기지', Array: '어레이', Nebula: '성운', Dock: '도크', Arcology: '아르콜로지', Belt: '벨트', Cluster: '클러스터', Cradle: '궤도', Depot: '적재소', Drift: '드리프트', Envelope: '에노벨로프', Grid: '그리드', Hub: '허브', Junction: '정크션', Lab: '랩', Lattice: '래티스', Loop: '루프', Node: '노드', Quadrant: '구역', Ring: '링', Sanctuary: '대피소', Shipyard: '조선소', Terminal: '터미널', World: '세계', Yard: '야드', Zone: '존', Platform: '플랫폼', Beacon: '비콘', Exchange: '교환소', Foundry: '주조소', Observatory: '관측소', Refuge: '피난처', Shard: '파편', Slipway: '슬리프웨이', Terrace: '테라스',
        'Thistle': '시들시들',
        Alpha: '알파', Beta: '베타', Gamma: '감마', Epsilon: '에플론', Omega: '오메가', Sigma: '시그마', Tau: '타우'
    };
    let result = name;
    Object.entries(phraseMap).forEach(([from, to]) => {
        result = result.replaceAll(from, to);
    });
    return result
        .split(/([ _-])/)
        .reduce((acc, part, i) => {
            if (/^[ _-]$/.test(part)) return acc + part;
            return acc + (wordMap[part] || part);
        }, '');
}

function createFantasyPlaceName(prefixes, suffixes, middles) {
    const prefix = pick(prefixes);
    const suffix = pick(suffixes);
    const middle = pick(middles);
    const number = randomInt(2, 99);
    const variants = [
        () => `${prefix} ${suffix}`,
        () => `${prefix}-${suffix}`,
        () => `${prefix} ${suffix} ${middle}`,
        () => `${prefix}-${suffix} ${middle}`,
        () => `${prefix} ${middle} ${suffix}`,
        () => `${prefix} ${suffix} ${number}`,
        () => `${prefix}-${suffix}-${number}`
    ];
    return pick(variants)();
}

function createSciFiPlaceName(prefixes, suffixes, middles) {
    const prefix = pick(prefixes);
    const suffix = pick(suffixes);
    const middle = pick(middles);
    const smallNumber = randomInt(2, 99);
    const largeNumber = randomInt(100, 9999);
    const greek = pick(['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Omega', 'Sigma', 'Tau']);
    const variants = [
        () => `${prefix} ${suffix}`,
        () => `${prefix}-${suffix}`,
        () => `${prefix} ${suffix}-${largeNumber}`,
        () => `${prefix}-${suffix}-${smallNumber}`,
        () => `${prefix} ${greek}`,
        () => `${prefix}-${greek} ${suffix}`,
        () => `${prefix} ${middle}`,
        () => `${middle} ${suffix}`,
        () => `${prefix} ${greek}-${largeNumber}`,
        () => `${prefix}-${largeNumber}`,
        () => `${prefix} ${suffix} ${middle}`
    ];
    return pick(variants)();
}

function setupCountSlider(countId) {
    const countInput = document.getElementById(countId);
    const countValue = document.getElementById(`${countId}Value`);
    if (!countInput || !countValue) return;
    countValue.innerText = clampCount(countInput.value);
    countInput.addEventListener('input', () => {
        countValue.innerText = clampCount(countInput.value);
    });
}

function setupClampedNumberInput(inputId, clampValue) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const applyClamp = () => {
        input.value = clampValue(input.value);
    };
    input.addEventListener('change', applyClamp);
    input.addEventListener('blur', applyClamp);
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') applyClamp();
    });
}

function clampCount(value) {
    return Math.min(100, Math.max(1, parseInt(value, 10) || 1));
}

function clampLoremLength(value) {
    return Math.min(1000, Math.max(10, parseInt(value, 10) || 120));
}

function createPassword() {
    const lengthInput = document.getElementById('passwordLength');
    const length = Math.min(64, Math.max(6, parseInt(lengthInput?.value, 10) || 25));
    if (lengthInput) lengthInput.value = length;
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*?';
    return Array.from({ length }, () => chars[randomInt(0, chars.length - 1)]).join('');
}

function createRandomNumber() {
    const min = parseInt(document.getElementById('randomMin')?.value, 10) || 0;
    const max = parseInt(document.getElementById('randomMax')?.value, 10) || 0;
    return randomInt(Math.min(min, max), Math.max(min, max));
}

function createUuid() {
    return crypto.randomUUID ? crypto.randomUUID() : fallbackUuid();
}

function createLoremIpsum(wordCount) {
    const words = 'lorem ipsum dolor sit amet consectetur adipiscing elit integer vitae justo arcu facilisis posuere donec sapien neque luctus pulvinar maecenas tempor magna pretium ultricies sed cursus libero fermentum curabitur blandit mauris'.split(' ');
    return Array.from({ length: wordCount }, (_, index) => {
        const word = words[index % words.length];
        return index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word;
    }).join(' ') + '.';
}

function downloadTextFile(fileName, text) {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
}

function pick(items) {
    return items[randomInt(0, items.length - 1)];
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fallbackUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, char => {
        const value = Math.floor(Math.random() * 16);
        return (char === 'x' ? value : (value & 0x3) | 0x8).toString(16);
    });
}
