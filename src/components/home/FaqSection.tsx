'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import JsonLd from '@/components/ui/JsonLd';
import { HOME_FAQS } from '@/lib/business-data';

interface FaqSectionProps {
  faqs?: { question: string; answer: string }[];
  title?: string;
  subtitle?: string;
}

export default function FaqSection({
  faqs = HOME_FAQS,
  title = "Frequently Asked Questions",
  subtitle = "Direct answers to common questions about tent house bookings, wedding mandaps, and catering in Ranchi."
}: FaqSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-cream">
      <JsonLd type="FAQPage" data={faqs} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Clear Answers"
          title={title}
          subtitle={subtitle}
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-amber-500/20 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-amber-50/50 transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-amber-950 flex items-start gap-2.5">
                    <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-700 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-amber-100/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
