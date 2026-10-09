# Website Audit Report: www.siyana-riyadh.com (Automatic Washing Machine Repair, Riyadh)
Audit date: 2026-10-07 · Scope: 66 pages (33 English + 33 Arabic under /ar) + 404 · Method: full crawl of the build files, rendered-DOM runs (jsdom), schema validator, and live fetches of 3 live URLs.

**Verification rules followed.** Every number below was measured in this audit. Where a signal could not be measured it is marked "Unable to verify from crawl data". No Lighthouse, PageSpeed, Search Console, Analytics, backlink or ranking data was available.

**Important scope note.** Most findings describe the *build* (the files prepared in this project). The live site, when fetched, is an **older build** (see Critical Issue 1), so live visitors do not yet see the fixes listed here.

## 1. Executive Summary
- The build is technically clean: 0 broken internal links across 1755 requests, 0 orphan pages, canonical + hreflang reciprocal on all 33 EN/AR pairs, valid JSON-LD on all 66 pages, 0 JavaScript errors on 50 rendered pages.
- Three serious defects were found and fixed in this build: the contact form discarded submissions while telling users "request received"; the home page showed three testimonials that could not be verified (one originally named a different business); and the live pages hide most content from non-JavaScript crawlers.
- The live site is still the older build. Deploying the new build is the single highest-impact action.
- Remaining weaknesses are mostly **owner-input items**: EEAT proof (credentials, real reviews, team), confirmed business hours, confirmation of service claims taken from keyword lists, and thin utility/article pages.

## 2. Website Health Score
**81/100** = 38 of 47 verified checks passed. This is an *audit checklist score* defined for this report (equal weight per check). It is not a Lighthouse, PageSpeed or Google score. Core Web Vitals are excluded because they could not be measured.

**Technical** (11/12)
- PASS: robots.txt present with Sitemap line
- PASS: sitemap.xml lists all 66 pages with hreflang alternates
- PASS: Canonical on every page (self-referencing, absolute, www)
- PASS: hreflang en/ar/x-default reciprocal on every pair
- PASS: 0 broken internal links (1755 requests)
- PASS: 0 orphan pages (every page has 3+ inbound links)
- PASS: No http:// (mixed content) references
- PASS: Clean URLs, apex-to-www redirect rule defined
- PASS: 404 page with noindex
- PASS: Content present in static HTML without JavaScript (0 empty JS containers)
- PASS: Security headers declared in vercel.json
- FAIL: Live site serves the audited build

**On-page** (10/10)
- PASS: Unique title on every page
- PASS: Titles 62 characters or less
- PASS: Meta descriptions 131-159 characters
- PASS: Exactly one H1 per page
- PASS: No skipped heading levels
- PASS: Non-decorative images have alt text
- PASS: Open Graph tags on every page
- PASS: Keyword in title and H1 of service pages (EN + AR)
- PASS: Images have width/height (306 of 306)
- PASS: Responsive srcset on content images (152 of 306; the rest are logos and brand icons)

**Schema** (5/6)
- PASS: JSON-LD valid on all 66 pages (custom validator, 0 issues)
- PASS: LocalBusiness with name, phone, address, geo, hours, map
- PASS: BreadcrumbList matches visible breadcrumb
- PASS: FAQPage questions all visible on page
- PASS: No fabricated rating/review markup
- FAIL: sameAs social profiles

**Content** (5/7)
- PASS: Service pillar pages 900+ words with FAQ
- PASS: Symptom pages cover their key entities (4 of 4 at 100%)
- PASS: Dishwasher/dryer/washer-dryer pages cover key entities
- PASS: Contextual internal links in body copy of all article pages
- FAIL: No thin informational pages (<350 words)
- PASS: Unique content across new pages (max 5-word-shingle overlap 22%)
- FAIL: Price/cost ranges shown to users

**UX / Conversion** (5/6)
- PASS: Call + WhatsApp CTA on every page
- PASS: Contact form actually delivers the request
- PASS: Breadcrumbs on all inner pages
- PASS: Viewport meta on every page
- PASS: Hero claims match what the site does (upfront pricing claim corrected)
- FAIL: Live hours consistent everywhere

