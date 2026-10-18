'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, buildQuickChatMessage, type Attribution } from '@/lib/whatsapp';

interface StickyMobileBarProps {
  attribution: Attribution;
  onOpenBooking?: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  attribution,
}) => {
  const quickWaUrl = buildWhatsAppUrl(buildQuickChatMessage(attribution));

  return (
    <aside
      aria-label="Aksi Cepat Mobile"
      className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 sm:p-3 lg:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.06)]"
    >
      <div className="mx-auto flex max-w-md items-center">
        <a
          href={quickWaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 py-3 px-4 text-xs sm:text-sm font-bold text-white transition-all shadow-xs active:scale-[0.99]"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Chat Sales WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
