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
    hero_tag: "Riyadh · Automatic Washing Machine Repair",
    hero_title: "Automatic Washing Machine Repair in Riyadh",
    hero_desc: "Your automatic washing machine won't drain, won't spin, or just won't start? We send a technician to your door anywhere in Riyadh. He finds the real fault, tells you the cost, and only then picks up a screwdriver. We fix dishwashers and dryers too.",
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
    services_title: "Our Repair Services: Washing Machines, Dishwashers, Dryers",
    services_sub: "Three machines, and we know them well. We would rather do these properly than promise to fix everything.",
    svc_view: "View Service",
    svc_book: "Book a Service",
    badge_certified: "Certified Repair",

    why_tag: "Why Riyadh Trusts Us",
    why_title: "How We Work",
    why_1_t: "Professional Technicians",
    why_1_d: "We find the real fault first. No swapping parts and hoping for the best.",
    why_2_t: "Quick Response",
    why_2_d: "We book visits quickly, so you are not without your machine for long.",
    why_3_t: "Transparent Service",
    why_3_d: "You hear what is wrong and what it will cost before any repair starts. Nothing begins until you say yes.",
    why_4_t: "Quality Repairs",
    why_4_d: "The right parts and proper technique, so the same problem does not come back a month later.",
    why_5_t: "Customer-Focused Support",
    why_5_d: "Straight answers, from the first call to the finished repair.",
    why_6_t: "Service Across Riyadh",
    why_6_d: "We come to your home across Riyadh and the neighborhoods around it.",

    how_tag: "Simple Process",
    how_title: "How It Works",
    how_1_t: "Contact Us",
    how_1_d: "Call, WhatsApp or fill the booking form.",
    how_2_t: "Tell Us the Problem",
    how_2_d: "Tell us the brand, the model if you know it, and what the machine is doing.",
    how_3_t: "Technician Visits",
    how_3_d: "A technician comes to your address in Riyadh.",
    how_4_t: "Machine Gets Repaired",
    how_4_d: "The repair is done on site, and you hear what was done and why.",

    gallery_tag: "Our Work",
    gallery_title: "Recent Repairs Around Riyadh",
    gallery_sub: "A look at the workshop and real jobs: washing machines, dishwashers and dryers back in working order.",
    gallery_view_all: "View Full Gallery",
    gallery_filter_all: "All",
    gallery_filter_wm: "Washing Machines",
    gallery_filter_dw: "Dishwashers",
    gallery_filter_dr: "Dryers",

    area_title: "Washing Machine Repair Across Riyadh",
    area_desc: "We work across Riyadh from our base in Al Yarmuk, covering the neighborhoods around it and further out. A technician comes to your address and diagnoses the fault right there.",

    faq_tag: "Common Questions",
    faq_title: "Frequently Asked Questions",

    final_cta_title: "Need a Washing Machine Repaired in Riyadh?",
    final_cta_desc: "Call or message us, tell us what is wrong, and we will arrange a visit.",
    final_cta_contact: "Contact Us",

    blog_home_tag: "From the Blog",
    blog_home_title: "Washer, Dishwasher and Dryer Care Tips",
    blog_home_view_all: "View All Articles",
    blog_read_more: "Read More",

    /* ---- Footer ---- */
    footer_desc: "Local home appliance repair for Riyadh, automatic washing machines, dishwashers and dryers, fixed properly by technicians who visit your home.",
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
    services_page_title: "Washing Machine, Dishwasher and Dryer Repair in Riyadh",
    services_page_sub: "Pick the machine you are having trouble with to see the usual faults, what we do about them and how a visit works.",

    /* ---- About page ---- */
    about_tag: "About Us",
    about_title: "Local Washing Machine Repair, Done Right",
    about_intro: "We started this because appliance repair in Riyadh too often felt like guesswork: someone opens the machine, swaps a part and hopes. We wanted to be the washing machine technician who finds the actual fault, explains it in plain words, and fixes it so it stays fixed.",
    about_mission_tag: "Our Mission",
    about_mission_title: "Keep Riyadh Homes Running Smoothly",
    about_mission_desc: "We only work on three things: automatic washing machines, dishwashers and dryers. Doing less means we know these machines properly, instead of being average at everything.",
    about_choose_tag: "Why Customers Choose Us",
    about_choose_title: "What Sets Our Service Apart",
    about_approach_tag: "Our Approach",
    about_approach_title: "A Professional Repair Approach",
    about_approach_desc: "Every visit starts the same way. We look at the machine, work out what has really failed, tell you in plain words and give you the cost before any work begins. Then we use the right parts and technique for the machine in front of us.",
    about_coverage_tag: "Coverage",
    about_coverage_title: "Riyadh Service Coverage",
    about_coverage_desc: "We visit homes across Riyadh and the neighborhoods around it. Most repairs are done at your home, so there is nothing to carry.",
    about_cta_title: "Ready to Get Your Washing Machine Fixed?",
    about_cta_desc: "Get in touch and we will find a time that suits you.",

    /* ---- Contact page ---- */
    contact_tag: "Get In Touch",
    contact_title: "Contact Us",
    contact_sub: "Leave your name, your number and what the machine is doing, and we will get back to you to arrange a visit. If it is leaking right now, call us instead.",
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
    gallery_page_title: "Washing Machine Repair Gallery",
    gallery_page_sub: "A look at recent washing machine, dishwasher and dryer repairs around Riyadh.",

    /* ---- Blog page ---- */
    blog_page_tag: "Blog",
    blog_page_title: "Washing Machine, Dishwasher & Dryer Care Tips",
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
    brands_sub: "We work on the washing machine, dishwasher and dryer brands found in most Saudi homes. Tell us yours when you call.",

    /* ---- Testimonials ---- */
    testimonials_tag: "Customer Reviews",
    testimonials_title: "What Our Customers Say",

    /* ---- Location / Map ---- */
    location_tag: "Find Us",
    location_title: "Our Location in Riyadh",
    location_desc: "Based in Al Yarmuk, Riyadh. Technicians head out across the city to repair machines at your home.",
    location_get_directions: "Get Directions",
    location_leave_review: "Leave Us a Review",

    /* ---- Service Areas ---- */
    areas_tag: "Coverage",
    areas_title: "Service Areas in Riyadh",
    areas_sub: "Based in Al Yarmuk and visiting homes across the city, including the areas below.",

    /* ---- Guarantees / USPs ---- */
    guarantees_tag: "Our Commitment",
    guarantees_title: "Why You Can Rely On Us",
    guarantee_1_t: "Same-Day Repair Service",
    guarantee_1_d: "Most repairs are finished the same day you contact us, so the laundry pile does not keep growing while you wait.",
    guarantee_2_t: "30-Day Warranty",
    guarantee_2_d: "Every repair carries a 30-day warranty on parts and labor, so you are covered after we leave.",
    guarantee_3_t: "Transportation to Workshop",
    guarantee_3_d: "If a repair needs workshop equipment, we collect the machine and bring it back once it is fixed.",
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

    hero_tag: "الرياض · صيانة الغسالات الأوتوماتيك",
    hero_title: "صيانة الغسالات الأوتوماتيك في الرياض",
    hero_desc: "غسالتك الأوتوماتيك لا تصرّف الماء أو لا تدور أو لا تعمل؟ يصلك فني إلى بابك في أي مكان بالرياض، فيحدد العطل الحقيقي ويخبرك بالتكلفة، ثم يبدأ العمل. ونصلح أيضاً غسالات الصحون والنشافات.",
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
    services_title: "خدمات صيانة الغسالات الأوتوماتيك وغسالات الصحون والنشافات",
    services_sub: "ثلاث آلات فقط، ونعرفها جيداً. نفضّل أن نُتقن هذه الثلاث على أن نَعِد بإصلاح كل شيء.",
    svc_view: "عرض الخدمة",
    svc_book: "احجز الخدمة",
    badge_certified: "إصلاح معتمد",

    why_tag: "لماذا يثق بنا سكان الرياض",
    why_title: "كيف نعمل",
    why_1_t: "فنيون محترفون",
    why_1_d: "نبحث عن العطل الحقيقي أولاً، ولا نغيّر القطع ونتمنى الأفضل.",
    why_2_t: "استجابة سريعة",
    why_2_d: "نحجز الزيارة بسرعة حتى لا تبقى بدون جهازك طويلاً.",
    why_3_t: "خدمة شفافة",
    why_3_d: "تعرف ما العطل وكم التكلفة قبل أن يبدأ أي إصلاح، ولا نبدأ شيئاً حتى توافق.",
    why_4_t: "إصلاحات عالية الجودة",
    why_4_d: "قطع مناسبة وطريقة صحيحة، حتى لا يعود العطل نفسه بعد شهر.",
    why_5_t: "دعم يركّز على العميل",
    why_5_d: "إجابات صريحة من أول اتصال حتى انتهاء الإصلاح.",
    why_6_t: "خدمة في جميع أنحاء الرياض",
    why_6_d: "نأتي إلى منزلك في الرياض والأحياء القريبة.",

    how_tag: "خطوات بسيطة",
    how_title: "كيف تتم الخدمة",
    how_1_t: "تواصل معنا",
    how_1_d: "اتصل، راسلنا عبر واتساب، أو املأ نموذج الحجز.",
    how_2_t: "أخبرنا بالمشكلة",
    how_2_d: "صف الجهاز والعطل الذي تلاحظه.",
    how_3_t: "زيارة الفني",
    how_3_d: "يصل الفني إلى موقعك في الرياض.",
    how_4_t: "يتم إصلاح الجهاز",
    how_4_d: "يتم الإصلاح في المنزل، وتعرف ما الذي أُنجز ولماذا.",

    gallery_tag: "أعمالنا",
    gallery_title: "إصلاحات حديثة في الرياض",
    gallery_sub: "لمحة عن الورشة وأعمال حقيقية: غسالات وغسالات صحون ونشافات عادت للعمل.",
    gallery_view_all: "عرض المعرض كاملاً",
    gallery_filter_all: "الكل",
    gallery_filter_wm: "الغسالات",
    gallery_filter_dw: "غسالات الصحون",
    gallery_filter_dr: "النشافات",

    area_title: "صيانة الغسالات الأوتوماتيك في جميع أنحاء الرياض",
    area_desc: "نعمل في أنحاء الرياض انطلاقاً من مقرّنا في اليرموك، ونغطي الأحياء المحيطة به وما بعدها. يصل الفني إلى عنوانك ويشخّص العطل في مكانه.",

    faq_tag: "أسئلة شائعة",
    faq_title: "الأسئلة الأكثر شيوعًا",

    final_cta_title: "بحاجة إلى إصلاح غسالة في الرياض؟",
    final_cta_desc: "اتصل أو راسلنا، وأخبرنا ما المشكلة، وسنرتب لك زيارة.",
    final_cta_contact: "تواصل معنا",

    blog_home_tag: "من المدونة",
    blog_home_title: "نصائح للعناية بالغسالات وغسالات الصحون والنشافات",
    blog_home_view_all: "عرض جميع المقالات",
    blog_read_more: "اقرأ المزيد",

    footer_desc: "صيانة محلية للأجهزة المنزلية في الرياض، غسالات أوتوماتيك وغسالات صحون ونشافات، يتم إصلاحها بشكل صحيح من قبل فنيين يزورون منزلك.",
    footer_quick_links: "روابط سريعة",
    footer_services: "الخدمات",
    footer_contact: "تواصل معنا",
    footer_hours: "ساعات العمل",
    footer_hours_val: "متاح على مدار الساعة (24 ساعة)",
    footer_rights: "جميع الحقوق محفوظة.",

    bc_home: "الرئيسية",

    services_page_tag: "الخدمات",
    services_page_title: "خدمات صيانة الغسالات الأوتوماتيك وغسالات الصحون والنشافات في الرياض",
    services_page_sub: "اختر الجهاز الذي يزعجك لترى الأعطال الشائعة، وما نفعله حيالها، وكيف تسير الزيارة.",

    about_tag: "من نحن",
    about_title: "صيانة أجهزة محلية بإتقان",
    about_intro: "بدأنا هذه الخدمة لأن إصلاح الأجهزة في الرياض كان في كثير من الأحيان أشبه بالتخمين: يفتح أحدهم الجهاز، ويبدّل قطعة، ويأمل الأفضل. أردنا أن نكون فني صيانة غسالات الرياض الذي يجد العطل الفعلي، ويشرحه بكلمات بسيطة، ويصلحه بحيث لا يعود.",
    about_mission_tag: "رسالتنا",
    about_mission_title: "الحفاظ على استمرارية عمل منازل الرياض",
    about_mission_desc: "لا نعمل إلا على ثلاثة أشياء: الغسالات الأوتوماتيك وغسالات الصحون والنشافات. قلّة التخصصات تعني أننا نعرف هذه الآلات جيداً بدل أن نكون عاديين في كل شيء.",
    about_choose_tag: "لماذا يختارنا العملاء",
    about_choose_title: "ما يميز خدمتنا",
    about_approach_tag: "أسلوبنا",
    about_approach_title: "أسلوب إصلاح احترافي",
    about_approach_desc: "تبدأ كل زيارة بالطريقة نفسها. ننظر إلى الجهاز، ونحدد ما تعطّل فعلاً، ونخبرك بكلمات بسيطة، ونعطيك التكلفة قبل بدء أي عمل. بعدها نستخدم القطع والطريقة المناسبة للجهاز الذي أمامنا.",
    about_coverage_tag: "التغطية",
    about_coverage_title: "التغطية الخدمية في الرياض",
    about_coverage_desc: "نزور المنازل في الرياض والأحياء المحيطة بها. وفي أغلب الحالات يتم الإصلاح في منزلك، فلا شيء تحمله.",
    about_cta_title: "هل أنت مستعد لإصلاح جهازك؟",
    about_cta_desc: "تواصل معنا وسنجد الوقت الذي يناسبك.",

    contact_tag: "تواصل معنا",
    contact_title: "اتصل بنا",
    contact_sub: "اكتب اسمك ورقمك وما الذي يفعله الجهاز، وسنتواصل معك لترتيب زيارة. وإن كانت الغسالة تسرّب الآن فاتصل بنا مباشرة.",
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
    gallery_page_title: "معرض إصلاح الغسالات",
    gallery_page_sub: "نظرة على إصلاحات حديثة للغسالات وغسالات الصحون والنشافات في أنحاء الرياض.",

    blog_page_tag: "المدونة",
    blog_page_title: "نصائح العناية بالغسالات وإصلاحها",
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
    brands_sub: "نصلح الغسالات وغسالات الصحون والنشافات من الماركات الموجودة في أغلب البيوت السعودية. أخبرنا بماركتك عند الاتصال.",

    /* ---- Testimonials ---- */
    testimonials_tag: "آراء العملاء",
    testimonials_title: "ماذا يقول عملاؤنا",

    /* ---- Location / Map ---- */
    location_tag: "موقعنا",
    location_title: "موقعنا في الرياض",
    location_desc: "مقرّنا في حي اليرموك بالرياض، وينطلق الفنيون إلى مختلف أنحاء المدينة لإصلاح الأجهزة في منازلكم.",
    location_get_directions: "الحصول على الاتجاهات",
    location_leave_review: "اترك لنا تقييمًا",

    /* ---- Service Areas ---- */
    areas_tag: "التغطية",
    areas_title: "مناطق الخدمة في الرياض",
    areas_sub: "مقرّنا في اليرموك، ونزور المنازل في أنحاء المدينة، ومنها الأحياء أدناه.",

    /* ---- Guarantees / USPs ---- */
    guarantees_tag: "التزامنا",
    guarantees_title: "لماذا يمكنك الاعتماد علينا",
    guarantee_1_t: "خدمة إصلاح في نفس اليوم",
    guarantee_1_d: "تنتهي معظم الإصلاحات في اليوم نفسه الذي تتواصل فيه معنا، فلا تتراكم الملابس وأنت تنتظر.",
    guarantee_2_t: "ضمان 30 يومًا",
    guarantee_2_d: "كل إصلاح بضمان 30 يوماً على القطع والعمالة، فأنت مطمئن بعد مغادرتنا.",
    guarantee_3_t: "نقل الجهاز إلى الورشة",
    guarantee_3_d: "إذا احتاج الإصلاح إلى معدات الورشة، نستلم الجهاز ونعيده إليك بعد إصلاحه.",
  }
};