**EEAT** (2/6)
- FAIL: Named expert / technician profile
- FAIL: Licence, credentials or years in business stated
- FAIL: Verified customer reviews shown
- FAIL: Privacy policy / terms page
- PASS: Business name, phone, address consistent (NAP)
- PASS: Freshness signals (published/updated line on guides)

## 3. Critical Issues
### 1. Live site serves an older build than the audited files
- Severity: Critical
- Affected pages: All live pages (verified on 3 live URLs: home, /services/automatic-washing-machine-repair, and the homepage redirect from siyana-riyadh.com)
- Why it matters: Fetched live pages show the previous build: home title "Home Appliance Repair in Riyadh | Automatic Washing Machine Repair" (66 characters), static footer hours "Sat–Thu, 9:00 AM – 9:00 PM", and on the service page the sections Common Problems, What We Repair and Our Repair Process contain no content in the static HTML, with the FAQ showing the placeholder question "Do you repair this appliance?" and the answer "Short description."
- SEO impact: Crawlers that do not run JavaScript, and AI answer systems, see empty sections and placeholder text. None of the 42 new cluster pages, the schema, the sitemap entries or the keyword work exist live. Unable to verify from crawl data: live robots.txt and sitemap (the fetch tool could not request them).
- User impact: Visitors and the Google Ads reviewer land on pages with missing content and placeholder text.
- Exact fix: Deploy the current build (siyana-riyadh-site.zip) to Vercel production. Then re-fetch the live home page and one new URL (for example /problems/washing-machine-not-spinning) to confirm.
- Priority: P0 (today)
- Status: OPEN: needs deployment by the owner

### 2. Contact form discarded every submission
- Severity: Critical
- Affected pages: contact.html, ar/contact.html
- Why it matters: The submit handler in js/main.js called preventDefault(), reset the form and showed "Thank you! Your request has been received", but sent the data nowhere.
- SEO impact: No direct ranking effect, but it breaks the conversion funnel that SEO and Ads traffic depend on.
- User impact: Users believed a request was submitted; it was lost.
- Exact fix: Replaced with a handler that validates name, phone and appliance, builds a WhatsApp message to +966 59 116 1916 and opens it (with a tap-here fallback link). Removed the duplicate "Service Required" select that repeated "Appliance Type". Tested in a rendered DOM: empty form shows an error, a filled form opens the correct wa.me link in EN and AR.
- Priority: P0
- Status: FIXED in build

### 3. Unverifiable testimonials on the home page
- Severity: Critical
- Affected pages: index.html, ar/index.html
- Why it matters: Three testimonials carried only a first name and initial, no date or source link. One of them originally named a different business ("Waher Fixer"), which indicates template text rather than reviews of this business. Fake or unverifiable reviews breach Google Ads misrepresentation rules and weaken trust.
- SEO impact: Risk of ad disapproval and a trust penalty; no review markup was ever added, so no structured-data violation.
- User impact: Visitors may not trust the claims.
- Exact fix: Removed the testimonial cards and replaced the section with a button to your Google Maps listing ("See what customers say on Google"). The text is still stored in js/translations.js (testimonialsData) and can be restored only if you confirm they are real customers. Best fix: collect real Google reviews and show them with names and dates.
- Priority: P0
- Status: FIXED in build; real reviews NEEDED from owner

## 4. Technical SEO Findings
Verified OK: robots.txt present; sitemap lists all 66 pages with hreflang alternates and lastmod; canonical absolute and www on every page; hreflang reciprocal; clean URLs; 0 http:// references; 404 page noindex; 0 redirect chains defined in the build (apex-to-www is one hop; live redirect behaviour for other URLs: Unable to verify from crawl data).
JavaScript rendering: before this build the service and home sections were filled by JavaScript only. The build now bakes the rendered HTML into every page (0 empty JS containers; rendered text equals static text on all pages tested).
Security headers (nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy) are declared in vercel.json. Whether the live server sends them: Unable to verify from crawl data.

