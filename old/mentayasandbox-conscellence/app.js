let currentLang = localStorage.getItem('mentaya_lang') || 'id';
let activeFilter = 'semua';
let lastFocusedElement = null;

const WA_CONTACT = '6282157058512';
const EMAIL_CONTACT = 'cahyadies@gmail.com';

const I18N = {
  id: {
    brandSub: 'Keilmuan IT & Kolaborasi',
    navGallery: 'Eksperimen',
    navNotes: 'Catatan Ilmu',
    navCollab: 'Kolaborasi',
    heroTitle: 'Wadah ekspresi, keilmuan IT berkelanjutan, dan kolaborasi terbuka.',
    heroDesc:
      'Berangkat dari latar belakang Teknologi Informasi, MentayaSandbox dibangun oleh <strong>Adies</strong> sebagai ruang untuk mendokumentasikan riset terapan, berbagi pengetahuan yang berkelanjutan, serta merajut kolaborasi lintas disiplin.',
    statDomain: 'Ranah Utama',
    statDomainVal: 'Rekayasa Web, Visi Komputer, Sistem Terapan',
    statPrinciple: 'Prinsip',
    statPrincipleVal: 'Keilmuan Terbuka & Berkelanjutan',
    statParent: 'Ekosistem Induk',
    pillarsHeading: 'Tiga Fokus Keilmuan & Ekspresi',
    p1Title: 'Visi Komputer & AI Terapan',
    p1Desc: 'Eksperimen model deteksi dan pengukuran citra yang ringan untuk kebutuhan agrikultur dan lapangan.',
    p2Title: 'Arsitektur Web Tepat Guna',
    p2Desc: 'Pengembangan sistem informasi cepat, hemat sumber daya, dan mudah dirawat dalam jangka panjang.',
    p3Title: 'Berbagi Pengetahuan & Arsip Komunitas',
    p3Desc: 'Dokumentasi terbuka, pemetaan budaya lokal, dan pertukaran gagasan bersama rekan lintas bidang.',
    sec1Title: 'Arsip Eksperimen & Riset Terapan',
    sec1Sub: 'Daftar proyek mandiri, prototipe keilmuan, dan implementasi sistem yang sedang berjalan maupun selesai.',
    secNotesTitle: 'Catatan Keilmuan & Berbagi',
    secNotesSub: 'Rangkuman pembelajaran teknis dan catatan lapangan agar pengetahuan dapat dipelajari serta dikembangkan kembali.',
    sec2Title: 'Ruang Kolaborasi & Diskusi',
    sec2Desc: 'Terbuka untuk riset bersama, eksplorasi dataset lokal, penulisan bersama, maupun pengembangan sistem kustom.',
    openTopicsHeading: 'Topik Eksplorasi Terbuka',
    formHeading: 'Kirim Gagasan Kolaborasi / Diskusi',
    formIntro: 'Isi rincian singkat di bawah ini untuk memulai percakapan langsung melalui WhatsApp atau Email.',
    lblName: 'Nama Anda / Instansi',
    lblMode: 'Jenis Diskusi',
    optCollab: 'Kolaborasi Riset & Keilmuan',
    optData: 'Berbagi Data / Proyek Komunitas',
    optComm: 'Pengembangan Sistem / Komisi Teknis',
    lblMsg: 'Gagasan atau Topik yang Ingin Dibahas',
    btnSendWa: 'Kirim via WhatsApp',
    btnSendEmail: 'Kirim via Email',
    footerInitiated: 'Wadah keilmuan & ekspresi oleh',
    filterAll: 'Semua',
    filterCv: 'Model AI & CV',
    filterWeb: 'Sistem Web & IoT',
    filterDesain: 'Desain Sistem',
    statusDone: 'Selesai',
    statusActive: 'Berjalan',
    statusIdea: 'Konsep Riset',
    readDetail: 'Lihat catatan teknis',
    readNote: 'Baca selengkapnya',
    partnerPrefix: 'Mitra / Konteks: ',
    lookingForLabel: 'Terbuka untuk: ',
    emptyFilter: 'Belum ada proyek pada filter ini.',
    resetFilter: 'Tampilkan Semua',
    feedbackWa: 'Membuka WhatsApp dengan format pesan diskusi Anda...',
    feedbackEmail: 'Membuka aplikasi Email dengan draf kolaborasi Anda...'
  },
  en: {
    brandSub: 'IT Knowledge & Collaboration',
    navGallery: 'Experiments',
    navNotes: 'Knowledge Notes',
    navCollab: 'Collaborate',
    heroTitle: 'A space for expression, sustainable IT knowledge, and open collaboration.',
    heroDesc:
      'Rooted in an Information Technology background, MentayaSandbox was built by <strong>Adies</strong> to document applied research, share sustainable engineering practices, and foster cross-disciplinary collaboration.',
    statDomain: 'Core Domains',
    statDomainVal: 'Web Engineering, Computer Vision, Applied Systems',
    statPrinciple: 'Principle',
    statPrincipleVal: 'Open & Sustainable Knowledge',
    statParent: 'Parent Hub',
    pillarsHeading: 'Three Pillars of Knowledge & Expression',
    p1Title: 'Applied Computer Vision & AI',
    p1Desc: 'Lightweight image detection and measurement models tailored for agriculture and field conditions.',
    p2Title: 'Resource-Efficient Web Architecture',
    p2Desc: 'Fast, low-overhead information systems engineered for long-term maintainability.',
    p3Title: 'Knowledge Sharing & Community Archives',
    p3Desc: 'Open documentation, cultural mapping, and idea exchange across disciplines.',
    sec1Title: 'Applied Research & Experiment Archive',
    sec1Sub: 'Independent projects, scientific prototypes, and system implementations across active and completed stages.',
    secNotesTitle: 'Knowledge Notes & Shared Learnings',
    secNotesSub: 'Technical field notes and engineering summaries written so methods can be studied and reused.',
    sec2Title: 'Collaboration & Discussion Space',
    sec2Desc: 'Open for joint research, local dataset exploration, co-authoring, or custom technical development.',
    openTopicsHeading: 'Open Exploration Topics',
    formHeading: 'Send a Collaboration Idea or Inquiry',
    formIntro: 'Fill in the brief details below to start a direct conversation via WhatsApp or Email.',
    lblName: 'Your Name / Organization',
    lblMode: 'Discussion Type',
    optCollab: 'Research & Knowledge Collaboration',
    optData: 'Data Sharing / Community Project',
    optComm: 'System Development / Technical Commission',
    lblMsg: 'Idea or Topic to Discuss',
    btnSendWa: 'Send via WhatsApp',
    btnSendEmail: 'Send via Email',
    footerInitiated: 'Knowledge & expression platform by',
    filterAll: 'All',
    filterCv: 'AI & Computer Vision',
    filterWeb: 'Web & IoT Systems',
    filterDesain: 'System Design',
    statusDone: 'Completed',
    statusActive: 'Active R&D',
    statusIdea: 'Research Concept',
    readDetail: 'View technical notes',
    readNote: 'Read full note',
    partnerPrefix: 'Partner / Context: ',
    lookingForLabel: 'Open for: ',
    emptyFilter: 'No projects match this filter yet.',
    resetFilter: 'Show All',
    feedbackWa: 'Opening WhatsApp with your formatted discussion message...',
    feedbackEmail: 'Opening your Email client with the collaboration draft...'
  }
};

