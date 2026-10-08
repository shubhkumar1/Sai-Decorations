'use client';

import React from 'react';
import Link from 'next/link';
import { Calculator, Phone, Calendar, Sparkles } from 'lucide-react';
import { SITE_SETTINGS } from '@/lib/business-data';

export default function FinalCtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 text-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>Lock Your Preferred Event Dates</span>
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
          Ready to Host a <span className="gold-gradient-text">Royal Event</span> in Ranchi?
        </h2>

        <p className="text-sm sm:text-base text-amber-100/90 max-w-2xl mx-auto leading-relaxed font-sans">
          Contact Sai Decorations today for a free on-site survey, customized 3D design mockups, and transparent itemized pricing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/quote-builder"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 font-extrabold text-sm shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
          >
            <Calculator className="w-4 h-4" />
            <span>Open Instant Quote Calculator</span>
          </Link>

          <Link
            href="/availability"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-900/60 hover:bg-amber-900 text-amber-200 border border-amber-500/40 font-bold text-sm transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Check Blocked Event Dates</span>
          </Link>

          <a
            href={`tel:${SITE_SETTINGS.phonePrimary.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-emerald-500/50 bg-emerald-950/40 text-emerald-300 hover:bg-emerald-900/60 font-bold text-sm transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call {SITE_SETTINGS.phonePrimary}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
