'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { VehicleModel, VehicleVariant } from '@/data/catalog';
import { formatRupiah, formatKwh } from '@/lib/format';
import { BatteryCharging, Gauge, Calculator, Check, ArrowRight, Zap } from 'lucide-react';

interface VehicleShowroomCardProps {
  model: VehicleModel;
  onOpenCredit: (model: VehicleModel, variant: VehicleVariant) => void;
  onOpenBooking: (unit: string, variant: string, color?: string) => void;
}

export const VehicleShowroomCard: React.FC<VehicleShowroomCardProps> = ({
  model,
  onOpenCredit,
  onOpenBooking,
}) => {
  const isM6Dm = model.id === 'byd-m6-dm';

  // Sub-category state for M6 DM (CLASSIC vs CROSS)
  const [selectedSubCategory, setSelectedSubCategory] = useState<'CLASSIC' | 'CROSS'>('CLASSIC');

  // Filtered variants based on subcategory if applicable
  const availableVariants = useMemo(() => {
    if (isM6Dm) {
      return model.variants.filter((v) => v.subCategory === selectedSubCategory);
    }
    return model.variants;
  }, [model.variants, isM6Dm, selectedSubCategory]);

  // Selected variant state
  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    availableVariants[0]?.id ?? model.variants[0].id
  );

  // Update selected variant when subcategory changes
  const activeVariant = useMemo(() => {
    const found = availableVariants.find((v) => v.id === selectedVariantId);
    return found ?? availableVariants[0] ?? model.variants[0];
  }, [availableVariants, selectedVariantId, model.variants]);

  // Color selection state
  const [selectedColor, setSelectedColor] = useState(model.colors[0]);

  return (
    <article className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 relative">
      {/* Top Header: Model Name & Color Dots */}
      <div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-800 uppercase tracking-wider">
                {model.bodyLabel}
              </span>
              {isM6Dm && (
                <span className="rounded-md bg-slate-900 text-white px-2 py-0.5 text-[10px] font-semibold">
                  Dual Mode PHEV
                </span>
              )}
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mt-1.5">
              {model.name}
            </h3>
            <p className="text-xs text-slate-500 font-normal line-clamp-1 mt-0.5">
              {model.tagline}
            </p>
          </div>

          {/* Interactive Color Swatches with ARIA */}
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-50 border border-slate-200">
              {model.colors.map((c) => {
                const isSelected = selectedColor.name === c.name;
                return (
                  <button
                    key={c.name}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    aria-label={`Warna ${c.name}`}
                    title={c.name}
                    onClick={() => setSelectedColor(c)}
                    className={`h-4 w-4 rounded-full transition-transform cursor-pointer relative ${
                      c.border ? 'border border-slate-300' : ''
                    } ${isSelected ? 'scale-125 ring-2 ring-slate-900 ring-offset-1 ring-offset-white' : 'opacity-70 hover:opacity-100'}`}
                    style={{ backgroundColor: c.hex }}
                  />
                );
              })}
            </div>
            <span className="text-[10px] text-slate-600 font-medium mt-1">
              {selectedColor.name}
            </span>
          </div>
        </div>

        {/* Vehicle Image Preview Container */}
        <div className="relative my-4 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-3">
          <Image
            src={model.imageUrl}
            alt={`${model.name} ${activeVariant.name}`}
            fill
            className="object-contain transform transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Special Sub-Category Handler for BYD M6 DM (CLASSIC vs CROSS) */}
        {isM6Dm && (
          <div className="mb-3">
            <span className="block text-[10px] font-bold tracking-wider uppercase text-slate-400 mb-1.5">
              Pilihan Seri Dual Mode:
            </span>
            <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100 rounded-xl">
              {(['CLASSIC', 'CROSS'] as const).map((subCat) => {
                const isActive = selectedSubCategory === subCat;
                return (
                  <button
                    key={subCat}
                    type="button"
                    onClick={() => {
                      setSelectedSubCategory(subCat);
                      const firstInSub = model.variants.find((v) => v.subCategory === subCat);
                      if (firstInSub) setSelectedVariantId(firstInSub.id);
                    }}
                    className={`py-1.5 px-3 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Seri {subCat}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Dynamic Variant Switcher */}
        <div className="mb-4">
          <span className="block text-[10px] font-bold tracking-wider uppercase text-slate-400 mb-1.5">
            Pilihan Varian Resmi:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {availableVariants.map((variant) => {
              const isSelected = activeVariant.id === variant.id;
              return (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => setSelectedVariantId(variant.id)}
                  aria-pressed={isSelected}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 border ${
                    isSelected
                      ? 'bg-slate-900 border-slate-900 text-white shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  {isSelected && <Check className="h-3 w-3 text-white" />}
                  <span>{variant.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Spec Bar (Battery & Range) */}
        <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 mb-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-800">
              <BatteryCharging className="h-4 w-4" />
            </div>
            <div>
              <span className="block text-[10px] text-slate-500">Baterai Blade</span>
              <span className="font-mono text-xs font-bold text-slate-900 tabular">
                {activeVariant.batteryKwh ? `${formatKwh(activeVariant.batteryKwh)} kWh` : 'TBA'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 border-l border-slate-200 pl-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-800">
              {activeVariant.rangeKm !== null ? (
                <Gauge className="h-4 w-4" />
              ) : (
                <Zap className="h-4 w-4 text-slate-800" />
              )}
            </div>
            <div>
              <span className="block text-[10px] text-slate-500">
                {activeVariant.rangeKm !== null ? 'Jarak Tempuh' : 'Teknologi'}
              </span>
              <span className="font-mono text-xs font-bold text-slate-900 tabular">
                {activeVariant.rangeKm !== null ? `${activeVariant.rangeKm} KM` : 'Dual Mode (DM)'}
              </span>
            </div>
          </div>
        </div>

        {/* Price Box */}
        <div className="pt-1 pb-3">
          <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
            Harga OTR Pekanbaru:
          </span>
          <div className="font-mono text-2xl font-bold tracking-tight text-slate-900 tabular mt-0.5">
            {activeVariant.priceIdr ? formatRupiah(activeVariant.priceIdr) : 'TBA'}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-2 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => onOpenCredit(model, activeVariant)}
          className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 hover:border-slate-400 py-2.5 px-3 text-xs font-semibold text-slate-800 transition-all cursor-pointer"
        >
          <Calculator className="h-3.5 w-3.5 text-slate-600" />
          <span>Simulasi Kredit</span>
        </button>

        <button
          type="button"
          onClick={() => onOpenBooking(model.name, activeVariant.name, selectedColor.name)}
          className="flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 py-2.5 px-3 text-xs font-semibold text-white transition-all cursor-pointer shadow-xs"
        >
          <span>Pesan Unit</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
};
