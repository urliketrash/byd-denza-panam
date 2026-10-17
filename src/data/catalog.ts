// =====================================================================
// SINGLE SOURCE OF TRUTH — Katalog BYD & DANZA Pekanbaru (Arista Group)
// Seluruh harga & spesifikasi bersumber dari brosur resmi dealer (PRD §5).
// Catatan Data Hygiene: "Peformance AWD" pada brosur dikoreksi menjadi
// "Performance AWD".
// =====================================================================

export type BrandType = 'DANZA' | 'BYD';
export type AvailabilityStatus = 'AVAILABLE' | 'ARRIVING_SOON';
export type VehicleCategory = 'MPV' | 'SUV' | 'SEDAN' | 'HATCHBACK' | 'PHEV_MPV';
export type SubCategory = 'CLASSIC' | 'CROSS';

export interface ColorSwatch {
  name: string;
  hex: string;
  border?: boolean;
  imageUrl?: string;
}

export interface VehicleVariant {
  id: string;
  name: string;
  subCategory?: SubCategory; // Khusus BYD M6 DM
  batteryKwh: number | null;
  rangeKm: number | null; // null = PHEV / belum diumumkan
  priceIdr: number | null; // null untuk unit ARRIVING_SOON
}

export interface VehicleModel {
  id: string;
  brand: BrandType;
  name: string;
  category: VehicleCategory;
  bodyLabel: string;
  status: AvailabilityStatus;
  tagline?: string;
  imageUrl: string;
  colors: ColorSwatch[];
  variants: VehicleVariant[];
}

