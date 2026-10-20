'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { DANZA_MODELS, VehicleModel } from '@/data/catalog';
import { formatRupiah } from '@/lib/format';
import { BatteryCharging, Gauge, ChevronRight, Calculator, Calendar, Award } from 'lucide-react';

interface DenzaFlagshipHeroProps {
  onOpenBooking: (unit?: string, variant?: string) => void;
  onOpenCredit: (model: VehicleModel) => void;
}

export const DenzaFlagshipHero: React.FC<DenzaFlagshipHeroProps> = ({ onOpenBooking, onOpenCredit }) => {
  const d9 = DANZA_MODELS.find((m) => m.id === 'denza-d9')!;
  const b5 = DANZA_MODELS.find((m) => m.id === 'denza-b5')!;
  const z9gt = DANZA_MODELS.find((m) => m.id === 'denza-z9-gt')!;

  const [d9SelectedColor, setD9SelectedColor] = useState(d9.colors[0]);
  const [b5SelectedColor, setB5SelectedColor] = useState(b5.colors[0]);
  const [z9SelectedColor, setZ9SelectedColor] = useState(z9gt.colors[0]);

  return (
    <section id="denza-flagship" className="relative overflow-hidden bg-white pt-8 pb-14 sm:pt-12 sm:pb-20 text-slate-900 border-b border-slate-200">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Eyebrow & Title - Pure White Architectural Styling */}
        <div className="mb-8 sm:mb-12 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-[11px] font-bold text-slate-700 tracking-wider uppercase mb-3">
            <Award className="h-3.5 w-3.5 text-slate-900" />
            <span>Dealer Resmi Mobil Listrik PT Arista Group Pekanbaru</span>
          </div>
          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
            <span className="block">Showroom Resmi</span>
            <span className="block mt-1 sm:mt-1.5">BYD & DANZA Luxury Pekanbaru</span>
          </h1>
          <p className="mt-3.5 text-xs sm:text-sm lg:text-[15px] text-slate-600 max-w-3xl lg:max-w-4xl mx-auto font-normal leading-relaxed text-center sm:text-justify [text-align-last:center]">
            Pusat penjualan, pemesanan kuota VIP, dan layanan uji coba berkendara resmi di Provinsi Riau. Dapatkan penawaran OTR terkini, program subsidi DP ringan, garansi Blade Battery 8 tahun, dan VIP Home Test Drive langsung ke kediaman Anda.
          </p>

        </div>

        {/* Bento Grid - Pure White Studio Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Main Hero Card: DANZA D9 (Span 7 Col on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 relative group">
            <div>
              {/* Card Header */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[10px] font-bold text-slate-800 uppercase tracking-wider">
                      VIP Luxury MPV
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-2">
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

              {/* Main Vehicle Image on Pure High-Key Studio Background */}
              <div className="relative my-4 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-50/50 border border-slate-100 flex items-center justify-center p-3">
                <Image
                  key={d9SelectedColor.imageUrl || d9SelectedColor.name}
                  src={d9SelectedColor.imageUrl || d9.imageUrl}
                  alt={`DANZA D9 Luxury Electric MPV - ${d9SelectedColor.name}`}
                  fill
                  priority
                  className="object-contain transform transition-all duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>

              {/* Official Price & Specs Box */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase block">
                      Harga Resmi OTR Pekanbaru
                    </span>
                    <div className="font-mono text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 tabular mt-0.5">
                      {formatRupiah(d9.variants[0].priceIdr!)}
                    </div>
                  </div>

                  {/* Spec Badges in Solid White Container */}
                  <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-3.5 py-2 shrink-0 shadow-2xs">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                        <Gauge className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase font-semibold text-slate-500">Jarak Tempuh</span>
                        <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 whitespace-nowrap">{d9.variants[0].rangeKm} KM</span>
                      </div>
                    </div>
                    <div className="h-6 w-px bg-slate-200" />
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                        <BatteryCharging className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase font-semibold text-slate-500">Baterai Blade</span>
                        <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 whitespace-nowrap">{d9.variants[0].batteryKwh} kWh</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
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

          {/* Teaser Stack Cards: DANZA B5 & DANZA Z9 GT (Span 5 Col on lg) - Pure White Studio */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
            {/* Card DANZA B5 */}
            <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-5 shadow-xs hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-800 tracking-wider">
                        ARRIVING SOON
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">Off-Road Luxury</span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-slate-900 mt-1.5">
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

                {/* Pure White Studio Vehicle Image Container */}
                <div className="relative my-3 aspect-[16/8] w-full overflow-hidden rounded-2xl bg-slate-50/70 border border-slate-100 flex items-center justify-center p-2">
                  <Image
                    key={b5SelectedColor.imageUrl || b5SelectedColor.name}
                    src={b5SelectedColor.imageUrl || b5.imageUrl}
                    alt={`DANZA B5 Luxury Off-Road SUV - ${b5SelectedColor.name}`}
                    fill
                    className="object-contain transform transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-slate-600 py-1.5 px-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[11px] font-medium">Indikasi OTR Pekanbaru:</span>
                    <span className="font-mono text-[12px] font-bold text-slate-900">{formatRupiah(b5.variants[0].priceIdr!)}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-600 py-1 px-3">
                    <span className="text-[10px] text-slate-500 font-medium">Status Kuota Riau:</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">Pre-Book Dibuka</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenBooking(b5.name, 'Pre-Book DANZA B5')}
                className="mt-3 w-full flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 py-2.5 text-xs font-bold text-slate-800 transition-all cursor-pointer"
              >
                <span>Daftar Prioritas Peluncuran</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Card DANZA Z9 GT */}
            <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-5 shadow-xs hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-800 tracking-wider">
                        ARRIVING SOON
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">Grand Tourer</span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-slate-900 mt-1.5">
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

                {/* Pure White Studio Vehicle Image Container */}
                <div className="relative my-3 aspect-[16/8] w-full overflow-hidden rounded-2xl bg-slate-50/70 border border-slate-100 flex items-center justify-center p-2">
                  <Image
                    key={z9SelectedColor.imageUrl || z9SelectedColor.name}
                    src={z9SelectedColor.imageUrl || z9gt.imageUrl}
                    alt={`DANZA Z9 GT Grand Tourer - ${z9SelectedColor.name}`}
                    fill
                    className="object-contain transform transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-slate-600 py-1.5 px-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[11px] font-medium">Indikasi OTR Pekanbaru:</span>
                    <span className="font-mono text-[12px] font-bold text-slate-900">{formatRupiah(z9gt.variants[0].priceIdr!)}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-600 py-1 px-3">
                    <span className="text-[10px] text-slate-500 font-medium">Spesifikasi Flagship:</span>
                    <span className="font-mono text-[10px] font-bold text-slate-800">701 KM · 72,6 kWh</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenBooking(z9gt.name, 'Pre-Book DANZA Z9 GT')}
                className="mt-3 w-full flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 py-2.5 text-xs font-bold text-slate-800 transition-all cursor-pointer"
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
