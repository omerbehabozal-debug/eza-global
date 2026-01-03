"use client";

import { useEffect } from "react";
import Section from "@/app/components/Section";
import Link from "next/link";
import Icon from "@/app/components/Icon";
import FadeIn from "@/app/components/FadeIn";

export default function GlobalOversightPage() {
  useEffect(() => {
    // Sadece doğrudan navigasyonda (link tıklama) scroll'u en üste al
    // Geri dönüşlerde tarayıcının scroll restoration'ına izin ver
    if (typeof window !== 'undefined') {
      const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const isDirectNavigation = !navEntry || navEntry.type === 'navigate' || navEntry.type === 'reload';
      
      if (isDirectNavigation) {
        // Sadece yeni sayfa yüklemesinde scroll'u en üste al
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    }
  }, []);

  const frameworks = [
    {
      title: "European Union AI Act",
      subtitle: "Risk Bazlı Yapay Zekâ Yönetişimi",
    },
    {
      title: "OECD Artificial Intelligence Principles",
      subtitle: "",
    },
    {
      title: "UNESCO AI Ethics Framework",
      subtitle: "",
    },
    {
      title: "NIST AI Risk Management Framework",
      subtitle: "",
    },
    {
      title: "ISO/IEC Yapay Zekâ Risk ve Güvenlik Standartları",
      subtitle: "",
    },
    {
      title: "GDPR ve veri koruma ilkeleri",
      subtitle: "",
    },
    {
      title: "Şeffaflık, hesap verebilirlik ve denetlenebilirlik prensipleri",
      subtitle: "",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-br from-slate-200 via-blue-100/80 to-slate-100 py-8 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 bg-eza-blue/10 text-eza-blue text-xs sm:text-sm font-semibold rounded-full border border-eza-blue/20 mb-3 md:mb-4">
              EZA Paneller
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-eza-text mb-3 md:mb-6">
              Global Ölçekli Paneller
            </h1>
            <p className="text-sm md:text-xl text-eza-text-secondary">
              Küresel yapay zekâ regülasyonları ve etik çerçevelerle uyumlu merkezi gözlem panelleri.
            </p>
          </FadeIn>
        </div>
      </div>

      <Section className="bg-white !min-h-0 !pt-6 md:!pt-16 lg:!pt-20 !pb-6 md:!pb-24 lg:!pb-40">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <FadeIn>
              <div className="space-y-3 md:space-y-6 text-sm md:text-lg text-eza-text-secondary leading-relaxed">
                <p>
                  Global Ölçekli Paneller, EZA'nın yapay zekâ çıktılarının etik, toplumsal ve regülasyonel 
                  etkilerini uluslararası standartlar çerçevesinde izlemek ve görünür kılmak için tasarlanmış 
                  merkezi gözlem altyapısını temsil eder.
                </p>
                <p>
                  Bu paneller, farklı ülke ve bölgelerde geçerli olan etik ilkeler, regülasyonlar ve yönetişim 
                  modelleriyle uyumlu olacak şekilde çalışır.
                </p>
                <p>
                  EZA, bu kapsamda yapay zekâ sistemlerinin çıktılarının sansürlenmeden, müdahale edilmeden, 
                  şeffaf ve izlenebilir biçimde değerlendirilmesini esas alır.
                </p>
              </div>
            </FadeIn>
            
            {/* Premium Image */}
            <FadeIn delay={200}>
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border border-gray-200/50">
                <div className="absolute inset-0 bg-gradient-to-br from-eza-blue/5 via-transparent to-purple-500/5 pointer-events-none z-10" />
                <img 
                  src="/videos/global ölçekli paneller.png" 
                  alt="EZA Global Ölçekli Paneller - Küresel Regülasyon Uyumu"
                  className="w-full h-auto object-cover relative z-0"
                  style={{
                    maxHeight: '300px',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section className="bg-eza-gray !min-h-0">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={200}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-eza-text text-center mb-3 md:mb-4">
              Uyumlu Olduğu Küresel Çerçeveler
            </h2>
            <p className="text-center text-xs md:text-base text-eza-text-secondary mb-6 md:mb-12 max-w-2xl mx-auto">
              Bu çerçeveler, EZA'nın etik gözlem yaklaşımının temel referanslarını oluşturur.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {frameworks.map((framework, index) => (
              <FadeIn key={index} delay={300 + index * 50}>
                <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200/50">
                  <h3 className="text-base md:text-lg font-semibold text-eza-text mb-1">
                    {framework.title}
                  </h3>
                  {framework.subtitle && (
                    <p className="text-xs md:text-sm text-eza-text-secondary">
                      {framework.subtitle}
                    </p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <FadeIn delay={600}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-eza-gray rounded-xl p-8 border border-gray-200/50">
              <h2 className="text-2xl font-semibold text-eza-text mb-4">
                Küresel Regülasyon Görünümü
              </h2>
              <p className="text-eza-text-secondary mb-6 leading-relaxed">
                Global ölçekte regülasyonel uyum, risk dağılımları ve etik gözlem metriklerini incelemek için.
              </p>
              <a
                href="https://regulator.ezacore.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-eza-blue text-white rounded-lg font-semibold hover:bg-[#0077ed] transition-all shadow-lg hover:shadow-xl"
              >
                Regulator Panel
                <Icon name="ExternalLink" size={18} />
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
