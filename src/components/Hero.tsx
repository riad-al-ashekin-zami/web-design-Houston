import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Laptop,
  Check,
  Send,
  Zap,
} from 'lucide-react';
import { LeadFormData } from '../types';

interface HeroProps {
  onExploreServices: () => void;
  formRef: React.RefObject<HTMLDivElement | null>;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, formRef }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    websiteUrl: '',
    serviceNeeded: 'New Website',
    projectDetails: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const serviceOptions = [
    'New Website',
    'Ecommerce Website',
    'Website Redesign',
    'Website Maintenance',
    'SEO',
    'Other',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) {
      setErrorMessage('Please provide your full name and a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      businessName: '',
      email: '',
      phone: '',
      websiteUrl: '',
      serviceNeeded: 'New Website',
      projectDetails: '',
    });
  };

  const scrollToHeroForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const firstInput = formRef.current.querySelector('input');
      if (firstInput) firstInput.focus();
    }
  };

  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-slate-100/50"
    >
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute -top-32 left-1/4 w-[480px] h-[480px] bg-teal-200/40 rounded-full blur-3xl mix-blend-multiply"></div>
        <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/70 text-teal-800 text-xs font-semibold tracking-wide uppercase mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span>Houston Web Design & SEO</span>
            </div>

            {/* H1 - Exactly one H1 on the page with primary keywords */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Website Design & Development in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-teal-800 to-teal-600">
                Houston, TX
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              High-performance websites designed for Houston businesses — from custom business
              websites and ecommerce stores to website redesigns and ongoing website maintenance.
              We blend sleek modern aesthetics with conversion-first architecture to help Houston
              companies stand out and turn local search traffic into valuable clients.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                id="hero-primary-quote-cta"
                onClick={scrollToHeroForm}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 shadow-md hover:shadow-lg transition-all duration-150 group cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                <span>Get a Free Website Quote</span>
                <ArrowRight className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-secondary-services-cta"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-slate-700 bg-white hover:bg-slate-100/90 active:bg-slate-200 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all duration-150 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                <span>View Our Services</span>
              </button>
            </div>

            {/* Hero Trust Micro-Badges */}
            <div className="pt-6 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  Houston-Based Team
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  Mobile-First Architecture
                </span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  Built for SEO & Conversions
                </span>
              </div>
            </div>

            {/* Local Houston Commitment Pill */}
            <div className="p-4 rounded-xl bg-slate-100/70 border border-slate-200/80 text-xs text-slate-600 flex items-center justify-between">
              <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Now Scheduling Houston Projects
              </span>
              <span className="text-teal-700 font-medium">Fast Turnaround Available</span>
            </div>
          </div>

          {/* Right Column: Hero Lead Generation Form */}
          <div className="lg:col-span-5" ref={formRef} id="quote-form-container">
            <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-xl p-6 sm:p-7 md:p-8 backdrop-blur-md">
              {/* Form Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-1.5">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Get Your Free Website Quote
                  </h2>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-teal-50 text-teal-700 border border-teal-200/50">
                    Fast Response
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Tell us about your project and we&apos;ll recommend the right website solution for
                  your Houston business.
                </p>
              </div>

              {isSubmitted ? (
                /* Submission Confirmation State */
                <div
                  id="lead-submission-success-banner"
                  className="rounded-xl bg-teal-50/80 border border-teal-200 p-6 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200"
                >
                  <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto shadow-xs">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Quote Request Received!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>.
                      Our Houston web design team is reviewing your requirements for{' '}
                      <span className="font-semibold text-slate-900">
                        {formData.businessName || 'your business'}
                      </span>
                      . We&apos;ll be in touch shortly.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="inline-flex items-center justify-center text-xs font-semibold text-teal-700 hover:text-teal-900 underline underline-offset-4 cursor-pointer"
                    >
                      Submit another project request
                    </button>
                  </div>
                </div>
              ) : (
                /* Lead Form */
                <form id="hero-lead-form" onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div
                      id="hero-lead-form-error"
                      className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs font-medium text-rose-700"
                    >
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label
                        htmlFor="hero-fullname-input"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="hero-fullname-input"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="Sarah Jenkins"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-hidden transition-all bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="hero-businessname-input"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="hero-businessname-input"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="Houston Dental Spa"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-hidden transition-all bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label
                        htmlFor="hero-email-input"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="hero-email-input"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="sarah@example.com"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-hidden transition-all bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="hero-phone-input"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="hero-phone-input"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(713) 555-0100"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-hidden transition-all bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="hero-website-input"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Current Website URL (if applicable)
                    </label>
                    <input
                      type="text"
                      id="hero-website-input"
                      name="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={handleInputChange}
                      placeholder="https://yourwebsite.com"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-hidden transition-all bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hero-service-select"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      What do you need?
                    </label>
                    <select
                      id="hero-service-select"
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-hidden transition-all bg-slate-50/50 focus:bg-white text-slate-900 cursor-pointer"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="hero-details-textarea"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Message / Project Details
                    </label>
                    <textarea
                      id="hero-details-textarea"
                      name="projectDetails"
                      rows={3}
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      placeholder="Tell us about your business goals, desired timeline, or features you need..."
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-hidden transition-all bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="hero-lead-submit-btn"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 transition-all duration-150 shadow-md hover:shadow-lg disabled:opacity-70 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-500"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                        <span>Preparing Your Quote...</span>
                      </>
                    ) : (
                      <>
                        <span>Request My Free Quote</span>
                        <Send className="w-4 h-4 text-teal-400" />
                      </>
                    )}
                  </button>

                  {/* Trust Message */}
                  <div className="pt-2 text-center">
                    <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>
                        No obligation. Tell us what you need and we&apos;ll recommend the right
                        solution.
                      </span>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
