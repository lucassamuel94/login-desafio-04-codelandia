import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const isLoginPage = req.nextUrl.pathname === '/';

  if (!token) {
    if (isLoginPage) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (token && isLoginPage) {
    return NextResponse.redirect(new URL('/profile', req.url));
  }
}

export const config = {
  matcher: ['/', '/profile/:path*', '/dashboard/:path*'],
};