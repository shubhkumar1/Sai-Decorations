'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Sparkles, Menu, X, Globe, Calendar, Calculator } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SITE_SETTINGS } from '@/lib/business-data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: t('navHome'), href: '/' },
    { name: t('navServices'), href: '/services' },
    { name: t('navGallery'), href: '/gallery' },
    { name: t('navPackages'), href: '/packages' },
    { name: t('navQuoteBuilder'), href: '/quote-builder' },
    { name: t('navAvailability'), href: '/availability' },
    { name: t('navTestimonials'), href: '/testimonials' },
    { name: t('navAbout'), href: '/about' },
    { name: t('navContact'), href: '/contact' }
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-amber-950/95 backdrop-blur-md shadow-xl py-3 border-b border-amber-500/20 text-white'
          : 'bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 py-4 text-white border-b border-amber-500/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 xl:gap-6">
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-amber-400/50 shadow-md group-hover:scale-105 transition-transform bg-amber-950 shrink-0">
              <Image
                src="/logo.png"
                alt="Sai Decorations Logo"
                fill
                sizes="(max-width: 640px) 40px, 44px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col shrink-0">
              <span className="font-serif text-lg sm:text-xl 2xl:text-2xl font-bold tracking-wide gold-gradient-text block leading-none whitespace-nowrap">
                Sai Decorations
              </span>
              <span className="text-[10px] sm:text-xs text-amber-200 tracking-wider uppercase font-sans whitespace-nowrap mt-1">
                Shambhu Gupta • Ranchi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-3 2xl:gap-5 shrink">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs 2xl:text-sm font-medium transition-colors hover:text-amber-300 relative py-1 whitespace-nowrap ${
                    isActive
                      ? 'text-amber-400 font-semibold border-b-2 border-amber-400'
                      : 'text-amber-100/90'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {/* Language Toggle */}
            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="px-2.5 py-1.5 rounded-full border border-amber-400/40 text-xs text-amber-200 hover:border-amber-400 hover:text-white flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer select-none"
              title="Toggle Language / भाषा बदलें"
            >
              <Globe className="w-3.5 h-3.5 shrink-0" />
              <span className="font-semibold whitespace-nowrap">{lang === 'en' ? 'हिंदी' : 'English'}</span>
            </button>

            {/* Direct Call Button */}
            <a
              href={`tel:${SITE_SETTINGS.phonePrimary.replace(/\s+/g, '')}`}
              className="px-3 py-1.5 rounded-lg border border-amber-400/40 text-xs font-semibold text-amber-200 hover:bg-amber-500/20 flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="whitespace-nowrap">{SITE_SETTINGS.phonePrimary}</span>
            </a>

            {/* Get Free Quote CTA */}
            <Link
              href="/quote-builder"
              className="px-3.5 py-2 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-amber-950 text-xs 2xl:text-sm font-bold shadow-lg hover:brightness-110 transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <Calculator className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">{t('getFreeQuote')}</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger & Quick Phone Icon */}
          <div className="flex items-center gap-2 xl:hidden shrink-0">
            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="w-9 h-9 rounded-lg border border-amber-400/40 bg-amber-900/60 active:bg-amber-800 text-amber-200 flex items-center justify-center shrink-0 active:scale-95 transition-all cursor-pointer select-none touch-manipulation"
              title="Toggle Language / भाषा बदलें"
            >
              <span className="font-bold text-xs leading-none">{lang === 'en' ? 'हि' : 'EN'}</span>
            </button>
            <a
              href={`tel:${SITE_SETTINGS.phonePrimary.replace(/\s+/g, '')}`}
              className="w-9 h-9 rounded-lg border border-amber-400/40 bg-amber-900/60 active:bg-amber-800 text-amber-300 flex items-center justify-center shrink-0 active:scale-95 transition-all cursor-pointer touch-manipulation"
              aria-label="Call Sai Decorations"
            >
              <Phone className="w-4.5 h-4.5 text-amber-300" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="w-9 h-9 rounded-lg border border-amber-400/40 bg-amber-900/60 active:bg-amber-800 text-amber-200 active:text-white flex items-center justify-center shrink-0 active:scale-95 transition-all cursor-pointer select-none touch-manipulation"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-amber-950/98 border-b border-amber-500/30 px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top duration-200 shadow-2xl">
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-amber-500/20 text-amber-300 font-semibold border-l-4 border-amber-400'
                    : 'text-amber-100 hover:bg-amber-900/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-amber-800/60 flex flex-col gap-2">
            <Link
              href="/quote-builder"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 text-center font-bold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              <span>{t('getFreeQuote')}</span>
            </Link>

            <Link
              href="/admin/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2 rounded text-center text-xs text-amber-300 hover:text-white underline"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
