'use client';

import React, { useState } from 'react';
import { SITE } from '@/data/site';
import { MessageCircle, Menu, X, Calendar } from 'lucide-react';
import { buildWhatsAppUrl, buildQuickChatMessage, type Attribution } from '@/lib/whatsapp';

interface NavbarProps {
  attribution: Attribution;
  onOpenBooking: (unit?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ attribution, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Denza Flagship', href: '#denza-flagship' },
    { label: 'Katalog BYD', href: '#katalog-byd' },
    { label: 'Simulasi Kredit', href: '#simulasi-kredit' },
    { label: 'Test Drive', href: '#test-drive' },
    { label: 'Dealer Resmi', href: '#dealer-info' },
  ];

  const quickWaUrl = buildWhatsAppUrl(buildQuickChatMessage(attribution));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand identity */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-lg py-1"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display text-lg sm:text-xl font-extrabold tracking-wider text-slate-900">
                BYD <span className="text-slate-400 font-light">/</span> DENZA
              </span>
              <span className="rounded bg-slate-100 border border-slate-200 px-1.5 py-0.5 text-[10px] font-bold text-slate-700 uppercase tracking-widest">
                Panam
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
              <span className="font-bold tracking-wide text-slate-700">ARISTA</span>
              <span className="text-slate-300">/</span>
              <span className="hidden sm:inline text-slate-500">{SITE.groupTagline}</span>
              <span className="sm:hidden text-slate-500">Pekanbaru</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navigasi Utama">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-wide text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded px-1.5 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={quickWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Konsultasi cepat via WhatsApp"
            className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
          >
            <MessageCircle className="h-4 w-4 text-slate-700" />
            <span>Chat Sales</span>
          </a>

          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 cursor-pointer"
          >
            <Calendar className="h-4 w-4" />
            <span>Jadwalkan Test Drive</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={quickWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Sales"
            className="flex items-center justify-center p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700"
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
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 text-xs font-semibold text-white cursor-pointer shadow-sm"
            >
              <Calendar className="h-4 w-4" />
              <span>Jadwalkan Test Drive di Rumah</span>
            </button>
            <a
              href={quickWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-50"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Konsultasi WhatsApp ({SITE.whatsappDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
