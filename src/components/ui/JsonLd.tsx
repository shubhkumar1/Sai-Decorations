import React from 'react';
import { SITE_SETTINGS } from '@/lib/business-data';

interface JsonLdProps {
  type?: 'LocalBusiness' | 'Service' | 'FAQPage' | 'BreadcrumbList' | 'Article';
  data?: any;
}

export default function JsonLd({ type = 'LocalBusiness', data }: JsonLdProps) {
  let schema: any = null;

  if (type === 'LocalBusiness') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'EventPlanner',
      '@id': 'https://saidecorationsranchi.com/#organization',
      name: SITE_SETTINGS.businessName,
      // alternateName: SITE_SETTINGS.alternateNames,
      url: 'https://saidecorationsranchi.com',
      logo: 'https://saidecorationsranchi.com/logo.png',
      image: 'https://saidecorationsranchi.com/OG.webp',
      telephone: SITE_SETTINGS.phonePrimary,
      email: SITE_SETTINGS.email,
      priceRange: '₹3,500 - ₹5,000,000',
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_SETTINGS.address,
        addressLocality: SITE_SETTINGS.city,
        addressRegion: SITE_SETTINGS.state,
        postalCode: SITE_SETTINGS.pincode,
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 23.3700,
        longitude: 85.3250
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '07:00',
          closes: '23:00'
        }
      ],
      areaServed: SITE_SETTINGS.serviceAreas.map(area => ({
        '@type': 'AdministrativeArea',
        name: area
      })),
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '480',
        bestRating: '5',
        worstRating: '1'
      },
      sameAs: [
        SITE_SETTINGS.instagramUrl,
        SITE_SETTINGS.facebookUrl,
        SITE_SETTINGS.youtubeUrl
      ]
    };
  } else if (type === 'FAQPage' && data) {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.map((faq: { question: string; answer: string }) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };
  } else if (data) {
    schema = data;
  }

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
