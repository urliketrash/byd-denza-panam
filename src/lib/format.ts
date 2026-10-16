const rupiahFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
});

/** Rp 656.500.000 */
export function formatRupiah(amount: number) {
  // Intl menghasilkan "Rp 656.500.000" dengan non-breaking space.
  return rupiahFormatter.format(Math.round(amount)).replace(/\u00a0/g, ' ');
}

/** Ringkas: Rp 656,5 Jt */
export function formatRupiahShort(amount: number) {
  if (amount >= 1_000_000_000) return `Rp ${(amount / 1_000_000_000).toLocaleString('id-ID', { maximumFractionDigits: 2 })} M`;
  if (amount >= 1_000_000) return `Rp ${(amount / 1_000_000).toLocaleString('id-ID', { maximumFractionDigits: 1 })} Jt`;
  return formatRupiah(amount);
}

/** 82.5 / 30.0 — mengikuti format brosur */
export function formatKwh(value: number) {
  return value.toFixed(1);
}
