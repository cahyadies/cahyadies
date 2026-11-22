/* =========================================
   DATA DAN PENGATURAN UTAMA (PERSONA: ARSIP)
========================================= */
const SITE = {
  name: 'Adies',
  tagline: 'Arsip dari hal-hal yang saya buat, eksplorasi, dan pelajari.',
  intro: 'Catatan dan arsip karya seputar desain, website, dan proyek mandiri berbasis di Surabaya — dari eksperimen di MentayaSandbox hingga produk rumahan.',
  email: 'halo@contoh.com',
  socials: [
    { n: 'Instagram', u: '#' },
    { n: 'LinkedIn', u: '#' },
    { n: 'GitHub', u: '#' }
  ]
};

/* =========================================
   KATEGORI & PROJECT SPACES (SESUAI BRIEF)
========================================= */
const CATS = [
  ['semua', 'all'],
  // Kategori Disiplin
  ['website', 'catWeb'],
  ['design', 'catDesign'],
  ['others', 'catOthers'],
  // Inisiatif / Brand
  ['mentayasandbox', 'catMentaya'],
  ['dalamdapur', 'catDapur'],
  ['omahijo', 'catOmahIjo'],
  ['naraicoder', 'catNaraicoder'],
  ['bakat creative hub', 'catBakat']
];

/* =========================================
   KARYA (DENGAN SISTEM MULTI-TAG)
========================================= */
const WORKS = [
  {
    id: 'gerigi',
    tags: ['design', 'mentaya'],
    t: 'Identitas Shuttle GERIGI ITS',
    d: 'Logo dan identitas visual layanan shuttle mahasiswa baru.',
    hue: 18, year: '2025', role: 'Logo, warna, aset sosmed', img: '',
    body: 'Logo dirancang agar mudah dikenali di seragam, bus, dan media sosial.'
  },
  {
    id: 'label',
    tags: ['design', 'dapur'],
    t: 'Label Produk dalam.dapur',
    d: 'Desain label untuk sayur hidroponik dan kue rumahan.',
    hue: 140, year: '2025', role: 'Desain label & kemasan', img: '',
    body: 'Label dibuat hangat dan jujur, sesuai karakter usaha rumahan.'
  },
  {
    id: 'dd-web',
    tags: ['website', 'dapur'],
    t: 'Landing Page dalam.dapur',
    d: 'Halaman penjualan sederhana untuk produk rumahan.',
    hue: 95, year: '2025', role: 'Desain & pengembangan web', img: '', link: '#',
    body: 'Landing page cepat, ringan, dan mudah dibuka dari HP.'
  },
  {
    id: 'cv-botol',
    tags: ['others', 'mentayasandbox'],
    t: 'Estimasi Volume Botol dengan CV',
    d: 'Menghitung volume botol yang mengapung dari gambar kamera.',
    hue: 185, year: '2026', role: 'Computer vision', img: '', link: '#',
    body: 'Penjelasan pendekatan teknis, tantangan pemantulan cahaya pada air, sudut kamera, dan akurasi model.'
  },
  {
    id: 'omahijo-sistem',
    tags: ['website', 'omahijo'],
    t: 'Instalasi & Katalog Omah Ijo',
    d: 'Dokumentasi sistem tanam dan log hidroponik.',
    hue: 65, year: '2025', role: 'Urban Farming', img: '',
    body: 'Mencatat perkembangan tanaman, proses penyemaian di rockwool, hingga manajemen sirkulasi nutrisi.'
  },
  {
    id: 'naraicoder-design',
    tags: ['design', 'naraicoder'],
    t: 'Redesign Logo & Identitas NaraiCoder (PARDI)',
    d: 'Penyegaran identitas visual komunitas teknologi Kalimantan Tengah — memadukan perisai Telawang Dayak dengan notasi biner boolean dan sistem logo responsif.',
    hue: 205, year: '2026', role: 'Brand Identity & Logo System', img: 'assets/works/naraicoder-preview.png', link: '#',
    body: `<p><strong>NaraiCoder</strong> adalah komunitas programmer dan wadah pegiat digital di Kalimantan Tengah. Proyek redesign ini menjawab kendala logo lama yang terlalu rumit dan sulit beradaptasi di berbagai media.</p><h3>Konsep & Tiga Pilar Filosofi:</h3><ul><li><strong>Telawang (Perisai Dayak):</strong> Mengambil siluet heksagonal perisai khas Dayak Kalteng sebagai lambang perlindungan, persatuan, dan ketangguhan komunitas.</li><li><strong>Regenerasi Lapis Demi Lapis:</strong> Garis kurva bertingkat di sisi kiri menyerupai kurung kurawal kode (<code>{</code>) sekaligus bayangan perisai, melambangkan estafet pembinaan talenta dari generasi ke generasi.</li><li><strong>Logika Biner 1 & 0 (I/O):</strong> Elemen titik-garis vertikal ('i'/1) dan heksagon ('O'/0) membentuk notasi biner fundamental komputer serta prinsip Input/Output dalam ekosistem belajar.</li></ul><h3>Sistem Logo Responsif:</h3><p>Dirancang adaptif dengan metodologi Responsive Logo modern (Full Lockup, Stacked Lockup, dan Compact Icon) yang siap diimplementasikan mulai dari favicon, banner webinar, hingga apparel.</p><img src="assets/works/naraicoder-responsive-system.jpg" alt="Responsive Logo Architecture - NaraiCoder" loading="lazy"><h3>Implementasi Identitas:</h3><p>Penerapan identitas visual pada materi promosi, merchandise, dan atribut komunitas.</p><img src="assets/works/naraicoder-mockup-objects.jpg" alt="Implementasi pada Objek dan Merchandise" loading="lazy">`
  }
];

