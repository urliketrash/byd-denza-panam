import { ImageResponse } from 'next/og';

export const alt = 'BYD Arista Pekanbaru - Digital Showroom Mobil Listrik & DANZA';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';
export const dynamic = 'force-static';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 70px',
          backgroundColor: '#FFFFFF',
          backgroundImage:
            'radial-gradient(circle at 10% 10%, #F8FAFC 0%, #FFFFFF 60%), radial-gradient(circle at 90% 90%, #F1F5F9 0%, #FFFFFF 50%)',
          color: '#0F172A',
          fontFamily: 'sans-serif',
          border: '16px solid #F8FAFC',
        }}
      >
        {/* Top bar with Badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span
              style={{
                fontSize: 36,
                fontWeight: 900,
                letterSpacing: '2px',
                color: '#0F172A',
              }}
            >
              BYD
            </span>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderLeft: '2px solid #CBD5E1',
                paddingLeft: '12px',
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 800, color: '#0F172A', letterSpacing: '2px' }}>
                ARISTA
              </span>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#64748B' }}>
                Pekanbaru
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#F8FAFC',
              borderRadius: '9999px',
              padding: '8px 20px',
              border: '1px solid #E2E8F0',
              fontSize: 15,
              fontWeight: 600,
              color: '#475569',
            }}
          >
            Dealer Resmi & Bengkel ARISTA Riau
          </div>
        </div>

        {/* Center Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div
            style={{
              fontSize: 15,
              fontWeight: 800,
              color: '#475569',
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}
          >
            Official Digital Showroom & Sales Consultant
          </div>
          <div
            style={{
              fontSize: 50,
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#0F172A',
              maxWidth: '980px',
            }}
          >
            Showroom Mobil Listrik BYD & DANZA Luxury Pekanbaru
          </div>
          <div style={{ fontSize: 22, color: '#64748B', maxWidth: '880px' }}>
            DANZA D9, BYD Seal, Sealion 7, M6 Dual Mode. Layanan VIP Test Drive bersama Suci Primayuri.
          </div>
        </div>

        {/* Bottom Feature Tags */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#F8FAFC',
              border: '1px solid #CBD5E1',
              borderRadius: '12px',
              padding: '10px 20px',
              fontSize: 16,
              color: '#0F172A',
              fontWeight: 700,
            }}
          >
            Harga OTR Resmi Pekanbaru
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#F8FAFC',
              border: '1px solid #CBD5E1',
              borderRadius: '12px',
              padding: '10px 20px',
              fontSize: 16,
              color: '#0F172A',
              fontWeight: 700,
            }}
          >
            Kalkulator Cicilan Instan
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#F8FAFC',
              border: '1px solid #CBD5E1',
              borderRadius: '12px',
              padding: '10px 20px',
              fontSize: 16,
              color: '#0F172A',
              fontWeight: 700,
            }}
          >
            WhatsApp Sales: 0823 8767 7722
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
