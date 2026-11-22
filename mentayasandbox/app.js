const WA_NUMBER = '6282157058512';
const EMAIL_ADDR = 'ekosugengcahyadi@gmail.com';

let currentLang = localStorage.getItem('mentaya_lang') || 'id';
let currentFilter = 'semua';
let lastFocusEl = null;

const I18N = {
  id: {
    navWork: 'Riset & Karya',
    navProcess: 'Proses',
    navNotes: 'Dokumentasi',
    navStudio: 'Studio',
    navCta: 'Kontak',
    heroTitle: 'Dari Gagasan Keilmuan Menjadi Sistem Terapan',
    heroSubtitle:
      'MentayaSandbox merancang eksperimen computer vision, produk web hemat sumber daya, dan sistem terapan untuk riset akademik maupun inisiatif nyata. Diskusikan ide Anda, mari wujudkan bersama.',
    heroCta: 'Mulai Kolaborasi',
    overviewTitle:
      'Studio riset dan rekayasa untuk proyek yang butuh lebih dari sekadar template.',
    overviewP1:
      'Berangkat dari latar belakang Teknologi Informasi, MentayaSandbox dibangun oleh Adies sebagai wadah ekspresi, kolaborasi terbuka, dan berbagi keilmuan yang berkelanjutan di bawah ekosistem induk cahyadies.',
    overviewP2:
      'Kami menggabungkan eksperimen kecerdasan buatan terapan (seperti computer vision untuk agrikultur dan pengukuran objek) dengan arsitektur web murni yang cepat, mudah dipelihara, dan langsung memecahkan persoalan di lapangan.',
    overviewCta: 'Jelajahi Eksperimen MentayaSandbox',
    servicesTitle: 'Fokus Keilmuan & Layanan',
    servicesSub:
      'Empat ranah utama tempat kami bereksperimen, membangun sistem, dan berbagi dokumentasi teknis.',
    srv1Title: 'Produk & Sistem Web',
    srv1Desc:
      'Aplikasi web informasi, katalog digital interaktif, dan dashboard operasional yang ringan, responsif, serta tahan lama tanpa beban ketergantungan berlebih.',
    srv2Title: 'Computer Vision & AI Terapan',
    srv2Desc:
      'Pengolahan citra dan model machine learning ringan untuk estimasi volume objek, deteksi kesiapan panen hidroponik, serta otomasi pengamatan lapangan.',
    srv3Title: 'Desain Sistem & Identitas',
    srv3Desc:
      'Perancangan antarmuka berbasis fungsi, arsitektur informasi produk, serta sistem identitas visual modular yang berakar pada konteks lokal.',
    srv4Title: 'Riset Kolaboratif & Arsip Spasial',
    srv4Desc:
      'Pendampingan teknis riset mahasiswa/komunitas, pemetaan geospasial kawasan Sungai Mentaya, serta dokumentasi pengetahuan terbuka.',
    processTitle: 'Bagaimana kami bekerja.',
    processSub:
      'Tahapan terstruktur dari perumusan masalah hingga sistem berjalan dan terdokumentasi secara berkelanjutan.',
    step1Title: 'Observasi & Pemetaan Masalah',
    step1Desc:
      'Kami memulai dengan memahami konteks nyata di lapangan: apa kendala pengguna, bagaimana data dikumpulkan, serta perangkat apa yang benar-benar mereka gunakan sehari-hari.',
    step2Title: 'Arah Produk & Arsitektur',
    step2Desc:
      'Menentukan arsitektur paling tepat guna tanpa kerumitan yang tidak perlu, baik berupa aplikasi web statis berkinerja tinggi maupun pipeline pengolahan citra Python/OpenCV.',
    step3Title: 'Prototipe & Evaluasi Terukur',
    step3Desc:
      'Membangun sistem secara bertahap dan mengujinya langsung menggunakan data nyata: mulai dari citra daun di meja hidroponik Bapak hingga alur nota pesanan dapur Ibu.',
    step4Title: 'Rilis & Dokumentasi Berkelanjutan',
    step4Desc:
      'Setiap proyek dilengkapi catatan teknis yang jernih agar sistem mudah dirawat, dikembangkan ulang, dan memberi nilai belajar bagi kolaborator berikutnya.',
    workTitle: 'Karya & riset kami, untuk Anda jelajahi.',
    workSub:
      'Pilih kategori atau buka studi kasus dari eksperimen AI, sistem web, dan identitas visual di MentayaSandbox.',
    filterAll: 'Semua',
    filterCV: 'AI & Computer Vision',
    filterWeb: 'Web & Sistem',
    filterDesain: 'Desain Sistem',
    viewCase: 'Lihat Kasus',
    archiveTitle: 'Masih ada dokumentasi lain di arsip induk.',
    archiveSub: 'Lihat seluruh portofolio lintas disiplin di halaman utama cahyadies.',
    archiveCta: 'Buka Arsip cahyadies.',
    engageTitle: 'Mulai dari Nol atau Kembangkan yang Sudah Ada',
    engageSub:
      'Dua jalur kolaborasi utama sesuai tahap gagasan atau sistem yang sedang Anda kerjakan.',
    eng1Title: 'Bangun Produk atau Prototipe Riset dari Nol',
    eng1Desc:
      'Cocok ketika Anda memiliki hipotesis penelitian, ide produk digital, atau kebutuhan katalog usaha yang belum memiliki fondasi teknis.',
    eng1B1: 'Perumusan spesifikasi teknis, dataset, dan arsitektur antarmuka dari awal.',
    eng1B2: 'Pembuatan prototipe web atau model computer vision yang siap diuji coba.',
    eng1B3: 'Dokumentasi kode dan panduan penggunaan yang rapi untuk tim maupun publikasi.',
    eng2Title: 'Lanjutkan atau Tingkatkan Sistem yang Berjalan',
    eng2Desc:
      'Cocok untuk merombak antarmuka yang terasa kaku, meningkatkan performa halaman, atau menambahkan modul analitik dan otomasi baru.',
    eng2B1: 'Audit desain antarmuka, aksesibilitas, dan penyederhanaan kode sumber.',
    eng2B2: 'Integrasi fitur baru seperti kalkulator estimasi, pelacak metrik, atau otomasi WA.',
    eng2B3: 'Pendampingan teknis dan diskusi arsitektur agar sistem berkelanjutan.',
    scopeTitle: 'Cukup ringkas untuk mulai. Skema sesuai kebutuhan Anda.',
    scopeSub:
      'MentayaSandbox mendukung baik kolaborasi riset terbuka (non-komersial/keilmuan) maupun pengembangan sistem kustom untuk komunitas dan usaha.',
    thProject: 'Lingkup Proyek / Riset',
    thStandard: 'Skema Riset Terbuka',
    thCustom: 'Implementasi Kustom',
    tr1Name: 'Landing Page & Arsip Portofolio Digital',
    tr2Name: 'Katalog Produk Usaha & Nota Pesanan WA',
    tr3Name: 'Eksperimen Computer Vision & Pengolahan Citra',
    tr4Name: 'Sistem Pantau Agrikultur / Kalkulator Nutrisi',
    tr5Name: 'Identitas Visual & Sistem Desain Komunitas',
    tr6Name: 'Riset Spasial / Web GIS & Sistem Kustom Lainnya',
    tr6Free: 'Diskusi Terbuka',
    tr6Consult: 'Konsultasi Gratis',
    scopeCtaPrimary: 'Diskusikan Rencana Proyek',
    scopeCtaSecondary: 'Lihat Dokumentasi Teknis',
    notesTitle: 'Dokumentasi Teknis & Keilmuan',
    notesSub:
      'Dokumentasi arsitektur sistem, spesifikasi eksperimen, dan modul keilmuan terbuka di MentayaSandbox.',
    readNote: 'Buka Dokumentasi',
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqAskLink: 'Ajukan pertanyaan lain',
    faqQ1: 'Apa hubungan MentayaSandbox dengan website induk cahyadies?',
    faqA1:
      'cahyadies adalah arsip utama milik Adies, sedangkan MentayaSandbox adalah unit khusus yang berfokus pada ekspresi keilmuan IT berkelanjutan, riset computer vision, dan kolaborasi teknis. Dua saudara lainnya adalah dalam.dapur (kuliner Ibu) dan Omah Ijo (hidroponik Bapak).',
    faqQ2: 'Apakah mahasiswa atau pegiat komunitas bisa mengajak riset bersama?',
    faqA2:
      'Sangat terbuka. MentayaSandbox memang diniatkan sebagai ruang bertukar pikiran, eksperimen bersama, dan berbagi dokumentasi di bidang pengolahan citra, rekayasa web, serta pemetaan spasial.',
    faqQ3: 'Mengapa MentayaSandbox menekankan prinsip keilmuan IT yang berkelanjutan?',
    faqA3:
      'Banyak proyek perangkat lunak berhenti berfungsi setelah beberapa bulan karena arsitektur yang terlalu rumit. Kami mengutamakan kode yang bersih, hemat sumber daya, dan terdokumentasi sehingga tetap bermanfaat jangka panjang.',
    faqQ4: 'Bagaimana cara memulai diskusi proyek atau eksperimen baru?',
    faqA4:
      'Anda cukup mengisi formulir singkat di bagian bawah halaman ini untuk mengirim rincian gagasan melalui WhatsApp atau Email. Kami akan meninjau konteks masalah dan menyusun langkah awalnya bersama.',
    ctaBannerTitle: 'Siap Mendiskusikan Ide atau Riset Anda?',
    ctaBannerSub:
      'Sampaikan gagasan produk web, eksperimen computer vision, atau topik keilmuan yang ingin Anda kerjakan bersama MentayaSandbox.',
    openTopicsHeading: 'Topik Kolaborasi Terbuka Saat Ini',
    labelName: 'Nama Anda',
    labelTopic: 'Fokus Diskusi',
    optTopic1: 'Computer Vision & Model AI',
    optTopic2: 'Pengembangan Produk & Sistem Web',
    optTopic3: 'Arsip Spasial & Pemetaan Mentaya',
    optTopic4: 'Riset & Berbagi Keilmuan',
    labelNote: 'Ringkasan Gagasan / Masalah',
    btnSendWa: 'Diskusi via WhatsApp',
    btnSendMail: 'Kirim via Email',
    footerBio:
      'Studio eksplorasi keilmuan IT berkelanjutan, riset computer vision terapan, dan rekayasa produk web di bawah ekosistem cahyadies.',
    footerNavLabel: 'Navigasi',
    footerServices: 'Fokus Keilmuan',
    footerEcoLabel: 'Ekosistem & Jejaring'
  },
  en: {
    navWork: 'Work & Research',
    navProcess: 'Process',
    navNotes: 'Docs',
    navStudio: 'Studio',
    navCta: 'Contact',
    heroTitle: 'From Scientific Idea to Working Applied System',
    heroSubtitle:
      'MentayaSandbox designs computer vision experiments, low-overhead web products, and applied systems for academic research and growing initiatives. Discuss your idea with us to bring it to life.',
    heroCta: 'Start Collaboration',
    overviewTitle:
      'A research and engineering studio for projects that need more than a template.',
    overviewP1:
      'Rooted in an Information Technology background, MentayaSandbox was built by Adies as a space for expression, open collaboration, and sustainable knowledge sharing under the cahyadies ecosystem.',
    overviewP2:
      'We combine applied artificial intelligence experiments (such as computer vision for agriculture and object measurement) with fast, maintainable web architecture that solves real field problems.',
    overviewCta: 'Explore MentayaSandbox Experiments',
    servicesTitle: 'Core Domains & Services',
    servicesSub:
      'Four primary domains where we experiment, engineer working systems, and publish technical notes.',
    srv1Title: 'Web Products & Systems',
    srv1Desc:
      'Fast information web apps, interactive digital catalogs, and operational dashboards engineered for long-term maintainability.',
    srv2Title: 'Computer Vision & Applied AI',
    srv2Desc:
      'Lightweight image processing and machine learning models for object volume estimation, hydroponic harvest detection, and field automation.',
    srv3Title: 'System & Identity Design',
    srv3Desc:
      'Function-first interface design, product information architecture, and modular visual identity systems rooted in local context.',
    srv4Title: 'Collaborative Research & Spatial Archives',
    srv4Desc:
      'Technical mentorship for student/community research, geospatial mapping of the Mentaya River basin, and open knowledge documentation.',
    processTitle: 'How we actually work.',
    processSub:
      'A clear progression from field observation to a working, sustainably documented system.',
    step1Title: 'Discovery & Problem Mapping',
    step1Desc:
      'We begin by understanding real field constraints: user bottlenecks, how data is captured, and the actual devices people rely on daily.',
    step2Title: 'Product Direction & Architecture',
    step2Desc:
      'Selecting the right-sized architecture without unnecessary bloat, whether a high-speed static web system or a Python/OpenCV vision pipeline.',
    step3Title: 'Build & Field Evaluation',
    step3Desc:
      'Building iteratively and testing directly against real data: from lettuce canopy frames at Omah Ijo to order slip workflows at dalam.dapur.',
    step4Title: 'Launch & Sustainable Documentation',
    step4Desc:
      'Every project ships with clear technical notes so the system remains easy to maintain, extend, and learn from.',
    workTitle: 'Our work, for you to explore.',
    workSub:
      'Filter or inspect case studies across applied AI experiments, web systems, and visual identity design.',
    filterAll: 'All',
    filterCV: 'AI & Computer Vision',
    filterWeb: 'Web & Systems',
    filterDesain: 'System Design',
    viewCase: 'View Case',
    archiveTitle: 'There is more work in the parent archive.',
    archiveSub: 'Browse the complete cross-disciplinary portfolio on the main cahyadies hub.',
    archiveCta: 'Explore cahyadies.',
    engageTitle: 'Starting From Scratch or Upgrading What Exists',
    engageSub:
      'Two collaboration tracks tailored to the stage of your research hypothesis or digital product.',
    eng1Title: 'Build a New Product or Research Prototype From Scratch',
    eng1Desc:
      'Ideal when you have a research question, digital product concept, or family business catalog need without an existing technical foundation.',
    eng1B1: 'Scoping technical specifications, datasets, and interface architecture from day one.',
    eng1B2: 'Engineering a testable web application or computer vision prototype.',
    eng1B3: 'Clean code documentation and user guides ready for teams or academic publication.',
    eng2Title: 'Continue or Upgrade an Existing System',
    eng2Desc:
      'Ideal for overhauling rigid interfaces, improving page performance, or adding estimation calculators and workflow automation.',
    eng2B1: 'Interface design audit, accessibility fixes, and codebase simplification.',
    eng2B2: 'Integrating new modules such as booking calculators, metric trackers, or WhatsApp slips.',
    eng2B3: 'Technical advisory and architecture reviews for long-term sustainability.',
    scopeTitle: 'Small enough to start. Structured for your scope.',
    scopeSub:
      'MentayaSandbox supports both open research collaboration (academic/community) and custom system implementation.',
    thProject: 'Project / Research Scope',
    thStandard: 'Open Research Track',
    thCustom: 'Custom Implementation',
    tr1Name: 'Landing Page & Digital Portfolio Archive',
    tr2Name: 'Business Product Catalog & WhatsApp Order Slip',
    tr3Name: 'Computer Vision & Image Processing Experiment',
    tr4Name: 'Agricultural Tracker / Nutrient Dosing Calculator',
    tr5Name: 'Visual Identity & Community Design System',
    tr6Name: 'Spatial Archive / Web GIS & Custom Systems',
    tr6Free: 'Open Discussion',
    tr6Consult: 'Free Consultation',
    scopeCtaPrimary: 'Discuss Your Project Scope',
    scopeCtaSecondary: 'View Technical Docs',
    notesTitle: 'Technical & Scientific Documentation',
    notesSub:
      'System architecture documentation, experiment specifications, and open engineering modules at MentayaSandbox.',
    readNote: 'Read Documentation',
    faqTitle: 'Frequently Asked Questions',
    faqAskLink: 'Ask another question',
    faqQ1: 'How does MentayaSandbox relate to the parent cahyadies website?',
    faqA1:
      'cahyadies is Adies’s master portfolio and thought archive, while MentayaSandbox is the dedicated unit for sustainable IT knowledge, computer vision research, and technical collaboration alongside dalam.dapur and Omah Ijo.',
    faqQ2: 'Can students or community developers propose joint research?',
    faqA2:
      'Absolutely. MentayaSandbox is designed as an open space for exchanging ideas, running joint experiments, and sharing documentation across computer vision, web engineering, and spatial mapping.',
    faqQ3: 'Why does MentayaSandbox emphasize sustainable IT knowledge?',
    faqA3:
      'Many software projects break after a few months due to over-engineered dependencies. We prioritize clean, low-overhead, well-documented code that stays useful for years.',
    faqQ4: 'How do we start a project or research discussion?',
    faqA4:
      'Fill out the brief form below to send your idea via WhatsApp or Email. We will review the problem context and map out the initial steps together.',
    ctaBannerTitle: 'Ready to Talk About Your Idea or Research?',
    ctaBannerSub:
      'Share the web product, computer vision experiment, or research topic you want to build with MentayaSandbox.',
    openTopicsHeading: 'Current Open Collaboration Topics',
    labelName: 'Your Name',
    labelTopic: 'Discussion Focus',
    optTopic1: 'Computer Vision & AI Models',
    optTopic2: 'Web Product & System Development',
    optTopic3: 'Spatial Archive & Mentaya Mapping',
    optTopic4: 'Open Research & Knowledge Sharing',
    labelNote: 'Idea / Problem Summary',
    btnSendWa: 'Discuss via WhatsApp',
    btnSendMail: 'Send via Email',
    footerBio:
      'Studio for sustainable IT knowledge exploration, applied computer vision research, and web product engineering under cahyadies.',
    footerNavLabel: 'Navigation',
    footerServices: 'Core Domains',
    footerEcoLabel: 'Ecosystem & Network'
  }
};

