import React, { useRef } from 'react';
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
