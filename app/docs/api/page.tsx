import { generatePageMetadata } from "@/lib/seo";
import Section from "@/app/components/Section";
import FadeIn from "@/app/components/FadeIn";
import Icon from "@/app/components/Icon";
import Link from "next/link";

export const metadata = generatePageMetadata(
  "EZA-Core API Dokümantasyonu",
  "EZA-Core API referansı. Tüm endpoint'ler, authentication, rate limits, webhooks ve detaylı teknik dokümantasyon."
);

const apiEndpoints = [
  {
    category: "Proxy",
    description: "Proxy endpoint'i, LLM veya kullanıcı çıktılarının etik etkilerini analiz eder ve görünür kılar. İçeriği değiştirmez, engellemez veya sansürlemez.",
    endpoints: [
      {
        method: "POST",
        path: "/api/v5/proxy/analyze",
        description: "LLM veya kullanıcı çıktılarının etik etkilerini analiz eder ve görünür kılar",
        params: ["input (string)", "llm_response (string, optional)", "model (string, optional)"],
      },
    ],
  },
];

const authMethods = [
  {
    title: "API Key Authentication",
    description: "API anahtarları, EZA Platform Dashboard üzerinden organizasyon bazlı olarak oluşturulur ve yönetilir. Her istek, Authorization header'ında API key ile yapılır.",
    example: "Authorization: Bearer YOUR_API_KEY",
  },
  {
    title: "Token Management",
    description: "API anahtarları organizasyona bağlıdır ve erişim yetkileri platform üzerinden kontrol edilir.",
    example: "",
  },
];

const errorCodes = [
  { code: "400", title: "Bad Request", description: "Geçersiz request formatı veya eksik parametreler" },
  { code: "401", title: "Unauthorized", description: "Geçersiz veya eksik API key" },
  { code: "403", title: "Forbidden", description: "API key bu endpoint için yetkisiz" },
  { code: "429", title: "Rate Limit Exceeded", description: "Rate limit aşıldı, retry-after header'ına bakın" },
  { code: "500", title: "Internal Server Error", description: "Sunucu hatası, tekrar deneyin" },
  { code: "503", title: "Service Unavailable", description: "Servis geçici olarak kullanılamıyor" },
];

