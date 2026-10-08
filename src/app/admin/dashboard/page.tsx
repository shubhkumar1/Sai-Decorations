'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Inbox, Tag, Calendar, Sparkles, TrendingUp, CheckCircle2, Phone, ExternalLink } from 'lucide-react';
import AdminHeader from '@/components/admin/AdminHeader';
import { getEnquiries, getOfferSettings, getBlockedDates } from '@/lib/firebase/firestore';
import { Enquiry, OfferSettings } from '@/types';

export default function AdminDashboardPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [offer, setOffer] = useState<OfferSettings | null>(null);
  const [blockedDatesCount, setBlockedDatesCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      const [enqList, offerData, datesList] = await Promise.all([
        getEnquiries(),
        getOfferSettings(),
        getBlockedDates()
      ]);
      setEnquiries(enqList);
      setOffer(offerData);
      setBlockedDatesCount(datesList.length);
      setLoading(false);
    }
    loadStats();
  }, []);

  const newCount = enquiries.filter((e) => e.status === 'New').length;
  const thisMonthCount = enquiries.filter((e) => {
    const created = new Date(e.createdAt);
    const now = new Date();
    return created.getMonth() === now.getMonth() && created.getFullYear() === now.getFullYear();
  }).length;

  return (
    <div>
      <AdminHeader title="Dashboard & Analytics Overview" />

      <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 max-w-7xl mx-auto">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-white border border-amber-500/20 shadow-md space-y-2">
            <div className="flex items-center justify-between text-amber-700">
              <span className="text-xs font-bold uppercase tracking-wider">New Enquiries</span>
              <Inbox className="w-5 h-5" />
            </div>
            <div className="font-serif text-3xl font-extrabold text-maroon">
              {newCount}
            </div>
            <p className="text-[11px] text-stone-500">Awaiting owner response</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-amber-500/20 shadow-md space-y-2">
            <div className="flex items-center justify-between text-amber-700">
              <span className="text-xs font-bold uppercase tracking-wider">This Month Leads</span>
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="font-serif text-3xl font-extrabold text-amber-900">
              {thisMonthCount}
            </div>
            <p className="text-[11px] text-stone-500">Total quote requests received</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-amber-500/20 shadow-md space-y-2">
            <div className="flex items-center justify-between text-amber-700">
              <span className="text-xs font-bold uppercase tracking-wider">Active Offer Popup</span>
              <Tag className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`w-3 h-3 rounded-full ${
                  offer?.enabled ? 'bg-emerald-500 animate-pulse' : 'bg-stone-300'
                }`}
              />
              <span className="font-serif text-xl font-bold text-stone-900">
                {offer?.enabled ? 'ACTIVE' : 'Disabled'}
              </span>
            </div>
            <p className="text-[11px] text-stone-500 truncate">{offer?.title || 'No active offer'}</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-amber-500/20 shadow-md space-y-2">
            <div className="flex items-center justify-between text-amber-700">
              <span className="text-xs font-bold uppercase tracking-wider">Blocked Event Dates</span>
              <Calendar className="w-5 h-5" />
            </div>
            <div className="font-serif text-3xl font-extrabold text-stone-800">
              {blockedDatesCount}
            </div>
            <p className="text-[11px] text-stone-500">Blocked on public calendar</p>
          </div>
        </div>

        {/* Quick Action Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/admin/enquiries"
            className="p-6 rounded-2xl bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 text-white shadow-xl hover:border-amber-400 border border-amber-500/30 space-y-3 group"
          >
            <div className="flex items-center justify-between">
              <Inbox className="w-7 h-7 text-amber-400" />
              <span className="text-xs font-bold text-amber-300 group-hover:translate-x-1 transition-transform">
                Open CRM →
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold gold-gradient-text">Manage Enquiries</h3>
            <p className="text-xs text-amber-200/80">
              Filter leads, change status (New, Contacted, Quoted, Confirmed), add internal notes, or export to CSV.
            </p>
          </Link>

          <Link
            href="/admin/offer"
            className="p-6 rounded-2xl bg-white border border-amber-500/20 shadow-lg space-y-3 hover:border-amber-400 group"
          >
            <div className="flex items-center justify-between text-amber-700">
              <Tag className="w-7 h-7" />
              <span className="text-xs font-bold text-amber-900 group-hover:translate-x-1 transition-transform">
                Configure →
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold text-amber-950">Offer Popup Manager</h3>
            <p className="text-xs text-stone-600">
              Set banner title, promo message, discount badge, image URL, and test live popup preview.
            </p>
          </Link>

          <Link
            href="/admin/calendar"
            className="p-6 rounded-2xl bg-white border border-amber-500/20 shadow-lg space-y-3 hover:border-amber-400 group"
          >
            <div className="flex items-center justify-between text-amber-700">
              <Calendar className="w-7 h-7" />
              <span className="text-xs font-bold text-amber-900 group-hover:translate-x-1 transition-transform">
                Open Calendar →
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold text-amber-950">Blocked Dates Calendar</h3>
            <p className="text-xs text-stone-600">
              One-tap block/unblock dates on the public client availability calendar.
            </p>
          </Link>
        </div>

        {/* Recent Enquiries Preview */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-500/20 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-stone-200 pb-4">
            <h2 className="font-serif text-xl font-bold text-amber-950">Recent Customer Enquiries</h2>
            <Link href="/admin/enquiries" className="text-xs font-bold text-amber-800 hover:underline">
              View All ({enquiries.length})
            </Link>
          </div>

          {enquiries.length === 0 ? (
            <p className="text-xs text-stone-500 py-4">No enquiries submitted yet.</p>
          ) : (
            <div className="divide-y divide-stone-100">
              {enquiries.slice(0, 5).map((enq) => (
                <div key={enq.id} className="py-3 flex items-center justify-between gap-4 text-xs">
                  <div className="space-y-0.5">
                    <span className="font-bold text-stone-900">{enq.name}</span>
                    <p className="text-stone-500">{enq.eventType} • {enq.venueCity} • {enq.guestCount} guests</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        enq.status === 'New'
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : enq.status === 'Confirmed'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-stone-100 text-stone-700'
                      }`}
                    >
                      {enq.status}
                    </span>
                    <a
                      href={`tel:${enq.phone}`}
                      className="p-1.5 rounded bg-amber-50 border border-amber-200 text-amber-800 hover:bg-amber-100"
                      title="Call Client"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
