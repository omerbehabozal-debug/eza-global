import React from "react";
import FadeIn from "./FadeIn";
import Icon from "./Icon";

const features = [
  {
    icon: "Target",
    title: "Gözlem",
    description: "Kural koymaz, karar vermez. Etik etkileri ölçer ve şeffaf hale getirir.",
  },
  {
    icon: "Shield",
    title: "Etik Değerlendirme",
    description: "Bağlam, niyet ve olası etkiler üzerinden değerlendirme yapar ve skorlar üretir.",
  },
  {
    icon: "Link",
    title: "Köprü",
    description: "İnsan ile teknoloji arasındaki etik farkındalığı görünür hale getirir.",
  },
];

interface VisionSectionProps {
  title?: string;
  subtitle?: string;
  description?: React.ReactNode;
}

export default function VisionSection({ 
  title = "EZA Nedir?", 
  subtitle = "Teknolojinin etik gelişimi için sistem",
  description 
}: VisionSectionProps = {}) {
  const defaultDescription = (
    <>
      <p className="text-sm md:text-xl text-eza-text-secondary max-w-2xl mx-auto leading-relaxed">
        EZA, üretilen içeriklerin ve karar süreçlerinin<br />
        etik, toplumsal ve regülasyonel etkilerini<br />
        sansürlemeden analiz eden<br />
        bir etik gözlem sistemidir.
      </p>
      <p className="text-sm md:text-xl text-eza-text-secondary max-w-2xl mx-auto leading-relaxed">
        Otomatik veya zorunlu müdahalede bulunmaz.
        <br />
        Ölçer, skorlar, açıklar ve görünür kılar.
        <br />
        Nihai karar her zaman kullanıcıya aittir.
      </p>
    </>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
      <FadeIn>
        <div className="text-center mb-4 md:mb-16">
          <div className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-eza-blue/10 text-eza-blue text-xs font-medium rounded-full border border-eza-blue/20 mb-2 md:mb-4">
            Etik Zeka Altyapısı
          </div>
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-eza-text mb-2 md:mb-4">
            {title}
          </h2>
          {description ? (
            description
          ) : title === "EZA Vizyonu" ? (
            <p className="text-sm md:text-xl text-eza-text-secondary max-w-2xl mx-auto">
              {subtitle}
            </p>
          ) : (
            <div className="text-sm md:text-xl text-eza-text-secondary max-w-2xl mx-auto leading-relaxed space-y-2 md:space-y-4">
              {defaultDescription}
            </div>
          )}
        </div>
      </FadeIn>

      {title === "EZA Vizyonu" ? (
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-8 md:mb-16">
        <FadeIn>
          <div className="space-y-6 text-lg text-eza-text-secondary leading-relaxed">
            <p>
              Teknoloji hızla gelişiyor. Her gün yeni AI modelleri, yeni platformlar, 
              yeni sistemler ortaya çıkıyor. Ancak bu hızlı gelişimin yanında, 
              teknolojinin insanlığa karşı nasıl davranması gerektiği konusunda bir boşluk var.
            </p>
            <p>
              EZA, bu boşluğu doldurmak için kuruldu. EZA, teknolojinin hızlı gelişimine 
              karşı etik bir platform olarak çalışır. Teknolojinin insanlığa karşı etik 
              davranmasını sağlamak için yönlendirici bir felsefe sunar.
            </p>
            <p>
              EZA, kural koyucu değil, yönlendiricidir. Yasaklamaz, ceza vermez; sadece daha iyi 
              bir davranış önerir. Teknoloji ile insan arasında etik bir köprü kurar ve 
              teknolojinin daha sorumlu bir şekilde kullanılmasını sağlar.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="grid grid-cols-1 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center">
                    <Icon name={feature.icon} className="text-eza-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-eza-text text-lg mb-1">{feature.title}</h3>
                    <p className="text-eza-text-secondary text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
      ) : (
      <div className="flex justify-center mb-4 md:mb-16">
        <FadeIn delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 max-w-4xl w-full">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-lg p-3 md:p-6 border border-gray-200"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center mb-1.5 md:mb-3">
                    <Icon name={feature.icon} className="text-eza-blue" size={16} />
                  </div>
                  <h3 className="font-semibold text-eza-text text-sm md:text-lg mb-0.5 md:mb-1">{feature.title}</h3>
                  <p className="text-eza-text-secondary text-xs md:text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
      )}
    </div>
  );
}
