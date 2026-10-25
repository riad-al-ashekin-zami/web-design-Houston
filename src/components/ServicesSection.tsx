import React from 'react';
import {
  Layout,
  RefreshCw,
  Wrench,
  Search,
  ArrowRight,
  CheckCircle2,
  Palette,
  TrendingUp,
} from 'lucide-react';
import { SERVICES } from '../data/content';

interface ServicesSectionProps {
  onSelectService: (serviceAnchor: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'web-design':
        return <Layout className="w-5 h-5 text-teal-600 stroke-[2]" />;
      case 'seo':
        return <Search className="w-5 h-5 text-teal-600 stroke-[2]" />;
      case 'website-optimization':
        return <RefreshCw className="w-5 h-5 text-teal-600 stroke-[2]" />;
      case 'seo-services':
        return <TrendingUp className="w-5 h-5 text-teal-600 stroke-[2]" />;
      case 'web-hosting-seo':
        return <Wrench className="w-5 h-5 text-teal-600 stroke-[2]" />;
      case 'graphic-design':
        return <Palette className="w-5 h-5 text-teal-600 stroke-[2]" />;
      default:
        return <Layout className="w-5 h-5 text-teal-600 stroke-[2]" />;
    }
  };

  const handleScrollToSection = (anchor: string) => {
    const el = document.getElementById(anchor);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      onSelectService(anchor);
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50/50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60 inline-block mb-2.5">
            OUR CORE EXPERTISE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Web Design &amp; SEO Services in Houston
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            High-performance websites, custom graphic design, search optimization, proactive maintenance, and
            local Houston SEO engineered to help your Texas business win online.
          </p>
        </div>

        {/* Compact, Sleek 6-Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative rounded-xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-md hover:border-teal-400/80 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header with compact icon & index badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50/90 border border-teal-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-teal-100/80 transition-transform">
                    {getIcon(service.id)}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    0{index + 1}
                  </span>
                </div>

                {/* Eyebrow & Title */}
                <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block mb-1">
                  {service.eyebrow}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-950 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Compact Feature Tags */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-1.5 text-xs text-slate-600 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleScrollToSection(service.anchor)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-teal-700 transition-colors cursor-pointer"
                >
                  <span>Explore {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-600 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Consultation Banner */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-800 text-white p-6 sm:p-7 border border-slate-700/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400 bg-slate-800/90 px-2.5 py-0.5 rounded border border-slate-700 inline-block mb-2">
              CUSTOM DIGITAL SCOPE
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Need a Tailored Houston SEO &amp; Web Design Package?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              We combine custom web design, conversion optimization, graphic branding, and full local Houston SEO into a unified, transparent scope built around your target revenue milestones.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              const form = document.getElementById('quote-form-container');
              if (form) {
                form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                const firstInput = form.querySelector('input');
                if (firstInput) firstInput.focus();
              }
            }}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <span>Request Custom Scope</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </div>
    </section>
  );
};
