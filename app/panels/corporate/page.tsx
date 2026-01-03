import { generatePageMetadata } from "@/lib/seo";
import Section from "@/app/components/Section";
import Link from "next/link";
import ScrollLink from "@/app/components/ScrollLink";
import Icon from "@/app/components/Icon";
import FadeIn from "@/app/components/FadeIn";

export const metadata = generatePageMetadata(
  "Corporate Panel",
  "Kurumsal yönetim paneli. Organizasyon içi etik uyumluluk ve izleme."
);

export default function CorporatePanelPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-200 via-blue-100/80 to-slate-100 py-8 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 bg-eza-blue/10 text-eza-blue text-xs sm:text-sm font-semibold rounded-full border border-eza-blue/20 mb-3 md:mb-4">
              <Icon name="Briefcase" size={14} />
              EZA Panels
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-eza-text mb-3 md:mb-6">
              Corporate Panel
            </h1>
            <p className="text-sm md:text-xl text-eza-text-secondary">
              Kurumsal yönetim paneli. Organizasyon içi etik uyumluluk ve izleme.
            </p>
          </FadeIn>
        </div>
      </div>

      <Section className="bg-white !min-h-0">
        <FadeIn delay={100}>
          <div className="max-w-4xl mx-auto space-y-3 md:space-y-6 text-sm md:text-lg text-eza-text-secondary leading-relaxed">
          <p>
            EZA Corporate Panel, kurumsal yönetim için özel olarak tasarlanmış bir yönetim 
            panelidir. Organizasyon içi etik uyumluluk, izleme ve sürekli iyileştirme araçları 
            sunar. Bu panel, kurumların kendi teknolojik sistemlerinin etik kullanımını 
            yönetmesini sağlar.
          </p>
          <p>
            Corporate Panel, organizasyon içindeki etik davranışları izler, raporlar ve analiz 
            eder. Kurumlar, bu panel aracılığıyla kendi sistemlerinin etik uyumluluğunu takip 
            edebilir, sorunlu alanları tespit edebilir ve sürekli iyileştirme sağlayabilir.
          </p>
          <p>
            EZA Corporate Panel, özellikle büyük kurumlar için idealdir. Organizasyon içi etik 
            standartları yöneterek, kurumun teknolojik sistemlerinin insanlara karşı etik 
            davranmasını sağlar.
          </p>
          </div>
        </FadeIn>
      </Section>

      <Section className="bg-eza-gray !min-h-0">
        <FadeIn delay={200}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-eza-text mb-4 md:mb-6">Faydalar</h2>
            <ul className="space-y-2 md:space-y-4 text-sm md:text-lg text-eza-text-secondary">
            <li className="flex items-start">
              <span className="text-eza-green text-xl md:text-2xl mr-2 md:mr-3">✓</span>
              <span>Organizasyon içi etik uyumluluk yönetimi</span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-green text-xl md:text-2xl mr-2 md:mr-3">✓</span>
              <span>Detaylı izleme ve raporlama araçları</span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-green text-xl md:text-2xl mr-2 md:mr-3">✓</span>
              <span>Sürekli iyileştirme ve optimizasyon</span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-green text-xl md:text-2xl mr-2 md:mr-3">✓</span>
              <span>Kurumsal yönetim için özel tasarım</span>
            </li>
          </ul>
          </div>
        </FadeIn>
      </Section>

      <Section className="bg-white !min-h-0">
        <FadeIn delay={300}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-eza-text mb-4 md:mb-6">EZA Nasıl Yardımcı Olur?</h2>
            <ul className="space-y-2 md:space-y-4 text-sm md:text-lg text-eza-text-secondary">
            <li className="flex items-start">
              <span className="text-eza-blue text-lg md:text-xl mr-2 md:mr-3">•</span>
              <span>Organizasyon içi etik davranışları izler ve raporlar</span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-blue text-lg md:text-xl mr-2 md:mr-3">•</span>
              <span>Etik uyumluluk durumunu takip eder ve analiz eder</span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-blue text-lg md:text-xl mr-2 md:mr-3">•</span>
              <span>Sürekli iyileştirme için öneriler sunar</span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-blue text-lg md:text-xl mr-2 md:mr-3">•</span>
              <span>Kurumların etik standartları yönetmesini sağlar</span>
            </li>
          </ul>
          </div>
        </FadeIn>
      </Section>

      <Section className="bg-eza-gray !min-h-0">
        <FadeIn delay={400}>
          <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="https://corporate.ezacore.ai/proxy/corporate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-4 bg-eza-blue text-white rounded-lg text-sm md:text-base font-semibold hover:bg-[#0077ed] transition-all shadow-lg hover:shadow-xl"
            >
              Corporate Panel'e Git
              <Icon name="ExternalLink" size={16} />
            </a>
            <ScrollLink
              href="/#ecosystem"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-4 bg-white text-eza-blue border border-eza-blue rounded-lg text-sm md:text-base font-semibold hover:bg-eza-blue/5 transition-all"
              section="ecosystem"
            >
              EZA Ekosistemine Dön
            </ScrollLink>
          </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

