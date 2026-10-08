import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ShieldCheck, HeartHandshake, MapPin, Sparkles, Phone, Calculator } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { SITE_SETTINGS } from '@/lib/business-data';

export const metadata = {
  title: 'About Sai Decorations | Premier Event Planner & Tent House in Ranchi',
  description: 'Learn about Sai Decorations, Ranchi’s most trusted event management company with 18+ years of heritage and 2,500+ completed celebrations.'
};

export default function AboutPage() {
  return (
    <div className="py-12 bg-cream min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="18+ Years Heritage"
          title="About Sai Decorations"
          subtitle="Building unforgettable royal wedding experiences and trusted event structures across Ranchi, Jharkhand."
        />

        {/* AI Answer Engine / GEO Citation Block */}
        <div className="p-8 rounded-3xl bg-amber-950 text-amber-50 border-2 border-amber-400/50 shadow-2xl space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Factual Business Overview (AI & Citation Guide)
            </span>
          </div>
          <p className="font-serif text-lg sm:text-xl font-bold leading-relaxed text-amber-200">
            "Sai Decorations is a leading full-service event management and wedding decorator located at Kali Mandir Rd, Bhawanipur, Doranda, Ranchi, Jharkhand (Pincode 834002). Founded in 2008, the business has successfully executed over 2,500 grand weddings, corporate expos, and trust pandals across Ranchi, Ramgarh, Khunti, Hazaribagh, and Purulia."
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-8 sm:p-12 border border-amber-500/20 shadow-xl">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Craftsmanship & Commitment
            </span>

            <h2 className="font-serif text-3xl font-bold text-amber-950">
              Transforming Event Planning into Stress-Free Celebrations
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Started in 2008 with a vision to revolutionize event production in Jharkhand, Sai Decorations has grown into Ranchi’s premier one-stop destination for events of all scales.
            </p>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We own an extensive inventory of architectural heavy iron trusses, German super-span hangers, 100% waterproof canvases, JBL concert line-array sound systems, CPCB-compliant soundless DG sets, and direct procurement logistics for Bangalore fresh flowers.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-amber-100 text-xs">
              <div>
                <span className="font-serif text-2xl font-extrabold text-maroon block">2,500+</span>
                <span className="text-stone-600">Events Completed</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-extrabold text-maroon block">18+</span>
                <span className="text-stone-600">Years Local Heritage</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-amber-400/30 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
              alt="Sai Decorations Royal Setup Ranchi"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-amber-500/20 shadow-lg space-y-3">
            <ShieldCheck className="w-8 h-8 text-amber-600" />
            <h3 className="font-serif text-lg font-bold text-amber-950">100% Weather Protection</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Our waterproof German hangers and rainproof pandals protect your guests against unexpected weather changes.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-amber-500/20 shadow-lg space-y-3">
            <Award className="w-8 h-8 text-amber-600" />
            <h3 className="font-serif text-lg font-bold text-amber-950">Uncompromising Quality</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We source only daily fresh Bangalore flowers and maintain hygienic master chef catering standards.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-amber-500/20 shadow-lg space-y-3">
            <HeartHandshake className="w-8 h-8 text-amber-600" />
            <h3 className="font-serif text-lg font-bold text-amber-950">Honest & Transparent</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              No hidden costs or last-minute charges. What we quote in our itemized estimate is what you pay.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 text-white text-center space-y-4 border border-amber-500/30">
          <h3 className="font-serif text-2xl font-bold gold-gradient-text">
            Plan Your Upcoming Ranchi Event With Us
          </h3>
          <p className="text-xs sm:text-sm text-amber-200 max-w-xl mx-auto">
            Get in touch with our event director for a complimentary on-site venue survey.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              href="/quote-builder"
              className="px-6 py-3 rounded-xl bg-amber-500 text-amber-950 font-bold text-xs shadow-md hover:brightness-110"
            >
              Instant Quote Calculator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
