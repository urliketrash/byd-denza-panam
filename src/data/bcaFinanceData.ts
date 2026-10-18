// =====================================================================
// DATA RESMI SIMULASI BCA FINANCE (PEKANBARU)
// Sumber: Dokumen Tabel Angsuran Resmi BCA Finance (Rate Khusus EV Kombinasi 1 Thn All Risk)
// =====================================================================

export interface BcaTenorDetail {
  tenorYears: number;
  tenorMonths: number;
  tdpIdr: number;
  angsuranIdr: number;
  sisaBulan: number;
}

export interface BcaModelVariant {
  id: string;
  modelName: string;
  variantName: string;
  otrIdr: number;
  dpPercent: number; // 25%
  programName: string;
  note?: string;
  rates: Record<number, BcaTenorDetail>; // keyed by tenorYears (1 s.d 5)
}

export const BCA_FINANCE_MODELS: BcaModelVariant[] = [
  // --- BYD M6 EV ---
  {
    id: 'm6-standard',
    modelName: 'BYD M6',
    variantName: 'Standard (7-Seater)',
    otrIdr: 415_000_000,
    dpPercent: 25,
    programName: 'BCA Finance Rate Khusus (Kombinasi 1 Thn All Risk)',
    rates: {
      1: { tenorYears: 1, tenorMonths: 12, tdpIdr: 147_216_400, angsuranIdr: 28_219_400, sisaBulan: 11 },
      2: { tenorYears: 2, tenorMonths: 24, tdpIdr: 136_233_750, angsuranIdr: 14_593_200, sisaBulan: 23 },
      3: { tenorYears: 3, tenorMonths: 36, tdpIdr: 134_359_550, angsuranIdr: 10_170_900, sisaBulan: 35 },
      4: { tenorYears: 4, tenorMonths: 48, tdpIdr: 134_788_100, angsuranIdr: 7_946_800, sisaBulan: 47 },
      5: { tenorYears: 5, tenorMonths: 60, tdpIdr: 136_243_600, angsuranIdr: 6_745_100, sisaBulan: 59 },
    },
  },
  {
    id: 'm6-superior-7s',
    modelName: 'BYD M6',
    variantName: 'Superior (7-Seater)',
    otrIdr: 443_000_000,
    dpPercent: 25,
    programName: 'BCA Finance Rate Khusus (Kombinasi 1 Thn All Risk)',
    rates: {
      1: { tenorYears: 1, tenorMonths: 12, tdpIdr: 156_683_600, angsuranIdr: 30_121_000, sisaBulan: 11 },
      2: { tenorYears: 2, tenorMonths: 24, tdpIdr: 144_286_550, angsuranIdr: 15_575_400, sisaBulan: 23 },
      3: { tenorYears: 3, tenorMonths: 36, tdpIdr: 142_285_770, angsuranIdr: 10_854_600, sisaBulan: 35 },
      4: { tenorYears: 4, tenorMonths: 48, tdpIdr: 142_729_700, angsuranIdr: 8_480_400, sisaBulan: 47 },
      5: { tenorYears: 5, tenorMonths: 60, tdpIdr: 144_262_940, angsuranIdr: 7_197_400, sisaBulan: 59 },
    },
  },
  {
    id: 'm6-superior-captain',
    modelName: 'BYD M6',
    variantName: 'Superior Captain (6-Seater)',
    otrIdr: 453_000_000,
    dpPercent: 25,
    programName: 'BCA Finance Rate Khusus (Kombinasi 1 Thn All Risk)',
    rates: {
      1: { tenorYears: 1, tenorMonths: 12, tdpIdr: 160_064_800, angsuranIdr: 30_800_200, sisaBulan: 11 },
      2: { tenorYears: 2, tenorMonths: 24, tdpIdr: 147_387_850, angsuranIdr: 15_926_200, sisaBulan: 23 },
      3: { tenorYears: 3, tenorMonths: 36, tdpIdr: 144_689_550, angsuranIdr: 11_098_800, sisaBulan: 35 },
      4: { tenorYears: 4, tenorMonths: 48, tdpIdr: 145_138_880, angsuranIdr: 8_670_900, sisaBulan: 47 },
      5: { tenorYears: 5, tenorMonths: 60, tdpIdr: 146_700_020, angsuranIdr: 7_359_000, sisaBulan: 59 },
    },
  },

  // --- BYD ATTO 3 ---
  {
    id: 'atto3-advance-plus',
    modelName: 'BYD ATTO 3',
    variantName: 'Advance Plus',
    otrIdr: 442_000_000,
    dpPercent: 25,
    programName: 'BCA Finance Rate Khusus (Kombinasi 1 Thn All Risk)',
    rates: {
      1: { tenorYears: 1, tenorMonths: 12, tdpIdr: 156_345_500, angsuranIdr: 30_053_100, sisaBulan: 11 },
      2: { tenorYears: 2, tenorMonths: 24, tdpIdr: 143_976_400, angsuranIdr: 15_540_300, sisaBulan: 23 },
      3: { tenorYears: 3, tenorMonths: 36, tdpIdr: 141_980_180, angsuranIdr: 10_830_200, sisaBulan: 35 },
      4: { tenorYears: 4, tenorMonths: 48, tdpIdr: 142_423_500, angsuranIdr: 8_461_300, sisaBulan: 47 },
      5: { tenorYears: 5, tenorMonths: 60, tdpIdr: 143_954_060, angsuranIdr: 7_181_300, sisaBulan: 59 },
    },
  },

  // --- BYD DOLPHIN ---
  {
    id: 'dolphin-premium',
    modelName: 'BYD DOLPHIN',
    variantName: 'Premium Extended',
    otrIdr: 440_300_000,
    dpPercent: 25,
    programName: 'BCA Finance Rate Khusus (Kombinasi 1 Thn All Risk)',
    rates: {
      1: { tenorYears: 1, tenorMonths: 12, tdpIdr: 155_770_660, angsuranIdr: 29_937_600, sisaBulan: 11 },
      2: { tenorYears: 2, tenorMonths: 24, tdpIdr: 143_449_215, angsuranIdr: 15_480_700, sisaBulan: 23 },
      3: { tenorYears: 3, tenorMonths: 36, tdpIdr: 141_460_657, angsuranIdr: 10_788_700, sisaBulan: 35 },
      4: { tenorYears: 4, tenorMonths: 48, tdpIdr: 141_903_030, angsuranIdr: 8_428_900, sisaBulan: 47 },
      5: { tenorYears: 5, tenorMonths: 60, tdpIdr: 143_428_834, angsuranIdr: 7_153_800, sisaBulan: 59 },
    },
  },

  // --- BYD SEAL ---
  {
    id: 'seal-premium',
    modelName: 'BYD SEAL',
    variantName: 'Premium',
    otrIdr: 656_500_000,
    dpPercent: 25,
    programName: 'BCA Finance Rate Khusus (Kombinasi 1 Thn All Risk)',
    rates: {
      1: { tenorYears: 1, tenorMonths: 12, tdpIdr: 229_121_300, angsuranIdr: 44_621_000, sisaBulan: 11 },
      2: { tenorYears: 2, tenorMonths: 24, tdpIdr: 210_749_025, angsuranIdr: 23_064_700, sisaBulan: 23 },
      3: { tenorYears: 3, tenorMonths: 36, tdpIdr: 206_837_975, angsuranIdr: 16_068_100, sisaBulan: 35 },
      4: { tenorYears: 4, tenorMonths: 48, tdpIdr: 206_505_750, angsuranIdr: 12_548_800, sisaBulan: 47 },
      5: { tenorYears: 5, tenorMonths: 60, tdpIdr: 207_791_950, angsuranIdr: 10_646_400, sisaBulan: 59 },
    },
  },
  {
    id: 'seal-performance',
    modelName: 'BYD SEAL',
    variantName: 'Performance AWD',
    otrIdr: 767_500_000,
    dpPercent: 25,
    programName: 'BCA Finance Rate Khusus (Kombinasi 1 Thn All Risk)',
    rates: {
      1: { tenorYears: 1, tenorMonths: 12, tdpIdr: 266_652_100, angsuranIdr: 52_159_600, sisaBulan: 11 },
      2: { tenorYears: 2, tenorMonths: 24, tdpIdr: 245_173_375, angsuranIdr: 26_958_500, sisaBulan: 23 },
      3: { tenorYears: 3, tenorMonths: 36, tdpIdr: 240_600_725, angsuranIdr: 18_778_600, sisaBulan: 35 },
      4: { tenorYears: 4, tenorMonths: 48, tdpIdr: 240_178_250, angsuranIdr: 14_664_000, sisaBulan: 47 },
      5: { tenorYears: 5, tenorMonths: 60, tdpIdr: 241_630_850, angsuranIdr: 12_439_600, sisaBulan: 59 },
    },
  },

  // --- BYD SEALION 7 ---
  {
    id: 'sealion7-premium',
    modelName: 'BYD SEALION 7',
    variantName: 'Premium',
    otrIdr: 640_500_000,
    dpPercent: 25,
    programName: 'BCA Finance Rate Khusus (Kombinasi 1 Thn All Risk)',
    rates: {
      1: { tenorYears: 1, tenorMonths: 12, tdpIdr: 223_711_400, angsuranIdr: 43_534_300, sisaBulan: 11 },
      2: { tenorYears: 2, tenorMonths: 24, tdpIdr: 205_787_025, angsuranIdr: 22_503_500, sisaBulan: 23 },
      3: { tenorYears: 3, tenorMonths: 36, tdpIdr: 201_971_275, angsuranIdr: 15_677_400, sisaBulan: 35 },
      4: { tenorYears: 4, tenorMonths: 48, tdpIdr: 201_652_050, angsuranIdr: 12_243_900, sisaBulan: 47 },
      5: { tenorYears: 5, tenorMonths: 60, tdpIdr: 202_914_350, angsuranIdr: 10_388_000, sisaBulan: 59 },
    },
  },
  {
    id: 'sealion7-performance',
    modelName: 'BYD SEALION 7',
    variantName: 'Performance AWD',
    otrIdr: 730_500_000,
    dpPercent: 25,
    programName: 'BCA Finance Rate Khusus (Kombinasi 1 Thn All Risk)',
    rates: {
      1: { tenorYears: 1, tenorMonths: 12, tdpIdr: 254_141_800, angsuranIdr: 49_646_700, sisaBulan: 11 },
      2: { tenorYears: 2, tenorMonths: 24, tdpIdr: 233_698_525, angsuranIdr: 25_660_500, sisaBulan: 23 },
      3: { tenorYears: 3, tenorMonths: 36, tdpIdr: 229_346_475, angsuranIdr: 17_875_100, sisaBulan: 35 },
      4: { tenorYears: 4, tenorMonths: 48, tdpIdr: 228_954_050, angsuranIdr: 13_958_900, sisaBulan: 47 },
      5: { tenorYears: 5, tenorMonths: 60, tdpIdr: 230_351_250, angsuranIdr: 11_841_900, sisaBulan: 59 },
    },
  },

  // --- BYD ATTO 1 (COMPACT EV) ---
  {
    id: 'atto1-standard',
    modelName: 'BYD ATTO 1',
    variantName: 'Standar',
    otrIdr: 222_000_000,
    dpPercent: 25,
    programName: 'BCA Finance Rate Khusus (TDP Diskon Rp 30 Juta)',
    note: 'TDP pada tabel ini sudah dikurangi subsidi Rp 30.000.000',
    rates: {
      1: { tenorYears: 1, tenorMonths: 12, tdpIdr: 47_034_100, angsuranIdr: 16_008_100, sisaBulan: 11 },
      2: { tenorYears: 2, tenorMonths: 24, tdpIdr: 39_917_240, angsuranIdr: 8_286_000, sisaBulan: 23 },
      3: { tenorYears: 3, tenorMonths: 36, tdpIdr: 39_849_620, angsuranIdr: 5_671_100, sisaBulan: 35 },
      4: { tenorYears: 4, tenorMonths: 48, tdpIdr: 40_325_840, angsuranIdr: 4_458_000, sisaBulan: 47 },
      5: { tenorYears: 5, tenorMonths: 60, tdpIdr: 41_361_300, angsuranIdr: 3_762_100, sisaBulan: 59 },
    },
  },
  {
    id: 'atto1-dynamic',
    modelName: 'BYD ATTO 1',
    variantName: 'Dynamic',
    otrIdr: 233_000_000,
    dpPercent: 25,
    programName: 'BCA Finance Rate Khusus (TDP Diskon Rp 30 Juta)',
    note: 'TDP pada tabel ini sudah dikurangi subsidi Rp 30.000.000',
    rates: {
      1: { tenorYears: 1, tenorMonths: 12, tdpIdr: 81_372_400, angsuranIdr: 16_705_400, sisaBulan: 11 },
      2: { tenorYears: 2, tenorMonths: 24, tdpIdr: 74_988_510, angsuranIdr: 8_646_200, sisaBulan: 23 },
      3: { tenorYears: 3, tenorMonths: 36, tdpIdr: 73_874_230, angsuranIdr: 5_917_100, sisaBulan: 35 },
      4: { tenorYears: 4, tenorMonths: 48, tdpIdr: 74_362_360, angsuranIdr: 4_650_900, sisaBulan: 47 },
      5: { tenorYears: 5, tenorMonths: 60, tdpIdr: 75_429_900, angsuranIdr: 3_924_600, sisaBulan: 59 },
    },
  },
  {
    id: 'atto1-premium',
    modelName: 'BYD ATTO 1',
    variantName: 'Premium',
    otrIdr: 266_000_000,
    dpPercent: 25,
    programName: 'BCA Finance Rate Khusus (TDP Diskon Rp 30 Juta)',
    note: 'TDP pada tabel ini sudah dikurangi subsidi Rp 30.000.000',
    rates: {
      1: { tenorYears: 1, tenorMonths: 12, tdpIdr: 94_387_200, angsuranIdr: 18_797_220, sisaBulan: 11 },
      2: { tenorYears: 2, tenorMonths: 24, tdpIdr: 87_202_120, angsuranIdr: 9_726_600, sisaBulan: 23 },
      3: { tenorYears: 3, tenorMonths: 36, tdpIdr: 85_947_960, angsuranIdr: 6_655_000, sisaBulan: 35 },
      4: { tenorYears: 4, tenorMonths: 48, tdpIdr: 86_472_020, angsuranIdr: 5_229_700, sisaBulan: 47 },
      5: { tenorYears: 5, tenorMonths: 60, tdpIdr: 87_635_600, angsuranIdr: 4_412_000, sisaBulan: 59 },
    },
  },

  // --- BYD M6 DM (PHEV DUAL MODE) ---
  {
    id: 'm6dm-classic-std',
    modelName: 'BYD M6 DM',
    variantName: 'Classic Standard',
    otrIdr: 389_000_000,
    dpPercent: 25,
    programName: 'BCA Finance Rate Khusus (TDP Diskon Rp 30 Juta)',
    note: 'TDP pada tabel ini sudah dikurangi subsidi Rp 30.000.000',
    rates: {
      1: { tenorYears: 1, tenorMonths: 12, tdpIdr: 112_833_400, angsuranIdr: 22_125_100, sisaBulan: 11 },
      2: { tenorYears: 2, tenorMonths: 24, tdpIdr: 104_208_208, angsuranIdr: 11_445_500, sisaBulan: 23 },
      3: { tenorYears: 3, tenorMonths: 36, tdpIdr: 102_574_573, angsuranIdr: 7_828_900, sisaBulan: 35 },
      4: { tenorYears: 4, tenorMonths: 48, tdpIdr: 103_007_695, angsuranIdr: 6_150_500, sisaBulan: 47 },
      5: { tenorYears: 5, tenorMonths: 60, tdpIdr: 104_184_675, angsuranIdr: 5_187_400, sisaBulan: 59 },
    },
  },
  {
    id: 'm6dm-classic-dynamic',
    modelName: 'BYD M6 DM',
    variantName: 'Classic Dynamic',
    otrIdr: 419_000_000,
    dpPercent: 25,
    programName: 'BCA Finance Rate Khusus (TDP Diskon Rp 30 Juta)',
    note: 'TDP pada tabel ini sudah dikurangi subsidi Rp 30.000.000',
    rates: {
      1: { tenorYears: 1, tenorMonths: 12, tdpIdr: 120_577_100, angsuranIdr: 23_392_800, sisaBulan: 11 },
      2: { tenorYears: 2, tenorMonths: 24, tdpIdr: 111_456_908, angsuranIdr: 12_100_300, sisaBulan: 23 },
      3: { tenorYears: 3, tenorMonths: 36, tdpIdr: 109_729_473, angsuranIdr: 8_276_100, sisaBulan: 35 },
      4: { tenorYears: 4, tenorMonths: 48, tdpIdr: 110_175_895, angsuranIdr: 6_501_300, sisaBulan: 47 },
      5: { tenorYears: 5, tenorMonths: 60, tdpIdr: 111_403_075, angsuranIdr: 5_462_800, sisaBulan: 59 },
    },
  },
  {
    id: 'm6dm-cross-advance',
    modelName: 'BYD M6 DM',
    variantName: 'Cross Advance',
    otrIdr: 449_000_000,
    dpPercent: 25,
    programName: 'BCA Finance Rate Khusus (TDP Diskon Rp 30 Juta)',
    note: 'TDP pada tabel ini sudah dikurangi subsidi Rp 30.000.000',
    rates: {
      1: { tenorYears: 1, tenorMonths: 12, tdpIdr: 132_816_100, angsuranIdr: 26_055_100, sisaBulan: 11 },
      2: { tenorYears: 2, tenorMonths: 24, tdpIdr: 122_656_298, angsuranIdr: 13_475_400, sisaBulan: 23 },
      3: { tenorYears: 3, tenorMonths: 36, tdpIdr: 120_731_843, angsuranIdr: 9_215_200, sisaBulan: 35 },
      4: { tenorYears: 4, tenorMonths: 48, tdpIdr: 121_206_235, angsuranIdr: 7_238_000, sisaBulan: 47 },
      5: { tenorYears: 5, tenorMonths: 60, tdpIdr: 122_538_775, angsuranIdr: 6_103_100, sisaBulan: 59 },
    },
  },
  {
    id: 'm6dm-cross-superior',
    modelName: 'BYD M6 DM',
    variantName: 'Cross Superior',
    otrIdr: 479_000_000,
    dpPercent: 25,
    programName: 'BCA Finance Rate Khusus (TDP Diskon Rp 30 Juta)',
    note: 'TDP pada tabel ini sudah dikurangi subsidi Rp 30.000.000',
    rates: {
      1: { tenorYears: 1, tenorMonths: 12, tdpIdr: 140_363_900, angsuranIdr: 27_322_900, sisaBulan: 11 },
      2: { tenorYears: 2, tenorMonths: 24, tdpIdr: 129_694_638, angsuranIdr: 14_130_200, sisaBulan: 23 },
      3: { tenorYears: 3, tenorMonths: 36, tdpIdr: 127_036_383, angsuranIdr: 9_662_400, sisaBulan: 35 },
      4: { tenorYears: 4, tenorMonths: 48, tdpIdr: 127_524_075, angsuranIdr: 7_588_800, sisaBulan: 47 },
      5: { tenorYears: 5, tenorMonths: 60, tdpIdr: 128_906_815, angsuranIdr: 6_396_500, sisaBulan: 59 },
    },
  },
  {
    id: 'm6dm-cross-superior-cs',
    modelName: 'BYD M6 DM',
    variantName: 'Cross Superior Captain (6-Seater)',
    otrIdr: 489_000_000,
    dpPercent: 25,
    programName: 'BCA Finance Rate Khusus (TDP Diskon Rp 30 Juta)',
    note: 'TDP pada tabel ini sudah dikurangi subsidi Rp 30.000.000',
    rates: {
      1: { tenorYears: 1, tenorMonths: 12, tdpIdr: 144_137_800, angsuranIdr: 27_956_800, sisaBulan: 11 },
      2: { tenorYears: 2, tenorMonths: 24, tdpIdr: 132_565_788, angsuranIdr: 14_457_600, sisaBulan: 23 },
      3: { tenorYears: 3, tenorMonths: 36, tdpIdr: 130_500_633, angsuranIdr: 9_886_000, sisaBulan: 35 },
      4: { tenorYears: 4, tenorMonths: 48, tdpIdr: 130_994_875, angsuranIdr: 7_764_100, sisaBulan: 47 },
      5: { tenorYears: 5, tenorMonths: 60, tdpIdr: 132_402_815, angsuranIdr: 6_546_200, sisaBulan: 59 },
    },
  },
];
