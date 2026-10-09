/* =========================================================
   Shared bilingual content store.
   Every page includes this file before main.js.
   Keys used with data-i18n="key" get their textContent replaced.
   data-i18n-placeholder="key" replaces the placeholder attribute.
   ========================================================= */

const translations = {
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_blog: "Blog",
    nav_about: "About",
    nav_contact: "Contact",
    nav_call: "Call Now",

    brand_name: "Automatic Washing Machine Repair",

    /* ---- Home ---- */
    hero_tag: "Riyadh · Home Appliance Repair",
    hero_title: "Professional Home Appliance Repair in Riyadh",
    hero_desc: "Fast, reliable repair for automatic washing machines, dishwashers and dryers — trusted technicians who come to your door across Riyadh.",
    hero_cta_book: "Book a Repair",
    hero_cta_call: "Call Now",
    hero_cta_whatsapp: "WhatsApp Us",
    hero_badge_1: "Same-day visits",
    hero_badge_2: "Riyadh-wide coverage",
    hero_badge_3: "Cost explained first",

    trust_1: "Experienced Technicians",
    trust_2: "Fast Response",
    trust_3: "Reliable Repairs",
    trust_4: "Riyadh Service Coverage",

    services_tag: "What We Repair",
    services_title: "Our Appliance Repair Services",
    services_sub: "Three focused specialities, done properly — not a jack-of-all-trades list.",
    svc_view: "View Service",
    svc_book: "Book a Service",
    badge_certified: "Certified Repair",

    why_tag: "Why Riyadh Trusts Us",
    why_title: "Built Around Honest, Careful Repair Work",
    why_1_t: "Professional Technicians",
    why_1_d: "Trained specialists who diagnose the real fault before touching a screwdriver.",
    why_2_t: "Quick Response",
    why_2_d: "We schedule visits fast, so your appliance isn't out of action for long.",
    why_3_t: "Transparent Service",
    why_3_d: "You hear the diagnosis and the cost before any repair work begins.",
    why_4_t: "Quality Repairs",
    why_4_d: "Proper parts and correct technique, so the same fault doesn't return.",
    why_5_t: "Customer-Focused Support",
    why_5_d: "Clear communication from first call to finished repair.",
    why_6_t: "Service Across Riyadh",
    why_6_d: "On-site visits to homes across Riyadh and surrounding neighborhoods.",

    how_tag: "Simple Process",
    how_title: "How It Works",
    how_1_t: "Contact Us",
    how_1_d: "Call, WhatsApp or fill the booking form.",
    how_2_t: "Tell Us the Problem",
    how_2_d: "Describe the appliance and the fault you're seeing.",
    how_3_t: "Technician Visits",
    how_3_d: "A technician comes to your location in Riyadh.",
    how_4_t: "Appliance Gets Repaired",
    how_4_d: "Fixed on-site with a clear explanation of the work done.",

    gallery_tag: "Our Work",
    gallery_title: "Recent Repairs Around Riyadh",
    gallery_sub: "A look at real jobs — washing machines, dishwashers and dryers back in working order.",
    gallery_view_all: "View Full Gallery",
    gallery_filter_all: "All",
    gallery_filter_wm: "Washing Machines",
    gallery_filter_dw: "Dishwashers",
    gallery_filter_dr: "Dryers",

    area_title: "Appliance Repair Services Across Riyadh",
    area_desc: "We serve customers in Al Yarmuk and across Riyadh's surrounding neighborhoods, with technicians dispatched to your location for on-site diagnosis and repair.",

    faq_tag: "Common Questions",
    faq_title: "Frequently Asked Questions",

    final_cta_title: "Need Appliance Repair in Riyadh?",
    final_cta_desc: "Contact our team today to arrange a professional repair visit.",
    final_cta_contact: "Contact Us",

    blog_home_tag: "From the Blog",
    blog_home_title: "Appliance Care Tips",
    blog_home_view_all: "View All Articles",
    blog_read_more: "Read More",

    /* ---- Footer ---- */
    footer_desc: "Local home appliance repair for Riyadh — automatic washing machines, dishwashers and dryers, fixed properly by technicians who visit your home.",
    footer_quick_links: "Quick Links",
    footer_services: "Services",
    footer_contact: "Contact",
    footer_hours: "Working Hours",
    footer_hours_val: "Open 24 Hours",
    footer_rights: "All rights reserved.",

    /* ---- Breadcrumbs ---- */
    bc_home: "Home",

    /* ---- Services listing page ---- */
    services_page_tag: "Services",
    services_page_title: "Home Appliance Repair Services in Riyadh",
    services_page_sub: "Choose an appliance below to see common faults, what we repair, and how the visit works.",

    /* ---- About page ---- */
    about_tag: "About Us",
    about_title: "Local Appliance Repair, Done Right",
    about_intro: "We started this service to give Riyadh households a straightforward alternative to guesswork appliance repair — a washing machine technician in Riyadh who diagnoses properly, explains clearly, and fixes the appliance so the same problem doesn't come back.",
    about_mission_tag: "Our Mission",
    about_mission_title: "Keep Riyadh Homes Running Smoothly",
    about_mission_desc: "We focus on three appliances — automatic washing machines, dishwashers and dryers — so our technicians stay genuinely specialised rather than spread thin across everything.",
    about_choose_tag: "Why Customers Choose Us",
    about_choose_title: "What Sets Our Service Apart",
    about_approach_tag: "Our Approach",
    about_approach_title: "A Professional Repair Approach",
    about_approach_desc: "Every visit starts with a proper diagnosis, a clear explanation of the fault, and an honest cost before any work begins. We use the correct parts and technique for the appliance in front of us, not a generic fix.",
    about_coverage_tag: "Coverage",
    about_coverage_title: "Riyadh Service Coverage",
    about_coverage_desc: "We visit homes across Riyadh and the surrounding neighborhoods for on-site diagnosis and repair — no need to transport the appliance anywhere.",
    about_cta_title: "Ready to Get Your Appliance Fixed?",
    about_cta_desc: "Reach out and we'll arrange a technician visit at a time that works for you.",

    /* ---- Contact page ---- */
    contact_tag: "Get In Touch",
    contact_title: "Contact Us",
    contact_sub: "Send us your details and the appliance issue — we'll get back to you to arrange a visit.",
    form_name: "Full Name",
    form_phone: "Phone Number",
    form_appliance: "Appliance Type",
    form_appliance_ph: "Select appliance",
    form_appliance_wm: "Automatic Washing Machine",
    form_appliance_dw: "Dishwasher",
    form_appliance_dr: "Dryer",
    form_service: "Service Required",
    form_service_ph: "Select service",
    form_message: "Message",
    form_message_ph: "Briefly describe the problem",
    form_submit: "Send Request",
    contact_info_title: "Contact Details",
    contact_call: "Call",
    contact_whatsapp: "WhatsApp",
    contact_location: "Service Area",
    contact_location_val: "Al Yarmuk, Riyadh 13243, Saudi Arabia",
    contact_hours: "Working Hours",

    /* ---- Gallery page ---- */
    gallery_page_tag: "Our Work",
    gallery_page_title: "Appliance Repair Gallery",
    gallery_page_sub: "A visual look at recent washing machine, dishwasher and dryer repairs completed across Riyadh.",

    /* ---- Blog page ---- */
    blog_page_tag: "Blog",
    blog_page_title: "Appliance Care & Repair Tips",
    blog_page_sub: "Practical advice to help your washing machine, dishwasher and dryer last longer between repairs.",
    blog_back: "Back to Blog",

    /* ---- Service Detail shared labels ---- */
    d_common_problems: "Common Problems",
    d_what_we_repair: "What We Repair",
    d_our_process: "Our Repair Process",
    d_why_choose: "Why Choose Us",
    d_service_area: "Service Area",
    d_service_area_val: "Riyadh and surrounding neighborhoods",
    d_guide: "Repair Guide & Common Faults",
    d_faq: "Frequently Asked Questions",
    d_related: "Related Services",
    d_call_now: "Call Now",
    d_whatsapp: "WhatsApp",
    d_book_visit: "Book a Visit",
    d_sticky_title: "Need this fixed?",
    d_sticky_desc: "Get a technician out to your home in Riyadh.",

    /* ---- Brands ---- */
    brands_tag: "Trusted Experience",
    brands_title: "Brands We Repair",
    brands_sub: "Genuine experience servicing all major appliance brands sold in Saudi Arabia.",

    /* ---- Testimonials ---- */
    testimonials_tag: "Customer Reviews",
    testimonials_title: "What Our Customers Say",

    /* ---- Location / Map ---- */
    location_tag: "Find Us",
    location_title: "Our Location in Riyadh",
    location_desc: "Based in Al Yarmuk, Riyadh — with technicians dispatched across the city for on-site repair.",
    location_get_directions: "Get Directions",
    location_leave_review: "Leave Us a Review",

    /* ---- Service Areas ---- */
    areas_tag: "Coverage",
    areas_title: "Service Areas in Riyadh",
    areas_sub: "Based in Al Yarmuk, with technicians dispatched to the following areas and beyond.",

    /* ---- Guarantees / USPs ---- */
    guarantees_tag: "Our Commitment",
    guarantees_title: "Why You Can Rely On Us",
    guarantee_1_t: "Same-Day Repair Service",
    guarantee_1_d: "Most repairs are completed on the same day you contact us, so your appliance is back in service without long waits.",
    guarantee_2_t: "30-Day Warranty",
    guarantee_2_d: "Every repair is backed by a 30-day warranty covering parts and labor, for complete peace of mind after the visit.",
    guarantee_3_t: "Transportation to Workshop",
    guarantee_3_d: "When a repair needs specialised workshop equipment, we arrange collection of your appliance and return it once repaired.",
  },

  ar: {
    nav_home: "الرئيسية",
    nav_services: "خدماتنا",
    nav_gallery: "معرض الأعمال",
    nav_blog: "المدونة",
    nav_about: "من نحن",
    nav_contact: "تواصل معنا",
    nav_call: "اتصل الآن",

    brand_name: "إصلاح الغسالات الأوتوماتيكية",

    hero_tag: "الرياض · صيانة الأجهزة المنزلية",
    hero_title: "صيانة غسالات اتوماتيك وغسالات صحون ونشافات في الرياض",
    hero_desc: "صيانة سريعة وموثوقة للغسالات الأوتوماتيك وغسالات الصحون والنشافات — فنيون معتمدون يصلون إلى منزلك في جميع أنحاء الرياض.",
    hero_cta_book: "احجز صيانة",
    hero_cta_call: "اتصل الآن",
    hero_cta_whatsapp: "تواصل عبر واتساب",
    hero_badge_1: "زيارة في نفس اليوم",
    hero_badge_2: "تغطية شاملة للرياض",
    hero_badge_3: "نشرح التكلفة قبل البدء",

    trust_1: "فنيون ذوو خبرة",
    trust_2: "استجابة سريعة",
    trust_3: "إصلاحات موثوقة",
    trust_4: "تغطية خدمية في الرياض",

    services_tag: "خدماتنا",
    services_title: "خدمات إصلاح الأجهزة المنزلية",
    services_sub: "ثلاث تخصصات محددة، ننجزها بإتقان بدلاً من قائمة عامة من كل شيء.",
    svc_view: "عرض الخدمة",
    svc_book: "احجز الخدمة",
    badge_certified: "إصلاح معتمد",

    why_tag: "لماذا يثق بنا سكان الرياض",
    why_title: "خدمة صيانة أمينة ودقيقة",
    why_1_t: "فنيون محترفون",
    why_1_d: "متخصصون مدرّبون يشخّصون العطل الحقيقي قبل البدء بأي إصلاح.",
    why_2_t: "استجابة سريعة",
    why_2_d: "نرتّب موعد الزيارة بسرعة حتى لا يتعطل جهازك لفترة طويلة.",
    why_3_t: "خدمة شفافة",
    why_3_d: "تعرف التشخيص والتكلفة قبل بدء أي عمل إصلاح.",
    why_4_t: "إصلاحات عالية الجودة",
    why_4_d: "قطع مناسبة وطريقة عمل صحيحة حتى لا يتكرر نفس العطل.",
    why_5_t: "دعم يركّز على العميل",
    why_5_d: "تواصل واضح من أول اتصال حتى انتهاء الإصلاح.",
    why_6_t: "خدمة في جميع أنحاء الرياض",
    why_6_d: "زيارات ميدانية للمنازل في الرياض والأحياء المجاورة.",

    how_tag: "خطوات بسيطة",
    how_title: "كيف تتم الخدمة",
    how_1_t: "تواصل معنا",
    how_1_d: "اتصل، راسلنا عبر واتساب، أو املأ نموذج الحجز.",
    how_2_t: "أخبرنا بالمشكلة",
    how_2_d: "صف الجهاز والعطل الذي تلاحظه.",
    how_3_t: "زيارة الفني",
    how_3_d: "يصل الفني إلى موقعك في الرياض.",
    how_4_t: "يتم إصلاح الجهاز",
    how_4_d: "الإصلاح في الموقع مع شرح واضح للعمل المنجز.",

    gallery_tag: "أعمالنا",
    gallery_title: "إصلاحات حديثة في الرياض",
    gallery_sub: "نظرة على أعمال حقيقية — غسالات وغسالات صحون ونشافات أُعيدت للعمل.",
    gallery_view_all: "عرض المعرض كاملاً",
    gallery_filter_all: "الكل",
    gallery_filter_wm: "الغسالات",
    gallery_filter_dw: "غسالات الصحون",
    gallery_filter_dr: "النشافات",

    area_title: "خدمات إصلاح الأجهزة المنزلية في جميع أنحاء الرياض",
    area_desc: "نخدم العملاء في حي اليرموك وجميع الأحياء المجاورة في الرياض، مع فنيين يصلون إلى موقعك للتشخيص والإصلاح مباشرة.",

    faq_tag: "أسئلة شائعة",
    faq_title: "الأسئلة الأكثر شيوعًا",

    final_cta_title: "بحاجة إلى إصلاح جهاز منزلي في الرياض؟",
    final_cta_desc: "تواصل مع فريقنا اليوم لترتيب زيارة صيانة احترافية.",
    final_cta_contact: "تواصل معنا",

    blog_home_tag: "من المدونة",
    blog_home_title: "نصائح للعناية بالأجهزة",
    blog_home_view_all: "عرض جميع المقالات",
    blog_read_more: "اقرأ المزيد",

    footer_desc: "صيانة محلية للأجهزة المنزلية في الرياض — غسالات أوتوماتيك وغسالات صحون ونشافات، يتم إصلاحها بشكل صحيح من قبل فنيين يزورون منزلك.",
    footer_quick_links: "روابط سريعة",
    footer_services: "الخدمات",
    footer_contact: "تواصل معنا",
    footer_hours: "ساعات العمل",
    footer_hours_val: "متاح على مدار الساعة (24 ساعة)",
    footer_rights: "جميع الحقوق محفوظة.",

    bc_home: "الرئيسية",

    services_page_tag: "الخدمات",
    services_page_title: "خدمات إصلاح الأجهزة المنزلية في الرياض",
    services_page_sub: "اختر جهازًا أدناه للاطلاع على الأعطال الشائعة، وما نقوم بإصلاحه، وكيفية سير الزيارة.",

    about_tag: "من نحن",
    about_title: "صيانة أجهزة محلية بإتقان",
    about_intro: "انطلقت خدمتنا لتقدّم لأهالي الرياض بديلاً واضحًا عن الإصلاح العشوائي — فني صيانة غسالات الرياض يشخّص بدقة، ويشرح بوضوح، ويصلح الجهاز بحيث لا تعود نفس المشكلة.",
    about_mission_tag: "رسالتنا",
    about_mission_title: "الحفاظ على استمرارية عمل منازل الرياض",
    about_mission_desc: "نركّز على ثلاثة أجهزة فقط — الغسالات الأوتوماتيك وغسالات الصحون والنشافات — ليبقى فنيونا متخصصين فعليًا بدلاً من التشتت على كل شيء.",
    about_choose_tag: "لماذا يختارنا العملاء",
    about_choose_title: "ما يميز خدمتنا",
    about_approach_tag: "أسلوبنا",
    about_approach_title: "أسلوب إصلاح احترافي",
    about_approach_desc: "تبدأ كل زيارة بتشخيص دقيق، وشرح واضح للعطل، وتكلفة صريحة قبل بدء أي عمل. نستخدم القطع والطريقة الصحيحة للجهاز الذي أمامنا، لا حلاً عامًا.",
    about_coverage_tag: "التغطية",
    about_coverage_title: "التغطية الخدمية في الرياض",
    about_coverage_desc: "نزور المنازل في الرياض والأحياء المجاورة للتشخيص والإصلاح في الموقع — دون الحاجة لنقل الجهاز.",
    about_cta_title: "هل أنت مستعد لإصلاح جهازك؟",
    about_cta_desc: "تواصل معنا وسنرتب زيارة فني في الوقت المناسب لك.",

    contact_tag: "تواصل معنا",
    contact_title: "اتصل بنا",
    contact_sub: "أرسل بياناتك ووصف مشكلة الجهاز، وسنتواصل معك لترتيب الزيارة.",
    form_name: "الاسم الكامل",
    form_phone: "رقم الهاتف",
    form_appliance: "نوع الجهاز",
    form_appliance_ph: "اختر الجهاز",
    form_appliance_wm: "غسالة أوتوماتيك",
    form_appliance_dw: "غسالة صحون",
    form_appliance_dr: "نشافة",
    form_service: "الخدمة المطلوبة",
    form_service_ph: "اختر الخدمة",
    form_message: "الرسالة",
    form_message_ph: "صف المشكلة باختصار",
    form_submit: "إرسال الطلب",
    contact_info_title: "معلومات التواصل",
    contact_call: "اتصال",
    contact_whatsapp: "واتساب",
    contact_location: "منطقة الخدمة",
    contact_location_val: "حي اليرموك، الرياض 13243، المملكة العربية السعودية",
    contact_hours: "ساعات العمل",

    gallery_page_tag: "أعمالنا",
    gallery_page_title: "معرض إصلاح الأجهزة",
    gallery_page_sub: "نظرة مرئية على إصلاحات حديثة للغسالات وغسالات الصحون والنشافات في الرياض.",

    blog_page_tag: "المدونة",
    blog_page_title: "نصائح العناية بالأجهزة وإصلاحها",
    blog_page_sub: "نصائح عملية لإطالة عمر الغسالة وغسالة الصحون والنشافة بين الأعطال.",
    blog_back: "العودة إلى المدونة",

    d_common_problems: "المشاكل الشائعة",
    d_what_we_repair: "ما نقوم بإصلاحه",
    d_our_process: "خطوات الإصلاح",
    d_why_choose: "لماذا تختارنا",
    d_service_area: "منطقة الخدمة",
    d_service_area_val: "الرياض والأحياء المجاورة",
    d_guide: "دليل الأعطال والصيانة",
    d_faq: "الأسئلة الشائعة",
    d_related: "خدمات ذات صلة",
    d_call_now: "اتصل الآن",
    d_whatsapp: "واتساب",
    d_book_visit: "احجز زيارة",
    d_sticky_title: "بحاجة إلى إصلاح هذا الجهاز؟",
    d_sticky_desc: "أرسل فنيًا إلى منزلك في الرياض.",

    /* ---- Brands ---- */
    brands_tag: "خبرة موثوقة",
    brands_title: "العلامات التجارية التي نصلحها",
    brands_sub: "خبرة حقيقية في صيانة جميع الماركات الرئيسية للأجهزة المتوفرة في السعودية.",

    /* ---- Testimonials ---- */
    testimonials_tag: "آراء العملاء",
    testimonials_title: "ماذا يقول عملاؤنا",

    /* ---- Location / Map ---- */
    location_tag: "موقعنا",
    location_title: "موقعنا في الرياض",
    location_desc: "نتواجد في حي اليرموك بالرياض، مع فنيين يصلون إلى مختلف أنحاء المدينة للإصلاح الميداني.",
    location_get_directions: "الحصول على الاتجاهات",
    location_leave_review: "اترك لنا تقييمًا",

    /* ---- Service Areas ---- */
    areas_tag: "التغطية",
    areas_title: "مناطق الخدمة في الرياض",
    areas_sub: "نتواجد في حي اليرموك، مع فنيين يصلون إلى المناطق التالية وما حولها.",

    /* ---- Guarantees / USPs ---- */
    guarantees_tag: "التزامنا",
    guarantees_title: "لماذا يمكنك الاعتماد علينا",
    guarantee_1_t: "خدمة إصلاح في نفس اليوم",
    guarantee_1_d: "معظم الإصلاحات تتم في نفس يوم التواصل معنا، ليعود جهازك للعمل دون انتظار طويل.",
    guarantee_2_t: "ضمان 30 يومًا",
    guarantee_2_d: "كل إصلاح مغطى بضمان 30 يومًا يشمل القطع والعمالة، لراحة بال كاملة بعد الزيارة.",
    guarantee_3_t: "نقل الجهاز إلى الورشة",
    guarantee_3_d: "عندما يحتاج الإصلاح إلى معدات ورشة متخصصة، نقوم بترتيب استلام جهازك وإعادته بعد الإصلاح.",
  }
};