/* =========================================
   POSTS / BLOG
========================================= */
const POSTS = [
  { id: 'mulai-dari-brief', t: 'Dari Brief Singkat ke Logo yang Dipakai Bertahun-tahun', date: '2026-09-20', tag: 'Desain', likes: 24, ex: 'Cara aku mengubah permintaan "yang penting bagus" menjadi arah visual yang jelas.', body: `<p>Hampir semua proyek logo dimulai dari kalimat yang sama: "yang penting bagus." Tugas pertama bukan menggambar, melainkan menggali apa arti bagus bagi klien.</p><h2>1. Tanyakan hal yang tidak berhubungan dengan visual</h2><p>Siapa pelanggannya? Di mana logo akan paling sering terlihat? Jawabannya menentukan ukuran, kontras, dan tingkat detail.</p><blockquote>Logo yang baik bisa dikenali saat kecil, hitam putih, dan dilihat sekilas.</blockquote><h2>2. Sketsa kasar dulu</h2><p>Sebelum membuka software, buat puluhan sketsa jelek.</p>` },
  { id: 'belajar-cv', t: 'Catatan Belajar Computer Vision untuk Pemula Nekat', d: '', date: '2026-08-02', tag: 'Teknologi', likes: 12, ex: 'Hal-hal yang kuharap kuketahui sebelum mencoba mengukur benda dari kamera.', body: `<p>Computer vision terlihat seperti sihir sampai kamu mencoba mengukur sesuatu dengan benar. Tulisan ini contoh tampilan artikel panjang.</p><h2>Cahaya adalah segalanya</h2><p>Pantulan dan bayangan bisa merusak hasil lebih parah daripada algoritma yang salah. Mulai dari kondisi pencahayaan yang terkontrol.</p>` }
];

/* =========================================
   TERJEMAHAN (TRANSLATIONS)
========================================= */
const EN = {
  site: {
    tagline: 'An archive of things I\'ve made, explored, and learned.',
    intro: 'A personal archive of design, web development, and independent projects based in Surabaya — from lab experiments at MentayaSandbox to homegrown goods.'
  },
  works: {
    gerigi: { t: 'Shuttle GERIGI ITS Identity', d: 'Logo and visual identity for a shuttle service for new university students.', role: 'Logo, colors, social assets', body: 'The logo was designed to be recognizable on uniforms, buses, and social media.' },
    label: { t: 'dalam.dapur Product Labels', d: 'Label design for hydroponic vegetables and home-baked goods.', role: 'Label & packaging design', body: 'The labels feel warm and honest, matching the character of a home business.' },
    'dd-web': { t: 'dalam.dapur Landing Page', d: 'A simple sales page for home-made products.', role: 'Web design & development', body: 'A fast, lightweight landing page that opens well on phones.' },
    'cv-botol': { t: 'Bottle Volume Estimation with CV', d: 'Estimating the volume of a floating bottle from camera images.', role: 'Computer vision', body: 'Explain the approach, the challenges (water reflections, camera angle), and the accuracy achieved.' },
    'omahijo-sistem': { t: 'Omah Ijo Installation & Catalog', d: 'Documentation of the planting system and hydroponic logs.', role: 'Urban Farming', body: 'Logging plant development, rockwool seeding process, and nutrient circulation management.' },
    'naraicoder-design': { t: 'NaraiCoder Logo Redesign & Visual Identity (PARDI)', d: 'Visual identity redesign for Central Kalimantan\'s tech community — blending traditional Dayak Telawang shields with binary boolean notation and responsive logo architecture.', role: 'Brand Identity & Logo System', body: `<p><strong>NaraiCoder</strong> is the premier developer and tech community in Central Kalimantan. This redesign addresses the complexity and scalability issues of the original emblem, modernizing it into an iconic, flexible visual system.</p><h3>Core Design Pillars:</h3><ul><li><strong>The Dayak Telawang Shield:</strong> Adopting the hexagonal silhouette of traditional Borneo shields as a symbol of unity, resilience, and cultural pride on the global stage.</li><li><strong>Generational Layering:</strong> Stepped brackets on the flank resemble both code braces (<code>{</code>) and shadow facets, representing knowledge transfer and tech talent regeneration.</li><li><strong>Binary 1 & 0 (I/O Logic):</strong> Vertical line-dot ('i'/1) and hexagonal frame ('O'/0) symbolize boolean fundamentals and the Input/Output spirit of community learning.</li></ul><h3>Responsive Logo System:</h3><p>Engineered to adapt seamlessly across scales — from full horizontal banners and stacked event posters to minimal monochrome icons for app badges and apparel embroidery.</p><img src="assets/works/naraicoder-responsive-system.jpg" alt="Responsive Logo Architecture - NaraiCoder" loading="lazy"><h3>Brand Touchpoints & Implementation:</h3><p>Application of the identity system across community merchandise, digital assets, and physical touchpoints.</p><img src="assets/works/naraicoder-mockup-objects.jpg" alt="Object and Merchandise Mockups" loading="lazy">` }
  },
  posts: {
    'mulai-dari-brief': { t: 'From a Short Brief to a Logo That Lasts for Years', tag: 'Design', ex: 'How I turn "just make it look good" into a clear visual direction.', body: '<p>Almost every logo project starts with the same sentence: "just make it look good."</p>' },
    'belajar-cv': { t: 'Notes from a Reckless Beginner in Computer Vision', tag: 'Tech', ex: 'Things I wish I knew before trying to measure objects with a camera.', body: '<p>Computer vision looks like magic until you try to measure something correctly.</p>' }
  }
};

