'use client';

import React, { useState, useMemo } from 'react';
import { BYD_MODELS, CATALOG_FILTERS, CatalogFilter, matchesFilter, VehicleModel, VehicleVariant } from '@/data/catalog';
import { VehicleShowroomCard } from './VehicleShowroomCard';
import { Award } from 'lucide-react';

interface BydCatalogSectionProps {
  onOpenCredit: (model: VehicleModel, variant: VehicleVariant) => void;
  onOpenBooking: (unit: string, variant: string, color?: string) => void;
}

export const BydCatalogSection: React.FC<BydCatalogSectionProps> = ({
  onOpenCredit,
  onOpenBooking,
}) => {
  const [activeFilter, setActiveFilter] = useState<CatalogFilter>('ALL');

  const filteredModels = useMemo(() => {
    return BYD_MODELS.filter((m) => matchesFilter(m, activeFilter));
  }, [activeFilter]);

  return (
    <section id="katalog-byd" className="relative bg-white py-14 sm:py-20 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-3">
            <Award className="h-3.5 w-3.5 text-slate-900" />
            <span>Katalog Mobil Listrik Resmi OTR Pekanbaru 2026</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            Pilihan Lengkap Kendaraan Listrik BYD di Riau
          </h2>
          <p className="mt-3 text-xs sm:text-sm lg:text-[15px] text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed text-center sm:text-justify [text-align-last:center]">
            Jelajahi teknologi mutakhir Blade Battery, performa akselerasi instan, dan efisiensi energi terdepan dengan jaminan garansi resmi dealer PT Arista Group Pekanbaru.
          </p>
        </div>

        {/* Filter Pills with Horizontal Scroll on Mobile, Centered on Tablet/Desktop */}
        <div className="flex items-center sm:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {CATALOG_FILTERS.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-slate-900 border-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Responsive Models Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredModels.map((model) => (
            <VehicleShowroomCard
              key={model.id}
              model={model}
              onOpenCredit={onOpenCredit}
              onOpenBooking={onOpenBooking}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
