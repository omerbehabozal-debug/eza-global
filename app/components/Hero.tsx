"use client";

import Link from "next/link";
import Icon from "./Icon";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  const handleScrollToEcosystem = () => {
    const element = document.querySelector("#ecosystem");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-white min-h-screen flex items-center overflow-hidden">
      {/* Premium background visual */}
      <HeroVisual />
      
      {/* Content layer */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-24 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className="hero-badge mb-4">
            <span className="inline-block px-4 py-1.5 bg-eza-blue/10 text-eza-blue text-sm font-medium rounded-full border border-eza-blue/20">
              Etik Zeka Altyapısı
            </span>
          </div>
          <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-semibold text-eza-text mb-6 leading-tight">
            Teknolojinin insanlığa karşı{" "}
            <span className="text-eza-blue">etik davranmasını</span>{" "}
            sağlayan rehber.
          </h1>
          
          <p className="hero-description text-xl md:text-2xl text-eza-text-secondary mb-12 leading-relaxed max-w-2xl mx-auto">
            EZA, insan ve teknoloji arasında etik bir köprü kurar. Yasaklamaz, ceza vermez; sadece daha iyi bir davranış önerir.
          </p>
          
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleScrollToEcosystem}
              className="inline-flex items-center gap-2 px-8 py-3 bg-eza-blue text-white rounded-lg text-base font-medium hover:bg-[#0077ed] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
            >
              Ekosistemi Keşfet
              <Icon name="ArrowDown" size={18} />
            </button>
            <Link
              href="https://ezacore.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent text-eza-blue border border-eza-blue rounded-lg text-base font-medium hover:bg-eza-blue/5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:border-[#0077ed]"
            >
              EZA Core Platformu
              <Icon name="ExternalLink" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
