"use client";

import { useEffect } from "react";
import Section from "@/app/components/Section";
import Link from "next/link";
import Icon from "@/app/components/Icon";
import FadeIn from "@/app/components/FadeIn";

export default function ProxyPage() {
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
              Proxy
            </h1>
            <p className="text-sm md:text-xl text-eza-text-secondary">
              Kurumsal sistemler için API tabanlı derin etik analiz çözümü.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Use-Case Band */}
      <section className="bg-eza-gray/50 py-6 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-eza-text text-center mb-4 md:mb-12">
              Nerelerde kullanılır?
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
            {[
              {
                icon: "Building2",
                title: "Finans & Bankacılık",
                description: "AI çıktılarının regülasyonel, etik ve itibar risklerini sistem genelinde izlemek için."
              },
              {
                icon: "Newspaper",
                title: "Medya & İçerik Platformları",
                description: "Yayın öncesi ve sonrası içeriklerin etik etkilerini görünür kılmak için."
              },
              {
                icon: "Cpu",
                title: "Kurumsal AI Ürünleri",
                description: "API tabanlı merkezi etik gözlem ve raporlama katmanı olarak."
              },
              {
                icon: "Scale",
                title: "Regülasyon & Denetim",
                description: "Sistem çapında etik etki takibi, şeffaflık ve raporlama için."
              }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-200/50 hover:border-eza-blue/30 transition-colors">
                  <div className="flex flex-col items-start gap-2 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center">
                      <Icon name={item.icon} className="text-eza-blue" size={20} />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-eza-text mb-1 md:mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-eza-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Section className="bg-white !min-h-0 !pt-6 md:!pt-16 lg:!pt-20 !pb-6 md:!pb-24 lg:!pb-40">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <FadeIn>
              <div className="space-y-3 md:space-y-6 text-sm md:text-lg text-eza-text-secondary leading-relaxed">
                <p>
                  EZA Proxy, kurumsal yapılar için tasarlanmış API tabanlı bir etik gözlem altyapısıdır. 
                  ChatGPT, Claude, Gemini, Llama gibi büyük dil modellerinin çıktılarını gerçek zamanlı 
                  olarak analiz eder, etik etkileri skorlar ve görünür kılar.
                </p>
                <p>
                  Proxy otomatik karar vermez, yasaklamaz veya zorunlu yönlendirme yapmaz. Sadece 
                  gözlemler, analiz eder ve kurumsal etik farkındalık sağlar. Kullanıcı talep ettiğinde, 
                  etik çerçeve içinde bilgilendirici öneriler sunabilir; ancak nihai karar her zaman kullanıcıya aittir.
                </p>
                <p>
                  Merkezi bir noktadan tüm çıktıları değerlendirerek, sistem genelinde etik 
                  standartları görünür kılar ve denetlenebilirlik sunar.
                </p>
              </div>
            </FadeIn>
            
            {/* Premium Image */}
            <FadeIn delay={200}>
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border border-gray-200/50">
                <div className="absolute inset-0 bg-gradient-to-br from-eza-blue/5 via-transparent to-purple-500/5 pointer-events-none z-10" />
                <img 
                  src="/videos/proxy.png" 
                  alt="EZA Proxy - Kurumsal Etik Analiz Çözümü"
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
                href="https://proxy.ezacore.ai/proxy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-4 bg-eza-blue text-white rounded-lg text-sm md:text-base font-semibold hover:bg-[#0077ed] transition-all shadow-lg hover:shadow-xl"
              >
                Proxy Platform'a Git
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

