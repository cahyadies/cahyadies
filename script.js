/* =========================================
   DATA DAN PENGATURAN UTAMA (PERSONA: ARSIP)
========================================= */
const SITE = {
    name: 'Eko Sugeng Cahyadi',
    tagline: 'Arsip dari hal-hal yang saya buat, eksplorasi, dan pelajari.',
    intro: 'Sebuah arsip personal dari karya, eksperimen, dan proses belajar saya di bidang desain visual, web development, dan computer vision. Bukan sekadar hasil akhir, tapi juga tentang ide dan proses di baliknya.',
    email: 'halo@contoh.com',
    socials: [
        { n: 'Instagram', u: '#' },
        { n: 'LinkedIn', u: '#' },
        { n: 'GitHub', u: '#' }
    ]
};

/* =========================================
   KATEGORI & PROJECT SPACES (FILTER 2 DIMENSI)
========================================= */
const CATS = [
    ['semua', 'all'],
    // Dimensi 1: Skill / Bidang
    ['design', 'catDesign'],
    ['web', 'catWeb'],
    ['cv', 'catCV'],
    // Dimensi 2: Project Spaces
    ['mentaya', 'catMentaya'],
    ['omahijo', 'catOmahIjo'],
    ['dapur', 'catDapur']
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
        tags: ['web', 'dapur'],
        t: 'Landing Page dalam.dapur',
        d: 'Halaman penjualan sederhana untuk produk rumahan.',
        hue: 95, year: '2025', role: 'Desain & pengembangan web', img: '', link: '#',
        body: 'Landing page cepat, ringan, dan mudah dibuka dari HP.'
    },
    {
        id: 'cv-botol',
        tags: ['cv'],
        t: 'Estimasi Volume Botol dengan CV',
        d: 'Menghitung volume botol yang mengapung dari gambar kamera.',
        hue: 185, year: '2026', role: 'Computer vision', img: '', link: '#',
        body: 'Penjelasan pendekatan teknis, tantangan pemantulan cahaya pada air, sudut kamera, dan akurasi model.'
    },
    {
        id: 'omahijo-sistem',
        tags: ['omahijo'],
        t: 'Instalasi & Katalog Omah Ijo',
        d: 'Dokumentasi sistem tanam dan log hidroponik.',
        hue: 65, year: '2025', role: 'Urban Farming', img: '',
        body: 'Mencatat perkembangan tanaman, proses penyemaian di rockwool, hingga manajemen sirkulasi nutrisi.'
    }
];

/* =========================================
   POSTS / BLOG
========================================= */
const POSTS = [
    { id: 'mulai-dari-brief', t: 'Dari Brief Singkat ke Logo yang Dipakai Bertahun-tahun', date: '2026-09-20', tag: 'Desain', ex: 'Cara aku mengubah permintaan "yang penting bagus" menjadi arah visual yang jelas.', body: `<p>Hampir semua proyek logo dimulai dari kalimat yang sama: "yang penting bagus." Tugas pertama bukan menggambar, melainkan menggali apa arti bagus bagi klien.</p><h2>1. Tanyakan hal yang tidak berhubungan dengan visual</h2><p>Siapa pelanggannya? Di mana logo akan paling sering terlihat? Jawabannya menentukan ukuran, kontras, dan tingkat detail.</p><blockquote>Logo yang baik bisa dikenali saat kecil, hitam putih, dan dilihat sekilas.</blockquote><h2>2. Sketsa kasar dulu</h2><p>Sebelum membuka software, buat puluhan sketsa jelek.</p>` },
    { id: 'belajar-cv', t: 'Catatan Belajar Computer Vision untuk Pemula Nekat', d: '', date: '2026-08-02', tag: 'Teknologi', ex: 'Hal-hal yang kuharap kuketahui sebelum mencoba mengukur benda dari kamera.', body: `<p>Computer vision terlihat seperti sihir sampai kamu mencoba mengukur sesuatu dengan benar. Tulisan ini contoh tampilan artikel panjang.</p><h2>Cahaya adalah segalanya</h2><p>Pantulan dan bayangan bisa merusak hasil lebih parah daripada algoritma yang salah. Mulai dari kondisi pencahayaan yang terkontrol.</p>` }
];