const PROJECTS = [
  {
    id: 'cv-hydroponic',
    type: 'cv',
    badge: 'Computer Vision',
    s: 'jalan',
    img: '',
    collabWith: 'Omah Ijo Hidroponik',
    id_content: {
      n: 'Deteksi Kesiapan Panen Selada Hidroponik via Computer Vision',
      d: 'Eksperimen pengolahan citra untuk memantau perkembangan tajuk daun dan memprediksi kesiapan panen selada berdasarkan warna serta luas kanopi daun.',
      notes:
        'Menggunakan segmentasi ruang warna HSV dan ekstraksi kontur kanopi daun dari foto kamera ponsel di meja instalasi NFT Bapak. Rasio piksel hijau dibandingkan terhadap kalibrasi Hari Setelah Tanam (HST) untuk memberi rekomendasi waktu petik optimal.'
    },
    en_content: {
      n: 'Hydroponic Lettuce Harvest Readiness via Computer Vision',
      d: 'Image processing experiment detecting harvest readiness of hydroponic lettuce from leaf color and canopy surface area.',
      notes:
        'Uses HSV color-space segmentation and leaf canopy contour extraction from smartphone photos over NFT tables, correlating pixel area ratios against Days After Planting (HST).'
    }
  },
  {
    id: 'naraicoder-sys',
    type: 'desain',
    badge: 'Design System',
    s: 'selesai',
    img: 'assets/naraicoder-preview.png',
    collabWith: 'NaraiCoder Kalimantan Tengah',
    id_content: {
      n: 'Arsitektur Identitas Visual & Grid Perisai Telawang NaraiCoder',
      d: 'Perancangan ulang sistem identitas komunitas programmer Kalimantan Tengah yang menggabungkan geometri perisai Dayak Telawang dengan logika biner 1-0.',
      notes:
        'Disusun dalam tiga tingkat responsivitas (Full Lockup, Compact Emblem, dan Micro Icon) menggunakan konstruksi grid heksagonal agar tetap tajam pada layar maupun media cetak.'
    },
    en_content: {
      n: 'NaraiCoder Visual Identity & Telawang Shield Grid System',
      d: 'Identity system redesign for Central Kalimantan’s developer community combining Dayak Telawang shield geometry with binary 1-0 logic.',
      notes:
        'Structured across three responsive tiers (Full Lockup, Compact Emblem, and Micro Icon) on a hexagonal grid for crisp legibility across digital and print media.'
    }
  },
  {
    id: 'cv-bottle',
    type: 'cv',
    badge: 'Applied ML / CV',
    s: 'selesai',
    img: '',
    collabWith: 'Riset Mandiri IT',
    id_content: {
      n: 'Estimasi Volume Objek Mengapung dari Citra Kamera Tunggal',
      d: 'Model visi komputer untuk memperkirakan rasio volume botol dan objek mengapung menggunakan deteksi batas permukaan air serta kalibrasi perspektif.',
      notes:
        'Pipeline melakukan deteksi tepi Canny dan aproksimasi poligon kontur objek, lalu memisahkan bagian benda di atas dan di bawah garis air untuk menghitung estimasi volume silinder.'
    },
    en_content: {
      n: 'Floating Object Volume Estimation from Single-Camera Frames',
      d: 'Computer vision model estimating submerged and floating object volume ratios using waterline detection and perspective calibration.',
      notes:
        'Applies Canny edge detection and contour polygon approximation to separate object regions above and below the waterline and compute cylindrical volume integrals.'
    }
  },
  {
    id: 'dapur-catalog',
    type: 'web',
    badge: 'Web Product',
    s: 'selesai',
    img: 'assets/samosa.jpg',
    collabWith: 'dalam.dapur (Keluarga Ibu)',
    id_content: {
      n: 'Sistem Katalog Digital & Laci Nota Pesanan dalam.dapur',
      d: 'Aplikasi web katalog kuliner rumahan Ibu dengan 6 kategori sajian, pemilih kuantitas porsi, dan penggabungan nota pesanan otomatis ke WhatsApp.',
      notes:
        'Dibangun tanpa ketergantungan framework berat agar pemuatan gambar produk di ponsel pelanggan berjalan instan dan daftar menu mudah diperbarui.'
    },
    en_content: {
      n: 'dalam.dapur Digital Catalog & Interactive Order Drawer',
      d: 'Home culinary web catalog featuring 6 food categories, portion quantity steppers, and consolidated WhatsApp order slip generation.',
      notes:
        'Built with zero heavy framework dependencies so food photography loads instantly on mobile devices and menu data stays effortless to update.'
    }
  },
  {
    id: 'omahijo-tracker',
    type: 'web',
    badge: 'Agri-Web System',
    s: 'selesai',
    img: '',
    collabWith: 'Omah Ijo (Kebun Bapak)',
    id_content: {
      n: 'Katalog Panen Hidroponik & Pelacak Masa Tunggu (HST) Omah Ijo',
      d: 'Sistem katalog kebun hidroponik keluarga Bapak yang menampilkan status sayur siap petik, indikator progres usia tanam, dan booking permintaan pasar.',
      notes:
        'Menghubungkan data meja instalasi NFT dan Rakit Apung dengan antarmuka pemesanan per kilogram/ikat yang transparan bagi pembeli rumah tangga maupun warung makan.'
    },
    en_content: {
      n: 'Omah Ijo Hydroponic Harvest Catalog & HST Countdown Tracker',
      d: 'Family hydroponic garden catalog displaying ready-to-pick greens, planting age progress bars, and market supply pre-booking.',
      notes:
        'Connects NFT and floating-raft table data with a transparent per-kilogram booking flow for household and culinary buyers.'
    }
  }
];

