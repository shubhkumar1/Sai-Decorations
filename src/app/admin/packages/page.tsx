'use client';

import React, { useEffect, useState } from 'react';
import { Package, Save, CheckCircle2 } from 'lucide-react';
import AdminHeader from '@/components/admin/AdminHeader';
import { getPackages, savePackage } from '@/lib/firebase/firestore';
import { PackageItem } from '@/types';

export default function AdminPackagesPage() {
  const [packages, setPackages] = useState<PackageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    async function load() {
      const data = await getPackages();
      setPackages(data);
      setLoading(false);
    }
    load();
  }, []);

  const handlePriceChange = (id: string, price: string) => {
    setPackages((prev) =>
      prev.map((p) => (p.id === id ? { ...p, startingPrice: price } : p))
    );
  };

  const handleSave = async (pkg: PackageItem) => {
    setSavingId(pkg.id);
    setMsg('');
    await savePackage(pkg);
    setSavingId(null);
    setMsg(`Saved package changes for ${pkg.name}!`);
    setTimeout(() => setMsg(''), 3000);
  };

  return (
    <div>
      <AdminHeader title="Packages & Pricing Editor" />

      <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 max-w-7xl mx-auto">
        {msg && (
          <div className="p-4 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>{msg}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl p-6 border border-amber-500/20 shadow-xl space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-amber-700">
                  <Package className="w-5 h-5" />
                  <span className="font-serif text-lg font-bold text-amber-950">{pkg.name}</span>
                </div>

                <p className="text-xs text-stone-500">{pkg.subtitle}</p>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Starting Price Range</label>
                  <input
                    type="text"
                    value={pkg.startingPrice}
                    onChange={(e) => handlePriceChange(pkg.id, e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm font-bold text-maroon focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                <div className="space-y-1 pt-2">
                  <p className="text-[11px] font-bold text-stone-700">Features Included ({pkg.features.length})</p>
                  <ul className="space-y-1 text-xs text-stone-600">
                    {pkg.features.map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => handleSave(pkg)}
                disabled={savingId === pkg.id}
                className="w-full py-3 rounded-xl bg-amber-950 text-amber-300 font-bold text-xs hover:bg-amber-900 shadow-md flex items-center justify-center gap-2 mt-4"
              >
                <Save className="w-4 h-4" />
                <span>{savingId === pkg.id ? 'Saving...' : 'Save Package Pricing'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
