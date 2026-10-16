'use client';

import React, { useState, useMemo } from 'react';
import { BYD_MODELS, CATALOG_FILTERS, CatalogFilter, matchesFilter, VehicleModel, VehicleVariant } from '@/data/catalog';
import { VehicleShowroomCard } from './VehicleShowroomCard';
import { ShieldCheck, Zap, Award } from 'lucide-react';

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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              <span>BYD Electric Showroom</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Lini Kendaraan Masa Depan BYD di Riau
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-slate-600 max-w-2xl font-normal">
              Pilihan lengkap teknologi murni EV dan Dual Mode PHEV bergaransi resmi Arista Group Pekanbaru.
            </p>
          </div>

          {/* Value Badges */}
          <div className="flex items-center gap-3 text-xs text-slate-700">
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
              <ShieldCheck className="h-4 w-4 text-slate-800" />
              <span className="font-semibold">Garansi Baterai 8 Tahun</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
              <Zap className="h-4 w-4 text-slate-800" />
              <span className="font-semibold">Blade Battery Ultra Aman</span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
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

        {/* Models Grid */}
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

        {/* Bottom Technology Assurance Banner */}
        <div className="mt-12 sm:mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-900 border border-slate-200">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-slate-900">Arista Group Aftersales</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Jaringan bengkel resmi, teknisi tersertifikasi, dan jaminan ketersediaan suku cadang asli di Pekanbaru.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-900 border border-slate-200">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-slate-900">Gratis Wall Charger 7kW</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Termasuk survei kelistrikan dan jasa instalasi langsung di rumah Anda tanpa biaya tambahan.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-900 border border-slate-200">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-slate-900">Trade-In Semua Merek</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Tukar mobil lama Anda dengan unit BYD dan Denza baru melalui appraisal transparan dan penawaran kompetitif.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