const KNOWLEDGE_NOTES = [
  {
    id: 'note-cv-agri',
    docCode: 'DOC-01 · v1.2',
    specSnippet: 'hsv_canopy_mask(frame) -> ratio >= 0.88 (Ready HST)',
    tagId: 'Dokumentasi Visi Komputer',
    tagEn: 'Computer Vision Docs',
    titleId: 'Spesifikasi Pipeline Segmentasi Daun untuk Estimasi Panen',
    titleEn: 'Leaf Segmentation Pipeline Specification for Harvest Estimation',
    summaryId:
      'Dokumentasi kalibrasi ruang warna HSV dan ekstraksi kontur kanopi daun dari citra kamera ponsel untuk memantau pertumbuhan sayuran hidroponik.',
    summaryEn:
      'Documentation of HSV color-space calibration and canopy contour extraction from phone camera frames to track hydroponic growth.',
    bodyId:
      'Modul ini mendokumentasikan tahapan pra-pemrosesan citra pada meja instalasi NFT Omah Ijo: (1) Normalisasi pencahayaan menggunakan kartu referensi di tepi talang, (2) Masking rentang warna hijau klorofil pada ruang HSV, dan (3) Perhitungan rasio luas piksel kanopi terhadap usia tanam (HST) untuk menentukan ambang siap panen.',
    bodyEn:
      'This module documents the image preprocessing stages on Omah Ijo NFT tables: (1) Illumination normalization using a reference marker on the channel edge, (2) Chlorophyll green range masking in HSV space, and (3) Canopy pixel area ratio calculation against Days After Planting (HST).'
  },
  {
    id: 'note-zero-bloat',
    docCode: 'DOC-02 · v2.0',
    specSnippet: 'store.json -> static_render() | 0 runtime dependencies',
    tagId: 'Dokumentasi Arsitektur Web',
    tagEn: 'Web Architecture Docs',
    titleId: 'Standar Arsitektur Web Tanpa Dependensi untuk Sistem Usaha Keluarga',
    titleEn: 'Zero-Dependency Web Architecture Standard for Family Systems',
    summaryId:
      'Dokumentasi struktur data JSON terpusat, pola komponen HTML/CSS murni, dan integrasi nota pesanan langsung ke WhatsApp.',
    summaryEn:
      'Documentation of centralized JSON data stores, vanilla HTML/CSS component patterns, and direct WhatsApp order slip integration.',
    bodyId:
      'Dokumen spesifikasi teknis untuk membangun sistem katalog digital (seperti dalam.dapur dan Omah Ijo) yang tahan lebih dari 5 tahun tanpa risiko kerusakan paket npm. Mencakup skema penyimpanan state ringan di localStorage, pembuatan payload pesan WhatsApp terstruktur, dan pemisahan token tema CSS.',
    bodyEn:
      'Technical specification for building digital catalog systems (such as dalam.dapur and Omah Ijo) engineered to last 5+ years without npm dependency rot. Covers lightweight localStorage state schemas, structured WhatsApp payload generation, and CSS theme token isolation.'
  },
  {
    id: 'note-mentaya-gis',
    docCode: 'DOC-03 · v0.9',
    specSnippet: 'mentaya_basin.geojson -> SpatialLayer [EPSG:4326]',
    tagId: 'Dokumentasi Spasial & GIS',
    tagEn: 'Spatial & GIS Docs',
    titleId: 'Skema Data GeoJSON & Dokumentasi Pemetaan Sungai Mentaya',
    titleEn: 'GeoJSON Data Schema & Mentaya River Spatial Mapping Docs',
    summaryId:
      'Dokumentasi struktur atribut koordinat, klasifikasi titik dermaga dan ekologi, serta panduan kontribusi data terbuka kawasan Sampit.',
    summaryEn:
      'Documentation of coordinate attribute schemas, dock and ecological point classifications, and open data contribution guides for Sampit.',
    bodyId:
      'Mendefinisikan format standar lapisan GeoJSON untuk arsip spasial Daerah Aliran Sungai Mentaya di Kotawaringin Timur. Setiap fitur titik dan poligon memuat metadata kategori (ekologi, infrastruktur sungai, riwayat lokal), sumber observasi, serta koordinat WGS84 yang ringan dirender di peramban.',
    bodyEn:
      'Defines the standard GeoJSON layer schema for the Mentaya River basin spatial archive in East Kotawaringin. Each point and polygon feature carries category metadata (ecology, river infrastructure, local history), observation source, and browser-ready WGS84 coordinates.'
  }
];

