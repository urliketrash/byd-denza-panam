'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { DENZA_MODELS, VehicleModel } from '@/data/catalog';
import { formatRupiah } from '@/lib/format';
import { BatteryCharging, Gauge, ChevronRight, Calculator, Calendar } from 'lucide-react';

interface DenzaFlagshipHeroProps {
  onOpenBooking: (unit?: string, variant?: string) => void;
  onOpenCredit: (model: VehicleModel) => void;
}

export const DenzaFlagshipHero: React.FC<DenzaFlagshipHeroProps> = ({ onOpenBooking, onOpenCredit }) => {
  const d9 = DENZA_MODELS.find((m) => m.id === 'denza-d9')!;
  const b5 = DENZA_MODELS.find((m) => m.id === 'denza-b5')!;
  const z9gt = DENZA_MODELS.find((m) => m.id === 'denza-z9-gt')!;

  const [d9SelectedColor, setD9SelectedColor] = useState(d9.colors[0]);
  const [b5SelectedColor, setB5SelectedColor] = useState(b5.colors[0]);
  const [z9SelectedColor, setZ9SelectedColor] = useState(z9gt.colors[0]);

  return (
    <section id="denza-flagship" className="relative overflow-hidden bg-white pt-6 pb-12 sm:pt-10 sm:pb-16 text-slate-900 border-b border-slate-200">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Eyebrow & Title */}
        <div className="mb-6 sm:mb-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700 tracking-wider uppercase mb-2">
            <span>Denza Luxury Flagship Showcase</span>
          </div>
          <h1 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Kemewahan Elektrik Kelas Eksekutif di Pekanbaru
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Standar baru mobilitas VIP di Riau melalui lini flagship DENZA oleh ARISTA, didukung layanan personal VIP Home Test Drive.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Main Hero Card: Denza D9 (Span 7 Col on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 relative group">
            <div>
              {/* Card Header */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-800 uppercase tracking-wider">
                      VIP MPV
                    </span>
                    <span className="rounded-md bg-slate-900 text-white px-2 py-0.5 text-[10px] font-semibold">
                      Unit Ready
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
                    {d9.name}
                  </h2>
                  <p className="text-xs text-slate-500 font-normal mt-0.5">
                    {d9.tagline}
                  </p>
                </div>

                {/* Color Swatches */}
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">
                  <span className="text-[11px] text-slate-500 font-medium">Warna:</span>
                  <div className="flex items-center gap-1.5">
                    {d9.colors.map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        aria-label={`Pilih warna ${c.name}`}
                        onClick={() => setD9SelectedColor(c)}
                        className={`h-4 w-4 rounded-full transition-transform cursor-pointer ${
                          c.border ? 'border border-slate-300' : ''
                        } ${
                          d9SelectedColor.name === c.name
                            ? 'scale-125 ring-2 ring-slate-900 ring-offset-1 ring-offset-white'
                            : 'opacity-70 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-900 font-bold ml-0.5">{d9SelectedColor.name}</span>
                </div>
              </div>

              {/* Main Vehicle Image on High-Key Studio Background */}
              <div className="relative my-3 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-white border border-slate-100/80 flex items-center justify-center p-2">
                <Image
                  key={d9SelectedColor.imageUrl || d9SelectedColor.name}
                  src={d9SelectedColor.imageUrl || d9.imageUrl}
                  alt={`DENZA D9 Luxury Electric MPV - ${d9SelectedColor.name}`}
                  fill
                  priority
                  className="object-contain transform transition-all duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>

              {/* Official Price & Specs Box - Un-squeezed Layout */}
              <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-3.5 sm:p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase block">
                      Harga Resmi OTR Pekanbaru
                    </span>
                    <div className="font-mono text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 tabular mt-0.5">
                      {formatRupiah(d9.variants[0].priceIdr!)}
                    </div>
                  </div>

                  {/* Spec Badges in Solid White Container to Prevent Clipping */}
                  <div className="flex items-center gap-3 bg-white border border-slate-200/90 rounded-xl px-3.5 py-2 shrink-0 shadow-2xs">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                        <Gauge className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase font-semibold text-slate-500">Jarak Tempuh</span>
                        <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 whitespace-nowrap">600 KM</span>
                      </div>
                    </div>
                    <div className="h-6 w-px bg-slate-200" />
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                        <BatteryCharging className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase font-semibold text-slate-500">Baterai Blade</span>
                        <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 whitespace-nowrap">103,3 kWh</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs - Prominently Displayed */}
            <div className="mt-3.5 pt-3.5 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking(d9.name, d9.variants[0].name)}
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-slate-800 transition-all shadow-sm cursor-pointer"
              >
                <Calendar className="h-4 w-4" />
                <span>Jadwalkan VIP Home Test Drive</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenCredit(d9)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-800 transition-all cursor-pointer"
              >
                <Calculator className="h-4 w-4 text-slate-600" />
                <span>Simulasi Cicilan</span>
              </button>
            </div>
          </div>

          {/* Teaser Stack Cards: Denza B5 & Denza Z9 GT (Span 5 Col on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 justify-between">
            {/* Card Denza B5 */}
            <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-800 tracking-wider">
                        ARRIVING SOON
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">Off-Road Luxury</span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-slate-900 mt-1">
                      {b5.name}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-semibold tracking-wider uppercase mt-0.5">
                      {b5.tagline}
                    </p>
                  </div>

                  {/* Swatches */}
                  <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
                    <span className="text-[10px] text-slate-400 font-medium">Warna:</span>
                    {b5.colors.map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        aria-label={`Pilih warna ${c.name}`}
                        onClick={() => setB5SelectedColor(c)}
                        className={`h-3.5 w-3.5 rounded-full transition-transform cursor-pointer ${
                          b5SelectedColor.name === c.name
                            ? 'scale-125 ring-2 ring-slate-900 ring-offset-1'
                            : 'opacity-70 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Widescreen Vehicle Image Container */}
                <div className="relative my-2.5 aspect-[16/8] w-full overflow-hidden rounded-xl bg-slate-950 flex items-center justify-center p-2">
                  <Image
                    key={b5SelectedColor.imageUrl || b5SelectedColor.name}
                    src={b5SelectedColor.imageUrl || b5.imageUrl}
                    alt={`DENZA B5 Luxury Off-Road SUV - ${b5SelectedColor.name}`}
                    fill
                    className="object-cover transform transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600 py-1.5 px-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px]">Status Kuota Pekanbaru:</span>
                  <span className="text-[11px] font-bold text-slate-900">Pre-Book Dibuka</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenBooking(b5.name, 'Pre-Book Denza B5')}
                className="mt-2.5 w-full flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 py-2.5 text-xs font-bold text-slate-800 transition-all cursor-pointer"
              >
                <span>Daftar Prioritas Peluncuran</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Card Denza Z9 GT */}
            <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-800 tracking-wider">
                        ARRIVING SOON
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">Grand Tourer</span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-slate-900 mt-1">
                      {z9gt.name}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-semibold tracking-wider uppercase mt-0.5">
                      {z9gt.tagline}
                    </p>
                  </div>

                  {/* Swatches */}
                  <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
                    <span className="text-[10px] text-slate-400 font-medium">Warna:</span>
                    {z9gt.colors.map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        aria-label={`Pilih warna ${c.name}`}
                        onClick={() => setZ9SelectedColor(c)}
                        className={`h-3.5 w-3.5 rounded-full transition-transform cursor-pointer ${
                          z9SelectedColor.name === c.name
                            ? 'scale-125 ring-2 ring-slate-900 ring-offset-1'
                            : 'opacity-70 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Widescreen Vehicle Image Container */}
                <div className="relative my-2.5 aspect-[16/8] w-full overflow-hidden rounded-xl bg-slate-950 flex items-center justify-center p-2">
                  <Image
                    key={z9SelectedColor.imageUrl || z9SelectedColor.name}
                    src={z9SelectedColor.imageUrl || z9gt.imageUrl}
                    alt={`DENZA Z9 GT Grand Tourer - ${z9SelectedColor.name}`}
                    fill
                    className="object-cover transform transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600 py-1.5 px-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px]">Status Alokasi Riau:</span>
                  <span className="text-[11px] font-bold text-slate-900">VIP Priority Waitlist</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenBooking(z9gt.name, 'Pre-Book Denza Z9 GT')}
                className="mt-2.5 w-full flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 py-2.5 text-xs font-bold text-slate-800 transition-all cursor-pointer"
              >
                <span>Daftar VIP Waitlist Eksklusif</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
