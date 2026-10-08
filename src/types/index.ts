export type EnquiryStatus = 'New' | 'Contacted' | 'Quoted' | 'Confirmed' | 'Lost';

export interface Enquiry {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  eventType: string;
  eventDate: string;
  venueCity: string;
  guestCount: number;
  budgetRange: string;
  servicesNeeded: string[];
  message?: string;
  status: EnquiryStatus;
  internalNotes?: string;
  createdAt: string | number;
  source?: string;
}

export interface OfferSettings {
  offerId: string;
  enabled: boolean;
  title: string;
  message: string;
  imageUrl?: string;
  buttonText: string;
  buttonLink: string;
  startDate?: string;
  endDate?: string;
  discountBadge?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  titleHi: string;
  shortDescription: string;
  shortDescriptionHi: string;
  fullDescription: string;
  fullDescriptionHi: string;
  heroImage: string;
  galleryImages: string[];
  features: string[];
  featuresHi: string[];
  whatsIncluded: string[];
  whatsIncludedHi: string[];
  startingPrice: string;
  faqs: { question: string; answer: string; questionHi?: string; answerHi?: string }[];
  targetKeywords: string[];
}

export interface PackageItem {
  id: string;
  name: string;
  nameHi: string;
  subtitle: string;
  startingPrice: string;
  badge?: string;
  recommendedFor: string;
  features: string[];
  includedServices: string[];
  isPopular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'wedding' | 'pandal' | 'decoration' | 'catering' | 'lighting' | 'corporate';
  imageUrl: string;
  videoUrl?: string;
  caption?: string;
  featured?: boolean;
  createdAt?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  eventDate: string;
  eventType: string;
  videoUrl?: string;
  avatarUrl?: string;
}

export interface LocalityItem {
  slug: string;
  name: string;
  title: string;
  description: string;
  popularVenues: string[];
  faqs: { question: string; answer: string }[];
  heroImage: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
  keywords: string[];
}

export interface SiteSettings {
  businessName: string;
  // alternateNames: string[];
  phonePrimary: string;
  phoneSecondary: string;
  whatsappNumber: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  serviceAreas: string[];
  yearsExperience: number;
  eventsCompleted: number;
  googleSheetWebhookUrl?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  youtubeUrl?: string;
}
