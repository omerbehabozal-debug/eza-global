"use client";

import { useEffect, useState } from "react";
import Section from "@/app/components/Section";
import FadeIn from "@/app/components/FadeIn";
import Icon from "@/app/components/Icon";
import { formatImprovement, formatDetails } from "@/lib/formatUtils";

// localStorage keys
const STORAGE_DATA_KEY = "eza_test_snapshot_data";
const STORAGE_TIMESTAMP_KEY = "eza_test_snapshot_timestamp";

// 15 days in milliseconds
const CACHE_DURATION_MS = 1000 * 60 * 60 * 24 * 15;

// API Response Interface - Snapshot-based public API
interface TestResultsResponse {
  overall: {
    total_runs: number;
    total_tests: number;
    success_rate: number;
    success_count?: number;
    failure_count?: number;
  };
  test_suites: TestSuite[];
  latest_runs?: LatestRun[];
  improvements?: Record<string, any>;
  generated_at: string; // Snapshot generation timestamp
  period?: string; // e.g., "daily"
}

interface TestSuite {
  name: string;
  description?: string;
  success_rate: number;
  status: "pass" | "warning" | "fail" | "success";
  improvement?: string | {
    from?: number;
    to?: number;
    change?: number;
    percentage?: number;
  };
  details?: string | string[] | Record<string, any>;
}

interface LatestRun {
  timestamp: string;
  total: number;
  passed: number;
  failed: number;
  success_rate: number;
}

// Format date safely
function formatDate(dateString: string | undefined): string {
  if (!dateString) return "N/A";
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    
    return new Intl.DateTimeFormat('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  } catch {
    return dateString;
  }
}

// Fetch snapshot-based test results from API
async function fetchTestResultsFromAPI(): Promise<TestResultsResponse | null> {
  try {
    const endpoint = "https://api.ezacore.ai/api/public/test-safety-benchmarks?period=daily";
    
    const res = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      const data = await res.json();
      return data as TestResultsResponse;
    } else {
      console.error(`API returned status ${res.status}`);
      return null;
    }
  } catch (error) {
    console.error("API fetch error:", error);
    return null;
  }
}

// Get cached data from localStorage
function getCachedData(): { data: TestResultsResponse | null; timestamp: number | null } {
  if (typeof window === "undefined") {
    return { data: null, timestamp: null };
  }

  try {
    const cachedData = localStorage.getItem(STORAGE_DATA_KEY);
    const cachedTimestamp = localStorage.getItem(STORAGE_TIMESTAMP_KEY);

    if (cachedData && cachedTimestamp) {
      const data = JSON.parse(cachedData) as TestResultsResponse;
      const timestamp = parseInt(cachedTimestamp, 10);
      return { data, timestamp };
    }
  } catch (error) {
    console.error("Error reading from localStorage:", error);
  }

  return { data: null, timestamp: null };
}

// Save data to localStorage
function saveToCache(data: TestResultsResponse): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(data));
    localStorage.setItem(STORAGE_TIMESTAMP_KEY, Date.now().toString());
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
}

// Check if cache is still valid (less than 15 days old)
function isCacheValid(timestamp: number | null): boolean {
  if (timestamp === null) {
    return false;
  }

  const now = Date.now();
  const age = now - timestamp;
  return age < CACHE_DURATION_MS;
}

