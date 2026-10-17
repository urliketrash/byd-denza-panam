'use client';

import React, { useState } from 'react';
import { FAQS, SITE } from '@/data/site';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const askSalesUrl = buildWhatsAppUrl(
    `Halo Kak ${SITE.sales.nickname} (${SITE.name}), saya ingin menanyakan informasi lebih lanjut seputar mobil listrik BYD Pekanbaru. Mohon dibantu.`
  );

  return (
    <section id="faq-section" className="relative bg-white py-14 sm:py-20 border-b border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-[11px] font-bold text-slate-700 tracking-wider uppercase mb-3">
            <HelpCircle className="h-3.5 w-3.5 text-slate-900" />
            <span>Pusat Informasi & Tanya Jawab</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            Pertanyaan Umum Seputar BYD di Riau
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            Informasi transparan seputar insentif pajak BBN-KB 0%, garansi baterai resmi, pengisian daya, dan pembelian unit di Pekanbaru.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 hover:border-slate-300 shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-4.5 sm:p-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                >
                  <span className="font-display text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-slate-900 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4.5 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 animate-in fade-in-50 duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-display text-sm sm:text-base font-bold text-slate-900">
              Punya Pertanyaan Lain Seputar Unit & Promo?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Konsultasikan langsung dengan Sales Consultant resmi kami.
            </p>
          </div>

          <a
            href={askSalesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-all shadow-sm shrink-0 active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Tanya via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
