# SEO Strategy — Automatic Washing Machine Repair (Waher Fixer Riyadh)
**Prepared for:** Al Yarmuk, Riyadh — bilingual (English-primary / Arabic) local repair site
**Site structure:** 24 static pages — 12 English (root) + 12 Arabic (`/ar/`) mirrors

---

## 1. Site Audit — What's Already Working vs. What's Missing

### Already in place (good foundation)
- Clean, descriptive URLs (`/services/automatic-washing-machine-repair.html`, not `?id=12`)
- Unique `<title>` and meta description per page
- Mobile-responsive, fast-loading (compressed images, no heavy frameworks)
- Separate EN/AR page trees with working cross-links
- Google Maps embed + NAP (Name, Address, Phone) on Contact and Home
- Click-to-call and WhatsApp links (strong local-intent conversion signal)
- Blog with topically relevant articles

### Gaps found in this audit (fix these first — see Section 6 roadmap)
1. **No `sitemap.xml`** — Google has to discover pages by crawling links alone; a sitemap speeds up indexing of all 24 pages.
2. **No `robots.txt`** — no crawl guidance at all right now.
3. **No structured data (schema markup)** — zero `LocalBusiness`, `Service`, `FAQPage`, or `Review` schema anywhere. This is the single biggest missed opportunity for a local repair business (controls how you appear in Maps/local pack and can win rich results like star ratings and FAQ dropdowns in search).
4. **`hreflang` tags only exist on the homepage** (`index.html` / `ar/index.html`). The other 22 pages have no `hreflang`, so Google can't reliably match each English page to its Arabic counterpart.
5. **Canonical tags are relative** (`href="services.html"`) instead of absolute (`href="https://yourdomain.com/services.html"`). Relative canonicals are fragile and Google recommends absolute URLs — fix once the live domain is set.
6. **Title tags still reference the old brand name** ("Waher Fixer Riyadh") while the on-page brand name was updated to "Automatic Washing Machine Repair." Decide on one final business name and make it consistent across `<title>`, meta description, schema, and Google Business Profile — inconsistent naming actively hurts local SEO trust signals.
7. **No analytics or Search Console verification tag** — you're flying blind on what's actually ranking or how people find the site until this is added.
8. **No dedicated landing pages per service area** — right now Al Yarmuk and nearby districts are listed as chips on the homepage, but there's no page built to rank for "appliance repair + [district name]" searches individually.

---

## 2. Keyword Strategy

### 2.1 Primary keywords (English — highest priority, highest search intent)
| Keyword | Target Page |
|---|---|
| washing machine repair Riyadh | Home, Service page |
| automatic washing machine repair Riyadh | Home, Service page (exact match to business name) |
| dishwasher repair Riyadh | Dishwasher service page |
| dryer repair Riyadh | Dryer service page |
| appliance repair Riyadh | Home, Services listing |
| washing machine repair Al Yarmuk | Home, new Service-Area page |
| same day appliance repair Riyadh | Home (Guarantees section) |
| washing machine technician Riyadh | About, Home |

### 2.2 Secondary / long-tail keywords (lower competition, high buying intent)
These map naturally to blog content and FAQ sections:
- "washing machine not spinning Riyadh"
- "washing machine won't drain repair"
- "LG washing machine repair Riyadh"
- "Samsung washing machine repair Riyadh"
- "dryer not heating up repair"
- "dishwasher not draining repair Riyadh"
- "washing machine door lock repair"
- "washing machine repair cost Riyadh"
- "24 hour appliance repair Riyadh"

### 2.3 Brand-adjacent keywords
Since the Brands page/section lists Samsung, LG, Whirlpool, Bosch-style brands, target:
- "[Brand] washing machine repair Riyadh" (e.g., "Samsung washing machine repair Riyadh", "LG dryer repair Riyadh")
Each brand mentioned should ideally get at least one sentence naturally worked into a service page or blog post — this is a common way appliance repair sites capture brand-specific search volume without needing a dedicated page per brand.

### 2.4 Arabic keywords (secondary priority, still meaningful search volume)
| Arabic Keyword | English Meaning |
|---|---|
| إصلاح الغسالات الرياض | washing machine repair Riyadh |
| صيانة غسالات أتوماتيك الرياض | automatic washing machine maintenance Riyadh |
| تصليح غسالة اتوماتيك | fix automatic washing machine |
| صيانة غسالة صحون الرياض | dishwasher maintenance Riyadh |
| تصليح نشافة الرياض | dryer repair Riyadh |
| فني صيانة غسالات الرياض | washing machine repair technician Riyadh |
| إصلاح غسالات حي اليرموك | washing machine repair Al Yarmuk district |