const PROJECTS = [
  {
    id: 'deteksi-sayur',
    type: 'cv',
    s: 'jalan',
    collabWith: 'Omah Ijo Hidroponik',
    id_content: {
      n: 'Klasifikasi Kematangan Daun Selada Berbasis Computer Vision',
      d: 'Eksperimen model pengolahan citra untuk mendeteksi kesiapan panen selada hidroponik dari warna dan luas kanopi daun.',
      notes:
        'Metode: Menggunakan segmentasi ruang warna HSV dan ekstraksi kontur morfologi untuk memisahkan daun dari instalasi pipa PVC putih. Dirancang agar dapat dijalankan pada perangkat mobile tanpa ketergantungan GPU cloud.'
    },
    en_content: {
      n: 'Hydroponic Lettuce Harvest Readiness via Computer Vision',
      d: 'Image processing experiment detecting harvest readiness of hydroponic lettuce from leaf color and canopy area.',
      notes:
        'Method: Uses HSV color-space segmentation and morphological contour extraction to isolate leaf area against white PVC gullies. Engineered to run on local mobile devices without cloud GPU dependencies.'
    }
  },
  {
    id: 'cv-botol',
    type: 'cv',
    s: 'selesai',
    collabWith: 'Riset Mandiri IT',
    id_content: {
      n: 'Estimasi Volume Objek Mengapung dari Citra Kamera',
      d: 'Perhitungan proporsi volume benda di permukaan air menggunakan deteksi tepi dan kalibrasi perspektif.',
      notes:
        'Catatan Teknis: Tantangan terbesar berada pada spekularitas pantulan air. Diselesaikan dengan pemfilteran median bertingkat dan ambang batas adaptif sebelum perhitungan piksel siluet.'
    },
    en_content: {
      n: 'Floating Object Volume Estimation from Camera Frames',
      d: 'Estimating submerged and floating object volume ratios using edge detection and perspective calibration.',
      notes:
        'Technical Note: Water surface specular reflection was mitigated using staged median filtering and adaptive thresholding prior to silhouette pixel integration.'
    }
  },
  {
    id: 'kalkulator-abmix',
    type: 'web',
    s: 'jalan',
    collabWith: 'Omah Ijo Hidroponik',
    id_content: {
      n: 'Kalkulator Takaran Nutrisi AB Mix & Log EC Air Tandon',
      d: 'Alat bantu hitung kepekatan PPM/EC larutan nutrisi hidroponik sesuai fase usia tanam (semai, remaja, dewasa).',
      notes:
        'Keberlanjutan Sistem: Dibangun sebagai aplikasi web statis mandiri yang tetap bekerja secara luring (offline-first) di area kebun ketika mengatur ulang tandon air.'
    },
    en_content: {
      n: 'AB Mix Nutrient Dosing Calculator & Reservoir EC Logger',
      d: 'Utility for calculating PPM/EC nutrient concentrations across plant growth stages (seedling, vegetative, mature).',
      notes:
        'System Sustainability: Built as an offline-capable static web tool for reliable field use directly beside nutrient tanks.'
    }
  },
  {
    id: 'peta-mentaya',
    type: 'web',
    s: 'ide',
    collabWith: 'Kolaborasi Komunitas',
    id_content: {
      n: 'Peta Interaktif & Arsip Spasial Sungai Mentaya',
      d: 'Inisiatif pemetaan web ringan untuk mendokumentasikan titik sejarah, ekologi, dan kuliner lokal di sekitar aliran Sungai Mentaya.',
      notes:
        'Status Kolaborasi: Membuka kontribusi data lapangan, arsip foto lama, dan catatan sejarah dari rekan-rekan di Sampit dan Kalimantan Tengah.'
    },
    en_content: {
      n: 'Interactive Spatial Archive of the Mentaya River',
      d: 'Lightweight Web GIS initiative documenting historical points, local ecology, and culinary heritage along the Mentaya River.',
      notes:
        'Collaboration Status: Open for field data contributions, archival photography, and historical notes from researchers in Sampit and Central Kalimantan.'
    }
  },
  {
    id: 'omah-ijo',
    type: 'web',
    s: 'selesai',
    collabWith: 'Keluarga Bapak (Omah Ijo)',
    id_content: {
      n: 'Papan Katalog Panen & Masa Tunggu Hidroponik Omah Ijo',
      d: 'Sistem katalog web tanpa pustaka berat untuk menampilkan stok panen ready, estimasi hari tunggu panen, dan permintaan pasar.',
      notes:
        'Arsitektur: Memakai HTML/CSS/JS murni di bawah 25KB agar dapat dibuka instan oleh pembeli rumah tangga maupun pedagang pasar melalui jaringan seluler.'
    },
    en_content: {
      n: 'Omah Ijo Hydroponic Harvest & Countdown Board',
      d: 'Zero-dependency web catalog displaying ready harvest stock, days-to-harvest countdowns, and market booking forms.',
      notes:
        'Architecture: Pure HTML/CSS/JS under 25KB for instant loading on mobile networks by local buyers and market vendors.'
    }
  },
  {
    id: 'identitas-dapur',
    type: 'desain',
    s: 'selesai',
    collabWith: 'dalam.dapur (Katalog Ibu)',
    id_content: {
      n: 'Katalog Digital & Sistem Kategori Olahan Masakan Ibu',
      d: 'Pengorganisasian katalog produk masakan rumahan (makanan berat, roti, kue basah, kue kering, minuman, frozen food) dengan alur request pesanan.',
      notes:
        'Pendekatan: Merancang struktur data menu yang mudah diperbarui sewaktu-waktu sesuai ketersediaan masakan di dapur Ibu.'
    },
    en_content: {
      n: 'Digital Catalog & Category System for dalam.dapur',
      d: 'Structuring home culinary categories (meals, breads, cakes, pastries, drinks, frozen food) with custom order formatting.',
      notes:
        'Approach: Designed a clean menu data schema that adapts easily to seasonal and made-to-order kitchen production.'
    }
  }
];

