// =====================================================================
// KONFIGURASI DEALER RESMI BYD ARISTA PEKANBARU
// Sumber: Brosur Resmi & Data Dealer Arista Panam
// =====================================================================

export const SITE = {
  name: 'BYD Arista Pekanbaru',
  shortName: 'BYD Pekanbaru',
  brandName: 'BYD',
  partnerBrand: 'DANZA',
  group: 'Arista Group',
  tagline: 'Terbaik dan Terpercaya - Pekanbaru',
  groupTagline: 'Terbaik dan Terpercaya - Pekanbaru',
  city: 'Pekanbaru',
  region: 'Riau',
  url: 'https://sc-byd-pekanbaru.com',
  address: 'Jl. HR. Soebrantas No. Km. 11, Simpang Baru, Kec. Tampan, Kota Pekanbaru, Riau',
  hours: 'Senin - Sabtu 08.30 - 17.00, Minggu 09.00 - 15.00',
  whatsappDisplay: '0823 8767 7722',
  whatsappNumber: '6282387677722',
  sales: {
    fullName: 'Suci Primayuri',
    nickname: 'Suci',
    title: 'Official Sales Consultant BYD Arista Pekanbaru',
    whatsapp: '0823 8767 7722',
    whatsappNumber: '6282387677722',
    cellPhone: null as string | null,
    email: 'suciprimayuri88@gmail.com',
    instagram: '@suci_bydpekanbaru.riau',
    instagramUrl: 'https://instagram.com/suci_bydpekanbaru.riau',
    tiktok: '@suci_byd.pekanbaru',
    tiktokUrl: 'https://www.tiktok.com/@suci_byd.pekanbaru',
    dealerAddress: 'Jl. HR. Soebrantas No. Km. 11, Simpang Baru, Kec. Tampan, Kota Pekanbaru, Riau',
  },
} as const;

export const CREDIT_CONFIG = {
  /**
   * Suku bunga indikatif tahunan (flat) untuk simulasi awal demo.
   * Nilai final mengikuti paket leasing resmi Arista Finance / KKB Bank rekanan.
   */
  indicativeAnnualRate: 0.05,
  isPlaceholderRate: true,
  dpMin: 15,
  dpMax: 50,
  dpStep: 5,
  tenorYears: [1, 2, 3, 4, 5] as const,
  defaultDp: 30,
  defaultTenor: 4,
};

export type ServiceType = 'TEST_DRIVE' | 'PROMO' | 'PREBOOK_DANZA';

export const SERVICE_OPTIONS: { id: ServiceType; label: string; desc: string }[] = [
  { id: 'TEST_DRIVE', label: 'Jadwalkan Test Drive', desc: 'Di rumah Anda atau di showroom resmi' },
  { id: 'PROMO', label: 'Minta Hitungan Promo & Diskon', desc: 'Penawaran OTR & skema kredit terbaik' },
  { id: 'PREBOOK_DANZA', label: 'Pre-Book DANZA', desc: 'Prioritas alokasi unit D9, B5 & Z9 GT' },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'Berapa pajak tahunan mobil listrik BYD di Provinsi Riau?',
    answer:
      'Sesuai regulasi pemerintah pusat dan Pemprov Riau, Bea Balik Nama Kendaraan Bermotor (BBN-KB) dan Pajak Kendaraan Bermotor (PKB) untuk kendaraan listrik murni (EV) mendapatkan insentif tarif 0% atau sangat rendah, sehingga biaya pajak tahunan mobil listrik BYD jauh lebih hemat dibandingkan mobil bermesin bensin/diesel konvensional.',
  },
  {
    question: 'Bagaimana jaminan dan garansi baterai Blade Battery pada mobil BYD?',
    answer:
      'Setiap pembelian unit mobil listrik resmi di BYD Arista Pekanbaru dilengkapi dengan Garansi Blade Battery hingga 8 tahun atau 160.000 km (mana yang tercapai lebih dulu) dengan jaminan State of Health (SOH) di atas 70%, serta garansi kendaraan umum selama 6 tahun atau 150.000 km.',
  },
  {
    question: 'Di mana alamat dealer dan bengkel resmi BYD Arista di Pekanbaru?',
    answer:
      'Dealer resmi 3S (Sales, Service, Spare Parts) BYD Arista berlokasi di Jl. HR. Soebrantas No. Km. 11, Simpang Baru, Kec. Tampan, Kota Pekanbaru, Riau. Showroom kami dilengkapi fasilitas display unit terlengkap, charging station DC/AC, dan ruang tunggu VIP eksekutif.',
  },
  {
    question: 'Apakah saya bisa mengajukan test drive langsung di rumah atau kantor saya?',
    answer:
      'Tentu bisa. Kami menyediakan layanan VIP Home Test Drive tanpa repot datang ke showroom. Anda cukup memilih unit yang ingin dicoba melalui website atau menghubungi Sales Consultant kami (0823 8767 7722), dan tim kami akan mengantarkan unit uji coba langsung ke kediaman Anda di wilayah Pekanbaru, Kampar, dan sekitarnya.',
  },
  {
    question: 'Berapa perbandingan biaya pengisian daya listrik dibanding konsumsi bensin?',
    answer:
      'Pengisian daya mobil listrik di rumah dengan tarif PLN golongan rumah tangga rata-rata berkisar antara Rp 1.700 per kWh. Untuk menempuh jarak 100 km, mobil listrik BYD hanya membutuhkan biaya sekitar Rp 25.000 - Rp 30.000, atau hemat hingga 70% - 80% dibandingkan mobil bensin berkapasitas sebanding.',
  },
  {
    question: 'Apakah pembeli mendapatkan fasilitas charger rumah (Wallbox Charger)?',
    answer:
      'Dealer resmi BYD Arista Pekanbaru menyediakan fasilitas unit Home Wallbox Charger 7 kW resmi beserta layanan survei daya PLN dan jasa instalasi profesional di rumah dengan biaya paket terstandarisasi dealer. Untuk rincian biaya instalasi dan penawaran paket yang berlaku, silakan hubungi Sales Consultant kami.',
  },
];