/* =========================================================
   Service data — drives services.html cards and the three
   service-detail pages via data-service on <body>.
   ========================================================= */
const servicesData = {
  "washing-machine": {
    slug: "automatic-washing-machine-repair",
    guide: {"ar": [{"h": "تصليح غسالات اتوماتيك في المنزل مع فني غسالات متخصص", "p": "تبحث عن فني غسالات اتوماتيك أو مهندس غسالات اتوماتيك أو مصلح غسالات في الرياض؟ نقدّم خدمة تصليح الغسالات الاتوماتيك وصيانة غسالات بالرياض في منزلك، ويصل فني صيانة غسالات اتوماتيك بعد اتصالك ليفحص الغسالة في مكانها دون الحاجة إلى نقلها. سواء احتجت إلى صيانة غسالات اتوماتيك في الرياض أو إلى تصليح غسالات الرياض لعطل محدد، تتم معظم الإصلاحات في نفس يوم التواصل، ونشرح لك العطل والتكلفة قبل بدء العمل، والإصلاح مشمول بضمان 30 يوماً على القطع والعمالة."}, {"h": "أشهر أعطال الغسالة الأوتوماتيك وأسبابها", "p": "من أكثر الشكاوى التي نتلقاها في الرياض أن الغسالة لا تصرّف الماء، أو لا تدور، أو تتوقف في منتصف البرنامج. في كثير من الحالات يكون السبب بسيطاً، مثل انسداد فلتر المضخة بالوبر والعملات المعدنية، أو تلف حزام الدوران، أو خلل في مفتاح الباب يمنع بدء الدورة. وفي حالات أخرى يكون العطل في مضخة التصريف أو الفحمات أو البوردة الإلكترونية. لذلك لا نغيّر أي قطعة قبل أن نحدد العطل الفعلي بالفحص."}, {"h": "رموز الأعطال على شاشة الغسالة", "p": "تعرض معظم الغسالات الحديثة رمزاً على الشاشة عند حدوث خلل، وتختلف الرموز من ماركة لأخرى. قد يشير رمز مثل E21 أو 5E أو OE إلى مشكلة في التصريف، بينما ترتبط رموز أخرى بالباب أو مستوى الماء أو المحرك. لا تعتمد على الرمز وحده في الحكم على العطل؛ دليل الجهاز يوضح معناه، والفني يتأكد منه بالفحص قبل الإصلاح."}, {"h": "متى يُفضَّل إصلاح الغسالة ومتى تُستبدل؟", "p": "إصلاح الغسالة أوفر في أغلب الحالات إذا كان العطل في قطعة واحدة مثل المضخة أو الحزام أو الفلتر أو مفتاح الباب. أما إذا كان الحوض الداخلي أو الهيكل تالفاً بشدة فقد لا يكون الإصلاح مجدياً. نشرح لك العطل والتكلفة قبل بدء العمل، لتقرر بنفسك."}, {"h": "نصائح تقلل أعطال الغسالة", "p": "نظّف فلتر المضخة بانتظام، ولا تحمّل الغسالة فوق سعتها، وافحص جيوب الملابس من العملات والمشابك، واترك الباب مفتوحاً بعد الغسيل لتجف حشية الباب المطاطية، واستخدم كمية مناسبة من المنظف لتجنب الرغوة الزائدة. هذه العادات البسيطة تطيل عمر الغسالة وتقلل الحاجة إلى الصيانة."}, {"h": "كيف تعمل الغسالة الأوتوماتيك وأي الأجزاء تتعطل؟", "p": "تسحب الغسالة الأوتوماتيك الماء عبر صمام دخول الماء، ويقيس حساس مستوى الماء (أو مفتاح الضغط) الكمية المطلوبة، ثم يدير المحرك الحوض مباشرة أو عبر حزام. بعد الغسيل تُفرغ مضخة التصريف الماء عبر الخرطوم، ويُبقي قفل الباب الغسالة مغلقة أثناء الدورة، وتتحكم البوردة الإلكترونية في كل مرحلة. لذلك ترتبط الأعطال الشائعة بهذه القطع: انسداد الفلتر أو الخرطوم، وتلف مضخة التصريف، وارتخاء الحزام أو تآكل الفحمات في المحركات التي تحتوي عليها، وعطل قفل الباب أو الحساس، وضعف ماصات الصدمات والمحامل الذي يسبب الاهتزاز والضجيج."}, {"h": "ماذا تجهّز قبل وصول الفني؟", "p": "حتى يسير التشخيص بسرعة، دوّن ماركة الغسالة وموديلها (على الملصق قرب الباب أو في الخلف)، وصوّر الرمز الظاهر على الشاشة إن وُجد، واترك مساحة حول الغسالة، وأخبرنا متى بدأ العطل وهل تكرر. ويفيد أن تذكر إن كانت الغسالة أمامية أو علوية، وهل ظهر تسريب أو صوت غير معتاد قبل التوقف."}], "en": [{"h": "Automatic washing machine repair at home by a washing machine technician", "p": "Looking for a washing machine technician near you in Riyadh? Whether you call him an engineer, a mechanic or a repairman, our technician comes to your home to repair and fix your washing machine. After your call he inspects the machine where it stands, with no need to move it. Most repairs are completed on the same day you contact us, and we explain the fault and the cost before any work begins. Every repair is covered by a 30-day warranty on parts and labor."}, {"h": "Common automatic washing machine faults and their causes", "p": "The most frequent complaints we hear in Riyadh are a machine that won't drain, won't spin, or stops mid-cycle. Often the cause is simple: a pump filter blocked with lint and coins, a worn drive belt, or a faulty door lock switch that stops the cycle from starting. Other times the fault is in the drain pump, the carbon brushes or the electronic control board. That is why we never replace a part before finding the actual fault by inspection."}, {"h": "Error codes on the washing machine display", "p": "Most modern washing machines show a code when something goes wrong, and the codes differ from brand to brand. A code such as E21, 5E or OE can point to a drainage problem, while others relate to the door, the water level or the motor. Don't rely on the code alone: the appliance manual explains what it means, and the technician confirms it by inspection before repairing."}, {"h": "When to repair a washing machine and when to replace it", "p": "Repair is usually the better value when the fault is a single part such as the pump, belt, filter or door switch. If the inner drum or the frame is badly damaged, repair may not make sense. We explain the fault and the cost before any work starts, so the decision is yours."}, {"h": "Tips that reduce washing machine breakdowns", "p": "Clean the pump filter regularly, don't overload the machine, check pockets for coins and clips, leave the door open after washing so the rubber door seal dries, and use the right amount of detergent to avoid excess foam. These simple habits extend the life of the machine and reduce the need for repairs."}, {"h": "How an automatic washing machine works and which parts fail", "p": "An automatic washing machine takes water in through the inlet valve, a water level sensor (or pressure switch) measures how much is needed, and the motor turns the drum directly or through a drive belt. After washing, the drain pump empties the water through the hose, the door lock keeps the door shut during the cycle, and the control board manages every stage. That is why common faults trace back to a few parts: a blocked filter or hose, a worn drain pump, a loose belt or worn carbon brushes (on motors that have them), a faulty door lock or sensor, and weak shock absorbers or bearings that cause vibration and noise."}, {"h": "What to prepare before the technician arrives", "p": "To speed up the diagnosis, note the brand and model of the machine (on the label near the door or at the back), photograph any code on the display, leave some space around the machine, and tell us when the fault started and whether it has repeated. It also helps to say whether the machine is front-load or top-load, and whether you noticed a leak or an unusual noise before it stopped."}]},
    faq: {"ar": [{"q": "الغسالة لا تصرّف الماء، ما السبب؟", "a": "غالباً بسبب انسداد فلتر المضخة أو خرطوم التصريف، وقد تكون مضخة التصريف نفسها تالفة. يمكنك فحص الفلتر بعد فصل الغسالة عن الكهرباء، فإن استمرت المشكلة فاتصل بنا ليحدد الفني العطل في زيارة منزلية."}, {"q": "الغسالة تتسرب منها المياه، ماذا أفعل؟", "a": "قد يأتي التسريب من الخراطيم أو حشية الباب أو المضخة أو درج المنظف. أغلق الماء وافصل الكهرباء ثم اتصل بنا، فالتسريب المستمر قد يضر بالأرضية والجهاز."}, {"q": "هل تصلحون الغسالة في المنزل أم أحتاج إلى نقلها؟", "a": "نزور منزلك في الرياض ونفحص الغسالة في مكانها، ولا تحتاج إلى نقلها في أغلب الحالات."}, {"q": "هل أعرف التكلفة قبل بدء الإصلاح؟", "a": "نعم، نشرح لك العطل والتكلفة قبل البدء بأي عمل، وأنت من يقرر المتابعة."}, {"q": "هل يوجد ضمان على الإصلاح؟", "a": "نعم، كل إصلاح مشمول بضمان 30 يوماً على القطع والعمالة."}, {"q": "هل تصلحون جميع ماركات الغسالات؟", "a": "نعمل على الماركات الشائعة في السعودية. اتصل بنا وأخبرنا بالماركة والموديل والعطل لنؤكد لك."}, {"q": "هل الخدمة متاحة في أي وقت؟", "a": "ساعات العمل لدينا على مدار 24 ساعة، وتتم معظم الإصلاحات في نفس يوم التواصل."}, {"q": "هل يوجد فني غسالات قريب مني في الرياض؟", "a": "نخدم منازل الرياض ومنها شرق الرياض وشمالها. اتصل بنا وأخبرنا باسم الحي والعطل لنؤكد لك موعد الزيارة."}, {"q": "هل تصلحون غسالات سامسونج وإل جي ودايو؟", "a": "نعم، نصلح هذه الماركات وغيرها من الماركات الشائعة. اطلع على الماركات التي نصلحها وأخبرنا بالموديل والعطل عند الاتصال."}, {"q": "ما رقم صيانة الغسالات في الرياض؟", "a": "يمكنك الاتصال بنا على الرقم الظاهر في أعلى الصفحة أو مراسلتنا عبر واتساب، وأخبرنا بالماركة والموديل والعطل."}], "en": [{"q": "Why won't my washing machine drain?", "a": "Most often the pump filter or drain hose is blocked, though the drain pump itself may have failed. You can check the filter after unplugging the machine; if the problem continues, call us and the technician will find the fault on a home visit."}, {"q": "My washing machine is leaking. What should I do?", "a": "Leaks can come from the hoses, the door seal, the pump or the detergent drawer. Turn off the water and unplug the machine, then call us. A continuing leak can damage your floor and the appliance."}, {"q": "Do you repair the washing machine at home or do I need to move it?", "a": "We visit your home in Riyadh and inspect the machine where it stands. In most cases you don't need to move it."}, {"q": "Will I know the cost before the repair starts?", "a": "Yes. We explain the fault and the cost before any work begins, and you decide whether to go ahead."}, {"q": "Is the repair under warranty?", "a": "Yes. Every repair is covered by a 30-day warranty on parts and labor."}, {"q": "Do you repair all washing machine brands?", "a": "We work on the brands commonly sold in Saudi Arabia. Call us with the brand, model and fault and we'll confirm."}, {"q": "Is the service available at any time?", "a": "Our working hours run 24 hours a day, and most repairs are completed on the same day you contact us."}, {"q": "Is there a washing machine repair service near me in Riyadh?", "a": "We serve homes across Riyadh, including East and North Riyadh. Call us with your neighborhood and the fault, and we will confirm the visit time."}, {"q": "Do you repair Samsung, LG and Daewoo washing machines?", "a": "Yes, we repair these and other common brands. See the brands we repair, and tell us the model and the fault when you call."}, {"q": "What is the washing machine repair number in Riyadh?", "a": "Call us on the number shown at the top of this page or message us on WhatsApp, and tell us the brand, model and fault."}]},
    icon: "bi-droplet-half",
    filterGroup: "wm",
    image: "hero-technician-front-load.webp",
    title: { en: "Automatic Washing Machine Repair", ar: "إصلاح الغسالات الأوتوماتيك" },
    h1: { en: "Automatic Washing Machine Repair in Riyadh", ar: "صيانة غسالات اتوماتيك في الرياض" },
    shortDesc: {
      en: "Professional repair for automatic washing machines and common washing machine faults.",
      ar: "إصلاح احترافي للغسالات الأوتوماتيك وأعطالها الشائعة."
    },
    intro: {
      en: "If your automatic washing machine won't start, won't drain, or is leaking water, our technicians diagnose the fault on-site and repair it properly — no guesswork, no unnecessary part swaps.",
      ar: "إذا كانت غسالتك الأوتوماتيك لا تعمل، أو لا تُصرّف الماء، أو تسرّب الماء، يقوم فنيونا بتشخيص العطل في الموقع وإصلاحه بشكل صحيح — دون تخمين أو استبدال قطع غير ضرورية."
    },
    problems: {
      en: ["Washing machine not starting", "Not draining", "Not spinning", "Water leakage", "Excessive vibration", "Door problems", "Error/fault codes"],
      ar: ["الغسالة لا تعمل", "عدم تصريف الماء", "عدم الدوران", "تسرب الماء", "اهتزاز زائد", "مشاكل في الباب", "رموز أعطال"]
    },
    repair: {
      en: ["Motor and belt issues", "Drain pump faults", "Water inlet valve problems", "Control board and sensor faults", "Door lock and seal issues", "Drum bearing noise"],
      ar: ["مشاكل المحرك والسير", "أعطال مضخة التصريف", "مشاكل صمام دخول الماء", "أعطال لوحة التحكم والحساسات", "مشاكل قفل الباب والحلقة المطاطية", "ضوضاء محامل الحوض"]
    },
    process: {
      en: ["Listen to the fault description and ask a few quick questions", "Technician inspects the machine on-site in Riyadh", "Diagnosis and cost explained before any work starts", "Repair carried out with the correct parts and technique", "Machine tested with a full cycle before we leave"],
      ar: ["الاستماع لوصف العطل وطرح بعض الأسئلة السريعة", "يقوم الفني بفحص الجهاز في موقعك بالرياض", "شرح التشخيص والتكلفة قبل بدء أي عمل", "تنفيذ الإصلاح بالقطع والطريقة الصحيحة", "اختبار الجهاز بدورة كاملة قبل المغادرة"]
    }
  },
  "dishwasher": {
    slug: "dishwasher-repair",
    guide: {"ar": [{"h": "فني غسالة صحون في الرياض", "p": "تحتاج إلى فني غسالة صحون الرياض؟ نرسل فني غسالة صحون إلى منزلك لفحص العطل، سواء كنت تبحث عن صيانة غسالة صحون الرياض أو عن فني تصليح غسالة صحون لمشكلة محددة كالتصريف أو التسريب. نشرح لك العطل والتكلفة قبل بدء العمل، والإصلاح بضمان 30 يوماً على القطع والعمالة."}, {"h": "أشهر أعطال غسالة الصحون", "p": "أكثر ما يصلنا من شكاوى هو ضعف التنظيف وبقاء بقايا الطعام على الأواني، أو عدم تصريف الماء، أو التسريب، أو أن الغسالة لا تسخّن أو لا تبدأ الدورة. غالباً يرجع ذلك إلى انسداد فلتر القاع أو أذرع الرش، أو تلف مضخة التصريف، أو خلل في عنصر التسخين أو حشية الباب. نفحص الجهاز أولاً ثم نحدد القطعة المعطلة."}, {"h": "لماذا تبقى الأواني متسخة أو بيضاء اللون؟", "p": "الرواسب البيضاء على الأواني والزجاج ناتجة عادة عن عسر الماء، وتحتاج إلى ملح غسالة الصحون ولمّع مناسب. أما بقايا الطعام فتدل على انسداد أذرع الرش أو الفلتر، أو على ترتيب الأواني بطريقة تعيق وصول الماء. نظّف الفلتر وأذرع الرش أولاً، فإن استمرت المشكلة فالجهاز يحتاج إلى فحص."}, {"h": "الروائح الكريهة ورموز الأعطال", "p": "الرائحة الكريهة تدل غالباً على بقايا عالقة في الفلتر أو خرطوم التصريف. يمكن تشغيل برنامج تنظيف بحرارة عالية مع منظف مخصص لغسالات الصحون. أما الرموز التي تظهر على الشاشة فتختلف باختلاف الماركة، ويوضح دليل الجهاز معناها، ويتأكد الفني منها بالفحص."}, {"h": "الصيانة الدورية لغسالة الصحون", "p": "أزل بقايا الطعام الكبيرة قبل التحميل، ونظّف الفلتر بانتظام، وافحص أذرع الرش من الانسداد، ولا تملأ السلال فوق طاقتها، واستخدم الملح واللمّع حسب توصية الشركة المصنّعة. لا تستخدم صابون الأطباق اليدوي في الغسالة لأنه يسبب رغوة زائدة وقد يؤدي إلى تسريب."}, {"h": "كيف تعمل غسالة الصحون وأي الأجزاء تتعطل؟", "p": "تدخل المياه إلى غسالة الصحون عبر صمام الدخول، ويسخّنها عنصر التسخين، ثم تدفعها مضخة الدورة عبر أذرع الرش إلى الأواني، ويحجز الفلتر بقايا الطعام، وتُفرغ مضخة التصريف الماء المتسخ. ويضيف موزع المنظف واللمّع المواد في الوقت المناسب، وتمنع حشية الباب التسريب، وتتحكم البوردة في الدورة. لذلك تنتج الأعطال الشائعة عن انسداد الفلتر أو أذرع الرش، أو تلف مضخة التصريف أو عنصر التسخين، أو تآكل حشية الباب، أو خلل في موزع المنظف."}, {"h": "ماذا تجهّز قبل وصول الفني؟", "p": "دوّن ماركة غسالة الصحون وموديلها (على ملصق داخل إطار الباب أو على جانبه)، وصوّر الرمز الظاهر على الشاشة إن وُجد، وأفرغ السلال من الأواني إن أمكن، وأخبرنا هل المشكلة في التصريف أو التنظيف أو التسخين أو التسريب. وإن كنت تستخدم ملح غسالة الصحون واللمّع فأخبرنا بذلك."}], "en": [{"h": "Dishwasher technician and service at your home", "p": "Need a dishwasher technician in Riyadh? We offer dishwasher repair and dishwasher service at your home, from a quick fix when the machine won't drain to regular dishwasher maintenance. We explain the fault and the cost before any work begins, with a 30-day warranty on parts and labor."}, {"h": "Common dishwasher faults", "p": "The most common complaints are poor cleaning with food left on dishes, water that won't drain, leaks, and a dishwasher that doesn't heat or won't start a cycle. These usually trace back to a blocked bottom filter or spray arms, a failed drain pump, or a fault in the heating element or door seal. We inspect the unit first and then identify the faulty part."}, {"h": "Why dishes stay dirty or look cloudy", "p": "White deposits on dishes and glassware are usually caused by hard water and call for dishwasher salt and a suitable rinse aid. Leftover food points to blocked spray arms or filter, or to dishes loaded in a way that blocks the water. Clean the filter and spray arms first; if the problem continues, the machine needs an inspection."}, {"h": "Bad smells and error codes", "p": "A bad smell usually means residue stuck in the filter or drain hose. You can run a hot cleaning cycle with a dishwasher cleaner. Error codes differ by brand; the appliance manual explains them and the technician confirms them by inspection."}, {"h": "Regular dishwasher maintenance", "p": "Scrape large food scraps before loading, clean the filter regularly, check the spray arms for blockages, don't overload the racks, and use salt and rinse aid as the manufacturer recommends. Don't use hand dishwashing liquid in the machine, as it causes excess foam and can lead to leaks."}, {"h": "How a dishwasher works and which parts fail", "p": "Water enters the dishwasher through the inlet valve, the heating element warms it, the circulation pump drives it through the spray arms onto the dishes, the filter traps food residue, and the drain pump removes the dirty water. The detergent dispenser and rinse aid release at the right moment, the door seal prevents leaks, and the control board runs the cycle. That is why the common faults come from a blocked filter or spray arms, a worn drain pump or heating element, a damaged door seal, or a faulty detergent dispenser."}, {"h": "What to prepare before the technician arrives", "p": "Note the brand and model of the dishwasher (on a label inside the door frame or on its side), photograph any code on the display, empty the racks if you can, and tell us whether the problem is draining, cleaning, heating or leaking. If you use dishwasher salt and rinse aid, mention it."}]},
    faq: {"ar": [{"q": "غسالة الصحون لا تصرّف الماء، ما الحل؟", "a": "تحقق أولاً من فلتر القاع وخرطوم التصريف بعد فصل الجهاز عن الكهرباء. إذا بقي الماء في الحوض فقد تكون مضخة التصريف تالفة، ويحتاج الجهاز إلى فحص من الفني."}, {"q": "لماذا لا تنظف غسالة الصحون الأواني جيداً؟", "a": "الأسباب الشائعة هي انسداد أذرع الرش أو الفلتر، أو كثرة الأواني في السلال، أو منظف غير مناسب، أو نقص الملح واللمّع. إذا نظّفت الأجزاء وبقيت المشكلة فاتصل بنا للفحص."}, {"q": "غسالة الصحون يتسرب منها الماء، ما السبب؟", "a": "قد يكون السبب حشية الباب أو الخراطيم أو رغوة زائدة بسبب استخدام صابون يدوي. أوقف الجهاز وافصل الكهرباء ثم اتصل بنا إن استمر التسريب."}, {"q": "هل تصلحون غسالة الصحون في المنزل؟", "a": "نعم، يزورك الفني في منزلك بالرياض ويفحص الجهاز في مكانه."}, {"q": "هل يوجد ضمان على إصلاح غسالة الصحون؟", "a": "نعم، كل إصلاح مشمول بضمان 30 يوماً على القطع والعمالة."}, {"q": "هل أعرف التكلفة قبل بدء الإصلاح؟", "a": "نعم، نشرح لك العطل والتكلفة قبل البدء بأي عمل، وأنت من يقرر المتابعة."}], "en": [{"q": "My dishwasher won't drain. What can I do?", "a": "First check the bottom filter and the drain hose after unplugging the unit. If water stays in the tub, the drain pump may have failed and the technician needs to inspect the machine."}, {"q": "Why isn't my dishwasher cleaning dishes properly?", "a": "Common causes are blocked spray arms or filter, overloaded racks, an unsuitable detergent, or a lack of salt and rinse aid. If you clean those parts and the problem remains, call us for an inspection."}, {"q": "Why is my dishwasher leaking?", "a": "The cause may be the door seal, the hoses, or excess foam from using hand dishwashing liquid. Stop the machine, unplug it, and call us if the leak continues."}, {"q": "Do you repair dishwashers at home?", "a": "Yes. The technician visits your home in Riyadh and inspects the unit where it stands."}, {"q": "Is the dishwasher repair under warranty?", "a": "Yes. Every repair is covered by a 30-day warranty on parts and labor."}, {"q": "Will I know the cost before the repair starts?", "a": "Yes. We explain the fault and the cost before any work begins, and you decide whether to go ahead."}]},
    icon: "bi-cup-straw",
    filterGroup: "dw",
    image: "dishwasher-repair-technician-riyadh.webp",
    title: { en: "Dishwasher Repair", ar: "إصلاح غسالات الصحون" },
    h1: { en: "Dishwasher Repair in Riyadh", ar: "صيانة غسالة صحون في الرياض" },
    shortDesc: {
      en: "Reliable dishwasher repair for common cleaning, drainage, water and electrical problems.",
      ar: "إصلاح موثوق لغسالات الصحون لمشاكل التنظيف والتصريف والماء والكهرباء."
    },
    intro: {
      en: "From dishes coming out dirty to a dishwasher that won't drain, our technicians handle the full range of dishwasher faults with an on-site visit in Riyadh.",
      ar: "من الأطباق التي تخرج غير نظيفة إلى غسالة صحون لا تُصرّف الماء، يتعامل فنيونا مع كامل نطاق أعطال غسالة الصحون من خلال زيارة ميدانية في الرياض."
    },
    problems: {
      en: ["Dishwasher not starting", "Poor cleaning", "Water not draining", "Water leakage", "Unusual noise", "Heating problems", "Error/fault codes"],
      ar: ["الجهاز لا يعمل", "تنظيف ضعيف", "عدم تصريف الماء", "تسرب الماء", "ضوضاء غير معتادة", "مشاكل التسخين", "رموز أعطال"]
    },
    repair: {
      en: ["Spray arm and filter blockages", "Drain pump and hose faults", "Water inlet and float switch issues", "Heating element faults", "Door latch and seal problems", "Control panel faults"],
      ar: ["انسداد ذراع الرش والفلتر", "أعطال مضخة وخرطوم التصريف", "مشاكل دخول الماء ومفتاح العوامة", "أعطال عنصر التسخين", "مشاكل قفل الباب والحلقة المطاطية", "أعطال لوحة التحكم"]
    },
    process: {
      en: ["Tell us what's happening with the dishwasher", "Technician visits and inspects the unit", "Clear diagnosis and cost before repair begins", "Fault repaired with correct parts", "A full wash cycle test before we finish"],
      ar: ["أخبرنا بما يحدث مع غسالة الصحون", "يزور الفني ويفحص الجهاز", "تشخيص واضح وتكلفة قبل بدء الإصلاح", "إصلاح العطل بالقطع الصحيحة", "اختبار دورة غسيل كاملة قبل الانتهاء"]
    }
  },
  "dryer": {
    slug: "dryer-repair",
    guide: {"ar": [{"h": "صيانة نشافة الملابس (مجفف الملابس)", "p": "تعمل نشافة ملابس، أو مجفف ملابس كما يسميه البعض، بالهواء الساخن. نقدّم تصليح نشافة الرياض في المنزل، ونصلح مجفف ملابس حراري ونشافة حرارية، ونفحص عنصر التسخين ومجرى الهواء والحساسات قبل أي إصلاح، ونشرح لك العطل والتكلفة قبل بدء العمل."}, {"h": "أشهر أعطال نشافة الملابس", "p": "من أكثر الأعطال شيوعاً أن النشافة لا تسخّن، أو تبقى الملابس رطبة بعد انتهاء الدورة، أو لا يدور الحوض، أو يصدر الجهاز ضوضاء أو حرارة مرتفعة. الأسباب المعتادة هي انسداد فلتر الوبر أو مجرى الهواء، أو تلف عنصر التسخين أو الثرموستات، أو قطع حزام الحوض. نفحص الجهاز لتحديد العطل قبل أي إصلاح."}, {"h": "خطر تراكم الوبر في النشافة", "p": "تراكم الوبر في الفلتر ومجرى العادم لا يبطّئ التجفيف فحسب، بل يرفع حرارة الجهاز وقد يشكّل خطر حريق. نظّف فلتر الوبر بعد كل دورة، وتأكد من أن مجرى العادم غير مسدود أو مثني."}, {"h": "النشافة تعمل لكن الملابس تبقى رطبة", "p": "يدل ذلك غالباً على اختناق مجرى الهواء أو انسداد الفلتر أو تحميل زائد، وقد يكون عنصر التسخين أو الحساس ضعيفاً. ابدأ بتنظيف الفلتر وتخفيف الحمل، فإن لم يتحسن الأداء فاطلب فحص الجهاز."}, {"h": "نصائح لإطالة عمر النشافة", "p": "نظّف فلتر الوبر بعد كل استخدام، ولا تحمّل النشافة فوق سعتها، وإن كانت نشافتك مكثّفة فأفرغ خزان المياه بعد كل دورة. لا تجفف ملابس ملوثة بالزيوت أو المواد القابلة للاشتعال، وانتبه إلى أن مجرى الهواء يجب أن يبقى حراً دائماً."}, {"h": "صيانة الغسالة المدمجة مع النشافة (غسالة ونشافة في جهاز واحد)", "p": "تجمع بعض الأجهزة وظيفتي الغسيل والتجفيف في جهاز واحد، ولذلك قد تتعرض لأعطال الغسالة الأوتوماتيك مثل التصريف والدوران والتسريب، ولأعطال النشافة مثل عدم التسخين وانسداد مجرى الهواء. نفحص الجهاز لتحديد أي الوظيفتين فيها العطل قبل الإصلاح."}, {"h": "كيف تعمل النشافة وأي الأجزاء تتعطل؟", "p": "تسحب النشافة الهواء وتسخّنه بعنصر تسخين يتحكم فيه ثرموستات ومصهر حراري للحماية، ويدير المحرك الحوض عبر حزام وبكرات، ثم يمر الهواء الرطب عبر فلتر الوبر إلى مجرى العادم، أو إلى المكثف في النشافات المكثفة، ويراقب حساس الرطوبة جفاف الملابس. لذلك ترتبط الأعطال بانسداد الفلتر أو المجرى، وتلف عنصر التسخين أو الثرموستات، وقطع الحزام أو تآكل البكرات، وعطل الحساس."}, {"h": "ماذا تجهّز قبل وصول الفني؟", "p": "دوّن ماركة النشافة وموديلها، ونظّف فلتر الوبر قبل الزيارة إن أمكن، وأخبرنا هل المشكلة في عدم التسخين أو بطء التجفيف أو عدم دوران الحوض أو الضجيج. وإن كانت نشافتك مكثفة فأفرغ خزان المياه، وأخبرنا إن ظهرت رائحة احتراق أو حرارة غير معتادة."}], "en": [{"h": "Dryer repair and dryer service at your home", "p": "We offer dryer repair and dryer service in Riyadh. Our dryer technician checks the heating element, thermostat, lint filter and air path at your home, and explains the fault and the cost before any work begins, with a 30-day warranty on parts and labor."}, {"h": "Common dryer faults", "p": "The most common faults are a dryer that doesn't heat, clothes that stay damp after the cycle, a drum that won't turn, or a machine that is noisy or runs too hot. Usual causes are a blocked lint filter or air duct, a failed heating element or thermostat, or a broken drum belt. We inspect the unit to find the fault before any repair."}, {"h": "The danger of lint build-up", "p": "Lint building up in the filter and exhaust duct doesn't only slow down drying; it raises the temperature of the machine and can become a fire risk. Clean the lint filter after every cycle and make sure the exhaust duct is not blocked or kinked."}, {"h": "The dryer runs but clothes stay damp", "p": "This usually points to restricted airflow, a blocked filter or an overloaded drum, though a weak heating element or sensor is also possible. Start by cleaning the filter and reducing the load; if performance doesn't improve, have the machine inspected."}, {"h": "Tips to extend the life of your dryer", "p": "Clean the lint filter after each use, don't overload the dryer, and if your dryer is a condenser type, empty the water tank after every cycle. Never dry clothes soaked in oils or flammable substances, and keep the air path free at all times."}, {"h": "Washer-dryer combo repair", "p": "Some appliances combine washing and drying in one machine, so they can suffer both washing machine faults such as drainage, spinning and leaks, and dryer faults such as no heat and blocked airflow. We inspect the machine to find which function has the fault before repairing it."}, {"h": "How a dryer works and which parts fail", "p": "A dryer draws in air and warms it with a heating element controlled by a thermostat and protected by a thermal fuse. The motor turns the drum through a belt and rollers, then the damp air passes through the lint filter to the exhaust duct (or to the condenser in condenser dryers), while a moisture sensor tracks how dry the clothes are. That is why faults relate to a blocked filter or duct, a failed heating element or thermostat, a broken belt or worn rollers, and a faulty sensor."}, {"h": "What to prepare before the technician arrives", "p": "Note the brand and model of the dryer, clean the lint filter before the visit if you can, and tell us whether the problem is no heat, slow drying, a drum that won't turn, or noise. If your dryer is a condenser type, empty the water tank, and tell us if you noticed a burning smell or unusual heat."}]},
    faq: {"ar": [{"q": "النشافة لا تسخّن، ما السبب؟", "a": "غالباً يكون السبب انسداد الفلتر أو مجرى الهواء، أو تلف عنصر التسخين أو الثرموستات. نظّف الفلتر أولاً، فإن استمر عدم التسخين فاتصل بنا ليفحصها الفني."}, {"q": "لماذا لا تجفف النشافة الملابس جيداً؟", "a": "من الأسباب الشائعة انسداد فلتر الوبر أو مجرى الهواء، أو تحميل النشافة فوق سعتها، أو ضعف التسخين. خفف الحمل ونظّف الفلتر، وإن بقيت المشكلة فتحتاج إلى فحص."}, {"q": "النشافة لا يدور حوضها أو يصدر منها صوت عالٍ، ماذا أفعل؟", "a": "قد يكون الحزام مقطوعاً أو البكرات تالفة أو هناك جسم عالق داخل الحوض. أوقف الجهاز وافصل الكهرباء ثم اتصل بنا للفحص."}, {"q": "هل تصلحون النشافة في المنزل؟", "a": "نعم، يزورك الفني في منزلك بالرياض ويفحص النشافة في مكانها."}, {"q": "هل يوجد ضمان على إصلاح النشافة؟", "a": "نعم، كل إصلاح مشمول بضمان 30 يوماً على القطع والعمالة."}, {"q": "هل أعرف التكلفة قبل بدء الإصلاح؟", "a": "نعم، نشرح لك العطل والتكلفة قبل البدء بأي عمل، وأنت من يقرر المتابعة."}, {"q": "هل تصلحون الغسالة المدمجة مع النشافة؟", "a": "نعم، نفحص الجهاز في منزلك بالرياض ونحدد هل العطل في وظيفة الغسيل أو التجفيف، ونشرح التكلفة قبل بدء الإصلاح."}], "en": [{"q": "Why isn't my dryer heating?", "a": "Most often the filter or air duct is blocked, or the heating element or thermostat has failed. Clean the filter first; if there is still no heat, call us and the technician will inspect it."}, {"q": "Why doesn't my dryer dry clothes properly?", "a": "Common causes are a blocked lint filter or air duct, an overloaded drum, or weak heating. Reduce the load and clean the filter; if the problem remains, it needs an inspection."}, {"q": "My dryer drum won't turn or the dryer is very noisy. What should I do?", "a": "The belt may be broken, the rollers worn, or an object may be stuck inside the drum. Stop the machine, unplug it, and call us for an inspection."}, {"q": "Do you repair dryers at home?", "a": "Yes. The technician visits your home in Riyadh and inspects the dryer where it stands."}, {"q": "Is the dryer repair under warranty?", "a": "Yes. Every repair is covered by a 30-day warranty on parts and labor."}, {"q": "Will I know the cost before the repair starts?", "a": "Yes. We explain the fault and the cost before any work begins, and you decide whether to go ahead."}, {"q": "Do you repair washer-dryer combos?", "a": "Yes. We inspect the machine at your home in Riyadh, work out whether the fault is in the washing or the drying function, and explain the cost before starting the repair."}]},
    icon: "bi-wind",
    filterGroup: "dr",
    image: "dryer-repair-technician-riyadh.webp",
    title: { en: "Dryer Repair", ar: "إصلاح النشافات" },
    h1: { en: "Dryer Repair in Riyadh", ar: "صيانة النشافات في الرياض" },
    shortDesc: {
      en: "Professional dryer repair for heating, spinning, drying and operational problems.",
      ar: "إصلاح احترافي للنشافات لمشاكل التسخين والدوران والتجفيف والتشغيل."
    },
    intro: {
      en: "A dryer that won't heat or leaves clothes damp is rarely worth replacing. Our technicians diagnose the actual fault and repair it on-site in Riyadh.",
      ar: "النشافة التي لا تسخن أو تترك الملابس رطبة نادرًا ما تستحق الاستبدال. يقوم فنيونا بتشخيص العطل الفعلي وإصلاحه في موقعك بالرياض."
    },
    problems: {
      en: ["Dryer not heating", "Dryer not starting", "Clothes remain wet", "Drum not spinning", "Unusual noise", "Overheating", "Error/fault codes"],
      ar: ["النشافة لا تسخن", "النشافة لا تعمل", "الملابس تبقى رطبة", "الحوض لا يدور", "ضوضاء غير معتادة", "ارتفاع الحرارة الزائد", "رموز أعطال"]
    },
    repair: {
      en: ["Heating element faults", "Thermostat and sensor issues", "Belt and drum motor problems", "Blocked vents and lint paths", "Door switch faults", "Control board issues"],
      ar: ["أعطال عنصر التسخين", "مشاكل الثرموستات والحساسات", "مشاكل السير ومحرك الحوض", "انسداد فتحات التهوية ومسارات الوبر", "أعطال مفتاح الباب", "مشاكل لوحة التحكم"]
    },
    process: {
      en: ["Describe the dryer's problem to us", "Technician visits and inspects the unit", "Diagnosis and cost explained upfront", "Repair carried out with correct parts", "Full drying cycle tested before we leave"],
      ar: ["صف لنا مشكلة النشافة", "يزور الفني ويفحص الجهاز", "شرح التشخيص والتكلفة مسبقًا", "تنفيذ الإصلاح بالقطع الصحيحة", "اختبار دورة تجفيف كاملة قبل المغادرة"]
    }
  }
};

