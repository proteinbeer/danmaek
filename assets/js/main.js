(function() {
  // ───── Floating emoji background ─────
  (function() {
    var canvas = document.createElement('canvas');
    canvas.id = 'bg-canvas';
    document.body.prepend(canvas);
    var ctx = canvas.getContext('2d');
    var W, H;
    var emojis = [];
    var EMOJIS = ['🍜','🍪','🍫','🍘','🍟','🌮','🥨','🧇','🍩','🥜','🍿','🍭','🍬','🥮','🧁','🍕','🥪','🌭','🥗','🍣','🍦','🍰','🧀','🥞','🥓','🍔','🌯','🥟','🍱','🍙','🥯','🥖','🍞','🥐','🧆','🫘','🍠','🫐','🍇','🫑','🧅','🫕','🌽','🥭','🍒','🥠','🫓','🥥'];

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    for (var i = 0; i < 25; i++) {
      emojis.push({
        x: Math.random() * W, y: Math.random() * H,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        size: 12 + Math.random() * 10,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2 - 0.1,
        alpha: 0.1 + Math.random() * 0.15,
        sway: Math.random() * Math.PI * 2,
        swaySpeed: 0.003 + Math.random() * 0.008,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < emojis.length; i++) {
        var p = emojis[i];
        p.sway += p.swaySpeed;
        p.x += p.vx + Math.sin(p.sway) * 0.2;
        p.y += p.vy + Math.cos(p.sway * 0.6) * 0.15;
        if (p.x < -30) p.x = W + 30;
        if (p.x > W + 30) p.x = -30;
        if (p.y < -30) p.y = H + 30;
        if (p.y > H + 30) p.y = -30;
        ctx.globalAlpha = p.alpha;
        ctx.font = p.size + 'px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.emoji, p.x, p.y);
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    }
    draw();
  })();

  // ───── Wave text animation ─────
  (function() {
    var els = [];
    var t = document.querySelector('.tagline-wave');
    if (t) els.push(t);
    var pw = document.querySelector('.page-wrap--narrow');
    if (pw) {
      var h = pw.querySelector('h1');
      if (h && !h.closest('.post-content')) els.push(h);
    }
    els.forEach(function(el) {
      var text = el.textContent.trim();
      el.textContent = '';
      var chars = text.split('');
      chars.forEach(function(ch, i) {
        var span = document.createElement('span');
        span.textContent = ch === ' ' ? '\u00A0' : ch;
        span.style.cssText = 'display:inline-block;opacity:0;transform:translateY(12px);animation:waveIn 0.3s ease-out ' + (i * 0.015) + 's forwards;';
        el.appendChild(span);
      });
    });
  })();

  // Lang preference on click
  document.addEventListener('click', function(e) {
    var link = e.target.closest('a');
    if (link) {
      if (link.pathname.indexOf('/korean/') === 0) localStorage.setItem('danmaek_lang', 'ko');
      if (link.pathname.indexOf('/english/') === 0) localStorage.setItem('danmaek_lang', 'en');
    }
  });

  // Geo-redirect (homepage only)
  var pref = localStorage.getItem('danmaek_lang');
  var path = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
  if (!pref && path === '/') {
    var lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (lang.indexOf('ko') === -1 && lang.indexOf('kr') === -1) {
      window.location.href = '/';
    }
  }

  // Site brand text based on current page
  var brand = document.getElementById('site-brand');
  if (brand) {
    brand.textContent = 'Danmaek';
  }

  // ───── Pagination: 8 per page (homepage only) ─────
  (function() {
    var list = document.querySelector('.post-list');
    var isReview = document.querySelector('.page-wrap--narrow');
    if (!list || isReview) return;
    var items = Array.from(list.children);
    var PER_PAGE = 8;
    var totalPages = Math.ceil(items.length / PER_PAGE);
    if (totalPages <= 1) return;
    var currentPage = 1;
    function showPage(page) {
      currentPage = page;
      items.forEach(function(item, i) {
        var pg = Math.floor(i / PER_PAGE) + 1;
        item.style.display = (pg === page) ? '' : 'none';
      });
      renderNav();
    }
    function onClick(page, e) {
      e.preventDefault();
      showPage(page);
      window.scrollTo(0, 0);
    }
    function renderNav() {
      var nav = document.getElementById('page-nav');
      if (!nav) {
        nav = document.createElement('div');
        nav.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-top:12px;';
        nav.id = 'page-nav';
        list.parentNode.appendChild(nav);
      }
      nav.innerHTML = '';
      if (currentPage === 1) {
        var d = document.createElement('span');
        d.className = 'nav-btn nav-btn--disabled';
        d.innerHTML = '<span style="display:inline-block;transform:scaleX(-1)">➥</span>';
        nav.appendChild(d);
      } else {
        var a = document.createElement('a');
        a.href = '#';
        a.className = 'nav-btn';
        a.innerHTML = '<span style="display:inline-block;transform:scaleX(-1)">➥</span>';
        a.addEventListener('click', function(e) { onClick(currentPage - 1, e); });
        nav.appendChild(a);
      }
      var pageNum = document.createElement('span');
      pageNum.textContent = currentPage;
      pageNum.style.cssText = 'font-size:0.95rem;color:#888;font-weight:500;';
      nav.appendChild(pageNum);
      if (currentPage === totalPages) {
        var d = document.createElement('span');
        d.className = 'nav-btn nav-btn--disabled';
        d.innerHTML = '➥';
        nav.appendChild(d);
      } else {
        var a = document.createElement('a');
        a.href = '#';
        a.className = 'nav-btn';
        a.innerHTML = '➥';
        a.addEventListener('click', function(e) { onClick(currentPage + 1, e); });
        nav.appendChild(a);
      }
    }
    showPage(1);
  })();

  // Make entire post-list li clickable
  document.querySelectorAll('.post-list li').forEach(function(li) {
    li.addEventListener('click', function(e) {
      if (e.target.closest('a')) return;
      var link = this.querySelector('a.post-title');
      if (link) window.location.href = link.href;
    });
  });

  // Active nav highlight
  var navLinks = document.querySelectorAll('.masthead__nav a');
  navLinks.forEach(function(a) {
    var href = a.getAttribute('href');
    if ((href === '/about/' || href === '/about.html') && path.indexOf('/about') === 0) a.classList.add('active');
    if (href === '/korean/' && path.indexOf('/korean') === 0) a.classList.add('active');
    if (href === '/english/' && path.indexOf('/english') === 0) a.classList.add('active');
  });

  // Floating snack emojis — physics-based
  var emojis = ['🍪','🍩','🍿','🍫','🍭','🍟','🌮','🧁','🍦','🍬','🥨','🥐','🍜','🍘','🥜','🫘','🍠','🌽','🧇','🥞','🫓','🥥','🍒','🥭','🫑','🧅','🥠'];
  var floats = [];
  var GRAVITY = 5;
  var SCALE = 1 / 50;

  function spawnSnack() {
    var el = document.createElement('div');
    el.className = 'snack-float';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = (Math.random() * 100) + '%';
    el.style.fontSize = (1 + Math.random() * 0.8) + 'rem';
    el._vy = 250 + Math.random() * 250;
    el._y = 0;
    el._rot = 0;
    el._rotSpd = (Math.random() - 0.5) * 10;
    el._born = Date.now();
    el.style.opacity = 0;
    document.body.appendChild(el);
    floats.push(el);
  }

  function removeFloat(el) {
    el.classList.add('burst');
    var idx = floats.indexOf(el);
    if (idx !== -1) floats.splice(idx, 1);
    spawnBurst(el);
    setTimeout(function() { if (el.parentNode) el.remove(); }, 600);
  }

  function spawnBurst(el) {
    var rect = el.getBoundingClientRect();
    if (!rect.width) return;
    var cx = rect.left + rect.width / 2;
    var cy = rect.top + rect.height / 2;
    for (var i = 0; i < 8; i++) {
      var p = document.createElement('div');
      p.className = 'snack-particle';
      var angle = Math.random() * 2 * Math.PI;
      var dist = 50 + Math.random() * 80;
      p.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
      p.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
      p.style.left = cx + 'px';
      p.style.top = cy + 'px';
      document.body.appendChild(p);
      setTimeout(function() { p.remove(); }, 1000);
    }
  }

  function updateFloats() {
    for (var i = floats.length - 1; i >= 0; i--) {
      var el = floats[i];
      if (el.classList.contains('burst')) continue;
      el._vy -= GRAVITY;
      el._y += el._vy;
      if (el._vy < 0 && !el._falling) el._falling = true;
      el._rot += el._rotSpd;
      var px = el._y * SCALE;
      el.style.transform = 'translateY(' + (-px) + 'px) rotate(' + el._rot + 'deg)';
      if (!el._fadedIn) {
        el.style.opacity = Math.min(0.7, Math.max(0, px / 30 * 0.7));
        if (px >= 30) el._fadedIn = true;
      } else if (px < 0) {
        el.style.opacity = Math.max(0, 0.7 * (1 + px / 60));
      }
      if ((el._falling && el.getBoundingClientRect().top > window.innerHeight) || Date.now() - el._born > 15000) {
        el.remove();
        floats.splice(i, 1);
      }
    }
  }

  setInterval(spawnSnack, 1300);

  // Physics loop
  (function loop() { requestAnimationFrame(loop); updateFloats(); })();

  // Mouse proximity burst
  document.addEventListener('mousemove', function(e) {
    for (var i = floats.length - 1; i >= 0; i--) {
      var el = floats[i];
      if (el.classList.contains('burst')) continue;
      var rect = el.getBoundingClientRect();
      if (!rect.width) continue;
      var cx = rect.left + rect.width / 2;
      var cy = rect.top + rect.height / 2;
      var dx = e.clientX - cx;
      var dy = e.clientY - cy;
      if (dx * dx + dy * dy < 6400) {
        removeFloat(el);
      }
    }
  });
})();
