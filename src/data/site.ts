// =====================================================================
// KONFIGURASI DEALER — FASE DEMO (PRD §8)
// Semua nilai bertanda PLACEHOLDER wajib diganti sebelum go-live.
// =====================================================================

export const SITE = {
  name: 'BYD | Denza Panam',
  shortName: 'BYD Denza Panam',
  group: 'Arista Group',
  groupTagline: 'Terbaik dan Terpercaya',
  city: 'Pekanbaru',
  region: 'Riau',
  /** PLACEHOLDER — ganti dengan domain produksi. */
  url: 'https://byd-denza-panam.vercel.app',
  /** PLACEHOLDER — nomor tampilan untuk sales. */
  whatsappDisplay: '08xx-xxxx-xxxx',
  /** PLACEHOLDER — format internasional untuk wa.me (tanpa "+" / "0" di depan). */
  whatsappNumber: '628xxxxxxxxxx',
  /** PLACEHOLDER */
  address: 'Jl. (Alamat Showroom), Pekanbaru, Riau',
  /** PLACEHOLDER */
  hours: 'Senin - Sabtu 08.30 - 17.00, Minggu 09.00 - 15.00',
} as const;

export const CREDIT_CONFIG = {
  /**
   * PLACEHOLDER — suku bunga indikatif tahunan (flat) untuk ilustrasi demo.
   * Nilai final menunggu konfirmasi leasing / klien.
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

export type ServiceType = 'TEST_DRIVE' | 'PROMO' | 'PREBOOK_DENZA';

export const SERVICE_OPTIONS: { id: ServiceType; label: string; desc: string }[] = [
  { id: 'TEST_DRIVE', label: 'Jadwalkan Test Drive', desc: 'Di rumah Anda atau di showroom' },
  { id: 'PROMO', label: 'Minta Hitungan Promo & Diskon', desc: 'Penawaran OTR & skema kredit terbaik' },
  { id: 'PREBOOK_DENZA', label: 'Pre-Book Denza', desc: 'Prioritas unit B5 & Z9 GT' },
];