const UI = {
  id: {
    home: 'Beranda', works: 'Karya', blog: 'Blog', contact: 'Kontak',
    all: 'Semua',
    catDesign: 'Desain', catWeb: 'Website', catOthers: 'Lab & Eksperimen',
    catMentaya: 'MentayaSandbox', catOmahIjo: 'Omah Ijo', catDapur: 'dalam.dapur',
    catNaraicoder: 'naraicoder', catBakat: 'bakat creative hub',
    spacesTitle: 'Inisiatif & Project Spaces',
    folio: 'Arsip Karya', seeWorks: 'Lihat karya', readPosts: 'Baca tulisan', featured: 'Karya pilihan', latest: 'Tulisan terbaru', more: 'Semua →', connect: 'Terhubung', year: 'Tahun', role: 'Peran', visit: 'Kunjungi proyek ↗', allWorks: '← Semua karya', allPosts: '← Semua tulisan', min: 'menit baca', like: 'Suka tulisan ini?', likeBtn: 'Suka', likedBtn: 'Disukai', cTitle: 'Ada proyek? Ayo ngobrol.', cText: 'Hubungi lewat email atau sosial media.', nf: 'Halaman tidak ditemukan', toHome: 'Ke beranda', theme: 'Ganti tema', loc: 'id-ID', prev: '← Sebelumnya', next: 'Selanjutnya →'
  },
  en: {
    home: 'Home', works: 'Works', blog: 'Blog', contact: 'Contact',
    all: 'All',
    catDesign: 'Design', catWeb: 'Website', catOthers: 'Lab & Experiments',
    catMentaya: 'MentayaSandbox', catOmahIjo: 'Omah Ijo', catDapur: 'dalam.dapur',
    catNaraicoder: 'naraicoder', catBakat: 'bakat creative hub',
    spacesTitle: 'Initiatives & Project Spaces',
    folio: 'Digital Archive', seeWorks: 'See my work', readPosts: 'Read my writing', featured: 'Featured work', latest: 'Latest posts', more: 'View all →', connect: 'Connect', year: 'Year', role: 'Role', visit: 'Visit project ↗', allWorks: '← All works', allPosts: '← All posts', min: 'min read', like: 'Enjoyed this post?', likeBtn: 'Like', likedBtn: 'Liked', cTitle: 'Got a project? Let\'s talk.', cText: 'Reach out by email or social media.', nf: 'Page not found', toHome: 'Back home', theme: 'Toggle theme', loc: 'en-US', prev: '← Prev', next: 'Next →'
  }
};

/* =========================================
   STATE & UTILITIES
========================================= */
let lang = 'id';
let filter = 'semua';
let currentWorkPage = 1;
let currentBlogPage = 1;
const WORKS_PER_PAGE = 6;
const POSTS_PER_PAGE = 4;

try {
  const savedLang = localStorage.getItem('lang');
  lang = savedLang || ((navigator.language || 'id').toLowerCase().startsWith('id') ? 'id' : 'en');
} catch (e) { }

const $ = selector => document.querySelector(selector);
const tr = key => UI[lang][key];
const G = (kind, obj, key) => (lang === 'en' && EN[kind][obj.id] && EN[kind][obj.id][key] != null) ? EN[kind][obj.id][key] : obj[key];
const site = key => lang === 'en' ? EN.site[key] : SITE[key];

const catName = category => tr((CATS.find(x => x[0] === category) || [0, 'all'])[1]);
const fmt = dateStr => new Date(dateStr).toLocaleDateString(tr('loc'), { day: 'numeric', month: 'long', year: 'numeric' });
const mins = htmlString => Math.max(1, Math.round(htmlString.replace(/<[^>]+>/g, ' ').split(/\s+/).length / 200));

/* =========================================
   BLOG LIKES & INTERACTION SYSTEM
========================================= */
function getPostLikes(postId) {
  try {
    const localLikes = JSON.parse(localStorage.getItem('post_likes') || '{}');
    if (localLikes[postId] !== undefined) return localLikes[postId];
  } catch (e) { }
  const p = POSTS.find(x => x.id === postId);
  return (p && p.likes != null) ? p.likes : 0;
}

function hasUserLiked(postId) {
  try {
    const userLiked = JSON.parse(localStorage.getItem('user_liked_posts') || '[]');
    return userLiked.includes(postId);
  } catch (e) {
    return false;
  }
}

window.toggleLike = function(postId) {
  try {
    let userLiked = JSON.parse(localStorage.getItem('user_liked_posts') || '[]');
    let localLikes = JSON.parse(localStorage.getItem('post_likes') || '{}');
    const p = POSTS.find(x => x.id === postId);
    let curLikes = localLikes[postId] !== undefined ? localLikes[postId] : (p && p.likes != null ? p.likes : 0);

    const isLiked = userLiked.includes(postId);
    if (isLiked) {
      userLiked = userLiked.filter(id => id !== postId);
      curLikes = Math.max(0, curLikes - 1);
    } else {
      userLiked.push(postId);
      curLikes += 1;
    }
    localLikes[postId] = curLikes;
    localStorage.setItem('user_liked_posts', JSON.stringify(userLiked));
    localStorage.setItem('post_likes', JSON.stringify(localLikes));
    if (p) p.likes = curLikes;

    const countEl = document.getElementById('likeCount');
    const btnEl = document.getElementById('btnLike');
    const metaEl = document.getElementById('metaLikes');
    if (countEl) countEl.innerText = curLikes;
    if (metaEl) metaEl.innerText = curLikes;
    if (btnEl) {
      const nowLiked = !isLiked;
      btnEl.classList.toggle('liked', nowLiked);
      const icon = btnEl.querySelector('.heart-icon');
      const label = btnEl.querySelector('.like-label');
      if (icon) icon.innerText = nowLiked ? '❤️' : '🤍';
      if (label) label.innerText = nowLiked ? tr('likedBtn') : tr('likeBtn');
    }
  } catch (e) { }
};

/* =========================================
   UI COMPONENTS GENERATOR
========================================= */
const cover = work => {
  const title = G('works', work, 't');
  if (work.img) return `<div class="cover" style="background-image:url('${work.img}')"></div>`;
  return `<div class="cover" style="background-image:linear-gradient(135deg, hsl(${work.hue} 60% 55%), hsl(${(work.hue + 40) % 360} 55% 32%))">${title[0]}</div>`;
};

const wCard = work => {
  const disciplines = ['website', 'design', 'others'];
  const cat = work.tags.find(t => disciplines.includes(t.toLowerCase())) || '';
  const proj = work.tags.find(t => !disciplines.includes(t.toLowerCase())) || '';

  let catLabel = cat;
  if (cat.toLowerCase() === 'others') {
    catLabel = lang === 'id' ? 'Lab' : 'Lab';
  } else if (cat.toLowerCase() === 'design') {
    catLabel = lang === 'id' ? 'Desain' : 'Design';
  } else if (cat.toLowerCase() === 'website') {
    catLabel = 'Website';
  }

  let tagHtml = '';
  if (cat && proj) {
    tagHtml = `${catLabel.toUpperCase()} · ${proj.toUpperCase()}`;
  } else {
    tagHtml = work.tags.map(t => {
      if (t.toLowerCase() === 'others') return 'LAB';
      const found = CATS.find(x => x[0] === t.toLowerCase());
      return found ? tr(found[1]).toUpperCase() : t.toUpperCase();
    }).join(' · ');
  }

  return `
  <a class="card" href="#/karya/${work.id}">
    ${cover(work)}
    <div class="in">
      <span class="tag" style="white-space:normal; line-height:1.4; font-weight:600; letter-spacing:0.03em;">${tagHtml}</span>
      <h3 style="margin-top:8px">${G('works', work, 't')}</h3>
      <p>${G('works', work, 'd')}</p>
    </div>
  </a>`;
};

