'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Sparkles, ShieldCheck, LogIn } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const { user, isAdmin, isSigningIn, signInWithGoogle, authError } = useAuth();

  React.useEffect(() => {
    if (user && isAdmin) {
      router.push('/admin/dashboard');
    }
  }, [user, isAdmin, router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-stone-900 to-amber-950 flex items-center justify-center p-4 text-white">
      <div className="max-w-md w-full bg-stone-900 border-2 border-amber-500/40 rounded-3xl p-8 shadow-2xl space-y-6 text-center">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400/60 shadow-lg mx-auto bg-amber-950">
          <Image
            src="/logo.png"
            alt="Sai Decorations Logo"
            fill
            sizes="64px"
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-3xl font-bold gold-gradient-text">
            Sai Admin Portal
          </h1>
          <p className="text-xs text-amber-200">
            Authorized management login for Sai Decorations – Tent House & Event Services in Ranchi
          </p>
        </div>

        {authError && (
          <div className="p-3 rounded-xl bg-red-950/90 border border-red-800 text-red-200 text-xs text-left">
            {authError}
          </div>
        )}

        <button
          type="button"
          disabled={isSigningIn}
          onClick={signInWithGoogle}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-amber-950 font-extrabold text-sm shadow-xl hover:brightness-110 flex items-center justify-center gap-2 transform active:scale-98 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <LogIn className={`w-5 h-5 ${isSigningIn ? 'animate-spin' : ''}`} />
          <span>{isSigningIn ? 'Opening Google Sign-In...' : 'Sign In with Google'}</span>
        </button>

        <p className="text-[11px] text-amber-300/60 pt-4 border-t border-amber-800/40">
          Note: Only allow-listed emails set in <code className="text-amber-200">NEXT_PUBLIC_ADMIN_EMAILS</code> can access dashboard metrics & CRM tools.
        </p>
      </div>
    </div>
  );
}
