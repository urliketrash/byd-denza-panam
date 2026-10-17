import React from 'react';
import { SITE } from '@/data/site';
import { BydLogo } from '@/components/BydLogo';
import { ShieldCheck, MapPin, Clock, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 text-slate-600 pt-14 pb-24 lg:pb-14 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="text-slate-900">
                <BydLogo className="h-5 sm:h-6 w-auto" />
              </div>
              <div className="h-5 w-px bg-slate-300" aria-hidden="true" />
              <div className="flex flex-col justify-center">
                <span className="text-[11px] font-black tracking-wider text-slate-900 leading-none">
                  ARISTA
                </span>
                <span className="text-[9px] text-slate-500 font-medium tracking-tight mt-0.5 leading-none">
                  Terbaik dan Terpercaya
                </span>
                <span className="text-[9px] text-slate-500 font-medium tracking-tight mt-0.5 leading-none">
                  Pekanbaru
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Digital Showroom resmi BYD dan DANZA Pekanbaru di bawah naungan PT Arista Group, menghadirkan ekosistem kendaraan listrik terdepan di Pekanbaru dan Provinsi Riau.
            </p>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-3 py-1 text-[11px] text-slate-700 font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-slate-800" />
              <span>Dealer dan Bengkel Resmi ARISTA</span>
            </div>
          </div>

          {/* Col 2: Lini Kendaraan */}
          <div className="space-y-2.5">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">
              Lini Kendaraan
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#denza-flagship" className="hover:text-slate-900 transition-colors">
                  DANZA D9 (Executive Luxury MPV)
                </a>
              </li>
              <li>
                <a href="#denza-flagship" className="hover:text-slate-900 transition-colors">
                  DANZA B5 (Arriving Soon)
                </a>
              </li>
              <li>
                <a href="#denza-flagship" className="hover:text-slate-900 transition-colors">
                  DANZA Z9 GT (Arriving Soon)
                </a>
              </li>
              <li>
                <a href="#katalog-byd" className="hover:text-slate-900 transition-colors">
                  BYD Seal dan Sealion 7
                </a>
              </li>
              <li>
                <a href="#katalog-byd" className="hover:text-slate-900 transition-colors">
                  BYD M6 EV dan M6 Dual Mode
                </a>
              </li>
              <li>
                <a href="#katalog-byd" className="hover:text-slate-900 transition-colors">
                  BYD Atto 3, Dolphin, dan Atto 1
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Layanan Showroom */}
          <div className="space-y-2.5">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">
              Layanan Pelanggan
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#test-drive" className="hover:text-slate-900 transition-colors">
                  VIP Home Test Drive
                </a>
              </li>
              <li>
                <a href="#simulasi-kredit" className="hover:text-slate-900 transition-colors">
                  Simulasi Kredit dan Angsuran Ringan
                </a>
              </li>
              <li>
                <a href="#keunggulan-arista" className="hover:text-slate-900 transition-colors">
                  Fasilitas Bengkel Resmi 3S Soebrantas
                </a>
              </li>
              <li>
                <a href="#faq-section" className="hover:text-slate-900 transition-colors">
                  Informasi Pajak BBN-KB 0% Riau
                </a>
              </li>
              <li>
                <a href="#test-drive" className="hover:text-slate-900 transition-colors">
                  Pre-Book Prioritas DANZA
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Lokasi & Kontak Sales Resmi */}
          <div className="space-y-2.5">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">
              Kontak Sales & Showroom
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-slate-700 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{SITE.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-500 shrink-0" />
                <span>{SITE.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-700 shrink-0" />
                <span>
                  WhatsApp: <strong className="text-slate-900">{SITE.sales.nickname} ({SITE.whatsappDisplay})</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-700 shrink-0" />
                <a href={`mailto:${SITE.sales.email}`} className="hover:text-slate-900 underline transition-colors">
                  {SITE.sales.email}
                </a>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-2.5 pt-2">
                <a
                  href={SITE.sales.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-colors"
                >
                  <svg className="h-3 w-3 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                  className="flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-colors"
                >
                  <svg className="h-3 w-3 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.4a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.67a8.21 8.21 0 0 0 4.77 1.52v-3.5z"/>
                  </svg>
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Disclaimer without symbol bullets */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            Hak Cipta 2026 {SITE.name}. Bagian dari {SITE.group}. Seluruh hak cipta dilindungi undang-undang.{' '}
            <span className="relative inline-block group ml-0.5">
              <span
                title="code by sigit sadida"
                className="cursor-default select-none text-[8.5px] font-mono tracking-tighter text-slate-400/40 hover:text-slate-700 transition-colors"
              >
                s.s
              </span>
              <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover:inline-flex items-center px-2 py-0.5 text-[10px] font-medium text-white bg-slate-900 rounded shadow-md whitespace-nowrap z-50 animate-in fade-in zoom-in-95 duration-150">
                code by sigit sadida
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
              </span>
            </span>
          </p>
          <p className="text-center sm:text-right">
            Harga OTR Pekanbaru dapat disesuaikan mengikuti ketentuan regulasi perpajakan daerah dan BBN-KB Riau.
          </p>
        </div>
      </div>
    </footer>
  );
};