/* =========================================================
   Service data, drives services.html cards and the three
   service-detail pages via data-service on <body>.
   ========================================================= */
const servicesData = {
  "washing-machine": {
    slug: "automatic-washing-machine-repair",
    guide: {"ar": [{"h": "تصليح غسالات اتوماتيك في المنزل مع فني غسالات متخصص", "p": "تبحث عن فني غسالات اتوماتيك أو مهندس غسالات اتوماتيك أو مصلح غسالات في الرياض؟ نقدّم خدمة تصليح الغسالات الاتوماتيك وصيانة غسالات بالرياض في منزلك، ويصل فني صيانة غسالات اتوماتيك بعد اتصالك ليفحص الغسالة في مكانها دون حاجة إلى نقلها. سواء احتجت إلى صيانة غسالات اتوماتيك في الرياض أو إلى تصليح غسالات الرياض لعطل محدد، تتم معظم الإصلاحات في اليوم نفسه، ونشرح لك العطل والتكلفة قبل بدء العمل، والإصلاح بضمان 30 يوماً على القطع والعمالة."}, {"h": "أشهر أعطال الغسالة الأوتوماتيك وأسبابها", "p": "أكثر ما نسمعه في الرياض أن الغسالة لا تصرّف الماء، أو لا تدور، أو تتوقف في منتصف البرنامج. وكثيراً ما يكون السبب بسيطاً: فلتر مضخة مسدود بالوبر والعملات المعدنية، أو حزام دوران بالٍ، أو مفتاح باب لا يبلغ الغسالة بأن الباب مغلق. وأحياناً يكون العطل في مضخة التصريف أو الفحمات أو البوردة الإلكترونية. ولهذا لا نغيّر أي قطعة قبل أن يكشف الفحص أيّها تعطّلت. كما أن ترسبات الماء العسر، الشائعة في المدينة، تُتلف المضخات وقطع التسخين أسرع، فهي من أول ما نفحصه."}, {"h": "رموز الأعطال على شاشة الغسالة", "p": "تعرض معظم الغسالات الحديثة رمزاً على الشاشة عند حدوث خلل، وتختلف الرموز من ماركة لأخرى. فمثلاً قد يشير E21 أو 5E أو OE إلى مشكلة تصريف، وترتبط رموز أخرى بالباب أو مستوى الماء أو المحرك. اعتبر الرمز دليلاً لا حكماً نهائياً. دليل الجهاز يوضح ما تعنيه الشركة به، والفني يتأكد بالفحص قبل أن يصلح أي شيء."}, {"h": "متى يُفضَّل إصلاح الغسالة ومتى تُستبدل؟", "p": "الإصلاح أوفر في أغلب الحالات إذا كان العطل في قطعة واحدة مثل المضخة أو الحزام أو الفلتر أو مفتاح الباب. أما إذا كان الحوض الداخلي أو الهيكل تالفاً بشدة فغالباً لا يستحق الإصلاح. نشرح لك العطل والتكلفة قبل أن نبدأ، فالقرار يبقى لك."}, {"h": "نصائح تقلل أعطال الغسالة", "p": "عادات قليلة تصنع فرقاً حقيقياً. نظّف فلتر المضخة بانتظام، ولا تحمّل الغسالة فوق سعتها، وافحص الجيوب من العملات والمشابك، واترك الباب مفتوحاً بعد الغسيل لتجف الحشية المطاطية، واستخدم كمية مناسبة من المنظف لتتجنب الرغوة الزائدة. ليست مثيرة، لكنها تجعل الإصلاحات نادرة."}, {"h": "كيف تعمل الغسالة الأوتوماتيك وأي الأجزاء تتعطل؟", "p": "إليك كيف تعمل الغسالة، لأن ذلك يفسّر لماذا تتكرر الأعطال. يدخل الماء عبر صمام الدخول، ويقرر حساس مستوى الماء (أو مفتاح الضغط) متى يكفي. ويدير المحرك الحوض مباشرة أو عبر حزام. بعد الغسيل تُفرغ مضخة التصريف الماء عبر الخرطوم، ويُبقي قفل الباب الباب مغلقاً أثناء الدورة، وتدير البوردة الإلكترونية كل مرحلة. فمعظم الأعطال تعود إلى قائمة قصيرة: فلتر أو خرطوم مسدود، أو مضخة تصريف بالية، أو حزام مرتخٍ، أو فحمات متآكلة في المحركات التي تحتوي عليها، أو قفل باب أو حساس معطل، أو ماصات صدمات ومحامل ضعيفة تسبب الاهتزاز والضجيج."}, {"h": "ماذا تجهّز قبل وصول الفني؟", "p": "قليل من التحضير يسرّع التشخيص. دوّن ماركة الغسالة وموديلها (على الملصق قرب الباب أو في الخلف)، وصوّر الرمز الظاهر على الشاشة، واترك مساحة حول الغسالة، وأخبرنا متى بدأ العطل وهل حدث من قبل. ويفيد أن تذكر إن كانت أمامية أو علوية، وهل لاحظت تسريباً أو صوتاً غريباً قبل أن تتوقف."}], "en": [{"h": "Automatic washing machine repair at home by a washing machine technician", "p": "Looking for a washing machine technician near you in Riyadh? Call him an engineer, a mechanic or a repairman, it is the same person: someone who comes to your home, looks at the machine where it stands and repairs it. You do not need to move anything. Most repairs are done the same day you contact us, you hear the fault and the cost before any work begins, and every repair carries a 30-day warranty on parts and labor."}, {"h": "Common automatic washing machine faults and their causes", "p": "The calls we get most in Riyadh are about machines that won't drain, won't spin or stop halfway through a cycle. Often the cause is small: a pump filter clogged with lint and coins, a worn drive belt, or a door lock switch that is not telling the machine the door is shut. Sometimes it is the drain pump, the carbon brushes or the control board. That is exactly why we don't replace a part until inspection shows which one has failed. Hard water scale, common in the city, wears pumps and heating parts faster, so it is one of the first things we look at."}, {"h": "Error codes on the washing machine display", "p": "Most modern machines show a code when something is wrong, and the codes differ from brand to brand. E21, 5E or OE, for example, can point to drainage trouble, while other codes relate to the door, the water level or the motor. Use the code as a clue, not a verdict. The appliance manual tells you what the manufacturer means by it, and the technician confirms it by inspecting the machine before repairing anything."}, {"h": "When to repair a washing machine and when to replace it", "p": "Repair is usually the better choice when the fault is a single part: the pump, belt, filter or door switch. If the inner drum or the frame is badly damaged, it often isn't worth repairing. We tell you the fault and the cost before starting, so the decision stays with you."}, {"h": "Tips that reduce washing machine breakdowns", "p": "A few habits make a real difference. Clean the pump filter regularly, don't overload the drum, check pockets for coins and clips, leave the door open after a wash so the rubber seal dries, and use the right amount of detergent so it doesn't foam excessively. None of this is exciting, but it keeps repairs rare."}, {"h": "How an automatic washing machine works and which parts fail", "p": "Here is how the machine works, because it explains why faults repeat. Water comes in through the inlet valve, and a water level sensor (or pressure switch) decides when there is enough. The motor turns the drum, either directly or through a drive belt. After washing, the drain pump empties the water through the hose, the door lock keeps the door shut during the cycle, and the control board runs every stage. So most faults trace back to a short list: a blocked filter or hose, a worn drain pump, a loose belt, worn carbon brushes on motors that have them, a faulty door lock or sensor, or weak shock absorbers and bearings that cause vibration and noise."}, {"h": "What to prepare before the technician arrives", "p": "A little preparation speeds up the diagnosis. Note the brand and model (on the label near the door or at the back), photograph any code on the display, leave some space around the machine, and tell us when the fault started and whether it has happened before. It also helps to say whether it is front-load or top-load, and whether you noticed a leak or a strange noise just before it stopped."}]},
    faq: {"ar": [{"q": "الغسالة لا تصرّف الماء، ما السبب؟", "a": "غالباً فلتر المضخة أو خرطوم التصريف مسدود، وقد تتعطل المضخة نفسها. يمكنك فحص الفلتر بعد فصل الغسالة عن الكهرباء. وإن لم يُحل ذلك المشكلة فاتصل بنا وسيجد الفني العطل في المنزل."}, {"q": "الغسالة تتسرب منها المياه، ماذا أفعل؟", "a": "يأتي التسريب عادة من الخراطيم أو حشية الباب أو المضخة أو درج المنظف. أغلق الماء، وافصل الكهرباء، ثم اتصل بنا. فالتسريب المستمر قد يضر بالأرضية والجهاز."}, {"q": "هل تصلحون الغسالة في المنزل أم أحتاج إلى نقلها؟", "a": "نأتي إليك، وفي أغلب الحالات يتم الإصلاح في مكان الغسالة. لا شيء تحمله."}, {"q": "هل أعرف التكلفة قبل بدء الإصلاح؟", "a": "نعم. يخبرك الفني بالعطل والتكلفة، ولا يبدأ شيء حتى توافق."}, {"q": "هل يوجد ضمان على الإصلاح؟", "a": "نعم: 30 يوماً على القطع والعمالة، فأنت مغطى إذا عاد العطل نفسه خلال هذه المدة."}, {"q": "هل تصلحون جميع ماركات الغسالات؟", "a": "نعمل على الماركات الأكثر انتشاراً في البيوت السعودية. أرسل لنا الماركة والموديل والعطل ونؤكد لك."}, {"q": "هل الخدمة متاحة في أي وقت؟", "a": "ساعات العمل لدينا على مدار 24 ساعة، وتتم معظم الإصلاحات في نفس يوم التواصل."}, {"q": "هل يوجد فني غسالات قريب مني في الرياض؟", "a": "نزور المنازل في أنحاء الرياض، ومنها شرق الرياض وشمالها. اتصل بنا وأخبرنا باسم الحي والعطل لنؤكد لك موعد الزيارة."}, {"q": "هل تصلحون غسالات سامسونج وإل جي ودايو؟", "a": "نعم، نصلح هذه الماركات وغيرها من الماركات الشائعة. اطلع على الماركات التي نصلحها وأخبرنا بالموديل والعطل عند الاتصال."}, {"q": "ما رقم صيانة الغسالات في الرياض؟", "a": "اتصل بالرقم الظاهر في أعلى الصفحة أو راسلنا عبر واتساب بالماركة والموديل والعطل."}], "en": [{"q": "Why won't my washing machine drain?", "a": "Most often the pump filter or drain hose is blocked, though the drain pump itself can fail. After unplugging the machine you can check the filter yourself. If that doesn't fix it, call us and the technician will find the fault at your home."}, {"q": "My washing machine is leaking. What should I do?", "a": "Leaks usually come from the hoses, door seal, pump or detergent drawer. Turn off the tap, unplug the machine and call us. A leak left running can damage your floor and the appliance."}, {"q": "Do you repair the washing machine at home or do I need to move it?", "a": "We come to you, and in most cases the repair happens right where the machine stands. There is nothing to carry."}, {"q": "Will I know the cost before the repair starts?", "a": "Yes. The technician tells you what is wrong and what it will cost, and nothing starts until you say go."}, {"q": "Is the repair under warranty?", "a": "Yes: 30 days on parts and labor, so you are covered if the same fault returns in that time."}, {"q": "Do you repair all washing machine brands?", "a": "We work on the brands most common in Saudi homes. Send us the brand, model and fault and we will confirm."}, {"q": "Is the service available at any time?", "a": "Our working hours run 24 hours a day, and most repairs are completed on the same day you contact us."}, {"q": "Is there a washing machine repair service near me in Riyadh?", "a": "We visit homes across Riyadh, including East and North Riyadh. Call us with your neighborhood and the fault and we will confirm the visit time."}, {"q": "Do you repair Samsung, LG and Daewoo washing machines?", "a": "Yes, we repair these and other common brands. See the brands we repair, and give us the model and the fault when you call."}, {"q": "What is the washing machine repair number in Riyadh?", "a": "Call the number at the top of this page or message us on WhatsApp with the brand, model and fault."}]},
    icon: "bi-droplet-half",
    filterGroup: "wm",
    image: "hero-technician-front-load.webp",
    title: { en: "Automatic Washing Machine Repair", ar: "إصلاح الغسالات الأوتوماتيك" },
    h1: { en: "Automatic Washing Machine Repair in Riyadh", ar: "صيانة غسالات اتوماتيك في الرياض" },
    shortDesc: {
      en: "Won't drain, won't spin, leaking, noisy or showing an error code. Most automatic washer faults come down to a handful of parts, and we find which one before replacing anything.",
      ar: "إصلاح احترافي للغسالات الأوتوماتيك وأعطالها الشائعة."
    },
    intro: {
      en: "If your automatic washing machine won't start, won't drain or is leaking, a technician comes to your home in Riyadh, finds out what has actually gone wrong and repairs it. No guesswork, and no swapping parts to see what happens.",
      ar: "إذا كانت غسالتك الأوتوماتيك لا تعمل، أو لا تُصرّف الماء، أو تسرّب، يصل إليك فني في الرياض ويشخّص العطل في مكانه ويصلحه بشكل صحيح، دون تخمين ودون استبدال قطع لا حاجة إليها."
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
    guide: {"ar": [{"h": "فني غسالة صحون في الرياض", "p": "تحتاج إلى فني غسالة صحون الرياض؟ نرسل فني غسالة صحون إلى منزلك لفحص العطل، سواء كنت تبحث عن صيانة غسالة صحون الرياض أو عن فني تصليح غسالة صحون لمشكلة محددة كالتصريف أو التسريب. نشرح لك العطل والتكلفة قبل بدء العمل، والإصلاح بضمان 30 يوماً على القطع والعمالة."}, {"h": "أشهر أعطال غسالة الصحون", "p": "أكثر ما نسمعه: ضعف التنظيف وبقايا طعام على الأواني، أو ماء لا يُصرَّف، أو تسريب، أو غسالة لا تسخّن أو لا تبدأ الدورة. وغالباً يعود ذلك إلى فلتر القاع أو أذرع الرش المسدودة، أو مضخة تصريف تالفة، أو خلل في عنصر التسخين أو حشية الباب. نفحص الجهاز أولاً ثم نسمّي القطعة المعطلة."}, {"h": "لماذا تبقى الأواني متسخة أو بيضاء اللون؟", "p": "الطبقة البيضاء على الأواني والكؤوس سببها غالباً الماء العسر، وتحتاج إلى ملح غسالة الصحون ولمّع مناسب. وبقايا الطعام تدل على أذرع رش أو فلتر مسدود، أو على ترتيب للأواني يمنع وصول الماء. نظّف الفلتر وأذرع الرش أولاً، فإن بقيت المشكلة فالجهاز يحتاج إلى فحص."}, {"h": "الروائح الكريهة ورموز الأعطال", "p": "الرائحة الكريهة تعني غالباً بقايا عالقة في الفلتر أو خرطوم التصريف. وكثيراً ما يفيد تشغيل دورة تنظيف ساخنة بمنظف مخصص لغسالات الصحون. أما الرموز على الشاشة فتختلف باختلاف الماركة، فراجع دليل الجهاز لمعرفة معناها، ثم يتأكد الفني منها بالفحص."}, {"h": "الصيانة الدورية لغسالة الصحون", "p": "أزل بقايا الطعام الكبيرة قبل التحميل، ونظّف الفلتر بانتظام، وافحص أذرع الرش من الانسداد، ولا تملأ السلال فوق طاقتها، واستخدم الملح واللمّع حسب توصية الشركة المصنّعة. ولا تستخدم صابون الأطباق اليدوي في الغسالة أبداً، فرغوته الزائدة قد تسبب تسريباً."}, {"h": "كيف تعمل غسالة الصحون وأي الأجزاء تتعطل؟", "p": "يدخل الماء عبر صمام الدخول ويسخّنه عنصر التسخين. ثم تدفعه مضخة الدورة عبر أذرع الرش إلى الأواني، ويحجز الفلتر بقايا الطعام، وتُفرغ مضخة التصريف الماء المتسخ. ويضيف موزع المنظف واللمّع المواد في الوقت المناسب، وتمنع حشية الباب التسريب، وتدير البوردة الدورة. لذلك تأتي الأعطال عادةً من انسداد الفلتر أو أذرع الرش، أو مضخة تصريف أو عنصر تسخين بالٍ، أو حشية باب تالفة، أو موزع منظف معطل."}, {"h": "ماذا تجهّز قبل وصول الفني؟", "p": "دوّن ماركة غسالة الصحون وموديلها (على ملصق داخل إطار الباب أو على جانبه)، وصوّر الرمز الظاهر على الشاشة، وأفرغ السلال إن أمكن، وأخبرنا هل المشكلة في التصريف أو التنظيف أو التسخين أو التسريب. وإن كنت تستخدم الملح واللمّع فاذكر ذلك أيضاً."}], "en": [{"h": "Dishwasher technician and service at your home", "p": "Need a dishwasher technician in Riyadh? We do dishwasher repair and dishwasher service at your home, from a quick fix when it won't drain to regular dishwasher maintenance. You hear the fault and the cost before any work begins, and there is a 30-day warranty on parts and labor."}, {"h": "Common dishwasher faults", "p": "The complaints we hear most are poor cleaning with food left on dishes, water that won't drain, leaks, and a dishwasher that doesn't heat or won't start a cycle. Usually it comes down to a blocked bottom filter or spray arms, a failed drain pump, or a fault in the heating element or door seal. We inspect the machine first, then name the part."}, {"h": "Why dishes stay dirty or look cloudy", "p": "White film on dishes and glasses is usually hard water, and it calls for dishwasher salt and a suitable rinse aid. Food left on dishes points to blocked spray arms or a clogged filter, or to a load that blocks the water. Clean the filter and spray arms first. If the problem stays, the machine needs an inspection."}, {"h": "Bad smells and error codes", "p": "A bad smell usually means residue stuck in the filter or drain hose. A hot cleaning cycle with a dishwasher cleaner often helps. Error codes differ by brand, so check the appliance manual for what yours means; the technician then confirms it by inspection."}, {"h": "Regular dishwasher maintenance", "p": "Scrape large scraps off before loading, clean the filter regularly, check the spray arms for blockages, don't overload the racks, and use salt and rinse aid as the manufacturer recommends. And never use hand dishwashing liquid in the machine. It foams badly and can cause leaks."}, {"h": "How a dishwasher works and which parts fail", "p": "Water enters through the inlet valve and the heating element warms it. The circulation pump pushes it through the spray arms onto the dishes, the filter catches food residue, and the drain pump removes the dirty water. The detergent dispenser and rinse aid release at the right moment, the door seal stops leaks, and the control board runs the cycle. That is why faults usually come from a blocked filter or spray arms, a worn drain pump or heating element, a damaged door seal or a faulty detergent dispenser."}, {"h": "What to prepare before the technician arrives", "p": "Note the brand and model (on a label inside the door frame or on the side), photograph any code on the display, empty the racks if you can, and tell us whether the problem is draining, cleaning, heating or leaking. If you use salt and rinse aid, mention that too."}]},
    faq: {"ar": [{"q": "غسالة الصحون لا تصرّف الماء، ما الحل؟", "a": "ابدأ بفلتر القاع وخرطوم التصريف بعد فصل الجهاز عن الكهرباء. وإن بقي الماء في الحوض فقد تكون مضخة التصريف تالفة ويحتاج الجهاز إلى فحص الفني."}, {"q": "لماذا لا تنظف غسالة الصحون الأواني جيداً؟", "a": "غالباً أذرع رش أو فلتر مسدود، أو سلال مكدّسة، أو منظف غير مناسب، أو نقص في الملح واللمّع. إن نظّفت هذه الأجزاء وبقيت المشكلة فاتصل بنا للفحص."}, {"q": "غسالة الصحون يتسرب منها الماء، ما السبب؟", "a": "قد يكون السبب حشية الباب أو الخراطيم أو رغوة زائدة من صابون الأطباق اليدوي. أوقف الجهاز، وافصل الكهرباء، واتصل بنا إن استمر التسريب."}, {"q": "هل تصلحون غسالة الصحون في المنزل؟", "a": "نأتي إليك، وفي أغلب الحالات يتم الإصلاح في مكان الجهاز. لا شيء تحمله."}, {"q": "هل يوجد ضمان على إصلاح غسالة الصحون؟", "a": "نعم: 30 يوماً على القطع والعمالة، فأنت مغطى إذا عاد العطل نفسه خلال هذه المدة."}, {"q": "هل أعرف التكلفة قبل بدء الإصلاح؟", "a": "نعم. يخبرك الفني بالعطل والتكلفة، ولا يبدأ شيء حتى توافق."}], "en": [{"q": "My dishwasher won't drain. What can I do?", "a": "Start with the bottom filter and the drain hose, after unplugging the machine. If water stays in the tub, the drain pump may have failed and the technician needs to inspect it."}, {"q": "Why isn't my dishwasher cleaning dishes properly?", "a": "Usually blocked spray arms or a clogged filter, an overloaded rack, an unsuitable detergent, or no salt and rinse aid. If you clean those and the problem stays, call us for an inspection."}, {"q": "Why is my dishwasher leaking?", "a": "It may be the door seal, the hoses, or too much foam from hand dishwashing liquid. Stop the machine, unplug it, and call us if the leak continues."}, {"q": "Do you repair dishwashers at home?", "a": "We come to you, and in most cases the repair happens right where the machine stands. There is nothing to carry."}, {"q": "Is the dishwasher repair under warranty?", "a": "Yes: 30 days on parts and labor, so you are covered if the same fault returns in that time."}, {"q": "Will I know the cost before the repair starts?", "a": "Yes. The technician tells you what is wrong and what it will cost, and nothing starts until you say go."}]},
    icon: "bi-cup-straw",
    filterGroup: "dw",
    image: "dishwasher-repair-technician-riyadh.webp",
    title: { en: "Dishwasher Repair", ar: "إصلاح غسالات الصحون" },
    h1: { en: "Dishwasher Repair in Riyadh", ar: "صيانة غسالة صحون في الرياض" },
    shortDesc: {
      en: "Dishes coming out dirty, water sitting at the bottom, leaks or a dead control panel. We start with the filter, pump and spray arms, because that is where most problems begin.",
      ar: "غسالة الصحون لا تنظّف جيداً، أو يبقى الماء في قاعها، أو تسرّب، أو لا تعمل لوحة التحكم. نبدأ بالفلتر والمضخة وأذرع الرش لأن أغلب المشاكل تبدأ من هناك."
    },
    intro: {
      en: "From dishes that come out dirty to a dishwasher that won't drain, our technicians deal with the whole range of dishwasher faults, at your home in Riyadh.",
      ar: "من الأطباق التي تخرج غير نظيفة إلى غسالة صحون لا تصرّف الماء، يتعامل فنيونا مع مختلف أعطال غسالات الصحون في منزلك بالرياض."
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
    guide: {"ar": [{"h": "صيانة نشافة الملابس (مجفف الملابس)", "p": "تعمل نشافة ملابس، أو مجفف ملابس كما يسميه البعض، بالهواء الساخن. نقدّم تصليح نشافة الرياض في المنزل، ونصلح مجفف ملابس حراري ونشافة حرارية، ونفحص عنصر التسخين ومجرى الهواء والحساسات قبل أي إصلاح، ونشرح لك العطل والتكلفة قبل بدء العمل."}, {"h": "أشهر أعطال نشافة الملابس", "p": "أكثر الأعطال التي نراها: نشافة لا تسخّن، أو ملابس تبقى رطبة بعد الدورة، أو حوض لا يدور، أو جهاز مزعج أو شديد الحرارة. وغالباً يكون السبب فلتر وبر أو مجرى هواء مسدوداً، أو عنصر تسخين أو ثرموستات تالفاً، أو حزام حوض مقطوعاً. نفحص أولاً ونحدد العطل قبل أي إصلاح."}, {"h": "خطر تراكم الوبر في النشافة", "p": "الوبر لا يبطّئ التجفيف فحسب. فإذا تراكم في الفلتر ومجرى العادم رفع حرارة الجهاز وقد يشكّل خطر حريق. نظّف فلتر الوبر بعد كل دورة، وتأكد من أن مجرى العادم غير مسدود أو مثني."}, {"h": "النشافة تعمل لكن الملابس تبقى رطبة", "p": "يشير ذلك غالباً إلى اختناق مجرى الهواء أو انسداد الفلتر أو حمل زائد، وقد يكون عنصر التسخين أو الحساس ضعيفاً. ابدأ بتنظيف الفلتر وتخفيف الحمل، فإن لم يتحسن الأداء فاطلب فحص الجهاز."}, {"h": "نصائح لإطالة عمر النشافة", "p": "نظّف فلتر الوبر بعد كل استخدام، ولا تحمّل النشافة فوق سعتها، وإن كانت مكثّفة فأفرغ خزان الماء بعد كل دورة. ولا تجفف ملابس مبللة بالزيوت أو المواد القابلة للاشتعال، وأبقِ مجرى الهواء حراً دائماً."}, {"h": "صيانة الغسالة المدمجة مع النشافة (غسالة ونشافة في جهاز واحد)", "p": "تجمع بعض الأجهزة الغسيل والتجفيف في حوض واحد، فقد تعاني أعطال الغسيل مثل التصريف والدوران والتسريب، وأعطال التجفيف مثل عدم التسخين وانسداد مجرى الهواء. نفحص الجهاز لنعرف أي الجانبين تعطّل قبل الإصلاح."}, {"h": "كيف تعمل النشافة وأي الأجزاء تتعطل؟", "p": "تسحب النشافة الهواء وتسخّنه بعنصر تسخين يتحكم فيه ثرموستات ويحميه مصهر حراري. ويدير المحرك الحوض عبر حزام وبكرات. ثم يمر الهواء الرطب عبر فلتر الوبر إلى مجرى العادم (أو إلى المكثف في النشافات المكثفة)، بينما يراقب حساس الرطوبة جفاف الملابس. لذلك تأتي الأعطال من فلتر أو مجرى مسدود، أو عنصر تسخين أو ثرموستات تالف، أو حزام مقطوع أو بكرات متآكلة، أو حساس معطل."}, {"h": "ماذا تجهّز قبل وصول الفني؟", "p": "دوّن ماركة النشافة وموديلها، ونظّف فلتر الوبر قبل الزيارة إن أمكن، وأخبرنا هل المشكلة في عدم التسخين أو بطء التجفيف أو عدم دوران الحوض أو الضجيج. وإن كانت مكثّفة فأفرغ خزان الماء، وأخبرنا إن لاحظت رائحة احتراق أو حرارة غير معتادة."}], "en": [{"h": "Dryer repair and dryer service at your home", "p": "We offer dryer repair and dryer service in Riyadh. The dryer technician checks the heating element, thermostat, lint filter and air path at your home, then tells you the fault and the cost before any work begins. Every repair has a 30-day warranty on parts and labor."}, {"h": "Common dryer faults", "p": "The faults we see most are a dryer that doesn't heat, clothes that stay damp after the cycle, a drum that won't turn, or a machine that is noisy or runs too hot. Usually it is a blocked lint filter or air duct, a failed heating element or thermostat, or a broken drum belt. We inspect first and find the fault before repairing anything."}, {"h": "The danger of lint build-up", "p": "Lint doesn't only slow drying. Built up in the filter and exhaust duct, it raises the temperature inside the machine and can become a fire risk. Clean the lint filter after every cycle and make sure the exhaust duct isn't blocked or kinked."}, {"h": "The dryer runs but clothes stay damp", "p": "That usually points to restricted airflow, a blocked filter or an overloaded drum, though a weak heating element or sensor is possible too. Clean the filter and reduce the load first. If it doesn't improve, have the machine inspected."}, {"h": "Tips to extend the life of your dryer", "p": "Clean the lint filter after every use and don't overload the dryer. If yours is a condenser type, empty the water tank after every cycle. Never dry clothes soaked in oil or flammable substances, and keep the air path clear."}, {"h": "Washer-dryer combo repair", "p": "Some machines combine washing and drying in one drum, so they can suffer washing faults such as drainage, spinning and leaks, and dryer faults such as no heat and blocked airflow. We inspect the machine to find which side has failed before repairing it."}, {"h": "How a dryer works and which parts fail", "p": "A dryer draws in air and warms it with a heating element, controlled by a thermostat and protected by a thermal fuse. The motor turns the drum through a belt and rollers. The damp air then passes through the lint filter to the exhaust duct (or to the condenser, in condenser dryers), while a moisture sensor tracks how dry the clothes are. So faults come from a blocked filter or duct, a failed heating element or thermostat, a broken belt or worn rollers, or a faulty sensor."}, {"h": "What to prepare before the technician arrives", "p": "Note the brand and model, clean the lint filter before the visit if you can, and tell us whether the problem is no heat, slow drying, a drum that won't turn, or noise. If it is a condenser dryer, empty the water tank, and tell us if you noticed a burning smell or unusual heat."}]},
    faq: {"ar": [{"q": "النشافة لا تسخّن، ما السبب؟", "a": "غالباً فلتر أو مجرى هواء مسدود، أو عنصر تسخين أو ثرموستات تالف. نظّف الفلتر أولاً، فإن استمر عدم التسخين فاتصل بنا ليفحصها الفني."}, {"q": "لماذا لا تجفف النشافة الملابس جيداً؟", "a": "غالباً فلتر وبر أو مجرى هواء مسدود، أو حوض مكدّس، أو تسخين ضعيف. خفف الحمل ونظّف الفلتر، وإن بقيت المشكلة فتحتاج إلى فحص."}, {"q": "النشافة لا يدور حوضها أو يصدر منها صوت عالٍ، ماذا أفعل؟", "a": "قد يكون الحزام مقطوعاً أو البكرات تالفة، أو قد يكون هناك شيء عالق داخل الحوض. أوقف الجهاز، وافصل الكهرباء، واتصل بنا للفحص."}, {"q": "هل تصلحون النشافة في المنزل؟", "a": "نأتي إليك، وفي أغلب الحالات يتم الإصلاح في مكان الجهاز. لا شيء تحمله."}, {"q": "هل يوجد ضمان على إصلاح النشافة؟", "a": "نعم: 30 يوماً على القطع والعمالة، فأنت مغطى إذا عاد العطل نفسه خلال هذه المدة."}, {"q": "هل أعرف التكلفة قبل بدء الإصلاح؟", "a": "نعم. يخبرك الفني بالعطل والتكلفة، ولا يبدأ شيء حتى توافق."}, {"q": "هل تصلحون الغسالة المدمجة مع النشافة؟", "a": "نعم. نفحص الجهاز في منزلك بالرياض، ونحدد هل العطل في الغسيل أم التجفيف، ونشرح التكلفة قبل أن نبدأ."}], "en": [{"q": "Why isn't my dryer heating?", "a": "Most often the filter or air duct is blocked, or the heating element or thermostat has failed. Clean the filter first. If there is still no heat, call us and the technician will inspect it."}, {"q": "Why doesn't my dryer dry clothes properly?", "a": "Usually a blocked lint filter or air duct, an overloaded drum or weak heating. Reduce the load and clean the filter; if the problem remains, it needs an inspection."}, {"q": "My dryer drum won't turn or the dryer is very noisy. What should I do?", "a": "The belt may be broken, the rollers worn, or something may be stuck inside the drum. Stop the machine, unplug it and call us for an inspection."}, {"q": "Do you repair dryers at home?", "a": "We come to you, and in most cases the repair happens right where the machine stands. There is nothing to carry."}, {"q": "Is the dryer repair under warranty?", "a": "Yes: 30 days on parts and labor, so you are covered if the same fault returns in that time."}, {"q": "Will I know the cost before the repair starts?", "a": "Yes. The technician tells you what is wrong and what it will cost, and nothing starts until you say go."}, {"q": "Do you repair washer-dryer combos?", "a": "Yes. We inspect the machine at your home in Riyadh, work out whether the fault is in washing or drying, and explain the cost before starting."}]},
    icon: "bi-wind",
    filterGroup: "dr",
    image: "dryer-repair-technician-riyadh.webp",
    title: { en: "Dryer Repair", ar: "إصلاح النشافات" },
    h1: { en: "Dryer Repair in Riyadh", ar: "صيانة النشافات في الرياض" },
    shortDesc: {
      en: "Spinning but not heating, taking forever to dry, or a drum that has stopped turning. Dryer faults are usually simple once someone actually opens it up.",
      ar: "نشافة تدور دون أن تسخّن، أو تستغرق وقتاً طويلاً في التجفيف، أو توقف حوضها عن الدوران. أعطال النشافات غالباً بسيطة عندما يفتحها شخص يعرف ما يبحث عنه."
    },
    intro: {
      en: "A dryer that won't heat or leaves clothes damp is rarely worth replacing. Our technicians work out what has actually failed and repair it at your home in Riyadh.",
      ar: "النشافة التي لا تسخّن أو تترك الملابس رطبة نادراً ما تستحق الاستبدال. يحدد فنيونا ما تعطّل فعلاً ويصلحونه في منزلك بالرياض."
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
   FAQ data, home page (general) and per-service FAQs.
   ========================================================= */
const faqDataHome = [
  { q: { en: "Do you repair automatic washing machines?", ar: "هل تصلحون الغسالات الأوتوماتيك؟" },
    a: { en: "Yes. Automatic washing machines are what we do most, from drain and spin faults to control board problems.", ar: "نعم. الغسالات الأوتوماتيك هي أكثر ما نعمل عليه، من أعطال التصريف والدوران إلى مشاكل لوحة التحكم." } },
  { q: { en: "Do you repair dishwashers?", ar: "هل تصلحون غسالات الصحون؟" },
    a: { en: "Yes. We repair dishwashers that don't clean, don't drain, leak or won't power on.", ar: "نعم. نصلح غسالات الصحون التي لا تنظّف أو لا تصرّف أو تسرّب أو لا تعمل." } },
  { q: { en: "Do you repair dryers?", ar: "هل تصلحون النشافات؟" },
    a: { en: "Yes. That covers dryers that don't heat, don't spin, take too long to dry or have stopped working altogether.", ar: "نعم. ويشمل ذلك النشافات التي لا تسخّن أو لا تدور أو تطيل وقت التجفيف أو توقفت تماماً." } },
  { q: { en: "Do you provide on-site repair in Riyadh?", ar: "هل تقدمون الإصلاح في الموقع بالرياض؟" },
    a: { en: "Yes. A technician visits your home in Riyadh and diagnoses the machine on the spot, so there is nothing to carry.", ar: "نعم. يزور الفني منزلك في الرياض ويشخّص الجهاز في مكانه، فلا شيء تحمله." } },
  { q: { en: "How can I book a repair?", ar: "كيف يمكنني حجز خدمة إصلاح؟" },
    a: { en: "Call us, send a WhatsApp message with the brand and the fault, or use the contact form. We will confirm a time.", ar: "اتصل بنا، أو أرسل رسالة واتساب بالماركة والعطل، أو استخدم نموذج التواصل وسنؤكد لك الموعد." } },
  { q: { en: "How quickly can a technician visit?", ar: "ما مدى سرعة وصول الفني؟" },
    a: { en: "We try to book quickly, often the same day, depending on where you are in Riyadh and when you get in touch.", ar: "نحاول الحجز بسرعة، وغالباً في اليوم نفسه، حسب موقعك في الرياض ووقت تواصلك." } },
  { q: { en: "Do you repair different appliance brands?", ar: "هل تصلحون مختلف ماركات الأجهزة؟" },
    a: { en: "Yes, we work with the common brands. Tell us the brand and model when you get in touch.", ar: "نعم، نتعامل مع الماركات الشائعة. أخبرنا بالماركة والموديل عند التواصل." } }
];

/* =========================================================
   Blog data, home preview + full listing + one detail page.
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
      en: "Loud banging, slow draining, cycles that never finish: each usually points to something specific. Here is what to check before you call a technician.",
      ar: "أصوات عالية، تصريف بطيء، ودورات لا تنتهي: كلٌّ منها يشير عادة إلى شيء محدد. إليك ما تفحصه قبل أن تتصل بالفني."
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
      en: "Most cleaning complaints trace back to a blocked filter or spray arm. A few minutes each month keeps a dishwasher out of trouble.",
      ar: "أغلب شكاوى التنظيف سببها فلتر أو ذراع رش مسدود. بضع دقائق كل شهر تُبقي غسالة الصحون بعيدة عن المتاعب."
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
      en: "A dryer that spins but doesn't heat usually has one of three faults. Here is how to tell which one you have.",
      ar: "النشافة التي تدور دون تسخين فيها عادة واحد من ثلاثة أعطال. إليك كيف تعرف أيّها عندك."
    }
  },
  {"slug": "washing-machine-repair-cost-riyadh", "icon": "bi-cash-coin", "group": "wm", "image": "repair-08-team-drum.webp", "date": {"en": "October 2026", "ar": "أكتوبر 2026"}, "title": {"en": "Washing Machine Repair Cost in Riyadh: What Determines the Price?", "ar": "تكلفة صيانة الغسالة الأوتوماتيك في الرياض: ما الذي يحدد السعر؟"}, "excerpt": {"en": "What decides the price of a washing machine repair in Riyadh, what a quote should include, and when replacing is better value.", "ar": "ما الذي يحدد سعر تصليح الغسالة في الرياض، وما الذي يجب أن يشمله عرض السعر، ومتى يكون الاستبدال أوفر؟"}},
  {"slug": "front-load-vs-top-load-washing-machine-repair", "icon": "bi-gear", "group": "wm", "image": "repair-11-chassis-repair.webp", "date": {"en": "October 2026", "ar": "أكتوبر 2026"}, "title": {"en": "Front-Load vs Top-Load Washing Machine Repair: Differences in Faults", "ar": "صيانة الغسالة الأمامية والعلوية: الفرق في الأعطال"}, "excerpt": {"en": "How the common faults differ between front-load and top-load washing machines, and which parts wear out most in each.", "ar": "ما الفرق بين أعطال الغسالة الأمامية والعلوية، وأي القطع تتعرض للتلف أكثر في كل نوع؟"}},
  {"slug": "how-to-clean-washing-machine", "icon": "bi-stars", "group": "wm", "image": "repair-02-dryer-filter.webp", "date": {"en": "October 2026", "ar": "أكتوبر 2026"}, "title": {"en": "How to Clean a Washing Machine and Keep It Working Well", "ar": "كيف تنظف الغسالة الأوتوماتيك وتحافظ عليها؟"}, "excerpt": {"en": "Simple steps to clean an automatic washing machine: drum, door seal, drawer and filter, and a schedule that cuts faults and smells.", "ar": "خطوات بسيطة لتنظيف الغسالة الأوتوماتيك: الحوض وحشية الباب والدرج والفلتر، وجدول للصيانة يقلل الأعطال والروائح."}},
  {"slug": "lg-vs-samsung-washing-machine-common-issues", "icon": "bi-arrow-left-right", "group": "wm", "image": "repair-07-control-board.webp", "date": {"en": "October 2026", "ar": "أكتوبر 2026"}, "title": {"en": "LG vs Samsung Washing Machine: Common Issues Compared", "ar": "غسالة إل جي أم سامسونج: مقارنة الأعطال الشائعة"}, "excerpt": {"en": "How the common faults and error codes of LG and Samsung washing machines compare, and what really changes between the two brands.", "ar": "مقارنة بين أعطال ورموز غسالات إل جي وسامسونج الشائعة، وما الذي يختلف فعلاً بين الماركتين."}},
  {"slug": "repair-or-replace-washing-machine", "icon": "bi-arrow-repeat", "group": "wm", "image": "repair-12-team-belt.webp", "date": {"en": "October 2026", "ar": "أكتوبر 2026"}, "title": {"en": "Repair or Replace a Washing Machine: How to Decide", "ar": "إصلاح الغسالة أم شراء غسالة جديدة: كيف تقرر؟"}, "excerpt": {"en": "How to decide between repairing and replacing a washing machine, and which faults are usually worth repairing.", "ar": "كيف تقرر بين إصلاح الغسالة واستبدالها، وأي الأعطال يُنصح غالباً بإصلاحها."}},
  {"slug": "washer-dishwasher-dryer-maintenance-checklist-riyadh", "icon": "bi-card-checklist", "group": "wm", "image": "repair-09-workshop-wide.webp", "date": {"en": "October 2026", "ar": "أكتوبر 2026"}, "title": {"en": "Washer, Dishwasher and Dryer Maintenance Checklist for Riyadh Homes", "ar": "قائمة صيانة الغسالة وغسالة الصحون والنشافة في الرياض"}, "excerpt": {"en": "A simple routine for washers, dishwashers and dryers: filters, seals, scale and lint.", "ar": "قائمة بسيطة بالصيانة الدورية للغسالة وغسالة الصحون والنشافة: الفلاتر والحشيات والترسبات والوبر."}}
];

/* =========================================================
   Brands serviced, shown as cards with logo + name (logos in images/brands/).
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
   Testimonials, home page.
   ========================================================= */
const testimonialsData = []; // removed: no unverified testimonials are shown


/* =========================================================
   Service areas, Riyadh districts. Al Yarmuk is the home
   base (confirmed); the rest are commonly-known nearby Riyadh
   districts included as a starting list, confirm/edit with
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
