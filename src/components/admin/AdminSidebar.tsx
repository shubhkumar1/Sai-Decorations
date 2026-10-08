'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Inbox,
  Tag,
  Image as ImageIcon,
  Package,
  Calendar,
  Settings,
  LogOut,
  ExternalLink,
  X
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useAdminSidebar } from '@/context/AdminSidebarContext';

export default function AdminSidebar() {
  const pathname = usePathname();
  const { logOut, user } = useAuth();
  const { mobileOpen, closeMobile } = useAdminSidebar();

  const links = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Enquiries CRM', href: '/admin/enquiries', icon: Inbox },
    { name: 'Offer Popup Manager', href: '/admin/offer', icon: Tag },
    { name: 'Gallery Manager', href: '/admin/gallery', icon: ImageIcon },
    { name: 'Packages & Pricing', href: '/admin/packages', icon: Package },
    { name: 'Blocked Dates Calendar', href: '/admin/calendar', icon: Calendar },
    { name: 'Site Settings', href: '/admin/settings', icon: Settings }
  ];

  const sidebarInner = (
    <div className="flex flex-col justify-between h-full space-y-6">
      <div className="space-y-6">
        {/* Brand Header */}
        <div className="flex items-center justify-between px-2 pt-2 border-b border-amber-800/40 pb-4">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-amber-400/50 shadow-md bg-amber-950 shrink-0">
              <Image
                src="/logo.png"
                alt="Sai Admin Logo"
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-serif font-bold text-lg gold-gradient-text block leading-none">
                Sai Decorations
              </span>
              <span className="text-[10px] text-amber-300 uppercase tracking-wider block mt-1">
                Admin Dashboard
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={closeMobile}
            className="lg:hidden p-1.5 rounded-lg border border-amber-500/30 text-amber-300 hover:bg-amber-900 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-amber-500 text-amber-950 font-bold shadow-md'
                    : 'text-amber-100 hover:bg-amber-900/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-950' : 'text-amber-400'}`} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Controls */}
      <div className="pt-4 border-t border-amber-800/40 space-y-3">
        <Link
          href="/"
          target="_blank"
          onClick={closeMobile}
          className="flex items-center justify-between px-3 py-2 rounded-lg bg-amber-900/40 hover:bg-amber-900/70 text-amber-200 text-xs transition-colors"
        >
          <span>View Public Site</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>

        {user && (
          <div className="px-2 text-[11px] text-amber-300/80 truncate">
            Signed in: <span className="text-white font-medium">{user.email}</span>
          </div>
        )}

        <button
          type="button"
          onClick={() => {
            closeMobile();
            logOut();
          }}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-red-950/80 hover:bg-red-900 text-red-200 text-xs font-bold border border-red-800/40 transition-colors cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:flex w-64 bg-amber-950 text-white min-h-screen border-r border-amber-800/40 p-4 shrink-0 flex-col justify-between">
        {sidebarInner}
      </aside>

      {/* Mobile Slide-Over Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={closeMobile}
          />
          <aside className="fixed inset-y-0 left-0 w-72 max-w-[85vw] bg-amber-950 text-white p-4 shadow-2xl border-r border-amber-800/40 z-50 flex flex-col justify-between animate-in slide-in-from-left duration-200">
            {sidebarInner}
          </aside>
        </div>
      )}
    </>
  );
}
