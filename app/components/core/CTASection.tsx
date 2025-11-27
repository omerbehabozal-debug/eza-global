"use client";

export default function CTASection() {
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
          <p className="text-xl text-eza-text-secondary max-w-2xl mx-auto">
            Tüm modüller ve paneller EZA-Core platformu üzerinde çalışır. 
            Etik zekâ altyapınızı bugün kurun.
          </p>
        </div>
      </div>
    </div>
  );
}

