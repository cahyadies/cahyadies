// Language & I18N Setup
let currentLang = localStorage.getItem("mentaya_lang") || "id";

const I18N = {
  id: {
    navGallery: "01. Galeri",
    navCollab: "02. Collab",
    navComm: "03. Komisi",
    heroTag: "// CREATIVE TECH LAB & EXPERIMENTAL STUDIO",
    heroTitle: "Eksplorasi kode, antarmuka visual, dan inisiatif nyata.",
    heroDesc: "MentayaSandbox adalah ruang eksperimen dan lab kreatif yang diinisiasi oleh <strong>Adies</strong>, berbasis di Surabaya. Terbuka untuk eksplorasi mandiri, kolaborasi lintas disiplin, dan pembuatan karya kustom.",
    btnGallery: "Buka Galeri ↗",
    btnComm: "Order Komisi ↗",
    statStatus: "Status:",
    statStatusVal: "● Open for Projects",
    statFocus: "Fokus:",
    statFocusVal: "Web, UI/UX, AI/CV",
    statBase: "Basis:",
    statBaseVal: "Surabaya & Remote",
    telemetryReady: "Ready to build & collaborate",
    sec1Title: "Galeri & Catatan Eksplorasi",
    sec1Sub: "Kanban Progres Lab",
    sec2Title: "Wadah Open Collab",
    sec2Sub: "Eksperimen Kolektif",
    sec2Desc: "Punya ide yang ingin dieksplorasi bersama? MentayaSandbox menyambut kolaborasi dengan developer, desainer, fotografer, pegiat literasi, atau komunitas lokal.",
    collabPitchTag: "LET'S BUILD TOGETHER",
    collabPitchTitle: "Ajak Kolaborasi Proyek",
    collabPitchDesc: "Jika kamu punya dataset menarik, masalah lokal yang butuh solusi digital, atau ingin bikin karya bareng.",
    collabPitchBtn: "Kirim Ide / Pitch ↗",
    sec3Title: "Layanan Open Commission",
    sec3Sub: "Pekerjaan Kustom & Komersial",
    sec3Desc: "Butuh website dengan performa kilat, identitas visual yang solid, atau antarmuka digital yang fungsional? Saya menerima proyek komisi terpilih dengan pendekatan detail dan jujur.",
    filterAll: "SEMUA",
    filterWeb: "WEB",
    filterDesain: "DESAIN",
    filterCV: "CV / AI",
    statusIde: "01. IDE & RISET",
    statusJalan: "02. SEDANG JALAN",
    statusSelesai: "03. SELESAI / LIVE",
    emptyCol: "// tidak ada item",
    labNoteLink: "Catatan lab ↗",
    lookingFor: "Mencari:",
    askSlotBtn: "Tanya Slot & Estimasi ↗",
    recommended: "RECOMMENDED",
    footerInitiated: "Diinisiasi oleh",
    footerLoc: "Surabaya, Jawa Timur · 2026",
    logNoteHeader: "// Log Catatan Eksplorasi:",
    collabPartnerHeader: "// Kolaborator / Partner:",
    badgeSolo: "Lab Solo",
    badgeComm: "Commission"
  },
  en: {
    navGallery: "01. Gallery",
    navCollab: "02. Collab",
    navComm: "03. Commission",
    heroTag: "// CREATIVE TECH LAB & EXPERIMENTAL STUDIO",
    heroTitle: "Exploring code, visual interfaces, and tangible initiatives.",
    heroDesc: "MentayaSandbox is an experimental space and creative tech lab initiated by <strong>Adies</strong>, based in Surabaya. Open for independent exploration, cross-disciplinary collaboration, and custom commissioned work.",
    btnGallery: "Explore Gallery ↗",
    btnComm: "Book Commission ↗",
    statStatus: "Status:",
    statStatusVal: "● Open for Projects",
    statFocus: "Focus:",
    statFocusVal: "Web, UI/UX, AI/CV",
    statBase: "Base:",
    statBaseVal: "Surabaya & Remote",
    telemetryReady: "Ready to build & collaborate",
    sec1Title: "Gallery & Lab Logs",
    sec1Sub: "Lab Progress Kanban",
    sec2Title: "Open Collab Space",
    sec2Sub: "Collective Experiments",
    sec2Desc: "Have an idea you want to explore together? MentayaSandbox welcomes collaboration with developers, designers, photographers, writers, and local communities.",
    collabPitchTag: "LET'S BUILD TOGETHER",
    collabPitchTitle: "Pitch a Collaboration",
    collabPitchDesc: "Got an interesting dataset, a real-world problem that needs digital solutions, or want to co-create?",
    collabPitchBtn: "Send Idea / Pitch ↗",
    sec3Title: "Open Commission Services",
    sec3Sub: "Custom & Commercial Work",
    sec3Desc: "Need a high-performance website, solid brand identity, or functional digital interfaces? Accepting selected commissioned projects with a meticulous and transparent craft.",
    filterAll: "ALL",
    filterWeb: "WEB",
    filterDesain: "DESIGN",
    filterCV: "CV / AI",
    statusIde: "01. IDEATION & R&D",
    statusJalan: "02. IN PROGRESS",
    statusSelesai: "03. SHIPPED / LIVE",
    emptyCol: "// no items found",
    labNoteLink: "Lab notes ↗",
    lookingFor: "Seeking:",
    askSlotBtn: "Check Slots & Estimate ↗",
    recommended: "RECOMMENDED",
    footerInitiated: "Initiated by",
    footerLoc: "Surabaya, Indonesia · 2026",
    logNoteHeader: "// Lab Exploration Log:",
    collabPartnerHeader: "// Collaborator / Partner:",
    badgeSolo: "Lab Solo",
    badgeComm: "Commission"
  }
};

