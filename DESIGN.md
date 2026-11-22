# DESIGN.md: Ekosistem Digital cahyadies

Dokumen ini menetapkan arah identitas visual, arsitektur informasi, palet warna, tipografi, dan alasan di balik setiap keputusan desain (R-31, R-37) untuk website induk **cahyadies** beserta tiga website anakannya (**MentayaSandbox**, **dalam.dapur**, dan **Omah Ijo**).

## 1. Filosofi Ekosistem & Arsitektur Keluarga

- **Induk (`cahyadies`)**: Arsip galeri karya (website, logo, model AI) dan catatan pikiran (blog). Berperan sebagai rumah utama yang menghubungkan ketiga inisiatif keluarga dan keilmuan.
- **Anakan 1 (`MentayaSandbox`)**: Ruang ekspresi, riset IT/AI terapan, keilmuan berkelanjutan, dan kolaborasi terbuka.
- **Anakan 2 (`dalam.dapur`)**: Katalog lengkap olahan masakan Ibu (makanan berat, kue basah, roti-rotian, kue kering, minuman, frozen food) beserta layanan request menu/pesanan acara.
- **Anakan 3 (`Omah Ijo`)**: Katalog kebun hidroponik Bapak & keluarga yang menampilkan sayur siap panen, estimasi masa tunggu panen (hari menuju siap jual), dan pemesanan/permintaan pasar.

## 2. Prinsip Layout: Compact Editorial Grid (Minim Ruang Kosong)

- **Alasan Layout (R-31)**: Menggunakan proporsi *Compact Editorial Split & Ledger* (`max-width: 1120px`, grid asimetris 2 kolom pada layar lebar, dan pembatas garis tipis `1px solid`) agar informasi padat, elegan, tidak melompong oleh *white space* berlebih, namun tetap bernapas dan rapi.
- **Variasi Ritme Seksi (`RHYTHM 2`)**: Setiap halaman memadukan minimal dua komposisi berbeda (misalnya: *Split Masthead* + *Featured Spotlight* + *Tabular Ledger/Directory* + *Interactive Request Form*) sehingga tidak jatuh pada pola template AI (judul + 3 kartu identik berulang-ulang).
- **Skala Radius Disiplin (R-11)**:
  - `--r-sm: 4px` untuk tombol, chip filter, input, dan label status.
  - `--r-md: 8px` untuk kartu karya, kartu menu, dan panel formulir.
  - `--r-lg: 12px` khusus untuk bingkai pratinjau utama (*flagship showcase*).

## 3. Spesifikasi per Website (Tone, Tipografi & Dials)

### A. Website Induk: `cahyadies`
- **Design Read**: Personal Portfolio, Work Archive & Thought Journal in a Compact Editorial Studio language, dial `ENERGY 2 / RHYTHM 2 / MOTION 1`.
- **Palet Warna (Warm Stone & Studio Ink)**:
  - Light: Background `#F5F3EE`, Surface `#FDFCFA`, Text `#161615`, Muted `#5E5B54` (rasio kontras 6.1:1), Border `#DFDBD2`, Accent `#B84A24` (Terracotta).
  - Dark: Background `#121211`, Surface `#1A1918`, Text `#F2F0EA`, Muted `#A09C93` (rasio kontras 5.8:1), Border `#2C2B28`, Accent `#E87A54`.
- **Tipografi**: `Fraunces` (serif editorial berkarakter untuk judul utama) dipadukan dengan `Inter` (sans-serif fungsional untuk navigasi, isi artikel, dan metadata).

### B. Website Anakan 1: `MentayaSandbox`
- **Design Read**: Open IT Research, Sustainable Knowledge & Collaboration Commons in a Precision Monograph language, dial `ENERGY 2 / RHYTHM 2 / MOTION 1`.
- **Palet Warna (Paper-Tech & Academic Cobalt)**:
  - Light: Background `#F4F6F9`, Surface `#FFFFFF`, Text `#0F172A`, Muted `#475569` (rasio kontras 7.2:1), Border `#CBD5E1`, Accent `#1D4ED8` (Academic Cobalt).
  - Dark: Background `#0B0F17`, Surface `#131B2B`, Text `#F1F5F9`, Muted `#94A3B8` (rasio kontras 5.9:1), Border `#1E293B`, Accent `#60A5FA`.
- **Tipografi**: `Inter` untuk keterbacaan artikel riset dan penjelasan proyek, dipadukan dengan `JetBrains Mono` khusus untuk kode indeks, metrik eksperimen, dan label kategori teknis.

### C. Website Anakan 2: `dalam.dapur`
- **Design Read**: Complete Home Culinary Catalog & Custom Order Kitchen in a Warm Artisanal Pantry language, dial `ENERGY 2 / RHYTHM 2 / MOTION 1`.
- **Palet Warna (Flour Cream & Roasted Terracotta)**:
  - Light: Background `#FAF6F0`, Surface `#FFFFFF`, Text `#261A12`, Muted `#6B5344` (rasio kontras 6.4:1), Border `#E4D7C5`, Accent `#B8431E`.
  - Dark: Background `#17120E`, Surface `#211A14`, Text `#F5EBE1`, Muted `#B09784` (rasio kontras 5.4:1), Border `#382B22`, Accent `#F07B54`.
- **Tipografi**: `Lora` (serif hangat untuk judul dan nama hidangan) dan `Inter` (untuk daftar menu, deskripsi, porsi, serta formulir pesanan).

### D. Website Anakan 3: `Omah Ijo`
- **Design Read**: Family Hydroponic Harvest Catalog, Growth Countdown & Market Booking Board in a Clean Botanical Ledger language, dial `ENERGY 1 / RHYTHM 2 / MOTION 1`.
- **Palet Warna (Botanical Mist & Hydro Leaf Green)**:
  - Light: Background `#F2F6F2`, Surface `#FFFFFF`, Text `#102419`, Muted `#496554` (rasio kontras 6.1:1), Border `#CEE0D4`, Accent `#1B6B40`.
  - Dark: Background `#0C1510`, Surface `#13221A`, Text `#E6F4EC`, Muted `#8AB099` (rasio kontras 6.2:1), Border `#21382B`, Accent `#4ADE80`.
- **Tipografi**: `Inter` untuk nama komoditas dan navigasi, dipadukan dengan `IBM Plex Mono` untuk angka harga tabular, estimasi hari panen (HST), dan kapasitas stok.
