"use client";

import Icon from "../Icon";

export default function CoreHero() {

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Premium animated background */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 120% 100% at 50% 0%, rgba(0, 113, 227, 0.15) 0%, transparent 70%),
                radial-gradient(ellipse 100% 80% at 50% 100%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)
              `,
            }}
          />
        </div>

        {/* Animated orbs */}
        <div className="absolute inset-0">
          <div
            className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(0, 113, 227, 0.3) 0%, transparent 70%)',
              top: '10%',
              left: '20%',
              animation: 'heroOrbFloat 20s ease-in-out infinite'
            }}
          />
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-15"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)',
              bottom: '15%',
              right: '15%',
              animation: 'heroOrbFloat 25s ease-in-out infinite 5s'
            }}
          />
        </div>

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-eza-blue/10 text-eza-blue text-sm font-semibold rounded-full border border-eza-blue/20 mb-6">
          <Icon name="Cpu" size={16} />
          Etik Zeka Motoru
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-eza-text mb-6 leading-tight">
          EZA-Core —{" "}
          <span className="text-eza-blue">Etik Zeka Motoru</span>
        </h1>

        <p className="text-xl md:text-2xl text-eza-text-secondary mb-12 leading-relaxed max-w-3xl mx-auto">
          Tüm Standalone, Proxy ve kurumsal panelleri çalıştıran merkezi etik zekâ platformu.
          <br />
          EZA'nın etik değerlendirme, risk analizi ve yönlendirme süreçlerinin çekirdeğidir.
        </p>

        <div className="flex justify-center items-center">
          <a
            href="https://ezacore.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-eza-blue text-white rounded-lg text-base font-medium hover:bg-[#0077ed] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
          >
            EZA Core API
            <Icon name="ExternalLink" size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}