export const SHOWROOM_CATALOG: VehicleModel[] = [
  // ================= DANZA FLAGSHIP LINEUP =================
  {
    id: 'denza-d9',
    brand: 'DANZA',
    name: 'DANZA D9',
    category: 'MPV',
    bodyLabel: 'Luxury Electric MPV',
    status: 'AVAILABLE',
    tagline: 'First-Class Luxury Electric MPV',
    imageUrl: '/images/cars/denza-d9-blue.png',
    colors: [
      { name: 'Whale Bay Blue', hex: '#2B4C65', imageUrl: '/images/cars/denza-d9-blue.png' },
      { name: 'Cosmos Black', hex: '#111317', imageUrl: '/images/cars/denza-d9-black.png' },
      { name: 'Arctic White', hex: '#F8FAFC', border: true, imageUrl: '/images/cars/denza-d9-white.png' },
    ],
    variants: [
      {
        id: 'denza-d9-flagship',
        name: 'Advanced Luxury EV',
        batteryKwh: 103.3,
        rangeKm: 600,
        priceIdr: 986_500_000,
      },
    ],
  },
  {
    id: 'denza-b5',
    brand: 'DANZA',
    name: 'DANZA B5',
    category: 'SUV',
    bodyLabel: 'Flagship Off-Road SUV',
    status: 'ARRIVING_SOON',
    tagline: 'Beyond Bold, Beyond Boundaries',
    imageUrl: '/images/cars/denza-b5-blue.png',
    colors: [
      { name: 'Glacier Blue', hex: '#6BA4C8', imageUrl: '/images/cars/denza-b5-blue.png' },
      { name: 'Obsidian Black', hex: '#111317', imageUrl: '/images/cars/denza-b5-black.png' },
    ],
    variants: [
      {
        id: 'denza-b5-soon',
        name: 'Flagship Off-Road SUV',
        batteryKwh: null,
        rangeKm: null,
        priceIdr: null,
      },
    ],
  },
  {
    id: 'denza-z9-gt',
    brand: 'DANZA',
    name: 'DANZA Z9 GT',
    category: 'SEDAN',
    bodyLabel: 'Grand Tourer Flagship',
    status: 'ARRIVING_SOON',
    tagline: 'Technology Drives Elegance',
    imageUrl: '/images/cars/denza-z9-teal.png',
    colors: [
      { name: 'Emerald GT Teal', hex: '#1E6B5E', imageUrl: '/images/cars/denza-z9-teal.png' },
      { name: 'Obsidian Black', hex: '#111317', imageUrl: '/images/cars/denza-z9-black.png' },
    ],
    variants: [
      {
        id: 'denza-z9-gt-soon',
        name: 'Grand Tourer Flagship',
        batteryKwh: null,
        rangeKm: null,
        priceIdr: null,
      },
    ],
  },

  // ================= BYD MAIN LINEUP =================
  {
    id: 'byd-seal',
    brand: 'BYD',
    name: 'BYD SEAL',
    category: 'SEDAN',
    bodyLabel: 'EV Sedan',
    status: 'AVAILABLE',
    tagline: 'High-Performance Electric Sports Sedan',
    imageUrl: '/images/cars/byd-seal.png',
    colors: [
      { name: 'Cosmos Black', hex: '#111317', imageUrl: '/images/cars/byd-seal-black.png' },
      { name: 'Arctic Grey', hex: '#64748B', imageUrl: '/images/cars/byd-seal-arctic.png' },
      { name: 'Atlantic Grey', hex: '#334155', imageUrl: '/images/cars/byd-seal-atlantic.png' },
      { name: 'Aurora White', hex: '#F8FAFC', border: true, imageUrl: '/images/cars/byd-seal-white.png' },
    ],
    variants: [
      { id: 'seal-premium', name: 'Premium Ext Range', batteryKwh: 82.5, rangeKm: 650, priceIdr: 656_500_000 },
      { id: 'seal-performance', name: 'Performance AWD', batteryKwh: 82.5, rangeKm: 580, priceIdr: 767_500_000 },
    ],
  },
  {
    id: 'byd-sealion-7',
    brand: 'BYD',
    name: 'BYD SEALION 7',
    category: 'SUV',
    bodyLabel: 'EV SUV',
    status: 'AVAILABLE',
    tagline: 'Dynamic Ocean Aesthetics Performance SUV',
    imageUrl: '/images/cars/byd-sealion-7.png',
    colors: [
      { name: 'Atlantis Grey', hex: '#2B547E', imageUrl: '/images/cars/byd-sealion-7-atlantis.png' },
      { name: 'Shark Grey', hex: '#475569', imageUrl: '/images/cars/byd-sealion-7-shark.png' },
      { name: 'Cosmos Black', hex: '#111317', imageUrl: '/images/cars/byd-sealion-7-black.png' },
      { name: 'Aurora White', hex: '#F8FAFC', border: true, imageUrl: '/images/cars/byd-sealion-7-white.png' },
    ],
    variants: [
      { id: 'sealion7-premium', name: 'Premium Ext Range', batteryKwh: 82.5, rangeKm: 567, priceIdr: 640_500_000 },
      { id: 'sealion7-performance', name: 'Performance AWD', batteryKwh: 82.5, rangeKm: 542, priceIdr: 730_500_000 },
    ],
  },
  {
    id: 'byd-m6',
    brand: 'BYD',
    name: 'BYD M6',
    category: 'MPV',
    bodyLabel: 'EV MPV',
    status: 'AVAILABLE',
    tagline: '7-Seater & Captain Seat Family Electric MPV',
    imageUrl: '/images/cars/byd-m6.png',
    colors: [
      { name: 'Aurora White', hex: '#F8FAFC', border: true, imageUrl: '/images/cars/byd-m6-white.png' },
      { name: 'Cosmos Black', hex: '#111317', imageUrl: '/images/cars/byd-m6-black.png' },
      { name: 'Quartz Blue', hex: '#1E3A5F', imageUrl: '/images/cars/byd-m6-blue.png' },
      { name: 'Harbour Grey', hex: '#64748B', imageUrl: '/images/cars/byd-m6-grey.png' },
    ],
    variants: [
      { id: 'm6-standard', name: 'Standard', batteryKwh: 55.4, rangeKm: 420, priceIdr: 415_000_000 },
      { id: 'm6-superior-7', name: 'Superior 7 Seater', batteryKwh: 71.8, rangeKm: 530, priceIdr: 443_000_000 },
      { id: 'm6-superior-captain', name: 'Superior Captain S', batteryKwh: 71.8, rangeKm: 530, priceIdr: 453_000_000 },
    ],
  },
  {
    id: 'byd-m6-dm',
    brand: 'BYD',
    name: 'BYD M6 DM',
    category: 'PHEV_MPV',
    bodyLabel: 'PHEV MPV',
    status: 'AVAILABLE',
    tagline: 'Dual Mode (PHEV) Long-Range Family MPV',
    imageUrl: '/images/cars/byd-m6-dm.png',
    colors: [
      { name: 'Aurora White', hex: '#F8FAFC', border: true, imageUrl: '/images/cars/byd-m6-dm-white.png' },
      { name: 'Cosmos Black', hex: '#111317', imageUrl: '/images/cars/byd-m6-dm-black.png' },
      { name: 'Quartz Blue', hex: '#1E3A5F', imageUrl: '/images/cars/byd-m6-dm-blue.png' },
      { name: 'Harbour Grey', hex: '#64748B', imageUrl: '/images/cars/byd-m6-dm-grey.png' },
    ],
    variants: [
      { id: 'm6-dm-classic-std', name: 'Standard', subCategory: 'CLASSIC', batteryKwh: 7.4, rangeKm: null, priceIdr: 318_500_000 },
      { id: 'm6-dm-classic-dyn', name: 'Dynamic', subCategory: 'CLASSIC', batteryKwh: 7.4, rangeKm: null, priceIdr: 338_500_000 },
      { id: 'm6-dm-cross-adv', name: 'Advanced', subCategory: 'CROSS', batteryKwh: 18.3, rangeKm: null, priceIdr: 380_500_000 },
      { id: 'm6-dm-cross-sup', name: 'Superior', subCategory: 'CROSS', batteryKwh: 18.3, rangeKm: null, priceIdr: 400_500_000 },
      { id: 'm6-dm-cross-cap', name: 'Superior Captain S', subCategory: 'CROSS', batteryKwh: 18.3, rangeKm: null, priceIdr: 410_500_000 },
    ],
  },
  {
    id: 'byd-atto-3',
    brand: 'BYD',
    name: 'BYD ATTO 3',
    category: 'SUV',
    bodyLabel: 'EV SUV',
    status: 'AVAILABLE',
    tagline: 'Expressive & Energetic Smart EV SUV',
    imageUrl: '/images/cars/byd-atto-3.png',
    colors: [
      { name: 'Ski White', hex: '#F8FAFC', border: true, imageUrl: '/images/cars/byd-atto-3-white.png' },
      { name: 'Cosmos Black', hex: '#111317', imageUrl: '/images/cars/byd-atto-3-black.png' },
      { name: 'Atlantic Grey', hex: '#3B5978', imageUrl: '/images/cars/byd-atto-3-atlantic.png' },
      { name: 'Harbour Grey', hex: '#64748B', imageUrl: '/images/cars/byd-atto-3-harbour.png' },
    ],
    variants: [{ id: 'atto3-adv-plus', name: 'Advanced Plus', batteryKwh: 49.9, rangeKm: 410, priceIdr: 442_000_000 }],
  },
  {
    id: 'byd-dolphin',
    brand: 'BYD',
    name: 'BYD DOLPHIN',
    category: 'HATCHBACK',
    bodyLabel: 'EV Hatchback',
    status: 'AVAILABLE',
    tagline: 'Agile Urban Electric Hatchback',
    imageUrl: '/images/cars/byd-dolphin.png',
    colors: [
      { name: 'Coral Pink', hex: '#E09F9C', imageUrl: '/images/cars/byd-dolphin-pink.png' },
      { name: 'Surf Blue', hex: '#5B9BD5', imageUrl: '/images/cars/byd-dolphin-blue.png' },
      { name: 'Ski White', hex: '#F8FAFC', border: true, imageUrl: '/images/cars/byd-dolphin-white.png' },
      { name: 'Atlantic Grey', hex: '#5A6572', imageUrl: '/images/cars/byd-dolphin-grey.png' },
    ],
    variants: [{ id: 'dolphin-premium', name: 'Premium', batteryKwh: 60.4, rangeKm: 490, priceIdr: 440_300_000 }],
  },
  {
    id: 'byd-atto-1',
    brand: 'BYD',
    name: 'BYD ATTO 1',
    category: 'HATCHBACK',
    bodyLabel: 'Compact EV',
    status: 'AVAILABLE',
    tagline: 'Compact & Efficient Daily Urban EV',
    imageUrl: '/images/cars/byd-atto-1.png',
    colors: [
      { name: 'Sprout Green', hex: '#C4D600', imageUrl: '/images/cars/byd-atto-1.png' },
      { name: 'Cosmos Black', hex: '#111317', imageUrl: '/images/cars/byd-atto-1-black.png' },
      { name: 'Apricity White', hex: '#F8FAFC', border: true, imageUrl: '/images/cars/byd-atto-1-white.png' },
    ],
    variants: [
      { id: 'atto1-standard', name: 'Standard', batteryKwh: 30.0, rangeKm: 300, priceIdr: 222_000_000 },
      { id: 'atto1-dynamic', name: 'Dynamic Std', batteryKwh: 30.0, rangeKm: 300, priceIdr: 233_000_000 },
      { id: 'atto1-premium', name: 'Premium', batteryKwh: 38.0, rangeKm: 380, priceIdr: 266_000_000 },
    ],
  },
];

