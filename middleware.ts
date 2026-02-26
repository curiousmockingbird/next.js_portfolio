import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Block obvious bot/scanner paths (php, cgi-bin, wordpress, backups, etc.)
const BLOCKED_PATTERNS: RegExp[] = [
  /\.php($|\?|\/)/i,
  /\.asp(x)?($|\?|\/)/i,
  /\.cgi($|\?|\/)/i,
  /\.bak($|\?|\/)/i,
  /\.save($|\?|\/)/i,
  /\.env($|\?|\/)/i,
  /sftp-config\.json($|\?|\/)/i,
  /^\/cgi-bin(\/|$)/i,
  /^\/wp-(admin|login\.php|includes|content)(\/|$)/i,
  /^\/phpmyadmin(\/|$)/i,
  /^\/server-status(\/|$)/i,
  /^\/public\//i, // common probe like /public/phpinfo.php
];

// WordPress-specific probes that we answer with 410 Gone
const WORDPRESS_PATTERNS: RegExp[] = [
  /^\/wp-(admin|includes|content)(\/|$)/i,
  /^\/xmlrpc\.php$/i,
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip Next.js internal and static asset requests quickly
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/assets/") ||
    pathname.match(/\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js|txt|json|map)$/i)
  ) {
    return NextResponse.next();
  }

  // Return a fast 410 for explicit WordPress probes
  if (WORDPRESS_PATTERNS.some((re) => re.test(pathname))) {
    return new NextResponse("Gone", {
      status: 410,
      headers: { "Cache-Control": "no-store" },
    });
  }

  // Return a fast 404 for obviously invalid/probe paths to reduce log noise
  if (BLOCKED_PATTERNS.some((re) => re.test(pathname))) {
    return new NextResponse("Not Found", {
      status: 404,
      headers: { "Cache-Control": "no-store" },
    });
  }

  // Block non-GET/HEAD methods to non-API routes (common bot POST probes like xmlrpc.php)
  const method = request.method.toUpperCase();
  if (!pathname.startsWith("/api/") && !["GET", "HEAD"].includes(method)) {
    return new NextResponse("Method Not Allowed", {
      status: 405,
      headers: { "Allow": "GET, HEAD" },
    });
  }

  // Ensure a sessionId cookie exists to correlate logs across requests
  const res = NextResponse.next();
  const hasSession = request.cookies.get('sessionId');
  if (!hasSession) {
    // Use a stable but opaque session identifier
    const id = crypto.randomUUID();
    res.cookies.set('sessionId', id, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      // 30 days
      maxAge: 60 * 60 * 24 * 30,
    });
  }
  return res;
}

// Run for all routes
export const config = {
  matcher: ["/:path*"],
};
