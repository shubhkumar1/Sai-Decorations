'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Sparkles, Clock, ExternalLink } from 'lucide-react';
import { SITE_SETTINGS, SERVICES, LOCALITIES } from '@/lib/business-data';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-amber-950 via-stone-900 to-black text-amber-100/90 pt-16 pb-12 border-t border-amber-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-amber-800/40">
          {/* Column 1: Brand Info & NAP */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-amber-400/50 shadow-md bg-amber-950 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Sai Decorations Logo"
                  fill
                  sizes="(max-width: 640px) 40px, 44px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold gold-gradient-text block">
                  Sai Decorations
                </span>
                {/* <span className="text-xs text-amber-300">Shambhu Gupta • Ranchi</span> */}
              </div>
            </div>

            <p className="text-xs text-amber-200/80 leading-relaxed">
              Ranchi’s most trusted event management & tent house partner for royal weddings, grand pandals, fresh flower setups, gourmet catering & generator backups with 18+ years of excellence.
            </p>

            {/* <div className="text-xs text-amber-300/80 space-y-1 pt-1">
              <p className="font-semibold text-amber-200">Also Searched As:</p>
              <p className="italic">{SITE_SETTINGS.alternateNames.join(' • ')}</p>
            </div> */}

            <div className="space-y-2.5 text-xs text-amber-100/90 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{SITE_SETTINGS.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${SITE_SETTINGS.phonePrimary.replace(/\s+/g, '')}`} className="hover:text-amber-300">
                  {SITE_SETTINGS.phonePrimary} / {SITE_SETTINGS.phoneSecondary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${SITE_SETTINGS.email}`} className="hover:text-amber-300">
                  {SITE_SETTINGS.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mon - Sun: 7:00 AM - 11:00 PM (24x7 Emergency Support)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h3 className="font-serif text-lg font-bold text-amber-300 mb-4 border-b border-amber-700/50 pb-2">
              Our Event Services
            </h3>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-amber-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{s.title}</span>
                    <span className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Ranchi Locality Pages & SEO Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-amber-300 mb-4 border-b border-amber-700/50 pb-2">
              Ranchi Service Areas
            </h3>
            <ul className="space-y-2 text-xs">
              {LOCALITIES.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/areas/${loc.slug}`}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>Sai Decorations in {loc.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-serif text-sm font-bold text-amber-300 mt-6 mb-2 border-b border-amber-700/50 pb-1">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs">
              <Link href="/packages" className="hover:text-amber-400">Packages & Pricing</Link>
              <Link href="/quote-builder" className="hover:text-amber-400">Instant Quote</Link>
              <Link href="/availability" className="hover:text-amber-400">Blocked Dates</Link>
              <Link href="/gallery" className="hover:text-amber-400">Photo Gallery</Link>
              <Link href="/testimonials" className="hover:text-amber-400">Client Reviews</Link>
              <Link href="/blog" className="hover:text-amber-400">Event Blog</Link>
              <Link href="/about" className="hover:text-amber-400">About Sai Decorations</Link>
              <Link href="/contact" className="hover:text-amber-400">Contact Us</Link>
            </div>
          </div>

          {/* Column 4: Map & Direct WhatsApp CTA */}
          <div>
            <h3 className="font-serif text-lg font-bold text-amber-300 mb-4 border-b border-amber-700/50 pb-2">
              Visit Our Warehouse
            </h3>
            <div className="w-full h-36 rounded-lg overflow-hidden border border-amber-500/30 mb-3 shadow-inner">
              <iframe
                title="Sai Decorations Ranchi Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.471745131815!2d85.3223378!3d23.334917700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1c838857411%3A0xeddce85db0cb4b39!2sSai%20Decorations!5e0!3m2!1sen!2sin!4v1791394772741!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <a
              href={`https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${encodeURIComponent('Hello Sai Decorations, I am looking for wedding/event tent house decor services in Ranchi.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <span>Chat directly on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Admin Link */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-amber-300/70 gap-4">
          <p>{t('copyright')}</p>
          <div className="flex items-center gap-4">
            <span>Ranchi, Jharkhand, India</span>
            <span>•</span>
            <Link href="/admin/login" className="hover:text-amber-200 underline">
              Admin Sign In
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
