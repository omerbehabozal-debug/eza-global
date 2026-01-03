"use client";

import Icon from "./Icon";
import HeroVisual from "./HeroVisual";

interface HeroProps {
  videoSrc?: string; // Video dosya yolu (örn: "/videos/hero-video.mp4") veya URL
  videoType?: string; // Video formatı (örn: "video/mp4")
  showVideo?: boolean; // Video gösterilsin mi?
}

export default function Hero({ 
  videoSrc = "/videos/hero-video.mp4", 
  videoType = "video/mp4",
  showVideo = false 
}: HeroProps) {
  return (
    <div className="relative bg-white min-h-screen flex items-center overflow-hidden">
      {/* Premium background visual */}
      <HeroVisual videoSrc={videoSrc} videoType={videoType} showVideo={showVideo} />
      
      {/* Content layer */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-6 md:py-20 lg:py-24 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="hero-title text-xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-eza-text mb-2 md:mb-6 leading-tight">
            Yapay zekâ çıktıları için
            <br />
            etik gözlem katmanı
          </h1>
          
          <p className="hero-description text-xs sm:text-sm md:text-xl lg:text-2xl text-eza-text-secondary mb-4 md:mb-12 leading-relaxed max-w-2xl mx-auto">
            EZA, yapay zekâ çıktılarının
            <br />
            etik, toplumsal ve regülasyonel etkilerini
            <br />
            müdahale etmeden görünür kılan
            <br />
            bağımsız bir gözlem altyapısıdır.
          </p>
          
          <div className="hero-buttons flex justify-center items-center">
            <div className="inline-flex items-center gap-1.5 px-5 sm:px-8 py-2 sm:py-3 bg-eza-blue text-white rounded-lg text-xs sm:text-base font-medium shadow-sm">
              Keşfet
              <div className="animate-bounce-arrow inline-block">
                <Icon name="ArrowDown" size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
