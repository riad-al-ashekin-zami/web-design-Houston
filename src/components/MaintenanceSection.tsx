import React from 'react';
import {
  ShieldAlert,
  CloudUpload,
  RefreshCw,
  Gauge,
  ArrowRight,
  CheckCircle2,
  Lock,
  Clock,
} from 'lucide-react';

interface MaintenanceSectionProps {
  onQuoteClick: () => void;
}

export const MaintenanceSection: React.FC<MaintenanceSectionProps> = ({ onQuoteClick }) => {
  const cards = [
    {
      title: 'Website Updates',
      description:
        'Regular software patches, framework releases, plugin checks, and content adjustments to ensure zero downtime.',
      icon: RefreshCw,
      tag: 'Proactive',
    },
    {
      title: 'Security & Monitoring',
      description:
        'Continuous uptime tracking, firewall monitoring, SSL validation, and malware prevention to safeguard your data.',
      icon: Lock,
      tag: '24/7 Monitored',
    },
    {
      title: 'Reliable Cloud Backups',
      description:
        'Scheduled off-site automated backups with fast disaster recovery protocols so your site is always protected.',
      icon: CloudUpload,
      tag: 'Off-site Cloud',
    },
    {
      title: 'Performance Optimization',
      description:
        'Ongoing Core Web Vitals audits, image asset compression, database cleanup, and speed tuning as your content expands.',
      icon: Gauge,
      tag: 'Speed Tuning',
    },
  ];

  return (
    <section id="maintenance" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-3 py-1 rounded-md border border-teal-800/60 inline-block mb-3">
            ONGOING PROTECTION & SUPPORT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Website Maintenance Houston
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Your website needs more than a launch. Keep it updated, secure, optimized and ready for your
            customers with ongoing website maintenance and support provided by Houston professionals.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-2xl bg-slate-800/80 border border-slate-700/80 p-6 flex flex-col justify-between hover:border-teal-500/60 hover:bg-slate-800 transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider bg-slate-900 text-teal-300 px-2 py-0.5 rounded border border-slate-700">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Maintenance CTA Box */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-800 via-slate-800/90 to-slate-800/80 border border-slate-700 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-xl font-bold text-white">
              Need Reliable Houston Website Maintenance?
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              Prevent security breaches, broken forms, and slow loading pages with our proactive monthly care plans.
            </p>
          </div>
          <button
            type="button"
            id="maintenance-cta-btn"
            onClick={onQuoteClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-900 bg-teal-400 hover:bg-teal-300 active:bg-teal-500 shadow-md transition-all shrink-0 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Get Website Support</span>
            <ArrowRight className="w-4 h-4 text-slate-900" />
          </button>
        </div>
      </div>
    </section>
  );
};