const KNOWLEDGE_NOTES = [
  {
    id: 'note-web-berkelanjutan',
    tagId: 'Rekayasa Web Berkelanjutan',
    tagEn: 'Sustainable Web Engineering',
    titleId: 'Membangun Aplikasi Web Berdaya Rendah untuk Usaha & Komunitas Lokal',
    titleEn: 'Building Low-Overhead Web Applications for Local Communities',
    summaryId: 'Mengapa menghindari ketergantungan framework berlapis membuat sistem lebih awet, cepat diakses di jaringan daerah, dan bebas biaya perawatan bulanan.',
    summaryEn: 'Why avoiding heavy framework stacks makes local systems faster on regional networks and free from recurring maintenance overhead.',
    bodyId:
      'Dalam banyak kasus di lapangan, usaha keluarga atau komunitas lokal tidak membutuhkan arsitektur mikroservis yang rumit. Dengan memanfaatkan standar HTML semantik, CSS modern, dan penyimpanan JSON terstruktur, sebuah katalog atau alat hitung teknis dapat bertahan bertahun-tahun tanpa rusak akibat pembaruan pustaka pihak ketiga.'
  },
  {
    id: 'note-cv-lapangan',
    tagId: 'Visi Komputer Terapan',
    tagEn: 'Applied Computer Vision',
    titleId: 'Pra-Pemrosesan Citra Klasik Sebelum Inferensi Model AI',
    titleEn: 'Classical Image Preprocessing Before AI Model Inference',
    summaryId: 'Teknik normalisasi pencahayaan dan ruang warna HSV untuk menjaga akurasi deteksi objek di luar ruangan tanpa menambah ukuran model.',
    summaryEn: 'Illumination normalization and HSV color-space techniques to maintain outdoor detection accuracy without inflating model size.',
    bodyId:
      'Saat mengambil gambar daun hidroponik atau objek di atas permukaan air, intensitas cahaya matahari berubah setiap jam. Konversi citra dari RGB ke HSV atau LAB memungkinkan kita memisahkan kanal luminansi dari informasi warna murni, sehingga model tetap konsisten mengenali kondisi tanaman.'
  },
  {
    id: 'note-kolaborasi-terbuka',
    tagId: 'Metodologi Riset',
    tagEn: 'Research Methodology',
    titleId: 'Menghubungkan Disiplin IT dengan Masalah Nyata Sehari-hari',
    titleEn: 'Bridging IT Disciplines with Everyday Practical Challenges',
    summaryId: 'Bagaimana eksperimen kecil di rumah, seperti kebun hidroponik dan dapur keluarga, menjadi laboratorium nyata untuk menguji keilmuan IT.',
    summaryEn: 'How family initiatives like hydroponic farming and home kitchens serve as real-world laboratories for applied IT.',
    bodyId:
      'Keilmuan teknologi informasi paling terasa manfaatnya ketika bersentuhan langsung dengan kegiatan nyata: membantu menghitung masa panen sayuran Bapak di Omah Ijo, menyusun sistem pesanan masakan Ibu di dalam.dapur, hingga memetakan pengetahuan lokal bersama rekan komunitas.'
  }
];

