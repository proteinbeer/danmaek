(function() {
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
      window.location.href = '/english/';
    }
  }

  // Site brand text based on current page
  var brand = document.getElementById('site-brand');
  if (brand) {
    var p = window.location.pathname;
    if (p.indexOf('/about') !== -1) {
      brand.textContent = 'ABOUT';
    } else if (p.indexOf('/english') === 0) {
      brand.textContent = 'DMPRESS';
    } else {
      brand.textContent = '단맥프레스';
    }
  }

  // Active nav highlight
  var navLinks = document.querySelectorAll('.masthead__nav a');
  navLinks.forEach(function(a) {
    var href = a.getAttribute('href');
    if ((href === '/about/' || href === '/about.html') && path.indexOf('/about') === 0) a.classList.add('active');
    if (href === '/korean/' && path.indexOf('/korean') === 0) a.classList.add('active');
    if (href === '/english/' && path.indexOf('/english') === 0) a.classList.add('active');
  });

  // Floating snack emojis
  var snacks = ['🍪','🍩','🍿','🍫','🍭','🍟','🌮','🧁','🍦','🍬','🥨','🥐'];
  var snackEls = [];

  function burstSnack(el) {
    if (el.classList.contains('burst')) return;
    el.classList.add('burst');
    var rect = el.getBoundingClientRect();
    var cx = rect.left + rect.width / 2;
    var cy = rect.top + rect.height / 2;
    var emoji = el.textContent;
    for (var i = 0; i < 8; i++) {
      var p = document.createElement('div');
      p.className = 'snack-particle';
      p.textContent = emoji;
      var angle = Math.random() * 2 * Math.PI;
      var dist = 50 + Math.random() * 80;
      p.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
      p.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
      p.style.left = cx + 'px';
      p.style.top = cy + 'px';
      p.style.fontSize = (0.5 + Math.random() * 0.6) + 'rem';
      document.body.appendChild(p);
      setTimeout(function() { p.remove(); }, 1000);
    }
    setTimeout(function() { el.remove(); }, 200);
  }

  setInterval(function() {
    var el = document.createElement('div');
    el.className = 'snack-float';
    el.textContent = snacks[Math.floor(Math.random() * snacks.length)];
    el.style.left = (Math.random() * 100) + '%';
    el.style.fontSize = (1 + Math.random() * 0.8) + 'rem';
    el.style.animationDuration = (5 + Math.random() * 4) + 's';
    document.body.appendChild(el);
    snackEls.push(el);
    setTimeout(function() {
      var idx = snackEls.indexOf(el);
      if (idx !== -1) snackEls.splice(idx, 1);
      if (!el.classList.contains('burst')) el.remove();
    }, 10000);
  }, 1300);

  // Mouse proximity burst
  document.addEventListener('mousemove', function(e) {
    for (var i = snackEls.length - 1; i >= 0; i--) {
      var el = snackEls[i];
      if (el.classList.contains('burst')) continue;
      var rect = el.getBoundingClientRect();
      var cx = rect.left + rect.width / 2;
      var cy = rect.top + rect.height / 2;
      var dx = e.clientX - cx;
      var dy = e.clientY - cy;
      if (dx * dx + dy * dy < 2500) {
        burstSnack(el);
      }
    }
  });

})();
