import React, { useRef, useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { RedesignSection } from './components/RedesignSection';
import { EcommerceSection } from './components/EcommerceSection';
import { MaintenanceSection } from './components/MaintenanceSection';
import { ProcessSection } from './components/ProcessSection';
import { WhoWeHelp } from './components/WhoWeHelp';
import { LocalHoustonSection } from './components/LocalHoustonSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

export default function App() {
  const formRef = useRef<HTMLDivElement>(null);
  const [isBlocked, setIsBlocked] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      if ((window as any).__IS_GEO_BLOCKED__) return true;
      try {
        const cached = sessionStorage.getItem('geo_country_code');
        return cached === 'IN' || cached === 'PK';
      } catch (e) {
        return false;
      }
    }
    return false;
  });

  useEffect(() => {
    const handleBlockedEvent = () => setIsBlocked(true);
    window.addEventListener('geo-blocked', handleBlockedEvent);

    // Defense-in-depth IP-based geolocation check
    try {
      const cached = sessionStorage.getItem('geo_country_code');
      if (!cached) {
        fetch('https://api.country.is/')
          .then((res) => (res.ok ? res.json() : null))
          .then((data) => {
            if (data?.country) {
              const code = data.country.toUpperCase().trim();
              sessionStorage.setItem('geo_country_code', code);
              if (code === 'IN' || code === 'PK') {
                setIsBlocked(true);
              }
            }
          })
          .catch(() => {
            fetch('https://www.cloudflare.com/cdn-cgi/trace')
              .then((res) => res.text())
              .then((text) => {
                const match = text.match(/loc=([A-Z]{2})/i);
                if (match && match[1]) {
                  const code = match[1].toUpperCase().trim();
                  sessionStorage.setItem('geo_country_code', code);
                  if (code === 'IN' || code === 'PK') {
                    setIsBlocked(true);
                  }
                }
              })
              .catch(() => {});
          });
      }
    } catch (e) {}

    return () => {
      window.removeEventListener('geo-blocked', handleBlockedEvent);
    };
  }, []);

  if (isBlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900 px-6 py-12 text-center">
        <div className="max-w-lg w-full bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="w-13 h-13 mx-auto mb-5 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
            </svg>
          </div>
          <h1 className="text-xl md:text-2xl font-semibold text-slate-800 leading-snug">
            Access to this website is not available in your region.
          </h1>
        </div>
      </div>
    );
  }

  const handleScrollToQuoteForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const firstInput = formRef.current.querySelector('input');
      if (firstInput) {
        firstInput.focus();
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      const top = servicesElement.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleSelectServiceAnchor = (anchor: string) => {
    const el = document.getElementById(anchor);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-500 selection:text-white">
      {/* Sticky Header */}
      <Header onQuoteClick={handleScrollToQuoteForm} />

      {/* Main One-Page Content */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section & Lead Form */}
        <Hero onExploreServices={handleExploreServices} formRef={formRef} />

        {/* 2. Compact Trust / Local Houston Section */}
        <TrustSection />

        {/* 3. Services Section */}
        <ServicesSection onSelectService={handleSelectServiceAnchor} />

        {/* 4. Why Peak SEO & Web Design (Split Layout) */}
        <WhyChooseUs />

        {/* 5. Website Redesign Houston Section */}
        <RedesignSection onQuoteClick={handleScrollToQuoteForm} />

        {/* 6. Ecommerce Website Design Houston Section */}
        <EcommerceSection onQuoteClick={handleScrollToQuoteForm} />

        {/* 7. Website Maintenance Houston (Dark Navy Section) */}
        <MaintenanceSection onQuoteClick={handleScrollToQuoteForm} />

        {/* 8. Process Timeline Section */}
        <ProcessSection />

        {/* 9. Who We Help Section */}
        <WhoWeHelp onQuoteClick={handleScrollToQuoteForm} />

        {/* 10. Local Houston Geographic & GBP Alignment Section */}
        <LocalHoustonSection onQuoteClick={handleScrollToQuoteForm} />

        {/* 11. FAQ Accordion Section */}
        <FaqSection onQuoteClick={handleScrollToQuoteForm} />

        {/* 12. Final CTA (Dark Navy) */}
        <FinalCta onQuoteClick={handleScrollToQuoteForm} />
      </main>

      {/* Sticky Quick Contact Bar for Mobile Devices */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-40">
        <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl p-2.5 shadow-2xl border border-slate-700/80 flex items-center justify-between gap-2">
          <a
            href="tel:7135550198"
            className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 text-white font-semibold text-xs text-center border border-slate-700 hover:bg-slate-750"
          >
            Call (713) 555-0198
          </a>
          <button
            type="button"
            onClick={handleScrollToQuoteForm}
            className="flex-1 py-2.5 px-3 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs text-center shadow-xs hover:bg-teal-400"
          >
            Get Free Quote
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer onQuoteClick={handleScrollToQuoteForm} />
    </div>
  );
}
