import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustCounters from '@/components/home/TrustCounters';
import ServicesGrid from '@/components/home/ServicesGrid';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import GalleryPreview from '@/components/home/GalleryPreview';
import PackagesTeaser from '@/components/home/PackagesTeaser';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FaqSection from '@/components/home/FaqSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';
import JsonLd from '@/components/ui/JsonLd';

export default function HomePage() {
  return (
    <>
      <JsonLd type="LocalBusiness" />
      <HeroSection />
      <TrustCounters />
      <ServicesGrid />
      <WhyChooseUs />
      <GalleryPreview />
      <PackagesTeaser />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