// Data & Konfigurasi MentayaSandbox
const LAB = {
  name: "mentayasandbox",
  location: "Surabaya, Jawa Timur",
  contact: {
    wa: "https://wa.me/6281234567890?text=Halo%20MentayaSandbox,%20saya%20tertarik%20untuk%20diskusi%20proyek.",
    collabWa: "https://wa.me/6281234567890?text=Halo%20Adies,%20saya%20ingin%20mengajak%20kolaborasi%20di%20MentayaSandbox."
  }
};

// Data Project Gallery (Bilingual)
const PROJECTS = [
  {
    type: "web",
    category: "collab",
    s: "selesai",
    collabWith: "Omah Ijo Farm",
    id: {
      n: "Katalog Miniatur Hidroponik Omah Ijo",
      d: "Katalog mobile super cepat tanpa library JS eksternal, langsung checkout WhatsApp.",
      notes: "Load time di bawah 400ms di jaringan seluler 3G. Kolaborasi internal ekosistem Omah Ijo."
    },
    en: {
      n: "Omah Ijo Miniature Hydroponics Catalog",
      d: "Ultra-fast mobile catalog without external JS libraries, direct WhatsApp checkout.",
      notes: "Load time under 400ms on 3G cellular network. Internal collaboration within Omah Ijo ecosystem."
    }
  },
  {
    type: "web",
    category: "commission",
    s: "jalan",
    collabWith: "GERIGI ITS",
    id: {
      n: "Dashboard Driver Shuttle Mahasiswa",
      d: "Wireframe antarmuka rute dan jadwal untuk driver shuttle kampus.",
      notes: "Tantangan utama pada keterbacaan teks kontras tinggi saat driver mengemudi di bawah terik matahari."
    },
    en: {
      n: "Student Shuttle Driver Dashboard",
      d: "Interface wireframe for routes and schedules tailored for campus shuttle drivers.",
      notes: "Primary challenge was high-contrast text legibility while driving under direct sunlight."
    }
  },
  {
    type: "cv",
    category: "solo",
    s: "jalan",
    collabWith: null,
    id: {
      n: "Deteksi Kematangan Sayur (Computer Vision)",
      d: "Model klasifikasi citra daun selada hidroponik siap panen berbasis OpenCV.",
      notes: "Eksplorasi computer vision lokal untuk otomasi panen sayuran hidroponik."
    },
    en: {
      n: "Vegetable Harvest Readiness Detector",
      d: "OpenCV-based image classification model for harvest-ready hydroponic lettuce leaves.",
      notes: "Local computer vision experiment for automating hydroponic harvesting decisions."
    }
  },
  {
    type: "web",
    category: "solo",
    s: "ide",
    collabWith: null,
    id: {
      n: "Kalkulator Nutrisi Otomatis AB Mix",
      d: "Alat bantu takar ppm dan EC air tandon untuk kebun hidroponik presisi.",
      notes: "Akan dihubungkan ke sensor mikrokontroler jika eksperimen fase 2 berhasil."
    },
    en: {
      n: "AB Mix Automated Nutrient Calculator",
      d: "Calculator utility for ppm and EC dosing in reservoir tanks for precision hydroponics.",
      notes: "Will interface with microcontroller sensors upon successful phase 2 experiments."
    }
  },
  {
    type: "desain",
    category: "commission",
    s: "selesai",
    collabWith: "dalam.dapur",
    id: {
      n: "Visual Identity & Packaging Kit",
      d: "Sistem identitas visual dan label stiker tahan air untuk produk kuliner lokal.",
      notes: "Desain minimalis dan hemat biaya cetak untuk skala UMKM."
    },
    en: {
      n: "Visual Identity & Packaging Kit",
      d: "Visual identity system and waterproof sticker labels for local artisan food products.",
      notes: "Minimalist design crafted for cost-effective printing on an SME scale."
    }
  },
  {
    type: "web",
    category: "collab",
    s: "ide",
    collabWith: "Open Collab",
    id: {
      n: "Peta Interaktif Arsip Budaya Mentaya",
      d: "Eksperimen visual web GIS ringan untuk mendokumentasikan titik sejarah Sungai Mentaya.",
      notes: "Membuka kolaborasi dengan fotografer & sejarawan lokal."
    },
    en: {
      n: "Interactive Mentaya Heritage Web Map",
      d: "Lightweight Web GIS visual experiment documenting historical spots along the Mentaya River.",
      notes: "Open for collaboration with local photographers and historians."
    }
  }
];

