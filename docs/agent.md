AI Coding Agent Master Instructions (agent.md)

Project: BYD & Denza Panam (Arista Group) Digital Showroom

Anda adalah Principal Frontend Architect & Vibe Engineer. Tugas Anda adalah membangun aplikasi web Digital Showroom BYD & Denza Panam (Arista Group Pekanbaru) berdasarkan spesifikasi di prd.md dan panduan estetika di design_system.md.

1. Tech Stack & Library Standards

Framework: Next.js (App Router, Static Pre-Rendering / SSG) + TypeScript Strict Mode

Styling: Tailwind CSS v4

Icons: lucide-react (BatteryCharging, Gauge, Sparkles, Calendar, Calculator, MessageCircle, ShieldCheck, ChevronRight, Check, Zap, Award)

Animation: motion / framer-motion & transisi hardware-accelerated

State Management: React Hooks (useState, useMemo, useEffect)

Aset Gambar: Studio photography high-definition tersimpan lokal di public/images/cars/ (WebP/PNG)

2. Guardrails & Aturan Ketat Engineering (WAJIB DITAATI)

Zero Markup Leak: Pastikan seluruh tag JSX/HTML tertutup sempurna. Jangan pernah menyisakan tanda kutip ganda berlebih yang menyebabkan karakter "> bocor ke layar (masalah utama pada website lama yang sedang kita redesign).

Data Integrity & Sanitization:

Gunakan 100% harga dan spesifikasi asli dari dokumen ini. Jangan mengarang harga atau spesifikasi di luar data yang diberikan.

Pastikan varian Performance AWD pada BYD SEAL dan BYD SEALION 7 ditulis dengan ejaan yang benar (Performance AWD, bukan Peformance AWD).

Graceful Edge-Case Handling:

Denza B5 dan Denza Z9 GT berstatus ARRIVING_SOON dan tidak memiliki harga OTR maupun angka kWh/KM. Komponen UI wajib merender badge ARRIVING SOON dan tombol VIP Waitlist / Info Peluncuran tanpa menghasilkan teks Rp NaN atau undefined KM.

BYD M6 DM memiliki sub-kategori CLASSIC dan CROSS, serta tidak mencantumkan angka jarak tempuh (rangeKm bernilai null). Komponen UI harus menampilkan badge Dual Mode (PHEV) sebagai pengganti indikator KM ketika rangeKm === null.

UTM & Instagram Bio Attribution:

Tangkap parameter URL (utm_source, utm_medium, utm_content, fbclid) saat halaman dimuat dan sertakan secara rapi pada generator pesan WhatsApp di bagian Test Drive & Pemesanan.

3. Kontrak Data TypeScript (src/data/catalog.ts)

Gunakan struktur data type-safe berikut sebagai fondasi aplikasi:

export type BrandType = 'DENZA' | 'BYD';
export type AvailabilityStatus = 'AVAILABLE' | 'ARRIVING_SOON';

export interface ColorSwatch {
  name: string;
  hex: string;
  border?: boolean;
}

export interface VehicleVariant {
  id: string;
  name: string;
  subCategory?: 'CLASSIC' | 'CROSS'; // Khusus untuk BYD M6 DM
  batteryKwh: number | null;
  rangeKm: number | null;
  priceIdr: number | null; // null untuk unit ARRIVING_SOON
}

export interface VehicleModel {
  id: string;
  brand: BrandType;
  name: string;
  category: 'MPV' | 'SUV' | 'SEDAN' | 'HATCHBACK' | 'PHEV_MPV';
  status: AvailabilityStatus;
  tagline?: string;
  imageUrl: string;
  colors: ColorSwatch[];
  variants: VehicleVariant[];
}

