# Danmaek

Danmaek is a bilingual static news briefing site. The Korean site is the main
site at [danmaek.com](https://danmaek.com), and the English site is available
under `/en/`.

## Site structure

- `index.html` is the Korean homepage.
- `about.html` and `privacy.html` are Korean support pages.
- `en/index.html`, `en/about.html`, and `en/privacy.html` are English pages.
- Future news article pages should be standalone HTML files.
- `assets/css/main.css` contains the shared site styles.
- `assets/js/main.js` contains shared navigation and contact-form behavior.
- `assets/js/nav.js` is reserved for future article ordering.
- `sitemap.xml` and `robots.txt` support search indexing.
- `ads.txt`, `CNAME`, and verification files support site operations.

The site is plain static HTML, CSS, and JavaScript. The `.nojekyll` file keeps
GitHub Pages from running a Jekyll build.

## Local preview

Run any static file server from the repository root. For example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publishing a news article

1. Add the Korean article page first.
2. Add an English version under `/en/` when needed.
3. Add language switch links and `hreflang` alternates between matching pages.
4. Add the new URLs to `sitemap.xml`.
5. Verify facts, sources, internal links, page metadata, and mobile layout
   before publishing.
