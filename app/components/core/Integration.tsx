"use client";

import Link from "next/link";
import FadeIn from "../FadeIn";
import Icon from "../Icon";

const integrationPoints = [
  {
    title: "API Tabanlı Entegrasyon",
    description: "REST API üzerinden EZA-Core'a bağlanın. Tüm modüller ve paneller API tabanlı entegrasyon kullanır.",
    icon: "Plug",
  },
  {
    title: "Webhook İşleme",
    description: "Gerçek zamanlı bildirimler ve olay tabanlı işleme. Sistemleriniz EZA-Core'dan anlık geri bildirim alır.",
    icon: "Bell",
  },
  {
    title: "Çok Tenantlı Mimari",
    description: "Birden fazla kurum veya organizasyon için izole ortamlar. Her tenant bağımsız veri ve ayarlara sahiptir.",
    icon: "Layers",
  },
  {
    title: "Kurumsal Senaryolar",
    description: "Üniversiteler, bankalar, hastaneler ve devlet kurumları için özelleştirilmiş entegrasyon seçenekleri.",
    icon: "Building",
  },
];

export default function Integration() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-eza-text mb-4">
            Geliştirici ve Kurumsal Entegrasyon
          </h2>
          <p className="text-xl text-eza-text-secondary max-w-2xl mx-auto">
            EZA-Core, esnek entegrasyon seçenekleri ile tüm sistemlerinize uyum sağlar.
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {integrationPoints.map((point, index) => (
          <FadeIn key={point.title} delay={index * 100}>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:border-eza-blue/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center">
                  <Icon name={point.icon} className="text-eza-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-eza-text mb-2">
                    {point.title}
                  </h3>
                  <p className="text-eza-text-secondary leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={400}>
        <div className="text-center">
          <Link
            href="/panels/developer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-eza-blue text-white rounded-lg font-semibold hover:bg-[#0077ed] transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            Geliştirici Konsoluna Git
            <Icon name="ArrowRight" size={18} />
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}

