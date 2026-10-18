export async function onRequestPost(context: { request: Request; env: Record<string, string> }) {
  try {
    const body = await context.request.json();
    const endpoint = context.env.NEXT_PUBLIC_SHEETS_ENDPOINT;

    if (!endpoint) {
      return new Response(
        JSON.stringify({
          status: 'skipped',
          message: 'Google Sheets endpoint not configured. Lead recorded in browser only.',
        }),
        { headers: { 'Content-Type': 'application/json' } }
      );
    }

    const payload = {
      action: 'ADD_LEAD',
      timestamp: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }),
      ...body,
    };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ status: 'error', message: 'Failed to forward to Google Sheets' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ status: 'success', message: 'Lead recorded to Google Sheets' }),
      { headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('[Cloudflare Function Leads] Error saving lead:', error);
    return new Response(
      JSON.stringify({ status: 'error', message: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
