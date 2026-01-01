# Test & Safety Benchmarks Sayfası

Bu sayfa, EZA test sonuçlarını server-side API route üzerinden çekerek gösterir.

## API Yapılandırması

Sayfa, test sonuçlarını server-side API route (`/api/public-benchmark`) üzerinden çeker. API key server tarafında korunur ve client'a sızmayacak şekilde yapılandırılmıştır.

## API Endpoint

Sayfa şu endpoint'i çağırır:
- `GET /api/public-benchmark?period=daily`
- **Server-side:** Key korumalı (`x-eza-publish-key` header server tarafında eklenir)
- **Client cache:** 15 gün localStorage cache
- **Server cache:** 24 saat (force-cache + revalidate: 86400)

## API Response Formatı (Backend)

Backend şu formatta JSON döndürür (snake_case):

```json
{
  "timestamp": "2025-11-30T00:30:48.562827Z",
  "total_tests": 152,
  "passed": 149,
  "failed": 3,
  "success_rate": 98.03,
  "suites": [
    {
      "name": "Core",
      "tests": 53,
      "passed": 50,
      "failed": 3,
      "rate": 94.34,
      "type": "Fake LLM",
      "description": "Temel fonksiyonellik, pipeline ve skor hesaplama testleri."
    }
  ]
}
```

Frontend otomatik olarak bu formatı camelCase'e dönüştürür.

## Fallback Veriler

Eğer API'den veri çekilemezse, sayfa statik fallback verileri kullanır (`TEST_SUITES`).

## Özellikler

- ✅ Client-side rendering ile API'den veri çekme
- ✅ Server-side key koruması (x-eza-publish-key client'a sızmaz)
- ✅ 15 gün localStorage cache (API çağrısı minimize edilir)
- ✅ 24 saat server-side cache (Next.js force-cache)
- ✅ Cache fallback (API başarısız olursa eski cache gösterilir)
- ✅ Render güvenliği (null/bozuk veri durumunda "—" gösterilir)
- ✅ API durum göstergesi
- ✅ Son güncelleme zamanı gösterimi
- ✅ Güvenli key yönetimi (environment variable: PUBLIC_SNAPSHOT_KEY)