### 2.5 Local "near me" intent
Google increasingly matches "near me" searches using Google Business Profile + on-page location signals rather than the literal words "near me" — so the priority is Local SEO (Section 4), not stuffing "near me" into text.

---

## 3. On-Page SEO Plan

### 3.1 Title tag formula (60 characters max, primary keyword first)
```
[Primary Keyword] in Riyadh | [Brand Name]
```
Example: `Washing Machine Repair in Riyadh | Automatic Washing Machine Repair`
*(Once the final brand name is locked in, every title tag should use that exact name — see Gap #6 above.)*

### 3.2 Meta description formula (150–160 characters, includes a call to action)
```
[What you do] in [location]. [Trust signal — same-day/warranty/technicians]. [CTA: Call/WhatsApp now].
```
Example: *"Same-day automatic washing machine repair in Riyadh. Experienced technicians, 30-day warranty, upfront pricing. Call or WhatsApp now."*

### 3.3 Heading structure (per service page)
- **H1**: Exact-match primary keyword (e.g., "Automatic Washing Machine Repair") — one per page only
- **H2s**: Common Problems, What We Repair, Our Repair Process, Why Choose Us, Service Area, FAQ — (already structured this way — good)
- Keep the keyword appearing naturally in at least one H2 and the opening paragraph

### 3.4 Internal linking
- Every blog post should link to the relevant service page (already done for the 3 existing posts — keep this pattern for all future posts)
- Service pages already cross-link via "Related Services" — good
- Add a link from the homepage Service Areas section to a future dedicated area page (see 3.6)

### 3.5 Image SEO
- All images should keep descriptive `alt` text (already true for the hero images) — extend this discipline to every gallery and blog thumbnail: e.g., `alt="Technician repairing LG washing machine drum in Riyadh"` rather than generic text
- File names are already descriptive (`repair-04-dishwasher-pliers.jpg`) — keep this convention for any new photos

### 3.6 New page recommendation: Service Area pages
Once you confirm the real list of districts served, create one short page per major district (e.g., `/areas/al-yarmuk.html`, `/areas/al-malaz.html`) with:
- H1: "Washing Machine Repair in [District], Riyadh"
- 150–200 words mentioning the district by name a few times naturally
- The same booking CTA as other pages
This is one of the highest-ROI local SEO tactics for a repair business and directly targets "[service] + [neighborhood]" searches that a single generic Service Area section can't rank for individually.

---

## 4. Local SEO Plan (the single most important channel for this business)

Local repair businesses get the majority of their traffic from **Google's local pack / Maps results**, not organic blue links — so this section matters more than classic on-page SEO for lead volume.

### 4.1 Google Business Profile (GBP) — do this first
- Claim/verify the listing for the exact address: Al Yarmuk, Riyadh 13243
- Business name on GBP must match the site exactly (see Gap #6 — pick one final name)
- Category: primary = "Appliance repair service"; add secondary categories if available (Washing machine repair service, etc.)
- Add all service areas as GBP service areas
- Upload real photos regularly (the real shop/technician photos already used on the site are perfect for this)
- Enable messaging/WhatsApp click-through if GBP supports it in Saudi Arabia
- Use the **Leave Us a Review** button already added to the Contact page to start collecting reviews now — reviews are a top-3 local ranking factor

### 4.2 NAP consistency (Name, Address, Phone)
Make sure the exact same Name / Address / Phone (+966 59 116 1916) appears identically on:
- The website (already consistent)
- Google Business Profile
- Any directory listing (see 4.3)
Inconsistent formatting (e.g., "059 116 1916" in one place and "+966591161916" in another) weakens local trust signals to Google.

### 4.3 Local citations / directories
List the business (with identical NAP) on:
- Google Business Profile (critical)
- Maroof (Saudi e-commerce/business verification platform — builds trust for KSA searches)
- Apple Maps / Apple Business Connect
- Local Saudi directories and Facebook Business Page
- Any appliance-brand-authorized-service-center directories, if applicable

### 4.4 Reviews strategy
- After every completed job, send the customer the WhatsApp number + a direct link asking for a Google review
- Once you have the real Google Place ID (ChIJ… format, from Google's Place ID Finder), I can wire up a genuine one-tap "write a review" button — noted as a pending item from our last conversation
- Respond to every review (good or bad) — response rate is itself a ranking signal

---

## 5. Technical SEO Plan

### 5.1 Sitemap & robots.txt
Every page (EN + AR) should be listed in a `sitemap.xml`, and `robots.txt` should point to it. **I've generated both directly in the project** — see the delivered files.

### 5.2 Structured data (schema markup)
Recommended schema types for this site, in priority order:
1. **LocalBusiness** (on every page, in the footer/global template) — name, address, phone, hours, geo-coordinates, price range
2. **Service** schema on each of the 3 service pages
3. **FAQPage** schema wherever the FAQ accordion appears (Home + each service page) — this is what earns the expandable FAQ dropdown in Google search results
4. **BreadcrumbList** schema matching the visible breadcrumb trail already on the site
5. **Review/AggregateRating** schema once real reviews exist (do not fabricate ratings — Google penalizes fake review markup)

**I've implemented LocalBusiness schema as a starting example** — see Section 7 below for what to extend site-wide.

### 5.3 hreflang
Every one of the 24 pages should declare both its English and Arabic counterpart via `hreflang`, plus an `x-default` pointing to the English version (since English is primary). Currently only the homepage has this.

### 5.4 Performance / Core Web Vitals
- Images are already compressed and use `loading="lazy"` — good practice already in place
- Once live, run the site through Google PageSpeed Insights / Lighthouse and address anything flagged (font loading from Google Fonts can be a minor render-blocking factor — consider `font-display: swap`, which is usually enabled by default via the Google Fonts URL already in use)
- Keep the CSS/JS files as they are (single stylesheet, no heavy frameworks beyond Bootstrap) — this is already performance-friendly

### 5.5 HTTPS & domain
Once a live domain and hosting are chosen, ensure HTTPS is enforced (most hosts do this automatically) — Google treats HTTP sites as untrustworthy and it affects rankings.

---

## 6. Content & Blog Strategy

Keep the 70/30 English-primary pattern already established. Suggested next articles, in priority order (each should link back to the relevant service page):

1. "How Much Does Washing Machine Repair Cost in Riyadh?" — captures high-intent price-research searches
2. "LG vs Samsung Washing Machines: Common Repair Issues" — captures brand-specific searches
3. "Dishwasher Leaking Water? Here's What It Usually Means" — mirrors the existing dishwasher maintenance post structure
4. "Is It Cheaper to Repair or Replace a Washing Machine?" — high commercial intent, common decision-stage query
5. "Washing Machine Maintenance Checklist for Riyadh's Hard Water" — locally relevant angle (Riyadh's water hardness genuinely affects appliance lifespan, giving this real local relevance rather than generic content)

Publish roughly one article every 2–3 weeks — consistency matters more than volume for a site this size.

---

## 7. What I've Implemented Directly (technical quick wins)

Since these don't require any decisions from you, I've added them to the project already:
- `sitemap.xml` listing all 24 pages
- `robots.txt` referencing the sitemap
- `hreflang` + `x-default` tags added to all 24 pages (not just the homepage)
- Absolute-URL-ready canonical tag structure (uses a placeholder domain — swap in the real domain in one find-and-replace once you have it)
- `LocalBusiness` JSON-LD schema added sitewide (footer) with the confirmed address, phone, and coordinates
- `FAQPage` JSON-LD schema added to the Home page and all three service pages, matching the FAQ content already visible on each

## 8. What Still Needs Your Input Before I Can Finish the Rest

- **Final business name** — "Waher Fixer Riyadh" or "Automatic Washing Machine Repair" — needed to make titles, schema, and GBP consistent (Gap #6)
- **Live domain name** — needed to convert canonical/hreflang/sitemap URLs from placeholders to real absolute URLs
- **Confirmed list of service-area districts** — the current list (Al Malaz, Al Olaya, etc.) was my best-guess placeholder, not confirmed by you — needed before I build individual area landing pages
- **Real Google Place ID** — needed for the one-tap review button and to fully wire up the Review schema later

## 9. 90-Day Priority Roadmap

| Priority | Action | Owner |
|---|---|---|
| Week 1 | Confirm final brand name, domain, and area list | You |
| Week 1 | Claim & fully complete Google Business Profile | You |
| Week 1–2 | Go live with sitemap.xml, robots.txt, schema (already built) | Done — deploy with site |
| Week 2–3 | Swap placeholder domain into canonical/hreflang/sitemap | Me, once domain confirmed |
| Week 3–4 | Build individual Service Area landing pages | Me, once districts confirmed |
| Ongoing | Publish 1 blog article every 2–3 weeks | You / Me |
| Ongoing | Ask every customer for a Google review after service | You |
| Month 2 | Check Google Search Console for indexing + early keyword data | You |
| Month 3 | Re-audit rankings for the primary keyword list in Section 2.1 | Me |
