import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Sparkles, CheckCircle2, ArrowLeft, Phone, Calculator } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import FaqSection from '@/components/home/FaqSection';
import JsonLd from '@/components/ui/JsonLd';
import { LOCALITIES, SITE_SETTINGS, SERVICES } from '@/lib/business-data';

export async function generateStaticParams() {
  return LOCALITIES.map((loc) => ({
    slug: loc.slug
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locality = LOCALITIES.find((l) => l.slug === slug);
  if (!locality) return {};

  return {
    title: `${locality.title} | Sai Decorations`,
    description: locality.description
  };
}

export default async function LocalityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locality = LOCALITIES.find((l) => l.slug === slug);

  if (!locality) {
    notFound();
  }

  return (
    <div className="py-12 bg-cream min-h-screen space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 hover:text-amber-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 text-white p-8 sm:p-12 border border-amber-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 fill-amber-400" />
                <span>Ranchi Locality Coverage: {locality.name}</span>
              </span>

              <h1 className="font-serif text-3xl sm:text-5xl font-extrabold gold-gradient-text leading-tight">
                {locality.title}
              </h1>

              <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed font-sans">
                {locality.description}
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  href={`/quote-builder?city=${encodeURIComponent(locality.name + ', Ranchi')}`}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 font-extrabold text-xs shadow-lg hover:brightness-110 flex items-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Get Quote for {locality.name} Event</span>
                </Link>

                <a
                  href={`tel:${SITE_SETTINGS.phonePrimary.replace(/\s+/g, '')}`}
                  className="px-6 py-3.5 rounded-xl border border-amber-400/40 text-amber-200 font-bold text-xs flex items-center gap-2 hover:bg-amber-500/20"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Us: {SITE_SETTINGS.phonePrimary}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-80 rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-2xl">
              <Image
                src={locality.heroImage}
                alt={`Sai Decorations in ${locality.name} Ranchi`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Popular Venues in Locality */}
        <div className="rounded-3xl bg-white p-8 sm:p-12 border border-amber-500/20 shadow-xl space-y-6">
          <SectionHeader
            centered={false}
            badge="Local Venue Coverage"
            title={`Popular Venues We Service in ${locality.name}`}
            subtitle="We regularly deploy German hangers, floral stages, catering, and DG sets across these halls and lawns."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {locality.popularVenues.map((venue, i) => (
              <div key={i} className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-stone-800">{venue}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Available Services in Locality */}
        <div className="space-y-6">
          <SectionHeader
            centered={false}
            badge="Available Solutions"
            title={`Services Available in ${locality.name}, Ranchi`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service) => (
              <div key={service.id} className="p-6 rounded-2xl bg-white border border-amber-500/20 shadow-md space-y-3">
                <h3 className="font-serif text-lg font-bold text-amber-950">{service.title}</h3>
                <p className="text-xs text-stone-600 line-clamp-2">{service.shortDescription}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs font-bold text-amber-900 hover:underline block pt-1"
                >
                  Learn More & Book →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Locality FAQs */}
        {locality.faqs && locality.faqs.length > 0 && (
          <FaqSection
            faqs={locality.faqs}
            title={`FAQs for Events in ${locality.name}, Ranchi`}
          />
        )}
      </div>
    </div>
  );
}
