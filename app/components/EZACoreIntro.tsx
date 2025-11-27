"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";
import Icon from "./Icon";

export default function EZACoreIntro() {
  return (
    <FadeIn>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="bg-gradient-to-br from-eza-blue/5 via-white to-eza-blue/5 rounded-2xl p-8 md:p-12 border border-eza-blue/10 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-eza-blue/10 text-eza-blue text-sm font-semibold rounded-full border border-eza-blue/20 mb-4">
                <Icon name="Cpu" size={16} />
                EZA-Core
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-eza-text mb-4">
                EZA-Core: EZA'nın Teknolojik Motoru
              </h3>
              <p className="text-lg text-eza-text-secondary leading-relaxed mb-4">
                EZA'nın etik felsefesi ve vizyonu, <strong className="text-eza-text">EZA-Core</strong> adlı teknolojik platform ile hayata geçer.
              </p>
              <p className="text-base text-eza-text-secondary leading-relaxed mb-8">
                EZA-Core, Standalone, Proxy, Proxy-Lite ve tüm panelleri çalıştıran çekirdek sistemdir. 
                Etik analiz, skorlama ve risk değerlendirme motorlarını içeren kapsamlı bir teknoloji platformu.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="https://platform.ezacore.ai/proxy/platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-eza-blue text-white rounded-lg font-medium hover:bg-[#0077ed] transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md"
                >
                  EZA-Core Platformu
                  <Icon name="ExternalLink" size={18} />
                </Link>
                <Link
                  href="https://ezacore.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white text-eza-blue border border-eza-blue rounded-lg font-medium hover:bg-eza-blue/5 transition-all duration-300 hover:scale-[1.02]"
                >
                  Ana Platform
                  <Icon name="ExternalLink" size={18} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                <Icon name="Cpu" className="text-eza-blue mb-2" size={24} />
                <p className="text-sm font-semibold text-eza-text mb-1">Çekirdek Motor</p>
                <p className="text-xs text-eza-text-secondary">Etik analiz pipeline</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                <Icon name="BarChart3" className="text-eza-blue mb-2" size={24} />
                <p className="text-sm font-semibold text-eza-text mb-1">EZA Score</p>
                <p className="text-xs text-eza-text-secondary">Skorlama sistemi</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                <Icon name="Shield" className="text-eza-blue mb-2" size={24} />
                <p className="text-sm font-semibold text-eza-text mb-1">Risk Analizi</p>
                <p className="text-xs text-eza-text-secondary">Değerlendirme motoru</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                <Icon name="Code" className="text-eza-blue mb-2" size={24} />
                <p className="text-sm font-semibold text-eza-text mb-1">API Altyapısı</p>
                <p className="text-xs text-eza-text-secondary">Geliştirici araçları</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