/* =========================================================
   FAQ data — home page (general) and per-service FAQs.
   ========================================================= */
const faqDataHome = [
  { q: { en: "Do you repair automatic washing machines?", ar: "هل تصلحون الغسالات الأوتوماتيك؟" },
    a: { en: "Yes — automatic washing machines are one of our three core specialities, covering everything from draining faults to control board issues.", ar: "نعم، الغسالات الأوتوماتيك هي إحدى تخصصاتنا الثلاثة الأساسية، وتغطي كل شيء من أعطال التصريف إلى مشاكل لوحة التحكم." } },
  { q: { en: "Do you repair dishwashers?", ar: "هل تصلحون غسالات الصحون؟" },
    a: { en: "Yes, we repair dishwashers for cleaning, drainage, water and electrical faults.", ar: "نعم، نصلح غسالات الصحون لمشاكل التنظيف والتصريف والماء والكهرباء." } },
  { q: { en: "Do you repair dryers?", ar: "هل تصلحون النشافات؟" },
    a: { en: "Yes, dryer repair covers heating, spinning, drying and general operational faults.", ar: "نعم، إصلاح النشافات يغطي مشاكل التسخين والدوران والتجفيف والتشغيل العام." } },
  { q: { en: "Do you provide on-site repair in Riyadh?", ar: "هل تقدمون الإصلاح في الموقع بالرياض؟" },
    a: { en: "Yes, a technician visits your home in Riyadh to diagnose and repair the appliance on-site.", ar: "نعم، يزور الفني منزلك في الرياض لتشخيص الجهاز وإصلاحه في الموقع." } },
  { q: { en: "How can I book a repair?", ar: "كيف يمكنني حجز خدمة إصلاح؟" },
    a: { en: "Call us, message us on WhatsApp, or fill in the contact form and we'll arrange a visit.", ar: "اتصل بنا، راسلنا عبر واتساب، أو املأ نموذج التواصل وسنقوم بترتيب الزيارة." } },
  { q: { en: "How quickly can a technician visit?", ar: "ما مدى سرعة وصول الفني؟" },
    a: { en: "We aim to schedule visits quickly, often on the same day depending on your area and time of contact.", ar: "نسعى لترتيب الزيارات بسرعة، وغالبًا في نفس اليوم حسب منطقتك ووقت التواصل." } },
  { q: { en: "Do you repair different appliance brands?", ar: "هل تصلحون مختلف ماركات الأجهزة؟" },
    a: { en: "We work with a wide range of common brands. Let us know your appliance's brand and model when you contact us.", ar: "نتعامل مع مجموعة واسعة من الماركات الشائعة. أخبرنا بماركة وموديل جهازك عند التواصل معنا." } }
];

