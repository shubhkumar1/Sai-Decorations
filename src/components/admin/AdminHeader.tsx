'use client';

import React from 'react';
import { ShieldCheck, User, Menu } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useAdminSidebar } from '@/context/AdminSidebarContext';

export default function AdminHeader({ title }: { title: string }) {
  const { user } = useAuth();
  const { toggleMobile } = useAdminSidebar();

  return (
    <header className="bg-white border-b border-amber-500/20 px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between shadow-sm sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggleMobile}
          className="lg:hidden p-2 rounded-lg border border-amber-500/30 text-amber-950 hover:bg-amber-50 transition-colors shrink-0 active:scale-95 touch-manipulation cursor-pointer"
          aria-label="Open Admin Menu"
        >
          <Menu className="w-5 h-5 text-amber-800" />
        </button>

        <h1 className="font-serif text-lg sm:text-2xl font-bold text-amber-950 leading-tight">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-[11px] sm:text-xs flex items-center gap-1.5 border border-emerald-300 shrink-0">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Admin Authenticated</span>
          <span className="sm:hidden">Admin</span>
        </span>

        {user && (
          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-stone-700 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200 max-w-[180px] sm:max-w-none truncate">
            <User className="w-4 h-4 text-amber-700 shrink-0" />
            <span className="truncate">{user.email}</span>
          </div>
        )}
      </div>
    </header>
  );
}