/* =========================================
   TERJEMAHAN (TRANSLATIONS)
========================================= */
const EN = {
    site: {
        tagline: 'An archive of things I\'ve made, explored, and learned.',
        intro: 'A personal archive of my work, experiments, and learning process across visual design, web development, and computer vision. Not just the outcomes, but also the ideas and processes behind them.'
    },
    works: {
        gerigi: { t: 'Shuttle GERIGI ITS Identity', d: 'Logo and visual identity for a shuttle service for new university students.', role: 'Logo, colors, social assets', body: 'The logo was designed to be recognizable on uniforms, buses, and social media.' },
        label: { t: 'dalam.dapur Product Labels', d: 'Label design for hydroponic vegetables and home-baked goods.', role: 'Label & packaging design', body: 'The labels feel warm and honest, matching the character of a home business.' },
        'dd-web': { t: 'dalam.dapur Landing Page', d: 'A simple sales page for home-made products.', role: 'Web design & development', body: 'A fast, lightweight landing page that opens well on phones.' },
        'cv-botol': { t: 'Bottle Volume Estimation with CV', d: 'Estimating the volume of a floating bottle from camera images.', role: 'Computer vision', body: 'Explain the approach, the challenges (water reflections, camera angle), and the accuracy achieved.' },
        'omahijo-sistem': { t: 'Omah Ijo Installation & Catalog', d: 'Documentation of the planting system and hydroponic logs.', role: 'Urban Farming', body: 'Logging plant development, rockwool seeding process, and nutrient circulation management.' }
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
        catDesign: 'Design', catWeb: 'Web Development', catCV: 'Computer Vision & Research',
        catMentaya: 'MentayaSandbox', catOmahIjo: 'Omah Ijo', catDapur: 'dalam.dapur',
        spacesTitle: 'Ruang Proyek & Inisiatif',
        folio: 'Arsip Digital', seeWorks: 'Lihat karya', readPosts: 'Baca tulisan', featured: 'Karya pilihan', latest: 'Tulisan terbaru', more: 'Semua →', connect: 'Terhubung', year: 'Tahun', role: 'Peran', visit: 'Kunjungi proyek ↗', allWorks: '← Semua karya', allPosts: '← Semua tulisan', min: 'menit baca', like: 'Suka tulisan ini?', cTitle: 'Ada proyek? Ayo ngobrol.', cText: 'Hubungi lewat email atau sosial media.', nf: 'Halaman tidak ditemukan', toHome: 'Ke beranda', theme: 'Ganti tema', loc: 'id-ID', prev: '← Sebelumnya', next: 'Selanjutnya →'
    },
    en: {
        home: 'Home', works: 'Works', blog: 'Blog', contact: 'Contact',
        all: 'All',
        catDesign: 'Design', catWeb: 'Web Development', catCV: 'Computer Vision & Research',
        catMentaya: 'MentayaSandbox', catOmahIjo: 'Omah Ijo', catDapur: 'dalam.dapur',
        spacesTitle: 'Project Spaces & Initiatives',
        folio: 'Digital Archive', seeWorks: 'See my work', readPosts: 'Read my writing', featured: 'Featured work', latest: 'Latest posts', more: 'View all →', connect: 'Connect', year: 'Year', role: 'Role', visit: 'Visit project ↗', allWorks: '← All works', allPosts: '← All posts', min: 'min read', like: 'Enjoyed this post?', cTitle: 'Got a project? Let\'s talk.', cText: 'Reach out by email or social media.', nf: 'Page not found', toHome: 'Back home', theme: 'Toggle theme', loc: 'en-US', prev: '← Prev', next: 'Next →'
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
   UI COMPONENTS GENERATOR
========================================= */
const cover = work => {
    const title = G('works', work, 't');
    if (work.img) return `<div class="cover" style="background-image:url('${work.img}')"></div>`;
    return `<div class="cover" style="background-image:linear-gradient(135deg, hsl(${work.hue} 60% 55%), hsl(${(work.hue + 40) % 360} 55% 32%))">${title[0]}</div>`;
};

const wCard = work => {
    const tagHtml = work.tags.map(t => {
        const found = CATS.find(x => x[0] === t);
        return found ? tr(found[1]) : t;
    }).join(' · ');

    return `
  <a class="card" href="#/karya/${work.id}">
    ${cover(work)}
    <div class="in">
      <span class="tag" style="white-space:normal; line-height:1.4">${tagHtml}</span>
      <h3 style="margin-top:8px">${G('works', work, 't')}</h3>
      <p>${G('works', work, 'd')}</p>
    </div>
  </a>`;
};

const pRow = post => {
    const bodyText = G('posts', post, 'body');
    return `
  <a class="post-row" href="#/blog/${post.id}">
    <span class="tag">${G('posts', post, 'tag')}</span>
    <h3>${G('posts', post, 't')}</h3>
    <p>${G('posts', post, 'ex')}</p>
    <span class="meta">${fmt(post.date)} · ${mins(bodyText)} ${tr('min')}</span>
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
    let navHtml = links.map(([href, key]) => {
        const isActive = currentRoute === href || (href !== '/' && currentRoute.startsWith(href));
        return `<a href="#${href}" class="${isActive ? 'on' : ''}">${tr(key)}</a>`;
    }).join('');

    navHtml += `
    <div class="nav-actions">
      <button id="lg" aria-label="Language">${lang === 'id' ? 'EN' : 'ID'}</button>
      <button id="th" aria-label="${tr('theme')}">◐</button>
    </div>
  `;

    $('#nav').innerHTML = navHtml;

    $('#th').onclick = () => {
        const doc = document.documentElement;
        const isDark = getComputedStyle(doc).getPropertyValue('--bg').trim() === '#161412';
        doc.dataset.theme = isDark ? 'light' : 'dark';
    };

    $('#lg').onclick = () => {
        lang = lang === 'id' ? 'en' : 'id';
        try { localStorage.setItem('lang', lang); } catch (e) { }
        render(true);
    };
}

function home() {
    return `
    <section class="hero">
      <h1>${site('tagline')}</h1>
      <p>${site('intro')}</p>
      <a class="btn" href="#/karya">${tr('seeWorks')}</a>
      <a class="btn alt" href="#/blog">${tr('readPosts')}</a>
    </section>

    <h2 class="sec" style="margin-top: 0;">${tr('spacesTitle')}</h2>
    <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; margin-bottom: 56px;">
      
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

    <h2 class="sec">${tr('featured')} <a href="#/karya">${tr('more')}</a></h2>
    <div class="grid">${WORKS.slice(0, 3).map(wCard).join('')}</div>
    
    <h2 class="sec">${tr('latest')} <a href="#/blog">${tr('more')}</a></h2>
    ${POSTS.slice(0, 2).map(pRow).join('')}
    
    <h2 class="sec">${tr('connect')}</h2>
    ${socials()}`;
}

function works() {
    const filteredWorks = WORKS.filter(w => filter === 'semua' || w.tags.includes(filter));
    const startIndex = (currentWorkPage - 1) * WORKS_PER_PAGE;
    const paginatedWorks = filteredWorks.slice(startIndex, startIndex + WORKS_PER_PAGE);

    const chipsHtml = CATS.map(([key, name]) =>
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

    const tagHtml = w.tags.map(t => {
        const found = CATS.find(x => x[0] === t);
        return found ? tr(found[1]) : t;
    }).join(' · ');

    return `
    <div class="detail">
      ${cover(w)}
      <div>
        <span class="tag">${tagHtml}</span>
        <h1 style="margin-top:8px">${G('works', w, 't')}</h1>
        <p>${G('works', w, 'd')}</p>
        <ul class="facts">
          <li><b>${tr('year')}:</b> ${w.year}</li>
          <li><b>${tr('role')}:</b> ${G('works', w, 'role')}</li>
        </ul>
        <p>${G('works', w, 'body')}</p>
        ${w.link ? `<a class="btn" href="${w.link}" target="_blank" rel="noopener">${tr('visit')}</a>` : ''}
        <br><a class="back" href="#/karya">${tr('allWorks')}</a>
      </div>
    </div>`;
}

function blog() {
    const startIndex = (currentBlogPage - 1) * POSTS_PER_PAGE;
    const paginatedPosts = POSTS.slice(startIndex, startIndex + POSTS_PER_PAGE);
    return `
    <h2 class="sec" style="margin-top:40px">${tr('blog')}</h2>
    ${paginatedPosts.map(pRow).join('')}
    ${buildPagination(currentBlogPage, POSTS.length, POSTS_PER_PAGE, 'blog')}
  `;
}

function post(id) {
    const p = POSTS.find(x => x.id === id);
    if (!p) return notFound();
    const bodyText = G('posts', p, 'body');
    return `
    <article>
      <span class="tag">${G('posts', p, 'tag')}</span>
      <h1>${G('posts', p, 't')}</h1>
      <div class="meta">${fmt(p.date)} · ${mins(bodyText)} ${tr('min')}</div>
      <div class="body" style="margin-top:28px">${bodyText}</div>
      <hr style="border:0; border-top:1px solid var(--line); margin:40px 0 24px">
      <p class="meta">${tr('like')}</p>
      ${socials()}
      <a class="back" href="#/blog">${tr('allPosts')}</a>
    </article>`;
}

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
    <div style="display:flex; flex-wrap:wrap; justify-content:space-between; gap: 20px; align-items:flex-end;">
      <div>
        <b style="color:var(--fg); font-size:18px;">${SITE.name}</b>
        <p style="margin: 4px 0 16px; max-width: 320px; color:var(--mute);">${site('tagline')}</p>
        <div style="font-size: 13px; color:var(--mute);">
          <b>Ecosystem:</b> MentayaSandbox · dalam.dapur · Omah Ijo
        </div>
      </div>
      <div style="text-align: right;">
        ${socials()}
        <div style="margin-top: 16px; font-size: 13px; color:var(--mute);">© ${new Date().getFullYear()}</div>
      </div>
    </div>
  `;

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

const hamburgerBtn = $('#hamburger');
if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        const navMenu = $('#nav');
        navMenu.classList.toggle('open');
        hamburgerBtn.innerHTML = navMenu.classList.contains('open') ? '✕' : '☰';
    });
}