import React from 'react';
import { ArrowRight, PhoneCall, Sparkles, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface FinalCtaProps {
  onQuoteClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onQuoteClick }) => {
  return (
    <section id="final-cta" className="relative py-24 sm:py-32 bg-slate-900 text-white overflow-hidden">
      {/* Abstract Website UI Glow & Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="final-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#final-grid)" />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Abstract UI Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-teal-400 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Houston Web Design &amp; Digital Solutions</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Ready for a Better Website?
        </h2>

        {/* Copy */}
        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Tell us about your business and what you want your website to accomplish. We&apos;ll help you
          identify the right next step.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            id="final-cta-quote-btn"
            onClick={onQuoteClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 active:bg-teal-500 shadow-xl transition-all cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          <a
            href="tel:7135550198"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-slate-800 hover:bg-slate-700/80 active:bg-slate-800 border border-slate-700 shadow-sm transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-400"
          >
            <PhoneCall className="w-4 h-4 text-teal-400" />
            <span>Contact Us: {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        {/* Trust Reminder */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-teal-400" />
          <span>No obligation • Transparent recommendations tailored to your goals</span>
        </div>
      </div>
    </section>
  );
};