### 4. Four render-blocking stylesheets per page, three from third-party CDNs
- Severity: Medium
- Affected pages: All 66 pages
- Why it matters: Each page loads 4 stylesheets in the head: https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&amp;family=Inter:wght@400;500;600;700&amp;family=Tajawal:wght@400;500;700;800&amp;display=swap, https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css, https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css, css/style.css . Scripts sit at the end of the body without defer (not blocking rendering).
- SEO impact: May delay first paint; actual Core Web Vitals impact: Unable to verify from crawl data.
- User impact: Slower first render on weak mobile connections is plausible but unmeasured.
- Exact fix: Measure with PageSpeed Insights after deploy. If LCP is above 2.5 s, self-host Bootstrap and the icon font, and inline the critical CSS.
- Priority: P2
- Status: OPEN

### 5. translations.js (71 KB) loads on every page
- Severity: Low
- Affected pages: All 66 pages
- Why it matters: The language dictionary (71 KB) is loaded on every page even though the content is now baked into the HTML. Total JS: translations 71 KB, main 23 KB, illustrations 12 KB, plus Bootstrap bundle from a CDN.
- SEO impact: Extra bytes on every view; CWV effect unmeasured.
- User impact: Minor.
- Exact fix: Add defer to the three local scripts, and later load translations.js only for pages that re-render.
- Priority: P3
- Status: OPEN

## 5. On-Page SEO Findings
Verified: all titles unique and 62 characters or less; meta descriptions 131-159 characters with a call to action; one H1 per page; no skipped heading levels; Open Graph and Twitter tags on every page; URLs lowercase with hyphens; 0 generic anchor texts ("click here"); average 17 contextual links per service pillar page.
### 6. Home and Services page titles were near-identical
- Severity: Medium
- Affected pages: index.html, services.html
- Why it matters: Both titles used the same words ("Washing Machine, Dishwasher & Dryer Repair"), a cannibalization risk for the same query.
- SEO impact: Two pages competing for one phrase.
- User impact: None.
- Exact fix: Home title is now "Appliance Repair in Riyadh: Washers, Dishwashers & Dryers"; Services title is "Our Repair Services: Washing Machine, Dishwasher, Dryer". Token overlap fell to below the 0.6 flag threshold for these two pages.
- Priority: P2
- Status: FIXED in build

### 7. Parallel titles for symptom pages
- Severity: Low
- Affected pages: problems/washing-machine-not-draining, problems/washing-machine-not-spinning
- Why it matters: Titles share 71% of their words. The pages target different symptoms, so this is a monitor item, not an error.
- SEO impact: Low cannibalization risk.
- User impact: None.
- Exact fix: No change now; check Search Console queries after indexing.
- Priority: P3
- Status: MONITOR

### 8. Hero images shared one identical alt text on new pages
- Severity: Medium
- Affected pages: 42 cluster pages
- Why it matters: The decorative hero background carried the same alt text on every cluster page.
- SEO impact: Duplicate alt text is weak image SEO.
- User impact: Screen readers announced the same text repeatedly.
- Exact fix: Hero background images now use alt="" (decorative), consistent with the rest of the site. Remaining empty alts: 52, all in the decorative hero layer (verified).
- Priority: P3
- Status: FIXED in build

