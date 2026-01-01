import { NextResponse } from 'next/server';

export async function GET() {
  // Her iki endpoint'i de dene
  const endpoints = [
    "https://api.ezacore.ai/api/test-results/comprehensive",
    "https://api.ezacore.ai/api/test-results/latest"
  ];

  for (const endpoint of endpoints) {
    try {
      console.log("[API Route] Trying endpoint:", endpoint);
      
      // Timeout ekle (10 saniye)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      
      try {
        const res = await fetch(endpoint, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
          signal: controller.signal,
        });

        clearTimeout(timeoutId);
        
        console.log("[API Route] Response status:", res.status, res.statusText);

        if (res.ok) {
          const data = await res.json();
          console.log("[API Route] Successfully received data from:", endpoint);
          
          // Eğer /latest endpoint'i kullanıldıysa, formatı dönüştür
          if (endpoint.includes('/latest') && !data.overall) {
            const transformed = {
              overall: {
                total_runs: data.total_runs || 0,
                total_tests: data.total_tests || 0,
                success_rate: data.success_rate || 0,
                success_count: data.passed || 0,
                failure_count: data.failed || 0,
              },
              test_suites: (data.suites || []).map((suite: any) => ({
                name: suite.name,
                total: suite.tests || 0,
                success_rate: suite.rate || suite.success_rate || 0,
                status: suite.failed > 0 ? "fail" : (suite.rate < 90 ? "warning" : "success"),
                improvement: suite.improvement,
              })),
            };
            return NextResponse.json(transformed);
          }
          
          return NextResponse.json(data);
        } else {
          const errorText = await res.text();
          console.warn(`[API Route] Endpoint ${endpoint} returned status ${res.status}:`, errorText);
          // Bir sonraki endpoint'i dene
          continue;
        }
      } catch (fetchError) {
        clearTimeout(timeoutId);
        
        if (fetchError instanceof Error) {
          if (fetchError.name === 'AbortError') {
            console.warn(`[API Route] Request timeout for ${endpoint}`);
            continue; // Bir sonraki endpoint'i dene
          }
          console.warn(`[API Route] Fetch error for ${endpoint}:`, fetchError.message);
        }
        // Bir sonraki endpoint'i dene
        continue;
      }
    } catch (error) {
      console.warn(`[API Route] Error with endpoint ${endpoint}:`, error);
      // Bir sonraki endpoint'i dene
      continue;
    }
  }

  // Tüm endpoint'ler başarısız oldu
  console.error("[API Route] All endpoints failed");
  return NextResponse.json(
    { 
      error: "Backend API unavailable",
      message: "Test results API'ye şu anda erişilemiyor. Lütfen daha sonra tekrar deneyin."
    },
    { status: 503 }
  );
}

