'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { PRICED_MODELS, VehicleModel, VehicleVariant } from '@/data/catalog';
import { CREDIT_CONFIG, SITE } from '@/data/site';
import { calculateCredit } from '@/lib/credit';
import { formatRupiah } from '@/lib/format';
import { buildWhatsAppUrl, type Attribution } from '@/lib/whatsapp';
import { X, Calculator, MessageCircle, Info } from 'lucide-react';

interface CreditSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialModel?: VehicleModel | null;
  initialVariant?: VehicleVariant | null;
  attribution: Attribution;
}

export const CreditSimulatorModal: React.FC<CreditSimulatorModalProps> = ({
  isOpen,
  onClose,
  initialModel,
  initialVariant,
  attribution,
}) => {
  // Default to initial model/variant or first priced model
  const defaultModel = initialModel && initialModel.variants.some((v) => v.priceIdr !== null)
    ? initialModel
    : PRICED_MODELS[0];

  const [selectedModelId, setSelectedModelId] = useState<string>(defaultModel.id);

  const currentModel = useMemo(() => {
    return PRICED_MODELS.find((m) => m.id === selectedModelId) ?? PRICED_MODELS[0];
  }, [selectedModelId]);

  const pricedVariants = useMemo(() => {
    return currentModel.variants.filter((v) => v.priceIdr !== null);
  }, [currentModel]);

  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    initialVariant?.priceIdr ? initialVariant.id : pricedVariants[0]?.id ?? ''
  );

  // Sync when initial props change
  useEffect(() => {
    if (initialModel && initialModel.variants.some((v) => v.priceIdr !== null)) {
      setSelectedModelId(initialModel.id);
      if (initialVariant && initialVariant.priceIdr !== null) {
        setSelectedVariantId(initialVariant.id);
      } else {
        const firstPriced = initialModel.variants.find((v) => v.priceIdr !== null);
        if (firstPriced) setSelectedVariantId(firstPriced.id);
      }
    }
  }, [initialModel, initialVariant]);

  const currentVariant = useMemo(() => {
    return (
      pricedVariants.find((v) => v.id === selectedVariantId) ??
      pricedVariants[0] ??
      currentModel.variants[0]
    );
  }, [pricedVariants, selectedVariantId, currentModel.variants]);

  // Credit parameters
  const [dpPercent, setDpPercent] = useState<number>(CREDIT_CONFIG.defaultDp);
  const [tenorYears, setTenorYears] = useState<number>(CREDIT_CONFIG.defaultTenor);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const unitPrice = currentVariant.priceIdr ?? 0;
  const result = useMemo(() => {
    return calculateCredit(
      unitPrice,
      dpPercent,
      tenorYears,
      CREDIT_CONFIG.indicativeAnnualRate
    );
  }, [unitPrice, dpPercent, tenorYears]);

  if (!isOpen) return null;

  // WhatsApp message generator for credit simulation without emojis/symbols
  const handleSendToWhatsApp = () => {
    const lines = [
      `Halo Kak ${SITE.sales.nickname} (${SITE.name})`,
      '',
      `Saya tertarik dengan simulasi kredit berikut:`,
      `Unit: ${currentModel.name}`,
      `Varian: ${currentVariant.name}`,
      `Harga OTR: ${formatRupiah(unitPrice)}`,
      `Uang Muka DP: ${dpPercent}% (${formatRupiah(result.downPayment)})`,
      `Tenor: ${tenorYears} Tahun (${result.months} Bulan)`,
      `Estimasi Cicilan: ${formatRupiah(result.monthly)} per bulan`,
      '',
      'Mohon rincian paket pembiayaan dan penawaran resmi terkini.',
    ];

    // Catat lead simulasi kredit ke Google Sheets CRM via background API tanpa menghambat WhatsApp
    try {
      fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nama: 'Prospek Simulasi Kredit',
          unit: currentModel.name,
          variant: currentVariant.name,
          serviceType: 'Simulasi Kredit',
          notes: `DP ${dpPercent}% (${formatRupiah(result.downPayment)}) | Tenor ${tenorYears} Thn (${result.months} Bln) | Est. Cicilan ${formatRupiah(result.monthly)}/bln`,
        }),
      }).catch(() => {});
    } catch {
      // ignore
    }

    const message = lines.join('\n');
    const waUrl = buildWhatsAppUrl(message);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="credit-simulator-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Modal Header (Pure White Primary) */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4.5 text-slate-900">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-900 border border-slate-200">
              <Calculator className="h-5 w-5" />
            </div>
            <div>
              <h3 id="credit-simulator-title" className="font-display text-base sm:text-lg font-bold text-slate-900">
                Kalkulator Simulasi Kredit
              </h3>
              <p className="text-xs text-slate-500">
                Estimasi pembiayaan resmi BYD dan DANZA Pekanbaru
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup simulasi kredit"
            className="rounded-full p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto bg-white">
          {/* Unit & Variant Picker */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="credit-model-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Model Kendaraan
              </label>
              <select
                id="credit-model-select"
                value={selectedModelId}
                onChange={(e) => {
                  setSelectedModelId(e.target.value);
                  const newModel = PRICED_MODELS.find((m) => m.id === e.target.value);
                  const firstPriced = newModel?.variants.find((v) => v.priceIdr !== null);
                  if (firstPriced) setSelectedVariantId(firstPriced.id);
                }}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 py-2.5 px-3 text-sm font-semibold text-slate-900 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
              >
                {PRICED_MODELS.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.brand} {m.name} ({m.bodyLabel})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="credit-variant-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Varian Resmi
              </label>
              <select
                id="credit-variant-select"
                value={selectedVariantId}
                onChange={(e) => setSelectedVariantId(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 py-2.5 px-3 text-sm font-semibold text-slate-900 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
              >
                {pricedVariants.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name} {v.subCategory ? `(${v.subCategory})` : ''} — {formatRupiah(v.priceIdr!)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* OTR Box Banner */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">
                Harga OTR Pekanbaru ({currentModel.name} {currentVariant.name})
              </span>
              <div className="font-mono text-xl sm:text-2xl font-bold text-slate-900 tabular mt-0.5">
                {formatRupiah(unitPrice)}
              </div>
            </div>
            <span className="hidden sm:inline-block rounded-md bg-white border border-slate-200 text-slate-800 px-3 py-1 text-xs font-bold">
              Harga Resmi
            </span>
          </div>

          {/* DP Slider & Presets */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor="dp-slider" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                Uang Muka (DP)
              </label>
              <div className="text-right">
                <span className="font-mono text-sm font-bold text-slate-900 tabular mr-2">
                  {dpPercent}%
                </span>
                <span className="font-mono text-xs font-bold text-slate-700 tabular">
                  ({formatRupiah(result.downPayment)})
                </span>
              </div>
            </div>

            <input
              id="dp-slider"
              type="range"
              min={CREDIT_CONFIG.dpMin}
              max={CREDIT_CONFIG.dpMax}
              step={CREDIT_CONFIG.dpStep}
              value={dpPercent}
              onChange={(e) => setDpPercent(Number(e.target.value))}
              aria-label="Persentase Uang Muka"
              className="range-luxury w-full"
              style={{
                ['--fill' as string]: `${((dpPercent - CREDIT_CONFIG.dpMin) / (CREDIT_CONFIG.dpMax - CREDIT_CONFIG.dpMin)) * 100}%`,
              }}
            />

            {/* Quick DP preset pills */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[11px] text-slate-500 font-medium mr-1">Preset:</span>
              {[20, 25, 30, 40, 50].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setDpPercent(preset)}
                  className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all cursor-pointer border ${
                    dpPercent === preset
                      ? 'bg-slate-900 border-slate-900 text-white'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {preset}%
                </button>
              ))}
            </div>
          </div>

          {/* Tenor Selection */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
              Jangka Waktu Tenor
            </label>
            <div className="grid grid-cols-5 gap-2">
              {CREDIT_CONFIG.tenorYears.map((year) => {
                const isSelected = tenorYears === year;
                return (
                  <button
                    key={year}
                    type="button"
                    onClick={() => setTenorYears(year)}
                    className={`rounded-xl py-2.5 px-2 text-center transition-all cursor-pointer border ${
                      isSelected
                        ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span className="block font-bold text-xs sm:text-sm">{year} Tahun</span>
                    <span className="block text-[10px] opacity-75">{year * 12} Bulan</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Calculation Result Summary Card */}
          <div className="rounded-2xl border border-slate-300 bg-slate-900 p-5 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                  Estimasi Angsuran Bulanan
                </span>
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white tabular mt-0.5">
                  {formatRupiah(result.monthly)}{' '}
                  <span className="text-xs font-normal text-slate-300">/ bulan</span>
                </div>
              </div>

              <div className="text-left sm:text-right text-xs text-slate-300">
                <span className="text-slate-400 block text-[11px]">Tenor Dipilih:</span>
                <span className="font-bold text-white text-sm">
                  {tenorYears} Tahun ({result.months} Bulan)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 text-xs">
              <div>
                <span className="text-slate-400 text-[11px] block">Total Uang Muka (DP):</span>
                <span className="font-mono font-semibold text-white tabular">
                  {formatRupiah(result.downPayment)} ({dpPercent}%)
                </span>
              </div>
              <div className="border-l border-white/10 pl-3">
                <span className="text-slate-400 text-[11px] block">Pokok Pinjaman:</span>
                <span className="font-mono font-semibold text-white tabular">
                  {formatRupiah(result.principal)}
                </span>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="flex items-start gap-2.5 text-[11px] text-slate-600 leading-normal bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
            <Info className="h-4 w-4 text-slate-700 shrink-0 mt-0.5" />
            <p>
              Estimasi Ilustrasi: Perhitungan simulasi kredit ini menggunakan indikasi bunga flat dan bersifat estimasi awal. Skema pembiayaan final, DP murni, asuransi, dan penawaran promo dapat disesuaikan langsung dengan mitra leasing resmi Arista Group.
            </p>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            Tutup
          </button>

          <button
            type="button"
            onClick={handleSendToWhatsApp}
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 px-6 py-3 text-xs font-bold text-white transition-all shadow-xs cursor-pointer"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Ajukan Hitungan via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
