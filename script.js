const state = {
  lang: localStorage.getItem('cahyadies_lang') || 'id',
  theme: localStorage.getItem('cahyadies_theme') || 'dark',
  workFilter: 'all',
  workSlide: 0
};

const DATA = {
  ecosystem: [
    {
      code: {
        id: '01 / KEILMUAN IT & RISET TERAPAN',
        en: '01 / IT SCIENCE & APPLIED RESEARCH'
      },
      name: 'MentayaSandbox',
      desc: {
        id: 'Wadah ekspresi, kolaborasi terbuka, dan dokumentasi keilmuan teknologi informasi berkelanjutan: mencakup eksperimen computer vision, arsitektur web hemat sumber daya, serta catatan teknis.',
        en: 'A space for expression, open collaboration, and sustainable IT research documentation covering computer vision experiments, low-overhead web architecture, and technical notes.'
      },
      href: 'https://mentayasandbox.vercel.app/',
      cta: { id: 'Buka MentayaSandbox', en: 'Open MentayaSandbox' }
    },
    {
      code: {
        id: '02 / KATALOG OLAHAN DAPUR IBU',
        en: "02 / MOTHER'S CULINARY CATALOG"
      },
      name: 'dalam.dapur',
      desc: {
        id: 'Katalog digital yang menghimpun seluruh hasil olahan masakan Ibu di Sampit: mulai dari makanan berat seperti nasi bakar dan mie ayam, aneka roti lembut, kue basah, kue kering, hingga frozen food.',
        en: 'Digital catalog gathering Mother’s homemade culinary creations in Sampit: grilled rice, chicken noodles, soft bakery items, traditional cakes, dry pastries, and frozen food.'
      },
      href: 'https://dalamdapur.vercel.app/',
      cta: { id: 'Buka Katalog dalam.dapur', en: 'Open dalam.dapur Catalog' }
    },
    {
      code: {
        id: '03 / KEBUN HIDROPONIK KELUARGA BAPAK',
        en: "03 / FATHER'S HYDROPONIC GARDEN"
      },
      name: 'Omah Ijo',
      desc: {
        id: 'Katalog hasil perkebunan hidroponik punya Bapak yang dikelola keluarga: memantau sayur yang sedang ready siap petik, berapa lama masa tunggu hingga siap jual, serta layanan permintaan pasar.',
        en: 'Catalog for Father’s family-run hydroponic garden: tracking ready-to-harvest greens, countdown days until ready to sell, and custom market supply requests.'
      },
      href: 'https://omahijo.vercel.app/',
      cta: { id: 'Buka Katalog Omah Ijo', en: 'Open Omah Ijo Catalog' }
    }
  ],
  works: [
    {
      id: 'naraicoder',
      cat: 'design',
      catLabel: { id: 'Desain & Identitas', en: 'Design & Identity' },
      client: { id: 'NaraiCoder Kalimantan Tengah', en: 'NaraiCoder Central Kalimantan' },
      year: '2026',
      specCode: 'SPEC-ID / 01',
      deliverables: ['Telawang Grid', 'Responsive Logo', 'Brand Guideline'],
      thumb: 'assets/works/naraicoder-preview.png',
      title: {
        id: 'Redesign Logo & Sistem Identitas Visual NaraiCoder (PARDI)',
        en: 'NaraiCoder Logo Redesign & Visual Identity System (PARDI)'
      },
      summary: {
        id: 'Peremajaan identitas visual komunitas teknologi Kalimantan Tengah yang memadukan struktur perisai Dayak Telawang dengan notasi biner dan arsitektur logo responsif.',
        en: 'Visual identity refresh for Central Kalimantan’s tech community combining Dayak Telawang shield geometry with binary notation and responsive logo architecture.'
      },
      detail: {
        id: [
          'Proyek redesign identitas NaraiCoder berangkat dari kebutuhan menyatukan akar budaya lokal Kalimantan Tengah dengan presisi rekayasa perangkat lunak modern.',
          'Bentuk dasar menggunakan geometri perisai Telawang bersudut heksagonal yang dikombinasikan dengan simbol kurung kode serta logika biner 1 dan 0.',
          'Sistem logo dirancang dalam tiga skala responsif (Full Lockup, Compact Badge, dan Micro Favicon) agar tetap tajam mulai dari spanduk kegiatan hingga ukuran 16px pada antarmuka web.'
        ],
        en: [
          'The NaraiCoder identity redesign bridges Central Kalimantan cultural roots with modern software engineering precision.',
          'Its foundational geometry draws from the hexagonal Dayak Telawang shield combined with code brackets and binary 1/0 notation.',
          'The logo system scales across three responsive tiers (Full Lockup, Compact Badge, and Micro Favicon) for crisp legibility from event banners down to 16px web icons.'
        ]
      },
      gallery: [
        {
          src: 'assets/works/naraicoder-preview.png',
          cap: {
            id: 'Konsep geometri Telawang dan struktur huruf utama NaraiCoder',
            en: 'Telawang shield geometry concept and primary NaraiCoder wordmark'
          }
        },
        {
          src: 'assets/works/naraicoder-mockup-objects.jpg',
          cap: {
            id: 'Penerapan identitas visual pada berbagai media dan merchandise komunitas',
            en: 'Visual identity application across community media and merchandise'
          }
        },
        {
          src: 'assets/works/naraicoder-logo.svg',
          cap: {
            id: 'Eksplorasi simbol dan proporsi grid modular',
            en: 'Symbol exploration and modular grid proportions'
          }
        },
        {
          src: 'assets/works/naraicoder-responsive-system.jpg',
          cap: {
            id: 'Sistem arsitektur logo responsif lintas ukuran layar',
            en: 'Responsive logo architecture across screen sizes'
          }
        }
      ]
    },
    {
      id: 'cv-bottle-volume',
      cat: 'ai',
      catLabel: { id: 'Model AI & Riset', en: 'AI Models & Research' },
      client: { id: 'MentayaSandbox R&D', en: 'MentayaSandbox R&D' },
      year: '2026',
      specCode: 'CV-MOD / 02',
      deliverables: ['OpenCV Contour', 'Perspective Calibration', 'Python Pipeline'],
      thumb: 'assets/works/cv-bottle-volume.svg',
      title: {
        id: 'Estimasi Volume Objek Mengapung dengan Computer Vision',
        en: 'Floating Object Volume Estimation via Computer Vision'
      },
      summary: {
        id: 'Eksperimen visi komputer terapan untuk mengestimasi rasio volume botol dan objek mengapung dari citra kamera tunggal menggunakan deteksi kontur dan kalibrasi perspektif.',
        en: 'Applied computer vision experiment estimating submerged and floating object volume ratios from single-camera frames using contour detection and perspective calibration.'
      },
      detail: {
        id: [
          'Riset ini menguji bagaimana kamera standar dapat digunakan untuk memperkirakan volume cairan dan proporsi bagian benda yang terendam di permukaan air tanpa sensor kedalaman khusus.',
          'Pipeline pengolahan citra melakukan segmentasi batas air, ekstraksi siluet objek, lalu menghitung integral penampang silinder berdasarkan faktor kalibrasi jarak kamera.'
        ],
        en: [
          'This study explores how a standard camera can estimate liquid volume and submerged object ratios on water surfaces without specialized depth sensors.',
          'The image pipeline segments the waterline, extracts object silhouettes, and computes cylindrical cross-section integrals calibrated against camera distance.'
        ]
      },
      gallery: []
    },
    {
      id: 'dalamdapur-web',
      cat: 'web',
      catLabel: { id: 'Sistem Web', en: 'Web Systems' },
      client: { id: 'dalam.dapur (Keluarga Ibu)', en: "dalam.dapur (Mother's Kitchen)" },
      year: '2026',
      specCode: 'WEB-CAT / 03',
      deliverables: ['6 Culinary Categories', 'Live Order Drawer', 'WhatsApp Checkout'],
      thumb: 'dalamdapur/images/samosa.jpg',
      title: {
        id: 'Katalog Digital & Nota Pesanan Interaktif dalam.dapur',
        en: 'dalam.dapur Digital Catalog & Interactive Order Slip'
      },
      summary: {
        id: 'Perancangan katalog web bergaya toko bahan pangan segar untuk menghimpun masakan berat, roti, kue basah, kue kering, minuman, dan frozen food olahan Ibu.',
        en: 'Fresh-market inspired web catalog organizing Mother’s heavy meals, bakery items, wet cakes, dry pastries, drinks, and frozen food.'
      },
      detail: {
        id: [
          'Katalog dalam.dapur dirancang agar pelanggan keluarga dapat melihat ketersediaan menu harian, memilih jumlah porsi atau toples, dan langsung mengirim rekap nota pesanan ke WhatsApp Ibu.',
          'Tata letak mengadopsi struktur grocery store yang bersih dan terang sehingga foto samosa dan sajian dapur tampil menggugah selera.'
        ],
        en: [
          'The dalam.dapur catalog lets family customers browse daily availability, adjust portion quantities, and send structured order slips directly to Mother’s WhatsApp.',
          'Its bright grocery-store layout highlights homemade food photography clearly and appetizingly.'
        ]
      },
      gallery: [
        {
          src: 'dalamdapur/images/samosa.jpg',
          cap: {
            id: 'Samosa rempah buatan Ibu yang tersedia dalam varian siap santap maupun frozen pack',
            en: "Mother's spiced samosas available ready-to-eat or as frozen packs"
          }
        },
        {
          src: 'dalamdapur/images/roti manis.jpg',
          cap: {
            id: 'Roti manis panggang segar dari dapur Ibu',
            en: "Freshly baked sweet bread from Mother's kitchen"
          }
        }
      ]
    },
    {
      id: 'omahijo-board',
      cat: 'web',
      catLabel: { id: 'Sistem Web', en: 'Web Systems' },
      client: { id: 'Omah Ijo (Kebun Hidroponik Bapak)', en: "Omah Ijo (Father's Hydroponic Garden)" },
      year: '2026',
      specCode: 'AGR-SYS / 04',
      deliverables: ['HST Progress Tracker', 'Harvest Booking', 'Farmino UI'],
      thumb: 'assets/works/omahijo-board.svg',
      title: {
        id: 'Katalog Kebun Hidroponik & Estimasi Masa Tunggu Omah Ijo',
        en: 'Omah Ijo Hydroponic Garden Catalog & Harvest Countdown'
      },
      summary: {
        id: 'Aplikasi katalog kebun hidroponik Bapak yang menampilkan indikator Hari Setelah Tanam (HST), status sayur siap jual, serta pemesanan pasokan pasar.',
        en: 'Catalog web app for Father’s hydroponic garden displaying Days After Planting (HST) progress, ready-to-sell greens, and market supply booking.'
      },
      detail: {
        id: [
          'Omah Ijo memecahkan masalah komunikasi stok panen antara kebun rumahan Bapak dengan pelanggan rumah tangga maupun warung makan di Sampit.',
          'Setiap komoditas menampilkan usia tanam aktual dan estimasi hari tunggu hingga siap dipetik beserta akarnya.'
        ],
        en: [
          'Omah Ijo solves harvest stock communication between Father’s home hydroponic tables and household or culinary buyers in Sampit.',
          'Each crop displays its exact planting age and estimated countdown days until ready to harvest with fresh roots.'
        ]
      },
      gallery: []
    },
    {
      id: 'shuttle-gerigi-its',
      cat: 'design',
      catLabel: { id: 'Desain & Identitas', en: 'Design & Identity' },
      client: { id: 'GERIGI ITS Surabaya', en: 'GERIGI ITS Surabaya' },
      year: '2025',
      specCode: 'WAY-ID / 05',
      deliverables: ['Route Signage', 'Vehicle Identification', 'Event Wayfinding'],
      thumb: 'assets/works/shuttle-gerigi-its.svg',
      title: {
        id: 'Identitas Visual & Sistem Wayfinding Shuttle GERIGI ITS',
        en: 'Shuttle GERIGI ITS Visual Identity & Wayfinding System'
      },
      summary: {
        id: 'Perancangan penanda rute, kode warna koridor transportasi, dan identitas armada shuttle mahasiswa baru di lingkungan kampus ITS Surabaya.',
        en: 'Route signage, corridor color coding, and shuttle fleet identification designed for new-student orientation across the ITS Surabaya campus.'
      },
      detail: {
        id: [
          'Membantu ribuan mahasiswa baru mengenali titik henti dan jalur armada shuttle kampus secara cepat melalui kontras tipografi tinggi dan kode ikonografi rute.'
        ],
        en: [
          'Helped thousands of incoming students identify campus shuttle stops and fleet routes quickly through high-contrast typography and route iconography.'
        ]
      },
      gallery: []
    },
    {
      id: 'dalamdapur-packaging',
      cat: 'design',
      catLabel: { id: 'Desain & Identitas', en: 'Design & Identity' },
      client: { id: 'dalam.dapur', en: 'dalam.dapur' },
      year: '2025',
      specCode: 'PKG-SYS / 06',
      deliverables: ['Jar Seal Labels', 'Frozen Pack Instructions', 'Typography System'],
      thumb: 'dalamdapur/images/rotisisir.jpg',
      title: {
        id: 'Sistem Label Kemasan & Segel Toples dalam.dapur',
        en: 'dalam.dapur Packaging Labels & Jar Seal System'
      },
      summary: {
        id: 'Desain label modular untuk kemasan frozen food, segel toples kue kering, dan kartu panduan pemanasan kembali agar produk dapur Ibu tampil rapi dan informatif.',
        en: 'Modular label design for frozen food packs, pastry jar seals, and reheating instruction cards for Mother’s kitchen products.'
      },
      detail: {
        id: [
          'Setiap label memuat informasi tanggal produksi, komposisi bahan utama, batas penyimpanan freezer, serta instruksi menggoreng atau memanggang ulang tanpa mengurangi kerenyahan.'
        ],
        en: [
          'Each label clearly lists production date, core ingredients, freezer shelf life, and reheating instructions.'
        ]
      },
      gallery: [
        {
          src: 'dalamdapur/images/rotisisir.jpg',
          cap: {
            id: 'Tampilan produk olahan dapur Ibu yang siap dikemas untuk pelanggan',
            en: "Mother's kitchen products ready to be packaged for customers"
          }
        }
      ]
    }
  ],
  posts: [
    {
      id: 'arsitektur-ekosistem-keluarga',
      date: { id: '14 Nov 2026', en: '14 Nov 2026' },
      readTime: { id: '4 mnt baca', en: '4 min read' },
      cat: { id: 'Arsitektur Web', en: 'Web Architecture' },
      title: {
        id: 'Merancang Ekosistem Web Keluarga Tanpa Ketergantungan Berlebih',
        en: 'Designing a Family Web Ecosystem with Zero Heavy Dependencies'
      },
      excerpt: {
        id: 'Mengapa cahyadies, MentayaSandbox, dalam.dapur, dan Omah Ijo dibangun menggunakan HTML, CSS, dan JavaScript murni agar ringan dirawat bertahun-tahun.',
        en: 'Why cahyadies, MentayaSandbox, dalam.dapur, and Omah Ijo are built with vanilla HTML, CSS, and JavaScript for long-term maintainability.'
      },
      body: {
        id: [
          'Ketika membangun sistem informasi untuk usaha keluarga seperti katalog masakan Ibu (dalam.dapur) dan kebun hidroponik Bapak (Omah Ijo), kecepatan buka halaman di perangkat seluler dan kemudahan pembaruan data jauh lebih penting daripada kerumitan kerangka kerja modern.',
          'Dengan memisahkan setiap unit ke dalam struktur direktori mandiri yang dihubungkan oleh cahyadies sebagai rumah induk, setiap website dapat memiliki karakter tata letak yang sesuai dengan fungsinya masing-masing tanpa saling membebani.'
        ],
        en: [
          'When building information systems for family initiatives like Mother’s kitchen catalog (dalam.dapur) and Father’s hydroponic garden (Omah Ijo), mobile speed and effortless maintenance matter far more than framework complexity.',
          'By separating each unit into self-contained directories linked from cahyadies as the parent hub, each site adopts a layout tailored to its exact domain.'
        ]
      }
    },
    {
      id: 'filosofi-telawang-naraicoder',
      date: { id: '02 Nov 2026', en: '02 Nov 2026' },
      readTime: { id: '5 mnt baca', en: '5 min read' },
      cat: { id: 'Desain Identitas', en: 'Identity Design' },
      title: {
        id: 'Menyatukan Geometri Perisai Telawang dan Logika Biner pada Logo NaraiCoder',
        en: 'Uniting Dayak Telawang Shield Geometry and Binary Logic in NaraiCoder'
      },
      excerpt: {
        id: 'Catatan di balik layar proses peremajaan identitas visual komunitas programmer Kalimantan Tengah agar tetap berakar pada budaya lokal.',
        en: 'Behind-the-scenes notes on refreshing Central Kalimantan’s developer community identity while staying rooted in local heritage.'
      },
      body: {
        id: [
          'Identitas visual komunitas teknologi daerah sering kali terjebak pada simbol generik seperti bola dunia atau ikon petir. Pada NaraiCoder, kami mengambil siluet perisai Telawang khas Dayak sebagai pelindung sekaligus wadah kolaborasi.',
          'Proporsi garis diatur mengikuti grid geometris sehingga bentuk perisai sekaligus membentuk kurung siku kode pemrograman dan angka biner 1-0.'
        ],
        en: [
          'Regional tech community identities often fall into generic tropes. For NaraiCoder, we drew from the traditional Dayak Telawang shield as a symbol of protection and shared growth.',
          'Line proportions follow a strict geometric grid so the shield simultaneously forms code brackets and binary 1-0 notation.'
        ]
      }
    },
    {
      id: 'visi-komputer-kebun-hidroponik',
      date: { id: '19 Okt 2026', en: '19 Oct 2026' },
      readTime: { id: '6 mnt baca', en: '6 min read' },
      cat: { id: 'AI & Riset Terapan', en: 'AI & Applied Research' },
      title: {
        id: 'Penerapan Computer Vision Sederhana untuk Pemantauan Usia Panen Hidroponik',
        en: 'Applying Lightweight Computer Vision for Hydroponic Harvest Monitoring'
      },
      excerpt: {
        id: 'Eksperimen menghubungkan disiplin ilmu IT di MentayaSandbox dengan kebutuhan praktis meja tanam hidroponik Bapak di Omah Ijo.',
        en: 'Connecting applied IT research in MentayaSandbox with practical harvest tracking on Father’s hydroponic tables at Omah Ijo.'
      },
      body: {
        id: [
          'Di Omah Ijo, pelanggan sering menanyakan kapan batch selada atau pakcoy berikutnya siap dipetik. Selain mencatat Hari Setelah Tanam (HST) secara manual, kami menguji segmentasi area tajuk daun dari foto kamera ponsel untuk memprediksi kesiapan panen.',
          'Pendekatan ini membuktikan bahwa eksperimen AI tidak harus selalu berskala industri besar, tetapi bisa langsung memberi manfaat nyata di halaman rumah sendiri.'
        ],
        en: [
          'At Omah Ijo, buyers frequently ask when the next batch of lettuce or bok choy will be ready. Alongside manual Days After Planting (HST) logs, we tested leaf-canopy segmentation from phone photos to estimate harvest readiness.',
          'This shows applied AI does not need massive industrial scale to deliver real value right in a family backyard.'
        ]
      }
    }
  ]
};

