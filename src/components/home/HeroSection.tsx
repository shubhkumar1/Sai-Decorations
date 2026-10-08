'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Calculator, Phone, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SITE_SETTINGS } from '@/lib/business-data';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-950 via-stone-900 to-amber-950 text-white">
      {/* Background Image Overlay with Soft Dark Parallax Aesthetic */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
          alt="Sai Decorations Royal Mandap Setup Ranchi"
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-overlay scale-105 transition-transform duration-10000 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950 via-amber-950/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
        {/* Top Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 backdrop-blur-md shadow-lg">
          <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="text-xs font-bold uppercase tracking-widest text-amber-200">
            Ranchi’s Premier Event & Wedding Specialist • 18+ Years
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
          Crafting <span className="gold-gradient-text">Royal Mandaps</span> & Unforgettable Celebrations in Ranchi
        </h1>

        {/* Hero Subtitle */}
        <p className="text-sm sm:text-lg text-amber-100/90 max-w-2xl mx-auto font-sans leading-relaxed">
          From German hanger waterproof pandals and fresh orchid mandaps to gourmet catering and concert DJ sound—
          <span className="text-amber-300 font-semibold"> Sai Decorations – Tent House & Event Services in Ranchi</span> brings your dream event to life.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/quote-builder"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-amber-950 font-extrabold text-sm shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
          >
            <Calculator className="w-4 h-4" />
            <span>Calculate Instant Quote Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`tel:${SITE_SETTINGS.phonePrimary.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-amber-400/50 hover:bg-amber-500/20 text-amber-200 hover:text-white font-bold text-sm backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call Us: {SITE_SETTINGS.phonePrimary}</span>
          </a>
        </div>

        {/* Quick Highlights Bar */}
        <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-amber-800/50">
          <div className="p-3 rounded-lg bg-amber-900/30 border border-amber-500/20 text-center">
            <span className="block font-serif text-xl sm:text-2xl font-bold text-amber-300">2500+</span>
            <span className="text-[11px] text-amber-200">Grand Events Executed</span>
          </div>
          <div className="p-3 rounded-lg bg-amber-900/30 border border-amber-500/20 text-center">
            <span className="block font-serif text-xl sm:text-2xl font-bold text-amber-300">100%</span>
            <span className="text-[11px] text-amber-200">Waterproof Rain Pandals</span>
          </div>
          <div className="p-3 rounded-lg bg-amber-900/30 border border-amber-500/20 text-center">
            <span className="block font-serif text-xl sm:text-2xl font-bold text-amber-300">Bangalore</span>
            <span className="text-[11px] text-amber-200">Fresh Exotic Flowers</span>
          </div>
          <div className="p-3 rounded-lg bg-amber-900/30 border border-amber-500/20 text-center">
            <span className="block font-serif text-xl sm:text-2xl font-bold text-amber-300">24x7</span>
            <span className="text-[11px] text-amber-200">Silent DG Power Backup</span>
          </div>
        </div>
      </div>
    </section>
  );
}