export default function TestSafetyBenchmarksPage() {
  const [data, setData] = useState<TestResultsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      setHasError(false);

      // Check localStorage first
      const { data: cachedData, timestamp } = getCachedData();

      if (cachedData && isCacheValid(timestamp)) {
        // Use cached data, no API call needed
        setData(cachedData);
        setIsLoading(false);
        return;
      }

      // Cache is invalid or doesn't exist, fetch from API
      const apiData = await fetchTestResultsFromAPI();

      if (apiData) {
        // Save to cache
        saveToCache(apiData);
        setData(apiData);
        setHasError(false);
      } else {
        // API failed, try to use stale cache if available
        if (cachedData) {
          setData(cachedData);
          setHasError(false);
        } else {
          setHasError(true);
        }
      }

      setIsLoading(false);
    }

    loadData();
  }, []);

  const overall = data?.overall;
  const testSuites = data?.test_suites || [];
  const latestRuns = data?.latest_runs || [];
  const generatedAt = data?.generated_at;

  return (
    <>
      {/* Hero Section */}
      <div 
        className="py-24 md:py-32"
        style={{
          background: "linear-gradient(135deg, #f7faff 0%, #eef4ff 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-eza-text mb-6 leading-tight">
                Test ve Güvenlik Karşılaştırmaları
              </h1>
              <p className="text-xl md:text-2xl text-eza-text-secondary max-w-4xl mx-auto leading-relaxed mb-4">
                EZA'nın etik zekası sürekli olarak test edilir, ölçülür ve doğrulanır.
              </p>
              <p className="text-base text-eza-text-secondary/80 max-w-3xl mx-auto italic">
                Bu veriler periyodik olarak yayınlanır, anlık değildir.
              </p>
            </div>
          </FadeIn>

          {/* Overview Metrics */}
          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
                  <div className="h-10 bg-gray-200 rounded w-32"></div>
                </div>
              ))}
            </div>
          ) : hasError && !data ? (
            <div className="text-center py-12">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-2xl mx-auto">
                <Icon name="Info" className="text-blue-600 mx-auto mb-4" size={32} />
                <p className="text-blue-800 font-semibold mb-2">Veriler güncelleniyor</p>
                <p className="text-sm text-blue-700">Lütfen daha sonra tekrar deneyin.</p>
              </div>
            </div>
          ) : overall ? (
            <div className="grid md:grid-cols-3 gap-6">
              <FadeIn delay={100}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <p className="text-sm font-medium text-eza-text-secondary mb-2">Toplam Test</p>
                  <p className="text-3xl font-bold text-eza-text">
                    {typeof overall.total_tests === 'number' ? overall.total_tests.toLocaleString() : '—'}
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={200}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <p className="text-sm font-medium text-eza-text-secondary mb-2">Genel Başarı Oranı</p>
                  <p className="text-3xl font-bold text-eza-text">
                    {typeof overall.success_rate === 'number' ? `${overall.success_rate.toFixed(1)}%` : '—'}
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={300}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <p className="text-sm font-medium text-eza-text-secondary mb-2">Test Suite Sayısı</p>
                  <p className="text-3xl font-bold text-eza-text">
                    {testSuites.length > 0 ? testSuites.length.toLocaleString() : '—'}
                  </p>
                </div>
              </FadeIn>
            </div>
          ) : null}
        </div>
      </div>

      {/* Test Suite Grid */}
      {data && testSuites.length > 0 && (
        <Section className="bg-white">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-eza-text mb-4">
                  Test Paketleri
                </h2>
                {generatedAt && (
                  <p className="text-sm text-eza-text-secondary/70 italic">
                    Veri oluşturulma zamanı: {formatDate(generatedAt)}
                  </p>
                )}
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testSuites.map((suite, index) => {
                const improvementText = formatImprovement(suite.improvement);
                const detailsText = formatDetails(suite.details);
                const statusColor = suite.success_rate >= 90 
                  ? { bg: "bg-green-100", text: "text-green-700", border: "border-green-200" }
                  : suite.success_rate >= 80
                  ? { bg: "bg-yellow-100", text: "text-yellow-700", border: "border-yellow-200" }
                  : { bg: "bg-red-100", text: "text-red-700", border: "border-red-200" };

                return (
                  <FadeIn key={typeof suite.name === 'string' ? suite.name : index} delay={index * 50}>
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-eza-text mb-2">
                            {typeof suite.name === 'string' ? suite.name : 'Unnamed Suite'}
                          </h3>
                          <div className={`inline-flex items-center gap-2 px-3 py-1 ${statusColor.bg} ${statusColor.text} text-xs font-semibold rounded-full border ${statusColor.border}`}>
                            <Icon 
                              name={typeof suite.success_rate === 'number' && suite.success_rate >= 90 ? "CheckCircle" : typeof suite.success_rate === 'number' && suite.success_rate >= 80 ? "AlertTriangle" : "XCircle"} 
                              size={14} 
                            />
                            {typeof suite.status === 'string' ? suite.status.toUpperCase() : 'UNKNOWN'}
                          </div>
                        </div>
                      </div>

                      {typeof suite.description === 'string' && suite.description && (
                        <p className="text-sm text-eza-text-secondary mb-4 flex-1">
                          {suite.description}
                        </p>
                      )}

                      {detailsText && (
                        <div className="mb-4">
                          <p className="text-xs text-eza-text-secondary mb-1">Detaylar</p>
                          <p className="text-sm text-eza-text-secondary">{detailsText}</p>
                        </div>
                      )}

                      <div className="mt-auto">
                        <div className="mb-4">
                          <p className="text-xs text-eza-text-secondary mb-1">Başarı Oranı</p>
                          <p className={`text-2xl font-bold ${statusColor.text}`}>
                            {typeof suite.success_rate === 'number' ? `${suite.success_rate.toFixed(1)}%` : '—'}
                          </p>
                        </div>

                        {improvementText && (
                          <div className="bg-eza-gray rounded-lg p-3 border border-gray-200">
                            <p className="text-xs text-eza-text-secondary mb-1">İyileşme</p>
                            <p className="text-sm font-semibold text-eza-text">{improvementText}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </Section>
      )}

      {/* Latest Runs Section */}
      {data && latestRuns.length > 0 && (
        <Section className="bg-eza-gray">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-eza-text mb-4">
                  Son Test Çalıştırmaları
                </h2>
                <p className="text-sm text-eza-text-secondary/70 italic">
                  Bu veriler snapshot bazlıdır ve periyodik olarak güncellenir.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {latestRuns.slice(0, 3).map((run, index) => (
                <FadeIn key={run.timestamp || index} delay={index * 100}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                    <p className="text-xs text-eza-text-secondary mb-4">
                      {formatDate(run.timestamp)}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-eza-text-secondary">Toplam</span>
                        <span className="text-sm font-semibold text-eza-text">
                          {typeof run.total === 'number' ? run.total : '—'}
                        </span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-sm text-eza-text-secondary">Başarılı</span>
                        <span className="text-sm font-semibold text-green-600">
                          {typeof run.passed === 'number' ? run.passed : '—'}
                        </span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-sm text-eza-text-secondary">Başarısız</span>
                        <span className="text-sm font-semibold text-red-600">
                          {typeof run.failed === 'number' ? run.failed : '—'}
                        </span>
                      </div>
                      
                      <div className="pt-3 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-eza-text">Başarı Oranı</span>
                          <span className="text-lg font-bold text-eza-text">
                            {typeof run.success_rate === 'number' ? `${run.success_rate.toFixed(1)}%` : '—'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}

