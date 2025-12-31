"use client";

import { useState, useEffect } from "react";
import Section from "@/app/components/Section";
import FadeIn from "@/app/components/FadeIn";
import Icon from "@/app/components/Icon";
import ComplianceMatrix from "@/app/components/ComplianceMatrix";

// API Response Interface
interface ComprehensiveTestResults {
  overall: {
    total_runs: number;
    total_tests: number;
    success_rate: number;
  };
  test_suites: TestSuite[];
}

interface TestSuite {
  name: string;
  success_rate: number;
  status: "pass" | "warning" | "fail";
  improvement?: string;
  major_runs?: Array<{
    improvement?: string;
    [key: string]: any;
  }>;
  improvements?: string[];
}

// Test Suite Veri Yapısı (UI için)
interface UITestSuite {
  id: string;
  name: string;
  testCount: number;
  successRate: number;
  status: "completed" | "pending" | "failed";
  description: string;
  improvement?: string;
  details?: string;
  testType: "fake-llm" | "real-llm";
}

// API Fetch Function
async function fetchComprehensiveTestResults(): Promise<ComprehensiveTestResults | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_EZA_BACKEND_URL || "https://api.ezacore.ai";
    const res = await fetch(`${apiUrl}/api/test-results/comprehensive`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data as ComprehensiveTestResults;
  } catch (error) {
    console.error("API fetch error:", error);
    return null;
  }
}

// API verisini UI formatına dönüştür
function transformApiDataToUI(apiData: ComprehensiveTestResults): {
  suites: UITestSuite[];
  totalTests: number;
  successRate: number;
  suiteCount: number;
} {
  const suites: UITestSuite[] = apiData.test_suites.map((suite, index) => {
    // Improvement string'ini oluştur
    let improvement: string | undefined;
    if (suite.improvement) {
      improvement = suite.improvement;
    } else if (suite.improvements && suite.improvements.length > 0) {
      improvement = suite.improvements[suite.improvements.length - 1];
    } else if (suite.major_runs && suite.major_runs.length > 0) {
      const lastRun = suite.major_runs[suite.major_runs.length - 1];
      if (lastRun.improvement) {
        improvement = lastRun.improvement;
      }
    }

    // Status mapping
    let uiStatus: "completed" | "pending" | "failed" = "completed";
    if (suite.status === "fail") {
      uiStatus = "failed";
    } else if (suite.status === "warning") {
      uiStatus = "pending";
    }

    // Test type tahmini (name'e göre)
    const testType: "fake-llm" | "real-llm" = 
      suite.name.toLowerCase().includes("performance") || suite.name.toLowerCase().includes("core")
        ? "fake-llm"
        : "real-llm";

    return {
      id: suite.name.toLowerCase().replace(/\s+/g, "-"),
      name: suite.name,
      testCount: 0, // API'den gelmiyorsa 0, hesaplanabilir
      successRate: suite.success_rate,
      status: uiStatus,
      description: `${suite.name} test suite'i. Başarı oranı: %${suite.success_rate}`,
      improvement,
      testType,
    };
  });

  return {
    suites,
    totalTests: apiData.overall.total_tests,
    successRate: apiData.overall.success_rate,
    suiteCount: suites.length,
  };
}

