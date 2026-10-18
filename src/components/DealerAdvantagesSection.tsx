import React from 'react';
import { ShieldCheck, Wrench, Zap, Home, Award } from 'lucide-react';

export const DealerAdvantagesSection: React.FC = () => {
  const advantages = [
    {
      icon: ShieldCheck,
      badge: 'Proteksi Baterai',
      titleLine1: 'Garansi Baterai 8 Tahun',
      titleLine2: 'Hingga 160.000 KM',
      description:
        'Blade Battery berproteksi termal tertinggi di dunia. Garansi resmi dealer dengan penggantian penuh jika kapasitas baterai berada di bawah 70%.',
    },
    {
      icon: Wrench,
      badge: 'Fasilitas 3S Lengkap',
      titleLine1: 'Bengkel Resmi 3S Dealer',
      titleLine2: 'Jl. HR. Soebrantas Km. 11',
      description:
        'Pusat layanan Sales, Service, dan Suku Cadang resmi Jl. Soebrantas, Pekanbaru. Didukung teknisi handal bersertifikat global serta jaminan suku cadang asli.',
    },
    {
      icon: Zap,
      badge: 'Home Charging Kit',
      titleLine1: 'Layanan Wall Charger 7 kW',
      titleLine2: 'Instalasi Resmi di Rumah',
      description:
        'Layanan penyediaan unit Wallbox Charger resmi beserta survei daya kelistrikan dan instalasi rumah profesional oleh teknisi bersertifikasi Arista.',
    },
    {
      icon: Home,
      badge: 'VIP Concierge',
      titleLine1: 'VIP Home Test Drive',
      titleLine2: 'Langsung ke Rumah Anda',
      description:
        'Pengalaman uji coba berkendara tanpa repot datang ke showroom resmi kami. Unit uji coba diantar langsung ke kediaman atau kantor Anda di Pekanbaru.',
    },
  ];

  return (
    <section id="keunggulan-arista" className="relative bg-slate-50/50 py-14 sm:py-20 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl lg:max-w-5xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-[11px] font-bold text-slate-700 tracking-wider uppercase mb-3">
            <Award className="h-3.5 w-3.5 text-slate-900" />
            <span>Standar Layanan Dealer Resmi Arista</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 sm:whitespace-nowrap">
            4 Komitmen Pelayanan Terbaik dan Terpercaya di Riau
          </h2>
          <p className="mt-3 text-xs sm:text-sm lg:text-[15px] text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed text-center sm:text-justify [text-align-last:center]">
            Membeli mobil listrik di dealer resmi BYD Arista Pekanbaru memberikan ketenangan pikiran jangka panjang dengan jaminan purna jual terpercaya dan fasilitas berstandar internasional.
          </p>
        </div>

        {/* 4 Cards Grid - Responsive: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-center gap-2.5 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 shrink-0">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-[10px] font-bold text-slate-700 uppercase tracking-wider whitespace-nowrap">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-base sm:text-[17px] font-bold text-slate-900 leading-snug min-h-[2.8rem] flex flex-col justify-center text-center">
                    <span className="block">{item.titleLine1}</span>
                    <span className="block text-slate-800">{item.titleLine2}</span>
                  </h3>
                  <p className="mt-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal text-justify [text-justify:inter-word] [text-wrap:pretty]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
