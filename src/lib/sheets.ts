// =====================================================================
// GOOGLE SHEETS HEADLESS CMS & CRM CONNECTOR
// =====================================================================
// Menghubungkan website Next.js ke Google Spreadsheet via Google Apps Script (GAS).
// Jika endpoint belum diatur, sistem otomatis memakai fallback data lokal (src/data/catalog.ts)
// sehingga website 100% aman dan tidak akan pernah error/blank.
// =====================================================================

export interface RemotePriceOverride {
  variantId: string;
  priceIdr?: number | null;
  dpPromoIdr?: number | null;
  cicilanPerBulanIdr?: number | null;
  status?: 'AVAILABLE' | 'ARRIVING_SOON';
  promoNote?: string;
}

export interface LeadSubmission {
  nama: string;
  phone?: string;
  unit: string;
  variant?: string;
  serviceType: 'Test Drive' | 'Simulasi Kredit' | 'Konsultasi Umum';
  plannedDate?: string;
  source?: string;
  notes?: string;
}

const SHEETS_ENDPOINT = process.env.NEXT_PUBLIC_SHEETS_ENDPOINT || '';

/**
 * Mengirim data lead / prospek calon konsumen ke tab 'Database_Leads' di Google Sheets
 */
export async function recordLeadToGoogleSheets(lead: LeadSubmission): Promise<boolean> {
  if (!SHEETS_ENDPOINT) {
    // Endpoint belum diisi di .env.local, lewati secara silent
    return false;
  }

  try {
    const payload = {
      action: 'ADD_LEAD',
      timestamp: new Date().toISOString(),
      ...lead,
    };

    const res = await fetch(SHEETS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      // mode no-cors jika dibutuhkan oleh Google Apps Script redirect
    });

    return res.ok;
  } catch (err) {
    console.warn('[GoogleSheets] Gagal mencatat lead ke Google Sheets:', err);
    return false;
  }
}

/**
 * Mengambil update harga dan promo terbaru dari tab 'Katalog_Harga' di Google Sheets
 */
export async function fetchCatalogFromGoogleSheets(): Promise<RemotePriceOverride[] | null> {
  if (!SHEETS_ENDPOINT) {
    return null;
  }

  try {
    const res = await fetch(`${SHEETS_ENDPOINT}?action=GET_CATALOG`, {
      next: { revalidate: 60 }, // Revalidate cache tiap 60 detik (ISR)
    });

    if (!res.ok) return null;
    const json = await res.json();
    if (json.status === 'success' && Array.isArray(json.data)) {
      return json.data as RemotePriceOverride[];
    }
    return null;
  } catch (err) {
    console.warn('[GoogleSheets] Gagal mengambil katalog dari Google Sheets, menggunakan data lokal:', err);
    return null;
  }
}
