'use client';

import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { TESTIMONIALS } from '@/lib/business-data';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Verified Client Feedback"
          title="What Ranchi Families Say About Sai Decorations"
          subtitle="Real reviews from brides, parents, and corporate event organizers across Ranchi, Kanke, Lalpur & Morabadi."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-white border border-amber-500/20 shadow-lg space-y-4 relative flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-amber-300/40 absolute top-6 right-6" />

              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-amber-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-amber-950">
                    {t.name}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-stone-500">
                    <MapPin className="w-3 h-3 text-amber-600" />
                    <span>{t.location}</span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 font-semibold text-[10px]">
                  {t.eventType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
