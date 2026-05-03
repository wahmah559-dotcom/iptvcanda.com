# IPTV Canada — iptvcanda.com

Production-ready IPTV website for the Canadian market. Dark theme, mobile-first, full SEO, WhatsApp-driven lead conversion.

---

## Project Structure

```
iptvcanda/
├── index.html          ← Home page (hero, features, testimonials, FAQ, SEO content)
├── plans.html          ← Subscription plans with toggle & comparison table
├── contact.html        ← Contact page with WhatsApp CTA & form
├── css/
│   └── style.css       ← Complete stylesheet (dark theme, animations, responsive)
├── js/
│   └── main.js         ← All JavaScript (scroll, FAQ, plan toggle, counters, cookie)
├── images/             ← Add your images here (see Image Checklist below)
├── robots.txt          ← SEO crawler directives
├── sitemap.xml         ← All 3 pages with metadata
├── manifest.json       ← PWA manifest
└── .htaccess           ← HTTPS redirect, Gzip, caching, security headers
```

---

## Deploy to Hostinger / cPanel

### Option A — File Manager
1. Log in to your Hostinger / cPanel account
2. Open **File Manager** → navigate to `public_html/`
3. Delete any default files (`index.html`, etc.)
4. Upload **all files and folders** from this project, preserving the directory structure
5. Ensure `.htaccess` is visible (enable "Show Hidden Files" if needed)
6. Visit `https://iptvcanda.com` — your site is live!

