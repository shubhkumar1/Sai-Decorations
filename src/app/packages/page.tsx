import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import PackagesTeaser from '@/components/home/PackagesTeaser';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'Wedding & Event Packages Pricing | Sai Decorations Ranchi',
  description: 'View transparent starting price ranges for Silver, Gold Royal, and Imperial Diamond wedding packages in Ranchi, Jharkhand.'
};

export default function PackagesPage() {
  return (
    <div className="py-12 bg-cream min-h-screen space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PackagesTeaser />
      </div>

      <FaqSection
        title="Packages & Pricing FAQs"
        subtitle="Common questions about customization, payment schedules, and advance bookings."
      />
    </div>
  );
}
