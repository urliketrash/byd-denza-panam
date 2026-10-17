import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import { SITE } from '@/data/site';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap',
});

const title = 'BYD Arista Pekanbaru — Dealer & Digital Showroom Resmi Mobil Listrik & DANZA';
const description =
  'Showroom digital resmi BYD Arista Pekanbaru, Riau. Cek harga OTR resmi terbaru DANZA D9, BYD Seal, Sealion 7, M6, M6 DM, Atto 3, Dolphin & Atto 1, simulasi kredit instan, serta konsultasi langsung dengan Sales Consultant resmi Suci Primayuri.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title,
  description,
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  keywords: [
    'BYD Pekanbaru',
    'DANZA Pekanbaru',
    'Dealer BYD Riau',
    'Harga BYD Seal Pekanbaru',
    'Harga DANZA D9',
    'BYD M6 Pekanbaru',
    'Mobil Listrik Pekanbaru',
    'Arista Group',
    'BYD Soebrantas',
    'Sales BYD Pekanbaru Suci',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    siteName: SITE.name,
    title: 'BYD Arista Pekanbaru — Dealer & Digital Showroom Resmi',
    description: 'DANZA D9 mulai Rp 986,5 Juta, BYD Atto 1 mulai Rp 222 Juta. Konsultasi dan simulasi kredit bersama Suci Primayuri.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BYD Arista Pekanbaru — Dealer Resmi Mobil Listrik & DANZA',
    description: 'Harga OTR resmi, simulasi kredit, dan konsultasi test drive BYD & DANZA Pekanbaru.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${jakarta.variable} ${inter.variable} ${jetbrains.variable} antialiased`}>
      <body className="min-h-dvh bg-white text-slate-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