// Topik Open Collab (Bilingual)
const COLLAB_TOPICS = [
  {
    id: {
      title: "Web GIS Arsip Budaya & Komunitas Mentaya",
      desc: "Memetakan spot sejarah, kuliner otentik, dan flora/fauna endemik di sekitar aliran Sungai Mentaya.",
      lookingFor: ["Peneliti / Penulis Lokal", "Fotografer", "Kontributor Data"]
    },
    en: {
      title: "Mentaya Cultural & Community Web GIS Archive",
      desc: "Mapping historical spots, authentic culinary heritage, and endemic biodiversity along the Mentaya River.",
      lookingFor: ["Local Researcher / Writer", "Photographer", "Data Contributor"]
    }
  },
  {
    id: {
      title: "IoT & Smart Hydroponic Monitoring",
      desc: "Membangun antarmuka monitoring nutrisi air hidroponik murah dengan mikrokontroler ESP32 + Web Dashboard.",
      lookingFor: ["Hardware Enthusiast", "Embedded Programmer"]
    },
    en: {
      title: "IoT & Smart Hydroponic Monitoring",
      desc: "Building an affordable water nutrient monitoring dashboard with ESP32 microcontrollers + Web UI.",
      lookingFor: ["Hardware Enthusiast", "Embedded Programmer"]
    }
  },
  {
    id: {
      title: "Eksperimen Creative Coding & Generative Art",
      desc: "Koleksi animasi interaktif berbasis canvas & WebGL dengan nuansa motif lokal Nusantara.",
      lookingFor: ["Illustrator", "Creative Coder"]
    },
    en: {
      title: "Creative Coding & Generative Art Lab",
      desc: "Collection of interactive Canvas & WebGL animations celebrating indigenous geometric patterns.",
      lookingFor: ["Illustrator", "Creative Coder"]
    }
  }
];

