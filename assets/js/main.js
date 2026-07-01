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

})();
