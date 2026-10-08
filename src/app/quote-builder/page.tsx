import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import InteractiveCalculator from '@/components/quote/InteractiveCalculator';

export const metadata = {
  title: 'Instant Quote Calculator & Cost Estimator | Sai Decorations Ranchi',
  description: 'Calculate instant event & wedding cost estimates in Ranchi. Select services, guests count, date, and submit for direct WhatsApp confirmation.'
};

export default function QuoteBuilderPage() {
  return (
    <div className="py-12 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeader
          badge="Free Instant Estimate"
          title="Custom Event Quote Estimator"
          subtitle="Customize your event requirements and calculate estimated price ranges for Ranchi celebrations."
        />

        <InteractiveCalculator />
      </div>
    </div>
  );
}
