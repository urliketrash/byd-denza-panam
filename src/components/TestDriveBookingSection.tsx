'use client';

import React, { useState, useEffect } from 'react';
import { SHOWROOM_CATALOG } from '@/data/catalog';
import { SERVICE_OPTIONS, ServiceType, SITE } from '@/data/site';
import {
  buildBookingMessage,
  buildWhatsAppUrl,
  describeAttribution,
  hasAttribution,
  type Attribution,
} from '@/lib/whatsapp';
import {
  Calendar,
  MessageCircle,
  CheckCircle2,
  MapPin,
  Clock,
  Mail,
  AlertCircle,
} from 'lucide-react';

interface TestDriveBookingSectionProps {
  attribution: Attribution;
  prefilledUnit?: string;
  prefilledVariant?: string;
}

export const TestDriveBookingSection: React.FC<TestDriveBookingSectionProps> = ({
  attribution,
  prefilledUnit,
  prefilledVariant,
}) => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [selectedModelId, setSelectedModelId] = useState<string>(
    prefilledUnit
      ? SHOWROOM_CATALOG.find((m) =>
          m.name.toLowerCase().includes(prefilledUnit.toLowerCase())
        )?.id ?? SHOWROOM_CATALOG[0].id
      : SHOWROOM_CATALOG[0].id
  );

  const currentModel =
    SHOWROOM_CATALOG.find((m) => m.id === selectedModelId) ?? SHOWROOM_CATALOG[0];

  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    currentModel.variants[0]?.id ?? ''
  );

  const [selectedColor, setSelectedColor] = useState<string>(
    currentModel.colors[0]?.name ?? ''
  );

  const [service, setService] = useState<ServiceType>('TEST_DRIVE');
  const [date, setDate] = useState<string>('');
  const [minDate, setMinDate] = useState<string>('');

  // Set real-time client date on mount to satisfy Next.js static prerender
  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const todayStr = `${year}-${month}-${day}`;
    setDate(todayStr);
    setMinDate(todayStr);
  }, []);

  // Sync when prefilled props change
  useEffect(() => {
    if (prefilledUnit) {
      const match = SHOWROOM_CATALOG.find((m) =>
        m.name.toLowerCase().includes(prefilledUnit.toLowerCase())
      );
      if (match) {
        setSelectedModelId(match.id);
        const matchVariant = match.variants.find((v) =>
          prefilledVariant && v.name.toLowerCase().includes(prefilledVariant.toLowerCase())
        );
        setSelectedVariantId(matchVariant?.id ?? match.variants[0]?.id ?? '');
        setSelectedColor(match.colors[0]?.name ?? '');
      }
    }
  }, [prefilledUnit, prefilledVariant]);

  const currentVariant =
    currentModel.variants.find((v) => v.id === selectedVariantId) ?? currentModel.variants[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setNameError(true);
      const nameEl = document.getElementById('customer-name');
      nameEl?.focus();
      return;
    }

    const selectedServiceLabel =
      SERVICE_OPTIONS.find((s) => s.id === service)?.label ?? 'Test Drive';

    const fullUnitName = currentModel.name.startsWith(currentModel.brand)
      ? currentModel.name
      : `${currentModel.brand} ${currentModel.name}`;

    const message = buildBookingMessage(
      {
        name: name.trim(),
        unit: fullUnitName,
        variant: currentVariant ? currentVariant.name : undefined,
        color: selectedColor,
        service: selectedServiceLabel,
        date: date || undefined,
      },
      attribution
    );

    // Catat lead ke Google Sheets CRM via background API tanpa menghambat WhatsApp
    try {
      fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nama: name.trim(),
          unit: fullUnitName,
          variant: currentVariant ? currentVariant.name : undefined,
          serviceType: selectedServiceLabel,
          plannedDate: date || undefined,
          source: attributionDesc,
          notes: selectedColor ? `Warna: ${selectedColor}` : undefined,
        }),
      }).catch(() => {});
    } catch {
      // ignore
    }

    const waUrl = buildWhatsAppUrl(message);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const attributionDesc = describeAttribution(attribution);

  return (
    <section id="test-drive" className="relative bg-white py-14 sm:py-20 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Value Proposition & Official Sales Profile */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-bold text-slate-700 tracking-wider uppercase mb-3">
                <span>Layanan Resmi BYD Arista Pekanbaru</span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-[28px] xl:text-[32px] font-extrabold tracking-tight text-slate-900 leading-tight">
                <span className="block">Jadwalkan Test Drive dan</span>
                <span className="block text-slate-800">Dapatkan Penawaran Terbaik</span>
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                Rasakan pengalaman berkendara mobil listrik kelas dunia di Pekanbaru. Konsultan resmi kami siap melayani konsultasi unit, penawaran OTR spesial, dan test drive ke kediaman Anda.
              </p>
            </div>

            {/* Benefit Bullets without loose symbols */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-900 border border-slate-200 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">VIP Home Test Drive Gratis</h4>
                  <p className="text-xs text-slate-500">Unit diantar langsung ke rumah atau kantor Anda di wilayah Pekanbaru dan Kampar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-900 border border-slate-200 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Skema Angsuran dan DP Ringan</h4>
                  <p className="text-xs text-slate-500">Akses langsung ke suku bunga subsidi dan paket bunga kompetitif resmi Arista Group.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-900 border border-slate-200 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Prioritas Pre-Book DANZA</h4>
                  <p className="text-xs text-slate-500">Amankan antrean VIP alokasi perdana untuk DANZA D9, DANZA B5, dan DANZA Z9 GT.</p>
                </div>
              </div>
            </div>

            {/* Official Sales Consultant Card */}
            <div id="dealer-info" className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800">
                    Konsultan Resmi Terverifikasi
                  </span>
                </div>
                <span className="text-[10px] font-semibold bg-slate-100 border border-slate-200 text-slate-700 px-2.5 py-0.5 rounded-full">
                  ARISTA Pekanbaru
                </span>
              </div>

              <div className="pb-1">
                <h3 className="font-display text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
                  {SITE.sales.fullName}
                </h3>
                <p className="text-xs text-slate-600 font-medium mt-0.5">
                  Panggilan: <span className="font-bold text-slate-900">{SITE.sales.nickname}</span>
                </p>
                <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                  {SITE.sales.title}
                </p>
              </div>

              {/* Quick Action Channels */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`https://wa.me/${SITE.sales.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-3 py-2.5 text-xs font-bold hover:bg-slate-800 transition-all shadow-xs"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`mailto:${SITE.sales.email}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 px-3 py-2.5 text-xs font-semibold transition-all"
                >
                  <Mail className="h-4 w-4 text-slate-600" />
                  <span>Email</span>
                </a>

                <a
                  href={SITE.sales.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 hover:bg-white hover:border-slate-300 px-3 py-2 text-xs font-semibold transition-all"
                >
                  <svg className="h-3.5 w-3.5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>

                <a
                  href={SITE.sales.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 hover:bg-white hover:border-slate-300 px-3 py-2 text-xs font-semibold transition-all"
                >
                  <svg className="h-3.5 w-3.5 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.4a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.67a8.21 8.21 0 0 0 4.77 1.52v-3.5z"/>
                  </svg>
                  <span>TikTok</span>
                </a>
              </div>

              {/* Official Dealer Address Info */}
              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-slate-800 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong className="text-slate-900 block">Showroom Resmi ARISTA:</strong>
                    {SITE.address}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 pt-0.5">
                  <Clock className="h-3.5 w-3.5 shrink-0" />
                  <span>{SITE.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Smart Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm relative">
              {/* Attribution indicator pill */}
              {hasAttribution(attribution) && (
                <div className="mb-4 flex justify-center">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-[11px] font-semibold text-slate-800">
                    <span>Tersambung via {attributionDesc || 'Tautan Media Sosial'}</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                  Formulir Reservasi Langsung
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-md mx-auto">
                  Lengkapi formulir singkat di bawah ini. Anda akan langsung tersambung ke WhatsApp Sales Konsultan resmi.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="customer-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Nama Lengkap
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (nameError && e.target.value.trim()) setNameError(false);
                    }}
                    placeholder="Nama kamu"
                    className={`w-full rounded-xl border bg-slate-50 py-2.5 px-3.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none transition-all ${
                      nameError
                        ? 'border-red-500 ring-2 ring-red-100 bg-red-50/20'
                        : 'border-slate-300 focus:border-slate-900'
                    }`}
                  />
                  {nameError && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-xs font-medium text-red-600">
                      <AlertCircle className="h-3.5 w-3.5 text-red-500 shrink-0" />
                      <span>Harap isi nama kamu</span>
                    </div>
                  )}
                </div>

                {/* Service Type Radio */}
                <div>
                  <span className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                    Jenis Layanan
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {SERVICE_OPTIONS.map((opt) => {
                      const isSelected = service === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setService(opt.id)}
                          className={`rounded-xl p-3 text-left transition-all border cursor-pointer ${
                            isSelected
                              ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                              : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-900'
                          }`}
                        >
                          <span className={`block text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                            {opt.label}
                          </span>
                          <span className={`block text-[11px] mt-0.5 leading-tight ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                            {opt.desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Car Model & Variant Picker */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="booking-model-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Pilihan Model
                    </label>
                    <select
                      id="booking-model-select"
                      value={selectedModelId}
                      onChange={(e) => {
                        setSelectedModelId(e.target.value);
                        const match = SHOWROOM_CATALOG.find((m) => m.id === e.target.value);
                        if (match) {
                          setSelectedVariantId(match.variants[0]?.id ?? '');
                          setSelectedColor(match.colors[0]?.name ?? '');
                        }
                      }}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 py-2.5 px-3 text-sm font-semibold text-slate-900 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                    >
                      {SHOWROOM_CATALOG.map((m) => {
                        const displayName = m.name.startsWith(m.brand) ? m.name : `${m.brand} ${m.name}`;
                        return (
                          <option key={m.id} value={m.id}>
                            {displayName}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="booking-variant-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Varian
                    </label>
                    <select
                      id="booking-variant-select"
                      value={selectedVariantId}
                      onChange={(e) => setSelectedVariantId(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 py-2.5 px-3 text-sm font-semibold text-slate-900 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                    >
                      {currentModel.variants.map((v) => (
                        <option key={v.id} value={v.id}>
                          {v.name} {v.subCategory ? `(${v.subCategory})` : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Color and Planned Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="booking-color-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Pilihan Warna
                    </label>
                    <select
                      id="booking-color-select"
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 py-2.5 px-3 text-sm font-semibold text-slate-900 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                    >
                      {currentModel.colors.map((c) => (
                        <option key={c.name} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="booking-date-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Rencana Tanggal
                    </label>
                    <input
                      id="booking-date-input"
                      type="date"
                      value={date}
                      min={minDate || undefined}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 py-2.5 px-3.5 text-sm font-medium text-slate-900 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 px-6 text-sm font-bold text-white hover:bg-slate-800 transition-all shadow-sm cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Kirim Reservasi ke WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
