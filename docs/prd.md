Product Requirements Document (PRD)

Proyek: Redesign Digital Showroom & Lead Generation Platform — BYD & Denza Panam (Arista Group Pekanbaru)

Versi Dokumen: 1.1.0 (Penambahan Tech Stack & Ketentuan Fase Demo)

Peran Penyusun: Senior Software Engineer & Vibe Engineer

Target Platform: Web Application (Mobile-First, Instagram/Social In-App Browser Optimized, Desktop Responsive)

Referensi Audit Eksisting: hondasoekarnohattapekanbaru.com (Benchmark struktur dealer lokal Pekanbaru yang ditingkatkan secara menyeluruh)

1. Ringkasan Eksekutif & Visi Produk

Proyek ini bertujuan merombak total pengalaman website dealer otomotif konvensional menjadi Digital Showroom Kelas Premium yang cepat, interaktif, dan berorientasi pada konversi (high-converting lead generation).

Mengambil pembelajaran dari audit teknis pada website referensi (hondasoekarnohattapekanbaru.com) yang masih bersifat statis, memiliki kebocoran markup HTML (">), serta kehilangan jejak atribusi iklan sosial media (utm_source=ig, fbclid), platform baru ini dirancang khusus untuk memamerkan lini kendaraan masa depan Denza (Segmen Luxury Flagship) dan BYD (Segmen EV & PHEV/DM) untuk cabang BYD | Denza Panam (Arista Group) dengan estetika sekelas Polestar dan Tesla.

2. Masalah Utama yang Diselesaikan (Problem Statement)

Friksi Tinggi dari Trafik Sosial Media: Mayoritas pengunjung datang dari tautan bio Instagram (utm_source=ig&utm_medium=social&utm_content=link_in_bio). Website dealer lama lambat dimuat di in-app browser dan mengharuskan pengunjung mencari nomor kontak secara manual.

Katalog Statis yang Sulit Dibaca di Layar Ponsel: Menampilkan tabel harga pada gambar brosur statis menyulitkan calon pembeli membandingkan varian (misalnya membedakan varian Classic vs Cross pada BYD M6 DM atau Premium Ext Range vs Performance AWD pada BYD Seal).

Hilangnya Peluang Pre-Order Unit Baru: Unit berstatus Arriving Soon (Denza B5 dan Denza Z9 GT) membutuhkan mekanisme VIP Waitlist / Pre-Book khusus, bukan sekadar gambar pasif.

Ketiadaan Atribusi Data Marketing: Parameter UTM dan fbclid dari kampanye iklan tidak diteruskan ke pesan WhatsApp sales sehingga efektivitas iklan sulit diukur.

3. Target Pengguna (User Personas)

The Executive Luxury Seeker (Target: Denza D9, B5, Z9 GT)

Pengusaha atau eksekutif di Pekanbaru/Riau yang mengutamakan kemewahan, kenyamanan captain seat, prestise, dan layanan VIP Home Test Drive.

The Modern Family & Tech Upgrader (Target: BYD Seal, Sealion 7, M6, M6 DM, Atto 3)

Keluarga mapan yang ingin beralih ke mobil listrik murni (EV) atau Plug-in Hybrid / Dual Mode (M6 DM) untuk perjalanan dalam dan luar kota Sumatera dengan efisiensi tinggi.

The Smart Urban Commuter (Target: BYD Dolphin, Atto 1)

Profesional muda atau pembeli mobil listrik pertama yang sensitif terhadap harga OTR, skema DP ringan, dan cicilan bulanan yang terjangkau.

4. Kebutuhan Fungsional (Functional Requirements)

FR-01: Dual-Atmosphere Flagship Hero (Denza Showcase)

Menampilkan Hero Section bernuansa Dark Obsidian Luxury untuk lini DENZA.

Highlight Utama: Denza D9 dengan informasi harga resmi Rp 986.500.000, kapasitas baterai 103,3 kWh, dan jarak tempuh 600 km.

VIP Waitlist Cards: Kartu interaktif untuk Denza B5 ("Beyond Bold, Beyond Boundaries") dan Denza Z9 GT ("Technology Drives Elegance") dengan badge ARRIVING SOON dan tombol CTA "Daftar Prioritas & Info Peluncuran".

FR-02: Interactive BYD Showroom Catalog

Katalog interaktif dengan fitur filter cepat: Semua Unit, SUV & Crossover, MPV Keluarga, Sedan Sport, City Hatchback, dan PHEV / Dual Mode (DM).

Dynamic Variant Switcher: Pengguna dapat menekan tab varian pada setiap kartu mobil (contoh: memilih antara Standard, Superior 7 Seater, atau Superior Captain S pada BYD M6) dan melihat perubahan kapasitas baterai (kWh), jarak tempuh (KM), serta harga OTR secara instan tanpa memuat ulang halaman.

Sub-Category Handler (Khusus BYD M6 DM): Mendukung pengelompokan dua tingkat yaitu kategori CLASSIC (Standard, Dynamic) dan CROSS (Advanced, Superior, Superior Captain S).

Interactive Color Swatch Preview: Menampilkan titik warna (color dots) sesuai ketersediaan masing-masing model beserta nama warna ketika disentuh.

FR-03: Kalkulator Simulasi Kredit & Estimasi Cicilan Instan

Modal/Drawer interaktif yang terbuka ketika pengguna menekan tombol "Simulasi Kredit" pada varian mana pun.

Pengguna dapat mengatur persentase Uang Muka ($DP$) mulai dari $15\%$ hingga $50\%$ dan tenor ($T$) mulai dari $1$ hingga $5$ tahun ($12$ hingga $60$ bulan).

Perhitungan estimasi pokok kredit dan cicilan bulanan dilakukan secara real-time dengan rumus standar pembiayaan:


$$P_{\text{pinjaman}} = H_{\text{OTR}} \times \left(1 - \frac{\text{DP}_{\%}}{100}\right)$$

$$M_{\text{cicilan}} = \frac{P_{\text{pinjaman}} + \left(P_{\text{pinjaman}} \times r \times T\right)}{T \times 12}$$


(di mana $H_{\text{OTR}}$ adalah harga OTR unit, $r$ adalah suku bunga indikatif tahunan, dan $T$ adalah tenor dalam tahun).

FR-04: Smart "Test Drive & Pemesanan" Funnel (WhatsApp Deep-Link)

Menggantikan bagian bawah brosur Test Drive & Pemesanan menjadi:

Sticky Bottom Conversion Bar pada layar ponsel.

Interactive Booking Section di bagian bawah halaman.

Formulir singkat: Nama, Pilih Unit & Varian, Pilih Layanan (Jadwalkan Test Drive di Rumah/Showroom, Minta Hitungan Promo & Diskon, Pre-Book Denza), dan Tanggal Rencana.

UTM & Attribution Persistence: Sistem otomatis menyimpan utm_source, utm_medium, utm_content, dan fbclid dari URL kedatangan ke sessionStorage dan menyisipkannya ke dalam pesan WhatsApp otomatis.

5. Master Data Konten & Spesifikasi (Single Source of Truth)

Catatan Kualitas Data (Data Hygiene):
Pada materi brosur asli terdapat kesalahan ketik Peformance AWD pada model BYD SEAL dan BYD SEALION 7. Di seluruh antarmuka website dan database, penulisan wajib dikoreksi menjadi Performance AWD.

A. Lini Luxury Flagship — DENZA

Model

Varian / Status

Tagline

Kapasitas Baterai

Jarak Tempuh

Harga OTR

DENZA D9

Flagship MPV (Available)

Luxury Electric MPV

103,3 kWh

600 KM

Rp 986.500.000

DENZA B5

Arriving Soon

Beyond Bold, Beyond Boundaries

TBA

TBA

Pre-Order / Waitlist

DENZA Z9 GT

Arriving Soon

Technology Drives Elegance

TBA

TBA

Pre-Order / Waitlist

B. Lini Kendaraan Listrik & Dual Mode — BYD

Model

Sub-Kategori

Varian

Kapasitas Baterai

Jarak Tempuh

Harga OTR

Indikator Warna (Swatches)

BYD SEAL

EV Sedan

Premium Ext Range

82.5 kWh

650 KM

Rp 656.500.000

4 Warna (Hitam, Abu Tua, Biru, Putih)

BYD SEAL

EV Sedan

Performance AWD

82.5 kWh

580 KM

Rp 767.500.000

4 Warna (Hitam, Abu Tua, Biru, Putih)

BYD SEALION 7

EV SUV

Premium Ext Range

82.5 kWh

567 KM

Rp 640.500.000

4 Warna (Hitam, Abu Tua, Biru, Putih)

BYD SEALION 7

EV SUV

Performance AWD

82.5 kWh

542 KM

Rp 730.500.000

4 Warna (Hitam, Abu Tua, Biru, Putih)

BYD M6

EV MPV

Standard

55.4 kWh

420 KM

Rp 415.000.000

4 Warna (Hitam, Biru Tua, Abu-abu, Putih)

BYD M6

EV MPV

Superior 7 Seater

71.8 kWh

530 KM

Rp 443.000.000

4 Warna (Hitam, Biru Tua, Abu-abu, Putih)

BYD M6

EV MPV

Superior Captain S

71.8 kWh

530 KM

Rp 453.000.000

4 Warna (Hitam, Biru Tua, Abu-abu, Putih)

BYD M6 DM

CLASSIC

Standard

7.4 kWh

- (PHEV)

Rp 318.500.000

Silver / Standar Seri DM

BYD M6 DM

CLASSIC

Dynamic

7.4 kWh

- (PHEV)

Rp 338.500.000

Silver / Standar Seri DM

BYD M6 DM

CROSS

Advanced

18.3 kWh

- (PHEV)

Rp 380.500.000

Silver / Standar Seri DM

BYD M6 DM

CROSS

Superior

18.3 kWh

- (PHEV)

Rp 400.500.000

Silver / Standar Seri DM

BYD M6 DM

CROSS

Superior Captain S

18.3 kWh

- (PHEV)

Rp 410.500.000

Silver / Standar Seri DM

BYD ATTO 3

EV SUV

Advanced Plus

49.9 kWh

410 KM

Rp 442.000.000

3 Warna (Hitam, Biru/Abu Tua, Putih)

BYD DOLPHIN

EV Hatchback

Premium

60.4 kWh

490 KM

Rp 440.300.000

6 Warna (Abu, Biru Muda, Putih, Biru Tua, Ungu Pastel, Krem)

BYD ATTO 1

Compact EV

Standard

30.0 kWh

300 KM

Rp 222.000.000

3 Warna (Hitam, Putih, Kuning Lime)

BYD ATTO 1

Compact EV

Dynamic Std

30.0 kWh

300 KM

Rp 233.000.000

3 Warna (Hitam, Putih, Kuning Lime)

BYD ATTO 1

Compact EV

Premium

38.0 kWh

380 KM

Rp 266.000.000

3 Warna (Hitam, Putih, Kuning Lime)

6. Kebutuhan Non-Fungsional & Standar Kualitas Engineering

Performa & Core Web Vitals:

Skor Google Lighthouse Performance $\ge 92$ pada perangkat mobile.

Waktu First Contentful Paint (FCP) $< 1.2\text{ detik}$ pada jaringan 4G/LTE di Pekanbaru.

Validitas Markup & Aksesibilitas:

Zero Broken DOM Rule: Bebas dari artefak karakter bocor seperti "> yang ditemukan pada web referensi lama.

Semua tombol interaktif dan color swatch wajib memiliki aria-label yang jelas.

SEO Lokal Pekanbaru & Riau:

Implementasi JSON-LD Structured Data (AutoDealer dan Vehicle dengan Offer dalam mata uang IDR).

Meta OpenGraph dinamis sehingga ketika tautan dibagikan di WhatsApp atau Instagram Story, muncul pratinjau kartu mewah berlogo BYD | Denza Panam — Arista.

7. Tech Stack & Arsitektur Teknis

Pemilihan stack didasarkan pada tiga target utama PRD: performa mobile tinggi (Lighthouse ≥ 92, FCP < 1.2 detik), SEO lokal (JSON-LD + OpenGraph dinamis), dan kemudahan iterasi desain untuk demo klien.

| Lapisan | Teknologi | Alasan Pemilihan |
|---|---|---|
| Framework | Next.js 15 (App Router) + React 19 | Static Site Generation (SSG) menghasilkan HTML siap saji → FCP cepat di in-app browser Instagram. Mendukung Metadata API untuk OpenGraph dinamis & JSON-LD secara native. |
| Bahasa | TypeScript (Strict Mode) | Kontrak data katalog (agent.md §3) type-safe; mencegah bug Rp NaN / undefined KM pada unit ARRIVING_SOON & M6 DM. |
| Styling | Tailwind CSS v4 | Konsisten dengan token pada design system.md; CSS hasil build sangat kecil (hanya class yang dipakai). |
| Animasi | Motion (framer-motion) | Transisi varian (opacity + slide-y 200ms), drawer simulasi kredit, dan shimmer badge ARRIVING SOON. |
| Ikon | lucide-react | Tree-shakable, ringan, sesuai daftar ikon di agent.md. |
| Font | next/font (Plus Jakarta Sans, Inter, JetBrains Mono) | Self-hosted otomatis, tanpa layout shift (CLS), tanpa request eksternal ke Google Fonts. |
| Gambar | next/image (AVIF/WebP, lazy-load, ukuran responsif) | Krusial untuk skor Lighthouse karena halaman didominasi foto mobil. |
| State | React Hooks (useState, useMemo, useEffect) | Tidak perlu state manager eksternal; seluruh data bersifat statis dari src/data/catalog.ts. |
| Atribusi | sessionStorage + URLSearchParams (custom hook useAttribution) | Menyimpan utm_source, utm_medium, utm_content, fbclid untuk disisipkan ke pesan WhatsApp. |
| Kualitas Kode | ESLint + Prettier | Menjaga aturan Zero Broken DOM & konsistensi kode. |
| Deployment | Vercel (tier gratis untuk demo) | Preview URL instan untuk dibagikan ke klien, CDN global, HTTPS otomatis. |

Struktur Folder yang Direkomendasikan:

src/
  app/            → layout.tsx (metadata, font, JSON-LD), page.tsx, opengraph-image.tsx
  components/     → Navbar, DenzaFlagshipHero, BydCatalogSection, VehicleShowroomCard, CreditSimulatorModal, TestDriveBookingSection, StickyMobileBar
  data/           → catalog.ts (Single Source of Truth), site.ts (nomor WA, suku bunga, info dealer)
  hooks/          → useAttribution.ts
  lib/            → formatRupiah.ts, credit.ts (rumus FR-03), whatsapp.ts (generator pesan)
public/
  images/cars/    → aset foto kendaraan (WebP/AVIF)

Aset Foto Kendaraan:

Fase Demo: Menggunakan foto ilustrasi sementara (AI-generated / stok) yang disimpan lokal di public/images/cars/, dengan nama file sesuai id model (contoh: byd-seal.webp, denza-d9.webp) agar mudah diganti.

Fase Produksi: Wajib diganti dengan foto resmi dari press kit BYD Indonesia / materi brosur dealer (atas izin klien). Format WebP/AVIF, latar transparan atau studio netral, rasio 16:10, lebar minimal 1600px.

8. Ketentuan Fase Demo (Prototype untuk Presentasi Klien)

Tahap awal proyek difokuskan untuk mendemokan tampilan dan alur interaksi kepada klien. Beberapa parameter bisnis menggunakan nilai sementara (placeholder) yang dipusatkan di src/data/site.ts sehingga cukup diubah di satu tempat:

| Parameter | Nilai Demo | Catatan |
|---|---|---|
| Nomor WhatsApp Sales | 08xxxxxxxxxx (format wa.me: 628xxxxxxxxxx) | Ditampilkan sebagai template; diganti nomor resmi sebelum go-live. |
| Suku Bunga Indikatif (r) | Placeholder (belum ditetapkan) | Kalkulator tetap berfungsi secara visual dengan label "Estimasi Ilustrasi — bukan penawaran resmi". Nilai final menunggu konfirmasi leasing/klien. |
| Foto Kendaraan | Ilustrasi sementara | Lihat bagian 7 — Aset Foto Kendaraan. |
| Alamat & Jam Operasional Dealer | Placeholder | Dilengkapi dari data resmi Arista Group Pekanbaru. |

Seluruh harga OTR dan spesifikasi teknis tetap menggunakan data asli dari bagian 5 (bukan placeholder).