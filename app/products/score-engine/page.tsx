import { generatePageMetadata } from "@/lib/seo";
import Section from "@/app/components/Section";
import Link from "next/link";
import Icon from "@/app/components/Icon";
import FadeIn from "@/app/components/FadeIn";

export const metadata = generatePageMetadata(
  "EZA Score Engine",
  "EZA-Core'un skorlama motoru. Etik davranış metrikleri ve sürekli iyileştirme sistemi."
);

export default function ScoreEnginePage() {
  return (
    <>
      <div className="bg-gradient-to-br from-eza-gray via-white to-eza-gray py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-eza-blue/10 text-eza-blue text-sm font-semibold rounded-full border border-eza-blue/20 mb-4">
              <Icon name="BarChart3" size={16} />
              EZA-Core Engine
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-eza-text mb-6">
              EZA Score Engine
            </h1>
            <p className="text-xl text-eza-text-secondary">
              EZA-Core'un skorlama motoru. Etik davranış metrikleri ve sürekli iyileştirme sistemi.
            </p>
          </FadeIn>
        </div>
      </div>

      <Section className="bg-white">
        <FadeIn delay={100}>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-eza-text-secondary leading-relaxed">
          <p>
            EZA Score Engine, EZA-Core'un çekirdek skorlama motorudur. Her bir içeriği, etkileşimi 
            ve davranışı analiz ederek kapsamlı etik skorlar üretir. Bu skorlar, teknolojinin 
            insanlığa karşı ne kadar etik davrandığını ölçer ve sürekli iyileştirme için veri sağlar.
          </p>
          <p>
            EZA Score Engine, yalnızca bir sayı üretmez; detaylı analiz raporları, risk değerlendirmeleri 
            ve iyileştirme önerileri sunar. Her skor, çok boyutlu bir etik değerlendirmenin sonucudur 
            ve şeffaflık ilkesi gereği açıklanabilir ve anlaşılabilir formatta sunulur.
          </p>
          <p>
            Sistem, gerçek zamanlı skorlama yapabilir ve geçmiş verilerle karşılaştırmalar yaparak 
            trend analizi sunar. Bu sayede kurumlar, etik performanslarını izleyebilir ve sürekli 
            iyileştirme sağlayabilir.
          </p>
          </div>
        </FadeIn>
      </Section>

      <Section className="bg-eza-gray">
        <FadeIn delay={200}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-eza-text mb-8">Skorlama Özellikleri</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center">
                  <Icon name="BarChart3" className="text-eza-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-eza-text">Çok Boyutlu Analiz</h3>
              </div>
                <p className="text-eza-text-secondary">
                İçerikleri farklı etik boyutlardan analiz eder: manipülasyon riski, saygı, 
                şeffaflık, adalet ve sorumluluk.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center">
                  <Icon name="TrendingUp" className="text-eza-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-eza-text">Trend Analizi</h3>
              </div>
                <p className="text-eza-text-secondary">
                Geçmiş verilerle karşılaştırma yaparak etik performans trendlerini gösterir 
                ve iyileştirme alanlarını belirler.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center">
                  <Icon name="Eye" className="text-eza-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-eza-text">Şeffaflık</h3>
              </div>
                <p className="text-eza-text-secondary">
                Her skorun nasıl hesaplandığını açıklar, hangi faktörlerin etkili olduğunu 
                gösterir ve anlaşılabilir raporlar sunar.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center">
                  <Icon name="Zap" className="text-eza-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-eza-text">Gerçek Zamanlı</h3>
              </div>
                <p className="text-eza-text-secondary">
                Anlık skorlama yapabilir, API üzerinden entegre edilebilir ve sürekli 
                izleme sağlar.
              </p>
            </div>
          </div>
          </div>
        </FadeIn>
      </Section>

      <Section className="bg-white">
        <FadeIn delay={300}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-eza-text mb-6">Skorlama Metrikleri</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-eza-blue pl-6">
              <h3 className="text-xl font-semibold text-eza-text mb-2">Etik Skor (0-100)</h3>
              <p className="text-eza-text-secondary">
                Genel etik davranış değerlendirmesi. Yüksek skor, içeriğin insanlığa karşı 
                daha etik davrandığını gösterir.
              </p>
            </div>
            <div className="border-l-4 border-eza-green pl-6">
              <h3 className="text-xl font-semibold text-eza-text mb-2">Manipülasyon Riski</h3>
              <p className="text-eza-text-secondary">
                İçeriğin manipülatif dil, yanıltıcı bilgi veya zorlayıcı teknikler içerip 
                içermediğini değerlendirir.
              </p>
            </div>
            <div className="border-l-4 border-eza-gold pl-6">
              <h3 className="text-xl font-semibold text-eza-text mb-2">Saygı ve Dürüstlük</h3>
              <p className="text-eza-text-secondary">
                İçeriğin kullanıcıya saygılı, dürüst ve şeffaf bir şekilde sunulup 
                sunulmadığını ölçer.
              </p>
            </div>
            <div className="border-l-4 border-eza-blue pl-6">
              <h3 className="text-xl font-semibold text-eza-text mb-2">Adalet ve Eşitlik</h3>
              <p className="text-eza-text-secondary">
                İçeriğin adil, eşitlikçi ve ayrımcılık içermediğini değerlendirir.
              </p>
            </div>
            <div className="border-l-4 border-eza-text pl-6">
              <h3 className="text-xl font-semibold text-eza-text mb-2">Sorumluluk</h3>
              <p className="text-eza-text-secondary">
                İçeriğin sorumlu bir şekilde oluşturulup oluşturulmadığını ve potansiyel 
                zararları dikkate alıp almadığını ölçer.
              </p>
            </div>
          </div>
          </div>
        </FadeIn>
      </Section>

      <Section className="bg-eza-gray">
        <FadeIn delay={400}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-eza-text mb-6">Kullanım Senaryoları</h2>
            <ul className="space-y-4 text-lg text-eza-text-secondary">
            <li className="flex items-start">
              <span className="text-eza-green text-2xl mr-3">✓</span>
              <span>
                <strong>İçerik Değerlendirme:</strong> Yayınlanmadan önce içeriklerin etik skorunu 
                ölçerek kalite kontrolü yapın
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-green text-2xl mr-3">✓</span>
              <span>
                <strong>Performans İzleme:</strong> Zaman içinde etik performansınızı izleyin ve 
                iyileştirme alanlarını belirleyin
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-green text-2xl mr-3">✓</span>
              <span>
                <strong>Raporlama:</strong> Kurumsal ve düzenleyici raporlama için detaylı etik 
                metrikleri oluşturun
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-green text-2xl mr-3">✓</span>
              <span>
                <strong>API Entegrasyonu:</strong> Mevcut sistemlerinize EZA Score Engine'i 
                entegre ederek otomatik skorlama yapın
              </span>
            </li>
          </ul>
          </div>
        </FadeIn>
      </Section>

      <Section className="bg-white">
        <FadeIn delay={500}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-eza-blue/5 to-white rounded-2xl p-8 border border-eza-blue/10">
              <h3 className="text-2xl font-semibold text-eza-text mb-4">
                EZA Score Engine'i Keşfedin
              </h3>
              <p className="text-eza-text-secondary mb-6">
              EZA-Core platformu üzerinden EZA Score Engine'e erişebilir ve API entegrasyonu 
              yapabilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://ezacore.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-eza-blue text-white rounded-lg font-semibold hover:bg-[#0077ed] transition-all shadow-lg hover:shadow-xl"
              >
                EZA-Core Platformu
                <Icon name="ExternalLink" size={18} />
              </Link>
              <Link
                href="/#ecosystem"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-eza-blue border border-eza-blue rounded-lg font-semibold hover:bg-eza-blue/5 transition-all"
              >
                EZA Ekosistemine Dön
                <Icon name="ArrowLeft" size={18} />
              </Link>
            </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