// ---------- Helpers ----------
export const DANZA_MODELS = SHOWROOM_CATALOG.filter((m) => m.brand === 'DANZA');
export const DENZA_MODELS = DANZA_MODELS; // Alias kompatibilitas
export const BYD_MODELS = SHOWROOM_CATALOG.filter((m) => m.brand === 'BYD');

/** Model yang bisa disimulasikan kreditnya (punya harga OTR). */
export const PRICED_MODELS = SHOWROOM_CATALOG.filter((m) => m.variants.some((v) => v.priceIdr !== null));

export function getModel(id: string | undefined) {
  return SHOWROOM_CATALOG.find((m) => m.id === id);
}

export function getVariant(model: VehicleModel | undefined, variantId: string | undefined) {
  return model?.variants.find((v) => v.id === variantId);
}

export type CatalogFilter = 'ALL' | 'SUV' | 'MPV' | 'SEDAN' | 'HATCHBACK' | 'PHEV';

export const CATALOG_FILTERS: { id: CatalogFilter; label: string }[] = [
  { id: 'ALL', label: 'Semua Unit' },
  { id: 'SUV', label: 'SUV & Crossover' },
  { id: 'MPV', label: 'MPV Keluarga' },
  { id: 'SEDAN', label: 'Sedan Sport' },
  { id: 'HATCHBACK', label: 'City Hatchback' },
  { id: 'PHEV', label: 'PHEV / Dual Mode' },
];

export function matchesFilter(model: VehicleModel, filter: CatalogFilter) {
  switch (filter) {
    case 'ALL':
      return true;
    case 'MPV':
      return model.category === 'MPV' || model.category === 'PHEV_MPV';
    case 'PHEV':
      return model.category === 'PHEV_MPV';
    default:
      return model.category === filter;
  }
}

export function startingPrice(model: VehicleModel) {
  const prices = model.variants.map((v) => v.priceIdr).filter((p): p is number => p !== null);
  return prices.length ? Math.min(...prices) : null;
}
