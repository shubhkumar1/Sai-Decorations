'use client';

import React from 'react';
import Link from 'next/link';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { PACKAGES } from '@/lib/business-data';

export default function PackagesTeaser() {
  return (
    <section className="py-20 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Transparent Pricing"
          title="Popular Event Packages in Ranchi"
          subtitle="Choose a curated package or customize services to fit your specific budget."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.isPopular
                  ? 'bg-gradient-to-b from-amber-950 via-stone-900 to-amber-950 text-white shadow-2xl border-2 border-amber-400 scale-105 z-10'
                  : 'bg-white text-stone-900 shadow-lg border border-amber-500/20 hover:border-amber-400'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 text-xs font-extrabold uppercase tracking-wider shadow-md">
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-4">
                <h3 className={`font-serif text-2xl font-bold ${pkg.isPopular ? 'text-amber-300' : 'text-amber-950'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-xs leading-relaxed ${pkg.isPopular ? 'text-amber-200/80' : 'text-stone-600'}`}>
                  {pkg.subtitle}
                </p>

                <div className="pt-2 pb-4 border-b border-amber-500/20">
                  <span className="text-xs uppercase text-amber-500 font-bold block">Starting From</span>
                  <span className={`font-serif text-3xl font-extrabold ${pkg.isPopular ? 'gold-gradient-text' : 'text-maroon'}`}>
                    {pkg.startingPrice}
                  </span>
                </div>

                <div className="space-y-2">
                  <p className={`text-[11px] font-bold uppercase tracking-wider ${pkg.isPopular ? 'text-amber-300' : 'text-stone-800'}`}>
                    What's Included:
                  </p>
                  <ul className="space-y-2 text-xs">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.isPopular ? 'text-amber-400' : 'text-amber-700'}`} />
                        <span className={pkg.isPopular ? 'text-amber-100/90' : 'text-stone-700'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href={`/quote-builder?package=${pkg.id}`}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all ${
                    pkg.isPopular
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 hover:brightness-110'
                      : 'bg-amber-950 text-amber-300 hover:bg-amber-900 border border-amber-500/30'
                  }`}
                >
                  <Sparkles className="w-4 h-4 fill-current" />
                  <span>Customize & Book Package</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-900 hover:text-amber-700 underline"
          >
            <span>View All Detailed Package Breakdown & Add-ons</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div> */}
      </div>
    </section>
  );
}
