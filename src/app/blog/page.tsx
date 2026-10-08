import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { BLOG_POSTS } from '@/lib/business-data';

export const metadata = {
  title: 'Ranchi Wedding & Event Planning Blog | Sai Decorations',
  description: 'Guides, cost estimates, venue tips, and floral mandap ideas for hosting successful weddings and celebrations in Ranchi, Jharkhand.'
};

export default function BlogPage() {
  return (
    <div className="py-12 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Expert Advice"
          title="Ranchi Wedding & Event Guide Blog"
          subtitle="Tips, cost guides, venue insights, and decor trends from Sai Decorations event experts."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="rounded-3xl bg-white border border-amber-500/20 shadow-xl overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition-all"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500 text-amber-950 font-bold text-xs">
                  {post.category}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-stone-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-600" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-amber-950 group-hover:text-amber-800 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-amber-100 flex items-center justify-between">
                  <span className="text-xs text-stone-500 italic">By {post.author}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-amber-900 group-hover:text-amber-700 flex items-center gap-1"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
