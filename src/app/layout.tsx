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

const title = 'BYD & Denza Pekanbaru — Digital Showroom Resmi | BYD | Denza Panam (Arista Group)';
const description =
  'Showroom digital resmi BYD & Denza Panam Pekanbaru, Riau. Cek harga OTR terbaru Denza D9, BYD Seal, Sealion 7, M6, M6 DM, Atto 3, Dolphin & Atto 1, simulasi kredit instan, dan jadwalkan test drive di rumah via WhatsApp.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title,
  description,
  keywords: [
    'BYD Pekanbaru',
    'Denza Pekanbaru',
    'Dealer BYD Riau',
    'Harga BYD Seal Pekanbaru',
    'Harga Denza D9',
    'BYD M6 DM',
    'Mobil Listrik Pekanbaru',
    'Arista Group',
    'BYD Panam',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    siteName: SITE.name,
    title: 'BYD / Denza Panam - Digital Showroom Pekanbaru',
    description: 'Denza D9 mulai Rp 986,5 Juta, BYD Atto 1 mulai Rp 222 Juta. Simulasi kredit dan test drive di rumah.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BYD | Denza Panam — Digital Showroom Pekanbaru',
    description: 'Harga OTR resmi, simulasi kredit, dan test drive BYD & Denza di Pekanbaru.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#05070c',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="id" className={`${jakarta.variable} ${inter.variable} ${jetbrains.variable} antialiased`}>
      <body className="min-h-dvh" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
