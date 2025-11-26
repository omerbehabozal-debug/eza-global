import { generatePageMetadata } from "@/lib/seo";
import Section from "@/app/components/Section";
import Link from "next/link";
import Icon from "@/app/components/Icon";

export const metadata = generatePageMetadata(
  "EZA Advisor",
  "EZA-Core'un AI destekli danışman modülü. Gerçek zamanlı öneriler ve yönlendirmeler."
);

export default function AdvisorPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-eza-gray via-white to-eza-gray py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-eza-blue/10 text-eza-blue text-sm font-semibold rounded-full border border-eza-blue/20 mb-4">
            <Icon name="Brain" size={16} />
            EZA-Core Engine
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-eza-dark mb-6">
            EZA Advisor
          </h1>
          <p className="text-xl text-gray-700">
            EZA-Core'un AI destekli danışman modülü. Gerçek zamanlı öneriler ve yönlendirmeler.
          </p>
        </div>
      </div>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            EZA Advisor, EZA-Core'un yapay zeka destekli danışman modülüdür. İçerikleri, etkileşimleri 
            ve davranışları analiz ederek gerçek zamanlı etik öneriler ve yönlendirmeler sunar. 
            Advisor, yalnızca sorunları tespit etmez; aynı zamanda daha iyi alternatifler önerir ve 
            iyileştirme yolları gösterir.
          </p>
          <p>
            EZA Advisor, EZA'nın temel felsefesini yansıtır: yasaklamaz, ceza vermez; sadece daha iyi 
            bir davranış önerir. Her öneri, şeffaf bir şekilde açıklanır ve kullanıcıya neden daha 
            etik bir yaklaşımın tercih edilmesi gerektiği anlatılır.
          </p>
          <p>
            Sistem, sürekli öğrenme yeteneğine sahiptir ve farklı senaryolara uyum sağlar. Kurumsal 
            kullanıcılar için özelleştirilebilir kurallar ve sektörel gereksinimlere göre ayarlanabilir 
            yönlendirmeler sunar.
          </p>
        </div>
      </Section>

      <Section className="bg-eza-gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-eza-dark mb-8">Advisor Özellikleri</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center">
                  <Icon name="Brain" className="text-eza-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-eza-text">Akıllı Analiz</h3>
              </div>
              <p className="text-gray-700">
                İçerikleri derinlemesine analiz eder, etik riskleri tespit eder ve bağlama uygun 
                öneriler sunar.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center">
                  <Icon name="Zap" className="text-eza-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-eza-text">Gerçek Zamanlı</h3>
              </div>
              <p className="text-gray-700">
                Anlık analiz yaparak hızlı geri bildirim sağlar ve kullanıcı deneyimini kesintiye 
                uğratmaz.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center">
                  <Icon name="Lightbulb" className="text-eza-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-eza-text">Yapıcı Öneriler</h3>
              </div>
              <p className="text-gray-700">
                Sadece sorunları göstermez, aynı zamanda daha iyi alternatifler ve iyileştirme 
                yolları önerir.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center">
                  <Icon name="Settings" className="text-eza-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-eza-text">Özelleştirilebilir</h3>
              </div>
              <p className="text-gray-700">
                Kurumsal ihtiyaçlara göre özelleştirilebilir kurallar ve sektörel gereksinimlere 
                uygun ayarlar.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-eza-dark mb-6">Advisor Nasıl Çalışır?</h2>
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-eza-blue text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-eza-text mb-2">İçerik Analizi</h3>
                <p className="text-gray-700">
                  Advisor, içeriği çok boyutlu olarak analiz eder: dil tonu, manipülasyon riski, 
                  saygı seviyesi, şeffaflık ve adalet gibi faktörleri değerlendirir.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-eza-blue text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-eza-text mb-2">Risk Değerlendirmesi</h3>
                <p className="text-gray-700">
                  Tespit edilen etik riskleri kategorize eder ve önceliklendirir. Her risk için 
                  açıklama ve bağlam sağlar.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-eza-blue text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-eza-text mb-2">Öneri Üretimi</h3>
                <p className="text-gray-700">
                  Her risk için yapıcı alternatifler önerir. Öneriler, neden daha etik olduğu 
                  açıklanarak sunulur ve uygulanabilir örnekler içerir.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-eza-blue text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-eza-text mb-2">Sürekli Öğrenme</h3>
                <p className="text-gray-700">
                  Kullanıcı geri bildirimlerini ve sonuçları öğrenerek önerilerini sürekli 
                  iyileştirir ve daha doğru yönlendirmeler sunar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-eza-gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-eza-dark mb-6">Kullanım Senaryoları</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-eza-green text-2xl mr-3">✓</span>
              <span>
                <strong>İçerik Oluşturma:</strong> Yazılı içerik oluştururken gerçek zamanlı 
                etik öneriler alın ve daha iyi alternatifler keşfedin
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-green text-2xl mr-3">✓</span>
              <span>
                <strong>Müşteri Etkileşimi:</strong> Müşteri iletişimlerinde etik yönlendirmeler 
                alın ve daha saygılı bir dil kullanın
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-green text-2xl mr-3">✓</span>
              <span>
                <strong>Eğitim ve Geliştirme:</strong> Ekip üyelerinize etik iletişim konusunda 
                eğitim materyali olarak kullanın
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-eza-green text-2xl mr-3">✓</span>
              <span>
                <strong>API Entegrasyonu:</strong> Mevcut sistemlerinize entegre ederek otomatik 
                etik danışmanlık hizmeti sağlayın
              </span>
            </li>
          </ul>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-eza-dark mb-6">EZA Felsefesi</h2>
          <div className="bg-gradient-to-br from-eza-blue/5 to-white rounded-xl p-6 border border-eza-blue/10">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              EZA Advisor, EZA'nın temel felsefesini yansıtır: <strong className="text-eza-text">yasaklamaz, 
              ceza vermez; sadece daha iyi bir davranış önerir.</strong>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Advisor, kullanıcıları engellemez veya içerikleri sansürlemez. Bunun yerine, daha etik 
              bir yaklaşımın neden tercih edilmesi gerektiğini açıklar ve uygulanabilir alternatifler 
              sunar. Bu sayede teknoloji, insanlığa karşı daha saygılı ve sorumlu davranır.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-eza-gray">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-eza-blue/5 to-white rounded-2xl p-8 border border-eza-blue/10">
            <h3 className="text-2xl font-semibold text-eza-text mb-4">
              EZA Advisor'ı Keşfedin
            </h3>
            <p className="text-gray-700 mb-6">
              EZA-Core platformu üzerinden EZA Advisor'a erişebilir ve API entegrasyonu 
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
      </Section>
    </>
  );
}

