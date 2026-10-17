import { SITE } from '@/data/site';

export interface Attribution {
  utm_source?: string;
  utm_medium?: string;
  utm_content?: string;
  utm_campaign?: string;
  fbclid?: string;
}

export function hasAttribution(a: Attribution) {
  return Boolean(a.utm_source || a.utm_medium || a.utm_content || a.utm_campaign || a.fbclid);
}

/** Label manusiawi untuk sumber trafik, mis. "Instagram / link_in_bio". */
export function describeAttribution(a: Attribution) {
  const sourceMap: Record<string, string> = {
    ig: 'Instagram',
    instagram: 'Instagram',
    fb: 'Facebook',
    facebook: 'Facebook',
    tiktok: 'TikTok',
    google: 'Google',
  };
  const source = a.utm_source
    ? sourceMap[a.utm_source.toLowerCase()] ?? a.utm_source
    : a.fbclid
    ? 'Meta Ads'
    : undefined;
  return [source, a.utm_content].filter(Boolean).join(' / ');
}

function attributionBlock(a: Attribution) {
  if (!hasAttribution(a)) return '';
  const parts = [
    a.utm_source && `src=${a.utm_source}`,
    a.utm_medium && `med=${a.utm_medium}`,
    a.utm_content && `cnt=${a.utm_content}`,
    a.utm_campaign && `cmp=${a.utm_campaign}`,
    a.fbclid && `fbclid=${a.fbclid.slice(0, 12)}`,
  ].filter(Boolean);
  return `\n\nReferensi: ${parts.join(' | ')}`;
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export interface BookingMessageInput {
  name: string;
  unit?: string;
  variant?: string;
  color?: string;
  service: string;
  date?: string;
}

export function buildBookingMessage(input: BookingMessageInput, attribution: Attribution) {
  const formattedDate = input.date
    ? new Date(`${input.date}T00:00:00`).toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'Fleksibel';

  const lines = [
    `Halo Kak ${SITE.sales.nickname} (${SITE.name})`,
    '',
    `Saya ${input.name || '-'} ingin mengajukan:`,
    `Layanan: ${input.service}`,
    `Unit: ${input.unit ?? '-'}`,
    input.variant ? `Varian: ${input.variant}` : null,
    input.color ? `Warna: ${input.color}` : null,
    `Rencana: ${formattedDate}`,
    '',
    'Mohon informasi lebih lanjut dan penawaran terbaiknya. Terima kasih.',
  ].filter((l): l is string => l !== null);

  return lines.join('\n') + attributionBlock(attribution);
}

export function buildQuickChatMessage(attribution: Attribution) {
  return (
    `Halo Kak ${SITE.sales.nickname} (${SITE.name}), saya ingin konsultasi mengenai unit mobil listrik BYD dan DANZA Pekanbaru. Mohon dibantu.` +
    attributionBlock(attribution)
  );
}
