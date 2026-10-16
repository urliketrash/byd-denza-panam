import React from 'react';
import { SITE } from '@/data/site';
import { ShieldCheck, MapPin, Clock, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 text-slate-600 pt-14 pb-24 lg:pb-14 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-extrabold tracking-wider text-slate-900">
                BYD <span className="text-slate-400 font-light">/</span> DENZA
              </span>
              <span className="rounded bg-white border border-slate-200 px-1.5 py-0.5 text-[10px] font-bold text-slate-700 uppercase tracking-widest">
                Panam
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Digital Showroom resmi BYD dan Denza Panam di bawah naungan PT Arista Group, menghadirkan ekosistem kendaraan listrik terdepan di Pekanbaru dan Provinsi Riau.
            </p>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-3 py-1 text-[11px] text-slate-700 font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-slate-800" />
              <span>Dealer dan Bengkel Resmi ARISTA</span>
            </div>
          </div>

          {/* Col 2: Lini Kendaraan */}
          <div className="space-y-2.5">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">
              Lini Flagship
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#denza-flagship" className="hover:text-slate-900 transition-colors">
                  Denza D9 (Executive Luxury MPV)
                </a>
              </li>
              <li>
                <a href="#denza-flagship" className="hover:text-slate-900 transition-colors">
                  Denza B5 (Arriving Soon)
                </a>
              </li>
              <li>
                <a href="#denza-flagship" className="hover:text-slate-900 transition-colors">
                  Denza Z9 GT (Arriving Soon)
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
                <a href="#test-drive" className="hover:text-slate-900 transition-colors">
                  Pre-Book Prioritas Denza
                </a>
              </li>
              <li>
                <a href="#test-drive" className="hover:text-slate-900 transition-colors">
                  Tukar Tambah Semua Merek
                </a>
              </li>
              <li>
                <a href="#dealer-info" className="hover:text-slate-900 transition-colors">
                  Instalasi Wall Charger Rumah
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Lokasi & Kontak */}
          <div className="space-y-2.5">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">
              Showroom dan Kontak
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-slate-700 shrink-0 mt-0.5" />
                <span>{SITE.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-500 shrink-0" />
                <span>{SITE.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-700 shrink-0" />
                <span className="font-bold text-slate-900">{SITE.whatsappDisplay}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Disclaimer without symbol bullets */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            Hak Cipta 2026 {SITE.name}. Bagian dari {SITE.group}. Seluruh hak cipta dilindungi undang-undang.
          </p>
          <p className="text-center sm:text-right">
            Harga OTR Pekanbaru dapat disesuaikan mengikuti ketentuan regulasi perpajakan daerah dan BBN-KB Riau.
          </p>
        </div>
      </div>
    </footer>
  );
};
