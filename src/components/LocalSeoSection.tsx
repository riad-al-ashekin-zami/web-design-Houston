import React, { useState } from 'react';
import {
  MapPin,
  Store,
  Building2,
  Navigation,
  Globe,
  Cpu,
  TrendingUp,
  FileText,
  ShieldCheck,
  Sparkles,
  Link2,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
  Target,
  Compass,
  Radar,
  Network,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';

interface LocalSeoSectionProps {
  onQuoteClick?: () => void;
}

type FilterMode = 'all' | 'single' | 'multi';

export const LocalSeoSection: React.FC<LocalSeoSectionProps> = ({ onQuoteClick }) => {
  const [filterMode, setFilterMode] = useState<FilterMode>('all');

  // The 13 required SEO Capabilities with tags for Single vs Multi suitability
  const seoCapabilities = [
    {
      id: 'hyper-local',
      title: 'Hyper-Local Relevance & Proximity Signals',
      icon: Radar,
      tag: 'Geo-Grid Precision',
      appliesTo: ['single', 'multi'] as FilterMode[],
      description:
        'Engineer proximity signals so your business ranks at the top of Google Maps when local customers search from nearby neighborhoods across Loop 610 and Beltway 8.',
      houstonSignal: 'Downtown • Heights • Galleria • Katy • Woodlands',
    },
    {
      id: 'local-seo',
      title: 'Local SEO',
      icon: MapPin,
      tag: 'Google 3-Pack Capture',
      appliesTo: ['single', 'multi'] as FilterMode[],
      description:
        'Targeted local search optimization designed to capture high-intent "near me" and Houston-specific queries, converting local searchers into calls and scheduled visits.',
      houstonSignal: 'Harris, Fort Bend & Montgomery County queries',
    },
    {
      id: 'website-seo',
      title: 'Website SEO',
      icon: Globe,
      tag: 'Full-Site Architecture',
      appliesTo: ['single', 'multi'] as FilterMode[],
      description:
        'Holistic website architecture that balances user experience with organic search visibility, establishing clear topical authority across Texas service sectors.',
      houstonSignal: 'Houston service geographic silos & page speed',
    },
    {
      id: 'technical-seo',
      title: 'Technical SEO',
      icon: Cpu,
      tag: 'Core Web Vitals & Speed',
      appliesTo: ['single', 'multi'] as FilterMode[],
      description:
        'Eliminate crawl friction with fast Texas server response, mobile-first indexation, clean XML sitemaps, semantic schema markup, and rapid Core Web Vitals.',
      houstonSignal: 'Sub-second mobile loading on local networks',
    },
    {
      id: 'seo-strategy',
      title: 'SEO Strategy',
      icon: Compass,
      tag: 'Data-Driven Roadmap',
      appliesTo: ['single', 'multi'] as FilterMode[],
      description:
        'Competitive intelligence on top-ranking Houston competitors, uncovering keyword volume gaps, commercial intent search terms, and revenue opportunities.',
      houstonSignal: 'Benchmarked against local Houston industry leaders',
    },
    {
      id: 'content-seo',
      title: 'Content SEO',
      icon: FileText,
      tag: 'Topical Authority',
      appliesTo: ['single', 'multi'] as FilterMode[],
      description:
        'Authoritative service and neighborhood pages crafted with authentic local terminology, answering Houston customer questions and buying criteria.',
      houstonSignal: 'Localized service guides & community context',
    },
    {
      id: 'gbp-seo',
      title: 'Google Business Profile SEO',
      icon: Store,
      tag: 'Map Pack Authority',
      appliesTo: ['single', 'multi'] as FilterMode[],
      description:
        'Complete GBP setup, geo-tagged image coordination, precise category selection, weekly posting schedules, and automated review velocity systems.',
      houstonSignal: 'Direct Google Maps verification & local pack rank',
    },
    {
      id: 'entity-authority',
      title: 'Entity-Driven Authority & Citations',
      icon: Network,
      tag: 'Knowledge Graph',
      appliesTo: ['single', 'multi'] as FilterMode[],
      description:
        'Establish your business as a recognized entity in Google’s Knowledge Graph with 100% consistent NAP across BBB Houston, local chambers, and Texas directories.',
      houstonSignal: 'Houston BBB & regional trade citation consistency',
    },
    {
      id: 'on-page-seo',
      title: 'ON Page SEO',
      icon: Target,
      tag: 'Meta & Heading Silos',
      appliesTo: ['single', 'multi'] as FilterMode[],
      description:
        'Deep on-page tuning covering title tags, meta descriptions, localized H1-H3 structures, Houston neighborhood modifiers, and internal link silos.',
      houstonSignal: 'Houston-specific keywords & conversion triggers',
    },
    {
      id: 'ai-aeo',
      title: 'AI & Answer Engine Optimization',
      icon: Sparkles,
      tag: 'Next-Gen Search',
      appliesTo: ['single', 'multi'] as FilterMode[],
      description:
        'Prepare your brand for generative AI discovery, winning citation prominence in Google AI Overviews, ChatGPT Search, Perplexity AI, and voice assistants.',
      houstonSignal: 'Cited source for Houston service recommendations',
    },
    {
      id: 'off-page-seo',
      title: 'OFF Page SEO',
      icon: TrendingUp,
      tag: 'Brand Prominence',
      appliesTo: ['single', 'multi'] as FilterMode[],
      description:
        'Build real external authority through Houston digital PR, localized brand mentions, neighborhood sponsorships, and authoritative community signals.',
      houstonSignal: 'Greater Houston business network mentions',
    },
    {
      id: 'seo-audits',
      title: 'Comprehensive SEO Audits',
      icon: ClipboardCheck,
      tag: '150-Point Diagnostic',
      appliesTo: ['single', 'multi'] as FilterMode[],
      description:
        'Rigorous 150+ point diagnostic uncovering technical bottlenecks, toxic link risks, indexation issues, and untapped revenue keywords.',
      houstonSignal: 'Action plan tailored to Greater Houston benchmarks',
    },
    {
      id: 'high-quality-backlinks',
      title: 'High Quality Backlink',
      icon: Link2,
      tag: 'Authority Links',
      appliesTo: ['single', 'multi'] as FilterMode[],
      description:
        'White-hat editorial link acquisition from legitimate Texas news publications, regional industry associations, and niche-relevant high-DA properties.',
      houstonSignal: 'Texas publications & niche authority backlinks',
    },
  ];

  const displayedCapabilities = seoCapabilities.filter((item) => {
    if (filterMode === 'all') return true;
    return item.appliesTo.includes(filterMode);
  });

  return (
    <section
      id="houston-seo-services"
      className="py-10 sm:py-12 bg-gradient-to-b from-white via-slate-50/70 to-white border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Header & Business Structure Toggle in ONE Row/Stack */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-slate-200/70">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold tracking-wide uppercase mb-2.5">
              <MapPin className="w-3.5 h-3.5 text-teal-600" />
              <span>Houston Local SEO &amp; Search Authority</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              SEO Services for Single &amp; Multi Location Businesses
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Hyper-local ranking signals, Google Maps 3-Pack authority, and full-spectrum search optimization 
              customized for local Houston practices, contractors, and regional multi-unit enterprises.
            </p>
          </div>

          {/* Compact Business Structure & View Switcher */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 shrink-0">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-teal-600" />
              <span>Business Mode:</span>
            </span>
            <div className="inline-flex bg-slate-200/80 p-1 rounded-xl border border-slate-300/80 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setFilterMode('all')}
                className={`px-3 py-1.5 rounded-lg transition-all duration-150 cursor-pointer ${
                  filterMode === 'all'
                    ? 'bg-white text-slate-900 font-bold shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All 13 Pillars
              </button>
              <button
                type="button"
                onClick={() => setFilterMode('single')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-150 cursor-pointer ${
                  filterMode === 'single'
                    ? 'bg-white text-teal-900 font-bold shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Store className="w-3.5 h-3.5 text-teal-600" />
                <span>Single Location</span>
              </button>
              <button
                type="button"
                onClick={() => setFilterMode('multi')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-150 cursor-pointer ${
                  filterMode === 'multi'
                    ? 'bg-white text-blue-900 font-bold shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Multi Location</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Compact Architecture Banner based on Selection */}
        {filterMode === 'single' ? (
          <div className="mb-6 p-4 rounded-xl bg-teal-50/80 border border-teal-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in duration-150">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-teal-950">
                  Single Location Business Architecture (3–10 Mile Proximity Domination)
                </h3>
                <p className="text-xs text-teal-800/90 mt-0.5">
                  Optimized for storefronts, dental/medical practices, legal firms, and local trades to capture Google Maps 3-Pack and direct mobile phone calls.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onQuoteClick}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shrink-0 self-start sm:self-auto transition-colors cursor-pointer"
            >
              <span>Single Location Plan</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : filterMode === 'multi' ? (
          <div className="mb-6 p-4 rounded-xl bg-blue-50/80 border border-blue-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in duration-150">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-blue-950">
                  Multi Location Business Architecture (Greater Houston Regional Scale)
                </h3>
                <p className="text-xs text-blue-800/90 mt-0.5">
                  Designed for multi-clinic healthcare, franchises, and regional service fleets across Downtown, Katy, Sugar Land, Spring, and The Woodlands.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onQuoteClick}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shrink-0 self-start sm:self-auto transition-colors cursor-pointer"
            >
              <span>Multi-Location Plan</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between gap-3 hover:border-teal-300 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center shrink-0">
                  <Store className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Single Location Business</h4>
                  <p className="text-2xs text-slate-500">Google 3-Pack, neighborhood geo-grids, review velocity &amp; local click-to-call.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setFilterMode('single')}
                className="text-2xs font-bold text-teal-700 hover:text-teal-900 bg-teal-50 px-2.5 py-1 rounded-md shrink-0 cursor-pointer"
              >
                View Focus →
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between gap-3 hover:border-blue-300 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Multi Location Business</h4>
                  <p className="text-2xs text-slate-500">Multi-GBP bulk sync, dedicated submarket landing pages &amp; anti-cannibalization.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setFilterMode('multi')}
                className="text-2xs font-bold text-blue-700 hover:text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md shrink-0 cursor-pointer"
              >
                View Focus →
              </button>
            </div>
          </div>
        )}

        {/* The 13 Core SEO Services Grid (Compact & Space-Efficient) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
          {displayedCapabilities.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-2xs hover:border-teal-400 hover:shadow-xs transition-all duration-150 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/60 truncate max-w-[130px]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-900 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500">
                  <MapPin className="w-3 h-3 text-teal-600 shrink-0" />
                  <span className="truncate">{item.houstonSignal}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Bottom Houston Vibe & CTA Bar */}
        <div className="mt-6 p-4 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-300">
            <span className="inline-flex items-center gap-1.5 font-semibold text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Houston Proximity Grid:
            </span>
            <span className="bg-slate-800 px-2.5 py-1 rounded-md text-slate-300 border border-slate-700/80">
              Loop 610 • Beltway 8 • Hwy 99
            </span>
            <span className="bg-slate-800 px-2.5 py-1 rounded-md text-slate-300 border border-slate-700/80">
              Harris, Fort Bend &amp; Montgomery
            </span>
            <span className="bg-slate-800 px-2.5 py-1 rounded-md text-slate-300 border border-slate-700/80 hidden sm:inline-block">
              Downtown • Heights • Katy • Woodlands
            </span>
          </div>

          <button
            type="button"
            onClick={onQuoteClick}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <span>Get Houston SEO Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
