'use client';

import React, { useEffect, useState, useMemo } from 'react';
import {
  Inbox,
  Search,
  Filter,
  Phone,
  MessageCircle,
  Download,
  ExternalLink,
  Edit,
  Save,
  X,
  CheckCircle2
} from 'lucide-react';
import AdminHeader from '@/components/admin/AdminHeader';
import { getEnquiries, updateEnquiryStatus, getSiteSettings } from '@/lib/firebase/firestore';
import { Enquiry, EnquiryStatus } from '@/types';

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [eventTypeFilter, setEventTypeFilter] = useState<string>('all');

  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [editingNotes, setEditingNotes] = useState<string>('');
  const [editingStatus, setEditingStatus] = useState<EnquiryStatus>('New');
  const [saving, setSaving] = useState(false);
  const [sheetUrl, setSheetUrl] = useState<string>('');

  useEffect(() => {
    async function loadData() {
      const [data, settings] = await Promise.all([
        getEnquiries(),
        getSiteSettings()
      ]);
      setEnquiries(data);
      if (settings.googleSheetWebhookUrl) {
        setSheetUrl(settings.googleSheetWebhookUrl);
      }
      setLoading(false);
    }
    loadData();
  }, []);

  const openDrawer = (enq: Enquiry) => {
    setSelectedEnquiry(enq);
    setEditingNotes(enq.internalNotes || '');
    setEditingStatus(enq.status || 'New');
  };

  const handleSaveStatusAndNotes = async () => {
    if (!selectedEnquiry || !selectedEnquiry.id) return;
    setSaving(true);
    await updateEnquiryStatus(selectedEnquiry.id, editingStatus, editingNotes);

    setEnquiries((prev) =>
      prev.map((e) =>
        e.id === selectedEnquiry.id
          ? { ...e, status: editingStatus, internalNotes: editingNotes }
          : e
      )
    );

    setSelectedEnquiry((prev) =>
      prev ? { ...prev, status: editingStatus, internalNotes: editingNotes } : null
    );
    setSaving(false);
  };

  // Filtered & Searched list
  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((e) => {
      const matchSearch =
        e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.phone.includes(searchTerm) ||
        (e.email && e.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
        e.venueCity.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.eventType.toLowerCase().includes(searchTerm.toLowerCase());

      const matchStatus = statusFilter === 'all' || e.status === statusFilter;
      const matchEventType = eventTypeFilter === 'all' || e.eventType === eventTypeFilter;

      return matchSearch && matchStatus && matchEventType;
    });
  }, [enquiries, searchTerm, statusFilter, eventTypeFilter]);

  // Export CSV
  const exportCsv = () => {
    const headers = [
      'ID',
      'Name',
      'Phone',
      'Email',
      'Event Type',
      'Event Date',
      'Venue / City',
      'Guest Count',
      'Budget Range',
      'Services Needed',
      'Status',
      'Internal Notes',
      'Created At'
    ];

    const rows = filteredEnquiries.map((e) => [
      e.id || '',
      `"${e.name.replace(/"/g, '""')}"`,
      `"${e.phone}"`,
      `"${e.email || ''}"`,
      `"${e.eventType}"`,
      `"${e.eventDate}"`,
      `"${e.venueCity.replace(/"/g, '""')}"`,
      e.guestCount,
      `"${e.budgetRange}"`,
      `"${e.servicesNeeded.join('; ')}"`,
      `"${e.status}"`,
      `"${(e.internalNotes || '').replace(/"/g, '""')}"`,
      `"${e.createdAt}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `sai_decorations_enquiries_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const statusOptions: EnquiryStatus[] = ['New', 'Contacted', 'Quoted', 'Confirmed', 'Lost'];

  return (
    <div>
      <AdminHeader title="Enquiries CRM & Lead Manager" />

      <div className="p-6 sm:p-8 space-y-6 max-w-7xl mx-auto">
        {/* Top Control Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-amber-500/20 shadow-sm">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search by name, phone, city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-200 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-1.5 text-xs text-stone-600">
              <Filter className="w-3.5 h-3.5" />
              <span>Status:</span>
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 rounded-xl border border-stone-200 text-xs bg-white focus:ring-2 focus:ring-amber-500 outline-none"
            >
              <option value="all">All Statuses</option>
              {statusOptions.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>

            <button
              onClick={exportCsv}
              className="px-4 py-2 rounded-xl bg-amber-950 text-amber-300 font-bold text-xs flex items-center gap-1.5 hover:bg-amber-900 border border-amber-500/30 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            {sheetUrl && (
              <a
                href={sheetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 hover:bg-emerald-500 shadow-sm"
              >
                <span>Open Google Sheet</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Enquiries Table */}
        <div className="bg-white rounded-3xl border border-amber-500/20 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-amber-950 text-amber-200 font-serif border-b border-amber-800">
                  <th className="p-4">Client Name</th>
                  <th className="p-4">Contact</th>
                  <th className="p-4">Event & Date</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Guests & Budget</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Quick Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {filteredEnquiries.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-stone-500">
                      No enquiries match your search/filter criteria.
                    </td>
                  </tr>
                ) : (
                  filteredEnquiries.map((enq) => (
                    <tr
                      key={enq.id}
                      className="hover:bg-amber-50/40 transition-colors cursor-pointer"
                      onClick={() => openDrawer(enq)}
                    >
                      <td className="p-4 font-bold text-stone-900">
                        {enq.name}
                        {enq.status === 'New' && (
                          <span className="ml-2 px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-amber-500 text-amber-950">
                            NEW
                          </span>
                        )}
                      </td>

                      <td className="p-4 space-y-0.5">
                        <div className="font-semibold text-amber-900">{enq.phone}</div>
                        {enq.email && <div className="text-[10px] text-stone-400">{enq.email}</div>}
                      </td>

                      <td className="p-4 space-y-0.5">
                        <div className="font-semibold text-stone-800">{enq.eventType}</div>
                        <div className="text-[10px] text-stone-500">{enq.eventDate}</div>
                      </td>

                      <td className="p-4 text-stone-700">{enq.venueCity}</td>

                      <td className="p-4 space-y-0.5">
                        <div className="font-semibold text-stone-800">{enq.guestCount} Guests</div>
                        <div className="text-[10px] text-amber-800">{enq.budgetRange}</div>
                      </td>

                      <td className="p-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                            enq.status === 'New'
                              ? 'bg-amber-100 text-amber-950 border border-amber-300'
                              : enq.status === 'Confirmed'
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              : enq.status === 'Contacted'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-stone-100 text-stone-700'
                          }`}
                        >
                          {enq.status}
                        </span>
                      </td>

                      <td className="p-4 text-right space-x-2" onClick={(e) => e.stopPropagation()}>
                        <a
                          href={`tel:${enq.phone}`}
                          className="inline-flex p-2 rounded-lg bg-amber-100 text-amber-900 hover:bg-amber-200"
                          title="Call Client"
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>

                        <a
                          href={`https://wa.me/91${enq.phone}?text=${encodeURIComponent(`Hello ${enq.name}, following up regarding your ${enq.eventType} enquiry with Sai Decorations Ranchi.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex p-2 rounded-lg bg-emerald-100 text-emerald-900 hover:bg-emerald-200"
                          title="WhatsApp Client"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Detail Drawer Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-lg bg-white h-full shadow-2xl p-6 overflow-y-auto space-y-6 flex flex-col justify-between border-l border-amber-500/30 animate-in slide-in-from-right duration-300">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-amber-950">
                    {selectedEnquiry.name}
                  </h2>
                  <span className="text-xs text-stone-500">ID: {selectedEnquiry.id}</span>
                </div>
                <button
                  onClick={() => setSelectedEnquiry(null)}
                  className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-amber-900">
                  Update Lead Status
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {statusOptions.map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => setEditingStatus(st)}
                      className={`py-2 rounded-xl text-xs font-semibold border ${
                        editingStatus === st
                          ? 'bg-amber-950 text-amber-300 border-amber-500 shadow-md'
                          : 'bg-stone-50 text-stone-700 border-stone-200'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Enquiry Details Grid */}
              <div className="space-y-3 p-4 rounded-2xl bg-amber-50/50 border border-amber-200 text-xs">
                <div>
                  <span className="font-bold text-amber-900">Phone: </span>
                  <a href={`tel:${selectedEnquiry.phone}`} className="underline font-semibold">{selectedEnquiry.phone}</a>
                </div>
                <div>
                  <span className="font-bold text-amber-900">Email: </span>
                  <span>{selectedEnquiry.email || 'N/A'}</span>
                </div>
                <div>
                  <span className="font-bold text-amber-900">Event: </span>
                  <span>{selectedEnquiry.eventType} on {selectedEnquiry.eventDate}</span>
                </div>
                <div>
                  <span className="font-bold text-amber-900">Venue / Location: </span>
                  <span>{selectedEnquiry.venueCity}</span>
                </div>
                <div>
                  <span className="font-bold text-amber-900">Guest Count & Budget: </span>
                  <span>{selectedEnquiry.guestCount} guests • {selectedEnquiry.budgetRange}</span>
                </div>
                <div>
                  <span className="font-bold text-amber-900">Services Needed: </span>
                  <span className="font-medium">{selectedEnquiry.servicesNeeded.join(', ')}</span>
                </div>
                {selectedEnquiry.message && (
                  <div>
                    <span className="font-bold text-amber-900">Client Message: </span>
                    <p className="italic text-stone-700 pt-0.5">{selectedEnquiry.message}</p>
                  </div>
                )}
              </div>

              {/* Internal Notes Editor */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-amber-900">
                  Internal Staff Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Record venue survey details, quoted price, follow-up dates..."
                  value={editingNotes}
                  onChange={(e) => setEditingNotes(e.target.value)}
                  className="w-full p-3 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>
            </div>

            {/* Drawer Footer Controls */}
            <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
              <a
                href={`https://wa.me/91${selectedEnquiry.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 hover:bg-emerald-500"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={handleSaveStatusAndNotes}
                disabled={saving}
                className="px-6 py-2.5 rounded-xl bg-amber-950 text-amber-300 text-xs font-bold flex items-center gap-2 hover:bg-amber-900 shadow-md"
              >
                <Save className="w-4 h-4" />
                <span>{saving ? 'Saving...' : 'Save Lead Changes'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