function t(obj) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[state.lang] || obj.id || '';
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('cahyadies_theme', state.theme);
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
  renderNav();
}

function toggleLang() {
  state.lang = state.lang === 'id' ? 'en' : 'id';
  document.documentElement.lang = state.lang;
  localStorage.setItem('cahyadies_lang', state.lang);
  render({ keepScroll: true });
}

function renderNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const hash = location.hash.slice(1) || '/';
  const [page = ''] = hash.split('/').filter(Boolean);

  const labels = state.lang === 'id'
    ? { home: 'Beranda', eco: 'Ekosistem', works: 'Karya', blog: 'Catatan', contact: 'Kontak', follow: 'Terhubung' }
    : { home: 'Home', eco: 'Ecosystem', works: 'Works', blog: 'Journal', contact: 'Contact', follow: 'Follow' };

  const followEl = document.getElementById('railFollowLabel');
  if (followEl) followEl.textContent = labels.follow;

  const isHome = page === '' || page.startsWith('sec-');

  const themeIconSvg =
    state.theme === 'dark'
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>`;

  nav.innerHTML = `
    <div class="nav-links">
      <a class="nav-link ${isHome ? 'active' : ''}" href="#/">${labels.home}</a>
      <a class="nav-link" href="#sec-01">${labels.eco}</a>
      <a class="nav-link ${page === 'karya' ? 'active' : ''}" href="#/karya">${labels.works}</a>
      <a class="nav-link ${page === 'blog' ? 'active' : ''}" href="#/blog">${labels.blog}</a>
      <a class="nav-link ${page === 'kontak' ? 'active' : ''}" href="#/kontak">${labels.contact}</a>
    </div>
    <div class="nav-controls">
      <button type="button" class="ctrl-btn" id="langBtn" aria-label="Ganti bahasa">${state.lang === 'id' ? 'EN' : 'ID'}</button>
      <button type="button" class="ctrl-btn" id="themeBtn" aria-label="Ganti tema warna">${themeIconSvg}</button>
    </div>
  `;

  document.getElementById('langBtn')?.addEventListener('click', toggleLang);
  document.getElementById('themeBtn')?.addEventListener('click', toggleTheme);
}

function renderFooter() {
  const foot = document.getElementById('foot');
  if (!foot) return;

  foot.innerHTML = `
    <div class="mntn-footer-grid">
      <div class="mntn-footer-brand">
        <div>
          <a class="logo" href="#/">cahyadies<b>.</b></a>
          <p>${
            state.lang === 'id'
              ? 'Arsip galeri karya desain, rekayasa sistem web, eksperimen model AI, dan catatan pikiran yang menaungi ekosistem MentayaSandbox, dalam.dapur, serta Omah Ijo.'
              : 'Portfolio archive of design works, web systems, AI model experiments, and written thoughts anchoring MentayaSandbox, dalam.dapur, and Omah Ijo.'
          }</p>
        </div>
        <div class="mntn-footer-copy">Copyright 2026 cahyadies. - Surabaya.</div>
      </div>

      <div class="mntn-footer-col">
        <h4>${state.lang === 'id' ? 'Lebih Lanjut di Ekosistem' : 'More on Ecosystem'}</h4>
        <ul>
          <li><a href="https://mentayasandbox.vercel.app/">MentayaSandbox</a></li>
          <li><a href="https://dalamdapur.vercel.app/">dalam.dapur</a></li>
          <li><a href="https://omahijo.vercel.app/">Omah Ijo</a></li>
        </ul>
      </div>

      <div class="mntn-footer-col">
        <h4>${state.lang === 'id' ? 'Lebih Lanjut di cahyadies' : 'More on cahyadies'}</h4>
        <ul>
          <li><a href="#/karya">${state.lang === 'id' ? 'Arsip Karya & Proyek' : 'Works & Project Archive'}</a></li>
          <li><a href="#/blog">${state.lang === 'id' ? 'Catatan Pikiran (Blog)' : 'Thought Journal (Blog)'}</a></li>
          <li><a href="#/kontak">${state.lang === 'id' ? 'Diskusi & Kolaborasi' : 'Contact & Collaboration'}</a></li>
          <li><a href="https://github.com/cahyadies" target="_blank" rel="noopener noreferrer">GitHub (@cahyadies)</a></li>
        </ul>
      </div>
    </div>
  `;
}

function getWorkCardPos(idx, activeIdx, total) {
  if (idx === activeIdx) return 'active';
  const prevIdx = (activeIdx - 1 + total) % total;
  const nextIdx = (activeIdx + 1) % total;
  if (idx === prevIdx) return 'prev';
  if (idx === nextIdx) return 'next';
  return 'hidden';
}

function renderWorkFanPlaqueInner(idx) {
  const w = DATA.works[idx] || DATA.works[0];
  const numStr = String(idx + 1).padStart(2, '0');
  const totalStr = String(DATA.works.length).padStart(2, '0');
  return `
    <div class="work-fan-plaque-main">
      <span class="mntn-eco-kicker">${t(w.catLabel)} · ${t(w.client)}</span>
      <h3><a href="#/karya/${w.id}">${t(w.title)}</a></h3>
      <p>${t(w.summary)}</p>
    </div>
    <div class="work-fan-plaque-stat">
      <span class="work-fan-stat-label">${state.lang === 'id' ? 'Karya Pilihan' : 'Selected Work'}</span>
      <strong class="work-fan-stat-num">${numStr}<span>/${totalStr}</span></strong>
      <a class="work-fan-stat-link" href="#/karya/${w.id}">${
        state.lang === 'id' ? 'Buka Studi Kasus' : 'Open Case Study'
      }</a>
    </div>
  `;
}

function setWorkSlide(nextIndex) {
  const total = DATA.works.length;
  if (!total) return;
  state.workSlide = ((nextIndex % total) + total) % total;

  const stage = document.getElementById('workFanStage');
  if (stage) {
    stage.querySelectorAll('.work-fan-card').forEach((card) => {
      const idx = Number(card.getAttribute('data-index') || 0);
      const pos = getWorkCardPos(idx, state.workSlide, total);
      card.setAttribute('data-pos', pos);
      card.setAttribute('aria-hidden', pos === 'active' ? 'false' : 'true');
    });
  }

  const plaque = document.getElementById('workFanPlaque');
  if (plaque) {
    plaque.innerHTML = renderWorkFanPlaqueInner(state.workSlide);
  }

  document.querySelectorAll('.work-fan-dot').forEach((dot) => {
    const idx = Number(dot.getAttribute('data-slide-to') || 0);
    dot.classList.toggle('active', idx === state.workSlide);
  });
}

function homeView() {
  const totalWorks = DATA.works.length;
  const activeSlide = ((state.workSlide % totalWorks) + totalWorks) % totalWorks;

  return `
    <section class="mntn-hero" id="sec-start">
      <div class="wrap">
        <div class="mntn-hero-inner">
          <div class="mntn-kicker-line">${
            state.lang === 'id'
              ? 'Arsip Karya, Model AI & Catatan Pikiran'
              : 'Works Archive, AI Models & Thought Journal'
          }</div>
          <h1 class="mntn-hero-title">${
            state.lang === 'id'
              ? 'Arsip dari hal-hal yang saya buat, eksplorasi, dan pelajari.'
              : "An archive of things I've made, explored, and learned."
          }</h1>
          <p class="mntn-hero-lead">${
            state.lang === 'id'
              ? 'Catatan dan arsip karya seputar desain, website, dan proyek mandiri berbasis di Surabaya.'
              : 'Notes and work archive covering design, websites, and independent projects based in Surabaya.'
          }</p>
          <a class="mntn-scroll-down" href="#sec-01">
            <span>${state.lang === 'id' ? 'gulir ke bawah' : 'scroll down'}</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>

    <section class="mntn-story-section" id="sec-01">
      <div class="wrap mntn-story-grid">
        <div class="mntn-story-text">
          <div class="mntn-watermark-num" aria-hidden="true">01</div>
          <div class="mntn-kicker-line">${
            state.lang === 'id' ? 'Tiga Website Anakan' : 'Three Sub-Websites'
          }</div>
          <h2 class="mntn-story-title">${
            state.lang === 'id'
              ? 'Satu rumah induk yang menaungi keilmuan IT, dapur Ibu, dan kebun Bapak.'
              : 'One parent archive anchoring IT research, Mother’s kitchen, and Father’s garden.'
          }</h2>
          <p class="mntn-story-desc">${
            state.lang === 'id'
              ? 'Di bawah payung cahyadies, tiga inisiatif berjalan beriringan sesuai perannya masing-masing: MentayaSandbox sebagai ruang ekspresi dan keilmuan IT berkelanjutan, dalam.dapur sebagai katalog olahan masakan serta kue buatan Ibu, dan Omah Ijo sebagai katalog panen kebun hidroponik yang dikelola Bapak bersama keluarga.'
              : 'Under the cahyadies umbrella, three initiatives run side by side: MentayaSandbox as a space for sustainable IT knowledge and collaboration, dalam.dapur as Mother’s homemade culinary catalog, and Omah Ijo as Father’s family-run hydroponic harvest catalog.'
          }</p>
          <a class="mntn-read-more" href="https://mentayasandbox.vercel.app/">${
            state.lang === 'id' ? 'jelajahi ekosistem' : 'explore ecosystem'
          }</a>
        </div>

        <div class="mntn-story-visual">
          <div class="mntn-portrait-frame">
            <div class="mntn-eco-list">
              ${DATA.ecosystem
                .map(
                  (unit) => `
                <a class="mntn-eco-item" href="${unit.href}">
                  <span class="mntn-eco-kicker">${t(unit.code)}</span>
                  <h3>${unit.name}</h3>
                  <p>${t(unit.desc)}</p>
                  <span class="mntn-eco-cta">${t(unit.cta)}</span>
                </a>
              `
                )
                .join('')}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mntn-story-section reverse" id="sec-02">
      <div class="wrap mntn-story-grid">
        <div class="mntn-story-text">
          <div class="mntn-watermark-num" aria-hidden="true">02</div>
          <div class="mntn-kicker-line">${
            state.lang === 'id' ? 'Arsip Karya & Eksperimen' : 'Works & Applied Experiments'
          }</div>
          <h2 class="mntn-story-title">${
            state.lang === 'id'
              ? 'Dokumentasi desain identitas, sistem web, dan model AI terapan.'
              : 'Documenting visual identity design, web systems, and applied AI models.'
          }</h2>
          <p class="mntn-story-desc">${
            state.lang === 'id'
              ? 'Kumpulan pekerjaan yang pernah digarap: mulai dari peremajaan identitas visual komunitas teknologi NaraiCoder berbasis perisai Dayak Telawang, eksperimen visi komputer penakar volume objek, hingga perancangan katalog digital usaha keluarga.'
              : 'Selected works spanning the NaraiCoder visual identity refresh rooted in Dayak Telawang shield geometry, computer vision volume estimation, and family catalog systems.'
          }</p>
          <a class="mntn-read-more" href="#/karya">${
            state.lang === 'id' ? 'lihat seluruh karya' : 'view all works'
          }</a>
        </div>

        <div class="mntn-story-visual">
          <div class="work-fan-carousel" aria-label="${
            state.lang === 'id' ? 'Galeri Geser Karya Pilihan' : 'Swipeable Selected Works Gallery'
          }">
            <div class="work-fan-stage" id="workFanStage">
              ${DATA.works
                .map((w, idx) => {
                  const pos = getWorkCardPos(idx, activeSlide, totalWorks);
                  return `
                <article
                  class="work-fan-card"
                  data-index="${idx}"
                  data-pos="${pos}"
                  data-id="${w.id}"
                  aria-hidden="${pos === 'active' ? 'false' : 'true'}"
                >
                  <img
                    class="work-fan-card-img"
                    src="${w.thumb}"
                    alt="${t(w.title)}"
                    draggable="false"
                    loading="lazy"
                  />
                  <div class="work-fan-card-tag">
                    <span>${w.specCode}</span>
                    <span>${w.year}</span>
                  </div>
                </article>
              `;
                })
                .join('')}
            </div>

            <div class="work-fan-plaque" id="workFanPlaque">
              ${renderWorkFanPlaqueInner(activeSlide)}
            </div>

            <div class="work-fan-controls">
              <button
                type="button"
                class="work-fan-nav-btn"
                id="workFanPrev"
                aria-label="${state.lang === 'id' ? 'Karya sebelumnya' : 'Previous work'}"
              >‹</button>
              <div class="work-fan-dots" role="tablist">
                ${DATA.works
                  .map(
                    (w, idx) => `
                  <button
                    type="button"
                    class="work-fan-dot ${idx === activeSlide ? 'active' : ''}"
                    data-slide-to="${idx}"
                    aria-label="${t(w.title)}"
                  ></button>
                `
                  )
                  .join('')}
              </div>
              <button
                type="button"
                class="work-fan-nav-btn"
                id="workFanNext"
                aria-label="${state.lang === 'id' ? 'Karya berikutnya' : 'Next work'}"
              >›</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mntn-story-section" id="sec-03">
      <div class="wrap mntn-story-grid">
        <div class="mntn-story-text">
          <div class="mntn-watermark-num" aria-hidden="true">03</div>
          <div class="mntn-kicker-line">${
            state.lang === 'id' ? 'Catatan Pikiran & Blog' : 'Thought Journal & Blog'
          }</div>
          <h2 class="mntn-story-title">${
            state.lang === 'id'
              ? 'Ruang mencatat gagasan rekayasa sistem, desain, dan teknologi membumi.'
              : 'Writing on systems engineering, visual design, and grounded technology.'
          }</h2>
          <p class="mntn-story-desc">${
            state.lang === 'id'
              ? 'Berisi esai singkat dan dokumentasi proses berpikir di balik pembuatan sistem katalog keluarga, eksplorasi tipografi dan simbol lokal Kalimantan Tengah, hingga penerapan visi komputer di kebun rumahan.'
              : 'Short essays and process notes behind building family catalog systems, exploring Central Kalimantan visual symbols, and testing computer vision in a home garden.'
          }</p>
          <a class="mntn-read-more" href="#/blog">${
            state.lang === 'id' ? 'baca semua tulisan' : 'read all entries'
          }</a>
        </div>

        <div class="mntn-story-visual">
          <div class="mntn-journal-list">
            ${DATA.posts
              .map(
                (p) => `
              <a class="mntn-journal-item" href="#/blog/${p.id}">
                <div class="mntn-journal-meta">
                  <span>${t(p.cat)}</span>
                  <span>/</span>
                  <span>${t(p.date)}</span>
                  <span>/</span>
                  <span>${t(p.readTime)}</span>
                </div>
                <h3>${t(p.title)}</h3>
                <p>${t(p.excerpt)}</p>
              </a>
            `
              )
              .join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

function worksView() {
  const filters = [
    { key: 'all', label: { id: 'Semua Karya (6)', en: 'All Works (6)' } },
    { key: 'design', label: { id: 'Desain & Logo', en: 'Design & Logo' } },
    { key: 'web', label: { id: 'Sistem Web', en: 'Web Systems' } },
    { key: 'ai', label: { id: 'Model AI & Riset', en: 'AI Models & Research' } }
  ];

  const list =
    state.workFilter === 'all'
      ? DATA.works
      : DATA.works.filter((w) => w.cat === state.workFilter);

  return `
    <section class="page-section">
      <div class="wrap">
        <div class="page-head">
          <div class="mntn-kicker-line">${
            state.lang === 'id' ? 'Indeks Portofolio' : 'Portfolio Index'
          }</div>
          <h1>${state.lang === 'id' ? 'Arsip Karya & Studi Kasus' : 'Works & Case Study Archive'}</h1>
          <p>${
            state.lang === 'id'
              ? 'Dokumentasi pekerjaan desain identitas visual, pengembangan aplikasi web katalog keluarga, serta eksperimen model kecerdasan buatan.'
              : 'Documentation of visual identity systems, family catalog web applications, and applied artificial intelligence experiments.'
          }</p>
        </div>

        <div class="filter-bar" role="tablist">
          ${filters
            .map(
              (f) => `
            <button type="button" class="filter-btn ${state.workFilter === f.key ? 'active' : ''}" data-filter="${f.key}">
              ${t(f.label)}
            </button>
          `
            )
            .join('')}
        </div>

        <div class="works-archive-grid">
          ${list
            .map(
              (w) => `
            <article class="work-arch-card">
              <div class="work-arch-thumb">
                ${
                  w.thumb
                    ? `<img src="${w.thumb}" alt="${t(w.title)}" loading="lazy" />`
                    : `
                  <div class="work-arch-spec">
                    <div class="work-arch-spec-top">
                      <span>${w.specCode}</span>
                      <span>${w.year}</span>
                    </div>
                    <div class="work-arch-spec-mid">${t(w.client)}</div>
                    <div class="work-arch-spec-bot">
                      ${w.deliverables.map((d) => `<span>${d}</span>`).join(' · ')}
                    </div>
                  </div>
                `
                }
              </div>
              <div class="work-arch-body">
                <div class="work-arch-meta">${t(w.catLabel)} · ${t(w.client)} · ${w.year}</div>
                <h3><a href="#/karya/${w.id}">${t(w.title)}</a></h3>
                <p>${t(w.summary)}</p>
                <div class="work-arch-foot">
                  <span>${w.specCode}</span>
                  <a href="#/karya/${w.id}">${
                    state.lang === 'id' ? 'Buka Studi Kasus' : 'Open Case Study'
                  }</a>
                </div>
              </div>
            </article>
          `
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

function workDetailView(id) {
  const item = DATA.works.find((w) => w.id === id);
  if (!item) return notFoundView();

  const paragraphs = t(item.detail) || [];

  return `
    <section class="page-section">
      <div class="wrap">
        <div class="detail-card">
          <a class="detail-back" href="#/karya">${
            state.lang === 'id' ? 'Kembali ke Arsip Karya' : 'Back to Works Archive'
          }</a>
          <div class="mntn-kicker-line">${t(item.catLabel)}</div>
          <h1 class="mntn-story-title">${t(item.title)}</h1>

          <div class="detail-meta-grid">
            <div>
              <span>${state.lang === 'id' ? 'Mitra / Unit' : 'Client / Unit'}</span>
              <strong>${t(item.client)}</strong>
            </div>
            <div>
              <span>${state.lang === 'id' ? 'Tahun' : 'Year'}</span>
              <strong>${item.year}</strong>
            </div>
            <div>
              <span>${state.lang === 'id' ? 'Kode Arsip' : 'Archive Code'}</span>
              <strong>${item.specCode}</strong>
            </div>
            <div>
              <span>${state.lang === 'id' ? 'Keluaran Utama' : 'Deliverables'}</span>
              <strong>${item.deliverables.join(', ')}</strong>
            </div>
          </div>

          <div class="article-prose">
            ${paragraphs.map((p) => `<p>${p}</p>`).join('')}
          </div>

          ${
            item.gallery && item.gallery.length
              ? `
            <div class="detail-gallery">
              ${item.gallery
                .map(
                  (g) => `
                <figure>
                  <img src="${g.src}" alt="${t(g.cap)}" loading="lazy" />
                  <figcaption>${t(g.cap)}</figcaption>
                </figure>
              `
                )
                .join('')}
            </div>
          `
              : ''
          }
        </div>
      </div>
    </section>
  `;
}

function blogView() {
  return `
    <section class="page-section">
      <div class="wrap">
        <div class="page-head">
          <div class="mntn-kicker-line">${
            state.lang === 'id' ? 'Jurnal & Dokumentasi' : 'Journal & Documentation'
          }</div>
          <h1>${state.lang === 'id' ? 'Catatan Pikiran' : 'Thought Journal'}</h1>
          <p>${
            state.lang === 'id'
              ? 'Tulisan seputar arsitektur web minimalis, perancangan identitas visual lokal, serta eksperimen teknologi terapan.'
              : 'Essays on minimalist web architecture, local visual identity design, and applied technology experiments.'
          }</p>
        </div>

        <div class="mntn-journal-list">
          ${DATA.posts
            .map(
              (p) => `
            <a class="mntn-journal-item" href="#/blog/${p.id}">
              <div class="mntn-journal-meta">
                <span>${t(p.cat)}</span>
                <span>/</span>
                <span>${t(p.date)}</span>
                <span>/</span>
                <span>${t(p.readTime)}</span>
              </div>
              <h3>${t(p.title)}</h3>
              <p>${t(p.excerpt)}</p>
            </a>
          `
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

function postDetailView(id) {
  const post = DATA.posts.find((p) => p.id === id);
  if (!post) return notFoundView();
  const paragraphs = t(post.body) || [];

  return `
    <section class="page-section">
      <div class="wrap">
        <div class="detail-card">
          <a class="detail-back" href="#/blog">${
            state.lang === 'id' ? 'Kembali ke Daftar Catatan' : 'Back to Journal List'
          }</a>
          <div class="mntn-journal-meta" style="margin-bottom:14px">
            <span>${t(post.cat)}</span>
            <span>/</span>
            <span>${t(post.date)}</span>
            <span>/</span>
            <span>${t(post.readTime)}</span>
          </div>
          <h1 class="mntn-story-title">${t(post.title)}</h1>
          <div class="article-prose" style="margin-top:24px">
            ${paragraphs.map((p) => `<p>${p}</p>`).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

function contactView() {
  return `
    <section class="page-section">
      <div class="wrap">
        <div class="page-head">
          <div class="mntn-kicker-line">${
            state.lang === 'id' ? 'Saluran Komunikasi' : 'Communication Channel'
          }</div>
          <h1>${state.lang === 'id' ? 'Terhubung & Berkolaborasi' : 'Connect & Collaborate'}</h1>
          <p>${
            state.lang === 'id'
              ? 'Terbuka untuk diskusi proyek pengembangan web, perancangan identitas visual, kolaborasi riset di MentayaSandbox, maupun pemesanan produk keluarga.'
              : 'Open for web development projects, visual identity design, research collaboration at MentayaSandbox, or family product inquiries.'
          }</p>
        </div>

        <div class="contact-grid">
          <div class="contact-panel">
            <h2 class="mntn-story-title" style="font-size:26px">${
              state.lang === 'id' ? 'Kontak Langsung' : 'Direct Contact'
            }</h2>
            <p style="color:var(--muted);font-size:15px">${
              state.lang === 'id'
                ? 'Pilih kanal komunikasi sesuai kebutuhan diskusi atau langsung kunjungi unit ekosistem terkait.'
                : 'Choose a channel based on your inquiry or visit the relevant ecosystem unit directly.'
            }</p>
            <div class="contact-list">
              <div class="contact-item">
                <span>${state.lang === 'id' ? 'Email Utama' : 'Primary Email'}</span>
                <strong>ekosugengcahyadi@gmail.com</strong>
              </div>
              <div class="contact-item">
                <span>${state.lang === 'id' ? 'GitHub & Eksperimen Kode' : 'GitHub & Code Experiments'}</span>
                <strong>github.com/cahyadies</strong>
              </div>
              <div class="contact-item">
                <span>${state.lang === 'id' ? 'Basis Domisili' : 'Base Location'}</span>
                <strong>Surabaya</strong>
              </div>
            </div>
          </div>

          <div class="contact-panel">
            <form id="contactForm">
              <div class="form-row">
                <label for="cName">${state.lang === 'id' ? 'Nama Lengkap' : 'Full Name'}</label>
                <input id="cName" name="name" type="text" required placeholder="${
                  state.lang === 'id' ? 'Masukkan nama Anda' : 'Enter your name'
                }" />
              </div>
              <div class="form-row">
                <label for="cTopic">${state.lang === 'id' ? 'Topik Keperluan' : 'Inquiry Topic'}</label>
                <select id="cTopic" name="topic">
                  <option value="Desain & Web cahyadies">${
                    state.lang === 'id'
                      ? 'Desain & Pengembangan Web (cahyadies)'
                      : 'Design & Web Development (cahyadies)'
                  }</option>
                  <option value="Kolaborasi Riset MentayaSandbox">${
                    state.lang === 'id'
                      ? 'Kolaborasi Riset IT (MentayaSandbox)'
                      : 'IT Research Collaboration (MentayaSandbox)'
                  }</option>
                  <option value="Pesanan Masakan dalam.dapur">${
                    state.lang === 'id'
                      ? 'Pesanan Kuliner Ibu (dalam.dapur)'
                      : "Mother's Culinary Inquiry (dalam.dapur)"
                  }</option>
                  <option value="Pasokan Sayur Omah Ijo">${
                    state.lang === 'id'
                      ? 'Pasokan Hidroponik Bapak (Omah Ijo)'
                      : "Father's Hydroponic Supply (Omah Ijo)"
                  }</option>
                </select>
              </div>
              <div class="form-row">
                <label for="cMsg">${state.lang === 'id' ? 'Pesan / Rincian Diskusi' : 'Message Details'}</label>
                <textarea id="cMsg" name="message" required placeholder="${
                  state.lang === 'id'
                    ? 'Tuliskan gambaran singkat proyek atau pertanyaan Anda...'
                    : 'Write a brief overview of your project or question...'
                }"></textarea>
              </div>
              <button type="submit" class="mntn-submit-btn">
                ${state.lang === 'id' ? 'Kirim Pesan via Email' : 'Send Message via Email'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

function notFoundView() {
  return `
    <section class="page-section">
      <div class="wrap">
        <div class="state-box">
          <h2>${state.lang === 'id' ? 'Halaman tidak ditemukan' : 'Page not found'}</h2>
          <p style="color:var(--muted);margin-bottom:20px">${
            state.lang === 'id'
              ? 'Tautan yang Anda tuju tidak tersedia di dalam arsip cahyadies.'
              : 'The requested route does not exist in the cahyadies archive.'
          }</p>
          <a class="mntn-read-more" href="#/">${
            state.lang === 'id' ? 'Kembali ke Beranda' : 'Return Home'
          }</a>
        </div>
      </div>
    </section>
  `;
}

function updateSliderVisibility(isHome) {
  const slider = document.getElementById('mntnSlider');
  if (!slider) return;
  slider.style.display = isHome && window.innerWidth >= 1200 ? 'flex' : 'none';
}

function syncSliderOnScroll() {
  const slider = document.getElementById('mntnSlider');
  if (!slider) return;
  const sections = ['sec-start', 'sec-01', 'sec-02', 'sec-03'];
  let activeIndex = 0;
  const triggerLine = window.innerHeight * 0.45;

  sections.forEach((id, idx) => {
    const el = document.getElementById(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top <= triggerLine) {
      activeIndex = idx;
    }
  });

  slider.style.setProperty('--active-step', String(activeIndex));
  const activeId = sections[activeIndex];

  slider.querySelectorAll('a').forEach((link) => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === `#${activeId}`);
  });
}

function bindEvents() {
  document.querySelectorAll('[data-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.workFilter = btn.getAttribute('data-filter') || 'all';
      render({ keepScroll: true });
    });
  });

  const fanStage = document.getElementById('workFanStage');
  if (fanStage) {
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let isPointerDown = false;
    let hasSwiped = false;
    let wheelCooldown = false;

    fanStage.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      isPointerDown = true;
      hasSwiped = false;
      startX = e.clientX;
      startY = e.clientY;
      currentX = e.clientX;
      fanStage.classList.add('is-dragging');
    });

    fanStage.addEventListener('pointermove', (e) => {
      if (!isPointerDown) return;
      currentX = e.clientX;
      const dx = currentX - startX;
      const dy = e.clientY - startY;
      if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) {
        if (!hasSwiped) {
          hasSwiped = true;
          try {
            fanStage.setPointerCapture(e.pointerId);
          } catch (_) {}
        }
        fanStage.style.setProperty('--drag-x', `${Math.max(-90, Math.min(90, dx * 0.42))}px`);
        fanStage.style.setProperty('--drag-rot', `${Math.max(-6, Math.min(6, dx * 0.03))}deg`);
      }
    });

    const finishDrag = (e) => {
      if (!isPointerDown) return;
      isPointerDown = false;
      const dx = currentX - startX;
      fanStage.classList.remove('is-dragging');
      fanStage.style.setProperty('--drag-x', '0px');
      fanStage.style.setProperty('--drag-rot', '0deg');
      if (hasSwiped) {
        try {
          if (e && e.pointerId !== undefined && fanStage.hasPointerCapture(e.pointerId)) {
            fanStage.releasePointerCapture(e.pointerId);
          }
        } catch (_) {}
        if (dx <= -42) {
          setWorkSlide(state.workSlide + 1);
        } else if (dx >= 42) {
          setWorkSlide(state.workSlide - 1);
        }
      }
    };

    fanStage.addEventListener('pointerup', finishDrag);
    fanStage.addEventListener('pointercancel', finishDrag);
    fanStage.addEventListener('pointerleave', (e) => {
      if (isPointerDown && !hasSwiped) {
        finishDrag(e);
      }
    });

    fanStage.querySelectorAll('.work-fan-card').forEach((card) => {
      card.addEventListener('click', (e) => {
        if (hasSwiped) {
          e.preventDefault();
          return;
        }
        const pos = card.getAttribute('data-pos');
        const id = card.getAttribute('data-id');
        if (pos === 'prev') {
          setWorkSlide(state.workSlide - 1);
        } else if (pos === 'next') {
          setWorkSlide(state.workSlide + 1);
        } else if (pos === 'active' && id) {
          location.hash = `#/karya/${id}`;
        }
      });
    });

    fanStage.addEventListener(
      'wheel',
      (e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 26) {
          e.preventDefault();
          if (wheelCooldown) return;
          wheelCooldown = true;
          if (e.deltaX > 0) {
            setWorkSlide(state.workSlide + 1);
          } else {
            setWorkSlide(state.workSlide - 1);
          }
          setTimeout(() => {
            wheelCooldown = false;
          }, 420);
        }
      },
      { passive: false }
    );
  }

  document.getElementById('workFanPrev')?.addEventListener('click', () => {
    setWorkSlide(state.workSlide - 1);
  });
  document.getElementById('workFanNext')?.addEventListener('click', () => {
    setWorkSlide(state.workSlide + 1);
  });
  document.querySelectorAll('.work-fan-dot').forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = Number(dot.getAttribute('data-slide-to') || 0);
      setWorkSlide(idx);
    });
  });

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cName')?.value || '';
      const topic = document.getElementById('cTopic')?.value || '';
      const msg = document.getElementById('cMsg')?.value || '';
      const subject = encodeURIComponent(`[cahyadies] ${topic} - ${name}`);
      const body = encodeURIComponent(`Halo Adies,\n\nNama: ${name}\nTopik: ${topic}\n\n${msg}`);
      window.location.href = `mailto:ekosugengcahyadi@gmail.com?subject=${subject}&body=${body}`;
    });
  }
}

