'use client';

import React from 'react';
import { Award, Calendar, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function TrustCounters() {
  const stats = [
    {
      icon: Award,
      value: '18+',
      label: 'Years of Experience',
      subtext: 'Serving Ranchi since 2008'
    },
    {
      icon: Calendar,
      value: '2,500+',
      label: 'Successful Events',
      subtext: 'Weddings, Receptions & Pandals'
    },
    {
      icon: HeartHandshake,
      value: '99.4%',
      label: 'Client Satisfaction',
      subtext: '5-Star Google & Local Reviews'
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Weather Guarantee',
      subtext: 'Waterproof German Hangers'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-amber-900 via-amber-950 to-amber-900 text-white border-y border-amber-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-4 sm:p-6 rounded-2xl bg-amber-950/60 border border-amber-400/20 backdrop-blur-sm space-y-2 hover:border-amber-400/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center mx-auto text-amber-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-serif text-3xl sm:text-4xl font-extrabold gold-gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-amber-100 uppercase tracking-wide">
                  {stat.label}
                </div>
                <div className="text-[11px] text-amber-300/70">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
