'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Image as ImageIcon, Plus, Trash2, CheckCircle2 } from 'lucide-react';
import AdminHeader from '@/components/admin/AdminHeader';
import { getGalleryItems, addGalleryItem, deleteGalleryItem } from '@/lib/firebase/firestore';
import { GalleryItem } from '@/types';

export default function AdminGalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  // New item form
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<GalleryItem['category']>('wedding');
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [adding, setAdding] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    async function load() {
      const data = await getGalleryItems();
      setItems(data);
      setLoading(false);
    }
    load();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !imageUrl) return;
    setAdding(true);
    setMsg('');

    const newId = await addGalleryItem({
      title,
      category,
      imageUrl,
      videoUrl: videoUrl || undefined,
      caption: caption || undefined,
      featured: true
    });

    setItems((prev) => [
      { id: newId, title, category, imageUrl, videoUrl: videoUrl || undefined, caption, featured: true },
      ...prev
    ]);

    setTitle('');
    setImageUrl('');
    setVideoUrl('');
    setCaption('');
    setAdding(false);
    setMsg('New gallery item added successfully!');
    setTimeout(() => setMsg(''), 3000);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this gallery item?')) return;
    await deleteGalleryItem(id);
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <AdminHeader title="Gallery Manager" />

      <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 max-w-7xl mx-auto">
        {msg && (
          <div className="p-4 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>{msg}</span>
          </div>
        )}

        {/* Add Item Form */}
        <form
          onSubmit={handleAdd}
          className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-amber-500/20 shadow-xl space-y-4"
        >
          <h2 className="font-serif text-lg font-bold text-amber-950 flex items-center gap-2">
            <Plus className="w-5 h-5 text-amber-600" />
            <span>Add New Photo or Video to Gallery</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. Royal Rajwada Stage at Kanke Lawn"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs bg-white focus:ring-2 focus:ring-amber-500 outline-none"
              >
                <option value="wedding">Royal Mandaps</option>
                <option value="pandal">Tent & Pandals</option>
                <option value="decoration">Flower & Balloon Decor</option>
                <option value="catering">Catering</option>
                <option value="lighting">DJ & Lights</option>
                <option value="corporate">Corporate</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Image URL *</label>
              <input
                type="url"
                required
                placeholder="https://images.unsplash.com/..."
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Video Embed URL (Optional)</label>
              <input
                type="url"
                placeholder="https://www.youtube.com/embed/..."
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">Caption / Description</label>
            <input
              type="text"
              placeholder="Short description of fresh flowers, seating capacity, or location..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={adding}
            className="px-6 py-3 rounded-xl bg-amber-950 text-amber-300 font-bold text-xs hover:bg-amber-900 shadow-md flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>{adding ? 'Adding...' : 'Add Gallery Item'}</span>
          </button>
        </form>

        {/* Existing Gallery Grid */}
        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-amber-950">
            Current Gallery Items ({items.length})
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div key={item.id} className="rounded-2xl bg-white border border-amber-500/20 shadow-md overflow-hidden relative group">
                <div className="relative h-48 w-full">
                  <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-amber-500 text-amber-950">
                    {item.category}
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="font-serif text-sm font-bold text-stone-900 line-clamp-1">{item.title}</h4>
                  {item.caption && <p className="text-[11px] text-stone-500 line-clamp-2">{item.caption}</p>}
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="w-full py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center gap-1 mt-2 border border-red-200"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
