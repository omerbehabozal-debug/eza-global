# Test & Safety Benchmarks Sayfası

Bu sayfa, EZA test sonuçlarını ezacore backend'inden çekerek gösterir.

## API Yapılandırması

Sayfa, test sonuçlarını şu sırayla API URL'lerinden çekmeye çalışır:

1. `NEXT_PUBLIC_EZA_BACKEND_URL` (environment variable)
2. `EZA_BACKEND_URL` (environment variable)
3. `https://eza-core-v5-production.up.railway.app` (default)

## Environment Variable Ayarlama

`.env.local` dosyasına ekleyin:

```env
# Backend API URL
NEXT_PUBLIC_EZA_BACKEND_URL=https://eza-core-v5-production.up.railway.app
# veya
EZA_BACKEND_URL=https://eza-core-v5-production.up.railway.app

# API Key (gerekli)
NEXT_PUBLIC_EZA_API_KEY=your-api-key-here
# veya
EZA_API_KEY=your-api-key-here
```

## API Endpoint

Sayfa şu endpoint'i çağırır:
- `GET /api/test-results/latest`
- **Authentication:** `X-Api-Key` header gerekli

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

- ✅ SSR (Server-Side Rendering) ile API'den veri çekme
- ✅ 60 saniyede bir otomatik yenileme (revalidate)
- ✅ Fallback veriler ile çalışma
- ✅ API durum göstergesi
- ✅ Son güncelleme zamanı gösterimi
- ✅ Canlı test sonuçları badge'i
- ✅ API Key authentication desteği

