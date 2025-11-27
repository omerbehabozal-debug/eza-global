import { generatePageMetadata } from "@/lib/seo";
import Section from "@/app/components/Section";
import Link from "next/link";
import Icon from "@/app/components/Icon";
import FadeIn from "@/app/components/FadeIn";

export const metadata = generatePageMetadata(
  "Proxy",
  "API proxy katmanı olarak çalışan etik kontrol sistemi. Tüm istekleri yönlendirir."
);

export default function ProxyPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-eza-gray via-white to-eza-gray py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-eza-blue/10 text-eza-blue text-sm font-semibold rounded-full border border-eza-blue/20 mb-4">
              <Icon name="Globe" size={16} />
              EZA-Core Products
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-eza-text mb-6">
              Proxy
            </h1>
            <p className="text-xl text-eza-text-secondary">
              API proxy katmanı olarak çalışan etik kontrol sistemi. Tüm istekleri yönlendirir.
            </p>
          </FadeIn>
        </div>
      </div>

      <Section className="bg-white">
        <FadeIn delay={100}>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-eza-text-secondary leading-relaxed">
          <p>
            EZA Proxy, API proxy katmanı olarak çalışan bir etik kontrol sistemidir. Tüm API 
            isteklerini yönlendirir, zararlı içerikleri tespit eder ve daha iyi alternatifler 
            önerir. Bu yaklaşım, sisteminizin tüm trafiğini etik açıdan kontrol etmenizi sağlar.
          </p>
          <p>
            Proxy katmanı, istekleri analiz eder, etik değerlendirmeler yapar ve yönlendirir. 
            İçeriği engellemez veya yasaklamaz; bunun yerine daha iyi alternatifler önerir ve 
            sisteminizin daha etik davranmasını sağlar.
          </p>
          <p>
            EZA Proxy, özellikle API tabanlı sistemler için idealdir. Tüm trafiği merkezi bir 
            noktadan kontrol ederek, sistem genelinde etik standartları sağlar. Bu sayede 
            organizasyonunuzun tüm teknolojik sistemleri etik açıdan yönlendirilir.
          </p>
          </div>
        </FadeIn>
      </Section>

      <Section className="bg-eza-gray">
        <FadeIn delay={200}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-eza-text mb-6">Faydalar</h2>
            <ul className="space-y-4 text-lg text-eza-text-secondary">
            <li className="flex items-start">
              <span className="text-eza-green text-2xl mr-3">✓</span>
              <span>Merkezi etik kontrol - tüm trafiği yönlendirir</span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-green text-2xl mr-3">✓</span>
              <span>API tabanlı sistemler için ideal</span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-green text-2xl mr-3">✓</span>
              <span>Gerçek zamanlı etik değerlendirme</span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-green text-2xl mr-3">✓</span>
              <span>Sistem genelinde etik standartlar</span>
            </li>
          </ul>
          </div>
        </FadeIn>
      </Section>

      <Section className="bg-white">
        <FadeIn delay={300}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-eza-text mb-6">EZA Nasıl Yardımcı Olur?</h2>
            <ul className="space-y-4 text-lg text-eza-text-secondary">
            <li className="flex items-start">
              <span className="text-eza-blue text-xl mr-3">•</span>
              <span>Tüm API isteklerini yönlendirir ve etik kontrol yapar</span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-blue text-xl mr-3">•</span>
              <span>Zararlı içerikleri tespit eder ve daha iyi alternatifler önerir</span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-blue text-xl mr-3">•</span>
              <span>Merkezi bir noktadan sistem genelinde etik standartlar sağlar</span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-blue text-xl mr-3">•</span>
              <span>Gerçek zamanlı etik değerlendirme ve yönlendirme sunar</span>
            </li>
          </ul>
          </div>
        </FadeIn>
      </Section>

      <Section className="bg-eza-gray">
        <FadeIn delay={400}>
          <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://proxy.ezacore.ai/proxy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-eza-blue text-white rounded-lg font-semibold hover:bg-[#0077ed] transition-all shadow-lg hover:shadow-xl"
            >
              Proxy Platform'a Git
              <Icon name="ExternalLink" size={18} />
            </a>
            <Link
              href="/#ecosystem"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-eza-blue border border-eza-blue rounded-lg font-semibold hover:bg-eza-blue/5 transition-all"
            >
              EZA Ekosistemine Dön
            </Link>
          </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

