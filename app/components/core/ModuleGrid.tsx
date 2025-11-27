"use client";

import Link from "next/link";
import FadeIn from "../FadeIn";
import Icon from "../Icon";

const modules = [
  {
    title: "Standalone",
    description: "Bağımsız çalışan etik değerlendirme modülü. EZA-Core platformu üzerinde çalışır ve bağımsız analiz yapar.",
    href: "/products/standalone",
    icon: "Shield",
  },
  {
    title: "Proxy",
    description: "API proxy katmanı olarak çalışan modül. Tüm istekleri EZA-Core üzerinden yönlendirir ve etik kontrol sağlar.",
    href: "/products/proxy",
    icon: "Globe",
  },
  {
    title: "Proxy-Lite",
    description: "Hafif versiyon proxy modülü. EZA-Core'un hafif kaynak kullanımı ile etik kontrol sağlar.",
    href: "/products/proxy-lite",
    icon: "Zap",
  },
  {
    title: "Regulator Panel",
    description: "Düzenleyici kurumlar için özel panel. EZA-Core'un sektör genelinde etik izleme ve raporlama özelliklerini kullanır.",
    href: "/panels/regulator",
    icon: "Building2",
  },
  {
    title: "Corporate Panel",
    description: "Kurumsal yönetim paneli. EZA-Core platformu üzerinde organizasyon içi etik uyumluluk ve izleme sağlar.",
    href: "/panels/corporate",
    icon: "Briefcase",
  },
  {
    title: "Developer Console",
    description: "Geliştiriciler için API yönetim konsolu. EZA-Core API'lerini yönetir, entegrasyonları test eder ve izler.",
    href: "/panels/developer",
    icon: "Code",
  },
];

export default function ModuleGrid() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" id="modules">
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-eza-text mb-4">
            Modüller EZA-Core Üzerinde Çalışır
          </h2>
          <p className="text-xl text-eza-text-secondary max-w-2xl mx-auto">
            Tüm EZA modülleri ve panelleri, EZA-Core platformunun gücünü kullanır.
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <FadeIn key={module.title} delay={index * 50}>
            <Link
              href={module.href}
              className="block bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:border-eza-blue/30 hover:shadow-lg transition-all duration-300 h-full group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center group-hover:bg-eza-blue/20 transition-colors">
                  <Icon name={module.icon} className="text-eza-blue" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-eza-text mb-2 group-hover:text-eza-blue transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-sm text-eza-text-secondary leading-relaxed">
                    {module.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center text-eza-blue font-medium text-sm mt-4">
                Daha fazla bilgi
                <Icon name="ArrowRight" size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