/* =========================================================
   Blog data — home preview + full listing + one detail page.
   ========================================================= */
const blogData = [
  {
    slug: "signs-washing-machine-needs-repair",
    icon: "bi-droplet-half",
    group: "wm",
    image: "repair-01-drum-closeup.webp",
    date: { en: "August 2026", ar: "أغسطس 2026" },
    title: { en: "5 Signs Your Washing Machine Needs Repair", ar: "٥ علامات تدل على حاجة غسالتك للإصلاح" },
    excerpt: {
      en: "Loud noises, slow draining, and unfinished cycles usually mean something specific — here's what to check before you call a technician.",
      ar: "الضوضاء العالية، بطء التصريف، والدورات غير المكتملة عادة ما تشير إلى مشكلة محددة — إليك ما يجب فحصه قبل الاتصال بالفني."
    }
  },
  {
    slug: "dishwasher-cleaning-maintenance",
    icon: "bi-cup-straw",
    group: "dw",
    image: "dishwasher-repair-technician-riyadh.webp",
    date: { en: "July 2026", ar: "يوليو 2026" },
    title: { en: "Simple Dishwasher Maintenance That Prevents Repairs", ar: "صيانة بسيطة لغسالة الصحون تمنع الأعطال" },
    excerpt: {
      en: "A blocked filter or spray arm causes most cleaning complaints. A few minutes a month keeps your dishwasher running well.",
      ar: "انسداد الفلتر أو ذراع الرش هو سبب معظم شكاوى التنظيف. بضع دقائق شهريًا تحافظ على أداء غسالة الصحون."
    }
  },
  {
    slug: "why-is-my-dryer-not-heating",
    icon: "bi-wind",
    group: "dr",
    image: "dryer-repair-technician-riyadh.webp",
    date: { en: "June 2026", ar: "يونيو 2026" },
    title: { en: "Why Is My Dryer Not Heating Up?", ar: "لماذا لا تسخن نشافتي؟" },
    excerpt: {
      en: "A dryer that spins but doesn't heat usually points to one of three common faults. Here's how to tell them apart.",
      ar: "النشافة التي تدور دون تسخين تشير عادة إلى واحد من ثلاثة أعطال شائعة. إليك كيفية التمييز بينها."
    }
  },
  {"slug": "washing-machine-repair-cost-riyadh", "icon": "bi-cash-coin", "group": "wm", "image": "repair-08-team-drum.webp", "date": {"en": "October 2026", "ar": "أكتوبر 2026"}, "title": {"en": "Washing Machine Repair Cost in Riyadh: What Determines the Price?", "ar": "تكلفة صيانة الغسالة الأوتوماتيك في الرياض: ما الذي يحدد السعر؟"}, "excerpt": {"en": "What decides the price of a washing machine repair in Riyadh, what a quote should include, and when replacing is better value.", "ar": "ما الذي يحدد سعر تصليح الغسالة في الرياض، وما الذي يجب أن يشمله عرض السعر، ومتى يكون الاستبدال أوفر؟"}},
  {"slug": "front-load-vs-top-load-washing-machine-repair", "icon": "bi-gear", "group": "wm", "image": "repair-11-chassis-repair.webp", "date": {"en": "October 2026", "ar": "أكتوبر 2026"}, "title": {"en": "Front-Load vs Top-Load Washing Machine Repair: Differences in Faults", "ar": "صيانة الغسالة الأمامية والعلوية: الفرق في الأعطال"}, "excerpt": {"en": "How the common faults differ between front-load and top-load washing machines, and which parts wear out most in each.", "ar": "ما الفرق بين أعطال الغسالة الأمامية والعلوية، وأي القطع تتعرض للتلف أكثر في كل نوع؟"}},
  {"slug": "how-to-clean-washing-machine", "icon": "bi-stars", "group": "wm", "image": "repair-02-dryer-filter.webp", "date": {"en": "October 2026", "ar": "أكتوبر 2026"}, "title": {"en": "How to Clean a Washing Machine and Keep It Working Well", "ar": "كيف تنظف الغسالة الأوتوماتيك وتحافظ عليها؟"}, "excerpt": {"en": "Simple steps to clean an automatic washing machine: drum, door seal, drawer and filter, and a schedule that cuts faults and smells.", "ar": "خطوات بسيطة لتنظيف الغسالة الأوتوماتيك: الحوض وحشية الباب والدرج والفلتر، وجدول للصيانة يقلل الأعطال والروائح."}},
  {"slug": "lg-vs-samsung-washing-machine-common-issues", "icon": "bi-arrow-left-right", "group": "wm", "image": "repair-07-control-board.webp", "date": {"en": "October 2026", "ar": "أكتوبر 2026"}, "title": {"en": "LG vs Samsung Washing Machine: Common Issues Compared", "ar": "غسالة إل جي أم سامسونج: مقارنة الأعطال الشائعة"}, "excerpt": {"en": "How the common faults and error codes of LG and Samsung washing machines compare, and what really changes between the two brands.", "ar": "مقارنة بين أعطال ورموز غسالات إل جي وسامسونج الشائعة، وما الذي يختلف فعلاً بين الماركتين."}},
  {"slug": "repair-or-replace-washing-machine", "icon": "bi-arrow-repeat", "group": "wm", "image": "repair-12-team-belt.webp", "date": {"en": "October 2026", "ar": "أكتوبر 2026"}, "title": {"en": "Repair or Replace a Washing Machine: How to Decide", "ar": "إصلاح الغسالة أم شراء غسالة جديدة: كيف تقرر؟"}, "excerpt": {"en": "How to decide between repairing and replacing a washing machine, and which faults are usually worth repairing.", "ar": "كيف تقرر بين إصلاح الغسالة واستبدالها، وأي الأعطال يُنصح غالباً بإصلاحها."}},
  {"slug": "appliance-maintenance-checklist-riyadh", "icon": "bi-card-checklist", "group": "wm", "image": "repair-09-workshop-wide.webp", "date": {"en": "October 2026", "ar": "أكتوبر 2026"}, "title": {"en": "Washer, Dishwasher and Dryer Maintenance Checklist for Riyadh Homes", "ar": "قائمة صيانة الغسالة وغسالة الصحون والنشافة في الرياض"}, "excerpt": {"en": "A simple routine for washers, dishwashers and dryers: filters, seals, scale and lint.", "ar": "قائمة بسيطة بالصيانة الدورية للغسالة وغسالة الصحون والنشافة: الفلاتر والحشيات والترسبات والوبر."}}
];

