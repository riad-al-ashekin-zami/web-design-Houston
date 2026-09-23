import React, { useState } from 'react';
import {
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  RefreshCw,
  Sliders,
  MoveHorizontal,
  XCircle,
} from 'lucide-react';

interface RedesignSectionProps {
  onQuoteClick: () => void;
}

export const RedesignSection: React.FC<RedesignSectionProps> = ({ onQuoteClick }) => {
  const [viewMode, setViewMode] = useState<'after' | 'before'>('after');

  const painPoints = [
    {
      title: 'Difficult & Cluttered Navigation',
      description: 'Visitors leave when menus are overloaded, confusing, or buried on smaller screens.',
    },
    {
      title: 'Poor Mobile Experience',
      description: 'Unresponsive pinch-and-zoom layouts frustrate mobile users and penalize your search rankings.',
    },
    {
      title: 'Sluggish Page Speeds',
      description: 'Bloated legacy templates and unoptimized assets drive potential customers straight to competitors.',
    },
    {
      title: 'Outdated Visual Identity',
      description: 'An obsolete appearance diminishes your credibility before a client ever reads your value proposition.',
    },
    {
      title: 'Weak Conversion Funnels',
      description: 'Missing or generic contact points make it unnecessarily difficult for Houston prospects to get in touch.',
    },
  ];

  return (
    <section id="redesign" className="py-20 sm:py-28 bg-slate-100/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Pain Points */}
          <div className="lg:col-span-6 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-200/60 inline-block mb-3">
              WEBSITE REDESIGN HOUSTON
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Is Your Website Holding Your Business Back?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              If your website was built years ago, chances are it is quietly losing you potential Houston clients
              every single day. Modern website redesign Houston strategies eliminate friction, revitalize your brand,
              and transform legacy web pages into conversion-focused digital engines.
            </p>

            {/* Pain Points List */}
            <div className="mt-6 space-y-3">
              {painPoints.map((point) => (
                <div
                  key={point.title}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs"
                >
                  <div className="w-5 h-5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{point.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="mt-8">
              <button
                type="button"
                id="redesign-section-cta-btn"
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                <span>Talk About Your Redesign</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Before / After Transformation */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white border border-slate-200/90 shadow-xl overflow-hidden p-5 sm:p-6">
              {/* Comparison Mode Selector */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Interactive Transformation
                </span>
                <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setViewMode('before')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      viewMode === 'before'
                        ? 'bg-rose-100 text-rose-900 shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Outdated Legacy Site
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('after')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      viewMode === 'after'
                        ? 'bg-teal-600 text-white shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Peak Modern Redesign
                  </button>
                </div>
              </div>

              {/* Viewport Simulation */}
              {viewMode === 'before' ? (
                /* Outdated Site UI Mockup */
                <div className="rounded-xl border-2 border-dashed border-rose-200 bg-rose-50/30 p-5 space-y-4 font-serif animate-in fade-in duration-200">
                  <div className="flex items-center justify-between border-b border-rose-200 pb-2">
                    <span className="text-xs font-bold text-rose-800">
                      Houston Business &mdash; 2014 Template
                    </span>
                    <span className="text-[10px] bg-rose-100 text-rose-700 px-2 py-0.5 rounded font-mono">
                      Not Mobile Optimized
                    </span>
                  </div>
                  <div className="bg-slate-200 h-24 rounded flex items-center justify-center text-slate-500 text-xs italic">
                    Low-resolution banner with unreadable overlay text
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[10px] text-slate-600 font-sans">
                    <div className="p-2 bg-white rounded border border-rose-200">
                      Tiny unclickable text links
                    </div>
                    <div className="p-2 bg-white rounded border border-rose-200">
                      Cluttered sidebar menu
                    </div>
                    <div className="p-2 bg-white rounded border border-rose-200">
                      Slow image carousels
                    </div>
                  </div>
                  <div className="p-3 bg-rose-100/70 rounded text-[11px] text-rose-800 font-sans flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>High bounce rates and lost mobile inquiries on smartphones.</span>
                  </div>
                </div>
              ) : (
                /* Peak Redesign Modern UI Mockup */
                <div className="rounded-xl border border-teal-200 bg-gradient-to-b from-white to-slate-50/50 p-5 space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-teal-600 text-white flex items-center justify-center text-[11px] font-bold">
                        P
                      </div>
                      <span className="text-xs font-bold text-slate-900">
                        Peak Redesign Standard
                      </span>
                    </div>
                    <span className="text-[10px] bg-teal-50 text-teal-700 font-semibold px-2 py-0.5 rounded border border-teal-200">
                      100% Mobile Ready
                    </span>
                  </div>

                  <div className="rounded-xl bg-slate-900 p-4 text-white space-y-2">
                    <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">
                      Engineered for Houston Conversions
                    </span>
                    <p className="text-sm font-bold text-white">
                      Clear Value Proposition &amp; Immediate Lead Intake
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-[10px] bg-teal-500 text-white font-semibold px-2.5 py-1 rounded-md">
                        Get Estimate
                      </span>
                      <span className="text-[10px] border border-slate-700 text-slate-300 px-2.5 py-1 rounded-md">
                        Call (713) 555-0198
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-teal-50/60 border border-teal-100 text-teal-900 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                      <span className="text-[11px] font-medium">Preserves Existing SEO Equity</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-teal-50/60 border border-teal-100 text-teal-900 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                      <span className="text-[11px] font-medium">Fast Sub-Second Loading</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Redesign Value Summary */}
              <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 flex items-center justify-between">
                <span>Safe 301 URL redirects protect current rankings</span>
                <span className="font-semibold text-teal-700">Zero Traffic Loss</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
