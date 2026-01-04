"use client";

export default function CTASection() {
  return (
    <div className="relative max-w-6xl mx-auto px-3 sm:px-4 lg:px-8 py-8 md:py-20 w-full">
      <div className="bg-gradient-to-br from-eza-blue/10 via-eza-blue/5 to-purple-500/10 rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 border border-eza-blue/20 shadow-2xl relative overflow-hidden">
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
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-eza-text mb-3 md:mb-6 break-words">
            EZA-Core ile Etik Zekanın Geleceğini İnşa Edin
          </h2>
          <p className="text-sm md:text-xl text-eza-text-secondary max-w-2xl mx-auto break-words">
            Tüm modüller ve paneller EZA-Core platformu üzerinde çalışır. 
            Etik zekâ altyapınızı bugün kurun.
          </p>
        </div>
      </div>
    </div>
  );
}

