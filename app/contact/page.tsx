import { generatePageMetadata } from "@/lib/seo";
import Section from "@/app/components/Section";
import FadeIn from "@/app/components/FadeIn";
import Icon from "@/app/components/Icon";

export const metadata = generatePageMetadata(
  "Contact",
  "EZA ile iletişime geçin. Sorularınız, önerileriniz ve iş birliği teklifleriniz için bizimle iletişime geçebilirsiniz."
);

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-200 via-blue-100/80 to-slate-100 py-8 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-eza-blue/10 text-eza-blue text-xs sm:text-sm font-semibold rounded-full border border-eza-blue/20 mb-3 md:mb-4">
              <Icon name="Mail" size={14} />
              İletişim
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-eza-dark mb-3 md:mb-6">
              Bizimle İletişime Geçin
            </h1>
            <p className="text-sm md:text-xl text-gray-700 mb-3 md:mb-4">
              Sorularınız, önerileriniz ve iş birliği teklifleriniz için bizimle iletişime geçebilirsiniz.
            </p>
            <p className="text-xs md:text-base text-gray-600">
              EZA ekibi, etik teknoloji konusundaki sorularınızı yanıtlamak için burada.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Contact Form & Info Section */}
      <Section className="bg-white !pt-6 md:!pt-16 !pb-6 md:!pb-24 !min-h-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            {/* Contact Form */}
            <FadeIn delay={100}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-gray-200/50 shadow-lg">
                  <h2 className="text-xl sm:text-2xl font-semibold text-eza-text mb-4 md:mb-6 flex items-center gap-2">
                  <Icon name="Mail" size={20} className="text-eza-blue" />
                  Mesaj Gönderin
                </h2>
                <form className="space-y-3 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm font-medium text-eza-text mb-2">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-200 focus:border-eza-blue focus:ring-2 focus:ring-eza-blue/20 outline-none transition-all bg-white text-sm md:text-base"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-medium text-eza-text mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-200 focus:border-eza-blue focus:ring-2 focus:ring-eza-blue/20 outline-none transition-all bg-white text-sm md:text-base"
                      placeholder="ornek@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-eza-text mb-2">
                      Konu
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-200 focus:border-eza-blue focus:ring-2 focus:ring-eza-blue/20 outline-none transition-all bg-white text-sm md:text-base"
                    >
                      <option value="">Konu seçin</option>
                      <option value="general">Genel Bilgi</option>
                      <option value="partnership">İş Birliği</option>
                      <option value="technical">Teknik Destek</option>
                      <option value="media">Medya & Basın</option>
                      <option value="other">Diğer</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs md:text-sm font-medium text-eza-text mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-200 focus:border-eza-blue focus:ring-2 focus:ring-eza-blue/20 outline-none transition-all bg-white resize-none text-sm md:text-base"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 md:px-8 py-2.5 md:py-3 bg-eza-blue text-white rounded-lg font-semibold hover:bg-[#0077ed] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    <Icon name="Mail" size={16} />
                    Mesajı Gönder
                  </button>
                </form>
              </div>
            </FadeIn>

            {/* Contact Information */}
            <FadeIn delay={200}>
              <div className="space-y-4 md:space-y-6">
                <div className="bg-gradient-to-br from-eza-blue/5 via-white to-eza-blue/5 rounded-2xl p-4 md:p-8 border border-eza-blue/10 shadow-lg">
                  <h2 className="text-xl sm:text-2xl font-semibold text-eza-text mb-4 md:mb-6 flex items-center gap-2">
                    <Icon name="Info" size={20} className="text-eza-blue" />
                    İletişim Bilgileri
                  </h2>
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" className="text-eza-blue" size={18} />
                      </div>
                      <div>
                        <h3 className="text-xs md:text-sm font-semibold text-eza-text mb-1">E-posta</h3>
                        <a
                          href="mailto:info@eza.global"
                          className="text-xs md:text-sm text-eza-text-secondary hover:text-eza-blue transition-colors"
                        >
                          info@eza.global
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Building2" className="text-eza-blue" size={18} />
                      </div>
                      <div>
                        <h3 className="text-xs md:text-sm font-semibold text-eza-text mb-1">Adres</h3>
                        <p className="text-xs md:text-sm text-eza-text-secondary">
                          EZA Global Headquarters
                          <br />
                          İstanbul, Türkiye
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" className="text-eza-blue" size={18} />
                      </div>
                      <div>
                        <h3 className="text-xs md:text-sm font-semibold text-eza-text mb-1">Çalışma Saatleri</h3>
                        <p className="text-xs md:text-sm text-eza-text-secondary">
                          Pazartesi - Cuma: 09:00 - 18:00
                          <br />
                          Cumartesi - Pazar: Kapalı
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-gray-200/50 shadow-lg">
                  <h3 className="text-lg md:text-xl font-semibold text-eza-text mb-3 md:mb-4 flex items-center gap-2">
                    <Icon name="ExternalLink" size={18} className="text-eza-blue" />
                    Hızlı Erişim
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    <a
                      href="/documentation"
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg hover:bg-eza-gray/50 transition-colors group"
                    >
                      <Icon name="BookText" size={16} className="text-eza-text-secondary group-hover:text-eza-blue transition-colors" />
                      <span className="text-xs md:text-sm text-eza-text-secondary group-hover:text-eza-text transition-colors">Dokümantasyon</span>
                    </a>
                    <a
                      href="/platform/eza-core"
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg hover:bg-eza-gray/50 transition-colors group"
                    >
                      <Icon name="Cpu" size={16} className="text-eza-text-secondary group-hover:text-eza-blue transition-colors" />
                      <span className="text-xs md:text-sm text-eza-text-secondary group-hover:text-eza-text transition-colors">EZA-Core Platform</span>
                    </a>
                    <a
                      href="/#ecosystem"
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg hover:bg-eza-gray/50 transition-colors group"
                    >
                      <Icon name="Layers" size={16} className="text-eza-text-secondary group-hover:text-eza-blue transition-colors" />
                      <span className="text-xs md:text-sm text-eza-text-secondary group-hover:text-eza-text transition-colors">Ekosistem</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Additional Info Section */}
      <Section className="bg-eza-gray !pt-6 md:!pt-16 !pb-6 md:!pb-24 !min-h-0">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-eza-text mb-4 md:mb-6">
              EZA Hakkında Sorularınız mı Var?
            </h2>
            <p className="text-sm md:text-lg text-eza-text-secondary leading-relaxed mb-4 md:mb-8">
              EZA ve EZA-Core platformu hakkında daha fazla bilgi edinmek, entegrasyon süreçleri 
              hakkında danışmanlık almak veya iş birliği fırsatlarını değerlendirmek için bizimle iletişime geçin.
            </p>
            <div className="grid md:grid-cols-3 gap-3 md:gap-6 mt-6 md:mt-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200/50 shadow-lg">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Icon name="Users" className="text-eza-blue" size={20} />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-eza-text mb-2">İş Birliği</h3>
                <p className="text-xs md:text-sm text-eza-text-secondary">
                  Ortaklık ve iş birliği fırsatları için iletişime geçin.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200/50 shadow-lg">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Icon name="Code" className="text-eza-blue" size={20} />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-eza-text mb-2">Teknik Destek</h3>
                <p className="text-xs md:text-sm text-eza-text-secondary">
                  Entegrasyon ve teknik sorularınız için destek alın.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200/50 shadow-lg">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Icon name="MessageCircle" className="text-eza-blue" size={20} />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-eza-text mb-2">Genel Bilgi</h3>
                <p className="text-xs md:text-sm text-eza-text-secondary">
                  EZA hakkında genel sorularınız için bizimle iletişime geçin.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

