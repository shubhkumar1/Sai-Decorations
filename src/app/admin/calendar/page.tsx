'use client';

import React, { useEffect, useState } from 'react';
import { Calendar as CalendarIcon, CheckCircle2, ChevronLeft, ChevronRight, Lock, Unlock } from 'lucide-react';
import AdminHeader from '@/components/admin/AdminHeader';
import { getBlockedDates, toggleBlockedDate } from '@/lib/firebase/firestore';

export default function AdminCalendarPage() {
  const [blockedDates, setBlockedDates] = useState<string[]>([]);
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2026, 10, 1));
  const [msg, setMsg] = useState('');

  useEffect(() => {
    setCurrentDate(new Date());
    async function load() {
      const dates = await getBlockedDates();
      setBlockedDates(dates);
    }
    load();
  }, []);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleToggle = async (dateStr: string) => {
    const isCurrentlyBlocked = blockedDates.includes(dateStr);
    const newStatus = !isCurrentlyBlocked;

    if (newStatus) {
      setBlockedDates((prev) => [...prev, dateStr]);
    } else {
      setBlockedDates((prev) => prev.filter((d) => d !== dateStr));
    }

    await toggleBlockedDate(dateStr, newStatus);
    setMsg(`Date ${dateStr} is now ${newStatus ? 'BLOCKED' : 'AVAILABLE'}.`);
    setTimeout(() => setMsg(''), 3000);
  };

  return (
    <div>
      <AdminHeader title="Blocked Dates Calendar Manager" />

      <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 max-w-4xl mx-auto">
        {msg && (
          <div className="p-4 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>{msg}</span>
          </div>
        )}

        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl border border-amber-500/20 space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-4">
            <h2 className="font-serif text-lg sm:text-2xl font-bold text-amber-950 flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
              <span>{monthNames[month]} {year}</span>
            </h2>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
                className="p-1.5 sm:p-2 rounded-lg border border-stone-200 hover:bg-amber-50"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
                className="p-1.5 sm:p-2 rounded-lg border border-stone-200 hover:bg-amber-50"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          <p className="text-[11px] sm:text-xs text-stone-500">
            Click any date below to toggle between <span className="font-bold text-emerald-700">Available</span> and <span className="font-bold text-maroon">Booked</span> status. Changes reflect live on the public site.
          </p>

          <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
              <div key={d} className="text-[10px] sm:text-xs font-bold text-amber-900 py-1 sm:py-2 uppercase tracking-wider">
                {d}
              </div>
            ))}

            {[...Array(firstDay)].map((_, i) => (
              <div key={`empty-${i}`} className="h-12 sm:h-16 rounded-lg sm:rounded-xl bg-stone-50/50" />
            ))}

            {[...Array(daysInMonth)].map((_, i) => {
              const dayNum = i + 1;
              const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
              const isBlocked = blockedDates.includes(dateStr);

              return (
                <button
                  type="button"
                  key={dayNum}
                  onClick={() => handleToggle(dateStr)}
                  className={`h-12 sm:h-16 rounded-lg sm:rounded-xl p-1 sm:p-2 flex flex-col items-center justify-between text-[10px] sm:text-xs transition-all border cursor-pointer hover:scale-105 ${
                    isBlocked
                      ? 'bg-maroon text-white border-red-900 shadow-inner'
                      : 'bg-emerald-50 text-emerald-950 border-emerald-200 hover:border-emerald-400'
                  }`}
                >
                  <span className="font-bold leading-none">{dayNum}</span>
                  {isBlocked ? (
                    <span className="flex items-center gap-0.5 sm:gap-1 text-[8px] sm:text-[9px] font-extrabold text-red-200 uppercase">
                      <Lock className="w-2 h-2 sm:w-2.5 sm:h-2.5" /> <span className="hidden xs:inline">Booked</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-0.5 sm:gap-1 text-[8px] sm:text-[9px] font-bold text-emerald-800">
                      <Unlock className="w-2 h-2 sm:w-2.5 sm:h-2.5" /> <span className="hidden xs:inline">Open</span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