const COLLAB_TOPICS = [
  {
    id_content: {
      title: 'Pemetaan & Arsip Digital Komunitas Kalimantan Tengah',
      desc: 'Mendokumentasikan titik sejarah, ekologi sungai, dan literasi lokal dalam bentuk web interaktif yang terbuka untuk publik.',
      lookingFor: ['Penulis & Peneliti Lokal', 'Fotografer Dokumentasi', 'Kontributor Data']
    },
    en_content: {
      title: 'Central Kalimantan Community Digital Mapping & Archive',
      desc: 'Documenting historical landmarks, river ecology, and local literacy into an open interactive web archive.',
      lookingFor: ['Local Researchers & Writers', 'Documentary Photographers', 'Data Contributors']
    }
  },
  {
    id_content: {
      title: 'Eksperimen AI & Sensor Tepat Guna untuk Pertanian Rumahan',
      desc: 'Mengembangkan model deteksi kesehatan tanaman dan pemantauan nutrisi air hidroponik berbiaya terjangkau.',
      lookingFor: ['Pegiat Agrikultur / Hidroponik', 'Rekan Eksperimen IoT & Python']
    },
    en_content: {
      title: 'Applied AI & Low-Cost Sensing for Home Agriculture',
      desc: 'Developing plant health detection models and affordable nutrient monitoring tools for small-scale hydroponics.',
      lookingFor: ['Hydroponic Growers', 'IoT & Python Collaborators']
    }
  },
  {
    id_content: {
      title: 'Berbagi Modul & Catatan Pembelajaran IT Terapan',
      desc: 'Menyusun panduan praktis pengembangan web ringan, desain antarmuka bebas slop, dan dasar visi komputer.',
      lookingFor: ['Mahasiswa IT / Desain', 'Komunitas Belajar Bersama']
    },
    en_content: {
      title: 'Open Applied IT Learning Modules & Field Notes',
      desc: 'Co-authoring practical guides on lightweight web engineering, purposeful UI design, and computer vision fundamentals.',
      lookingFor: ['IT & Design Students', 'Study Communities']
    }
  }
];