/* =========================================================
   Brands serviced — shown as cards with logo + name (logos in images/brands/).
   ========================================================= */
const brandsData = [
  { en: "Beko", ar: "بيكو", logo: "beko.png" },
  { en: "Daewoo", ar: "دايو", logo: "daewoo.png" },
  { en: "Panasonic", ar: "باناسونيك", logo: "panasonic.png" },
  { en: "LG", ar: "إل جي", logo: "lg.png" },
  { en: "Maytag", ar: "مايتاج", logo: "maytag.png" },
  { en: "Hitachi", ar: "هيتاشي", logo: "hitachi.png" },
  { en: "Whirlpool", ar: "ويرلبول", logo: "whirlpool.png" },
  { en: "Westinghouse", ar: "وستنجهاوس", logo: "westinghouse.png" },
  { en: "Toshiba", ar: "توشيبا", logo: "toshiba.png" },
  { en: "Samsung", ar: "سامسونج", logo: "samsung.png" },
];

/* =========================================================
   Testimonials — home page.
   ========================================================= */
const testimonialsData = [
  {
    name: { en: "Ahmed S.", ar: "أحمد س." },
    area: { en: "Al Yarmuk, Riyadh", ar: "حي اليرموك، الرياض" },
    text: {
      en: "Excellent service — my washing machine was fixed the same day and the technician clearly explained what was wrong before starting.",
      ar: "خدمة ممتازة — تم إصلاح غسالتي في نفس اليوم، وشرح الفني بوضوح ما هي المشكلة قبل بدء العمل."
    }
  },
  {
    name: { en: "Fatimah A.", ar: "فاطمة أ." },
    area: { en: "Riyadh", ar: "الرياض" },
    text: {
      en: "Professional and honest pricing from the first call. Highly recommend them for any home appliance repair in Riyadh.",
      ar: "أسعار واضحة وصادقة من أول اتصال. أنصح بهم بشدة لأي إصلاح أجهزة منزلية في الرياض."
    }
  },
  {
    name: { en: "Mohammed K.", ar: "محمد ك." },
    area: { en: "Riyadh", ar: "الرياض" },
    text: {
      en: "Quick response on WhatsApp and the dryer works perfectly now. Will definitely call them again for future repairs.",
      ar: "استجابة سريعة عبر واتساب، والنشافة تعمل الآن بشكل ممتاز. بالتأكيد سأتواصل معهم مرة أخرى مستقبلاً."
    }
  }
];

/* =========================================================
   Service areas — Riyadh districts. Al Yarmuk is the home
   base (confirmed); the rest are commonly-known nearby Riyadh
   districts included as a starting list — confirm/edit with
   the business owner before treating this as final.
   ========================================================= */
const areasData = [
  { en: "Al Yarmuk", ar: "اليرموك" },
  { en: "Al Malaz", ar: "الملز" },
  { en: "Al Olaya", ar: "العليا" },
  { en: "Al Naseem", ar: "النسيم" },
  { en: "Al Rawdah", ar: "الروضة" },
  { en: "An Nakheel", ar: "النخيل" },
  { en: "Al Wurud", ar: "الورود" },
  { en: "Hittin", ar: "حطين" },
  { en: "Qurtubah", ar: "قرطبة" },
  { en: "Al Sahafah", ar: "الصحافة" },
];
