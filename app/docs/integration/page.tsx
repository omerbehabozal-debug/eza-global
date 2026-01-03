import { generatePageMetadata } from "@/lib/seo";
import Section from "@/app/components/Section";
import FadeIn from "@/app/components/FadeIn";
import Icon from "@/app/components/Icon";
import Link from "next/link";

export const metadata = generatePageMetadata(
  "EZA-Core Entegrasyon Kılavuzları",
  "EZA-Core entegrasyon rehberleri. REST API, Python SDK, JavaScript SDK, webhook entegrasyonu ve best practices."
);

const quickStartSteps = [
  {
    step: 1,
    title: "API Key Oluştur",
    description: "Platform Panel'e giriş yaparak organizasyonunuza ait API anahtarını oluşturun",
    icon: "Key",
  },
  {
    step: 2,
    title: "İlk İsteği Gönder",
    description: "Proxy analiz endpoint'ine test isteği göndererek entegrasyonunuzu doğrulayın",
    icon: "Send",
    note: "Proxy, harici sistemlerin EZA-Core etik analiz altyapısına API üzerinden bağlandığı kurumsal entegrasyon katmanıdır.",
  },
  {
    step: 3,
    title: "Response'u İncele",
    description: "Dönen etik analiz sonuçlarını kontrol edin",
    icon: "CheckCircle",
  },
];

const integrationMethods = [
  {
    title: "REST API",
    description: "HTTP istekleri ile direkt entegrasyon. Tüm diller ve framework'ler için uyumlu. Bu entegrasyon yöntemi, Platform Panel üzerinden oluşturulan API anahtarı ile çalışır.",
    icon: "Globe",
    features: ["HTTP/HTTPS", "JSON format", "Tüm endpoint'ler", "Webhook desteği"],
    codeExample: `curl -X POST https://api.ezacore.ai/api/v5/proxy/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"input": "Your text here"}'`,
  },
  {
    title: "Python SDK",
    description: "Resmi Python SDK ile hızlı entegrasyon. Async/await desteği ile performanslı. Platform Panel üzerinden oluşturulan API anahtarı ile kullanılır.",
    icon: "Code",
    features: ["pip install ezacore", "Async/await", "Type hints", "Error handling"],
    codeExample: `from ezacore import EZACore

client = EZACore(api_key="YOUR_API_KEY")
result = await client.proxy.analyze("Your text here")
print(result.score)`,
  },
  {
    title: "JavaScript/TypeScript SDK",
    description: "Node.js ve browser için TypeScript desteği ile modern entegrasyon. Platform Panel üzerinden oluşturulan API anahtarı ile çalışır.",
    icon: "FileCode",
    features: ["npm install @ezacore/sdk", "TypeScript", "Browser/Node.js", "Promise-based"],
    codeExample: `import { EZACore } from '@ezacore/sdk';

const client = new EZACore({ apiKey: 'YOUR_API_KEY' });
const result = await client.proxy.analyze('Your text here');
console.log(result.score);`,
  },
];

const webhookGuide = {
  title: "Webhook Entegrasyonu",
  description: "Gerçek zamanlı olay bildirimleri için webhook endpoint'inizi yapılandırın. Webhook ayarları, Platform Panel üzerinden yapılandırılır ve doğrulanır.",
  steps: [
    {
      title: "Endpoint Oluştur",
      description: "Webhook'ları alacak HTTPS endpoint'inizi hazırlayın",
    },
    {
      title: "Platform Panel'de Yapılandır",
      description: "Webhook URL'inizi Platform Panel üzerinden yapılandırın ve doğrulayın",
    },
    {
      title: "İmza Doğrulama",
      description: "X-EZA-Signature header'ını kullanarak imzayı doğrulayın",
    },
    {
      title: "Event Handling",
      description: "Gelen event'leri işleyin ve sisteminize entegre edin",
    },
  ],
};

const bestPractices = [
  {
    title: "Güvenlik",
    icon: "Shield",
    items: [
      "API key'lerinizi environment variable'larda saklayın",
      "HTTPS kullanın, asla HTTP üzerinden API key göndermeyin",
      "Webhook imzalarını mutlaka doğrulayın",
      "Rate limit'leri aşmamak için retry logic kullanın",
      "API anahtarları ve webhook ayarları organizasyon bazlıdır ve Platform Panel üzerinden merkezi olarak yönetilir",
    ],
  },
  {
    title: "Performans",
    icon: "Zap",
    items: [
      "Async/await veya Promise kullanarak non-blocking istekler yapın",
      "Batch işlemler için toplu endpoint'leri kullanın",
      "Connection pooling kullanın",
      "Gereksiz isteklerden kaçının, cache mekanizmaları ekleyin",
    ],
  },
  {
    title: "Hata Yönetimi",
    icon: "AlertCircle",
    items: [
      "Tüm HTTP status kodlarını kontrol edin",
      "429 (Rate Limit) durumunda Retry-After header'ına göre bekleyin",
      "Exponential backoff ile retry mekanizması ekleyin",
      "Hataları loglayın ve monitoring sisteminize entegre edin",
    ],
  },
];

