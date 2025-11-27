"use client";

import Icon from "../Icon";

export default function CTASection() {
  const handleScrollToModules = () => {
    const element = document.querySelector("#modules");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
      <div className="bg-gradient-to-br from-eza-blue/10 via-eza-blue/5 to-purple-500/10 rounded-3xl p-12 md:p-16 border border-eza-blue/20 shadow-2xl relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 20% 50%, rgba(0, 113, 227, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-eza-text mb-6">
            EZA-Core ile Etik Zekanın Geleceğini İnşa Edin
          </h2>
          <p className="text-xl text-eza-text-secondary mb-10 max-w-2xl mx-auto">
            Tüm modüller ve paneller EZA-Core platformu üzerinde çalışır. 
            Etik zekâ altyapınızı bugün kurun.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleScrollToModules}
              className="inline-flex items-center gap-2 px-8 py-4 bg-eza-blue text-white rounded-lg text-base font-semibold hover:bg-[#0077ed] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              Modları İncele
              <Icon name="ArrowDown" size={18} />
            </button>
            <a
              href="https://ezacore.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/90 backdrop-blur-sm text-eza-blue border border-eza-blue rounded-lg text-base font-semibold hover:bg-eza-blue/5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
            >
              EZA-Core API
              <Icon name="ExternalLink" size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

