# Design System & Vibe Engineering Guidelines

Versi: 2.0.0 (Pure Architectural White & Monochromatic Luxury Edition)

Tema Visual: "Pure Architectural White Showroom"

Dokumen ini adalah panduan desain antarmuka (UI), atmosfer visual, tipografi, palet warna, dan perilaku interaksi untuk website BYD & Denza Panam (Arista Group Pekanbaru). Prinsip utama desain adalah kesederhanaan mewah (luxurious minimalism) dengan dominasi warna putih bersih (Pure White), kontras monokromatik presisi, tanpa penggunaan emoji maupun simbol dekoratif.

---

## 1. Prinsip Utama Desain

### A. Dominasi Primary Warna Putih (Architectural High-Key Gallery)
- **Latar Belakang & Permukaan Utama:** Mengutamakan warna putih murni (`#FFFFFF`) dan alabaster lembut (`#F8FAFC` hingga `#F1F5F9`) di seluruh halaman, termasuk Hero Section. Suasana menyerupai galeri arsitektur otomotif kelas atas (seperti galeri Polestar, Porsche Studio, dan Tesla).
- **Pencahayaan Studio Bersih:** Mengeliminasi efek cahaya neon berlebihan (radial glow warna-warni). Menggantinya dengan gradasi abu-abu perak monokromatik yang halus, bayangan lantai lembut (diffused ambient floor shadows), dan garis tepi ultra-presisi (crisp hairline borders).

### B. Bebas Emoji dan Simbol Dekoratif (Zero Emoji & Zero Decorative Symbols)
- **Larangan Total Emoji:** Tidak boleh ada emoji apa pun (seperti lambaian tangan, gembok, mobil, petir, bintang) baik pada antarmuka website, tombol aksi, maupun teks pesan otomatis WhatsApp.
- **Hindari Simbol Bebas:** Hindari penggunaan karakter simbol manual seperti peluru (`•`), titik tengah (`·`), garis pipa (`|`), atau tanda bintang (`*`) di dalam teks judul, deskripsi, maupun formulir.
- **Pemisah Semantik:** Gunakan elemen UI terstruktur (seperti border tipis, lencana/badge formal, dan flexbox gap) sebagai pengganti simbol pemisah teks.

### C. Tipografi Presisi Otomotif (Tabular Numerals)
- Seluruh data teknis (kapasitas baterai kWh, jarak tempuh KM, dan nominal Rupiah) wajib menggunakan font mono dengan `font-variant-numeric: tabular-nums` agar sejajar sempurna dan mudah dipindai.

---

## 2. Sistem Warna (Color Tokens)

### A. Surface & Background Tokens
| Token Name | Tailwind Class | Nilai Hex | Penggunaan Utama |
|---|---|---|---|
| `--bg-canvas` | `bg-white` | `#FFFFFF` | Latar belakang kanvas utama halaman & kartu showroom |
| `--bg-subtle` | `bg-slate-50` | `#F8FAFC` | Latar belakang seksi katalog, header tabel, dan input form |
| `--bg-elevated` | `bg-white` | `#FFFFFF` | Kartu produk mobil, modal simulasi, dropdown |
| `--border-subtle` | `border-slate-200` | `#E2E8F0` | Garis pembatas kartu dan pemisah baris tabel |
| `--border-strong` | `border-slate-300` | `#CBD5E1` | Garis batas elemen interaktif saat hover |

### B. Typography & Contrast Tokens
| Token Name | Tailwind Class | Nilai Hex | Penggunaan Utama |
|---|---|---|---|
| `--text-primary` | `text-slate-900` | `#0F172A` | Judul utama, nama model, harga OTR resmi |
| `--text-secondary` | `text-slate-600` | `#475569` | Label spesifikasi teknis, paragraf penjelasan |
| `--text-muted` | `text-slate-400` | `#94A3B8` | Label sekunder, keterangan tanggal, placeholder |

### C. Action & Component Tokens
| Token Name | Tailwind Class | Penggunaan |
|---|---|---|
| `--btn-primary-bg` | `bg-slate-900 text-white` | Tombol aksi primer berdaya kontras tinggi |
| `--btn-primary-hover` | `hover:bg-slate-800` | State hover tombol primer |
| `--btn-secondary-bg` | `bg-white text-slate-900 border border-slate-300` | Tombol aksi sekunder (Simulasi Kredit, Detail) |
| `--btn-secondary-hover`| `hover:bg-slate-50 hover:border-slate-400` | State hover tombol sekunder |
| `--badge-status-bg` | `bg-slate-100 text-slate-800 border border-slate-200` | Lencana status varian, Arriving Soon, dan kategori |

---

## 3. Tipografi

- **Heading Display:** Plus Jakarta Sans (Weight: 600 SemiBold, 700 Bold, 800 ExtraBold) untuk nama brand, nama model mobil, dan headline seksi.
- **Body Text:** Inter (Weight: 400 Regular, 500 Medium, 600 SemiBold) untuk deskripsi, label form, dan navigasi.
- **Data & Harga (Mono):** JetBrains Mono (Weight: 500 Medium, 600 SemiBold) untuk nominal harga Rupiah dan metrik spesifikasi (kWh / KM).

---

## 4. Panduan Format Pesan Komunikasi (WhatsApp)

Pesan WhatsApp disusun secara formal, elegan, dan profesional tanpa emoji atau karakter dekoratif acak:

```text
Halo BYD Denza Panam

Saya [Nama Lengkap] ingin mengajukan:
Layanan: Jadwalkan Test Drive
Unit: BYD SEAL
Varian: Performance AWD
Warna: Cosmos Black
Rencana: Sabtu, 24 Oktober 2026

Mohon informasi lebih lanjut. Terima kasih.

Referensi: src=ig | med=social | cnt=link_in_bio
```

---

## 5. Standar Komponen UI

1. **Top Navbar:**
   - Putih bersih (`bg-white/95 backdrop-blur-md border-b border-slate-200`).
   - Logo teks tajam hitam dan lencana ARISTA berwarna abu-abu arsitektural.
   - Tombol aksi berlatar gelap elegan atau putih berbingkai tajam.

2. **Denza Flagship Hero:**
   - Menggunakan tema studio berlatar putih bersih dengan pencahayaan abu-abu perak lembut.
   - Kartu Denza D9 tampil dominan dengan kotak harga bergaris rapi.
   - Kartu teaser Denza B5 dan Z9 GT berstatus ARRIVING SOON dengan lencana abu-abu platinum elegan.

3. **BYD Showroom Cards:**
   - Kartu putih bersih dengan border halus, efek hover terangkat tipis tanpa animasi goyang.
   - Pilihan varian tombol pill minimalis.
   - Selector warna berupa lingkaran warna solid dengan bingkai presisi.

4. **Kalkulator Simulasi Kredit:**
   - Modal putih bersih dengan slider monokromatik.
   - Tampilan rincian cicilan dan DP dengan tipografi angka tabular jelas.
   - Tombol kirim ke WhatsApp hitam pekat atau abu-abu gelap dengan teks putih.

5. **Sticky Mobile Bar:**
   - Putih solid dengan border atas halus, tombol simetris tanpa emoji.