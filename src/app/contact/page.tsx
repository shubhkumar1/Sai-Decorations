import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import InteractiveCalculator from '@/components/quote/InteractiveCalculator';
import { SITE_SETTINGS } from '@/lib/business-data';

export const metadata = {
  title: 'Contact Sai Decorations | Main Road Ranchi Office & Warehouse',
  description: 'Get in touch with Sai Decorations in Ranchi. Phone: +91 94311 04229. Office address: Main Road, Near Overbridge, GEL Church Complex, Ranchi 834001.'
};

export default function ContactPage() {
  return (
    <div className="py-12 bg-cream min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Direct Connection"
          title="Contact Sai Decorations Ranchi"
          subtitle="Reach out to our event directors for site visits, quote queries, or urgent generator bookings."
        />

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-amber-500/20 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-amber-950">Office & Warehouse</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {SITE_SETTINGS.address}
            </p>
            <span className="text-[11px] text-amber-700 font-semibold block">
              Landmark: Opposite GEL Church Complex, Main Road
            </span>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-amber-500/20 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-amber-950">Phone & WhatsApp</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Primary: <a href={`tel:${SITE_SETTINGS.phonePrimary.replace(/\s+/g, '')}`} className="font-bold text-amber-900">{SITE_SETTINGS.phonePrimary}</a>
            </p>
            <p className="text-xs text-stone-600 leading-relaxed">
              Secondary: <a href={`tel:${SITE_SETTINGS.phoneSecondary.replace(/\s+/g, '')}`} className="font-bold text-amber-900">{SITE_SETTINGS.phoneSecondary}</a>
            </p>
            <a
              href={`https://wa.me/${SITE_SETTINGS.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 pt-1"
            >
              <span>Chat live on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-amber-500/20 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-amber-950">Working Hours</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Monday - Sunday: 7:00 AM - 11:00 PM
            </p>
            <span className="text-[11px] text-amber-700 font-semibold block">
              24x7 Emergency Generator & Event Support
            </span>
          </div>
        </div>

        {/* Map Embed Section */}
        <div className="rounded-3xl bg-white p-4 border border-amber-500/20 shadow-xl overflow-hidden space-y-4">
          <h3 className="font-serif text-xl font-bold text-amber-950 px-4 pt-2">
            Locate Our Warehouse on Google Maps
          </h3>
          <div className="w-full h-80 rounded-2xl overflow-hidden border border-amber-200">
            <iframe
              title="Sai Decorations Google Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.471745131815!2d85.3223378!3d23.334917700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1c838857411%3A0xeddce85db0cb4b39!2sSai%20Decorations!5e0!3m2!1sen!2sin!4v1791394772741!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Form Section */}
        <div className="space-y-6 pt-6">
          <SectionHeader
            badge="Submit Online Form"
            title="Send Us a Direct Event Enquiry"
          />
          <InteractiveCalculator />
        </div>
      </div>
    </div>
  );
}
