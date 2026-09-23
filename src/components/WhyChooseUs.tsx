import React, { useState } from 'react';
import {
  CheckCircle2,
  Sparkles,
  Zap,
  Shield,
  Smartphone,
  Search,
  Gauge,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { WHY_CHOOSE_FEATURES } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile' | 'performance'>('desktop');

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Large Modern Website / Dashboard Visual */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-2 sm:p-3 shadow-2xl border border-slate-700/60 text-white">
              {/* Device Toolbar / View Selector */}
              <div className="px-4 py-3 flex items-center justify-between border-b border-slate-700/60 bg-slate-900/60 rounded-xl mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                    preview.peakseodesign.com
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-lg border border-slate-700/80">
                  <button
                    type="button"
                    onClick={() => setActiveTab('desktop')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                      activeTab === 'desktop'
                        ? 'bg-teal-500 text-white shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Desktop UI
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('mobile')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                      activeTab === 'mobile'
                        ? 'bg-teal-500 text-white shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Mobile View
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('performance')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                      activeTab === 'performance'
                        ? 'bg-teal-500 text-white shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Vitals
                  </button>
                </div>
              </div>

              {/* Dynamic Mockup Viewport */}
              <div className="bg-slate-950/70 rounded-xl p-4 sm:p-6 border border-slate-800 space-y-4">
                {activeTab === 'desktop' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs font-bold">
                          HTX
                        </div>
                        <span className="text-xs font-semibold text-slate-200">
                          Apex Legal Partners Houston
                        </span>
                      </div>
                      <div className="text-[11px] text-teal-400 bg-teal-950/60 px-2.5 py-1 rounded border border-teal-800/40">
                        Houston TX • Downtown
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-400 block">Mobile Inquiries</span>
                        <span className="text-lg font-bold text-white">+48%</span>
                        <span className="text-[9px] text-emerald-400 block mt-0.5">
                          Post-Launch Growth
                        </span>
                      </div>
                      <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-400 block">Avg. Load Time</span>
                        <span className="text-lg font-bold text-teal-300">0.8s</span>
                        <span className="text-[9px] text-teal-400 block mt-0.5">
                          Sub-second response
                        </span>
                      </div>
                      <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-400 block">Google Index</span>
                        <span className="text-lg font-bold text-white">100%</span>
                        <span className="text-[9px] text-emerald-400 block mt-0.5">
                          Clean Schema Verified
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400">
                          <Gauge className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-200">
                            Core Web Vitals Pass Rate
                          </p>
                          <p className="text-[11px] text-slate-400">LCP 1.1s • FID 12ms • CLS 0.00</p>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Optimal
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === 'mobile' && (
                  <div className="max-w-xs mx-auto space-y-3 py-2 animate-in fade-in duration-200">
                    <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                        <span className="font-semibold text-slate-200">Houston Web Agency</span>
                        <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                      </div>
                      <p className="text-xs font-bold text-white">
                        Fast Tap-to-Call & Local Houston Quote Intake
                      </p>
                      <div className="h-10 rounded-lg bg-teal-600 flex items-center justify-center text-xs font-semibold text-white shadow-xs">
                        Call (713) 555-0198
                      </div>
                      <div className="p-2 rounded bg-slate-800/80 text-[10px] text-slate-300">
                        Finger-friendly 48px touch targets & zero horizontal scrolling.
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'performance' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
                        <span className="text-2xl font-bold text-emerald-400">99</span>
                        <p className="text-xs text-slate-300 mt-1">Performance Score</p>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
                        <span className="text-2xl font-bold text-teal-400">100</span>
                        <p className="text-xs text-slate-300 mt-1">SEO Best Practices</p>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-900/60 rounded-xl text-xs text-slate-400 border border-slate-800">
                      Houston businesses gain an edge in local search visibility when their websites load instantly and follow Google&apos;s mobile-first indexing standards.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Why Peak SEO & Web Design Content */}
          <div className="lg:col-span-6 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-200/60 inline-block mb-3">
              WHY PEAK SEO & WEB DESIGN
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              More Than Just a Website
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              A high-performing website must do far more than look attractive on a designer&apos;s screen.
              It must communicate your brand clearly, work flawlessly on mobile, load in the blink of an eye,
              create an effortless user experience, generate consistent leads, and support search visibility
              throughout Houston and beyond.
            </p>

            {/* 4 Feature Items */}
            <div className="mt-8 space-y-5">
              {WHY_CHOOSE_FEATURES.map((item) => (
                <div
                  key={item.number}
                  className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:border-teal-200 transition-colors"
                >
                  <span className="text-xs font-bold font-mono text-teal-700 bg-teal-50 px-2 py-1 rounded-md border border-teal-200/50 shrink-0 mt-0.5">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
