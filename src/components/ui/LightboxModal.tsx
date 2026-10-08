'use client';

import React from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '@/types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function LightboxModal({
  item,
  onClose,
  onPrev,
  onNext
}: LightboxModalProps) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-stone-800/80 hover:bg-stone-700 text-white flex items-center justify-center border border-amber-500/30 transition-colors z-20"
        aria-label="Close lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev / Next controls */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-800/80 hover:bg-stone-700 text-white flex items-center justify-center border border-amber-500/30 transition-colors z-20"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-800/80 hover:bg-stone-700 text-white flex items-center justify-center border border-amber-500/30 transition-colors z-20"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Content Container */}
      <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center">
        {item.videoUrl ? (
          <div className="w-full aspect-video rounded-xl overflow-hidden border border-amber-500/30">
            <iframe
              src={item.videoUrl}
              title={item.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="relative w-full h-[65vh] rounded-xl overflow-hidden border border-amber-500/30">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-contain"
            />
          </div>
        )}

        <div className="mt-4 text-center text-white space-y-1">
          <h3 className="font-serif text-lg font-bold text-amber-300">{item.title}</h3>
          {item.caption && <p className="text-xs text-stone-300">{item.caption}</p>}
        </div>
      </div>
    </div>
  );
}
