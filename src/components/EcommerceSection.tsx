import React, { useState } from 'react';
import {
  ShoppingBag,
  CreditCard,
  Truck,
  ShieldCheck,
  Smartphone,
  Search,
  Star,
  ArrowRight,
  Check,
  Plus,
} from 'lucide-react';

interface EcommerceSectionProps {
  onQuoteClick: () => void;
}

export const EcommerceSection: React.FC<EcommerceSectionProps> = ({ onQuoteClick }) => {
  const [cartCount, setCartCount] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<'roast' | 'blend'>('roast');

  const pillars = [
    {
      title: 'Discover Products',
      description: 'Intuitive navigation, faceted search filters, and fast category sorting make finding items effortless.',
      icon: Search,
    },
    {
      title: 'Understand Products',
      description: 'Clear specs, high-resolution media galleries, and customer reviews answer questions before purchase.',
      icon: ShoppingBag,
    },
    {
      title: 'Trust the Business',
      description: 'Visible security certificates, transparent shipping policies, and clear guarantees inspire buyer confidence.',
      icon: ShieldCheck,
    },
    {
      title: 'Checkout Easily',
      description: 'One-page checkout, Apple Pay, Google Pay, and instant guest checkout slash abandoned shopping carts.',
      icon: CreditCard,
    },
    {
      title: 'Browse on Mobile',
      description: 'Over 70% of online shopping happens on phones—our stores offer an app-like mobile purchasing flow.',
      icon: Smartphone,
    },
  ];

  return (
    <section id="ecommerce" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & 5 Pillars */}
          <div className="lg:col-span-6 text-left order-2 lg:order-1">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-200/60 inline-block mb-3">
              ECOMMERCE WEB DESIGN HOUSTON
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Ecommerce Website Design in Houston
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Selling online requires much more than an online catalog. Our specialized ecommerce website
              design Houston solutions remove friction at every step of the customer journey, turning
              first-time browsers into loyal repeat customers for your Houston business.
            </p>

            {/* 5 Customer Journey Pillars */}
            <div className="mt-8 space-y-4">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200/60 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{pillar.title}</h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button
                type="button"
                id="ecommerce-section-cta-btn"
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                <span>Discuss Your Ecommerce Project</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Premium Interactive Ecommerce UI Mockup */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="rounded-2xl bg-slate-900 p-5 sm:p-6 text-white shadow-2xl border border-slate-800">
              {/* Store Mockup Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-500 flex items-center justify-center text-slate-950 font-black text-xs">
                    HTX
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-tight text-white block">
                      Lone Star Artisan Goods
                    </span>
                    <span className="text-[10px] text-teal-400 block">Houston, Texas Roastery</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full text-xs font-medium text-slate-300">
                  <ShoppingBag className="w-3.5 h-3.5 text-teal-400" />
                  <span>Cart ({cartCount})</span>
                </div>
              </div>

              {/* Product Showcase Card */}
              <div className="my-5 p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 bg-teal-950 px-2 py-0.5 rounded border border-teal-800/40">
                      Houston Best Seller
                    </span>
                    <h4 className="text-base font-bold text-white mt-1">
                      {selectedProduct === 'roast'
                        ? 'Heights Espresso Reserve'
                        : 'Montrose Breakfast Roast'}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Small-batch artisan coffee roasted weekly in Houston, TX
                    </p>
                  </div>
                  <span className="text-lg font-extrabold text-teal-300">$18.50</span>
                </div>

                {/* Option Selector */}
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct('roast')}
                    className={`px-3 py-1 text-xs rounded-lg font-medium transition-all ${
                      selectedProduct === 'roast'
                        ? 'bg-teal-500 text-slate-950 font-bold'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    Whole Bean (12oz)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct('blend')}
                    className={`px-3 py-1 text-xs rounded-lg font-medium transition-all ${
                      selectedProduct === 'blend'
                        ? 'bg-teal-500 text-slate-950 font-bold'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    French Press Grind
                  </button>
                </div>

                {/* Interactive Add to Cart & Checkout preview */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setCartCount((prev) => prev + 1)}
                    className="flex-1 py-2.5 px-4 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-teal-400" />
                    <span>Same-day Houston dispatch</span>
                  </div>
                </div>
              </div>

              {/* Frictionless Checkout Micro-Flow */}
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300 font-semibold">
                  <span>Fast 1-Step Checkout Preview</span>
                  <span className="text-emerald-400 font-mono text-[11px]">256-bit SSL</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-slate-400">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="block font-semibold text-slate-200">Apple Pay</span>
                    <span>1-Tap Order</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="block font-semibold text-slate-200">Google Pay</span>
                    <span>Instant Shipping</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="block font-semibold text-slate-200">Credit Card</span>
                    <span>Tokenized Vault</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
