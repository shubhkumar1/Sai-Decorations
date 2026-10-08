'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { SITE_SETTINGS } from '@/lib/business-data';

export default function FloatingActions() {
  const whatsappMsg = encodeURIComponent(
    'Hello Sai Decorations, I found your website and want to check pricing & availability for an upcoming event in Ranchi.'
  );

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 group">
      {/* Call Button */}
      <a
        href={`tel:${SITE_SETTINGS.phonePrimary.replace(/\s+/g, '')}`}
        className="w-12 h-12 rounded-full bg-amber-600 text-white shadow-xl flex items-center justify-center hover:bg-amber-500 hover:scale-110 transition-all border-2 border-amber-300"
        aria-label="Call Sai Decorations Now"
        title="Call Now"
      >
        <Phone className="w-5 h-5 animate-pulse" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-600 text-white shadow-xl flex items-center justify-center hover:bg-emerald-500 hover:scale-110 transition-all border-2 border-emerald-300"
        aria-label="Chat on WhatsApp with Sai Decorations"
        title="WhatsApp Us"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
      </a>
    </div>
  );
}
