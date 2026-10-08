import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import GalleryPreview from '@/components/home/GalleryPreview';

export const metadata = {
  title: 'Event & Wedding Photo Gallery | Sai Decorations Ranchi',
  description: 'Browse photos & video films of royal Rajwada mandaps, waterproof pandals, fresh flower setups, catering buffets, and DJ sangeet lighting in Ranchi.'
};

export default function GalleryPage() {
  return (
    <div className="py-12 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryPreview isHomePage={false} />
      </div>
    </div>
  );
}
