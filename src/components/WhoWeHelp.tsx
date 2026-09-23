import React from 'react';
import {
  Building2,
  Briefcase,
  Wrench,
  ShoppingBag,
  Rocket,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import { WHO_WE_HELP } from '../data/content';

interface WhoWeHelpProps {
  onQuoteClick: () => void;
}

export const WhoWeHelp: React.FC<WhoWeHelpProps> = ({ onQuoteClick }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-teal-600" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-teal-600" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-teal-600" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-teal-600" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-teal-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-teal-600" />;
      default:
        return <Building2 className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="who-we-help" className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-200/60 inline-block mb-3">
            TAILORED INDUSTRY EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Web Design for Houston Businesses
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you are launching a local Houston service, modernizing a commercial practice, or
            scaling an online retail brand, we engineer web solutions built around your audience.
          </p>
        </div>

        {/* 6 Business Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHO_WE_HELP.map((biz) => (
            <div
              key={biz.title}
              className="rounded-2xl bg-white border border-slate-200/90 p-6 hover:border-teal-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(biz.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {biz.tagline}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-900 transition-colors">
                  {biz.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {biz.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onQuoteClick}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-teal-700 transition-colors cursor-pointer"
                >
                  <span>Request a quote for {biz.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