export const SHOWROOM_CATALOG: VehicleModel[] = [
  // ================= DENZA FLAGSHIP LINEUP =================
  {
    id: 'denza-d9',
    brand: 'DENZA',
    name: 'DENZA D9',
    category: 'MPV',
    status: 'AVAILABLE',
    tagline: 'First-Class Luxury Electric MPV',
    imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=85',
    colors: [
      { name: 'Cosmos Black', hex: '#111317' },
      { name: 'Whale Bay Blue', hex: '#2B4C65' },
      { name: 'Arctic White', hex: '#F8FAFC', border: true }
    ],
    variants: [
      {
        id: 'denza-d9-flagship',
        name: 'Advanced Luxury EV',
        batteryKwh: 103.3,
        rangeKm: 600,
        priceIdr: 986500000
      }
    ]
  },
  {
    id: 'denza-b5',
    brand: 'DENZA',
    name: 'DENZA B5',
    category: 'SUV',
    status: 'ARRIVING_SOON',
    tagline: 'BEYOND BOLD, BEYOND BOUNDARIES',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85',
    colors: [
      { name: 'Glacier Blue', hex: '#6BA4C8' },
      { name: 'Obsidian Black', hex: '#111317' }
    ],
    variants: [
      {
        id: 'denza-b5-soon',
        name: 'Flagship Off-Road SUV',
        batteryKwh: null,
        rangeKm: null,
        priceIdr: null
      }
    ]
  },
  {
    id: 'denza-z9-gt',
    brand: 'DENZA',
    name: 'DENZA Z9 GT',
    category: 'SEDAN',
    status: 'ARRIVING_SOON',
    tagline: 'TECHNOLOGY DRIVES ELEGANCE',
    imageUrl: 'https://images.unsplash.com/photo-1618843479319-56172914550f?auto=format&fit=crop&w=1200&q=85',
    colors: [
      { name: 'Emerald GT Teal', hex: '#1E6B5E' },
      { name: 'Obsidian Black', hex: '#111317' }
    ],
    variants: [
      {
        id: 'denza-z9-gt-soon',
        name: 'Grand Tourer Flagship',
        batteryKwh: null,
        rangeKm: null,
        priceIdr: null
      }
    ]
  },

  // ================= BYD MAIN LINEUP =================
  {
    id: 'byd-seal',
    brand: 'BYD',
    name: 'BYD SEAL',
    category: 'SEDAN',
    status: 'AVAILABLE',
    tagline: 'High-Performance Electric Sports Sedan',
    imageUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1000&q=80',
    colors: [
      { name: 'Cosmos Black', hex: '#111317' },
      { name: 'Atlantis Grey', hex: '#4A5568' },
      { name: 'Arctic Blue', hex: '#2B547E' },
      { name: 'Aurora White', hex: '#F8FAFC', border: true }
    ],
    variants: [
      {
        id: 'seal-premium',
        name: 'Premium Ext Range',
        batteryKwh: 82.5,
        rangeKm: 650,
        priceIdr: 656500000
      },
      {
        id: 'seal-performance',
        name: 'Performance AWD',
        batteryKwh: 82.5,
        rangeKm: 580,
        priceIdr: 767500000
      }
    ]
  },
  {
    id: 'byd-sealion-7',
    brand: 'BYD',
    name: 'BYD SEALION 7',
    category: 'SUV',
    status: 'AVAILABLE',
    tagline: 'Dynamic Ocean Aesthetics Performance SUV',
    imageUrl: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80',
    colors: [
      { name: 'Cosmos Black', hex: '#111317' },
      { name: 'Harbour Grey', hex: '#4A5568' },
      { name: 'Atlantis Blue', hex: '#2B547E' },
      { name: 'Aurora White', hex: '#F8FAFC', border: true }
    ],
    variants: [
      {
        id: 'sealion7-premium',
        name: 'Premium Ext Range',
        batteryKwh: 82.5,
        rangeKm: 567,
        priceIdr: 640500000
      },
      {
        id: 'sealion7-performance',
        name: 'Performance AWD',
        batteryKwh: 82.5,
        rangeKm: 542,
        priceIdr: 730500000
      }
    ]
  },
  {
    id: 'byd-m6',
    brand: 'BYD',
    name: 'BYD M6',
    category: 'MPV',
    status: 'AVAILABLE',
    tagline: '7-Seater & Captain Seat Family Electric MPV',
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80',
    colors: [
      { name: 'Cosmos Black', hex: '#111317' },
      { name: 'Inkstone Blue', hex: '#1E3A5F' },
      { name: 'Harbour Grey', hex: '#718096' },
      { name: 'Crystal White', hex: '#F8FAFC', border: true }
    ],
    variants: [
      {
        id: 'm6-standard',
        name: 'Standard',
        batteryKwh: 55.4,
        rangeKm: 420,
        priceIdr: 415000000
      },
      {
        id: 'm6-superior-7',
        name: 'Superior 7 Seater',
        batteryKwh: 71.8,
        rangeKm: 530,
        priceIdr: 443000000
      },
      {
        id: 'm6-superior-captain',
        name: 'Superior Captain S',
        batteryKwh: 71.8,
        rangeKm: 530,
        priceIdr: 453000000
      }
    ]
  },
  {
    id: 'byd-m6-dm',
    brand: 'BYD',
    name: 'BYD M6 DM',
    category: 'PHEV_MPV',
    status: 'AVAILABLE',
    tagline: 'Dual Mode (PHEV) Long-Range Family MPV',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80',
    colors: [
      { name: 'Metallic Silver', hex: '#CBD5E1', border: true },
      { name: 'Cosmos Black', hex: '#111317' },
      { name: 'Crystal White', hex: '#F8FAFC', border: true }
    ],
    variants: [
      {
        id: 'm6-dm-classic-std',
        name: 'Standard',
        subCategory: 'CLASSIC',
        batteryKwh: 7.4,
        rangeKm: null,
        priceIdr: 318500000
      },
      {
        id: 'm6-dm-classic-dyn',
        name: 'Dynamic',
        subCategory: 'CLASSIC',
        batteryKwh: 7.4,
        rangeKm: null,
        priceIdr: 338500000
      },
      {
        id: 'm6-dm-cross-adv',
        name: 'Advanced',
        subCategory: 'CROSS',
        batteryKwh: 18.3,
        rangeKm: null,
        priceIdr: 380500000
      },
      {
        id: 'm6-dm-cross-sup',
        name: 'Superior',
        subCategory: 'CROSS',
        batteryKwh: 18.3,
        rangeKm: null,
        priceIdr: 400500000
      },
      {
        id: 'm6-dm-cross-cap',
        name: 'Superior Captain S',
        subCategory: 'CROSS',
        batteryKwh: 18.3,
        rangeKm: null,
        priceIdr: 410500000
      }
    ]
  },
  {
    id: 'byd-atto-3',
    brand: 'BYD',
    name: 'BYD ATTO 3',
    category: 'SUV',
    status: 'AVAILABLE',
    tagline: 'Expressive & Energetic Smart EV SUV',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80',
    colors: [
      { name: 'Boulder Black', hex: '#111317' },
      { name: 'Surf Blue / Grey', hex: '#3B5978' },
      { name: 'Ski White', hex: '#F8FAFC', border: true }
    ],
    variants: [
      {
        id: 'atto3-adv-plus',
        name: 'Advanced Plus',
        batteryKwh: 49.9,
        rangeKm: 410,
        priceIdr: 442000000
      }
    ]
  },
  {
    id: 'byd-dolphin',
    brand: 'BYD',
    name: 'BYD DOLPHIN',
    category: 'HATCHBACK',
    status: 'AVAILABLE',
    tagline: 'Agile Urban Electric Hatchback',
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80',
    colors: [
      { name: 'Atlantis Grey', hex: '#5A6572' },
      { name: 'Maldives Blue', hex: '#5B9BD5' },
      { name: 'Cream White', hex: '#F8FAFC', border: true },
      { name: 'Deep Ocean Blue', hex: '#1B365D' },
      { name: 'Taro Purple / Coral', hex: '#D8B4E2' },
      { name: 'Urban Warm Grey', hex: '#ACA89F' }
    ],
    variants: [
      {
        id: 'dolphin-premium',
        name: 'Premium',
        batteryKwh: 60.4,
        rangeKm: 490,
        priceIdr: 440300000
      }
    ]
  },
  {
    id: 'byd-atto-1',
    brand: 'BYD',
    name: 'BYD ATTO 1',
    category: 'HATCHBACK',
    status: 'AVAILABLE',
    tagline: 'Compact & Efficient Daily Urban EV',
    imageUrl: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80',
    colors: [
      { name: 'Obsidian Black', hex: '#111317' },
      { name: 'Arctic White', hex: '#F8FAFC', border: true },
      { name: 'Sprout Lime Green', hex: '#C4D600' }
    ],
    variants: [
      {
        id: 'atto1-standard',
        name: 'Standard',
        batteryKwh: 30.0,
        rangeKm: 300,
        priceIdr: 222000000
      },
      {
        id: 'atto1-dynamic',
        name: 'Dynamic Std',
        batteryKwh: 30.0,
        rangeKm: 300,
        priceIdr: 233000000
      },
      {
        id: 'atto1-premium',
        name: 'Premium',
        batteryKwh: 38.0,
        rangeKm: 380,
        priceIdr: 266000000
      }
    ]
  }
];


