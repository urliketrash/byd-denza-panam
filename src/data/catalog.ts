// =====================================================================
// SINGLE SOURCE OF TRUTH — Katalog BYD & Denza Panam (Arista Group)
// Seluruh harga & spesifikasi bersumber dari brosur resmi dealer (PRD §5).
// Catatan Data Hygiene: "Peformance AWD" pada brosur dikoreksi menjadi
// "Performance AWD".
// =====================================================================

export type BrandType = 'DENZA' | 'BYD';
export type AvailabilityStatus = 'AVAILABLE' | 'ARRIVING_SOON';
export type VehicleCategory = 'MPV' | 'SUV' | 'SEDAN' | 'HATCHBACK' | 'PHEV_MPV';
export type SubCategory = 'CLASSIC' | 'CROSS';

export interface ColorSwatch {
  name: string;
  hex: string;
  border?: boolean;
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
  // ================= DENZA FLAGSHIP LINEUP =================
  {
    id: 'denza-d9',
    brand: 'DENZA',
    name: 'DENZA D9',
    category: 'MPV',
    bodyLabel: 'Luxury Electric MPV',
    status: 'AVAILABLE',
    tagline: 'First-Class Luxury Electric MPV',
    imageUrl: '/images/cars/denza-d9.png',
    colors: [
      { name: 'Cosmos Black', hex: '#111317' },
      { name: 'Whale Bay Blue', hex: '#2B4C65' },
      { name: 'Arctic White', hex: '#F8FAFC', border: true },
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
    brand: 'DENZA',
    name: 'DENZA B5',
    category: 'SUV',
    bodyLabel: 'Flagship Off-Road SUV',
    status: 'ARRIVING_SOON',
    tagline: 'Beyond Bold, Beyond Boundaries',
    imageUrl: '/images/cars/denza-b5.png',
    colors: [
      { name: 'Glacier Blue', hex: '#6BA4C8' },
      { name: 'Obsidian Black', hex: '#111317' },
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
    brand: 'DENZA',
    name: 'DENZA Z9 GT',
    category: 'SEDAN',
    bodyLabel: 'Grand Tourer Flagship',
    status: 'ARRIVING_SOON',
    tagline: 'Technology Drives Elegance',
    imageUrl: '/images/cars/denza-z9-gt.png',
    colors: [
      { name: 'Emerald GT Teal', hex: '#1E6B5E' },
      { name: 'Obsidian Black', hex: '#111317' },
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
      { name: 'Cosmos Black', hex: '#111317' },
      { name: 'Atlantis Grey', hex: '#4A5568' },
      { name: 'Arctic Blue', hex: '#2B547E' },
      { name: 'Aurora White', hex: '#F8FAFC', border: true },
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
      { name: 'Cosmos Black', hex: '#111317' },
      { name: 'Harbour Grey', hex: '#4A5568' },
      { name: 'Atlantis Blue', hex: '#2B547E' },
      { name: 'Aurora White', hex: '#F8FAFC', border: true },
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
      { name: 'Cosmos Black', hex: '#111317' },
      { name: 'Inkstone Blue', hex: '#1E3A5F' },
      { name: 'Harbour Grey', hex: '#718096' },
      { name: 'Crystal White', hex: '#F8FAFC', border: true },
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
      { name: 'Metallic Silver', hex: '#CBD5E1', border: true },
      { name: 'Cosmos Black', hex: '#111317' },
      { name: 'Crystal White', hex: '#F8FAFC', border: true },
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
      { name: 'Boulder Black', hex: '#111317' },
      { name: 'Surf Blue / Grey', hex: '#3B5978' },
      { name: 'Ski White', hex: '#F8FAFC', border: true },
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
      { name: 'Atlantis Grey', hex: '#5A6572' },
      { name: 'Maldives Blue', hex: '#5B9BD5' },
      { name: 'Cream White', hex: '#F8FAFC', border: true },
      { name: 'Deep Ocean Blue', hex: '#1B365D' },
      { name: 'Taro Purple', hex: '#D8B4E2' },
      { name: 'Urban Warm Grey', hex: '#ACA89F' },
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
      { name: 'Obsidian Black', hex: '#111317' },
      { name: 'Arctic White', hex: '#F8FAFC', border: true },
      { name: 'Sprout Lime Green', hex: '#C4D600' },
    ],
    variants: [
      { id: 'atto1-standard', name: 'Standard', batteryKwh: 30.0, rangeKm: 300, priceIdr: 222_000_000 },
      { id: 'atto1-dynamic', name: 'Dynamic Std', batteryKwh: 30.0, rangeKm: 300, priceIdr: 233_000_000 },
      { id: 'atto1-premium', name: 'Premium', batteryKwh: 38.0, rangeKm: 380, priceIdr: 266_000_000 },
    ],
  },
];

// ---------- Helpers ----------
export const DENZA_MODELS = SHOWROOM_CATALOG.filter((m) => m.brand === 'DENZA');
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
