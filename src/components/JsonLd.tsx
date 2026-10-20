import React from 'react';
import { SITE, FAQS } from '@/data/site';
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
          'Dealer dan Digital Showroom resmi BYD & DANZA Pekanbaru (Arista Group), melayani penjualan unit mobil listrik, simulasi kredit, test drive di rumah, dan suku cadang resmi di Riau.',
        url: SITE.url,
        telephone: SITE.whatsappDisplay,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.address,
          addressLocality: SITE.city,
          addressRegion: SITE.region,
          addressCountry: 'ID',
        },
        employee: {
          '@type': 'Person',
          name: SITE.sales.fullName,
          jobTitle: SITE.sales.title,
          telephone: SITE.whatsappDisplay,
          email: SITE.sales.email,
        },
        openingHours: 'Mo-Sa 08:30-17:00, Su 09:00-15:00',
        priceRange: 'Rp 222.000.000 - Rp 2.250.000.000',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 0.468205,
          longitude: 101.378932,
        },
        hasMap: 'https://maps.google.com/?q=BYD+Arista+Pekanbaru+Panam',
        areaServed: [
          { '@type': 'City', name: 'Pekanbaru' },
          { '@type': 'AdministrativeArea', name: 'Kampar' },
          { '@type': 'AdministrativeArea', name: 'Siak' },
          { '@type': 'City', name: 'Dumai' },
          { '@type': 'AdministrativeArea', name: 'Pelalawan' },
          { '@type': 'AdministrativeArea', name: 'Riau' },
        ],
        sameAs: [
          SITE.sales.instagramUrl,
          SITE.sales.tiktokUrl,
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE.url}#faq`,
        mainEntity: FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
