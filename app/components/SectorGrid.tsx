import { sectors } from "@/lib/constants";
import FadeIn from "./FadeIn";
import Icon from "./Icon";

export default function SectorGrid() {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <FadeIn>
          <div className="text-center mb-4 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-eza-text mb-2 md:mb-4">
              Sektör Çözümleri
            </h2>
            <p className="text-sm md:text-xl text-eza-text-secondary max-w-2xl mx-auto">
              Her sektör için özelleştirilebilir etik çözümler
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {sectors.map((sector, index) => (
            <FadeIn key={sector.title} delay={index * 30}>
              <div className="block bg-white rounded-lg p-3 md:p-5 border border-gray-200 h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-2 md:mb-4">
                    <div className="inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-lg bg-eza-blue/10 mb-2 md:mb-3">
                      <Icon name={sector.icon} className="text-eza-blue" size={18} />
                    </div>
                    <h3 className="text-xs md:text-base font-semibold text-eza-text mb-1 md:mb-2">
                      {sector.title}
                    </h3>
                    <p className="text-xs text-eza-text-secondary leading-relaxed line-clamp-3">
                      {sector.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