const t = (key) => I18N[currentLang][key] || key;

function setTheme(mode) {
  document.documentElement.dataset.theme = mode;
  localStorage.setItem('mentaya_theme', mode);
}

setTheme(localStorage.getItem('mentaya_theme') || 'light');

window.toggleTheme = () => {
  const isDark = document.documentElement.dataset.theme === 'dark';
  setTheme(isDark ? 'light' : 'dark');
};

window.toggleLang = () => {
  currentLang = currentLang === 'id' ? 'en' : 'id';
  localStorage.setItem('mentaya_lang', currentLang);
  renderAll();
};

function renderFilters() {
  const bar = document.getElementById('filterBar');
  if (!bar) return;
  const filters = [
    ['semua', t('filterAll')],
    ['cv', t('filterCv')],
    ['web', t('filterWeb')],
    ['desain', t('filterDesain')]
  ];
  bar.innerHTML = filters
    .map(
      ([k, label]) =>
        `<button type="button" class="f-chip ${activeFilter === k ? 'on' : ''}" onclick="setFilter('${k}')">${label}</button>`
    )
    .join('');
}

window.setFilter = (f) => {
  activeFilter = f;
  renderFilters();
  renderProjects();
};

function statusLabel(s) {
  if (s === 'selesai') return t('statusDone');
  if (s === 'jalan') return t('statusActive');
  return t('statusIdea');
}

function typeLabel(type) {
  if (type === 'cv') return t('filterCv');
  if (type === 'web') return t('filterWeb');
  return t('filterDesain');
}

