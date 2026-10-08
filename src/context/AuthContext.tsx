'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase/config';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
  isSigningIn: boolean;
  signInWithGoogle: () => Promise<void>;
  logOut: () => Promise<void>;
  authError: string | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isAdmin: false,
  isSigningIn: false,
  signInWithGoogle: async () => {},
  logOut: async () => {},
  authError: null
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const checkAdminStatus = (currentUser: User | null): boolean => {
    if (!currentUser) return false;
    const allowedEmailsStr = process.env.NEXT_PUBLIC_ADMIN_EMAILS || '';
    if (!allowedEmailsStr) {
      // If no admin emails configured in dev, allow all authenticated Google users
      return true;
    }
    const allowedList = allowedEmailsStr
      .split(',')
      .map(e => e.trim().toLowerCase());
    return allowedList.includes((currentUser.email || '').toLowerCase());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      if (currentUser) {
        const allowed = checkAdminStatus(currentUser);
        setIsAdmin(allowed);
        if (!allowed) {
          setAuthError(`Access Denied: ${currentUser.email} is not an authorized admin email.`);
        } else {
          setAuthError(null);
        }
      } else {
        setIsAdmin(false);
        setAuthError(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    if (isSigningIn) return;
    setIsSigningIn(true);
    setAuthError(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const allowed = checkAdminStatus(result.user);
      if (!allowed) {
        await signOut(auth);
        setAuthError(`Access Denied: ${result.user.email} is not on the admin allow-list.`);
      }
    } catch (error: any) {
      if (error?.code === 'auth/cancelled-popup-request') {
        // Ignored: popup request was superseded by another request or cancelled silently
      } else if (error?.code === 'auth/popup-closed-by-user') {
        setAuthError('Sign-in cancelled. The login popup was closed before completing authentication.');
      } else if (error?.code === 'auth/popup-blocked') {
        setAuthError('Sign-in popup was blocked by your browser. Please allow popups for this site and try again.');
      } else if (error?.code === 'auth/unauthorized-domain') {
        setAuthError('Unauthorized domain. Please add your domain/IP to Firebase Authentication > Settings > Authorized Domains.');
      } else {
        console.error('Google Sign-In Error:', error);
        setAuthError(error?.message || 'Failed to sign in with Google.');
      }
    } finally {
      setIsSigningIn(false);
    }
  };

  const logOut = async () => {
    await signOut(auth);
    setUser(null);
    setIsAdmin(false);
    setAuthError(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, isAdmin, isSigningIn, signInWithGoogle, logOut, authError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