// Özet Kartları Component
function TestSummaryCards({ 
  totalTests, 
  successRate, 
  suiteCount,
  isLoading,
  hasError
}: { 
  totalTests: number; 
  successRate: number; 
  suiteCount: number;
  isLoading: boolean;
  hasError: boolean;
}) {
  const cards = [
    {
      label: "Toplam Test",
      value: isLoading ? "..." : (hasError ? "N/A" : totalTests.toString()),
      icon: "CheckCircle",
      bgColor: "bg-eza-blue/10",
      textColor: "text-eza-blue",
    },
    {
      label: "Genel Başarı Oranı",
      value: isLoading ? "..." : (hasError ? "N/A" : `%${successRate.toFixed(1)}`),
      icon: "TrendingUp",
      bgColor: "bg-eza-green/10",
      textColor: "text-eza-green",
    },
    {
      label: "Test Suite Sayısı",
      value: isLoading ? "..." : (hasError ? "N/A" : suiteCount.toString()),
      icon: "Layers",
      bgColor: "bg-eza-blue/10",
      textColor: "text-eza-blue",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      {cards.map((card, index) => (
        <FadeIn key={card.label} delay={index * 100}>
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-14 h-14 rounded-xl ${card.bgColor} flex items-center justify-center`}>
                <Icon name={card.icon} className={card.textColor} size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-eza-text-secondary mb-1">{card.label}</p>
                <p className="text-3xl font-bold text-eza-text">{card.value}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

// Test Suite Kartı Component
function TestSuiteCard({ suite, index }: { suite: UITestSuite; index: number }) {
  // Başarı oranına göre renk belirleme
  const getStatusColor = (rate: number) => {
    if (rate >= 95) {
      return {
        bg: "bg-green-100",
        text: "text-green-700",
        border: "border-green-200",
        icon: "CheckCircle",
        label: "Mükemmel",
      };
    } else if (rate >= 80) {
      return {
        bg: "bg-yellow-100",
        text: "text-yellow-700",
        border: "border-yellow-200",
        icon: "AlertTriangle",
        label: "İyi",
      };
    } else {
      return {
        bg: "bg-red-100",
        text: "text-red-700",
        border: "border-red-200",
        icon: "XCircle",
        label: "İyileştirme Gerekli",
      };
    }
  };

  const statusColor = getStatusColor(suite.successRate);

  return (
    <FadeIn delay={index * 50}>
      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-eza-blue/30 transition-all duration-300 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-eza-text mb-2">{suite.name}</h3>
            <div className={`inline-flex items-center gap-2 px-3 py-1 ${statusColor.bg} ${statusColor.text} text-xs font-semibold rounded-full border ${statusColor.border}`}>
              <Icon name={statusColor.icon} size={14} />
              {statusColor.label}
            </div>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-xs text-eza-text-secondary mb-1">Başarı Oranı</p>
            <p className={`text-2xl font-bold ${statusColor.text}`}>%{suite.successRate.toFixed(1)}</p>
          </div>
          {suite.testCount > 0 && (
            <div>
              <p className="text-xs text-eza-text-secondary mb-1">Test Sayısı</p>
              <p className="text-2xl font-bold text-eza-text">{suite.testCount}</p>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full h-2 bg-eza-gray rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${
                suite.successRate >= 95
                  ? "bg-gradient-to-r from-green-500 to-green-600"
                  : suite.successRate >= 80
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-600"
                  : "bg-gradient-to-r from-red-500 to-red-600"
              }`}
              style={{ width: `${suite.successRate}%` }}
            />
          </div>
        </div>

        {/* Açıklama */}
        <p className="text-sm text-eza-text-secondary leading-relaxed mb-4 flex-1">
          {suite.description}
        </p>

        {/* İyileştirme */}
        {suite.improvement && (
          <div className="mt-4 p-3 bg-eza-blue/5 rounded-lg border border-eza-blue/10">
            <p className="text-xs font-semibold text-eza-blue mb-1">İyileştirme</p>
            <p className="text-sm text-eza-text">{suite.improvement}</p>
          </div>
        )}

        {suite.details && (
          <div className="mt-4 p-3 bg-eza-gray/50 rounded-lg">
            <p className="text-xs font-semibold text-eza-text-secondary mb-1">Detaylar</p>
            <p className="text-sm text-eza-text">{suite.details}</p>
          </div>
        )}

        {/* Test Tipi Badge */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-xs text-eza-text-secondary">
            {suite.testType === "real-llm" ? "Gerçek LLM" : "Fake LLM"}
          </span>
        </div>
      </div>
    </FadeIn>
  );
}

// Test Suite Grid Component
function TestSuiteGrid({ suites, isLoading, hasError }: { suites: UITestSuite[]; isLoading: boolean; hasError: boolean }) {
  if (isLoading) {
    return (
      <div className="text-center py-12">
        <p className="text-eza-text-secondary">Test verileri yükleniyor...</p>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="text-center py-12">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-2xl mx-auto">
          <Icon name="AlertCircle" className="text-yellow-600 mx-auto mb-4" size={32} />
          <p className="text-yellow-800 font-semibold mb-2">Test verileri geçici olarak alınamıyor</p>
          <p className="text-sm text-yellow-700">Lütfen daha sonra tekrar deneyin.</p>
        </div>
      </div>
    );
  }

  if (suites.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-eza-text-secondary">Henüz test verisi bulunmamaktadır.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {suites.map((suite, index) => (
        <TestSuiteCard key={suite.id} suite={suite} index={index} />
      ))}
    </div>
  );
}

// Önemli Başarılar Component
function HighlightAchievements() {
  const achievements = [
    {
      title: "Adversarial Tests",
      description: "%30.3 → %100 iyileştirme (132/132)",
      icon: "Shield",
      bgColor: "bg-eza-blue/10",
      textColor: "text-eza-blue",
    },
    {
      title: "Multi-Model Consistency",
      description: "Yeni paket, %100 başarı (30/30)",
      icon: "Layers",
      bgColor: "bg-eza-green/10",
      textColor: "text-eza-green",
    },
    {
      title: "Performance Suite",
      description: "Yeniden yapılandırıldı, 52 testte %100 başarı",
      icon: "Zap",
      bgColor: "bg-eza-blue/10",
      textColor: "text-eza-blue",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {achievements.map((achievement, index) => (
        <FadeIn key={achievement.title} delay={index * 100}>
          <div className="bg-gradient-to-br from-white to-eza-gray/30 rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className={`w-12 h-12 rounded-lg ${achievement.bgColor} flex items-center justify-center mb-4`}>
              <Icon name={achievement.icon} className={achievement.textColor} size={24} />
            </div>
            <h3 className="text-lg font-bold text-eza-text mb-2">{achievement.title}</h3>
            <p className="text-sm text-eza-text-secondary">{achievement.description}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

// Güvenlik Notu Component
function SecurityNote() {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
          <Icon name="AlertTriangle" className="text-amber-600" size={20} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-amber-900 mb-2">Güvenlik Notu</h3>
          <p className="text-sm text-amber-800 leading-relaxed">
            Not: Güvenlik ve kötüye kullanım riskleri nedeniyle test senaryolarının tam içeriği kamuya açık değildir. 
            Regülasyon otoriteleri ve kurumsal denetimler için detaylı raporlar, denetimli ve kontrollü erişim modeliyle paylaşılabilir.
          </p>
        </div>
      </div>
    </div>
  );
}

// Kurumsal Açıklama Component
function WhyTestsMatter() {
  return (
    <Section className="bg-white">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-eza-text mb-4 relative pb-4">
              Neden Bu Testler Önemli?
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-eza-blue to-transparent"></span>
            </h2>
          </div>
          <div className="space-y-4 text-eza-text-secondary leading-relaxed text-lg">
            <p>
              Yapay zekâ sistemleri; metin üretimi, karar destek, medya analizi ve otonom süreçlerde kritik roller üstlenmektedir.
            </p>
            <p>
              EZA'nın test mimarisi; davranışsal tutarlılık, model güvenliği, saldırı dayanıklılığı, politik ihlal tespiti ve çoklu model tutarlılığı gibi dünyanın en güncel güvenlik gereksinimlerine göre tasarlanmıştır.
            </p>
            <p>
              Bu testler, <strong className="text-eza-text">AB Yapay Zekâ Yasası</strong>, <strong className="text-eza-text">NIST AI RMF</strong> ve <strong className="text-eza-text">ISO/IEC 23053</strong> ile tam uyumludur.
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

// Regülasyon Uyumluluk Haritası Component
function RegulationCompliance() {
  const regulations = [
    {
      name: "AB AI Act",
      description: "Risk Yönetimi / Güvenli Yanıt Üretimi",
      icon: "Shield",
    },
    {
      name: "NIST AI Risk Framework",
      description: "Alignment + Mitigation",
      icon: "CheckCircle",
    },
    {
      name: "ISO/IEC 23053",
      description: "AI Governance",
      icon: "FileText",
    },
    {
      name: "ISO/IEC 42001",
      description: "AI Management Systems",
      icon: "Settings",
    },
    {
      name: "OECD AI Principles",
      description: "Fairness, Accountability",
      icon: "Globe",
    },
    {
      name: "RTÜK / BTK",
      description: "Ulusal içerik ve dijital güvenlik regülasyonları",
      icon: "Flag",
    },
  ];

  return (
    <Section className="bg-eza-gray">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-eza-text mb-4 relative pb-4">
              Regülasyon Uyumluluğu
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-eza-blue to-transparent"></span>
            </h2>
            <p className="text-lg text-eza-text-secondary max-w-2xl mx-auto">
              EZA, dünya çapında kabul görmüş yapay zekâ güvenlik standartlarıyla tam uyumludur.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regulations.map((regulation, index) => (
            <FadeIn key={regulation.name} delay={index * 100}>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-[0_4px_30px_rgba(0,0,0,0.04)] hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center mb-4">
                  <Icon name={regulation.icon} className="text-eza-blue" size={24} />
                </div>
                <h3 className="text-xl font-bold text-eza-text mb-2">{regulation.name}</h3>
                <p className="text-sm text-eza-text-secondary">{regulation.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}

// Test Ekosistemi Mimarisi Component
function TestEcosystemArchitecture() {
  return (
    <Section className="bg-white">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-eza-text mb-4 relative pb-4">
              EZA Test Ekosistemi Mimarisi
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-eza-blue to-transparent"></span>
            </h2>
            <p className="text-lg text-eza-text-secondary max-w-2xl mx-auto">
              EZA'nın test altyapısının mimari akışı
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="bg-[#f8f9fb] rounded-xl p-8 md:p-12 border border-gray-200 shadow-[0_4px_30px_rgba(0,0,0,0.04)] font-mono">
            <div className="space-y-4 text-eza-text text-center">
              <div className="text-lg font-semibold">User Input</div>
              <div className="text-eza-blue">↓</div>
              <div className="text-lg font-semibold">Input Analyzer</div>
              <div className="text-eza-blue">↓</div>
              <div className="text-lg font-semibold">Model Router → LLM1 / LLM2 / LLM3</div>
              <div className="text-eza-blue">↓</div>
              <div className="text-lg font-semibold">Output Analyzer</div>
              <div className="text-eza-blue">↓</div>
              <div className="text-lg font-semibold">Policy Engine (F1-F3, Z1-Z3)</div>
              <div className="text-eza-blue">↓</div>
              <div className="text-lg font-semibold">Behavioral Engine</div>
              <div className="text-eza-blue">↓</div>
              <div className="text-lg font-semibold text-eza-green">Safe & Aligned Answer</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

// Test Frekansı Takvimi Component
function TestFrequencyCalendar() {
  const frequencies = [
    {
      period: "Daily Tests",
      icon: "Calendar",
      tests: [
        { name: "Core Safety", description: "Temel güvenlik kontrolleri" },
        { name: "Performance", description: "Performans metrikleri" },
      ],
    },
    {
      period: "Weekly Tests",
      icon: "Clock",
      tests: [
        { name: "Policy", description: "Politika uyumluluk testleri" },
        { name: "Behavioral", description: "Davranışsal analiz testleri" },
        { name: "Multi-turn", description: "Çoklu tur senaryoları" },
      ],
    },
    {
      period: "Monthly Tests",
      icon: "Calendar",
      tests: [
        { name: "Adversarial", description: "Saldırı dayanıklılık testleri" },
        { name: "Multi-Model", description: "Çoklu model tutarlılık testleri" },
      ],
    },
  ];

  return (
    <Section className="bg-[#f5f9ff]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-eza-text mb-4 relative pb-4">
              Profesyonel Test Periyotları
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-eza-blue to-transparent"></span>
            </h2>
            <p className="text-lg text-eza-text-secondary max-w-2xl mx-auto">
              EZA test ekosistemi, farklı periyotlarda çalışan kapsamlı test süitlerinden oluşur.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {frequencies.map((frequency, index) => (
            <FadeIn key={frequency.period} delay={index * 100}>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center">
                    <Icon name={frequency.icon} className="text-eza-blue" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-eza-text">{frequency.period}</h3>
                </div>
                <div className="space-y-4">
                  {frequency.tests.map((test) => (
                    <div key={test.name} className="pb-4 border-b border-gray-100 last:border-0">
                      <h4 className="font-semibold text-eza-text mb-1">{test.name}</h4>
                      <p className="text-sm text-eza-text-secondary">{test.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}

// Ana Sayfa Component (Client Component)
export default function TestSuitePage() {
  const [data, setData] = useState<{
    suites: UITestSuite[];
    totalTests: number;
    successRate: number;
    suiteCount: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      setHasError(false);
      
      try {
        const apiData = await fetchComprehensiveTestResults();
        
        if (apiData) {
          const transformed = transformApiDataToUI(apiData);
          setData(transformed);
        } else {
          setHasError(true);
        }
      } catch (error) {
        console.error("Error loading test results:", error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  const suites = data?.suites || [];
  const totalTests = data?.totalTests || 0;
  const successRate = data?.successRate || 0;
  const suiteCount = data?.suiteCount || 0;

  return (
    <>
      {/* Premium Hero Section */}
      <div 
        className="py-24 md:py-32"
        style={{
          background: "linear-gradient(135deg, #f7faff 0%, #eef4ff 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-eza-blue/10 text-eza-blue text-sm font-semibold rounded-full border border-eza-blue/20 mb-6">
                <Icon name="CheckCircle" size={16} />
                Test & Safety Benchmarks
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-eza-text mb-8 leading-tight">
                EZA Test & Safety Benchmarks
              </h1>
              <p className="text-xl md:text-2xl text-eza-text-secondary max-w-4xl mx-auto leading-relaxed mb-12">
                EZA, yapay zekâ güvenliği için dünya standartlarında <strong className="text-eza-text">{isLoading ? "..." : (hasError ? "kapsamlı" : `${totalTests} kapsamlı`)} testten</strong> oluşan çok katmanlı bir değerlendirme ekosistemi sunar.
              </p>
            </div>
          </FadeIn>

          {/* Özet Kartları */}
          <TestSummaryCards 
            totalTests={totalTests} 
            successRate={successRate} 
            suiteCount={suiteCount}
            isLoading={isLoading}
            hasError={hasError}
          />
        </div>
      </div>

      {/* Kurumsal Açıklama */}
      <WhyTestsMatter />

      {/* Test Suite Özeti */}
      <Section className="bg-eza-gray">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-eza-text mb-4 relative pb-4">
                Test Suite Özeti
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-eza-blue to-transparent"></span>
              </h2>
              <p className="text-lg text-eza-text-secondary max-w-2xl mx-auto">
                {suiteCount > 0 ? `${suiteCount} farklı test paketi ile EZA'nın güvenilirliği ve performansı kapsamlı şekilde değerlendirilmektedir.` : "EZA'nın güvenilirliği ve performansı kapsamlı şekilde değerlendirilmektedir."}
              </p>
            </div>
          </FadeIn>

          <TestSuiteGrid suites={suites} isLoading={isLoading} hasError={hasError} />
        </div>
      </Section>

      {/* Regülasyon Uyumluluk Haritası */}
      <RegulationCompliance />

      {/* Test Ekosistemi Mimarisi */}
      <TestEcosystemArchitecture />

      {/* Regülasyon Uyum Matrisi */}
      <ComplianceMatrix />

      {/* Test Frekansı Takvimi */}
      <TestFrequencyCalendar />

      {/* Önemli Başarılar */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-eza-text mb-4 relative pb-4">
                Önemli Başarılar
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-eza-blue to-transparent"></span>
              </h2>
              <p className="text-lg text-eza-text-secondary max-w-2xl mx-auto">
                EZA'nın test süitlerindeki öne çıkan başarıları ve iyileştirmeler.
              </p>
            </div>
          </FadeIn>

          <HighlightAchievements />
        </div>
      </Section>

      {/* Test Frekansı ve Regülasyon */}
      <Section className="bg-eza-gray">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="bg-gradient-to-br from-eza-blue/5 via-white to-eza-blue/5 rounded-2xl p-8 md:p-12 border border-eza-blue/10 shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center">
                  <Icon name="Clock" className="text-eza-blue" size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-eza-text">
                  Test Frekansı ve Regülasyon
                </h2>
              </div>
              
              <div className="space-y-4 text-eza-text-secondary leading-relaxed">
                <p>
                  Testler belirli aralıklarla (örneğin haftalık) ve kritik güncellemelerde otomatik olarak çalıştırılır. 
                  Test sonuçları, regülasyon kurumları ve kurumsal müşteriler için şeffaflık ve güven sağlamayı amaçlar.
                </p>
                <p>
                  Bu test yapısı, <strong className="text-eza-text">AB AI Act</strong>, <strong className="text-eza-text">NIST AI RMF</strong>, 
                  <strong className="text-eza-text"> ISO/IEC 23053</strong> gibi yapay zeka güvenlik standartlarıyla uyumlu denetim süreçlerine 
                  entegre edilebilecek bir altyapı sunar.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Güvenlik Notu */}
      <Section className="bg-eza-gray">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SecurityNote />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