const COLLAB_TOPICS = [
  {
    titleId: 'Dataset & Visi Komputer Agrikultur Rumahan',
    titleEn: 'Home Agriculture Dataset & Computer Vision',
    descId:
      'Kolaborasi pengumpulan citra fase tumbuh tanaman hidroponik dan pengujian algoritma estimasi usia panen.',
    descEn:
      'Collaborative image collection of hydroponic growth stages and testing harvest-readiness estimation algorithms.',
    tags: ['OpenCV', 'Python', 'Omah Ijo']
  },
  {
    titleId: 'Peta Interaktif & Arsip Spasial Sungai Mentaya',
    titleEn: 'Interactive Map & Spatial Archive of Mentaya River',
    descId:
      'Terbuka untuk rekan-rekan di Sampit/Kalteng yang ingin berkontribusi data titik lokasi, foto sejarah, atau pengembangan Web GIS.',
    descEn:
      'Open to contributors in Sampit/Central Kalimantan interested in mapping local landmarks, historical photos, or Web GIS.',
    tags: ['GeoJSON', 'Web GIS', 'Sampit']
  },
  {
    titleId: 'Digitalisasi Katalog UMKM & Usaha Keluarga',
    titleEn: 'Micro-Business & Family Catalog Digitization',
    descId:
      'Pendampingan perancangan katalog web ringan terintegrasi nota WhatsApp seperti yang diterapkan pada dalam.dapur.',
    descEn:
      'Designing lightweight web catalogs with integrated WhatsApp order slips modeled after dalam.dapur.',
    tags: ['Vanilla JS', 'UI/UX', 'UMKM']
  }
];