4. Urutan Eksekusi Pembangunan (Step-by-Step Build Workflow)

Saat pengguna meminta Anda men-generate kode aplikasi, ikuti urutan eksekusi ini:

Setup Utility & Formatter: Buat fungsi formatRupiah(amount: number) menggunakan Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).

Build DenzaFlagshipHero Component:

Render latar gelap (bg-slate-950 text-white).

Tampilkan Denza D9 sebagai Hero Spotlight lengkap dengan kotak harga Rp 986.500.000 dan info Driving Range / Battery Capacity: 600 km / 103,3 kWh.

Tampilkan kartu Denza B5 dan Denza Z9 GT dengan badge berbingkai ARRIVING SOON serta tombol Waitlist.

Build BydCatalogSection Component:

Sediakan filter kategori (Semua, Sedan, SUV, MPV, PHEV / DM, Hatchback).

Render setiap model menggunakan komponen VehicleShowroomCard yang memiliki state mandiri untuk selectedVariant dan selectedColor.

Khusus untuk kartu byd-m6-dm, sediakan pemilih sub-kategori CLASSIC dan CROSS yang memfilter daftar varian di bawahnya.

Build CreditSimulatorModal Component:

Terima model dan variant yang dipilih pengguna.

Sediakan slider DP ($15\% - 50\%$) dan pilihan Tenor ($1 - 5\text{ Tahun}$), lalu tampilkan rincian Total DP dan Estimasi Angsuran Bulanan.

Build TestDriveBookingSection & StickyMobileBar:

Formulir interaktif untuk bagian Test Drive & Pemesanan.

Tombol pengiriman langsung membuka https://wa.me/... dengan teks pesan yang sudah terisi otomatis (Nama, Unit, Varian, Warna, Layanan, dan tag atribusi trafik Instagram).