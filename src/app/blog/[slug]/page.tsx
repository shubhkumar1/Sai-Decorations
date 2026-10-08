import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Sparkles } from 'lucide-react';
import JsonLd from '@/components/ui/JsonLd';
import { BLOG_POSTS, SITE_SETTINGS } from '@/lib/business-data';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Sai Decorations Blog`,
    description: post.excerpt,
    keywords: post.keywords
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: SITE_SETTINGS.businessName
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_SETTINGS.businessName,
      logo: {
        '@type': 'ImageObject',
        url: 'https://saidecorationsranchi.com/logo.png'
      }
    }
  };

  return (
    <div className="py-12 bg-cream min-h-screen">
      <JsonLd data={articleSchema} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 hover:text-amber-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs text-amber-800 font-bold uppercase tracking-wider">
            <span className="px-3 py-1 rounded-full bg-amber-200">{post.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-950 leading-tight">
            {post.title}
          </h1>
        </div>

        {/* Hero Image */}
        <div className="relative h-80 sm:h-[450px] w-full rounded-3xl overflow-hidden border border-amber-400/30 shadow-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Body Content */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-amber-500/20 shadow-xl prose prose-amber max-w-none text-stone-800 leading-relaxed text-sm sm:text-base whitespace-pre-line">
          {post.content}
        </div>

        {/* Author Footer */}
        <div className="p-6 rounded-2xl bg-amber-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-serif text-lg font-bold gold-gradient-text">Need Help Planning Your Event in Ranchi?</h4>
            <p className="text-xs text-amber-200">Our event directors provide free on-site consultations across Ranchi.</p>
          </div>
          <Link
            href="/quote-builder"
            className="px-6 py-3 rounded-xl bg-amber-500 text-amber-950 font-bold text-xs shadow-md shrink-0 hover:brightness-110"
          >
            Get Instant Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