const pRow = post => {
  const bodyText = G('posts', post, 'body');
  const likesCount = getPostLikes(post.id);
  return `
  <a class="post-row" href="#/blog/${post.id}">
    <span class="tag">${G('posts', post, 'tag')}</span>
    <h3>${G('posts', post, 't')}</h3>
    <p>${G('posts', post, 'ex')}</p>
    <span class="meta">${fmt(post.date)} · ${mins(bodyText)} ${tr('min')} · ❤️ ${likesCount}</span>
  </a>`;
};

const socials = () => `
  <div class="socials">
    ${SITE.socials.map(s => `<a href="${s.u}" target="_blank" rel="noopener">${s.n}</a>`).join('')}
    <a href="mailto:${SITE.email}">Email</a>
  </div>`;

const buildPagination = (currentPage, totalItems, itemsPerPage, type) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages <= 1) return '';
  return `
    <div class="pagination">
      <button onclick="changePage('${type}', -1)" ${currentPage === 1 ? 'disabled' : ''}>${tr('prev')}</button>
      <span style="display:flex; align-items:center; font-size:14px; font-weight:600;">${currentPage} / ${totalPages}</span>
      <button onclick="changePage('${type}', 1)" ${currentPage === totalPages ? 'disabled' : ''}>${tr('next')}</button>
    </div>
  `;
};

window.changePage = (type, direction) => {
  if (type === 'works') currentWorkPage += direction;
  else if (type === 'blog') currentBlogPage += direction;
  render(true);
};

/* =========================================
   PAGES
========================================= */
function nav(currentRoute) {
  const links = [['/', 'home'], ['/karya', 'works'], ['/blog', 'blog'], ['/kontak', 'contact']];
  const linksHtml = links.map(([href, key]) => {
    const isActive = currentRoute === href || (href !== '/' && currentRoute.startsWith(href));
    return `<a href="#${href}" class="${isActive ? 'on' : ''}">${tr(key)}</a>`;
  }).join('');

  $('#nav').innerHTML = `
    <div class="nav-links-track" id="navLinksTrack">
      <div class="nav-pill-indicator" id="navIndicator"></div>
      ${linksHtml}
    </div>
    <div class="nav-actions">
      <button id="lg" aria-label="Language">${lang === 'id' ? 'EN' : 'ID'}</button>
      <button id="th" aria-label="${tr('theme')}">◐</button>
    </div>
  `;

  $('#th').onclick = () => {
    const doc = document.documentElement;
    const isDark = getComputedStyle(doc).getPropertyValue('--bg').trim() === '#141210' || doc.dataset.theme === 'dark';
    doc.dataset.theme = isDark ? 'light' : 'dark';
    setTimeout(initNavIndicator, 60);
  };

  $('#lg').onclick = () => {
    lang = lang === 'id' ? 'en' : 'id';
    try { localStorage.setItem('lang', lang); } catch (e) { }
    render(true);
  };

  initNavIndicator();
}

function initNavIndicator() {
  const track = document.getElementById('navLinksTrack');
  const indicator = document.getElementById('navIndicator');
  if (!track || !indicator) return;

  const links = track.querySelectorAll('a');
  if (!links.length) return;

  const getActive = () => track.querySelector('a.on') || links[0];

  const updatePosition = (el, show = true) => {
    if (!el || window.innerWidth <= 640) {
      indicator.style.opacity = '0';
      return;
    }
    const tRect = track.getBoundingClientRect();
    const lRect = el.getBoundingClientRect();
    const left = lRect.left - tRect.left;
    const width = lRect.width;

    indicator.style.width = `${width}px`;
    indicator.style.transform = `translateX(${left}px)`;
    indicator.style.opacity = show ? '1' : '0';
  };

  requestAnimationFrame(() => {
    updatePosition(getActive(), true);
  });

  // Slide ONCE when clicked (no hover jitter, clean transition)
  links.forEach(a => {
    a.onclick = (e) => {
      const href = a.getAttribute('href');
      const route = location.hash.slice(1) || '/';

      if (route === '/') {
        if (href === '#/') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          links.forEach(l => l.classList.remove('on'));
          a.classList.add('on');
          updatePosition(a, true);
        } else if (href === '#/karya') {
          const feat = document.getElementById('home-featured');
          if (feat) {
            e.preventDefault();
            const y = feat.getBoundingClientRect().top + window.scrollY - 62;
            window.scrollTo({ top: y, behavior: 'smooth' });
            links.forEach(l => l.classList.remove('on'));
            a.classList.add('on');
            updatePosition(a, true);
          }
        } else if (href === '#/blog') {
          const lat = document.getElementById('home-latest');
          if (lat) {
            e.preventDefault();
            const y = lat.getBoundingClientRect().top + window.scrollY - 62;
            window.scrollTo({ top: y, behavior: 'smooth' });
            links.forEach(l => l.classList.remove('on'));
            a.classList.add('on');
            updatePosition(a, true);
          }
        }
      } else {
        links.forEach(l => l.classList.remove('on'));
        a.classList.add('on');
        updatePosition(a, true);
      }
    };
  });
}

