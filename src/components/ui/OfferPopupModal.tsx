'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Sparkles, Tag } from 'lucide-react';
import { getOfferSettings } from '@/lib/firebase/firestore';
import { OfferSettings } from '@/types';

export default function OfferPopupModal() {
  const [offer, setOffer] = useState<OfferSettings | null>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    async function loadOffer() {
      const data = await getOfferSettings();
      if (!data || !data.enabled || !data.offerId) return;

      // Check dates
      const nowStr = new Date().toISOString().split('T')[0];
      if (data.startDate && nowStr < data.startDate) return;
      if (data.endDate && nowStr > data.endDate) return;

      // Check localStorage for offerId
      const closedKey = `sai_offer_closed_${data.offerId}`;
      if (localStorage.getItem(closedKey)) return;

      setOffer(data);

      // Show after 3 seconds on first load
      const showTimer = setTimeout(() => {
        setVisible(true);
      }, 10000);

      return () => clearTimeout(showTimer);
    }

    loadOffer();
  }, []);

  // Auto-hide timer logic (8 seconds after showing, auto-hides unless hovered)
  useEffect(() => {
    if (visible && !hovered) {
      timerRef.current = setTimeout(() => {
        handleClose();
      }, 8000);
    } else if (hovered && timerRef.current) {
      clearTimeout(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [visible, hovered]);

  const handleClose = () => {
    setVisible(false);
    if (offer?.offerId) {
      localStorage.setItem(`sai_offer_closed_${offer.offerId}`, 'true');
    }
  };

  if (!offer || !visible) return null;

  return (
    <div
      className="fixed bottom-6 left-6 z-50 max-w-md w-full p-4 animate-in fade-in slide-in-from-bottom duration-500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
    >
      <div className="relative rounded-2xl bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 text-amber-50 p-5 shadow-2xl border-2 border-amber-400/60 overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-amber-900/80 hover:bg-amber-800 text-amber-200 hover:text-white flex items-center justify-center transition-colors border border-amber-500/30 z-10"
          aria-label="Close special offer popup"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-amber-950 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1">
            <Tag className="w-3 h-3" />
            {offer.discountBadge || 'Special Offer'}
          </span>
          <span className="text-[10px] text-amber-300 italic">Limited Time Booking Deal</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg font-bold text-amber-300 leading-snug mb-2 pr-6">
          {offer.title}
        </h3>

        {/* Content Body */}
        <div className="flex gap-4 items-center">
          {offer.imageUrl && (
            <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 relative border border-amber-400/40">
              <Image
                src={offer.imageUrl}
                alt={offer.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <p className="text-xs text-amber-100/90 leading-relaxed line-clamp-3">
            {offer.message}
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-4 flex items-center justify-between gap-3 pt-3 border-t border-amber-800/60">
          <span className="text-[10px] text-amber-400 italic">
            {hovered ? 'Timer paused' : 'Auto-hides in 8s'}
          </span>
          <Link
            href={offer.buttonLink || '/quote-builder'}
            onClick={handleClose}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 font-bold text-xs shadow-md hover:brightness-110 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 fill-amber-950" />
            <span>{offer.buttonText || 'Claim Offer Now'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
