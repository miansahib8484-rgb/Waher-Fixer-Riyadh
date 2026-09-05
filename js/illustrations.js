/* =========================================================
   Custom illustrations — flat, duotone (navy + teal), self-
   contained inline SVG. No external image dependency, so
   nothing ever breaks or looks like a stock-photo mismatch.
   Referenced by main.js render functions.
   ========================================================= */

const ILLUSTRATIONS = {

  /* ---- Hero illustration: technician servicing a washing machine ---- */
  hero: `
  <svg viewBox="0 0 400 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Technician repairing a washing machine">
    <defs>
      <linearGradient id="wmBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#e9edf1"/>
      </linearGradient>
    </defs>
    <ellipse cx="200" cy="330" rx="150" ry="16" fill="#0B1E33" opacity="0.08"/>

    <!-- toolbox -->
    <g transform="translate(38,238)">
      <rect x="0" y="18" width="70" height="42" rx="8" fill="#0B1E33"/>
      <rect x="0" y="18" width="70" height="14" rx="6" fill="#12A594"/>
      <rect x="26" y="4" width="18" height="18" rx="4" fill="none" stroke="#0B1E33" stroke-width="5"/>
    </g>

    <!-- washing machine -->
    <g transform="translate(150,60)">
      <rect x="0" y="0" width="200" height="240" rx="22" fill="url(#wmBody)" stroke="#d7dee4" stroke-width="2"/>
      <rect x="0" y="0" width="200" height="34" rx="22" fill="#0B1E33"/>
      <circle cx="26" cy="17" r="5" fill="#12A594"/>
      <circle cx="46" cy="17" r="5" fill="#63d9c7"/>
      <circle cx="66" cy="17" r="5" fill="#ffffff" opacity="0.6"/>
      <!-- door -->
      <circle cx="100" cy="150" r="72" fill="#0B1E33"/>
      <circle cx="100" cy="150" r="72" fill="none" stroke="#12A594" stroke-width="8"/>
      <circle cx="100" cy="150" r="58" fill="#13314f"/>
      <circle cx="80" cy="132" r="7" fill="#ffffff" opacity="0.75"/>
      <circle cx="112" cy="118" r="5" fill="#ffffff" opacity="0.55"/>
      <circle cx="122" cy="160" r="9" fill="#ffffff" opacity="0.4"/>
      <circle cx="86" cy="172" r="5" fill="#ffffff" opacity="0.5"/>
      <circle cx="180" cy="150" r="6" fill="#12A594"/>
    </g>

    <!-- floating bubbles -->
    <circle cx="330" cy="90" r="9" fill="#12A594" opacity="0.35"/>
    <circle cx="352" cy="130" r="5" fill="#12A594" opacity="0.5"/>
    <circle cx="120" cy="40" r="6" fill="#12A594" opacity="0.4"/>

    <!-- technician -->
    <g transform="translate(30,150)">
      <!-- leg -->
      <rect x="20" y="100" width="24" height="70" rx="10" fill="#0B1E33"/>
      <rect x="55" y="108" width="24" height="62" rx="10" fill="#13314f"/>
      <!-- torso -->
      <rect x="10" y="40" width="80" height="70" rx="20" fill="#12A594"/>
      <!-- arm reaching to machine -->
      <rect x="78" y="52" width="70" height="20" rx="10" fill="#12A594"/>
      <circle cx="150" cy="62" r="12" fill="#E8B894"/>
      <!-- wrench in hand -->
      <rect x="150" y="55" width="34" height="9" rx="4" fill="#0B1E33" transform="rotate(-20 150 55)"/>
      <!-- head -->
      <circle cx="46" cy="18" r="22" fill="#E8B894"/>
      <path d="M24 12 a22 22 0 0 1 44 0 q-4 -10 -22 -10 t-22 10z" fill="#0B1E33"/>
      <rect x="30" y="28" width="32" height="10" rx="5" fill="#0B1E33" opacity="0.12"/>
    </g>
  </svg>`,

  /* ---- Washing machine appliance illustration ---- */
  wm: `
  <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Automatic washing machine">
    <rect x="18" y="14" width="124" height="134" rx="18" fill="#ffffff" stroke="#e1e7ec" stroke-width="2"/>
    <rect x="18" y="14" width="124" height="24" rx="18" fill="#0B1E33"/>
    <circle cx="36" cy="26" r="4" fill="#12A594"/>
    <circle cx="50" cy="26" r="4" fill="#63d9c7"/>
    <rect x="70" y="21" width="52" height="10" rx="5" fill="#ffffff" opacity="0.25"/>
    <circle cx="80" cy="96" r="46" fill="#0B1E33"/>
    <circle cx="80" cy="96" r="46" fill="none" stroke="#12A594" stroke-width="6"/>
    <circle cx="80" cy="96" r="35" fill="#13314f"/>
    <circle cx="66" cy="84" r="5" fill="#ffffff" opacity="0.7"/>
    <circle cx="92" cy="76" r="3.5" fill="#ffffff" opacity="0.5"/>
    <circle cx="96" cy="104" r="6" fill="#ffffff" opacity="0.35"/>
    <circle cx="68" cy="108" r="3.5" fill="#ffffff" opacity="0.5"/>
    <circle cx="128" cy="96" r="4" fill="#12A594"/>
  </svg>`,

  /* ---- Dishwasher appliance illustration ---- */
  dw: `
  <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dishwasher">
    <rect x="18" y="14" width="124" height="134" rx="16" fill="#ffffff" stroke="#e1e7ec" stroke-width="2"/>
    <rect x="18" y="14" width="124" height="26" rx="16" fill="#0B1E33"/>
    <circle cx="34" cy="27" r="4" fill="#12A594"/>
    <rect x="50" y="22" width="46" height="10" rx="5" fill="#ffffff" opacity="0.25"/>
    <circle cx="120" cy="27" r="6" fill="#12A594" opacity="0.85"/>
    <rect x="30" y="52" width="100" height="86" rx="10" fill="#eef4f3"/>
    <rect x="30" y="52" width="100" height="18" rx="8" fill="#ffffff"/>
    <circle cx="52" cy="61" r="10" fill="#12A594" opacity="0.25"/>
    <circle cx="80" cy="61" r="10" fill="#12A594" opacity="0.4"/>
    <circle cx="108" cy="61" r="10" fill="#12A594" opacity="0.25"/>
    <path d="M60 96 q20 -18 40 0" fill="none" stroke="#12A594" stroke-width="5" stroke-linecap="round"/>
    <circle cx="80" cy="118" r="6" fill="#63d9c7"/>
  </svg>`,

  /* ---- Dryer appliance illustration ---- */
  dr: `
  <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dryer">
    <rect x="18" y="14" width="124" height="134" rx="18" fill="#ffffff" stroke="#e1e7ec" stroke-width="2"/>
    <rect x="18" y="14" width="124" height="24" rx="18" fill="#0B1E33"/>
    <circle cx="36" cy="26" r="4" fill="#12A594"/>
    <circle cx="50" cy="26" r="4" fill="#63d9c7"/>
    <path d="M110 10 q6 -14 14 -16" fill="none" stroke="#12A594" stroke-width="4" stroke-linecap="round" opacity="0.7"/>
    <path d="M122 10 q6 -16 16 -18" fill="none" stroke="#12A594" stroke-width="4" stroke-linecap="round" opacity="0.5"/>
    <circle cx="80" cy="96" r="46" fill="#0B1E33"/>
    <circle cx="80" cy="96" r="46" fill="none" stroke="#12A594" stroke-width="6"/>
    <circle cx="80" cy="96" r="35" fill="#13314f"/>
    <path d="M58 84 q22 -14 44 0" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.45" stroke-linecap="round"/>
    <path d="M58 100 q22 14 44 0" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.3" stroke-linecap="round"/>
    <path d="M62 114 q18 -8 36 0" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.25" stroke-linecap="round"/>
    <circle cx="128" cy="96" r="4" fill="#12A594"/>
  </svg>`,

  /* ---- About: "keeping homes running" mission illustration ---- */
  team: `
  <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Keeping Riyadh homes running">
    <circle cx="110" cy="110" r="100" fill="#e4f6f3"/>
    <polygon points="110,50 165,95 55,95" fill="#0B1E33"/>
    <rect x="65" y="95" width="90" height="80" rx="6" fill="#ffffff" stroke="#d7dee4" stroke-width="2"/>
    <rect x="98" y="130" width="24" height="45" rx="4" fill="#12A594"/>
    <circle cx="115" cy="152" r="2.5" fill="#ffffff"/>
    <rect x="72" y="108" width="20" height="20" rx="3" fill="#e4f6f3" stroke="#12A594" stroke-width="2"/>
    <rect x="128" y="108" width="20" height="20" rx="3" fill="#e4f6f3" stroke="#12A594" stroke-width="2"/>
    <circle cx="165" cy="150" r="26" fill="#12A594"/>
    <path d="M154 150 l8 8 16 -18" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  /* ---- About: professional-approach checklist illustration ---- */
  checklist: `
  <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Professional repair checklist">
    <circle cx="110" cy="110" r="100" fill="#e4f6f3"/>
    <rect x="58" y="42" width="104" height="140" rx="14" fill="#ffffff" stroke="#d7dee4" stroke-width="2"/>
    <rect x="88" y="30" width="44" height="20" rx="6" fill="#0B1E33"/>
    <rect x="76" y="70" width="14" height="14" rx="4" fill="#12A594"/>
    <rect x="98" y="72" width="56" height="10" rx="5" fill="#e1e7ec"/>
    <rect x="76" y="98" width="14" height="14" rx="4" fill="#12A594"/>
    <rect x="98" y="100" width="56" height="10" rx="5" fill="#e1e7ec"/>
    <rect x="76" y="126" width="14" height="14" rx="4" fill="none" stroke="#12A594" stroke-width="3"/>
    <rect x="98" y="128" width="40" height="10" rx="5" fill="#e1e7ec"/>
    <rect x="52" y="150" width="60" height="10" rx="5" fill="#0B1E33" transform="rotate(-28 52 150)"/>
    <circle cx="50" cy="155" r="10" fill="#0B1E33"/>
  </svg>`,

  /* ---- Contact page: friendly support illustration ---- */
  support: `
  <svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Friendly customer support">
    <ellipse cx="110" cy="150" rx="80" ry="12" fill="#0B1E33" opacity="0.15"/>
    <circle cx="110" cy="72" r="42" fill="#12A594"/>
    <circle cx="110" cy="60" r="20" fill="#E8B894"/>
    <path d="M90 55 a20 20 0 0 1 40 0 q-4 -8 -20 -8 t-20 8z" fill="#0B1E33"/>
    <rect x="82" y="92" width="56" height="34" rx="14" fill="#ffffff"/>
    <path d="M96 92 v-8 a14 14 0 0 1 28 0 v8" fill="none" stroke="#0B1E33" stroke-width="6"/>
    <circle cx="96" cy="104" r="7" fill="#12A594"/>
    <circle cx="124" cy="104" r="7" fill="#12A594"/>
  </svg>`,

  /* ---- Home hero background scene: Riyadh skyline silhouette + accents ---- */
  heroSceneHome: `
  <svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice" role="img" aria-label="">
    <g opacity="0.85">
      <rect x="0" y="330" width="60" height="90" fill="#ffffff" opacity="0.05"/>
      <rect x="55" y="300" width="46" height="120" fill="#ffffff" opacity="0.07"/>
      <rect x="100" y="345" width="70" height="75" fill="#ffffff" opacity="0.05"/>
      <rect x="168" y="280" width="40" height="140" fill="#ffffff" opacity="0.08"/>
      <rect x="205" y="320" width="55" height="100" fill="#ffffff" opacity="0.05"/>
      <rect x="620" y="310" width="50" height="110" fill="#ffffff" opacity="0.05"/>
      <rect x="665" y="270" width="42" height="150" fill="#ffffff" opacity="0.08"/>
      <rect x="702" y="335" width="65" height="85" fill="#ffffff" opacity="0.05"/>
      <rect x="762" y="295" width="38" height="125" fill="#ffffff" opacity="0.07"/>
      <rect x="795" y="350" width="105" height="70" fill="#ffffff" opacity="0.05"/>
      <rect x="180" y="300" width="8" height="14" fill="#12A594" opacity="0.25"/>
      <rect x="675" y="295" width="8" height="14" fill="#12A594" opacity="0.25"/>
      <rect x="775" y="320" width="8" height="14" fill="#12A594" opacity="0.25"/>
    </g>
    <circle cx="120" cy="90" r="34" fill="none" stroke="#12A594" stroke-width="2.5" opacity="0.18"/>
    <circle cx="120" cy="90" r="22" fill="none" stroke="#12A594" stroke-width="2" opacity="0.14"/>
    <circle cx="780" cy="120" r="46" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.14"/>
    <circle cx="780" cy="120" r="30" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.1"/>
    <circle cx="450" cy="60" r="5" fill="#12A594" opacity="0.3"/>
    <circle cx="500" cy="100" r="3" fill="#ffffff" opacity="0.3"/>
    <circle cx="380" cy="130" r="4" fill="#12A594" opacity="0.22"/>
  </svg>`,

  /* ---- Generic inner-page hero background: scattered appliance line-art ---- */
  heroSceneGeneric: `
  <svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" aria-label="">
    <g opacity="0.16" fill="none" stroke="#ffffff" stroke-width="2.5">
      <g transform="translate(60,60) rotate(-8)">
        <rect x="0" y="0" width="130" height="150" rx="16"/>
        <circle cx="65" cy="90" r="42"/>
        <line x1="16" y1="24" x2="40" y2="24"/>
      </g>
      <g transform="translate(700,40) rotate(6)">
        <rect x="0" y="0" width="120" height="140" rx="14"/>
        <circle cx="60" cy="82" r="38"/>
        <line x1="14" y1="22" x2="36" y2="22"/>
      </g>
      <g transform="translate(360,230) rotate(-4)">
        <rect x="0" y="0" width="150" height="130" rx="16"/>
        <rect x="16" y="18" width="118" height="16" rx="6"/>
        <circle cx="40" cy="70" r="10"/>
        <circle cx="75" cy="70" r="10"/>
        <circle cx="110" cy="70" r="10"/>
      </g>
    </g>
    <g opacity="0.12" stroke="#12A594" stroke-width="2" fill="none">
      <circle cx="820" cy="300" r="60"/>
      <circle cx="820" cy="300" r="40"/>
      <circle cx="130" cy="330" r="34"/>
    </g>
  </svg>`
};