function initHomeScrollSpy() {
  const curRoute = location.hash.slice(1) || '/';
  if (curRoute !== '/') {
    if (window._homeScrollHandler) {
      window.removeEventListener('scroll', window._homeScrollHandler);
      window._homeScrollHandler = null;
    }
    return;
  }

  const track = document.getElementById('navLinksTrack');
  const indicator = document.getElementById('navIndicator');
  if (!track || !indicator) return;

  const linkHome = track.querySelector('a[href="#/"]');
  const linkWorks = track.querySelector('a[href="#/karya"]');
  const linkBlog = track.querySelector('a[href="#/blog"]');
  if (!linkHome || !linkWorks || !linkBlog) return;

  const secFeatured = document.getElementById('home-featured');
  const secLatest = document.getElementById('home-latest');
  if (!secFeatured || !secLatest) return;

  const setActive = (targetLink) => {
    if (targetLink.classList.contains('on')) return;
    track.querySelectorAll('a').forEach(a => a.classList.remove('on'));
    targetLink.classList.add('on');

    if (window.innerWidth > 640) {
      const tRect = track.getBoundingClientRect();
      const lRect = targetLink.getBoundingClientRect();
      indicator.style.width = `${lRect.width}px`;
      indicator.style.transform = `translateX(${lRect.left - tRect.left}px)`;
      indicator.style.opacity = '1';
    }
  };

  const onScroll = () => {
    const route = location.hash.slice(1) || '/';
    if (route !== '/') return;

    const scrollY = window.scrollY;
    const offset = 95; // 60px header + 35px threshold

    const featuredTop = secFeatured.getBoundingClientRect().top + scrollY - offset;
    const latestTop = secLatest.getBoundingClientRect().top + scrollY - offset;

    if (scrollY >= latestTop) {
      setActive(linkBlog);
    } else if (scrollY >= featuredTop) {
      setActive(linkWorks);
    } else {
      setActive(linkHome);
    }
  };

  if (window._homeScrollHandler) {
    window.removeEventListener('scroll', window._homeScrollHandler);
  }
  window._homeScrollHandler = onScroll;
  window.addEventListener('scroll', onScroll, { passive: true });

  // Initial check on load
  onScroll();
}

window.addEventListener('resize', () => {
  initNavIndicator();
});

function home() {
  return `
    <section class="hero" id="home-hero">
      <h1>${site('tagline')}</h1>
      <p>${site('intro')}</p>
    </section>

    <section id="home-spaces" class="home-scroll-section" style="margin-bottom: 48px;">
      <h2 class="sec" style="margin-top: 0;">${tr('spacesTitle')}</h2>
      <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px;">
        
        <a class="card" href="https://mentayasandbox.vercel.app" target="_blank" rel="noopener noreferrer" style="padding: 20px 18px; text-decoration: none; border: 1px solid var(--line); border-left: 4px solid #4da3ff; background: var(--card); box-shadow: 0 2px 8px #0001;">
          <span style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #4da3ff; letter-spacing: .05em;">// Lab Eksperimen</span>
          <h3 style="margin: 6px 0 4px; font-size: 18px;">MentayaSandbox ↗</h3>
          <p style="font-size: 13px; margin: 0; color: var(--mute); line-height: 1.5;">Catatan riset kode, eksperimen desain, dan computer vision.</p>
        </a>
        
        <a class="card" href="https://dalamdapur.vercel.app" target="_blank" rel="noopener noreferrer" style="padding: 20px 18px; text-decoration: none; border: 1px solid var(--line); border-left: 4px solid #b4441a; background: var(--card); box-shadow: 0 2px 8px #0001;">
          <span style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #b4441a; letter-spacing: .05em;">✦ Katalog Kuliner</span>
          <h3 style="margin: 6px 0 4px; font-size: 18px;">dalam.dapur ↗</h3>
          <p style="font-size: 13px; margin: 0; color: var(--mute); line-height: 1.5;">Koleksi olahan dapur rumahan & pemesanan PO segar.</p>
        </a>
        
        <a class="card" href="https://omahijo.vercel.app" target="_blank" rel="noopener noreferrer" style="padding: 20px 18px; text-decoration: none; border: 1px solid var(--line); border-left: 4px solid #1f7a3d; background: var(--card); box-shadow: 0 2px 8px #0001;">
          <span style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #1f7a3d; letter-spacing: .05em;">● Hidroponik Live</span>
          <h3 style="margin: 6px 0 4px; font-size: 18px;">Omah Ijo ↗</h3>
          <p style="font-size: 13px; margin: 0; color: var(--mute); line-height: 1.5;">Papan harga kebun harian & log urban farming.</p>
        </a>

      </div>
    </section>

    <!-- FEATURED WORK (STICKY BAR) -->
    <section id="home-featured" class="home-scroll-section">
      <div class="sticky-section-bar">
        <div class="sticky-section-bar-inner">
          <h2 class="sec-title">${tr('featured')}</h2>
          <a class="sec-more" href="#/karya">${tr('more')} ↗</a>
        </div>
      </div>
      <div class="grid">${WORKS.slice(0, 3).map(wCard).join('')}</div>
    </section>
    
    <!-- LATEST POST (STICKY BAR) -->
    <section id="home-latest" class="home-scroll-section" style="margin-top: 48px;">
      <div class="sticky-section-bar">
        <div class="sticky-section-bar-inner">
          <h2 class="sec-title">${tr('latest')}</h2>
          <a class="sec-more" href="#/blog">${tr('more')} ↗</a>
        </div>
      </div>
      <div>${POSTS.slice(0, 2).map(pRow).join('')}</div>
    </section>
  `;
}

function works() {
  const filteredWorks = WORKS.filter(w => filter === 'semua' || w.tags.includes(filter));
  const startIndex = (currentWorkPage - 1) * WORKS_PER_PAGE;
  const paginatedWorks = filteredWorks.slice(startIndex, startIndex + WORKS_PER_PAGE);

  const disciplines = [['semua', 'all'], ['website', 'catWeb'], ['design', 'catDesign'], ['others', 'catOthers']];
  const chipsHtml = disciplines.map(([key, name]) =>
    `<button class="chip ${filter === key ? 'on' : ''}" data-f="${key}">${tr(name)}</button>`
  ).join('');

  return `
    <h2 class="sec" style="margin-top:40px">${tr('works')}</h2>
    <div class="chips">${chipsHtml}</div>
    <div class="grid">${paginatedWorks.map(wCard).join('')}</div>
    ${buildPagination(currentWorkPage, filteredWorks.length, WORKS_PER_PAGE, 'works')}
  `;
}

