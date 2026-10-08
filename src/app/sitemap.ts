import { MetadataRoute } from 'next';
import { SERVICES, LOCALITIES, BLOG_POSTS } from '@/lib/business-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saidecorations.in';

  const staticPages = [
    '',
    '/services',
    '/gallery',
    '/packages',
    '/quote-builder',
    '/availability',
    '/testimonials',
    '/about',
    '/contact',
    '/blog'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8
  }));

  const servicePages = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.9
  }));

  const localityPages = LOCALITIES.map((loc) => ({
    url: `${baseUrl}/areas/${loc.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }));

  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  return [...staticPages, ...servicePages, ...localityPages, ...blogPages];
}