export default function IntegrationGuidePage() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-200 via-blue-100/80 to-slate-100 py-8 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-eza-blue/10 text-eza-blue text-xs sm:text-sm font-semibold rounded-full border border-eza-blue/20 mb-3 md:mb-4">
            <Icon name="Plug" size={14} />
            Entegrasyon Kılavuzları
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-eza-dark mb-3 md:mb-6">
            EZA-Core Entegrasyon Rehberi
          </h1>
          <p className="text-sm md:text-xl text-eza-text-secondary mb-3 md:mb-4">
            REST API, Python SDK, JavaScript SDK ve webhook entegrasyonu için detaylı kılavuzlar.
          </p>
          <p className="text-xs md:text-base text-eza-text-secondary/80">
            Platform Panel üzerinden organizasyonunuzu oluşturun, API anahtarınızı tanımlayın ve EZA-Core'u sistemlerinize entegre edin.
          </p>
        </div>
      </div>

      <Section className="bg-white !pt-6 md:!pt-16 !pb-6 md:!pb-24 !min-h-0">
        <div className="max-w-6xl mx-auto">
          {/* Quick Start */}
          <FadeIn>
            <div className="mb-8 md:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-eza-text mb-4 md:mb-6 flex items-center gap-3">
                <div className="h-1 w-8 md:w-12 bg-gradient-to-r from-eza-blue to-blue-400 rounded-full"></div>
                Hızlı Başlangıç
              </h2>
              <div className="grid md:grid-cols-3 gap-3 md:gap-6">
                {quickStartSteps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 hover:border-eza-blue/30 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-eza-blue/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg md:text-xl font-bold text-eza-blue">{step.step}</span>
                      </div>
                      <Icon name={step.icon} className="text-eza-blue" size={20} />
                    </div>
                    <h3 className="text-base md:text-xl font-semibold text-eza-text mb-2">{step.title}</h3>
                    <p className="text-xs md:text-sm text-eza-text-secondary mb-2">{step.description}</p>
                    {step.note && (
                      <p className="text-xs text-eza-text-secondary/70 italic border-t border-gray-100 pt-2 mt-2">
                        {step.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 md:mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4 md:p-6">
                <div className="flex items-start gap-2 md:gap-3">
                  <Icon name="Info" className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2 text-sm md:text-base">API Key Gerekli</h4>
                    <p className="text-blue-800 text-xs md:text-sm mb-2">
                      Başlamak için Platform Panel üzerinden organizasyonunuza ait API anahtarını oluşturun.
                    </p>
                    <p className="text-blue-700 text-xs">
                      API anahtarları, Platform Panel'de organizasyon bazlı olarak yönetilir ve izlenir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Integration Methods */}
          <FadeIn delay={100}>
            <div className="mb-8 md:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-eza-text mb-4 md:mb-6 flex items-center gap-3">
                <div className="h-1 w-8 md:w-12 bg-gradient-to-r from-eza-blue to-blue-400 rounded-full"></div>
                Entegrasyon Yöntemleri
              </h2>
              <div className="space-y-4 md:space-y-8">
                {integrationMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 p-4 md:p-8 shadow-sm hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-eza-blue/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={method.icon} className="text-eza-blue" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-eza-text mb-2">{method.title}</h3>
                        <p className="text-sm md:text-base text-eza-text-secondary mb-2">{method.description}</p>
                        <p className="text-xs md:text-sm text-eza-text-secondary/80 italic">
                          API kullanımı, organizasyon ve yetkilendirme kuralları çerçevesinde izlenir.
                        </p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <h4 className="font-semibold text-eza-text mb-2 md:mb-3 text-sm md:text-base">Özellikler</h4>
                        <ul className="space-y-2">
                          {method.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-center gap-2 text-xs md:text-sm text-eza-text-secondary">
                              <Icon name="Check" size={14} className="text-eza-blue flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-eza-text mb-2 md:mb-3 text-sm md:text-base">Örnek Kod</h4>
                        <pre className="bg-eza-gray/50 rounded-lg p-3 md:p-4 text-xs font-mono text-eza-text overflow-x-auto">
                          <code>{method.codeExample}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Webhook Guide */}
          <FadeIn delay={200}>
            <div className="mb-8 md:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-eza-text mb-4 md:mb-6 flex items-center gap-3">
                <div className="h-1 w-8 md:w-12 bg-gradient-to-r from-eza-blue to-blue-400 rounded-full"></div>
                {webhookGuide.title}
              </h2>
              <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-8 shadow-sm">
                <p className="text-sm md:text-base text-eza-text-secondary mb-4 md:mb-8">{webhookGuide.description}</p>
                <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                  {webhookGuide.steps.map((step, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-eza-blue/30 pl-3 md:pl-6 py-3 md:py-4 bg-eza-gray/30 rounded-r-lg"
                    >
                      <div className="flex items-center gap-2 md:gap-3 mb-2">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-eza-blue/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs md:text-sm font-bold text-eza-blue">{index + 1}</span>
                        </div>
                        <h3 className="text-base md:text-lg font-semibold text-eza-text">{step.title}</h3>
                      </div>
                      <p className="text-xs md:text-sm text-eza-text-secondary ml-9 md:ml-11">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Best Practices */}
          <FadeIn delay={300}>
            <div className="mb-8 md:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-eza-text mb-4 md:mb-6 flex items-center gap-3">
                <div className="h-1 w-8 md:w-12 bg-gradient-to-r from-eza-blue to-blue-400 rounded-full"></div>
                En İyi Uygulamalar
              </h2>
              <div className="grid md:grid-cols-3 gap-3 md:gap-6">
                {bestPractices.map((practice, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 hover:border-eza-blue/30 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={practice.icon} className="text-eza-blue" size={20} />
                      </div>
                      <h3 className="text-base md:text-xl font-semibold text-eza-text">{practice.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {practice.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-xs md:text-sm text-eza-text-secondary">
                          <Icon name="Check" size={14} className="text-eza-blue flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Code Examples & Resources */}
          <FadeIn delay={400}>
            <div className="mb-8 md:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-eza-text mb-4 md:mb-6 flex items-center gap-3">
                <div className="h-1 w-8 md:w-12 bg-gradient-to-r from-eza-blue to-blue-400 rounded-full"></div>
                Kod Örnekleri & Kaynaklar
              </h2>
              <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-8 shadow-sm">
                <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                  <div className="bg-eza-gray/30 rounded-xl p-4 md:p-6">
                    <h3 className="font-semibold text-eza-text mb-2 md:mb-3 flex items-center gap-2 text-sm md:text-base">
                      <Icon name="Github" size={18} className="text-eza-text" />
                      GitHub Repository
                    </h3>
                    <p className="text-xs md:text-sm text-eza-text-secondary mb-3 md:mb-4">
                      Hazır kod örnekleri, snippet'ler ve entegrasyon template'leri için GitHub repository'mizi ziyaret
                      edin.
                    </p>
                    <a
                      href="https://github.com/ezacore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-eza-blue font-semibold hover:underline text-xs md:text-sm"
                    >
                      Repository'yi Görüntüle
                      <Icon name="ExternalLink" size={14} />
                    </a>
                  </div>
                  <div className="bg-eza-gray/30 rounded-xl p-4 md:p-6">
                    <h3 className="font-semibold text-eza-text mb-2 md:mb-3 flex items-center gap-2 text-sm md:text-base">
                      <Icon name="BookOpen" size={18} className="text-eza-text" />
                      API Referansı
                    </h3>
                    <p className="text-xs md:text-sm text-eza-text-secondary mb-3 md:mb-4">
                      Tüm endpoint'ler, parametreler ve response formatları için detaylı API dokümantasyonu.
                    </p>
                    <Link
                      href="/docs/api"
                      className="inline-flex items-center gap-2 text-eza-blue font-semibold hover:underline text-xs md:text-sm"
                    >
                      API Dokümantasyonu
                      <Icon name="ArrowRight" size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={500}>
            <div className="bg-gradient-to-r from-eza-blue to-blue-600 rounded-2xl p-6 md:p-12 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Sorularınız mı var?</h2>
              <p className="text-sm md:text-xl mb-4 md:mb-8 text-blue-100">
                Entegrasyon sürecinde yardıma mı ihtiyacınız var? İletişime geçin.
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <Link
                  href="/panels/platform"
                  className="bg-white text-eza-blue px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm md:text-base"
                >
                  Platform Panel'e Git
                </Link>
                <Link
                  href="/contact"
                  className="bg-blue-700 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border border-blue-500 text-sm md:text-base"
                >
                  İletişime Geç
                </Link>
              </div>
              <p className="text-xs md:text-sm text-blue-100 mt-4 md:mt-6 max-w-2xl mx-auto">
                Entegrasyon, yetkilendirme ve etik izleme süreçleri Platform Panel üzerinden yürütülür.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}