export default function APIDocumentationPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-200 via-blue-100/80 to-slate-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-eza-blue/10 text-eza-blue text-sm font-semibold rounded-full border border-eza-blue/20 mb-4">
            <Icon name="Code" size={16} />
            API Dokümantasyonu
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-eza-dark mb-6">
            EZA-Core API Referansı
          </h1>
          <p className="text-xl text-eza-text-secondary mb-4">
            EZA-Core API, organizasyon bazlı etik analiz entegrasyonları için tasarlanmıştır. Tüm API erişimleri, EZA Platform üzerinden oluşturulan organizasyonlar ve Proxy katmanı üzerinden gerçekleştirilir.
          </p>
          <p className="text-base text-eza-text-secondary/80 mb-2">
            EZA-Core API, v5 mimarisi üzerine inşa edilmiştir. Tüm güncel entegrasyonlar /api/v5 namespace'i üzerinden gerçekleştirilir.
          </p>
          <p className="text-base text-eza-text-secondary/80">
            Bu dokümantasyon, kurumsal entegrasyonlar için geçerli olan API yüzeyini kapsar.
          </p>
        </div>
      </div>

      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          {/* API Overview */}
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-eza-text mb-6 flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-eza-blue to-blue-400 rounded-full"></div>
                API Genel Bakış
              </h2>
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-eza-text mb-2">Base URL</h3>
                    <code className="block bg-eza-gray/50 rounded-lg p-3 text-sm font-mono text-eza-text">
                      https://api.ezacore.ai
                    </code>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-eza-text mb-2">Versiyonlama</h3>
                    <p className="text-eza-text-secondary">
                      API versiyonlama URL path'inde yapılır. Şu anda <code className="bg-eza-gray/50 px-2 py-0.5 rounded">v5</code> aktif.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-eza-text mb-2">Content-Type</h3>
                    <p className="text-eza-text-secondary">
                      Tüm request'ler <code className="bg-eza-gray/50 px-2 py-0.5 rounded">application/json</code> formatında olmalıdır.
                    </p>
                  </div>
                </div>
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Çalışma Modeli</h4>
                      <p className="text-blue-800 text-sm">
                        EZA API çağrıları, bireysel anahtarlar üzerinden değil; Platform Dashboard'ta tanımlanan organizasyon, kullanım amacı ve etik politika setleri üzerinden değerlendirilir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Authentication */}
          <FadeIn delay={100}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-eza-text mb-6 flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-eza-blue to-blue-400 rounded-full"></div>
                Authentication
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {authMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 p-6 hover:border-eza-blue/30 hover:shadow-lg transition-all"
                  >
                    <h3 className="text-xl font-semibold text-eza-text mb-3">{method.title}</h3>
                    <p className="text-eza-text-secondary mb-4">{method.description}</p>
                    {method.example && (
                      <code className="block bg-eza-gray/50 rounded-lg p-3 text-xs font-mono text-eza-text break-all">
                        {method.example}
                      </code>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* API Endpoints */}
          <FadeIn delay={200}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-eza-text mb-6 flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-eza-blue to-blue-400 rounded-full"></div>
                Proxy API
              </h2>
              <div className="space-y-8">
                {apiEndpoints.map((category, catIndex) => (
                  <div key={category.category} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-eza-text mb-3">{category.category}</h3>
                    {category.description && (
                      <p className="text-eza-text-secondary mb-4">{category.description}</p>
                    )}
                    <div className="space-y-6">
                      {category.endpoints.map((endpoint, epIndex) => (
                        <div
                          key={epIndex}
                          className="border-l-4 border-eza-blue/30 pl-6 py-4 bg-eza-gray/30 rounded-r-lg"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <span
                              className={`px-3 py-1 rounded text-sm font-semibold ${
                                endpoint.method === "POST"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-blue-100 text-blue-700"
                              }`}
                            >
                              {endpoint.method}
                            </span>
                            <code className="text-sm font-mono text-eza-text bg-white px-3 py-1 rounded border">
                              {endpoint.path}
                            </code>
                          </div>
                          <p className="text-eza-text-secondary mb-3">{endpoint.description}</p>
                          {endpoint.params && (
                            <div>
                              <h4 className="text-sm font-semibold text-eza-text mb-2">Parametreler:</h4>
                              <ul className="list-disc list-inside space-y-1 text-sm text-eza-text-secondary">
                                {endpoint.params.map((param, paramIndex) => (
                                  <li key={paramIndex}>
                                    <code className="bg-white px-2 py-0.5 rounded text-xs">{param}</code>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Rate Limits */}
          <FadeIn delay={300}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-eza-text mb-6 flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-eza-blue to-blue-400 rounded-full"></div>
                Rate Limits
              </h2>
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-eza-gray/30 rounded-xl">
                    <div className="text-3xl font-bold text-eza-blue mb-2">1000</div>
                    <div className="text-sm text-eza-text-secondary">İstek / Dakika</div>
                  </div>
                  <div className="text-center p-6 bg-eza-gray/30 rounded-xl">
                    <div className="text-3xl font-bold text-eza-blue mb-2">50,000</div>
                    <div className="text-sm text-eza-text-secondary">İstek / Gün</div>
                  </div>
                  <div className="text-center p-6 bg-eza-gray/30 rounded-xl">
                    <div className="text-3xl font-bold text-eza-blue mb-2">Retry-After</div>
                    <div className="text-sm text-eza-text-secondary">429 hatasında header'da</div>
                  </div>
                </div>
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-sm text-blue-800">
                    Rate limit'ler organizasyon bazlı uygulanır. Limit aşımı durumunda 429 hatası ve Retry-After header'ı döner.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Error Handling */}
          <FadeIn delay={400}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-eza-text mb-6 flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-eza-blue to-blue-400 rounded-full"></div>
                Hata Yönetimi
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {errorCodes.map((error, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 p-6 hover:border-red-300 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm font-semibold">
                        {error.code}
                      </span>
                      <h3 className="text-lg font-semibold text-eza-text">{error.title}</h3>
                    </div>
                    <p className="text-eza-text-secondary text-sm">{error.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={500}>
            <div className="bg-gradient-to-r from-eza-blue to-blue-600 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Hazır mısınız?</h2>
              <p className="text-xl mb-8 text-blue-100">
                EZA'yı kurumsal kullanım için entegre etmek üzere organizasyonunuzu oluşturun ve Proxy entegrasyonunu başlatın.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/panels/platform"
                  className="bg-white text-eza-blue px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Platform Dashboard
                </Link>
                <Link
                  href="/docs/integration"
                  className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border border-blue-500"
                >
                  Entegrasyon Kılavuzları
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}

