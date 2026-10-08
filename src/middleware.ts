import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Pass through middleware check for admin routes
  // Actual auth session validation is enforced client-side via AuthContext & Firebase Auth token
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
};
