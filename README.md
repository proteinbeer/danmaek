# Danmaek

Danmaek is an English-language blog featuring practical reviews of Asian
snacks, instant noodles, and drinks. The live site is published at
[danmaek.com](https://danmaek.com).

## Site structure

- `index.html` lists every published review.
- `*-review.html` files are standalone review pages.
- `assets/css/main.css` contains the site styles.
- `assets/js/main.js` contains shared visual interactions and pagination.
- `assets/js/nav.js` controls previous/next navigation between reviews.
- `assets/images/` contains locally hosted article images.
- `sitemap.xml` and `robots.txt` support search indexing.

The site is plain static HTML, CSS, and JavaScript. The `.nojekyll` file keeps
GitHub Pages from running a Jekyll build.

## Local preview

Run any static file server from the repository root. For example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publishing a review

1. Add a new `*-review.html` page with canonical, Open Graph, Twitter, and
   Article structured-data metadata.
2. Add the review to `index.html` in newest-first order.
3. Add the same path to `assets/js/nav.js` in newest-first order.
4. Add the canonical URL to `sitemap.xml`.
5. Verify local images, internal links, and page metadata before publishing.
