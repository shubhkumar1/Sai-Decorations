import React from 'react';
import Image from 'next/image';
import { Star, Quote, Play, Camera, MapPin } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { TESTIMONIALS, SITE_SETTINGS } from '@/lib/business-data';

export const metadata = {
  title: 'Client Reviews & Instagram Feed | Sai Decorations Ranchi',
  description: 'Read genuine reviews and watch video testimonials from brides, parents, and trust committees who hired Sai Decorations tent house in Ranchi.'
};

export default function TestimonialsPage() {
  const instagramPosts = [
    {
      id: 'ig-1',
      title: 'Royal Rajwada Mandap Setup Kanke Lawn',
      likes: '1.2k',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'ig-2',
      title: 'German Hanger Pandal Morabadi',
      likes: '950',
      imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'ig-3',
      title: 'Fresh Orchid & Lily Flowers Stage',
      likes: '2.4k',
      imageUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'ig-4',
      title: 'Sangeet DJ Sharpy Beam Production',
      likes: '1.8k',
      imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="py-12 bg-cream min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Social Proof"
          title="Client Reviews & Video Testimonials"
          subtitle="Discover why families across Ranchi choose Sai Decorations for their most cherished life celebrations."
        />

        {/* Text Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-white border border-amber-500/20 shadow-xl space-y-4 relative flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-amber-300/40 absolute top-6 right-6" />

              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-amber-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-amber-950">
                    {t.name}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-stone-500">
                    <MapPin className="w-3 h-3 text-amber-600" />
                    <span>{t.location}</span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs">
                  {t.eventType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Feed Section */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 text-white p-8 sm:p-12 space-y-8 border border-amber-500/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-amber-800/50 pb-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 justify-center sm:justify-start">
                <Camera className="w-4 h-4" />
                <span>Follow Our Instagram Stream</span>
              </span>
              <h3 className="font-serif text-2xl font-bold gold-gradient-text">
                @saidecorations_ranchi
              </h3>
            </div>

            <a
              href={SITE_SETTINGS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-xs shadow-lg hover:brightness-110 transition-all"
            >
              Follow Us on Instagram
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {instagramPosts.map((post) => (
              <div
                key={post.id}
                className="relative h-48 rounded-xl overflow-hidden group border border-amber-500/20 shadow-md"
              >
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3 text-white">
                  <span className="text-[10px] font-bold">♥ {post.likes}</span>
                  <p className="text-[11px] font-semibold line-clamp-2">{post.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
