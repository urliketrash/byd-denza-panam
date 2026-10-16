'use client';

import { useEffect, useState } from 'react';
import type { Attribution } from '@/lib/whatsapp';

const STORAGE_KEY = 'bdp_attribution';
const KEYS = ['utm_source', 'utm_medium', 'utm_content', 'utm_campaign', 'fbclid'] as const;

/**
 * Menangkap parameter UTM & fbclid dari URL kedatangan (mis. link bio Instagram),
 * menyimpannya di sessionStorage agar tetap ada selama sesi, lalu mengembalikannya
 * untuk disisipkan ke pesan WhatsApp.
 */
export function useAttribution(): Attribution {
  const [attribution, setAttribution] = useState<Attribution>({});

  useEffect(() => {
    let stored: Attribution = {};
    try {
      stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? '{}');
    } catch {
      stored = {};
    }

    const params = new URLSearchParams(window.location.search);
    const fromUrl: Attribution = {};
    KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) fromUrl[key] = value;
    });

    const merged = Object.keys(fromUrl).length ? fromUrl : stored;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    } catch {
      /* in-app browser dengan storage terblokir — abaikan */
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sinkronisasi satu kali dari browser API
    setAttribution(merged);
  }, []);

  return attribution;
}
