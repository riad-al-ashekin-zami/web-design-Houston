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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Location Indicator */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg"
            aria-label="Peak SEO & Web Design of Houston"
          >
            {/* Sleek Modern Logo Mark */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-xs text-white group-hover:border-teal-500/60 transition-colors">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400"
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
            <div className="flex flex-col text-left">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-slate-900 group-hover:text-teal-950 transition-colors leading-snug">
                Peak SEO <span className="text-teal-600 font-semibold">&amp;</span> Web Design
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Houston, Texas</span>
                <span className="text-slate-300">•</span>
                <span className="text-teal-700 font-medium hidden xs:inline">Web &amp; SEO Agency</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-slate-100/60 p-1 rounded-full border border-slate-200/60 shadow-2xs" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 hover:bg-white rounded-full transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Elements */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Phone Link Pill */}
            <a
              href="tel:7135550198"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-colors border border-transparent hover:border-slate-200"
              title="Call Peak SEO & Web Design of Houston"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            {/* High-End CTA Quote Button */}
            <button
              id="header-cta-quote-btn"
              onClick={onQuoteClick}
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 shadow-xs hover:shadow-md hover:ring-2 hover:ring-teal-400/50 transition-all duration-150 cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
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
                  href="tel:7135550198"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-xl"
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
                  <span>Get Your Free Website Quote</span>
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
