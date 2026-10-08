import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  limit
} from 'firebase/firestore';
import { db, isFirebaseConfigured } from './config';
import {
  Enquiry,
  EnquiryStatus,
  OfferSettings,
  GalleryItem,
  PackageItem,
  TestimonialItem,
  SiteSettings
} from '@/types';
import {
  INITIAL_OFFER,
  GALLERY_ITEMS,
  PACKAGES,
  TESTIMONIALS,
  SITE_SETTINGS
} from '@/lib/business-data';

const MOCK_ENQUIRIES: Enquiry[] = [
  {
    id: 'enq-1',
    name: 'Rohan Sharma',
    phone: '9835123456',
    email: 'rohan.sharma@gmail.com',
    eventType: 'Royal Wedding',
    eventDate: '2026-11-18',
    venueCity: 'Kanke Road, Ranchi',
    guestCount: 650,
    budgetRange: '₹2,50,000 - ₹5,000,000',
    servicesNeeded: ['wedding-arrangements', 'tent-house', 'flower-decoration', 'dj-light-sound'],
    message: 'Interested in Gold Royal Wedding Package for Kanke Resort lawn.',
    status: 'New',
    createdAt: new Date().toISOString()
  },
  {
    id: 'enq-2',
    name: 'Sushma Anand',
    phone: '7004198765',
    email: 'sushma.anand@outlook.com',
    eventType: 'Ring Ceremony & Sangeet',
    eventDate: '2026-12-05',
    venueCity: 'Lalpur, Ranchi',
    guestCount: 250,
    budgetRange: '₹1,00,000 - ₹2,50,000',
    servicesNeeded: ['flower-decoration', 'dj-light-sound'],
    message: 'Need DJ line array and stage flower setup.',
    status: 'Contacted',
    createdAt: new Date(Date.now() - 86400000).toISOString()
  }
];

const DEFAULT_BLOCKED_DATES = ['2026-11-18', '2026-11-19', '2026-11-25', '2026-12-02', '2026-12-10'];

function logFirestoreFallback(funcName: string, error: any) {
  if (process.env.NODE_ENV === 'development') {
    console.debug(`[Firestore ${funcName}] using local fallback:`, error?.message || error);
  }
}

// --- Offer Settings ---
export async function getOfferSettings(): Promise<OfferSettings> {
  if (!isFirebaseConfigured) return INITIAL_OFFER;
  try {
    const docRef = doc(db, 'siteSettings', 'offer');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as OfferSettings;
    }
  } catch (error) {
    logFirestoreFallback('getOfferSettings', error);
  }
  return INITIAL_OFFER;
}

export async function saveOfferSettings(offer: OfferSettings): Promise<void> {
  if (!isFirebaseConfigured) return;
  const docRef = doc(db, 'siteSettings', 'offer');
  await setDoc(docRef, offer, { merge: true });
}

// --- Enquiries ---
export async function createEnquiry(
  enquiry: Omit<Enquiry, 'id' | 'createdAt'> & { status?: EnquiryStatus }
): Promise<string> {
  const newEnquiry: Enquiry = {
    ...enquiry,
    status: 'New',
    createdAt: new Date().toISOString()
  };

  if (!isFirebaseConfigured) return `local-${Date.now()}`;

  try {
    const colRef = collection(db, 'enquiries');
    const docRef = await addDoc(colRef, newEnquiry);
    return docRef.id;
  } catch (error) {
    logFirestoreFallback('createEnquiry', error);
    return `local-${Date.now()}`;
  }
}

export async function getEnquiries(): Promise<Enquiry[]> {
  if (!isFirebaseConfigured) return MOCK_ENQUIRIES;
  try {
    const colRef = collection(db, 'enquiries');
    const q = query(colRef, orderBy('createdAt', 'desc'), limit(100));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Enquiry[];
  } catch (error) {
    logFirestoreFallback('getEnquiries', error);
    return MOCK_ENQUIRIES;
  }
}

