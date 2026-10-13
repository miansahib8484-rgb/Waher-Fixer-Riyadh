# On-Page SEO Scorecard (180-point checklist) - 2026-10-12

Legend: PASS = done and verified in the build. PARTIAL = done but one thing is left. OPEN = needs you. N/A = not relevant to this site.

| # | Section | Status | Notes |
|---|---|---|---|
| 1 | Basic on-page (title, meta, URL, H1, keywords, intent) | PASS | 67 pages: titles 62 chars or less, metas 131-159, one H1, clean URLs, no duplicate titles/metas |
| 2 | Content optimization | PARTIAL | Human rewrite done, thin pages expanded. Home and the washing-machine pillar both target "washing machine repair Riyadh" (cannibalization risk, watch in Search Console) |
| 3 | Headings | PASS | Logical H1-H3, no skipped levels, no "appliance" in headings |
| 4 | Internal and external linking | PARTIAL | Max click depth 3, no orphans, no generic anchors, 0 broken links. No outbound links to authoritative sources yet |
| 5 | Images and media | PARTIAL | WebP + srcset + lazy + width/height on all images, 0 images missing alt, logos cut from 468KB/215KB to 27KB/23KB. No image sitemap (optional), no video (N/A) |
| 6 | Technical on-page | PASS | Canonical, hreflang (+x-default), robots meta, sitemap (66 URLs), robots.txt, non-www to www 301, 404 noindex, clean URLs, static FAQ HTML matches the JS data |
| 7 | Speed and Core Web Vitals | OPEN | Cannot be measured here. Run PageSpeed Insights after deploy. Likely gains: Bootstrap, icons and Google Fonts CSS are render-blocking |
| 8 | Mobile SEO | PARTIAL | Responsive, viewport, sticky call bar. Real-device touch-target check not done |
| 9 | Structured data | PARTIAL | LocalBusiness, WebSite, Service, FAQPage, BreadcrumbList, BlogPosting, AboutPage, ContactPage all valid. Missing: sameAs, real hours (schema says 24/7), real reviews |
| 10 | UX | PASS | Breadcrumbs, clear CTAs, skip-to-content link added. Color contrast not machine-checked |
| 11 | Local SEO | PARTIAL | NAP consistent (+966591161916), areas hub, 27 neighborhoods in schema, map embeds. No real testimonials yet |
| 12 | Conversion | PARTIAL | Call + WhatsApp + form everywhere. No price list (cost explained before work), no trust badges |
| 13 | HTML and metadata | PASS | lang/dir, charset, viewport, Open Graph incl. image size and alt, Twitter title/description/image added, favicons |
| 14 | Multilingual | PASS | EN/AR URLs, reciprocal hreflang, RTL, localized metadata, natural Arabic copy |
| 15 | Advanced (topical authority, entities, AEO/GEO) | PASS | Pillar + symptom + brand + guide clusters, FAQ on 50 pages (25 EN + 25 AR), local entities, direct-answer FAQs |
| 16 | Audit and monitoring | OPEN | No Google Analytics/GA4 found in the build. Search Console verification tag exists. Set up GA4, submit sitemap, monitor indexing |

## Found during this audit
- Logo reads "WAHER FIXER RIYADH" (typo for WASHER) and shows a different brand than the site ("Automatic Washing Machine Repair") and the technician uniform ("Repairing Center"). Fix the logo file and pick one brand name everywhere.
- 2 Arabic FAQ answers in the JS data said "washing machine" on dishwasher and dryer pages (JS would have overwritten the page). Fixed.