function renderProjects() {
  const container = document.getElementById('projectLedger');
  if (!container) return;

  const list = PROJECTS.filter((p) => activeFilter === 'semua' || p.type === activeFilter);
  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>${t('emptyFilter')}</p>
        <button type="button" class="btn btn-outline" onclick="setFilter('semua')">${t('resetFilter')}</button>
      </div>
    `;
    return;
  }

  container.innerHTML = list
    .map((p) => {
      const content = currentLang === 'en' ? p.en_content : p.id_content;
      return `
        <button type="button" class="sby-event-card" onclick="openProjectModal('${p.id}', this)">
          <div class="sby-card-banner">
            <span class="p-tag">${typeLabel(p.type)}</span>
            <span class="p-status ${p.s}">${statusLabel(p.s)}</span>
          </div>
          <div class="sby-card-content">
            <h3>${content.n}</h3>
            <p>${content.d}</p>
          </div>
          <div class="sby-card-foot">
            <span>${p.collabWith || 'MentayaSandbox'}</span>
            <strong>${t('readDetail')}</strong>
          </div>
        </button>
      `;
    })
    .join('');
}

function renderNotes() {
  const container = document.getElementById('notesGrid');
  if (!container) return;

  container.innerHTML = KNOWLEDGE_NOTES.map((n) => {
    const tag = currentLang === 'en' ? n.tagEn : n.tagId;
    const title = currentLang === 'en' ? n.titleEn : n.titleId;
    const summary = currentLang === 'en' ? n.summaryEn : n.summaryId;
    return `
      <button type="button" class="sby-article-card" onclick="openNoteModal('${n.id}', this)">
        <div>
          <div class="article-tag">${tag}</div>
          <h3>${title}</h3>
          <p>${summary}</p>
        </div>
        <span class="article-read-more">${t('readNote')}</span>
      </button>
    `;
  }).join('');
}

function renderCollab() {
  const container = document.getElementById('collabList');
  if (!container) return;

  container.innerHTML = COLLAB_TOPICS.map((item) => {
    const c = currentLang === 'en' ? item.en_content : item.id_content;
    return `
      <div class="collab-item">
        <h4>${c.title}</h4>
        <p>${c.desc}</p>
        <div class="collab-tags">
          ${c.lookingFor.map((role) => `<span class="collab-pill">${role}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');
}

window.openProjectModal = (id, triggerEl) => {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return;
  lastFocusedElement = triggerEl || document.activeElement;
  const c = currentLang === 'en' ? p.en_content : p.id_content;

  document.getElementById('mType').textContent = `${typeLabel(p.type)} · ${statusLabel(p.s)}`;
  document.getElementById('mTitle').textContent = c.n;
  document.getElementById('mDesc').textContent = c.d;

  const collabEl = document.getElementById('mCollab');
  if (p.collabWith) {
    collabEl.style.display = 'block';
    collabEl.textContent = t('partnerPrefix') + p.collabWith;
  } else {
    collabEl.style.display = 'none';
  }

  document.getElementById('mNotes').textContent = c.notes;
  const modal = document.getElementById('modal');
  modal.classList.add('on');
  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) closeBtn.focus();
};

window.openNoteModal = (id, triggerEl) => {
  const n = KNOWLEDGE_NOTES.find((x) => x.id === id);
  if (!n) return;
  lastFocusedElement = triggerEl || document.activeElement;

  document.getElementById('mType').textContent = currentLang === 'en' ? n.tagEn : n.tagId;
  document.getElementById('mTitle').textContent = currentLang === 'en' ? n.titleEn : n.titleId;
  document.getElementById('mDesc').textContent = currentLang === 'en' ? n.summaryEn : n.summaryId;
  document.getElementById('mCollab').style.display = 'none';
  document.getElementById('mNotes').textContent = n.bodyId;

  const modal = document.getElementById('modal');
  modal.classList.add('on');
  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) closeBtn.focus();
};

window.closeModal = () => {
  const modal = document.getElementById('modal');
  if (!modal) return;
  modal.classList.remove('on');
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
};

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

window.submitCollabForm = (e) => {
  e.preventDefault();
  const name = document.getElementById('cName').value.trim();
  const mode = document.getElementById('cMode').value;
  const msg = document.getElementById('cMsg').value.trim();
  if (!name || !msg) return;

  const fb = document.getElementById('formFeedback');
  if (fb) {
    fb.hidden = false;
    fb.textContent = t('feedbackWa');
  }

  const text = `Halo Adies (MentayaSandbox), saya ${name}.\nTopik: ${mode}\n\nGagasan/Pesan:\n${msg}`;
  const url = `https://wa.me/${WA_CONTACT}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

window.sendCollabEmail = () => {
  const name = document.getElementById('cName').value.trim() || 'Rekan Kolaborasi';
  const mode = document.getElementById('cMode').value;
  const msg = document.getElementById('cMsg').value.trim() || 'Ingin berdiskusi mengenai riset/kolaborasi di MentayaSandbox.';

  const fb = document.getElementById('formFeedback');
  if (fb) {
    fb.hidden = false;
    fb.textContent = t('feedbackEmail');
  }

  const subject = `[MentayaSandbox] ${mode} - ${name}`;
  const body = `Halo Adies,\n\nNama/Instansi: ${name}\nJenis Diskusi: ${mode}\n\nPesan:\n${msg}`;
  window.location.href = `mailto:${EMAIL_CONTACT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

function renderAll() {
  document.documentElement.lang = currentLang;
  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.textContent = currentLang.toUpperCase();

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (I18N[currentLang][key]) {
      el.innerHTML = I18N[currentLang][key];
    }
  });

  renderFilters();
  renderProjects();
  renderNotes();
  renderCollab();
}

renderAll();
