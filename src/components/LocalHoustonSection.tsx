import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface LocalHoustonSectionProps {
  onQuoteClick: () => void;
}

export const LocalHoustonSection: React.FC<LocalHoustonSectionProps> = ({ onQuoteClick }) => {
  const hubs = [
    { name: 'Downtown Houston', tag: 'Commercial Core' },
    { name: 'Galleria / Uptown', tag: 'Retail & Corporate' },
    { name: 'Energy Corridor', tag: 'Enterprise & Tech' },
    { name: 'The Heights', tag: 'Local Boutiques & Dining' },
    { name: 'Montrose & Midtown', tag: 'Creative & Services' },
    { name: 'Greater Houston Area', tag: 'Katy, Woodlands, Sugar Land' },
  ];

  return (
    <section id="local-houston" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Local Copy & NAP Details */}
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-200/60 inline-block mb-3">
              HOUSTON, TEXAS PRESENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Serving Businesses in Houston, Texas
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Peak SEO &amp; Web Design of Houston partners with local entrepreneurs, established companies,
              and fast-growing brands across Houston, Texas. We understand the local Texas market dynamics,
              what Houston consumers expect when searching online, and how to create digital platforms that
              stand out in our competitive business community.
            </p>

            {/* Consistent Verified NAP Card (Google Business Profile Alignment) */}
            <div className="mt-8 p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Business Information
                </span>
                <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                  Verified Local Agency
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">{BUSINESS_INFO.name}</strong>
                    <span>Houston, Texas</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Phone</strong>
                    <a href="tel:7135550198" className="hover:text-teal-700 font-medium">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Email Contact</strong>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-teal-700">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Office Hours</strong>
                    <span>{BUSINESS_INFO.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button
                type="button"
                id="local-houston-cta-btn"
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                <span>Start Your Houston Website Project</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Stylized Houston Map Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-800 p-6 text-white border border-slate-700/80 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block">
                    Houston, TX Service Hub
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5">
                    Local Geographic Focus
                  </h3>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  29.7604° N, 95.3698° W
                </span>
              </div>

              {/* Stylized Node Map Representation */}
              <div className="relative bg-slate-950/70 rounded-xl p-5 border border-slate-800 space-y-3">
                {/* Visual SVG Map Mesh */}
                <div className="w-full h-44 rounded-lg bg-slate-900/90 relative overflow-hidden flex items-center justify-center border border-slate-800">
                  <svg
                    className="absolute inset-0 w-full h-full text-slate-800/60"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                        <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>

                  {/* Radiating Radar Ring & Core Houston Pin */}
                  <div className="relative flex flex-col items-center z-10">
                    <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center animate-ping absolute"></div>
                    <div className="w-10 h-10 rounded-full bg-teal-500/30 flex items-center justify-center relative shadow-lg border border-teal-400">
                      <MapPin className="w-5 h-5 text-teal-300 stroke-[2.5]" />
                    </div>
                    <span className="mt-2 text-xs font-bold text-white tracking-wide bg-slate-900/90 px-2.5 py-0.5 rounded-full border border-slate-700 shadow-md">
                      Houston, Texas
                    </span>
                  </div>

                  {/* Surrounding Connected Node Pills */}
                  <div className="absolute top-3 left-4 text-[10px] font-medium text-slate-300 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
                    The Heights
                  </div>
                  <div className="absolute bottom-4 left-6 text-[10px] font-medium text-slate-300 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
                    Sugar Land
                  </div>
                  <div className="absolute top-4 right-4 text-[10px] font-medium text-slate-300 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
                    Woodlands
                  </div>
                  <div className="absolute bottom-4 right-6 text-[10px] font-medium text-slate-300 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
                    Downtown
                  </div>
                </div>

                {/* Hubs Micro-Grid */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {hubs.map((hub) => (
                    <div
                      key={hub.name}
                      className="p-2 rounded-lg bg-slate-900/80 border border-slate-800/80 text-left"
                    >
                      <span className="text-xs font-semibold text-slate-200 block truncate">
                        {hub.name}
                      </span>
                      <span className="text-[10px] text-teal-400 block truncate">{hub.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