// Layanan Open Commission (Bilingual)
const SERVICES = [
  {
    featured: true,
    id: {
      title: "Fast Web / Landing Page",
      desc: "Website modern, ringan (fast loading), mobile-first, dan teroptimasi SEO.",
      features: [
        "Profil Bisnis, Portofolio, atau Mini Katalog",
        "Tanpa bloatware, load time < 1 detik",
        "Integrasi WhatsApp / Form Order",
        "Setup domain & hosting Vercel"
      ],
      ideal: "Cocok untuk UMKM, kreator, dan profesional independen."
    },
    en: {
      title: "Fast Web / Landing Page",
      desc: "Modern, lightweight, mobile-first websites optimized for high speed and SEO.",
      features: [
        "Business Profile, Portfolio, or Mini Catalog",
        "Zero bloatware, load time < 1 second",
        "WhatsApp / Order Form integration",
        "Custom domain & Vercel deployment"
      ],
      ideal: "Ideal for SMEs, creators, and independent professionals."
    }
  },
  {
    featured: false,
    id: {
      title: "Brand Identity & Graphic Kit",
      desc: "Perancangan identitas visual yang punya karakter kuat dan aplikatif.",
      features: [
        "Logo system & color palette",
        "Typography guidelines",
        "Packaging, stiker & label produk",
        "Aset media sosial siap pakai"
      ],
      ideal: "Cocok untuk produk kuliner, agrikultur, dan bisnis rintisan."
    },
    en: {
      title: "Brand Identity & Graphic Kit",
      desc: "Crafting distinctive visual identities tailored for practical real-world usage.",
      features: [
        "Logo system & color palette",
        "Typography guidelines",
        "Packaging, stickers & product labels",
        "Ready-to-use social media assets"
      ],
      ideal: "Ideal for culinary, agriculture, and emerging local brands."
    }
  },
  {
    featured: false,
    id: {
      title: "Custom Interactive Tool / Web App",
      desc: "Pembuatan aplikasi web mini atau dashboard untuk menyelesaikan masalah operasional spesifik.",
      features: [
        "Kalkulator kustom / simulator",
        "Dashboard monitoring & internal tool",
        "Sistem arsip interaktif",
        "Desain UI/UX fungsional"
      ],
      ideal: "Cocok untuk workflow internal atau riset eksperimental."
    },
    en: {
      title: "Custom Interactive Tool / Web App",
      desc: "Building mini web applications or internal dashboards to solve specific operational problems.",
      features: [
        "Custom calculators & simulators",
        "Monitoring dashboards & internal tools",
        "Interactive archive systems",
        "Clean functional UI/UX design"
      ],
      ideal: "Ideal for operational workflows or experimental R&D."
    }
  }
];

// STATE FILTER
let currentFilter = "semua";

// Switch Language
function setLang(lang) {
  if (lang !== "id" && lang !== "en") return;
  currentLang = lang;
  localStorage.setItem("mentaya_lang", lang);

  // Update Buttons Active State
  const btnId = document.getElementById("btnLangId");
  const btnEn = document.getElementById("btnLangEn");
  if (btnId && btnEn) {
    btnId.classList.toggle("active", lang === "id");
    btnEn.classList.toggle("active", lang === "en");
  }

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update all [data-i18n] elements
  const t = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Re-render Dynamic Sections
  renderTelemetry();
  renderGallery();
  renderCollab();
  renderCommission();
}

function renderTelemetry() {
  const codeEl = document.getElementById("telemetryCodeBody");
  if (!codeEl) return;

  const isId = currentLang === "id";
  const loc = isId ? "Surabaya, Jawa Timur" : "Surabaya, East Java";
  const cap1 = isId ? "Fast Web & Landing Pages" : "Fast Web & Landing Pages";
  const cap2 = isId ? "Identitas Visual & Brand" : "Visual & Brand Identity";
  const cap3 = isId ? "Creative Tech & Alat AI" : "Creative Tech & AI Tools";
  const commVal = isId ? "tersedia" : "available";
  const respVal = isId ? "< 24 jam" : "< 24h";

  codeEl.innerHTML = `<span class="c-key">"status"</span>: <span class="c-num">200</span>,
<span class="c-key">"lab"</span>: <span class="c-str">"mentayasandbox"</span>,
<span class="c-key">"location"</span>: <span class="c-str">"${loc}"</span>,
<span class="c-key">"capabilities"</span>: [
  <span class="c-str">"${cap1}"</span>,
  <span class="c-str">"${cap2}"</span>,
  <span class="c-str">"${cap3}"</span>
],
<span class="c-key">"open_collab"</span>: <span class="c-bool">true</span>,
<span class="c-key">"open_commission"</span>: <span class="c-str">"${commVal}"</span>,
<span class="c-key">"response_time"</span>: <span class="c-num">${respVal}</span>`;
}

