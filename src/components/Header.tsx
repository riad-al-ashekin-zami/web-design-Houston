import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeaderProps {
  onQuoteClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Houston SEO', href: '#houston-seo-services' },
    { name: 'Web Design', href: '#services' },
    { name: 'Ecommerce', href: '#ecommerce' },
    { name: 'Redesign', href: '#redesign' },
    { name: 'Maintenance', href: '#maintenance' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#local-houston' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-2.5 sm:py-3'
          : 'bg-white/70 backdrop-blur-xs py-3.5 sm:py-4 border-b border-slate-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 xl:px-8">
        <div className="flex items-center justify-between gap-2 lg:gap-3 xl:gap-6">
          {/* Brand Logo & Location Indicator */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 whitespace-nowrap group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg"
            aria-label="Peak SEO & Web Design of Houston"
          >
            {/* Sleek Modern Logo Mark */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/80 flex items-center justify-center shadow-xs text-white group-hover:border-teal-500/60 group-hover:shadow-teal-500/10 transition-all duration-200">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 group-hover:scale-105 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              </svg>
              {/* Subtle top indicator dot */}
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-teal-400 border-2 border-white ring-1 ring-teal-500/30"></span>
            </div>

            {/* Typography */}
            <div className="flex flex-col text-left whitespace-nowrap">
              <div className="text-sm sm:text-base font-extrabold tracking-tight text-slate-900 group-hover:text-teal-950 transition-colors leading-tight whitespace-nowrap flex items-center gap-1">
                <span>Peak SEO</span>
                <span className="text-teal-600 font-semibold">&amp;</span>
                <span>Web Design</span>
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 flex items-center gap-1.5 whitespace-nowrap">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span>Houston, Texas</span>
                <span className="text-slate-300">•</span>
                <span className="text-teal-700 font-medium hidden sm:inline">Local SEO &amp; Design</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-slate-100/80 backdrop-blur-xs p-1 rounded-full border border-slate-200/80 shadow-inner shrink-0"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap px-2.5 xl:px-3 py-1.5 text-[11px] xl:text-xs font-semibold text-slate-600 hover:text-slate-950 hover:bg-white rounded-full transition-all duration-150 hover:shadow-2xs"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Elements */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0 whitespace-nowrap">
            {/* Phone / WhatsApp Link Pill */}
            <a
              href="https://wa.me/8801913241973"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-full text-xs font-semibold text-slate-700 bg-slate-100/70 hover:bg-emerald-50 hover:text-emerald-950 hover:border-emerald-300/80 border border-slate-200/70 shadow-2xs transition-all duration-150 group whitespace-nowrap shrink-0"
              title="Chat or Call on WhatsApp: (713) 555-0198"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Phone className="w-3.5 h-3.5 text-emerald-600 group-hover:scale-110 transition-transform" />
              <span className="whitespace-nowrap tracking-tight">{BUSINESS_INFO.phone}</span>
            </a>

            {/* High-End CTA Quote Button */}
            <button
              id="header-cta-quote-btn"
              onClick={onQuoteClick}
              className="relative inline-flex items-center justify-center gap-1.5 xl:gap-2 px-3 xl:px-4 py-2 xl:py-2.5 rounded-xl text-xs sm:text-xs xl:text-sm font-bold text-white bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 hover:from-slate-800 hover:to-teal-950 active:bg-slate-950 shadow-xs hover:shadow-md hover:ring-2 hover:ring-teal-400/40 transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 group border border-slate-800"
            >
              <Sparkles className="w-3 h-3 text-teal-400 hidden xl:inline" />
              <span className="whitespace-nowrap">Get Your Free SEO and Website Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-teal-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-dropdown"
            className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-200/80 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3.5 py-2.5 text-sm font-semibold text-slate-700 hover:text-teal-800 hover:bg-teal-50/70 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="https://wa.me/8801913241973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-600" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <button
                  id="mobile-dropdown-quote-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onQuoteClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-xs"
                >
                  <span>Get Your Free SEO and Website Quote</span>
                  <ArrowRight className="w-4 h-4 text-teal-400" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
