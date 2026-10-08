import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import FloatingActions from '@/components/ui/FloatingActions';
import OfferPopupModal from '@/components/ui/OfferPopupModal';
import { SITE_SETTINGS } from '@/lib/business-data';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap'
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://saidecorationsranchi.com'),
  title: {
    default: 'Sai Decorations | Best Tent House & Royal Wedding Decorator in Ranchi',
    template: '%s | Sai Decorations Ranchi'
  },
  description: 'Sai Decorations – Tent House & Event Services in Ranchi specializing in royal wedding mandaps, waterproof pandals, exotic flower decor, specialized catering, DJ sound & silent generators.',
  keywords: [
    'tent house in Ranchi',
    'tent and decoration in Ranchi',
    'Sai Decorations tent house',
    'sai decorations ranchi',
    'wedding decorator in Ranchi',
    'pandal decorator Ranchi',
    'wedding catering in Ranchi',
    'balloon decoration in Ranchi',
    'DJ sound and light in Ranchi',
    'event management Ranchi'
  ],
  authors: [{ name: 'Sai Decorations Ranchi' }],
  creator: 'Sai Decorations',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://saidecorationsranchi.com',
    title: 'Sai Decorations | Best Tent House & Royal Wedding Decorator in Ranchi',
    description: 'Ranchi’s #1 Event Organizer & Tent House with 18+ years of royal wedding, catering, and pandal craftsmanship.',
    siteName: 'Sai Decorations Ranchi',
    images: [
      {
        url: '/OG.webp',
        width: 1200,
        height: 630,
        alt: 'Sai Decorations – Tent House & Event Services in Ranchi',
        type: 'image/webp'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sai Decorations | Tent House & Wedding Services Ranchi',
    description: 'Transform your event into a grand celebration with Sai Decorations – Tent House & Event Services in Ranchi.',
    images: ['/OG.webp']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <link rel="canonical" href="https://saidecorationsranchi.com" />
        <meta name="theme-color" content="#4A101A" />
      </head>
      <body className="min-h-screen flex flex-col bg-cream text-stone-900 antialiased selection:bg-amber-200 selection:text-maroon">
        <AuthProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <FloatingActions />
            <OfferPopupModal />
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