function t(key) {
  return I18N[currentLang]?.[key] || I18N.id[key] || key;
}

function setTheme(mode) {
  document.documentElement.dataset.theme = mode;
  localStorage.setItem('mentaya_theme', mode);
  const label = document.getElementById('footerThemeLabel');
  if (label) {
    label.textContent = mode === 'dark' ? 'Dark Mode' : 'Light Mode';
  }
}

window.toggleTheme = function () {
  const cur = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
  setTheme(cur === 'dark' ? 'light' : 'dark');
};

window.toggleLang = function () {
  currentLang = currentLang === 'id' ? 'en' : 'id';
  localStorage.setItem('mentaya_lang', currentLang);
  document.documentElement.lang = currentLang;
  applyTranslations();
};

window.toggleMobileNav = function () {
  const nav = document.getElementById('primaryNav');
  const btn = document.getElementById('mobileMenuBtn');
  if (!nav || !btn) return;
  const isOpen = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(isOpen));
};

function applyTranslations() {
  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.textContent = currentLang === 'id' ? 'EN' : 'ID';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && I18N[currentLang]?.[key]) {
      el.textContent = I18N[currentLang][key];
    }
  });

  renderFilters();
  renderProjects();
  renderNotes();
  renderCollabTopics();
}

function renderFilters() {
  const bar = document.getElementById('filterBar');
  if (!bar) return;

  const items = [
    { key: 'semua', label: t('filterAll') },
    { key: 'cv', label: t('filterCV') },
    { key: 'web', label: t('filterWeb') },
    { key: 'desain', label: t('filterDesain') }
  ];

  bar.innerHTML = items
    .map(
      (it) => `
      <button
        type="button"
        class="bp-filter-chip ${currentFilter === it.key ? 'on' : ''}"
        onclick="setFilter('${it.key}')"
      >
        ${it.label}
      </button>
    `
    )
    .join('');
}

