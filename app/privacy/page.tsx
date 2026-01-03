import Section from "../components/Section";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "Gizlilik Politikası | EZA",
  description: "EZA gizlilik politikası. Veri kullanımı, analiz ve anonimleştirme hakkında bilgiler.",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-200 via-blue-100/80 to-slate-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-eza-text mb-6">
              Gizlilik Politikaları
            </h1>
            <p className="text-xl text-eza-text-secondary">
              EZA Veri Kullanımı, Gizlilik ve Etik Prensipleri
            </p>
          </FadeIn>
        </div>
      </div>

      <Section className="bg-white">
        <FadeIn delay={100}>
          <div className="max-w-4xl mx-auto space-y-8 text-lg text-eza-text-secondary leading-relaxed">
            {/* Giriş */}
            <div>
              <p>
                Bu metin, EZA platformu kapsamında işlenen verilerin hangi prensiplerle ele alındığını, nasıl korunduğunu ve hangi amaçlarla kullanıldığını açıklamak amacıyla hazırlanmıştır.
              </p>
            </div>

            {/* 1. EZA'nın Rolü ve Konumlanması */}
            <div>
              <h2 className="text-2xl font-semibold text-eza-text mb-4">
                1. EZA'nın Rolü ve Konumlanması
              </h2>
              <p className="mb-4">
                EZA, yapay zekâ sistemleri tarafından üretilen çıktıları analiz eden, bu çıktılar üzerinden etik etki, risk ve skorlamaları görünür kılan bağımsız bir governance katmanıdır.
              </p>
              <div className="bg-eza-gray rounded-lg p-6 space-y-3">
                <p className="font-semibold text-eza-text">EZA:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-eza-blue mr-3">•</span>
                    <span>Kendi başına içerik üretmez</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eza-blue mr-3">•</span>
                    <span>Mevcut içeriği değiştirmez</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eza-blue mr-3">•</span>
                    <span>Otomatik sansür veya engelleme uygulamaz</span>
                  </li>
                </ul>
              </div>
              <p className="mt-4">
                EZA'nın rolü; müdahale eden bir sistem olmak değil, gözlemleyen ve ölçen bir etik referans noktası oluşturmaktır.
              </p>
            </div>

            {/* 2. İçeriğe Müdahale Prensibi */}
            <div>
              <h2 className="text-2xl font-semibold text-eza-text mb-4">
                2. İçeriğe Müdahale Prensibi
              </h2>
              <p className="mb-4">
                EZA, analiz ettiği içeriklere otomatik veya zorunlu müdahalede bulunmaz. İçerik engellenmez, sansürlenmez veya yeniden yazılmaz.
              </p>
              <p className="mb-4">
                Ancak kullanıcı açıkça talep ettiğinde:
              </p>
              <div className="bg-eza-gray rounded-lg p-6 space-y-3">
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-eza-blue mr-3">•</span>
                    <span>İçeriğin bağlamı korunarak</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eza-blue mr-3">•</span>
                    <span>Zorlayıcı veya yönlendirici olmadan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eza-blue mr-3">•</span>
                    <span>Etik iyileştirme önerileri sunulabilir</span>
                  </li>
                </ul>
              </div>
              <p className="mt-4">
                Bu öneriler isteğe bağlıdır ve nihai karar her zaman kullanıcıya aittir.
              </p>
            </div>

            {/* 3. Veri Kullanımı ve Amaç Sınırlaması */}
            <div>
              <h2 className="text-2xl font-semibold text-eza-text mb-4">
                3. Veri Kullanımı ve Amaç Sınırlaması
              </h2>
              <p className="mb-4">
                EZA tarafından analiz edilen tüm veriler:
              </p>
              <div className="bg-eza-gray rounded-lg p-6 space-y-3">
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-eza-blue mr-3">•</span>
                    <span>Yalnızca etik analiz, risk değerlendirmesi ve skorlama amacıyla kullanılır</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eza-blue mr-3">•</span>
                    <span>Analiz dışında farklı bir amaçla değerlendirilmez</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eza-blue mr-3">•</span>
                    <span>Reklam, profil çıkarımı veya üçüncü taraf ticari kullanım için işlenmez</span>
                  </li>
                </ul>
              </div>
              <p className="mt-4">
                Veri işleme faaliyetleri, amaçla sınırlılık ve asgari veri kullanımı prensiplerine dayanır.
              </p>
            </div>

            {/* 4. Model Kullanımı ve Üçüncü Taraf Altyapılar */}
            <div>
              <h2 className="text-2xl font-semibold text-eza-text mb-4">
                4. Model Kullanımı ve Üçüncü Taraf Altyapılar
              </h2>
              <p className="mb-4">
                EZA, mevcut ürünlerinde OpenAI, Groq, Mistral gibi üçüncü taraf yapay zekâ modellerini kullanabilir. EZA, bu modellerle rekabet etmeyi hedeflemez ve model üretimi yapmaz.
              </p>
              <p className="mb-4">
                EZA'nın odağı:
              </p>
              <div className="bg-eza-gray rounded-lg p-6 space-y-3">
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-eza-blue mr-3">•</span>
                    <span>Yapay zekâ modellerinin çıktılarının etik etkilerini ölçmek</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eza-blue mr-3">•</span>
                    <span>Modeller arası karşılaştırılabilir ve denetlenebilir bir yapı oluşturmaktır</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 5. Geleceğe Yönelik Mimari Esneklik */}
            <div>
              <h2 className="text-2xl font-semibold text-eza-text mb-4">
                5. Geleceğe Yönelik Mimari Esneklik
              </h2>
              <p className="mb-4">
                EZA'nın mimarisi, farklı yapay zekâ model altyapılarını destekleyebilecek şekilde tasarlanmıştır.
              </p>
              <p className="mb-4">
                Bu yaklaşım:
              </p>
              <div className="bg-eza-gray rounded-lg p-6 space-y-3">
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-eza-blue mr-3">•</span>
                    <span>Belirli bir modele bağımlılığı önler</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eza-blue mr-3">•</span>
                    <span>Uzun vadede esnek, sürdürülebilir ve genişleyebilir bir yapı sağlar</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 6. Regülatör Panelleri ve Anonimleştirme */}
            <div>
              <h2 className="text-2xl font-semibold text-eza-text mb-4">
                6. Regülatör Panelleri ve Anonimleştirme
              </h2>
              <p className="mb-4">
                Regülatör panellerinde görüntülenen tüm veriler:
              </p>
              <div className="bg-eza-gray rounded-lg p-6 space-y-3">
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-eza-blue mr-3">•</span>
                    <span>Anonimleştirilmiş formatta sunulur</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eza-blue mr-3">•</span>
                    <span>Kişisel veya kurumsal kimlik bilgileri içermez</span>
                  </li>
                </ul>
              </div>
              <p className="mt-4">
                Bu veriler, yalnızca sistemsel etik görünürlük ve denetim amacıyla paylaşılır.
              </p>
            </div>

            {/* 7. Veri Güvenliği ve Gizlilik */}
            <div>
              <h2 className="text-2xl font-semibold text-eza-text mb-4">
                7. Veri Güvenliği ve Gizlilik
              </h2>
              <p className="mb-4">
                EZA:
              </p>
              <div className="bg-eza-gray rounded-lg p-6 space-y-3">
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-eza-blue mr-3">•</span>
                    <span>Verilerin gizliliğini ve bütünlüğünü korumayı temel ilke olarak benimser</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eza-blue mr-3">•</span>
                    <span>Yetkisiz erişime karşı teknik ve organizasyonel önlemler uygular</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eza-blue mr-3">•</span>
                    <span>Verileri yalnızca yetkili kullanıcılar ve tanımlı roller kapsamında erişilebilir kılar</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 8. Kullanıcı Hakları */}
            <div>
              <h2 className="text-2xl font-semibold text-eza-text mb-4">
                8. Kullanıcı Hakları
              </h2>
              <p className="mb-4">
                Kullanıcılar, yürürlükteki mevzuat kapsamında:
              </p>
              <div className="bg-eza-gray rounded-lg p-6 space-y-3">
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-eza-blue mr-3">•</span>
                    <span>Analiz edilen verilere ilişkin bilgi talep etme</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eza-blue mr-3">•</span>
                    <span>Silme veya anonimleştirme talebinde bulunma</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eza-blue mr-3">•</span>
                    <span>Veri kullanımına ilişkin itiraz hakkına sahiptir</span>
                  </li>
                </ul>
              </div>
              <p className="mt-4">
                Bu talepler, ilgili mevzuat çerçevesinde değerlendirilir.
              </p>
            </div>

            {/* 9. Güncellemeler */}
            <div>
              <h2 className="text-2xl font-semibold text-eza-text mb-4">
                9. Güncellemeler
              </h2>
              <p>
                Bu Gizlilik Politikaları metni, EZA'nın teknik veya hukuki gereksinimleri doğrultusunda güncellenebilir. Güncel versiyon her zaman bu sayfa üzerinden yayımlanır.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

