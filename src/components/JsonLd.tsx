import React from 'react';
import { SITE } from '@/data/site';
import { SHOWROOM_CATALOG } from '@/data/catalog';

export const JsonLd: React.FC = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AutoDealer',
        '@id': `${SITE.url}#dealer`,
        name: `${SITE.name} — ${SITE.group}`,
        description:
          'Dealer dan Digital Showroom resmi BYD & Denza Panam Pekanbaru, melayani penjualan, test drive di rumah, dan suku cadang resmi di Riau.',
        url: SITE.url,
        telephone: SITE.whatsappDisplay,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.address,
          addressLocality: SITE.city,
          addressRegion: SITE.region,
          addressCountry: 'ID',
        },
        openingHours: 'Mo-Sa 08:30-17:00, Su 09:00-15:00',
        priceRange: 'Rp 222.000.000 - Rp 986.500.000',
      },
      ...SHOWROOM_CATALOG.filter((m) => m.variants.some((v) => v.priceIdr !== null)).map((m) => {
        const minPrice = Math.min(
          ...m.variants.map((v) => v.priceIdr).filter((p): p is number => p !== null)
        );
        const maxPrice = Math.max(
          ...m.variants.map((v) => v.priceIdr).filter((p): p is number => p !== null)
        );

        return {
          '@type': 'Car',
          '@id': `${SITE.url}#${m.id}`,
          name: `${m.brand} ${m.name}`,
          brand: {
            '@type': 'Brand',
            name: m.brand,
          },
          category: m.category,
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'IDR',
            lowPrice: minPrice,
            highPrice: maxPrice,
            offerCount: m.variants.length,
            seller: {
              '@id': `${SITE.url}#dealer`,
            },
          },
        };
      }),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
      }}
    />
  );
};
