import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const endpoint = process.env.NEXT_PUBLIC_SHEETS_ENDPOINT;

    if (!endpoint) {
      return NextResponse.json({
        status: 'skipped',
        message: 'Google Sheets endpoint not configured. Lead recorded in browser only.',
      });
    }

    const payload = {
      action: 'ADD_LEAD',
      timestamp: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }),
      ...body,
    };

    // Forward to Google Apps Script Web App
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json(
        { status: 'error', message: 'Failed to forward to Google Sheets' },
        { status: 500 }
      );
    }

    return NextResponse.json({ status: 'success', message: 'Lead recorded to Google Sheets' });
  } catch (error) {
    console.error('[API Leads] Error saving lead:', error);
    return NextResponse.json(
      { status: 'error', message: 'Internal server error' },
      { status: 500 }
    );
  }
}
