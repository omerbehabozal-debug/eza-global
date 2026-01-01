"use client";

import { useState, useEffect } from "react";
import Section from "@/app/components/Section";
import FadeIn from "@/app/components/FadeIn";
import Icon from "@/app/components/Icon";

// API Response Interface
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
  last_updated: string;
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

// Format improvement string safely
function formatImprovement(improvement: string | { from?: number; to?: number; change?: number; percentage?: number } | undefined): string | null {
  if (!improvement) return null;
  
  if (typeof improvement === 'string') {
    return improvement;
  }
  
  if (typeof improvement === 'object' && improvement !== null) {
    const from = improvement.from;
    const to = improvement.to;
    const change = improvement.change;
    const percentage = improvement.percentage;
    
    // Format: "from% → to% (change)"
    if (typeof from === 'number' && typeof to === 'number') {
      const changeValue = typeof change === 'number' ? change : (to - from);
      const sign = changeValue >= 0 ? '+' : '';
      return `${from.toFixed(1)}% → ${to.toFixed(1)}% (${sign}${changeValue.toFixed(1)}%)`;
    }
    
    // Fallback to change or percentage
    if (typeof change === 'number') {
      return `${change >= 0 ? '+' : ''}${change.toFixed(1)}%`;
    }
    
    if (typeof percentage === 'number') {
      return `${percentage >= 0 ? '+' : ''}${percentage.toFixed(1)}%`;
    }
  }
  
  return null;
}

// Format details safely
function formatDetails(details: string | string[] | Record<string, any> | undefined): string | null {
  if (!details) return null;
  
  if (typeof details === 'string') {
    return details;
  }
  
  if (Array.isArray(details)) {
    return details
      .filter(item => item != null)
      .map(item => typeof item === 'string' ? item : String(item))
      .join(", ");
  }
  
  if (typeof details === 'object' && details !== null) {
    // Render key-value pairs as rows
    const entries = Object.entries(details)
      .filter(([key, value]) => key != null && value != null)
      .map(([key, value]) => {
        const valueStr = typeof value === 'string' || typeof value === 'number' 
          ? String(value) 
          : Array.isArray(value)
          ? value.join(", ")
          : "—";
        return `${String(key)}: ${valueStr}`;
      });
    
    return entries.length > 0 ? entries.join(" | ") : null;
  }
  
  return null;
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

// Fetch test results
async function fetchTestResults(): Promise<TestResultsResponse | null> {
  try {
    const endpoint = "https://api.ezacore.ai/api/test-results";
    
    const res = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
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

export default function TestSafetyBenchmarksPage() {
  const [data, setData] = useState<TestResultsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    async function loadData() {
      setIsLoading(true);
      setHasError(false);
      
      try {
        const apiData = await fetchTestResults();
        
        if (!isMounted) return;
        
        if (apiData && apiData.overall && apiData.test_suites) {
          setData(apiData);
        } else {
          setHasError(true);
        }
      } catch (error) {
        console.error("Error loading test results:", error);
        if (isMounted) {
          setHasError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadData();
    
    return () => {
      isMounted = false;
    };
  }, []);

  const overall = data?.overall;
  const testSuites = data?.test_suites || [];
  const latestRuns = data?.latest_runs || [];
  const lastUpdated = data?.last_updated;

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
                Continuous Safety & Trust Benchmarks
              </h1>
              <p className="text-xl md:text-2xl text-eza-text-secondary max-w-4xl mx-auto leading-relaxed">
                EZA's ethical intelligence is continuously tested, measured, and verified.
              </p>
            </div>
          </FadeIn>

          {/* Overview Metrics */}
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-eza-text-secondary">Loading benchmark data...</p>
            </div>
          ) : hasError ? (
            <div className="text-center py-12">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-2xl mx-auto">
                <Icon name="AlertCircle" className="text-yellow-600 mx-auto mb-4" size={32} />
                <p className="text-yellow-800 font-semibold mb-2">Unable to load benchmark data</p>
                <p className="text-sm text-yellow-700">Please try again later.</p>
              </div>
            </div>
          ) : overall ? (
            <div className="grid md:grid-cols-4 gap-6">
              <FadeIn delay={100}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <p className="text-sm font-medium text-eza-text-secondary mb-2">Total Runs</p>
                  <p className="text-3xl font-bold text-eza-text">
                    {typeof overall.total_runs === 'number' ? overall.total_runs.toLocaleString() : '—'}
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={200}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <p className="text-sm font-medium text-eza-text-secondary mb-2">Total Tests</p>
                  <p className="text-3xl font-bold text-eza-text">
                    {typeof overall.total_tests === 'number' ? overall.total_tests.toLocaleString() : '—'}
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={300}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <p className="text-sm font-medium text-eza-text-secondary mb-2">Success Rate</p>
                  <p className="text-3xl font-bold text-eza-text">
                    {typeof overall.success_rate === 'number' ? `${overall.success_rate.toFixed(1)}%` : '—'}
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={400}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <p className="text-sm font-medium text-eza-text-secondary mb-2">Last Updated</p>
                  <p className="text-sm font-semibold text-eza-text">
                    {formatDate(lastUpdated)}
                  </p>
                </div>
              </FadeIn>
            </div>
          ) : null}
        </div>
      </div>

      {/* Test Suite Grid */}
      {!isLoading && !hasError && testSuites.length > 0 && (
        <Section className="bg-white">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-eza-text text-center mb-12">
                Test Suites
              </h2>
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
                          <p className="text-xs text-eza-text-secondary mb-1">Details</p>
                          <p className="text-sm text-eza-text-secondary">{detailsText}</p>
                        </div>
                      )}

                      <div className="mt-auto">
                        <div className="mb-4">
                          <p className="text-xs text-eza-text-secondary mb-1">Success Rate</p>
                          <p className={`text-2xl font-bold ${statusColor.text}`}>
                            {typeof suite.success_rate === 'number' ? `${suite.success_rate.toFixed(1)}%` : '—'}
                          </p>
                        </div>

                        {improvementText && (
                          <div className="bg-eza-gray rounded-lg p-3 border border-gray-200">
                            <p className="text-xs text-eza-text-secondary mb-1">Improvement</p>
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
      {!isLoading && !hasError && latestRuns.length > 0 && (
        <Section className="bg-eza-gray">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-eza-text text-center mb-12">
                Latest Test Runs
              </h2>
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
                        <span className="text-sm text-eza-text-secondary">Total</span>
                        <span className="text-sm font-semibold text-eza-text">
                          {typeof run.total === 'number' ? run.total : '—'}
                        </span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-sm text-eza-text-secondary">Passed</span>
                        <span className="text-sm font-semibold text-green-600">
                          {typeof run.passed === 'number' ? run.passed : '—'}
                        </span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-sm text-eza-text-secondary">Failed</span>
                        <span className="text-sm font-semibold text-red-600">
                          {typeof run.failed === 'number' ? run.failed : '—'}
                        </span>
                      </div>
                      
                      <div className="pt-3 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-eza-text">Success Rate</span>
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

