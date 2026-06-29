---
layout: single
title: About / Privacy Policy
permalink: /about/
---

## About

한국과 영미권의 주요 소식을 각각의 언어로 전달합니다.


---

## Privacy Policy / 개인정보처리방침

This website uses Google AdSense to display advertisements. This section explains how your data is handled.

### Information We Collect
- **Cookies**: We use cookies to serve personalized ads and analyze site traffic via Google Analytics.
- **Log Data**: Your IP address, browser type, and pages visited may be collected anonymously.

### Google AdSense
We use Google AdSense, which uses cookies to serve ads based on your previous visits to this site or other sites. You can opt out of personalized advertising by visiting [Google Ads Settings](https://adssettings.google.com/).

### Third-Party Vendors
- Google, as a third-party vendor, uses cookies to serve ads.
- Google's use of the DART cookie enables it to serve ads based on your visits to this site and other sites on the Internet.

### Your Rights
You can disable cookies in your browser settings. You can also opt out of Google Analytics by installing the [Google Analytics Opt-out Browser Add-on](https://tools.google.com/dlpage/gaoptout).

*Last updated: June 29, 2026*

---

## Contact

<form id="contactForm" action="https://formspree.io/f/mjggknek" method="POST" style="max-width: 500px;">
  <p style="margin-bottom:1rem;color:#555;">Send feedback or suggestions.</p>
  <input name="name" type="text" placeholder="Name" required style="width:100%;margin-bottom:0.5rem;padding:0.6rem;border:1px solid #ddd;border-radius:8px;font-size:0.95rem;">
  <input name="email" type="email" placeholder="Email" required style="width:100%;margin-bottom:0.5rem;padding:0.6rem;border:1px solid #ddd;border-radius:8px;font-size:0.95rem;">
  <textarea name="message" rows="4" placeholder="Message" required style="width:100%;margin-bottom:0.5rem;padding:0.6rem;border:1px solid #ddd;border-radius:8px;font-size:0.95rem;resize:vertical;"></textarea>
  <button type="submit" id="contactSubmitBtn" style="width:100%;padding:0.7rem;background:#2c3e50;color:#fff;border:none;border-radius:8px;font-size:1rem;font-weight:bold;cursor:pointer;">Send Message</button>
  <div id="contactSent" style="display:none;margin-top:0.5rem;padding:0.5rem;background:#d4edda;color:#155724;border-radius:8px;text-align:center;font-size:0.9rem;">Sent! Thank you.</div>
</form>

<script>
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  var btn = document.getElementById('contactSubmitBtn');
  var sent = document.getElementById('contactSent');
  var fields = this.querySelectorAll('input, textarea');
  btn.disabled = true; btn.textContent = 'Sending...';
  fields.forEach(function(f) { f.disabled = true; });
  try {
    var r = await fetch(this.action, { method: 'POST', body: new FormData(this), headers: { Accept: 'application/json' } });
    if (r.ok) { this.reset(); sent.style.display = 'block'; setTimeout(function() { sent.style.display = 'none'; }, 3000); }
  } catch(e) {}
  btn.disabled = false; btn.textContent = 'Send Message';
  fields.forEach(function(f) { f.disabled = false; });
});
</script>
