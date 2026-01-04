import { Metadata } from "next";
import Section from "@/app/components/Section";
import CoreHero from "@/app/components/core/CoreHero";
import Architecture from "@/app/components/core/Architecture";
import ModuleGrid from "@/app/components/core/ModuleGrid";
import Integration from "@/app/components/core/Integration";
import CTASection from "@/app/components/core/CTASection";
import FadeIn from "@/app/components/FadeIn";

export const metadata: Metadata = {
  title: "EZA-Core Platform",
  description: "EZA'nın etik analiz motoru. Standalone, Proxy ve tüm kurumsal panellerin üzerinde çalıştığı ana platform.",
};

export default function EZACorePlatformPage() {
  return (
    <>
      {/* Section A: Hero */}
      <div className="bg-white">
        <CoreHero />
      </div>

      {/* Section B: What is EZA-Core */}
      <Section className="bg-eza-gray !pt-6 md:!pt-16 !pb-6 md:!pb-24 !min-h-0 overflow-x-hidden">
        <FadeIn>
          <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 w-full">
            <div className="text-center mb-6 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-eza-text mb-3 md:mb-4">
                EZA-Core Nedir?
              </h2>
            </div>
            <div className="space-y-3 md:space-y-6 text-sm md:text-lg text-eza-text-secondary leading-relaxed">
              <p className="break-words">
                <strong className="text-eza-text">EZA-Core, EZA'nın teknolojik motorudur.</strong> 
                Tüm Standalone, Proxy, Proxy-Lite modülleri ve Regulator, Corporate, Developer 
                panelleri EZA-Core platformu üzerinde çalışır.
              </p>
              <p className="break-words">
                Modüller ve paneller, EZA-Core'un güçlü etik analiz, risk değerlendirme ve 
                yönlendirme yeteneklerini kullanır. Her modül, EZA-Core'un çekirdek işlevlerini 
                farklı şekillerde kullanarak kendi özel görevini yerine getirir.
              </p>
              <p className="break-words">
                Kurumlar ve geliştiriciler, tüm entegrasyonlarını EZA-Core API üzerinden yapar. 
                Bu merkezi yaklaşım, tutarlı etik standartlar ve güvenilir performans sağlar.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Section C: High-Level Architecture */}
      <Section className="bg-white !pt-6 md:!pt-16 !pb-6 md:!pb-24 !min-h-0 overflow-x-hidden">
        <Architecture />
      </Section>

      {/* Section D: How Modules Connect */}
      <Section className="bg-eza-gray !pt-6 md:!pt-16 !pb-6 md:!pb-24 !min-h-0 overflow-x-hidden">
        <ModuleGrid />
      </Section>

      {/* Section E: Developer & Enterprise Integration */}
      <Section className="bg-white !pt-6 md:!pt-16 !pb-6 md:!pb-24 !min-h-0 overflow-x-hidden">
        <Integration />
      </Section>

      {/* Section F: CTA Footer */}
      <Section className="bg-eza-gray !pt-6 md:!pt-16 !pb-6 md:!pb-24 !min-h-0 overflow-x-hidden">
        <CTASection />
      </Section>
    </>
  );
}

