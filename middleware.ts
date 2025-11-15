import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Block obvious bot/scanner paths (php, cgi-bin, wordpress, backups, etc.)
const BLOCKED_PATTERNS: RegExp[] = [
  /\.php($|\?|\/)/i,
  /\.asp(x)?($|\?|\/)/i,
  /\.cgi($|\?|\/)/i,
  /\.bak($|\?|\/)/i,
  /\.save($|\?|\/)/i,
  /^\/cgi-bin(\/|$)/i,
  /^\/wp-(admin|login\.php|includes|content)(\/|$)/i,
  /^\/phpmyadmin(\/|$)/i,
  /^\/server-status(\/|$)/i,
  /^\/public\//i, // common probe like /public/phpinfo.php
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

  // Return a fast 404 for obviously invalid/probe paths to reduce log noise
  if (BLOCKED_PATTERNS.some((re) => re.test(pathname))) {
    return new NextResponse("Not Found", {
      status: 404,
      headers: { "Cache-Control": "no-store" },
    });
  }

  return NextResponse.next();
}

// Run for all routes
export const config = {
  matcher: ["/:path*"],
};
