"use client";

import FadeIn from "../FadeIn";
import Icon from "../Icon";

const layers = [
  {
    title: "Input Analysis Layer",
    description: "Gelen içerikleri ve etkileşimleri analiz eder, yapısal özelliklerini ve bağlamını değerlendirir.",
    icon: "Inbox",
  },
  {
    title: "Ethical Risk Engine",
    description: "Etik risk faktörlerini değerlendirir ve potansiyel sorunları tespit eder.",
    icon: "Shield",
  },
  {
    title: "EZA Score Engine",
    description: "Etik davranış metriklerini hesaplar ve skorlama yapar.",
    icon: "BarChart3",
  },
  {
    title: "Advisor & Guidance Layer",
    description: "Yapıcı öneriler ve yönlendirmeler sunar, daha iyi alternatifler önerir.",
    icon: "Lightbulb",
  },
  {
    title: "Output Safety Layer",
    description: "Çıktıları son kontrol eder ve güvenli, etik sonuçlar sağlar.",
    icon: "CheckCircle",
  },
];

export default function Architecture() {
  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8 w-full">
      <FadeIn>
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-eza-text mb-3 md:mb-4">
            Yüksek Seviye Mimarisi
          </h2>
          <p className="text-sm md:text-xl text-eza-text-secondary max-w-2xl mx-auto break-words">
            EZA-Core, beş temel katmandan oluşan kapsamlı bir etik zekâ platformudur.
          </p>
        </div>
      </FadeIn>

      <div className="space-y-3 md:space-y-6">
        {layers.map((layer, index) => (
          <FadeIn key={layer.title} delay={index * 100}>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-8 border border-gray-200/50 hover:border-eza-blue/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-3 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-eza-blue/10 to-eza-blue/5 flex items-center justify-center border border-eza-blue/20">
                  <Icon name={layer.icon} className="text-eza-blue" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 flex-wrap">
                    <span className="text-xs md:text-sm font-semibold text-eza-blue bg-eza-blue/10 px-2 md:px-2.5 py-0.5 md:py-1 rounded-full">
                      {index + 1}
                    </span>
                    <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-eza-text break-words">
                      {layer.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-base lg:text-lg text-eza-text-secondary leading-relaxed break-words">
                    {layer.description}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

