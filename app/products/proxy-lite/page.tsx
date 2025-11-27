import { generatePageMetadata } from "@/lib/seo";
import Section from "@/app/components/Section";
import Link from "next/link";
import Icon from "@/app/components/Icon";

export const metadata = generatePageMetadata(
  "Proxy-Lite",
  "Hafif versiyon proxy çözümü. Düşük kaynak kullanımı ile etik kontrol."
);

export default function ProxyLitePage() {
  return (
    <>
      <div className="bg-gradient-to-br from-eza-gray via-white to-eza-gray py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-eza-dark mb-6">
            Proxy-Lite
          </h1>
          <p className="text-xl text-gray-700">
            Hafif versiyon proxy çözümü. Düşük kaynak kullanımı ile etik kontrol.
          </p>
        </div>
      </div>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            EZA Proxy-Lite, hafif versiyon bir proxy çözümüdür. Düşük kaynak kullanımı ile etik 
            kontrol sağlar ve küçük ile orta ölçekli uygulamalar için idealdir. Bu yaklaşım, 
            kaynak kısıtı olan sistemlerde de etik kontrol imkanı sunar.
          </p>
          <p>
            Proxy-Lite, temel etik değerlendirmeleri yapar ve yönlendirmeler sunar. Tam özellikli 
            Proxy versiyonunun tüm özelliklerini içermese de, temel etik kontrol ihtiyaçlarını 
            karşılar. Düşük kaynak kullanımı sayesinde, küçük sistemlerde de sorunsuz çalışır.
          </p>
          <p>
            EZA Proxy-Lite, özellikle kaynak kısıtı olan veya küçük ölçekli sistemler için 
            idealdir. Temel etik kontrol ihtiyaçlarını karşılayarak, her sistemin etik 
            standartlara uygun çalışmasını sağlar.
          </p>
        </div>
      </Section>

      <Section className="bg-eza-gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-eza-dark mb-6">Faydalar</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-eza-green text-2xl mr-3">✓</span>
              <span>Düşük kaynak kullanımı - hafif ve verimli</span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-green text-2xl mr-3">✓</span>
              <span>Küçük ve orta ölçekli uygulamalar için ideal</span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-green text-2xl mr-3">✓</span>
              <span>Temel etik kontrol ihtiyaçlarını karşılar</span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-green text-2xl mr-3">✓</span>
              <span>Kolay kurulum ve bakım</span>
            </li>
          </ul>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-eza-dark mb-6">EZA Nasıl Yardımcı Olur?</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-eza-blue text-xl mr-3">•</span>
              <span>Düşük kaynak kullanımı ile etik kontrol sağlar</span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-blue text-xl mr-3">•</span>
              <span>Temel etik değerlendirmeleri yapar ve yönlendirir</span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-blue text-xl mr-3">•</span>
              <span>Küçük sistemlerde de sorunsuz çalışır</span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-blue text-xl mr-3">•</span>
              <span>Kolay kurulum ile hızlı başlangıç sağlar</span>
            </li>
          </ul>
        </div>
      </Section>

      <Section className="bg-eza-gray">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://proxy-lite.ezacore.ai/proxy-lite"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-eza-blue text-white rounded-lg font-semibold hover:bg-[#0077ed] transition-all shadow-lg hover:shadow-xl"
            >
              Proxy-Lite Platform'a Git
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
      </Section>
    </>
  );
}

