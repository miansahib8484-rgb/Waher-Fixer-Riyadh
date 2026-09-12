(function(){
  "use strict";

  /* ---------------- Fixed page language ----------------
     English and Arabic are separate physical pages now.
     Each HTML file already sets <html lang="en"|"ar" dir="ltr"|"rtl">.
     This script just reads that once and renders dynamic content
     (service cards, gallery, blog, FAQ) in the matching language.
     There is no runtime toggle and nothing is stored in localStorage.
  ------------------------------------------------------- */
  function getLang(){
    return document.documentElement.lang === "ar" ? "ar" : "en";
  }

  function applyLanguage(lang){
    const dict = translations[lang] || translations.en;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    renderServiceCards(lang);
    renderFaqHome(lang);
    renderBlogPreview(lang);
    renderBlogListing(lang);
    renderServiceDetail(lang);
    renderRelatedServices(lang);
    renderGallery(lang);
    renderBrands(lang);
    renderTestimonials(lang);
    renderAreas(lang);
  }

  /* ---------------- Nav active state ---------------- */
  function markActiveNav(){
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link-custom").forEach(link => {
      const href = (link.getAttribute("href") || "").split("/").pop();
      if (href === path || (path === "" && href === "index.html")) {
        link.classList.add("active");
      }
    });
  }

  /* ---------------- Mobile nav collapse-on-click ---------------- */
  function initMobileNavClose(){
    const collapseEl = document.getElementById("mainNav");
    if (!collapseEl || !window.bootstrap) return;
    collapseEl.querySelectorAll(".nav-link-custom").forEach(link => {
      link.addEventListener("click", () => {
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapseEl);
        bsCollapse.hide();
      });
    });
  }

  /* ---------------- FAQ accordion ---------------- */
  function bindFaqToggle(container){
    if (!container) return;
    container.querySelectorAll(".faq-item").forEach(item => {
      const btn = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
      if (!btn || !answer || btn.dataset.bound) return;
      btn.dataset.bound = "true";
      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        const parent = item.parentElement;
        parent.querySelectorAll(".faq-item.open").forEach(openItem => {
          if (openItem !== item){
            openItem.classList.remove("open");
            const a = openItem.querySelector(".faq-answer");
            if (a) a.style.maxHeight = null;
          }
        });
        item.classList.toggle("open", !isOpen);
        answer.style.maxHeight = !isOpen ? answer.scrollHeight + "px" : null;
      });
    });
  }

  /* ---------------- Service Areas ---------------- */
  function renderAreas(lang){
    const container = document.getElementById("areasGrid");
    if (!container || typeof areasData === "undefined") return;
    container.innerHTML = areasData.map(area => `
      <div class="area-chip"><i class="bi bi-geo-alt-fill"></i>${area[lang]}</div>
    `).join("");
  }

  /* ---------------- Brands We Repair ---------------- */
  function renderBrands(lang){
    const container = document.getElementById("brandsGrid");
    if (!container || typeof brandsData === "undefined") return;
    container.innerHTML = brandsData.map(brand => `
      <div class="brand-chip">${brand[lang]}</div>
    `).join("");
  }

  /* ---------------- Testimonials ---------------- */
  function renderTestimonials(lang){
    const container = document.getElementById("testimonialsGrid");
    if (!container || typeof testimonialsData === "undefined") return;
    container.innerHTML = testimonialsData.map(t => `
      <div class="col-md-4 reveal">
        <div class="testimonial-card">
          <div class="testimonial-stars"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>
          <p class="testimonial-text">${t.text[lang]}</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">${t.name[lang].charAt(0)}</div>
            <div>
              <div class="testimonial-name">${t.name[lang]}</div>
              <div class="testimonial-area">${t.area[lang]}</div>
            </div>
          </div>
        </div>
      </div>
    `).join("");
    observeReveals();
  }

  function renderFaqHome(lang){
    const list = document.getElementById("faqHomeList");
    if (!list || typeof faqDataHome === "undefined") return;
    list.innerHTML = faqDataHome.map((item, i) => `
      <div class="faq-item${i===0 ? " open" : ""}">
        <button class="faq-question" type="button" aria-expanded="${i===0}">
          <span>${item.q[lang]}</span>
          <i class="bi bi-chevron-down"></i>
        </button>
        <div class="faq-answer"${i===0 ? ' style="max-height:200px"' : ""}>
          <p>${item.a[lang]}</p>
        </div>
      </div>
    `).join("");
    bindFaqToggle(list);
  }

  /* ---------------- Service cards (services.html + home) ---------------- */
  function renderServiceCards(lang){
    document.querySelectorAll("[data-render='service-cards']").forEach(container => {
      const entries = Object.values(servicesData);
      const svcBase = container.getAttribute("data-services-base") || "services/";
      const imgBase = container.getAttribute("data-images-base") || "images/";
      container.innerHTML = entries.map(svc => `
        <div class="col-md-6 col-lg-4 reveal">
          <div class="service-card">
            <div class="service-card-image">
              <img src="${imgBase}${svc.image}" alt="${svc.title[lang]}" loading="lazy">
            </div>
            <div class="service-card-body">
              <h3 class="h5">${svc.title[lang]}</h3>
              <p class="text-muted-2">${svc.shortDesc[lang]}</p>
              <div class="card-links">
                <a class="btn btn-outline-navy btn-sm-pill" href="${svcBase}${svc.slug}.html">
                  ${translations[lang].svc_view}
                </a>
                <a class="btn btn-accent btn-sm-pill" href="https://wa.me/966591161916" target="_blank" rel="noopener">
                  <i class="bi bi-whatsapp"></i> ${translations[lang].svc_book}
                </a>
              </div>
            </div>
          </div>
        </div>
      `).join("");
    });
    observeReveals();
  }

  /* ---------------- Static decorative illustrations ---------------- */
  function renderStaticIllustrations(){
    document.querySelectorAll("[data-illustration]").forEach(el => {
      const key = el.getAttribute("data-illustration");
      if (typeof ILLUSTRATIONS !== "undefined" && ILLUSTRATIONS[key]) {
        el.innerHTML = ILLUSTRATIONS[key];
      }
    });
  }

  /* ---------------- Service detail page ---------------- */
  function renderServiceDetail(lang){
    const body = document.body;
    const key = body.getAttribute("data-service");
    if (!key || !servicesData[key]) return;
    const svc = servicesData[key];
    const t = translations[lang];

    setText("svcTitle", svc.title[lang]);
    setText("svcIntro", svc.intro[lang]);
    setText("svcShort", svc.shortDesc[lang]);
    setText("bcCurrent", svc.title[lang]);

    const problemsList = document.getElementById("svcProblems");
    if (problemsList) {
      problemsList.innerHTML = svc.problems[lang].map(p => `<li><i class="bi bi-exclamation-circle"></i><span>${p}</span></li>`).join("");
    }
    const repairList = document.getElementById("svcRepairs");
    if (repairList) {
      repairList.innerHTML = svc.repair[lang].map(p => `<li><i class="bi bi-tools"></i><span>${p}</span></li>`).join("");
    }
    const processList = document.getElementById("svcProcess");
    if (processList) {
      processList.innerHTML = svc.process[lang].map((p, i) => `
        <div class="process-step">
          <div class="num">${i+1}</div>
          <div><p class="mb-0">${p}</p></div>
        </div>
      `).join("");
    }

    document.querySelectorAll("[data-i18n-service]").forEach(el => {
      const field = el.getAttribute("data-i18n-service");
      if (t[field]) el.textContent = t[field];
    });
  }

  function renderRelatedServices(lang){
    const container = document.getElementById("relatedServices");
    if (!container) return;
    const current = document.body.getAttribute("data-service");
    const imgBase = container.getAttribute("data-images-base") || "../images/";
    const others = Object.entries(servicesData).filter(([key]) => key !== current);
    container.innerHTML = others.map(([key, svc]) => `
      <div class="col-md-6">
        <a class="related-card d-block reveal" href="${svc.slug}.html">
          <div class="related-card-image">
            <img src="${imgBase}${svc.image}" alt="${svc.title[lang]}" loading="lazy">
          </div>
          <h4 class="h6 mb-1 mt-3">${svc.title[lang]}</h4>
          <p class="text-muted-2 mb-0 small">${svc.shortDesc[lang]}</p>
        </a>
      </div>
    `).join("");
    observeReveals();
  }

  function setText(id, value){
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  /* ---------------- Gallery ---------------- */
  const galleryItems = [
    { group: "wm", image: "repair-01-drum-closeup.jpg", label: { en: "Washing Machine", ar: "غسالة" } },
    { group: "wm", image: "repair-03-wiring-test.jpg", label: { en: "Washing Machine", ar: "غسالة" } },
    { group: "dw", image: "repair-04-dishwasher-pliers.jpg", label: { en: "Dishwasher", ar: "غسالة صحون" } },
    { group: "wm", image: "repair-06-sunlit-shop.jpg", label: { en: "Washing Machine", ar: "غسالة" } },
    { group: "dr", image: "repair-02-dryer-filter.jpg", label: { en: "Dryer", ar: "نشافة" } },
    { group: "wm", image: "repair-08-team-drum.jpg", label: { en: "Washing Machine", ar: "غسالة" } },
    { group: "wm", image: "repair-09-workshop-wide.jpg", label: { en: "Washing Machine", ar: "غسالة" } },
    { group: "dr", image: "repair-10-portrait-dryer.jpg", label: { en: "Dryer", ar: "نشافة" } },
    { group: "wm", image: "repair-11-chassis-repair.jpg", label: { en: "Washing Machine", ar: "غسالة" } },
    { group: "wm", image: "repair-12-team-belt.jpg", label: { en: "Washing Machine", ar: "غسالة" } },
    { group: "wm", image: "repair-13-truck-loading.jpg", label: { en: "Washing Machine", ar: "غسالة" } },
    { group: "dw", image: "repair-07-control-board.jpg", label: { en: "Dishwasher", ar: "غسالة صحون" } },
  ];

  function renderGallery(lang){
    const grid = document.getElementById("galleryGrid");
    if (!grid) return;
    const imgBase = grid.getAttribute("data-images-base") || "images/";
    grid.innerHTML = galleryItems.map(item => `
      <div class="col-6 col-md-4 gallery-col reveal" data-group="${item.group}">
        <div class="gallery-item">
          <img src="${imgBase}${item.image}" alt="${item.label[lang]}" loading="lazy">
          <span class="tag">${item.label[lang]}</span>
        </div>
      </div>
    `).join("");
    observeReveals();

    const filterBar = document.getElementById("galleryFilter");
    if (filterBar && !filterBar.dataset.bound) {
      filterBar.dataset.bound = "true";
      filterBar.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-filter]");
        if (!btn) return;
        filterBar.querySelectorAll("button").forEach(b => b.classList.remove("btn-accent"));
        filterBar.querySelectorAll("button").forEach(b => b.classList.add("btn-outline-navy"));
        btn.classList.remove("btn-outline-navy");
        btn.classList.add("btn-accent");
        const filter = btn.getAttribute("data-filter");
        grid.querySelectorAll(".gallery-col").forEach(col => {
          col.style.display = (filter === "all" || col.getAttribute("data-group") === filter) ? "" : "none";
        });
      });
    }
  }

  /* ---------------- Blog ---------------- */
  function renderBlogPreview(lang){
    const container = document.getElementById("blogPreview");
    if (!container || typeof blogData === "undefined") return;
    const base = container.getAttribute("data-blog-base") || "blog/";
    const imgBase = container.getAttribute("data-images-base") || "images/";
    container.innerHTML = blogData.slice(0, 3).map(post => `
      <div class="col-md-4 reveal">
        <a href="${base}${post.slug}.html" class="blog-card d-block h-100">
          <div class="blog-thumb"><img src="${imgBase}${post.image}" alt="${post.title[lang]}" loading="lazy"></div>
          <div class="p-4">
            <div class="blog-meta mb-2">${post.date[lang]}</div>
            <h3 class="h6">${post.title[lang]}</h3>
            <p class="text-muted-2 small mb-0">${post.excerpt[lang]}</p>
          </div>
        </a>
      </div>
    `).join("");
    observeReveals();
  }

  function renderBlogListing(lang){
    const container = document.getElementById("blogListing");
    if (!container || typeof blogData === "undefined") return;
    const imgBase = container.getAttribute("data-images-base") || "images/";
    container.innerHTML = blogData.map(post => `
      <div class="col-md-4 reveal">
        <a href="${post.slug}.html" class="blog-card d-block h-100">
          <div class="blog-thumb"><img src="${imgBase}${post.image}" alt="${post.title[lang]}" loading="lazy"></div>
          <div class="p-4">
            <div class="blog-meta mb-2">${post.date[lang]}</div>
            <h3 class="h6">${post.title[lang]}</h3>
            <p class="text-muted-2 small mb-0">${post.excerpt[lang]}</p>
          </div>
        </a>
      </div>
    `).join("");
    observeReveals();
  }

  /* ---------------- Reveal-on-scroll (single orchestrated pattern) ---------------- */
  let revealObserver;
  function observeReveals(){
    if (!revealObserver){
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting){
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
    }
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(el => revealObserver.observe(el));
  }

  /* ---------------- Contact form ---------------- */
  function initContactForm(){
    const form = document.getElementById("contactForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const lang = getLang();
      const feedback = document.getElementById("formFeedback");
      if (feedback) {
        feedback.textContent = lang === "ar"
          ? "شكرًا لك! تم استلام طلبك وسنتواصل معك قريبًا."
          : "Thank you! Your request has been received — we'll be in touch shortly.";
        feedback.classList.remove("d-none");
      }
      form.reset();
    });
  }

  /* ---------------- Init ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    markActiveNav();
    initMobileNavClose();
    initContactForm();
    applyLanguage(getLang());
    renderStaticIllustrations();
    bindFaqToggle(document);
    observeReveals();
  });
})();
