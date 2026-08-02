(function() {
  var path = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';

  var navLinks = document.querySelectorAll('.site-nav a, .masthead__nav a');
  navLinks.forEach(function(a) {
    var href = a.getAttribute('href');
    if (!href) return;
    var normalizedHref = href.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
    if (normalizedHref === path || (normalizedHref === '/about.html' && path.indexOf('/about') === 0)) {
      a.classList.add('active');
    }
  });

  document.querySelectorAll('[data-copy-link]').forEach(function(btn) {
    btn.addEventListener('click', async function() {
      var url = window.location.href;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(url);
        } else {
          var input = document.createElement('input');
          input.value = url;
          document.body.appendChild(input);
          input.select();
          document.execCommand('copy');
          input.remove();
        }
        btn.setAttribute('data-copied', 'true');
        setTimeout(function() { btn.removeAttribute('data-copied'); }, 1600);
      } catch(e) {
        btn.removeAttribute('data-copied');
      }
    });
  });

  document.querySelectorAll('[data-native-share]').forEach(function(btn) {
    btn.addEventListener('click', async function() {
      var title = document.title;
      var url = window.location.href;
      try {
        if (navigator.share) {
          await navigator.share({ title: title, url: url });
        } else if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(url);
          btn.setAttribute('data-copied', 'true');
          setTimeout(function() { btn.removeAttribute('data-copied'); }, 1600);
        }
      } catch(e) {}
    });
  });

  document.querySelectorAll('[data-share-buttons]').forEach(function(box) {
    if (box.children.length) return;
    var url = encodeURIComponent(window.location.href);
    var title = encodeURIComponent(document.title.replace(/\s*\|\s*단맥$/, '').replace(/\s*\|\s*Danmaek$/, ''));
    box.innerHTML = [
      '<button class="share-btn" type="button" data-copy-link aria-label="링크 복사"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7.5A2.5 2.5 0 0 1 10.5 5h6A2.5 2.5 0 0 1 19 7.5v6A2.5 2.5 0 0 1 16.5 16h-6A2.5 2.5 0 0 1 8 13.5v-6Zm2.5-.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-6Z"/><path d="M5 10a1 1 0 0 1 1 1v5.5A1.5 1.5 0 0 0 7.5 18H13a1 1 0 1 1 0 2H7.5A3.5 3.5 0 0 1 4 16.5V11a1 1 0 0 1 1-1Z"/></svg></button>',
      '<button class="share-btn share-btn--kakao" type="button" data-native-share aria-label="카카오톡 공유"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4C6.48 4 2 7.46 2 11.72c0 2.67 1.77 5.03 4.46 6.42l-.7 2.56a.5.5 0 0 0 .78.54l3.07-2.06c.77.17 1.57.26 2.39.26 5.52 0 10-3.46 10-7.72S17.52 4 12 4Z"/></svg></button>',
      '<button class="share-btn share-btn--instagram" type="button" data-native-share aria-label="Instagram 공유"><img src="/assets/images/instagram-share.png" alt="" loading="lazy"></button>',
      '<a class="share-btn share-btn--x" href="https://twitter.com/intent/tweet?url=' + url + '&text=' + title + '" target="_blank" rel="noopener noreferrer" aria-label="X 공유"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.7 10.6 20.4 3h-2.7l-5.2 5.9L8.4 3H3l7.1 10.2L3.1 21h2.7l5.6-6.3 4.4 6.3H21l-7.3-10.4Zm-2.1 2.4-1.1-1.6-4.1-5.9h1.2l3.3 4.7 1.1 1.6 4.6 6.6h-1.2L11.6 13Z"/></svg></a>',
      '<a class="share-btn share-btn--facebook" href="https://www.facebook.com/sharer/sharer.php?u=' + url + '" target="_blank" rel="noopener noreferrer" aria-label="Facebook 공유"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.4V6.7c0-.8.5-1 1-1h1.8V2.5c-.9-.1-1.8-.2-2.7-.2-2.7 0-4.5 1.6-4.5 4.6v1.5H6.8V12h2.8v9.7H14V12h2.8l.4-3.6H14Z"/></svg></a>'
    ].join('');
    box.querySelectorAll('[data-copy-link]').forEach(function(btn) {
      btn.addEventListener('click', async function() {
        try {
          await navigator.clipboard.writeText(window.location.href);
          btn.setAttribute('data-copied', 'true');
          setTimeout(function() { btn.removeAttribute('data-copied'); }, 1600);
        } catch(e) {
          btn.removeAttribute('data-copied');
        }
      });
    });
    box.querySelectorAll('[data-native-share]').forEach(function(btn) {
      btn.addEventListener('click', async function() {
        try {
          if (navigator.share) {
            await navigator.share({ title: document.title, url: window.location.href });
          } else if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(window.location.href);
            btn.setAttribute('data-copied', 'true');
            setTimeout(function() { btn.removeAttribute('data-copied'); }, 1600);
          }
        } catch(e) {}
      });
    });
  });

  var paginatedList = document.querySelector('[data-paginated-list]');
  var pagination = document.querySelector('[data-pagination]');
  if (paginatedList && pagination) {
    var items = Array.prototype.slice.call(paginatedList.querySelectorAll('a'));
    var pageSize = parseInt(paginatedList.getAttribute('data-page-size'), 10) || 6;
    var totalPages = Math.ceil(items.length / pageSize);
    var currentPage = 1;

    function goToArticlePage(page) {
      currentPage = Math.max(1, Math.min(totalPages, page));
      showArticlePage(currentPage);
      renderPagination();
    }

    function addPageButton(label, page, options) {
      var opts = options || {};
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = label;
      btn.setAttribute('data-page', page);
      btn.setAttribute('aria-label', opts.label || page + '페이지 기사 보기');
      if (opts.current) btn.setAttribute('aria-current', 'page');
      if (opts.disabled) btn.disabled = true;
      btn.addEventListener('click', function() {
        goToArticlePage(page);
        paginatedList.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      pagination.appendChild(btn);
    }

    function addEllipsis() {
      var span = document.createElement('span');
      span.className = 'pagination__ellipsis';
      span.textContent = '…';
      span.setAttribute('aria-hidden', 'true');
      pagination.appendChild(span);
    }

    function renderPagination() {
      pagination.innerHTML = '';
      addPageButton('‹', currentPage - 1, { label: '이전 기사 페이지', disabled: currentPage === 1 });

      addPageButton('1', 1, { current: currentPage === 1 });

      if (totalPages > 2) {
        if (currentPage > 2) addEllipsis();
        if (currentPage > 1 && currentPage < totalPages) {
          addPageButton(String(currentPage), currentPage, { current: true });
        }
        if (currentPage < totalPages - 1) addEllipsis();
      }

      if (totalPages > 1) {
        addPageButton(String(totalPages), totalPages, { current: currentPage === totalPages });
      }

      addPageButton('›', currentPage + 1, { label: '다음 기사 페이지', disabled: currentPage === totalPages });
    }

    function showArticlePage(page) {
      items.forEach(function(item, index) {
        var start = (page - 1) * pageSize;
        var end = start + pageSize;
        item.hidden = index < start || index >= end;
      });
    }

    if (totalPages > 1) {
      goToArticlePage(1);
    }
  }

  var articleLinks = [
    { href: '/summer-vacation-airport-traffic-2026.html', title: '8월 2일 인천공항 최대 혼잡, 휴가철 교통 체크포인트' },
    { href: '/median-income-2027-brief.html', title: '2027년 기준 중위소득 6.7% 인상, 복지 기준이 넓어진다' },
    { href: '/ai-cctv-npu-public-safety.html', title: '공공 CCTV에 국산 NPU 도입, AI 관제가 시작된다' },
    { href: '/foreign-tourists-first-half-2026.html', title: '상반기 외국인 관광객 1071만 명, K-관광 회복세' },
    { href: '/korea-brazil-education-moc.html', title: '한·브라질 교육 협력각서, 한국어와 AI 교육이 넓어진다' },
    { href: '/leverage-etn-investor-limit.html', title: '단일종목 레버리지 상품, 투자한도 제한까지 거론된 이유' },
    { href: '/urban-minbak-price-penalty.html', title: '도시민박·한옥체험업 바가지 요금, 1차 적발도 영업정지' },
    { href: '/getbol-unesco-expansion-2026.html', title: '한국의 갯벌 세계유산 확대, 여수·고흥·무안·서산 추가' },
    { href: '/multi-child-highway-discount.html', title: '다자녀 가구 고속도로 통행료 할인, 2자녀 10%·3자녀 20%' },
    { href: '/public-overtime-compensation.html', title: '공무원 초과근무 1일 상한 폐지, 일한 만큼 보상' },
    { href: '/passive-administration-discipline.html', title: '소극행정 공무원 최소 감봉, 징계 기준 강화' },
    { href: '/state-awards-cancelled-198.html', title: '정부포상 198점 취소, 반헌법·간첩조작 사건 포상 정비' },
    { href: '/youth-finance-counseling-free.html', title: '청년 1:1 재무상담 무료, 19~34세라면 확인할 제도' },
    { href: '/youth-fellowship-cheongwadae.html', title: '청와대 청년 펠로우십 모집, 8월 5일까지 신청' },
    { href: '/youth-monthly-rent-support.html', title: '청년월세 지원, 매달 최대 20만 원·최장 24개월' },
    { href: '/smr-supply-chain-strategy.html', title: '차세대 SMR 시장 선점, 공급망과 제도 개선이 핵심' },
    { href: '/deposit-token-blockchain-payment.html', title: '예금토큰 결제 인프라, 블록체인 실사용으로 가나' },
    { href: '/travel-quarantine-fruit-sausage.html', title: '해외여행 후 생과일·소시지 반입 금지, 특별검역 실시' }
  ];

  function addArticleArrowNav() {
    var article = document.querySelector('.news-article');
    if (!article) return;
    var currentPath = window.location.pathname.replace(/\/index\.html$/, '');
    var currentIndex = articleLinks.findIndex(function(item) { return item.href === currentPath; });
    if (currentIndex === -1) return;
    if (article.querySelector('.article-nav')) return;

    var nav = document.createElement('nav');
    nav.className = 'article-nav';
    nav.setAttribute('aria-label', '\uC774\uC804\u00B7\uB2E4\uC74C \uAE00');

    function makeLink(item, direction) {
      var a = document.createElement('a');
      a.className = 'article-nav__link article-nav__link--' + direction;
      a.href = item.href;
      var label = direction === 'prev' ? '\u2190 \uC774\uC804 \uAE00' : '\uB2E4\uC74C \uAE00 \u2192';
      a.innerHTML = '<span>' + label + '</span><strong>' + item.title + '</strong>';
      return a;
    }

    if (currentIndex > 0) nav.appendChild(makeLink(articleLinks[currentIndex - 1], 'prev'));
    if (currentIndex < articleLinks.length - 1) nav.appendChild(makeLink(articleLinks[currentIndex + 1], 'next'));

    var shareBox = article.querySelector('.share-box');
    if (shareBox) shareBox.insertAdjacentElement('afterend', nav);
    else article.appendChild(nav);
  }

  addArticleArrowNav();


  var contactForm = document.querySelector('form[action*="formspree"]');
  if (!contactForm) return;

  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    var btn = document.getElementById('contactSubmitBtn');
    var sent = document.getElementById('contactSent');
    var errEl = document.getElementById('contactError');
    var fields = this.querySelectorAll('input, textarea');
    if (!btn || !sent || !errEl) return;

    btn.disabled = true;
    btn.textContent = 'Sending...';
    sent.classList.remove('show');
    errEl.classList.remove('show');
    fields.forEach(function(f) { f.disabled = true; });

    try {
      var data = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
      };
      var r = await fetch(this.action, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
      });
      if (r.ok) {
        this.reset();
        sent.textContent = 'Message sent!';
        sent.classList.add('show');
        setTimeout(function() { sent.classList.remove('show'); }, 3000);
      } else {
        var body = await r.json();
        errEl.textContent = 'Send failed (' + r.status + '): ' + (body.error || JSON.stringify(body));
        errEl.classList.add('show');
      }
    } catch(e) {
      errEl.textContent = 'Network error: ' + e.message;
      errEl.classList.add('show');
    }

    btn.disabled = false;
    btn.textContent = 'Send';
    fields.forEach(function(f) { f.disabled = false; });
  });
})();