function render(options = {}) {
  const keepScroll = Boolean(options && options.keepScroll);
  const savedScrollY = window.scrollY;
  applyTheme();
  const rawHash = location.hash.slice(1) || '/';
  const app = document.getElementById('app');
  if (!app) return;

  if (rawHash.startsWith('sec-')) {
    const targetEl = document.getElementById(rawHash);
    if (!targetEl || keepScroll) {
      app.innerHTML = homeView();
      bindEvents();
    }
    renderNav();
    renderFooter();
    updateSliderVisibility(true);
    requestAnimationFrame(() => {
      if (keepScroll) {
        window.scrollTo({ top: savedScrollY, behavior: 'auto' });
      } else {
        document.getElementById(rawHash)?.scrollIntoView({ behavior: 'smooth' });
      }
      syncSliderOnScroll();
    });
    return;
  }

  const [page = '', id] = rawHash.split('/').filter(Boolean);
  const isHome = page === '';

  if (page === '') {
    app.innerHTML = homeView();
  } else if (page === 'karya') {
    app.innerHTML = id ? workDetailView(id) : worksView();
  } else if (page === 'blog') {
    app.innerHTML = id ? postDetailView(id) : blogView();
  } else if (page === 'kontak') {
    app.innerHTML = contactView();
  } else {
    app.innerHTML = notFoundView();
  }

  renderNav();
  renderFooter();
  bindEvents();
  updateSliderVisibility(isHome);
  window.scrollTo({ top: keepScroll ? savedScrollY : 0, behavior: 'auto' });
  syncSliderOnScroll();
}

window.addEventListener('hashchange', render);
window.addEventListener('scroll', syncSliderOnScroll, { passive: true });
window.addEventListener('resize', () => {
  const rawHash = location.hash.slice(1) || '/';
  const [page = ''] = rawHash.split('/').filter(Boolean);
  updateSliderVisibility(page === '' || rawHash.startsWith('sec-'));
});

document.addEventListener('DOMContentLoaded', () => {
  const ham = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (ham && nav) {
    ham.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      ham.setAttribute('aria-expanded', String(open));
    });
  }
  render();
});
