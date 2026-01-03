"use client";

import { useEffect } from "react";
import Section from "@/app/components/Section";
import Link from "next/link";
import Icon from "@/app/components/Icon";
import FadeIn from "@/app/components/FadeIn";

export default function ProxyLitePage() {
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

  return (
    <>
      <div className="bg-gradient-to-br from-slate-200 via-blue-100/80 to-slate-100 py-8 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 bg-eza-blue/10 text-eza-blue text-xs sm:text-sm font-semibold rounded-full border border-eza-blue/20 mb-3 md:mb-4">
              EZA Ürünler
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-eza-text mb-3 md:mb-6">
              Proxy-Lite
            </h1>
            <p className="text-sm md:text-xl text-eza-text-secondary">
              Metin ve içerikler için hızlı ve sade etik analiz aracı.
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
                  EZA Proxy-Lite, bireysel kullanıcılar ve içerik üreticileri için tasarlanmış hafif 
                  bir etik analiz aracıdır. Yapay zekâdan üretilen içerikler başta olmak üzere makale, 
                  reklam, influencer ve sosyal medya metinlerini hızlıca analiz eder, etik etkileri 
                  skorlar ve görünür kılar.
                </p>
                <p>
                  Proxy-Lite otomatik karar vermez, yasaklamaz veya zorunlu yönlendirme yapmaz. Sadece 
                  gözlemler, analiz eder ve etik farkındalık sağlar. Kullanıcı talep ettiğinde, etik 
                  çerçeve içinde bilgilendirici öneriler sunabilir; ancak nihai karar her zaman kullanıcıya aittir.
                </p>
                <p>
                  Uygulama veya kurulum gerektirmez. Kaynağı fark etmez; önemli olan metindir.
                </p>
              </div>
            </FadeIn>
            
            {/* Premium Image */}
            <FadeIn delay={200}>
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border border-gray-200/50">
                <div className="absolute inset-0 bg-gradient-to-br from-eza-blue/5 via-transparent to-purple-500/5 pointer-events-none z-10" />
                <img 
                  src="/videos/proxy lite.png" 
                  alt="EZA Proxy-Lite - Hızlı Etik Analiz Aracı"
                  className="w-full h-auto object-cover relative z-0"
                  style={{
                    maxHeight: '300px',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </FadeIn>
          </div>
          
          {/* Butonlar - Yazının bitiminde */}
          <FadeIn delay={400}>
            <div className="mt-4 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href="https://proxy-lite.ezacore.ai/proxy-lite"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-4 bg-eza-blue text-white rounded-lg text-sm md:text-base font-semibold hover:bg-[#0077ed] transition-all shadow-lg hover:shadow-xl"
              >
                Proxy-Lite Platform'a Git
                <Icon name="ExternalLink" size={16} />
              </a>
              <Link
                href="/#ecosystem"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-4 bg-white text-eza-blue border border-eza-blue rounded-lg text-sm md:text-base font-semibold hover:bg-eza-blue/5 transition-all"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    sessionStorage.setItem('homeScrollSection', 'ecosystem');
                  }
                }}
              >
                EZA Ekosistemine Dön
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}