function work(id) {
  const w = WORKS.find(x => x.id === id);
  if (!w) return notFound();

  const disciplines = ['website', 'design', 'others'];
  const cat = w.tags.find(t => disciplines.includes(t.toLowerCase())) || '';
  const init = w.tags.find(t => !disciplines.includes(t.toLowerCase())) || w.initiative || '';

  let catLabel = 'Karya';
  if (cat.toLowerCase() === 'others') catLabel = lang === 'id' ? 'Lab & Eksperimen' : 'Lab & Experiments';
  else if (cat.toLowerCase() === 'design') catLabel = lang === 'id' ? 'Desain Identitas' : 'Identity Design';
  else if (cat.toLowerCase() === 'website') catLabel = 'Website / Web App';

  const tagHtml = w.tags.map(t => {
    if (t.toLowerCase() === 'others') return 'LAB';
    const found = CATS.find(x => x[0] === t.toLowerCase());
    return found ? tr(found[1]).toUpperCase() : t.toUpperCase();
  }).join(' · ');

  return `
    <article class="work-case-view">
      <div class="work-header">
        <a class="work-back-nav" href="#/karya">← ${tr('allWorks')}</a>
        <div class="work-meta-chips">
          <span class="tag">${tagHtml}</span>
          <span class="meta-dot">·</span>
          <span class="work-year-badge">${w.year || '2026'}</span>
        </div>
        <h1 class="work-title">${G('works', w, 't')}</h1>
        <p class="work-summary">${G('works', w, 'd')}</p>

        <div class="work-specs-bar">
          <div class="spec-item">
            <span class="spec-label">${tr('role')}</span>
            <span class="spec-val">${G('works', w, 'role') || '-'}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">${lang === 'id' ? 'Disiplin' : 'Discipline'}</span>
            <span class="spec-val">${catLabel}</span>
          </div>
          ${init ? `
          <div class="spec-item">
            <span class="spec-label">Inisiatif</span>
            <span class="spec-val">${init.toUpperCase()}</span>
          </div>` : ''}
          ${w.link && w.link !== '#' ? `
          <div class="spec-item">
            <span class="spec-label">${lang === 'id' ? 'Tautan Proyek' : 'Project Link'}</span>
            <a class="spec-link" href="${w.link}" target="_blank" rel="noopener">${tr('visit')} ↗</a>
          </div>` : ''}
        </div>
      </div>

      <div class="work-hero-frame">
        ${w.img ? `<img src="${w.img}" alt="${G('works', w, 't')}" class="work-hero-media" loading="eager" />` : cover(w)}
      </div>

      <div class="work-case-body">
        ${G('works', w, 'body')}
      </div>

      <div class="work-footer-nav">
        <a class="btn alt" href="#/karya" style="display:inline-flex; align-items:center; gap:8px;">
          ← ${tr('allWorks')}
        </a>
      </div>
    </article>`;
}

