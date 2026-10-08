import React from 'react';
import Metadata from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { SERVICES } from '@/lib/business-data';

export const metadata = {
  title: 'All Event & Wedding Services in Ranchi | Sai Decorations',
  description: 'Explore our 10 core event services in Ranchi: Royal Mandap Wedding Arrangements, Waterproof Tent House, Fresh Flower Decor, Gourmet Catering, DJ Light & Sound, and Soundless Generators.'
};

export default function ServicesPage() {
  return (
    <div className="py-16 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeader
          badge="Complete Event Solutions"
          title="Full Range of Event Services in Ranchi"
          subtitle="Explore our specialized services tailored for weddings, receptions, trust pandals, and family celebrations."
        />

        <div className="space-y-12">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`rounded-3xl bg-white border border-amber-500/20 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:col-span-5 relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-amber-400/30">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500 text-amber-950 font-bold text-xs">
                  From {service.startingPrice}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  <span>Service #{index + 1}</span>
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-950">
                  {service.title}
                </h2>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {service.fullDescription}
                </p>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-900">
                    What's Included:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                    {service.whatsIncluded.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="px-6 py-3 rounded-xl bg-amber-950 text-amber-300 font-bold text-xs hover:bg-amber-900 border border-amber-500/30 flex items-center gap-2 shadow-md transition-all"
                  >
                    <span>View Full Details & Photo Gallery</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href={`/quote-builder?service=${service.slug}`}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 font-bold text-xs hover:brightness-110 shadow-md transition-all"
                  >
                    Get Free Quote for {service.title.split(' ')[0]}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
