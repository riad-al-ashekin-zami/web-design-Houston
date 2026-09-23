import React from 'react';
import { MapPin, TrendingUp, Smartphone, ShieldCheck } from 'lucide-react';
import { TRUST_CARDS } from '../data/content';

export const TrustSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-teal-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-teal-600" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-teal-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-teal-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="trust-section" className="py-14 sm:py-16 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60 inline-block mb-3">
            Local Commitment & Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Web Design for Houston Businesses
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We design, redesign and maintain websites for businesses that want a stronger online
            presence, better user experience and more opportunities to generate leads in the competitive
            Houston market.
          </p>
        </div>

        {/* 4 Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRUST_CARDS.map((card, idx) => (
            <div
              key={card.title}
              id={`trust-card-${idx + 1}`}
              className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-teal-300 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center mb-4 group-hover:scale-105 group-hover:border-teal-200 transition-all">
                  {getIcon(card.iconName)}
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