## 6. Content Quality Analysis
Main-content words per page (excluding header, footer, breadcrumb): English min 48, average 491, max 1274; Arabic min 69, average 391, max 1034.
Pillar pages: washing machine 1274 words EN / 1034 AR; dishwasher 915 EN; dryer 1008 EN. Each has 6-10 FAQ items, 11 H2 sections and an entity-rich "how it works and which parts fail" section.
Entity coverage against an auditor-defined part list: washing-machine pillar 100% (EN and AR), dishwasher pillar 100%, dryer pillar 100%; the four symptom pages 100% against symptom-specific entity lists (for example drain pump, pressure switch, door seal, tub seal, lid switch, child lock).
Readability: average sentence length 11-20 words on the pages measured; 0-29% of sentences exceed 25 words.
### 9. Thin pages
- Severity: High
- Affected pages: Informational pages under 350 words: ar/blog/dishwasher-cleaning-maintenance.html (337); ar/blog/appliance-maintenance-checklist-riyadh.html (342); ar/blog/why-is-my-dryer-not-heating.html (345); ar/blog/lg-vs-samsung-washing-machine-common-issues.html (348). Utility pages (not counted as content gaps): gallery.html (81); ar/contact.html (106); ar/gallery.html (106); contact.html (108); ar/services.html (159); services.html (176); ar/about.html (180); about.html (227); ar/blog.html (264); blog.html (318)
- Why it matters: These pages state facts but offer little depth beyond them, so they cover fewer related questions and entities than a full guide would. The older blog posts end without a worked example, a comparison table or a summary.
- SEO impact: Lower topical depth for the article cluster; the pillar and symptom pages are not affected.
- User impact: Short answers leave questions unanswered.
- Exact fix: Expand each article to 600+ words with: a short checklist table, a "what the technician checks" list, 3-4 FAQs and one real case from your jobs (brand, model, fault, fix). The real job examples need to come from you.
- Priority: P1
- Status: PARTLY FIXED (contextual sections added to the 3 older posts; depth still needs owner examples)

### 10. "How Customers Find Us and Related Searches" sections (over-optimization watch)
- Severity: Medium
- Affected pages: all 66 pages carry the section; the Arabic washing machine pillar has the most quoted phrases (15), the English one 13, average about 3 per page
- Why it matters: These sections list search phrases to cover remaining keywords. They are written as sentences, but phrase lists carry a keyword-stuffing risk if they grow.
- SEO impact: Low now; rises if the lists are extended or repeated.
- User impact: Slightly repetitive reading at the bottom of the page.
- Exact fix: Keep each phrase once, cap lists at about 12 phrases, and do not add more. Review in Search Console after 6-8 weeks and prune phrases that earn no impressions.
- Priority: P2
- Status: MONITOR

### 11. Repeated interface sentences
- Severity: Low
- Affected pages: 19 pages repeat "Contact our team today to arrange a professional repair visit."; 16 repeat the same call-to-action strip
- Why it matters: These are page chrome (call-to-action blocks), not body copy, so no duplicate-content problem was found in body text (highest 5-word-shingle overlap between new pages: 22%).
- SEO impact: Negligible.
- User impact: None.
- Exact fix: No change needed; vary the CTA line on the main service pages if you want stronger message match.
- Priority: P3
- Status: NO ACTION

## 7. Semantic SEO Analysis
Pillar and cluster structure verified in links: 3 pillars (washing machine, dishwasher, dryer) each linking to their clusters, and clusters linking back. Each cluster page has a breadcrumb through its pillar and 3+ inbound internal links. FAQ blocks are present on 50 pages. The site now has 24 tables: quick-diagnosis tables on 9 symptom pages and comparison or checklist tables on 3 articles, each in English and Arabic.
Dishwasher and dryer symptom clusters are now built (dishwasher not draining, not cleaning, leaking; dryer not drying, drum not turning or noisy; each in English and Arabic). Three more articles were added (LG vs Samsung issues, repair or replace, maintenance checklist). Missing topical clusters (not built): per-district pages and further brand pages. Reason: these need confirmed facts from you.

## 8. AI SEO Readiness
Verified positives: content is in static HTML; FAQPage markup on 50 pages with every question visible; short, direct answers in FAQ items; LocalBusiness, Service and BreadcrumbList entities consistent across pages; "Published by / Last updated" line on 42 guide pages.
Not verified: whether Google AI Overviews or other assistants cite the site (no query data). llms.txt: not present; it is not a verified ranking factor, so it was not added.
Gaps: no quotable first-party data (real job counts, typical repair time, response times). These need owner data.

