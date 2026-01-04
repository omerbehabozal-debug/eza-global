"use client";

import FadeIn from "../FadeIn";
import Icon from "../Icon";

const modules = [
  {
    title: "Standalone",
    description: "Bağımsız çalışan etik değerlendirme modülü. EZA-Core platformu üzerinde çalışır ve bağımsız analiz yapar.",
    icon: "Shield",
  },
  {
    title: "Proxy",
    description: "API proxy katmanı olarak çalışan modül. Tüm istekleri EZA-Core üzerinden yönlendirir ve etik kontrol sağlar.",
    icon: "Globe",
  },
  {
    title: "Proxy-Lite",
    description: "Hafif versiyon proxy modülü. EZA-Core'un hafif kaynak kullanımı ile etik kontrol sağlar.",
    icon: "Zap",
  },
  {
    title: "Global Ölçekli Paneller",
    description: "Çok uluslu kurumlar ve global operasyonlar için etik izleme ve raporlama panelleri. EZA-Core'un küresel regülasyon uyum özelliklerini kullanır.",
    icon: "Globe",
  },
  {
    title: "Ulusal Regülasyon Panelleri",
    description: "Ulusal düzenleyici kurumlar için özel paneller. EZA-Core platformu üzerinde sektöre özel etik izleme ve uyumluluk sağlar.",
    icon: "Building2",
  },
  {
    title: "Platform Panel",
    description: "Tüm EZA ürünlerini ve sistemlerini tek merkezden yöneten kurumsal gözlem paneli. EZA-Core'un merkezi yönetim özelliklerini kullanır.",
    icon: "LayoutGrid",
  },
];

export default function ModuleGrid() {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 w-full" id="modules">
      <FadeIn>
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-eza-text mb-3 md:mb-4">
            Modüller EZA-Core Üzerinde Çalışır
          </h2>
          <p className="text-sm md:text-xl text-eza-text-secondary max-w-2xl mx-auto break-words">
            Tüm EZA modülleri ve panelleri, EZA-Core platformunun gücünü kullanır.
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {modules.map((module, index) => (
          <FadeIn key={module.title} delay={index * 50}>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200/50 h-full">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center">
                  <Icon name={module.icon} className="text-eza-blue" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold text-eza-text mb-2 break-words">
                    {module.title}
                  </h3>
                  <p className="text-xs md:text-sm text-eza-text-secondary leading-relaxed break-words">
                    {module.description}
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

