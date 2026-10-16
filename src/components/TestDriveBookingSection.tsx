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
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
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

    const selectedServiceLabel =
      SERVICE_OPTIONS.find((s) => s.id === service)?.label ?? 'Test Drive';

    const message = buildBookingMessage(
      {
        name: name.trim(),
        unit: `${currentModel.brand} ${currentModel.name}`,
        variant: currentVariant ? currentVariant.name : undefined,
        color: selectedColor,
        service: selectedServiceLabel,
        date: date || undefined,
      },
      attribution
    );

    const waUrl = buildWhatsAppUrl(message);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const attributionDesc = describeAttribution(attribution);

  return (
    <section id="test-drive" className="relative bg-white py-14 sm:py-20 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Value Proposition & Dealer Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-bold text-slate-700 tracking-wider uppercase mb-3">
                <span>Layanan Resmi BYD dan Denza Panam</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Jadwalkan Test Drive dan Dapatkan Penawaran Terbaik
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                Rasakan pengalaman berkendara mobil listrik kelas dunia di Pekanbaru. Konsultan resmi kami siap menghadirkan unit uji coba langsung ke kediaman Anda tanpa biaya.
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
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Prioritas Pre-Book Denza</h4>
                  <p className="text-xs text-slate-500">Amankan antrean VIP alokasi perdana untuk Denza B5 dan Denza Z9 GT.</p>
                </div>
              </div>
            </div>

            {/* Dealer Contact & Address Card */}
            <div id="dealer-info" className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wide">
                <MapPin className="h-4 w-4 text-slate-700" />
                <span>Showroom dan Bengkel Resmi ARISTA</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>BYD / Denza Panam - Arista</strong>
                <br />
                {SITE.address}
              </p>
              <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-slate-400" />
                  <span>{SITE.hours}</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <Phone className="h-3.5 w-3.5" />
                  <span>{SITE.whatsappDisplay}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Smart Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm relative">
              {/* Attribution indicator pill */}
              {hasAttribution(attribution) && (
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-[11px] font-semibold text-slate-800">
                  <span>Tersambung via {attributionDesc || 'Tautan Sosial Media'}</span>
                </div>
              )}

              <h3 className="font-display text-xl font-bold text-slate-900">
                Formulir Reservasi Langsung
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                Lengkapi formulir singkat di bawah ini. Anda akan langsung tersambung ke WhatsApp Sales Konsultan resmi.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="customer-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Nama Lengkap
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    required
                    placeholder="Contoh: Hendra Wijaya"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 py-3 px-4 text-sm font-medium text-slate-900 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Service Type Radio Cards */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                    Pilihan Layanan
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
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
                      {SHOWROOM_CATALOG.map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.brand} {m.name}
                        </option>
                      ))}
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
                    <label htmlFor="booking-date" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Rencana Tanggal (Opsional)
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 py-2 px-3 text-sm font-medium text-slate-900 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Submit to WhatsApp Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-slate-900 hover:bg-slate-800 py-3.5 px-6 text-sm font-bold text-white shadow-xs transition-all cursor-pointer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Kirim Permintaan ke WhatsApp Sales Resmi</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-2.5">
                    Data Anda terlindungi secara profesional. Konsultan resmi Arista Group akan merespons dalam waktu singkat.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
