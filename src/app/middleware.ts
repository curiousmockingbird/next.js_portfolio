import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "Unknown IP";
  const country = request.headers.get("x-vercel-ip-country") || "Unknown Country";
  const region = request.headers.get("x-vercel-ip-country-region") || "Unknown Region";
  const userAgent = request.headers.get("user-agent") || "Unknown User-Agent";

  console.log(`🌍 Visitor Info: IP: ${ip}, Country: ${country}, Region: ${region}, Device: ${userAgent}`);

  return NextResponse.next();
}