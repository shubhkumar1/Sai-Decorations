import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Sparkles, Calculator, Phone, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import FaqSection from '@/components/home/FaqSection';
import JsonLd from '@/components/ui/JsonLd';
import { SERVICES, SITE_SETTINGS } from '@/lib/business-data';

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} in Ranchi | Sai Decorations`,
    description: service.shortDescription,
    keywords: service.targetKeywords
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_SETTINGS.businessName,
      telephone: SITE_SETTINGS.phonePrimary,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_SETTINGS.address,
        addressLocality: SITE_SETTINGS.city,
        addressRegion: SITE_SETTINGS.state,
        postalCode: SITE_SETTINGS.pincode,
        addressCountry: 'IN'
      }
    },
    areaServed: {
      '@type': 'City',
      name: 'Ranchi'
    },
    description: service.shortDescription,
    offers: {
      '@type': 'Offer',
      price: service.startingPrice.replace(/[^0-9]/g, '') || '25000',
      priceCurrency: 'INR'
    }
  };

  return (
    <div className="py-12 bg-cream min-h-screen">
      <JsonLd data={serviceSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 hover:text-amber-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 text-white border border-amber-500/30 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span>Ranchi Service Specialization</span>
              </span>

              <h1 className="font-serif text-3xl sm:text-5xl font-extrabold gold-gradient-text leading-tight">
                {service.title}
              </h1>

              <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed font-sans">
                {service.fullDescription}
              </p>

              <div className="pt-2 flex items-center gap-3">
                <span className="text-xs text-amber-300 font-semibold uppercase tracking-wider">Starting Price:</span>
                <span className="px-3 py-1 rounded-lg bg-amber-500 text-amber-950 font-serif font-extrabold text-lg">
                  {service.startingPrice}
                </span>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  href={`/quote-builder?service=${service.slug}`}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 font-extrabold text-xs shadow-lg hover:brightness-110 flex items-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Get Instant Price Quote</span>
                </Link>

                <a
                  href={`tel:${SITE_SETTINGS.phonePrimary.replace(/\s+/g, '')}`}
                  className="px-6 py-3.5 rounded-xl border border-amber-400/40 hover:bg-amber-500/20 text-amber-200 font-bold text-xs flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call {SITE_SETTINGS.phonePrimary}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-2xl">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="rounded-3xl bg-white p-8 sm:p-12 border border-amber-500/20 shadow-xl space-y-6">
          <SectionHeader
            centered={false}
            badge="Package Deliverables"
            title={`What's Included in ${service.title}`}
            subtitle="Full transparent breakdown of materials, manpower, and setup support."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.whatsIncluded.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-stone-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery for Service */}
        {service.galleryImages && service.galleryImages.length > 0 && (
          <div className="space-y-6">
            <SectionHeader
              centered={false}
              badge="Real Work Samples"
              title={`${service.title} Photo Gallery`}
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {service.galleryImages.map((imgUrl, i) => (
                <div key={i} className="relative h-64 rounded-2xl overflow-hidden border border-amber-500/20 shadow-md">
                  <Image
                    src={imgUrl}
                    alt={`${service.title} Ranchi sample ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {service.faqs && service.faqs.length > 0 && (
          <FaqSection
            faqs={service.faqs}
            title={`Frequently Asked Questions about ${service.title}`}
          />
        )}
      </div>
    </div>
  );
}
