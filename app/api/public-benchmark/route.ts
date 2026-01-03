export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Debug: Log all env vars that start with PUBLIC
  const publicEnvVars = Object.keys(process.env)
    .filter(key => key.startsWith('PUBLIC'))
    .reduce((obj, key) => {
      obj[key] = process.env[key] ? '***SET***' : 'NOT SET';
      return obj;
    }, {} as Record<string, string>);
  console.log('[public-benchmark] Environment variables starting with PUBLIC:', publicEnvVars);
  
  // Check if key exists
  const rawKey = process.env.PUBLIC_SNAPSHOT_KEY;
  const publishKey = rawKey?.trim();
  
  console.log('[public-benchmark] PUBLIC_SNAPSHOT_KEY value:', publishKey ? 'EXISTS (length: ' + publishKey.length + ')' : 'NOT SET');
  console.log('[public-benchmark] Key preview (first 4 chars):', publishKey ? publishKey.substring(0, 4) + '...' : 'N/A');
  console.log('[public-benchmark] Full key (for verification):', publishKey);
  console.log('[public-benchmark] Key char codes (first 10):', publishKey ? Array.from(publishKey.substring(0, 10)).map(c => c.charCodeAt(0)).join(',') : 'N/A');
  
  if (!publishKey) {
    console.error('[public-benchmark] PUBLIC_SNAPSHOT_KEY environment variable is not set');
    console.error('[public-benchmark] Available env vars:', Object.keys(process.env).filter(k => k.includes('SNAPSHOT') || k.includes('PUBLIC')).join(', '));
    return NextResponse.json(
      { 
        error: "Server configuration error",
        message: "API key is not configured"
      },
      { status: 500 }
    );
  }

  try {
    // Get period parameter from query string (default: daily)
    const { searchParams } = new URL(request.url);
    const period = searchParams.get('period') || 'daily';
    
    // Target endpoint
    const targetUrl = `https://api.ezacore.ai/api/public/test-safety-benchmarks?period=${period}`;
    
    // Forward request with x-eza-publish-key header
    console.log('[public-benchmark] Fetching from:', targetUrl);
    console.log('[public-benchmark] Key (first 10 chars):', publishKey.substring(0, 10) + '...');
    
    // Use Headers API - backend requires exact format
    const headers = new Headers();
    headers.set("x-eza-publish-key", publishKey.trim());
    
    console.log('[public-benchmark] Header set: x-eza-publish-key');
    
    const response = await fetch(targetUrl, {
      method: "GET",
      headers,
      cache: "no-store",
    });

    console.log('[public-benchmark] Upstream response status:', response.status, response.statusText);
    
    // Log response headers for debugging
    const responseHeaders: Record<string, string> = {};
    response.headers.forEach((value, key) => {
      responseHeaders[key] = value;
    });
    console.log('[public-benchmark] Response headers:', JSON.stringify(responseHeaders));

    // If upstream returns error, passthrough
    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unable to read error response');
      console.error('[public-benchmark] Upstream error:', response.status, errorText);
      console.error('[public-benchmark] Request URL:', targetUrl);
      console.error('[public-benchmark] Key length:', publishKey.length);
      
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { 
          error: 'Upstream API error',
          status: response.status,
          message: errorText.substring(0, 200) // Limit error message length
        };
      }
      
      return NextResponse.json(
        errorData,
        { status: response.status }
      );
    }

    // Return successful response
    const data = await response.json();
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
      },
    });
  } catch (error) {
    console.error('[public-benchmark] Error fetching from upstream:', error);
    
    return NextResponse.json(
      { 
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}