### Option B — FTP (FileZilla)
1. Open FileZilla → connect using your Hostinger FTP credentials (Host/User/Password/Port 21)
2. Navigate to `/public_html/` on the remote side
3. Drag and drop all project files from local to remote
4. Verify `.htaccess` uploaded (it's hidden — check "Show hidden files" in FileZilla settings)

### SSL Certificate
- In Hostinger cPanel, go to **SSL/TLS** → enable **Free SSL (Let's Encrypt)**
- The `.htaccess` already forces all HTTP → HTTPS automatically

---

## Image Checklist (add to `/images/`)

| File | Dimensions | Purpose |
|------|-----------|---------|
| `og-home.jpg` | 1200×630 | Open Graph / social share — home page |
| `og-plans.jpg` | 1200×630 | Open Graph — plans page |
| `og-contact.jpg` | 1200×630 | Open Graph — contact page |
| `favicon.png` | 32×32 | Browser tab icon |
| `apple-touch-icon.png` | 180×180 | iOS home screen icon |
| `logo.png` | 200×60 | Schema.org organization logo |
| `icon-192.png` | 192×192 | PWA icon |
| `icon-512.png` | 512×512 | PWA icon (splash screen) |

> **Tip:** Use your brand colors (#e50914 red, #0a0e27 navy) for all images. Canva or Figma work great for quick OG image creation.

---

## Post-Deployment SEO Checklist

### Week 1 — Indexing

- [ ] **Google Search Console** — go to [search.google.com/search-console](https://search.google.com/search-console), add property `https://iptvcanda.com`, verify via HTML tag or DNS
- [ ] Submit sitemap: `https://iptvcanda.com/sitemap.xml`
- [ ] **Bing Webmaster Tools** — [bing.com/webmasters](https://bing.com/webmasters), add site, submit sitemap
- [ ] **Google Analytics 4** — create property, add GA4 tracking script before `</head>` on all pages
- [ ] Test with **Google PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev) — aim for 90+ on all metrics
- [ ] Test with **Google Rich Results Test**: [search.google.com/test/rich-results](https://search.google.com/test/rich-results) — verify FAQ, Product, LocalBusiness schema

### Week 1-2 — Local & Business Listings

- [ ] **Google Business Profile** — [business.google.com](https://business.google.com) — create listing for "IPTV Canada", category "Internet Provider", add WhatsApp number
- [ ] **Yelp Canada** — add business listing
- [ ] **Yellow Pages Canada** — [yellowpages.ca](https://yellowpages.ca) free listing
- [ ] **Canada411** — add business listing
- [ ] **Trustpilot** — create company page, ask early customers for reviews

### Month 1 — Backlinks

- [ ] **Reddit** — post helpful IPTV guides on r/canada, r/cordcutters (no spam — add value)
- [ ] **Facebook Groups** — join Canadian cord-cutting groups, share useful content
- [ ] **Forum signatures** — Canadian tech forums (TekSavvy, DSLReports Canada)
- [ ] **Guest posts** — reach out to Canadian tech/streaming blogs for collaboration
- [ ] **Directory submissions** — submit to Canadian business directories

### Ongoing — Content SEO

- [ ] Update `sitemap.xml` `<lastmod>` date with each content change
- [ ] Add a blog section (future) targeting long-tail keywords:
  - "how to set up IPTV on Firestick Canada"
  - "best IPTV apps for Canada 2026"
  - "IPTV vs cable Canada price comparison"
- [ ] Monitor rankings with **Google Search Console** Performance report
- [ ] A/B test hero CTA button text for better conversion

---

## WhatsApp Number

All buttons and links use: **+1 786 735 2904**
WhatsApp URL format: `https://wa.me/17867352904?text=YOUR_MESSAGE`

To change the number: find and replace `17867352904` across all 3 HTML files.

---

## Customization Tips

| What to change | Where |
|----------------|-------|
| Business phone / WhatsApp | All `.html` files — search `17867352904` |
| Prices | `plans.html` plan cards + `js/main.js` `priceData` object |
| Colors | `css/style.css` `:root` CSS variables |
| FAQ questions | `index.html` FAQ section + JSON-LD schema |
| Testimonials | `index.html` testimonials section |
| Domain name | `sitemap.xml`, `robots.txt`, JSON-LD in all pages |

---

## Schema.org Validation Checklist

### Tools

| Tool | URL | What it checks |
|------|-----|----------------|
| Google Rich Results Test | https://search.google.com/test/rich-results | FAQPage, Product, HowTo, Review eligibility |
| Schema.org Validator | https://validator.schema.org | Full JSON-LD validity |
| Google Search Console | https://search.google.com/search-console | Rich result impressions & errors in production |

### Page-by-Page Schema Inventory

| Page | Schema Types | Rich Result Eligible |
|------|-------------|---------------------|
| `index.html` | Organization, LocalBusiness (aggregateRating 4.8/247), WebSite (SearchAction), Service + OfferCatalog, FAQPage (10 questions), Review ×5 | FAQ accordion, Review stars |
| `plans.html` | Organization, BreadcrumbList, Product ×4 (with aggregateRating) | Product price + rating rich snippets |
| `contact.html` | Organization, LocalBusiness (aggregateRating, geo, openingHoursSpecification), BreadcrumbList | LocalBusiness knowledge panel |
| `blog.html` | Organization, BreadcrumbList, Blog | — |
| `blog/best-iptv-canada-2026.html` | Article (wordCount, inLanguage, keywords), FAQPage (5 Q), BreadcrumbList | FAQ accordion |
| `blog/how-to-watch-nhl-on-iptv-canada.html` | Article, FAQPage (4 Q), BreadcrumbList | FAQ accordion |
| `blog/iptv-vs-cable-tv-canada.html` | Article, FAQPage (4 Q), BreadcrumbList | FAQ accordion |
| `blog/best-iptv-for-firestick-canada.html` | Article, HowTo (4 steps), FAQPage (5 Q), BreadcrumbList | HowTo steps, FAQ accordion |
| `blog/how-to-install-iptv-on-smart-tv.html` | Article, HowTo (4 steps), FAQPage (4 Q), BreadcrumbList | HowTo steps, FAQ accordion |
| `blog/iptv-toronto-guide.html` | Article, LocalBusiness (Toronto geo), FAQPage (4 Q), BreadcrumbList | FAQ accordion, LocalBusiness |
| `blog/iptv-montreal-guide.html` | Article, LocalBusiness (Montreal geo), FAQPage (4 Q), BreadcrumbList | FAQ accordion, LocalBusiness |
| `blog/iptv-vancouver-guide.html` | Article, LocalBusiness (Vancouver geo), FAQPage (4 Q), BreadcrumbList | FAQ accordion, LocalBusiness |
| `blog/is-iptv-legal-in-canada.html` | Article, FAQPage (4 Q), BreadcrumbList | FAQ accordion |
| `blog/best-4k-iptv-channels-canada.html` | Article, FAQPage (5 Q), BreadcrumbList | FAQ accordion |

### Pricing Reference (all files use these values)

| Plan | Price | Duration | Schema SKU |
|------|-------|----------|------------|
| Starter | CA$19 | 1 Month | IPTV-CA-STARTER-1M |
| Standard | CA$29 | 3 Months | IPTV-CA-STANDARD-3M |
| Premium | CA$39 | 6 Months | IPTV-CA-PREMIUM-6M |
| Ultimate | CA$49 | 12 Months | IPTV-CA-ULTIMATE-12M |

### Validation Steps

1. Open Google Rich Results Test
2. Enter each page URL or paste HTML source
3. Confirm "FAQPage" → green checkmark (eligible for FAQ rich results)
4. Confirm "Product" on plans.html → price and rating stars eligible
5. Confirm "HowTo" on firestick and smart TV guides → steps eligible
6. Open Schema.org Validator → paste JSON-LD blocks to check for errors
7. After deploying, monitor Search Console → Enhancements section for any issues

---

## Technical Notes

- **No frameworks** — pure HTML5, CSS3, Vanilla JS
- **Font loading** — Google Fonts loaded via `@import` in CSS (preconnect in HTML)
- **Font Awesome 6** — loaded via CDN for icons
- **JavaScript** — deferred (`<script defer>`) for performance
- **Accessibility** — ARIA labels, skip link, semantic HTML5, keyboard navigation
- **Cookie consent** — PIPEDA-friendly (Canadian privacy law), stored in `localStorage`
- **Plans** — Starter $19/1mo, Standard $29/3mo, Premium $39/6mo, Ultimate $49/12mo (flat, no recurring)

---

*Built for iptvcanda.com — 2026*
