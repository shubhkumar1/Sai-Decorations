'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar as CalendarIcon, CheckCircle2, XCircle, ArrowRight, ChevronLeft, ChevronRight, Calculator } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { getBlockedDates } from '@/lib/firebase/firestore';

export default function AvailabilityPage() {
  const [blockedDates, setBlockedDates] = useState<string[]>([]);
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2026, 10, 1));

  useEffect(() => {
    setCurrentDate(new Date());
    async function loadBlocked() {
      const dates = await getBlockedDates();
      setBlockedDates(dates);
    }
    loadBlocked();
  }, []);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className="py-12 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeader
          badge="Live Booking Status"
          title="Event Availability Calendar"
          subtitle="Check blocked wedding & reception dates in Ranchi. Green dates are open for reservation."
        />

        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-500/20 space-y-6">
          {/* Calendar Header Controls */}
          <div className="flex items-center justify-between border-b border-amber-100 pb-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-amber-950 flex items-center gap-2">
              <CalendarIcon className="w-6 h-6 text-amber-600" />
              <span>{monthNames[month]} {year}</span>
            </h2>

            <div className="flex items-center gap-2">
              <button
                onClick={prevMonth}
                className="p-2 rounded-lg border border-stone-200 hover:bg-amber-50 text-stone-700"
                aria-label="Previous Month"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextMonth}
                className="p-2 rounded-lg border border-stone-200 hover:bg-amber-50 text-stone-700"
                aria-label="Next Month"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 text-xs font-semibold">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded bg-emerald-500" />
              <span className="text-stone-700">Available for Booking</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded bg-maroon" />
              <span className="text-stone-700">Booked / Reserved</span>
            </div>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-2 text-center">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
              <div key={d} className="text-xs font-bold text-amber-900 py-2 uppercase tracking-wider">
                {d}
              </div>
            ))}

            {/* Empty slots before month start */}
            {[...Array(firstDay)].map((_, i) => (
              <div key={`empty-${i}`} className="h-16 rounded-xl bg-stone-50/50" />
            ))}

            {/* Month days */}
            {[...Array(daysInMonth)].map((_, i) => {
              const dayNum = i + 1;
              const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
              const isBlocked = blockedDates.includes(dateStr);

              return (
                <div
                  key={dayNum}
                  className={`h-16 rounded-xl p-2 flex flex-col items-center justify-between text-xs transition-all border ${
                    isBlocked
                      ? 'bg-maroon-dark text-white border-red-900 shadow-inner'
                      : 'bg-emerald-50/60 text-emerald-950 border-emerald-200 hover:border-emerald-400'
                  }`}
                >
                  <span className="font-bold">{dayNum}</span>
                  {isBlocked ? (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-red-950 text-red-200 uppercase tracking-tighter">
                      Booked
                    </span>
                  ) : (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-200 text-emerald-900">
                      Open
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-stone-200 text-center space-y-4">
            <p className="text-xs text-stone-600">
              Found your preferred date available? Reserve it now before another family books!
            </p>

            <Link
              href="/quote-builder"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 font-extrabold text-xs shadow-lg hover:brightness-110"
            >
              <Calculator className="w-4 h-4" />
              <span>Reserve Date & Calculate Quote</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
