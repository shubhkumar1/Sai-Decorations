'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { useAuth } from '@/context/AuthContext';
import { Sparkles, ShieldAlert, LogIn } from 'lucide-react';

import { AdminSidebarProvider } from '@/context/AdminSidebarContext';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading, isAdmin, signInWithGoogle, authError } = useAuth();

  const isLoginPage = pathname === '/admin/login';

  if (isLoginPage) {
    return <div className="min-h-screen bg-cream">{children}</div>;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-amber-950 flex flex-col items-center justify-center text-amber-200 space-y-4">
        <Sparkles className="w-10 h-10 animate-spin text-amber-400" />
        <p className="text-sm font-serif">Verifying Admin Permissions...</p>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-950 via-stone-900 to-amber-950 flex items-center justify-center p-4 text-white">
        <div className="max-w-md w-full bg-stone-900 border-2 border-amber-500/40 rounded-3xl p-8 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto border border-amber-400/40">
            <ShieldAlert className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-bold gold-gradient-text">
              Admin Access Required
            </h2>
            <p className="text-xs text-amber-200/80">
              Please sign in with an authorized Google account (listed in ADMIN_EMAILS) to access the Sai Decorations management panel.
            </p>
          </div>

          {authError && (
            <div className="p-3 rounded-xl bg-red-950/80 border border-red-800 text-red-200 text-xs text-left">
              {authError}
            </div>
          )}

          <button
            onClick={signInWithGoogle}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 font-extrabold text-sm shadow-xl hover:brightness-110 flex items-center justify-center gap-2"
          >
            <LogIn className="w-4 h-4" />
            <span>Sign In with Google</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <AdminSidebarProvider>
      <div className="min-h-screen flex bg-stone-50 overflow-x-hidden">
        <AdminSidebar />
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          {children}
        </div>
      </div>
    </AdminSidebarProvider>
  );
}
