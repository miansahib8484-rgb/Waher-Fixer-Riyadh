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
    hero_badge_3: "Upfront pricing",

    trust_1: "Experienced Technicians",
    trust_2: "Fast Response",
    trust_3: "Reliable Repairs",
    trust_4: "Riyadh Service Coverage",

    services_tag: "What We Repair",
    services_title: "Our Appliance Repair Services",
    services_sub: "Three focused specialities, done properly — not a jack-of-all-trades list.",
    svc_view: "View Service",
    svc_book: "Book a Service",

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
    about_intro: "Shahid Repairing Services was started to give Riyadh households a straightforward alternative to guesswork appliance repair — technicians who diagnose properly, explain clearly, and fix the appliance so the same problem doesn't come back.",
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

    brand_name: "صيانة الغسالات الأتوماتيكية",

    hero_tag: "الرياض · صيانة الأجهزة المنزلية",
    hero_title: "إصلاح احترافي للأجهزة المنزلية في الرياض",
    hero_desc: "صيانة سريعة وموثوقة للغسالات الأوتوماتيك وغسالات الصحون والنشافات — فنيون معتمدون يصلون إلى منزلك في جميع أنحاء الرياض.",
    hero_cta_book: "احجز صيانة",
    hero_cta_call: "اتصل الآن",
    hero_cta_whatsapp: "تواصل عبر واتساب",
    hero_badge_1: "زيارة في نفس اليوم",
    hero_badge_2: "تغطية شاملة للرياض",
    hero_badge_3: "أسعار واضحة مسبقًا",

    trust_1: "فنيون ذوو خبرة",
    trust_2: "استجابة سريعة",
    trust_3: "إصلاحات موثوقة",
    trust_4: "تغطية خدمية في الرياض",

    services_tag: "خدماتنا",
    services_title: "خدمات إصلاح الأجهزة المنزلية",
    services_sub: "ثلاث تخصصات محددة، ننجزها بإتقان بدلاً من قائمة عامة من كل شيء.",
    svc_view: "عرض الخدمة",
    svc_book: "احجز الخدمة",

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
    about_intro: "انطلقت شاهد لخدمات الصيانة لتقدّم لأهالي الرياض بديلاً واضحًا عن الإصلاح العشوائي — فنيون يشخّصون بدقة، ويشرحون بوضوح، ويصلحون الجهاز بحيث لا تعود نفس المشكلة.",
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
    icon: "bi-droplet-half",
    filterGroup: "wm",
    image: "repair-03-wiring-test.jpg",
    title: { en: "Automatic Washing Machine Repair", ar: "إصلاح الغسالات الأوتوماتيك" },
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
    icon: "bi-cup-straw",
    filterGroup: "dw",
    image: "repair-04-dishwasher-pliers.jpg",
    title: { en: "Dishwasher Repair", ar: "إصلاح غسالات الصحون" },
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
    icon: "bi-wind",
    filterGroup: "dr",
    image: "repair-02-dryer-filter.jpg",
    title: { en: "Dryer Repair", ar: "إصلاح النشافات" },
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
    image: "repair-01-drum-closeup.jpg",
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
    image: "repair-04-dishwasher-pliers.jpg",
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
    image: "repair-02-dryer-filter.jpg",
    date: { en: "June 2026", ar: "يونيو 2026" },
    title: { en: "Why Is My Dryer Not Heating Up?", ar: "لماذا لا تسخن نشافتي؟" },
    excerpt: {
      en: "A dryer that spins but doesn't heat usually points to one of three common faults. Here's how to tell them apart.",
      ar: "النشافة التي تدور دون تسخين تشير عادة إلى واحد من ثلاثة أعطال شائعة. إليك كيفية التمييز بينها."
    }
  }
];

/* =========================================================
   Brands serviced — shown as text badges (no logo artwork).
   ========================================================= */
const brandsData = [
  { en: "Beko", ar: "بيكو" },
  { en: "Daewoo", ar: "دايو" },
  { en: "Panasonic", ar: "باناسونيك" },
  { en: "LG", ar: "إل جي" },
  { en: "Maytag", ar: "مايتاج" },
  { en: "Hitachi", ar: "هيتاشي" },
  { en: "Whirlpool", ar: "ويرلبول" },
  { en: "Westinghouse", ar: "وستنجهاوس" },
  { en: "Toshiba", ar: "توشيبا" },
  { en: "Samsung", ar: "سامسونج" },
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
      en: "Professional and honest pricing from the first call. Highly recommend Waher Fixer for any home appliance repair in Riyadh.",
      ar: "أسعار واضحة وصادقة من أول اتصال. أنصح بشدة بواشر فيكسر لأي إصلاح أجهزة منزلية في الرياض."
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