function blog() {
  const sortedPosts = [...POSTS].sort((a, b) => {
    const diff = getPostLikes(b.id) - getPostLikes(a.id);
    if (diff !== 0) return diff;
    return new Date(b.date) - new Date(a.date);
  });
  const startIndex = (currentBlogPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = sortedPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  return `
    <h2 class="sec" style="margin-top:40px">${tr('blog')}</h2>
    ${paginatedPosts.map(pRow).join('')}
    ${buildPagination(currentBlogPage, sortedPosts.length, POSTS_PER_PAGE, 'blog')}
  `;
}

function post(id) {
  const p = POSTS.find(x => x.id === id);
  if (!p) return notFound();
  const rawBody = G('posts', p, 'body');
  const bodyText = renderMarkdown(rawBody);
  const likesCount = getPostLikes(p.id);
  const isLiked = hasUserLiked(p.id);

  return `
    <article>
      <span class="tag">${G('posts', p, 'tag')}</span>
      <h1>${G('posts', p, 't')}</h1>
      <div class="meta">${fmt(p.date)} · ${mins(rawBody)} ${tr('min')} · ❤️ <span id="metaLikes">${likesCount}</span></div>
      <div class="body markdown-body" style="margin-top:28px">${bodyText}</div>
      <hr style="border:0; border-top:1px solid var(--line); margin:40px 0 24px">
      
      <div class="post-footer-actions">
        <div class="post-footer-row">
          <div>
            <p class="meta" style="margin:0 0 10px 0;">${tr('like')}</p>
            <button class="btn-like ${isLiked ? 'liked' : ''}" id="btnLike" onclick="toggleLike('${p.id}')">
              <span class="heart-icon">${isLiked ? '❤️' : '🤍'}</span>
              <span class="like-label">${isLiked ? tr('likedBtn') : tr('likeBtn')}</span>
              <span class="like-count" id="likeCount">${likesCount}</span>
            </button>
          </div>
          
          <div class="author-inline-links">
            <span style="font-size:12px; color:var(--mute); margin-right:2px;">${SITE.name}:</span>
            ${SITE.socials.map(s => `<a href="${s.u}" target="_blank" rel="noopener">${s.n}</a>`).join('<span class="dot">·</span>')}
            <span class="dot">·</span>
            <a href="mailto:${SITE.email}">Email</a>
          </div>
        </div>
      </div>

      <a class="back" href="#/blog" style="margin-top:36px; display:inline-block;">${tr('allPosts')}</a>
    </article>`;
}

/* =========================================
   MARKDOWN ENGINE (OBSIDIAN & GFM)
========================================= */
function renderMarkdown(md) {
  if (!md) return '';
  let text = String(md).replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  const codeBlocks = [];
  // 1. Fenced Code Blocks: ```lang ... ```
  text = text.replace(/`{3,}([a-zA-Z0-9_-]*)\n([\s\S]*?)`{3,}/g, (match, lang, code) => {
    const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const l = (lang || 'text').toLowerCase();
    const token = '@@CODEBLOCK_' + codeBlocks.length + '@@';
    codeBlocks.push(
      '<div class="code-block-wrapper">' +
        '<div class="code-block-header">' +
          '<span class="code-lang">' + (lang || 'code') + '</span>' +
          '<button type="button" class="copy-code-btn" onclick="copyCodeSnippet(this)">Copy</button>' +
        '</div>' +
        '<pre><code class="language-' + l + '">' + escaped + '</code></pre>' +
      '</div>'
    );
    return token;
  });

  // 2. Inline Code: `code`
  const inlineCodes = [];
  text = text.replace(/`([^`\n]+)`/g, (match, code) => {
    const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const token = '@@INLINECODE_' + inlineCodes.length + '@@';
    inlineCodes.push('<code>' + escaped + '</code>');
    return token;
  });

  // 3. Obsidian & GitHub Callouts:
  // > [!NOTE] Title
  // > Body text
  text = text.replace(/^(>[ \t]*\[!([A-Z]+)\][ \t]*(.*?)\n)((?:>[ \t]*[^\n]*\n?)*)/gim, (match, head, type, title, body) => {
    const t = type.toUpperCase();
    const icons = {
      NOTE: 'ℹ️', TIP: '💡', WARNING: '⚠️', IMPORTANT: '⚡',
      CAUTION: '🛑', INFO: 'ℹ️', QUOTE: '💬', SUCCESS: '✅', DANGER: '🔥'
    };
    const icon = icons[t] || '📌';
    const displayTitle = (title || t).trim();
    const cleanBody = body.replace(/^>[ \t]?/gm, '').trim();
    return '<div class="callout callout-' + t.toLowerCase() + '">' +
      '<div class="callout-title"><span class="callout-icon">' + icon + '</span> ' + displayTitle + '</div>' +
      (cleanBody ? '<div class="callout-body">' + cleanBody + '</div>' : '') +
    '</div>\n\n';
  });

  // 4. Standard Blockquotes (non-callout)
  text = text.replace(/^(>[ \t]*[^\n]+(?:\n>[ \t]*[^\n]+)*)/gm, match => {
    const content = match.replace(/^>[ \t]?/gm, '').trim();
    return '<blockquote>' + content + '</blockquote>\n\n';
  });

  // 5. Tables
  text = text.replace(/(?:^|\n)((?:\|[^\n]+\|\n?)+)/gm, match => {
    const lines = match.trim().split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length < 2) return match;
    if (!/^\|[\s\-:|]+\|$/.test(lines[1])) return match;

    const headers = lines[0].split('|').slice(1, -1).map(h => h.trim());
    const alignments = lines[1].split('|').slice(1, -1).map(a => {
      a = a.trim();
      if (a.startsWith(':') && a.endsWith(':')) return 'center';
      if (a.endsWith(':')) return 'right';
      return 'left';
    });
    let html = '\n<div class="table-wrapper"><table><thead><tr>';
    headers.forEach((h, i) => {
      const align = alignments[i] ? ' align="' + alignments[i] + '"' : '';
      html += '<th' + align + '>' + h + '</th>';
    });
    html += '</tr></thead><tbody>';
    for (let i = 2; i < lines.length; i++) {
      const cells = lines[i].split('|').slice(1, -1).map(c => c.trim());
      html += '<tr>';
      cells.forEach((c, idx) => {
        const align = alignments[idx] ? ' align="' + alignments[idx] + '"' : '';
        html += '<td' + align + '>' + (c || '') + '</td>';
      });
      html += '</tr>';
    }
    html += '</tbody></table></div>\n\n';
    return html;
  });

  // 6. Headers
  text = text.replace(/^######[ \t]+(.*)$/gm, '<h6>$1</h6>');
  text = text.replace(/^#####[ \t]+(.*)$/gm, '<h5>$1</h5>');
  text = text.replace(/^####[ \t]+(.*)$/gm, '<h4>$1</h4>');
  text = text.replace(/^###[ \t]+(.*)$/gm, '<h3>$1</h3>');
  text = text.replace(/^##[ \t]+(.*)$/gm, '<h2>$1</h2>');
  text = text.replace(/^#[ \t]+(.*)$/gm, '<h1>$1</h1>');

  // 7. Horizontal Rules
  text = text.replace(/^(?:---|\*\*\*|___)[ \t]*$/gm, '<hr>');

  // 8. Task Lists / Checklists
  text = text.replace(/^[ \t]*-[ \t]+\[ \][ \t]+(.*)$/gm, '<li class="task-item"><input type="checkbox" disabled> $1</li>');
  text = text.replace(/^[ \t]*-[ \t]+\[[xX]\][ \t]+(.*)$/gm, '<li class="task-item"><input type="checkbox" checked disabled> $1</li>');

  // Wrap consecutive task items
  text = text.replace(/((?:<li class="task-item">.*<\/li>\n?)+)/g, '<ul class="task-list">$1</ul>\n\n');

  // 9. Standard Unordered Lists (- or *)
  text = text.replace(/^[ \t]*[-*][ \t]+(.*)$/gm, '<li>$1</li>');
  text = text.replace(/((?:<li>.*<\/li>\n?)+)/g, match => {
    if (match.includes('task-item')) return match;
    return '<ul>' + match + '</ul>\n\n';
  });

  // 10. Ordered Lists
  text = text.replace(/^[ \t]*\d+\.[ \t]+(.*)$/gm, '<oli>$1</oli>');
  text = text.replace(/((?:<oli>.*<\/oli>\n?)+)/g, match => {
    return '<ol>' + match.replace(/<\/?oli>/g, m => m === '<oli>' ? '<li>' : '</li>') + '</ol>\n\n';
  });

  // 11. Images: ![alt](url)
  text = text.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" loading="lazy">');

  // 12. Links: [text](url)
  text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

  // 13. Inline Styles
  // Obsidian highlight: ==highlight==
  text = text.replace(/==([^=\n]+)==/g, '<mark class="obsidian-highlight">$1</mark>');
  // Bold & Italic
  text = text.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/__(.*?)__/g, '<strong>$1</strong>');
  text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
  text = text.replace(/_(.*?)_/g, '<em>$1</em>');
  text = text.replace(/~~(.*?)~~/g, '<del>$1</del>');

  // 14. Paragraphs (split by double newline)
  const blocks = text.split(/\n\s*\n/);
  const blockTagsRegex = /^(<(?:h[1-6]|div|p|blockquote|ul|ol|table|pre|hr)|@@CODEBLOCK_)/i;
  text = blocks.map(b => {
    b = b.trim();
    if (!b) return '';
    if (blockTagsRegex.test(b)) return b;
    return '<p>' + b.replace(/\n/g, '<br>') + '</p>';
  }).filter(Boolean).join('\n\n');

  // 15. Restore Code Blocks & Inline Codes
  text = text.replace(/@@CODEBLOCK_(\d+)@@/g, (_, idx) => codeBlocks[Number(idx)] || '');
  text = text.replace(/@@INLINECODE_(\d+)@@/g, (_, idx) => inlineCodes[Number(idx)] || '');

  return text;
}

window.copyCodeSnippet = function(btn) {
  const wrapper = btn.closest('.code-block-wrapper');
  if (!wrapper) return;
  const code = wrapper.querySelector('pre code');
  if (!code) return;
  navigator.clipboard.writeText(code.innerText).then(() => {
    const orig = btn.textContent;
    btn.textContent = 'Copied! ✓';
    btn.style.color = '#34d399';
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.color = '';
    }, 2000);
  });
};

function contact() {
  return `
    <section class="hero">
      <small>${tr('contact')}</small>
      <h1>${tr('cTitle')}</h1>
      <p>${tr('cText')}</p>
      <a class="btn" href="mailto:${SITE.email}">${SITE.email}</a>
      <div style="margin-top:20px">${socials()}</div>
    </section>`;
}

const notFound = () => `<section class="hero"><h1>${tr('nf')}</h1><a class="btn" href="#/">${tr('toHome')}</a></section>`;

/* =========================================
   APP ROUTER & RENDERER
========================================= */
function render(keepScrollPosition = false) {
  const currentScrollY = window.scrollY;
  const route = location.hash.slice(1) || '/';
  const pathSegments = route.split('/');
  let htmlContent;

  if (route === '/') htmlContent = home();
  else if (route === '/karya') htmlContent = works();
  else if (pathSegments[1] === 'karya') htmlContent = work(pathSegments[2]);
  else if (route === '/blog') htmlContent = blog();
  else if (pathSegments[1] === 'blog') htmlContent = post(pathSegments[2]);
  else if (route === '/kontak') htmlContent = contact();
  else htmlContent = notFound();

  document.documentElement.lang = lang;
  $('#app').innerHTML = htmlContent;
  nav(route);

  $('#nav').classList.remove('open');
  const btnHamburger = $('#hamburger');
  if (btnHamburger) btnHamburger.innerHTML = '☰';

  $('#foot').innerHTML = `
    <div class="site-footer-inner">
      <div class="footer-brand-section">
        <h2 class="footer-title">${SITE.name}</h2>
        <p class="footer-tagline">${site('tagline')}</p>
        <div class="footer-copyright">© ${new Date().getFullYear()}</div>
      </div>

      <div class="footer-links-section">
        <div class="footer-behind-row">
          <span class="footer-behind-label">Man behind</span>
          <a href="https://mentayasandbox.vercel.app" target="_blank" rel="noopener">MentayaSandbox</a>
          <span class="dot">·</span>
          <a href="https://dalamdapur.vercel.app" target="_blank" rel="noopener">dalam.dapur</a>
          <span class="dot">·</span>
          <a href="https://omahijo.vercel.app" target="_blank" rel="noopener">Omah Ijo</a>
        </div>

        <div class="footer-social-inline">
          ${SITE.socials.map(s => `<a href="${s.u}" target="_blank" rel="noopener">${s.n}</a>`).join('<span class="dot">·</span>')}
          <span class="dot">·</span>
          <a href="mailto:${SITE.email}">Email</a>
        </div>
      </div>
    </div>
  `;

  initHomeScrollSpy();

  window.scrollTo(0, keepScrollPosition ? currentScrollY : 0);

  document.querySelectorAll('[data-f]').forEach(button => {
    button.onclick = () => {
      filter = button.dataset.f;
      currentWorkPage = 1;
      render(true);
    };
  });
}

window.addEventListener('hashchange', () => render(false));
render();

// Sinkronisasi otomatis dengan Unified Data Store (data/store.json)
async function syncWithDataStore() {
  try {
    const res = await fetch('data/store.json?t=' + Date.now());
    if (!res.ok) return;
    const data = await res.json();
    if (data.site) {
      if (data.site.name) SITE.name = data.site.name;
      if (data.site.tagline) {
        SITE.tagline = data.site.tagline.id || SITE.tagline;
        EN.site.tagline = data.site.tagline.en || EN.site.tagline;
      }
      if (data.site.intro) {
        SITE.intro = data.site.intro.id || SITE.intro;
        EN.site.intro = data.site.intro.en || EN.site.intro;
      }
      if (data.site.email) SITE.email = data.site.email;
      if (data.site.socials) SITE.socials = data.site.socials;
    }
    if (data.works && data.works.length > 0) {
      WORKS.length = 0;
      data.works.forEach(w => {
        const idContent = w.id_content || {};
        const enContent = w.en_content || {};
        WORKS.push({
          id: w.id,
          tags: w.tags || [],
          t: idContent.t || w.id,
          d: idContent.d || '',
          year: w.year || '',
          role: idContent.role || '',
          hue: w.hue || 140,
          img: w.img || '',
          link: w.link || '#',
          body: idContent.body || ''
        });
        EN.works[w.id] = {
          t: enContent.t || idContent.t || w.id,
          d: enContent.d || idContent.d || '',
          role: enContent.role || idContent.role || '',
          body: enContent.body || idContent.body || ''
        };
      });
    }
    if (data.posts && data.posts.length > 0) {
      POSTS.length = 0;
      data.posts.forEach(p => {
        const idContent = p.id_content || {};
        const enContent = p.en_content || {};
        POSTS.push({
          id: p.id,
          date: p.date || '',
          t: idContent.t || p.id,
          tag: idContent.tag || 'Umum',
          ex: idContent.ex || '',
          body: idContent.body || '',
          likes: p.likes != null ? p.likes : 0
        });
        EN.posts[p.id] = {
          t: enContent.t || idContent.t || p.id,
          tag: enContent.tag || idContent.tag || 'General',
          ex: enContent.ex || idContent.ex || '',
          body: enContent.body || idContent.body || ''
        };
      });
    }
    render(true);
  } catch (e) {
    console.log('Menggunakan data statis.');
  }
}
syncWithDataStore();

const hamburgerBtn = $('#hamburger');
if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', () => {
    const navMenu = $('#nav');
    navMenu.classList.toggle('open');
    hamburgerBtn.innerHTML = navMenu.classList.contains('open') ? '✕' : '☰';
  });
}