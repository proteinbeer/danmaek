var articleOrder = [
  '/nongshim-chapagetti-review.html',
  '/paldo-bibimmen-review.html',
  '/nongshim-postick-review.html',
  '/nongshim-gamjagg-review.html',
  '/saewookkang-review.html',
  '/choco-pie-review.html',
  '/shin-ramyun-review.html',
  '/lotte-pepero-review.html',
  '/lotte-kancho-review.html',
  '/honey-butter-chip-review.html',
  '/nongshim-onion-ring-review.html',
  '/binggrae-banana-milk-review.html',
  '/samyang-buldak-review.html',
  '/calbee-jagarico-salad-review.html',
  '/orion-kkobuk-chip-review.html'
];

document.addEventListener('DOMContentLoaded', function() {
  var idx = articleOrder.indexOf(window.location.pathname);
  if (idx === -1) return;

  var prevBtn = document.querySelector('.nav-prev');
  var nextBtn = document.querySelector('.nav-next');
  if (!prevBtn || !nextBtn) return;

  if (idx > 0) {
    prevBtn.href = articleOrder[idx - 1];
  } else {
    prevBtn.outerHTML = '<span class="nav-btn--disabled"><span style="display:inline-block;transform:scaleX(-1)">\u27a5</span></span>';
  }

  if (idx < articleOrder.length - 1) {
    nextBtn.href = articleOrder[idx + 1];
  } else {
    nextBtn.outerHTML = '<span class="nav-btn--disabled">\u27a5</span>';
  }
});
