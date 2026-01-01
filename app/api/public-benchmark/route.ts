import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Check if key exists
  const publishKey = process.env.PUBLIC_SNAPSHOT_KEY;
  
  if (!publishKey) {
    console.error('[public-benchmark] PUBLIC_SNAPSHOT_KEY environment variable is not set');
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
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-eza-publish-key': publishKey,
      },
      cache: 'force-cache',
      next: { revalidate: 86400 }, // 24 hours
    });

    // If upstream returns error, passthrough
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ 
        error: 'Upstream API error',
        status: response.status 
      }));
      
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