## 9. UX/UI Findings
Verified: single-purpose pages with breadcrumb, sticky header, sticky contact card on service pages, a fixed floating WhatsApp button, language switch, and Call and WhatsApp links on every page (min 1 tel and 1 wa.me link per page). Rendered visual quality, spacing and tap-target size: Unable to verify from crawl data (no browser rendering was available).
### 12. Hero chip claimed "Upfront pricing" but no prices exist
- Severity: Medium
- Affected pages: index.html, ar/index.html (hero)
- Why it matters: No page shows any price or range, so "Upfront pricing" over-promised.
- SEO impact: Claim mismatch can hurt Ads quality review.
- User impact: Expectation of seeing prices.
- Exact fix: Changed to "Cost explained first" / "نشرح التكلفة قبل البدء", which matches the real promise. If you can publish a starting price or inspection fee, add it to the cost guide.
- Priority: P2
- Status: FIXED in build

## 10. Conversion Optimization Findings
Verified: contact form now delivers via WhatsApp; Call and WhatsApp CTAs on every page; Google review button replaces the unverifiable testimonials; FAQ on every service page answers cost, warranty and visit questions.
Weaknesses: no published price or inspection-fee information (visitors cannot compare), no customer proof on page beyond the Google review link, no fixed click-to-call button (only the floating WhatsApp button exists). Conversion rates: Unable to verify from crawl data (no analytics).

## 11. EEAT Analysis
### 13. Weak experience, expertise and trust proof
- Severity: High
- Affected pages: All pages; most visible on about.html (190 words EN / 145 AR)
- Why it matters: The About page has no named technician, no years in business, no licence or credential, and no photos with names. No privacy policy or terms page exists (0 found). Guides are published under the business name, not an author. Positives verified: consistent name, phone and address; real workshop photos; Google Maps embed; 30-day warranty stated.
- SEO impact: Weaker trust signals for service-business queries.
- User impact: Less reassurance before inviting a technician into a home.
- Exact fix: Provide: technician names or first names with years of experience, any trade licence or commercial registration number, a short founder story, and real job photos with captions. Add a privacy page because the contact form collects names and phone numbers.
- Priority: P1
- Status: OPEN: needs owner input

### 14. Service claims written from keyword lists, not confirmed
- Severity: High
- Affected pages: Brand hub, dishwasher brands, washer-dryer page, area page, Samsung and LG pages
- Why it matters: The pages state that you repair brands such as Bosch, Siemens, Beko, Haier, Midea and Zanussi, combo washer-dryers, and named districts in East, North and South Riyadh, that you are an independent (non-authorized) service, and the meaning of Samsung and LG error codes. These came from keyword lists and general knowledge, not from you.
- SEO impact: Unconfirmed claims risk misleading searchers.
- User impact: Visitors may call for services you do not provide.
- Exact fix: Confirm or strike each item. The workbook sheet "Held back" lists them.
- Priority: P1
- Status: OPEN: needs owner confirmation

### 15. Business hours conflict
- Severity: High
- Affected pages: All pages
- Why it matters: The original static footer said "Sat–Thu, 9:00 AM – 9:00 PM" while the dictionary text and schema say 24 hours; the build currently follows 24 hours. Which is true: Unable to verify from crawl data.
- SEO impact: Inconsistent hours across site, schema and Google Business Profile.
- User impact: Customers may call outside real hours.
- Exact fix: Tell me the real hours; I will update the footer, FAQ and schema together, and you update Google Business Profile to match.
- Priority: P1
- Status: OPEN

## 12. Internal Linking Analysis
Verified: 0 orphan pages; lowest inbound internal link count is 3; 17 contextual links on the washing machine pillar page and an average of 9.7 internal links in the main content of each page; services and gallery pages now carry intro paragraphs linking to the pillars and brand pages; the three older blog posts now link to the relevant symptom, cost and service pages; the home page links to 14 cluster pages (all except the front-load vs top-load and how-to-clean guides).
Gap: the Arabic and English pages link only within their own language (correct), and there is no link from guides to a "request a quote" anchor in body copy beyond the sidebar CTA.

