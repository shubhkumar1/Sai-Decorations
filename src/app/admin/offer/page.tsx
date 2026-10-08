'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Tag, Save, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import AdminHeader from '@/components/admin/AdminHeader';
import { getOfferSettings, saveOfferSettings } from '@/lib/firebase/firestore';
import { OfferSettings } from '@/types';
import { INITIAL_OFFER } from '@/lib/business-data';

export default function AdminOfferPage() {
  const [offer, setOffer] = useState<OfferSettings>(INITIAL_OFFER);
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState('');

  useEffect(() => {
    async function load() {
      const data = await getOfferSettings();
      setOffer(data);
    }
    load();
  }, []);

  const handleChange = (field: keyof OfferSettings, value: any) => {
    setOffer((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSavedMsg('');
    await saveOfferSettings(offer);
    setSaving(false);
    setSavedMsg('Offer settings saved successfully! Site visitors will now see the updated popup.');
    setTimeout(() => setSavedMsg(''), 4000);
  };

  return (
    <div>
      <AdminHeader title="Offer Popup Manager" />

      <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 max-w-7xl mx-auto">
        {savedMsg && (
          <div className="p-4 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>{savedMsg}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Form Controls */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-amber-500/20 shadow-xl space-y-6"
          >
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <h2 className="font-serif text-xl font-bold text-amber-950 flex items-center gap-2">
                <Tag className="w-5 h-5 text-amber-600" />
                <span>Offer Configuration</span>
              </h2>

              {/* Enable Toggle */}
              <label className="flex items-center gap-3 cursor-pointer">
                <span className="text-xs font-bold text-stone-700">
                  {offer.enabled ? 'Enabled' : 'Disabled'}
                </span>
                <input
                  type="checkbox"
                  checked={offer.enabled}
                  onChange={(e) => handleChange('enabled', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600 relative"></div>
              </label>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Unique Offer ID</label>
                <input
                  type="text"
                  required
                  value={offer.offerId}
                  onChange={(e) => handleChange('offerId', e.target.value.replace(/\s+/g, '-'))}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                />
                <span className="text-[10px] text-stone-400">Changing offerId resets closed status for visitors.</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Discount Badge Text</label>
                <input
                  type="text"
                  placeholder="e.g. 15% OFF"
                  value={offer.discountBadge || ''}
                  onChange={(e) => handleChange('discountBadge', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Popup Title</label>
                <input
                  type="text"
                  required
                  value={offer.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Popup Promotional Message</label>
                <textarea
                  rows={3}
                  required
                  value={offer.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="w-full p-3 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Image URL</label>
                <input
                  type="url"
                  value={offer.imageUrl || ''}
                  onChange={(e) => handleChange('imageUrl', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Button Text</label>
                  <input
                    type="text"
                    value={offer.buttonText}
                    onChange={(e) => handleChange('buttonText', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Button Link</label>
                  <input
                    type="text"
                    value={offer.buttonLink}
                    onChange={(e) => handleChange('buttonLink', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    value={offer.startDate || ''}
                    onChange={(e) => handleChange('startDate', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">End Date</label>
                  <input
                    type="date"
                    value={offer.endDate || ''}
                    onChange={(e) => handleChange('endDate', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={saving}
              className="w-full py-3.5 rounded-xl bg-amber-950 text-amber-300 font-bold text-xs hover:bg-amber-900 shadow-md flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>{saving ? 'Saving Offer...' : 'Save & Publish Offer Settings'}</span>
            </button>
          </form>

          {/* Live Preview Display */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
              <Eye className="w-4 h-4" />
              <span>Live Visitor Preview</span>
            </div>

            <div className="p-6 rounded-3xl bg-cream border-2 border-dashed border-amber-400 flex items-center justify-center min-h-[400px]">
              {offer.enabled ? (
                <div className="relative rounded-2xl bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 text-amber-50 p-5 shadow-2xl border-2 border-amber-400/60 max-w-sm w-full space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-amber-950 font-bold text-[10px] uppercase">
                      {offer.discountBadge || 'Special Offer'}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-amber-300">
                    {offer.title || 'Offer Title'}
                  </h3>

                  <div className="flex gap-3 items-center">
                    {offer.imageUrl && (
                      <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 relative border border-amber-400/40">
                        <Image src={offer.imageUrl} alt="Offer Preview" fill className="object-cover" />
                      </div>
                    )}
                    <p className="text-xs text-amber-100/90 line-clamp-3">
                      {offer.message || 'Offer Message...'}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-amber-800/60 flex items-center justify-between">
                    <span className="text-[10px] text-amber-400 italic">Auto-hides in 8s</span>
                    <span className="px-3 py-1.5 rounded-lg bg-amber-400 text-amber-950 font-bold text-xs">
                      {offer.buttonText || 'Claim Offer'}
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-stone-500">Offer popup is currently disabled.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