function renderGallery() {
  const filterEl = document.getElementById("filterBar");
  const colsEl = document.getElementById("cols");
  const t = I18N[currentLang];

  // Filter Buttons
  const filterKeys = [
    { k: "semua", label: t.filterAll },
    { k: "web", label: t.filterWeb },
    { k: "desain", label: t.filterDesain },
    { k: "cv", label: t.filterCV }
  ];

  filterEl.innerHTML = filterKeys
    .map(
      item => `<button class="${currentFilter === item.k ? "on" : ""}" data-k="${item.k}">${item.label}</button>`
    )
    .join("");

  // Columns: ide, jalan, selesai
  const statuses = [
    { key: "ide", label: t.statusIde },
    { key: "jalan", label: t.statusJalan },
    { key: "selesai", label: t.statusSelesai }
  ];

  colsEl.innerHTML = statuses
    .map(st => {
      const list = PROJECTS.filter(
        p => p.s === st.key && (currentFilter === "semua" || p.type === currentFilter)
      );

      return `
        <div class="col">
          <div class="col-title" style="color: var(--${st.key});">
            <span>● ${st.label}</span>
            <small style="color:var(--mute)">[${list.length}]</small>
          </div>
          ${
            list.length === 0
              ? `<div style="color:var(--mute); font-size:12px; padding:12px 0;">${t.emptyCol}</div>`
              : list
                  .map(item => {
                    const idx = PROJECTS.indexOf(item);
                    const content = item[currentLang] || item.id;
                    let catBadge = "";
                    if (item.category === "collab") {
                      catBadge = `<span class="badge badge-collab">Collab: ${item.collabWith || "Open"}</span>`;
                    } else if (item.category === "commission") {
                      catBadge = `<span class="badge badge-comm">${t.badgeComm}</span>`;
                    } else {
                      catBadge = `<span class="badge">${t.badgeSolo}</span>`;
                    }

                    return `
                      <div class="card" onclick="openModal(${idx})">
                        <div class="card-badges">
                          <span class="badge">[ ${item.type} ]</span>
                          ${catBadge}
                        </div>
                        <h3>${content.n}</h3>
                        <p>${content.d}</p>
                        <div class="card-foot">
                          <span>${t.labNoteLink}</span>
                          <span style="color:var(--${item.s})">● ${item.s}</span>
                        </div>
                      </div>
                    `;
                  })
                  .join("")
          }
        </div>
      `;
    })
    .join("");

  // Attach button events
  filterEl.querySelectorAll("button").forEach(b => {
    b.onclick = () => {
      currentFilter = b.dataset.k;
      renderGallery();
    };
  });
}

function renderCollab() {
  const container = document.getElementById("collabList");
  const t = I18N[currentLang];

  container.innerHTML = COLLAB_TOPICS.map(item => {
    const data = item[currentLang] || item.id;
    return `
      <div class="collab-item">
        <h4><span>⚡</span> ${data.title}</h4>
        <p>${data.desc}</p>
        <div class="collab-tags">
          <span style="color:var(--collab)">${t.lookingFor}</span>
          ${data.lookingFor.map(role => `<span class="badge">${role}</span>`).join(" ")}
        </div>
      </div>
    `;
  }).join("");
}

function renderCommission() {
  const container = document.getElementById("commList");
  const t = I18N[currentLang];

  container.innerHTML = SERVICES.map(item => {
    const data = item[currentLang] || item.id;
    return `
      <div class="comm-box ${item.featured ? "featured" : ""}">
        ${item.featured ? `<span class="comm-tag">${t.recommended}</span>` : ""}
        <h3>${data.title}</h3>
        <p>${data.desc}</p>
        <ul class="comm-features">
          ${data.features.map(f => `<li>${f}</li>`).join("")}
        </ul>
        <div style="font-size:11px; color:var(--mute); margin-bottom:14px; font-style:italic;">${data.ideal}</div>
        <a href="${LAB.contact.wa}" target="_blank" class="btn ${item.featured ? "btn-comm" : "btn-outline"}">
          ${t.askSlotBtn}
        </a>
      </div>
    `;
  }).join("");
}

