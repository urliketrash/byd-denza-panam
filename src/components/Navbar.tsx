'use client';

import React, { useState } from 'react';
import { SITE } from '@/data/site';
import { BydLogo } from '@/components/BydLogo';
import { buildWhatsAppUrl, buildQuickChatMessage, type Attribution } from '@/lib/whatsapp';
import { MessageCircle, Menu, X } from 'lucide-react';

interface NavbarProps {
  attribution: Attribution;
  onOpenBooking: () => void;
  onOpenCredit?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ attribution, onOpenCredit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'DANZA Flagship', href: '#denza-flagship' },
    { label: 'Katalog BYD', href: '#katalog-byd' },
    { label: 'Keunggulan 3S', href: '#keunggulan-arista' },
    { label: 'Simulasi Kredit', href: '#simulasi-kredit' },
    { label: 'FAQ', href: '#faq-section' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#simulasi-kredit') {
      e.preventDefault();
      onOpenCredit?.();
      setMobileMenuOpen(false);
    }
  };

  const quickWaUrl = buildWhatsAppUrl(buildQuickChatMessage(attribution));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand identity - 3 separate lines: ARISTA / Terbaik dan Terpercaya / Pekanbaru */}
        <a
          href="#"
          className="flex items-center gap-3 sm:gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-lg py-1 shrink-0"
          aria-label="BYD Arista Pekanbaru - Kembali ke Beranda"
        >
          <div className="flex items-center text-slate-900 group-hover:opacity-90 transition-opacity">
            <BydLogo className="h-6 sm:h-7 w-auto" />
          </div>
          <div className="h-8 w-px bg-slate-200" aria-hidden="true" />
          <div className="flex flex-col justify-center">
            <span className="text-xs sm:text-[13px] font-black tracking-wider text-slate-900 leading-tight">
              ARISTA
            </span>
            <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium tracking-tight leading-tight mt-0.5">
              Terbaik dan Terpercaya
            </span>
            <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium tracking-tight leading-tight">
              Pekanbaru
            </span>
          </div>
        </a>

        {/* Desktop Nav - strictly 1 line (whitespace-nowrap) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Navigasi Utama">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="whitespace-nowrap text-xs font-semibold tracking-wide text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded px-1.5 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button - Chat Sales (Suci) only */}
        <div className="hidden sm:flex items-center">
          <a
            href={quickWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Konsultasi via WhatsApp dengan Sales Suci"
            className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-900 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 whitespace-nowrap active:scale-95"
          >
            <MessageCircle className="h-4 w-4 text-slate-700" />
            <span>Chat Sales (Suci)</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={quickWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Sales Suci"
            className="flex items-center justify-center p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-200">
            <a
              href={quickWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-xs font-bold text-white hover:bg-slate-800 active:scale-[0.99] shadow-xs"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat Sales (Suci) — {SITE.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
