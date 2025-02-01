import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // Extract visitor details
  const ip = request.headers.get("x-forwarded-for") || "Unknown IP";
  const country = request.headers.get("x-vercel-ip-country") || "Unknown Country";
  const region = request.headers.get("x-vercel-ip-country-region") || "Unknown Region";
  const userAgent = request.headers.get("user-agent") || "Unknown User-Agent";

  // Log visitor info to Vercel logs
  console.log(`🌍 Visitor Info: IP: ${ip}, Country: ${country}, Region: ${region}, Device: ${userAgent}`);

  // // Send logs to BetterStack (Logtail)
  // await fetch("https://in.logtail.com", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Authorization": `Bearer ${process.env.LOGTAIL_TOKEN}`, // Store in .env.local
  //   },
  //   body: JSON.stringify({
  //     message: `Visitor on Home Page`,
  //     ip,
  //     country,
  //     region,
  //     userAgent,
  //     timestamp: new Date(),
  //   }),
  // });

  // Continue request handling
  const response = NextResponse.next();
  response.headers.set("Cache-Control", "no-store"); // Prevent caching
  return response;
}

// ✅ Ensures middleware only runs on `/` (home page)
export const config = {
  matcher: ["/"],
};