function openModal(idx) {
  const item = PROJECTS[idx];
  const data = item[currentLang] || item.id;
  const t = I18N[currentLang];

  document.getElementById("mTitle").textContent = data.n;
  document.getElementById("mType").textContent = `[ ${item.type.toUpperCase()} · STATUS: ${item.s.toUpperCase()} · ${item.category.toUpperCase()} ]`;
  document.getElementById("mDesc").textContent = data.d;
  document.getElementById("mNotes").innerHTML = `<strong>${t.logNoteHeader}</strong><br>${data.notes}`;
  
  const collabEl = document.getElementById("mCollab");
  if (item.collabWith) {
    collabEl.innerHTML = `<strong>${t.collabPartnerHeader}</strong> ${item.collabWith}`;
    collabEl.style.display = "block";
  } else {
    collabEl.style.display = "none";
  }

  document.getElementById("modal").classList.add("on");
}

function closeModal() {
  document.getElementById("modal").classList.remove("on");
}

// Copy code snippet helper
function copySnippet() {
  const btn = document.getElementById("copyCodeBtn");
  const isId = currentLang === "id";
  const codeContent = `{
  "status": 200,
  "lab": "mentayasandbox",
  "location": "${isId ? "Surabaya, Jawa Timur" : "Surabaya, East Java"}",
  "capabilities": [
    "Fast Web & Landing Pages",
    "${isId ? "Identitas Visual & Brand" : "Visual & Brand Identity"}",
    "${isId ? "Creative Tech & Alat AI" : "Creative Tech & AI Tools"}"
  ],
  "open_collab": true,
  "open_commission": "${isId ? "tersedia" : "available"}",
  "response_time": "${isId ? "< 24 jam" : "< 24h"}"
}`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(codeContent).then(() => {
      const orig = btn.textContent;
      btn.textContent = isId ? "Tersalin!" : "Copied!";
      btn.style.borderColor = "var(--comm)";
      btn.style.color = "var(--comm)";
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.borderColor = "";
        btn.style.color = "";
      }, 1800);
    });
  }
}

// Global escape key listener
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

// Mouse spotlight tracking untuk efek grid samar mengikuti kursor
let mouseRaf = null;
window.addEventListener("pointermove", (e) => {
  if (mouseRaf) cancelAnimationFrame(mouseRaf);
  mouseRaf = requestAnimationFrame(() => {
    document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
    document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
  });
});

// Sinkronisasi dengan Unified Data Store (data/store.json)
async function syncFromStore() {
  try {
    const res = await fetch("../data/store.json?t=" + Date.now());
    if (!res.ok) return;
    const data = await res.json();
    if (data.mentayasandbox) {
      const m = data.mentayasandbox;
      if (m.commissionStatus) LAB.commissionStatus = m.commissionStatus;
      if (m.commissionSlots) LAB.commissionSlots = m.commissionSlots;
      if (m.contact) LAB.contact = m.contact;
      if (m.projects && m.projects.length > 0) {
        PROJECTS.length = 0;
        m.projects.forEach(p => {
          PROJECTS.push({
            type: p.type,
            category: p.category,
            s: p.s,
            collabWith: p.collabWith,
            id: p.id_content || {},
            en: p.en_content || {}
          });
        });
      }
      if (m.collab_topics && m.collab_topics.length > 0) {
        COLLAB_TOPICS.length = 0;
        m.collab_topics.forEach(c => {
          COLLAB_TOPICS.push({
            id: c.id_content || {},
            en: c.en_content || {}
          });
        });
      }
      setLang(currentLang);
    }
  } catch (err) {
    console.log("Menggunakan data lokal.");
  }
}

// Init on load
window.addEventListener("DOMContentLoaded", () => {
  setLang(currentLang);
  syncFromStore();
});