export async function updateEnquiryStatus(
  id: string,
  status: Enquiry['status'],
  internalNotes?: string
): Promise<void> {
  if (!isFirebaseConfigured) return;
  try {
    const docRef = doc(db, 'enquiries', id);
    await updateDoc(docRef, {
      status,
      ...(internalNotes !== undefined ? { internalNotes } : {})
    });
  } catch (error) {
    logFirestoreFallback('updateEnquiryStatus', error);
  }
}

// --- Blocked Dates (Calendar) ---
export async function getBlockedDates(): Promise<string[]> {
  if (!isFirebaseConfigured) return DEFAULT_BLOCKED_DATES;
  try {
    const colRef = collection(db, 'blockedDates');
    const snapshot = await getDocs(colRef);
    return snapshot.docs.map(doc => doc.id);
  } catch (error) {
    logFirestoreFallback('getBlockedDates', error);
    return DEFAULT_BLOCKED_DATES;
  }
}

export async function toggleBlockedDate(dateStr: string, block: boolean): Promise<void> {
  if (!isFirebaseConfigured) return;
  try {
    const docRef = doc(db, 'blockedDates', dateStr);
    if (block) {
      await setDoc(docRef, { blockedAt: new Date().toISOString() });
    } else {
      await deleteDoc(docRef);
    }
  } catch (error) {
    logFirestoreFallback('toggleBlockedDate', error);
  }
}

// --- Gallery Items ---
export async function getGalleryItems(): Promise<GalleryItem[]> {
  if (!isFirebaseConfigured) return GALLERY_ITEMS;
  try {
    const colRef = collection(db, 'gallery');
    const snapshot = await getDocs(colRef);
    if (!snapshot.empty) {
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as GalleryItem[];
    }
  } catch (error) {
    logFirestoreFallback('getGalleryItems', error);
  }
  return GALLERY_ITEMS;
}

export async function addGalleryItem(item: Omit<GalleryItem, 'id'>): Promise<string> {
  if (!isFirebaseConfigured) return `local-${Date.now()}`;
  const colRef = collection(db, 'gallery');
  const docRef = await addDoc(colRef, item);
  return docRef.id;
}

export async function deleteGalleryItem(id: string): Promise<void> {
  if (!isFirebaseConfigured) return;
  const docRef = doc(db, 'gallery', id);
  await deleteDoc(docRef);
}

// --- Packages ---
export async function getPackages(): Promise<PackageItem[]> {
  if (!isFirebaseConfigured) return PACKAGES;
  try {
    const colRef = collection(db, 'packages');
    const snapshot = await getDocs(colRef);
    if (!snapshot.empty) {
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as PackageItem[];
    }
  } catch (error) {
    logFirestoreFallback('getPackages', error);
  }
  return PACKAGES;
}

export async function savePackage(pkg: PackageItem): Promise<void> {
  if (!isFirebaseConfigured) return;
  const docRef = doc(db, 'packages', pkg.id);
  await setDoc(docRef, pkg, { merge: true });
}

// --- Testimonials ---
export async function getTestimonials(): Promise<TestimonialItem[]> {
  if (!isFirebaseConfigured) return TESTIMONIALS;
  try {
    const colRef = collection(db, 'testimonials');
    const snapshot = await getDocs(colRef);
    if (!snapshot.empty) {
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as TestimonialItem[];
    }
  } catch (error) {
    logFirestoreFallback('getTestimonials', error);
  }
  return TESTIMONIALS;
}

// --- Site Settings ---
export async function getSiteSettings(): Promise<SiteSettings> {
  if (!isFirebaseConfigured) return SITE_SETTINGS;
  try {
    const docRef = doc(db, 'siteSettings', 'general');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as SiteSettings;
    }
  } catch (error) {
    logFirestoreFallback('getSiteSettings', error);
  }
  return SITE_SETTINGS;
}

export async function saveSiteSettings(settings: SiteSettings): Promise<void> {
  if (!isFirebaseConfigured) return;
  const docRef = doc(db, 'siteSettings', 'general');
  await setDoc(docRef, settings, { merge: true });
}