## 13. Mobile Optimization Findings
Verified: viewport meta on every page; Arabic pages use dir="rtl" with Bootstrap RTL; 306 of 306 images have width and height; 152 content images use srcset (480, 800 and 1200 px) with sizes so phones download smaller files; contact form is single-column. Real-device rendering, tap targets and layout shift: Unable to verify from crawl data.

## 14. Core Web Vitals Findings
Unable to verify from crawl data. No lab or field data (Lighthouse, PageSpeed Insights, CrUX) was available. Static proxies only: home page about 1.5 MB of images across 23 images (21 lazy-loaded); gallery about 1.9 MB across 19 images (16 lazy-loaded); service pillar pages about 350 KB (static HTML plus images); CSS 32 KB; JS 106 KB; the hero image is not lazy-loaded and carries fetchpriority="high". Run PageSpeed Insights on the live URL after deployment for real numbers.

## 15. Schema Markup Findings
Verified with a custom validator on all 66 pages (not Google Rich Results Test): one JSON-LD graph per page; types present: LocalBusiness 66, WebSite 66, BreadcrumbList 64, FAQPage 50, BlogPosting 18, Service 12, WebPage 56, CollectionPage 4, ItemList 4, AboutPage 2, ContactPage 2, ImageGallery 2. 0 duplicate @id, 0 unresolved references, breadcrumb names equal the visible breadcrumb, every FAQ question visible on the page, no rating or review markup (none is verifiable).
### 16. No sameAs links and no verified reviews in schema
- Severity: Medium
- Affected pages: All pages
- Why it matters: No social profile URLs exist (the Facebook and Instagram footer links pointed to "#" and were commented out), and there are no verified reviews to mark up.
- SEO impact: Weaker entity linking.
- User impact: None.
- Exact fix: Send the real Facebook, Instagram and other profile URLs; add them to sameAs and the footer. Add AggregateRating only from real, visible reviews.
- Priority: P2
- Status: OPEN: needs owner input

## 16. Competitor Gap Analysis
Limited. The Arabic head-term search run in this audit returned mostly classified-ad listings (marketplace pages) rather than dedicated repair-company sites, so competitor page depth, word counts, schema and backlinks: Unable to verify from crawl data. A competitor page fetched earlier in the project could not be re-fetched during this audit run, so no competitor figures are cited.
Own-site gaps that matter against any competitor: no published price information, no verified reviews, no named experts, no per-district pages, no dishwasher or dryer symptom pages.

## 17. Quick Wins
1. Deploy the new build and re-check the live home and one new URL.
2. Send the real business hours, social URLs, and which brands/districts you really serve.
3. Connect Google Analytics and Search Console; submit sitemap.xml.
4. Request real reviews from the last 10 customers (Google review link is now on the home page).
5. In Google Ads, set the final URL to the Arabic pillar page and request ad review.

## 18. High-Impact Recommendations
1. EEAT pack: technician names, years, licence, job photos with captions, privacy page.
2. Expand the nine articles to 600+ words with real job examples and one table each.
3. Publish a starting price or inspection fee in the cost guide if business rules allow.
4. Add per-district pages and separate brand pages (Daewoo, Toshiba, Ariston) once you confirm districts and brands, with real job examples for each.
5. Build district pages only for areas you confirm.

## 19. Long-Term SEO Strategy
Months 1-2: deploy, index, collect reviews, measure Core Web Vitals. Months 2-4: one article every 2-3 weeks (for example dishwasher salt and rinse aid explained, dryer lint and fire safety, washing machine error codes explained), each internally linked to its pillar. Months 4-6: prune "How Customers Find Us" phrases by Search Console data, add per-district pages with real local details, and build citations (Maroof, directories) with identical name, address and phone.

## 20. Final Verdict
The build is technically sound and the topical structure is strong for a new site (81/100 on the checklist above). Its weakest areas are trust proof (EEAT), confirmed facts (hours, brands, districts) and content depth on article pages, all of which need information only the business owner has. Nothing in this report was inferred about rankings or traffic. The most urgent action is deployment: until the new build is live, visitors, crawlers and the Ads reviewer still see the older, less complete pages.