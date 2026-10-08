'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { SERVICES } from '@/lib/business-data';

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="End-to-End Solutions"
          title="Our 10 Core Event Services in Ranchi"
          subtitle="Everything you need for grand weddings, receptions, trust pandals, and family celebrations under one roof."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl bg-white border border-amber-500/20 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Service Hero Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/90 text-amber-950 font-bold text-[10px] uppercase tracking-wider">
                    From {service.startingPrice}
                  </span>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-amber-950 group-hover:text-amber-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-1.5 pt-2 border-t border-amber-100 text-[11px] text-stone-700">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-amber-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="pt-2 text-xs font-bold text-amber-900 group-hover:text-amber-700 flex items-center gap-1 transition-colors"
                >
                  <span>Explore Features & Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
