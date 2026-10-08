'use client';

import React, { useEffect, useState } from 'react';
import { Settings, Save, CheckCircle2 } from 'lucide-react';
import AdminHeader from '@/components/admin/AdminHeader';
import { getSiteSettings, saveSiteSettings } from '@/lib/firebase/firestore';
import { SiteSettings } from '@/types';
import { SITE_SETTINGS } from '@/lib/business-data';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SiteSettings>(SITE_SETTINGS);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    async function load() {
      const data = await getSiteSettings();
      setSettings(data);
    }
    load();
  }, []);

  const handleChange = (field: keyof SiteSettings, value: any) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMsg('');
    await saveSiteSettings(settings);
    setSaving(false);
    setMsg('Site settings & Google Sheet webhook URL updated successfully!');
    setTimeout(() => setMsg(''), 4000);
  };

  return (
    <div>
      <AdminHeader title="Site Settings & Google Sheet Integration" />

      <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 max-w-4xl mx-auto">
        {msg && (
          <div className="p-4 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>{msg}</span>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-500/20 shadow-xl space-y-6"
        >
          <h2 className="font-serif text-xl font-bold text-amber-950 flex items-center gap-2">
            <Settings className="w-5 h-5 text-amber-600" />
            <span>Business NAP & Webhook Configuration</span>
          </h2>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Primary Phone</label>
                <input
                  type="text"
                  required
                  value={settings.phonePrimary}
                  onChange={(e) => handleChange('phonePrimary', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Secondary Phone</label>
                <input
                  type="text"
                  value={settings.phoneSecondary}
                  onChange={(e) => handleChange('phoneSecondary', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">WhatsApp Number (with country code)</label>
                <input
                  type="text"
                  required
                  value={settings.whatsappNumber}
                  onChange={(e) => handleChange('whatsappNumber', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Contact Email</label>
                <input
                  type="email"
                  required
                  value={settings.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Full Address (Ranchi)</label>
              <input
                type="text"
                required
                value={settings.address}
                onChange={(e) => handleChange('address', e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 space-y-2">
              <label className="block text-xs font-bold text-amber-950">
                Google Sheets Webhook URL / Apps Script Endpoint
              </label>
              <input
                type="url"
                placeholder="https://script.google.com/macros/s/.../exec"
                value={settings.googleSheetWebhookUrl || ''}
                onChange={(e) => handleChange('googleSheetWebhookUrl', e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none bg-white"
              />
              <p className="text-[11px] text-stone-600">
                When a new enquiry is submitted on the website, all form fields will be automatically posted as a new row to this Google Sheet endpoint.
              </p>
            </div>
          </div>

          <button
            type="submit"
            disabled={saving}
            className="w-full py-3.5 rounded-xl bg-amber-950 text-amber-300 font-bold text-xs hover:bg-amber-900 shadow-md flex items-center justify-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'Saving...' : 'Save Site Settings'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