window.setFilter = function (key) {
  currentFilter = key;
  renderFilters();
  renderProjects();
};

function renderProjects() {
  const container = document.getElementById('projectGrid');
  if (!container) return;

  const list =
    currentFilter === 'semua'
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === currentFilter);

  const cardsHtml = list
    .map((p) => {
      const content = currentLang === 'en' ? p.en_content : p.id_content;
      const hasPhoto = Boolean(p.img);
      return `
        <article class="bp-work-card ${hasPhoto ? 'has-photo' : ''}">
          <div class="bp-work-bg">
            ${hasPhoto ? `<img src="${p.img}" alt="${content.n}" loading="lazy" />` : ''}
            <div class="bp-work-scrim"></div>
          </div>

          <div class="bp-work-top">
            <div class="bp-work-badges">
              <span class="bp-pill-badge">${p.badge}</span>
              <span class="bp-pill-badge">${currentLang.toUpperCase()}</span>
            </div>
            <h3 class="bp-work-title">${content.n}</h3>
          </div>

          <div class="bp-work-bottom">
            <p class="bp-work-desc">${content.d}</p>
            <div class="bp-work-foot">
              <span class="bp-work-partner">${p.collabWith}</span>
              <button
                type="button"
                class="bp-case-btn"
                onclick="openProjectModal('${p.id}', this)"
              >
                ${t('viewCase')}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  const archiveCardHtml = `
    <article class="bp-work-card bp-archive-card">
      <div class="bp-work-top">
        <div class="bp-archive-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path>
            <circle cx="12" cy="13" r="2"></circle>
          </svg>
        </div>
        <h3 class="bp-work-title">${t('archiveTitle')}</h3>
      </div>

      <div class="bp-work-bottom">
        <p class="bp-work-desc">${t('archiveSub')}</p>
        <div class="bp-work-foot">
          <a href="https://cahyadies.vercel.app/#/karya" class="bp-cta-pill">
            ${t('archiveCta')}
          </a>
        </div>
      </div>
    </article>
  `;

  container.innerHTML = cardsHtml + archiveCardHtml;
}

function renderNotes() {
  const container = document.getElementById('notesGrid');
  if (!container) return;

  container.innerHTML = KNOWLEDGE_NOTES.map((n) => {
    const tag = currentLang === 'en' ? n.tagEn : n.tagId;
    const title = currentLang === 'en' ? n.titleEn : n.titleId;
    const summary = currentLang === 'en' ? n.summaryEn : n.summaryId;
    return `
      <button
        type="button"
        class="bp-note-card"
        onclick="openNoteModal('${n.id}', this)"
      >
        <div>
          <div class="bp-note-top-meta">
            <span class="bp-note-tag">${tag}</span>
            <span class="bp-doc-code">${n.docCode}</span>
          </div>
          <h3>${title}</h3>
          <div class="bp-doc-spec">${n.specSnippet}</div>
          <p>${summary}</p>
        </div>
        <span class="bp-note-more">${t('readNote')}</span>
      </button>
    `;
  }).join('');
}

function renderCollabTopics() {
  const container = document.getElementById('collabList');
  if (!container) return;

  container.innerHTML = COLLAB_TOPICS.map((c) => {
    const title = currentLang === 'en' ? c.titleEn : c.titleId;
    const desc = currentLang === 'en' ? c.descEn : c.descId;
    return `
      <div class="bp-topic-item">
        <h4>${title}</h4>
        <p>${desc}</p>
        <div class="bp-topic-tags">
          ${c.tags.map((tg) => `<span>${tg}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');
}

window.toggleFaq = function (btn) {
  const item = btn.closest('.bp-faq-item');
  if (!item) return;
  const panel = item.querySelector('.bp-faq-panel');
  const icon = item.querySelector('.bp-faq-icon');
  const isOpen = item.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(isOpen));
  if (panel) panel.hidden = !isOpen;
  if (icon) icon.textContent = isOpen ? '−' : '+';
};

window.openProjectModal = function (id, triggerEl) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return;
  lastFocusEl = triggerEl || document.activeElement;

  const content = currentLang === 'en' ? p.en_content : p.id_content;
  document.getElementById('mType').textContent = p.badge;
  document.getElementById('mTitle').textContent = content.n;
  document.getElementById('mDesc').textContent = content.d;
  document.getElementById('mCollab').textContent =
    (currentLang === 'en' ? 'Unit / Partner: ' : 'Unit / Mitra: ') + p.collabWith;
  document.getElementById('mNotes').textContent = content.notes;

  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('on');
  overlay.setAttribute('aria-hidden', 'false');
  document.getElementById('modalCloseBtn')?.focus();
};

window.openNoteModal = function (id, triggerEl) {
  const n = KNOWLEDGE_NOTES.find((x) => x.id === id);
  if (!n) return;
  lastFocusEl = triggerEl || document.activeElement;

  document.getElementById('mType').textContent =
    currentLang === 'en' ? n.tagEn : n.tagId;
  document.getElementById('mTitle').textContent =
    currentLang === 'en' ? n.titleEn : n.titleId;
  document.getElementById('mDesc').textContent =
    currentLang === 'en' ? n.summaryEn : n.summaryId;
  document.getElementById('mCollab').textContent =
    n.docCode + ' · ' + n.specSnippet;
  document.getElementById('mNotes').textContent =
    currentLang === 'en' ? n.bodyEn : n.bodyId;

  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('on');
  overlay.setAttribute('aria-hidden', 'false');
  document.getElementById('modalCloseBtn')?.focus();
};

window.closeModal = function () {
  const overlay = document.getElementById('modalOverlay');
  if (!overlay) return;
  overlay.classList.remove('on');
  overlay.setAttribute('aria-hidden', 'true');
  if (lastFocusEl && typeof lastFocusEl.focus === 'function') {
    lastFocusEl.focus();
  }
};

window.handleOverlayClick = function (e) {
  if (e.target.id === 'modalOverlay') {
    window.closeModal();
  }
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closeModal();
  }
});

window.submitCollabForm = function (e) {
  e.preventDefault();
  const submitter = e.submitter;
  const channel = submitter?.getAttribute('data-channel') || 'wa';

  const name = document.getElementById('collabName')?.value.trim() || '';
  const topic = document.getElementById('collabTopic')?.value || '';
  const note = document.getElementById('collabNote')?.value.trim() || '';

  const text = `Halo Adies (MentayaSandbox),\n\nNama: ${name}\nTopik Diskusi: ${topic}\nRingkasan Ide/Riset: ${note}`;

  const fb = document.getElementById('collabFeedback');
  if (fb) {
    fb.hidden = false;
    fb.textContent =
      currentLang === 'en'
        ? 'Opening communication channel with your discussion details...'
        : 'Membuka kanal komunikasi dengan rincian diskusi Anda...';
  }

  if (channel === 'mail') {
    const subject = encodeURIComponent(`[MentayaSandbox] ${topic} - ${name}`);
    window.location.href = `mailto:${EMAIL_ADDR}?subject=${subject}&body=${encodeURIComponent(text)}`;
  } else {
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  }
};

let pointerRaf = null;
window.addEventListener(
  'pointermove',
  (e) => {
    if (e.pointerType === 'touch') return;
    document.body.classList.add('has-pointer');
    if (pointerRaf) cancelAnimationFrame(pointerRaf);
    pointerRaf = requestAnimationFrame(() => {
      const x = e.clientX;
      const y = e.clientY;
      const root = document.documentElement;
      root.style.setProperty('--mouse-x', `${x}px`);
      root.style.setProperty('--mouse-y', `${y}px`);
      const cellX = Math.floor(x / 48) * 48;
      const cellY = Math.floor(y / 48) * 48;
      root.style.setProperty('--cell-x', `${cellX}px`);
      root.style.setProperty('--cell-y', `${cellY}px`);

      const card = e.target.closest(
        '.bp-overview-card, .bp-service-card, .bp-engage-card, .bp-note-card, .bp-final-cta-card'
      );
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--card-mx', `${x - rect.left}px`);
        card.style.setProperty('--card-my', `${y - rect.top}px`);
      }
    });
  },
  { passive: true }
);

document.addEventListener('DOMContentLoaded', () => {
  setTheme(localStorage.getItem('mentaya_theme') || 'dark');
  applyTranslations();
});
