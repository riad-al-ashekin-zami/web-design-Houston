import React from 'react';
import { Check } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-200/60 inline-block mb-3">
            HOW WE WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Simple Web Design Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A structured, transparent workflow designed to take your Houston business from initial concept
            to a published, lead-generating website with complete clarity.
          </p>
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              id={`process-step-${idx + 1}`}
              className="relative rounded-2xl bg-slate-50/70 border border-slate-200/80 p-6 flex flex-col justify-between hover:bg-white hover:border-teal-300 hover:shadow-lg transition-all duration-200 group"
            >
              <div>
                {/* Number & Progress Line Indicator */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black font-mono text-teal-600 group-hover:scale-110 transition-transform">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-950 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-slate-200/60 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Key Deliverables:
                  </span>
                  {step.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
