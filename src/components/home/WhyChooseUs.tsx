'use client';

import React from 'react';
import { ShieldCheck, Flower2, UtensilsCrossed, Zap, Award, UserCheck } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'German Hanger Pandal Safety',
      description: 'Architecturally certified heavy iron truss framing and 100% rainproof canvas that guarantees 0% weather disruption during Ranchi monsoons.'
    },
    {
      icon: Flower2,
      title: 'Daily Fresh Bangalore Flowers',
      description: 'Direct procurement of orchids, lilies, Thai roses, and marigolds for fragrant, vibrant mandaps and bridal stages.'
    },
    {
      icon: UtensilsCrossed,
      title: 'Master Chef Gourmet Catering',
      description: 'Pure Veg & Non-Veg multi-cuisine menus prepared with strict hygiene, live chaat stalls, and luxury brass presentation.'
    },
    {
      icon: Zap,
      title: '24x7 Soundless DG Power Backup',
      description: 'Super silent 15 kVA to 500 kVA generator sets with dedicated operators ensuring non-stop AC, lights, and DJ power.'
    },
    {
      icon: Award,
      title: '18+ Years Local Reputation',
      description: "Ranchi's most recommended tent house and wedding decorator with 2,500+ successful events across Jharkhand."
    },
    {
      icon: UserCheck,
      title: 'Single-Point Event Director',
      description: 'Zero stress for your family. A dedicated on-site coordinator manages venue setup, sound decibels, catering, and ushering.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-950 via-stone-900 to-amber-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          light
          badge="Unmatched Quality"
          title="Why Choose Sai Decorations in Ranchi?"
          subtitle="We combine local Jharkhand heritage with modern international event standards."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-amber-950/60 border border-amber-500/30 backdrop-blur-md hover:border-amber-400 transition-all space-y-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-amber-950 flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-amber-300">
                  {p.title}
                </h3>
                <p className="text-xs text-amber-100/80 leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
