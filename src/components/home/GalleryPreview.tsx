'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Maximize2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import LightboxModal from '@/components/ui/LightboxModal';
import { GALLERY_ITEMS } from '@/lib/business-data';
import { GalleryItem } from '@/types';

interface GalleryPreviewProps {
  isHomePage?: boolean;
}

export default function GalleryPreview({ isHomePage = true }: GalleryPreviewProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'wedding', label: 'Royal Mandaps' },
    { id: 'pandal', label: 'Tent & Pandals' },
    { id: 'decoration', label: 'Flower & Balloon' },
    { id: 'catering', label: 'Catering' },
    { id: 'lighting', label: 'DJ & Lights' }
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const displayedItems = isHomePage ? filteredItems.slice(0, 8) : filteredItems;

  return (
    <section className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Real Event Craftsmanship"
          title={isHomePage ? "Featured Event Gallery in Ranchi" : "Complete Event Photo & Video Gallery"}
          subtitle={isHomePage ? "Take a look at our recent Rajwada mandaps, waterproof pandals, catering setups, and sangeet DJ lighting." : "Explore our complete collection of completed royal weddings, pandal setups, catering buffets, and sangeet lightings across Ranchi."}
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-950 text-amber-300 shadow-md border border-amber-500/40'
                  : 'bg-white text-stone-700 border border-stone-200 hover:bg-amber-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer border border-amber-500/20 shadow-md hover:shadow-2xl transition-all"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-500 text-amber-950 inline-block">
                  {item.category}
                </span>
                <h4 className="font-serif text-sm font-bold leading-tight group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {isHomePage && (
          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-950 text-amber-300 font-bold text-xs hover:bg-amber-900 border border-amber-500/30 transition-all shadow-md"
            >
              <span>View Complete Photo & Video Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>

      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />
    </section>
  );
}
