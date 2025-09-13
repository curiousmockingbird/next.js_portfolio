import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Extract visitor details
    const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0] || "Unknown IP";
    const country = request.headers.get("x-vercel-ip-country") || "Unknown Country";
    const region = request.headers.get("x-vercel-ip-country-region") || "Unknown Region";
    const userAgent = request.headers.get("user-agent") || "Unknown User-Agent";

    // Log visitor details to Vercel logs
    console.log(`🌍 Visitor Info: IP=${ip}, Country=${country}, Region=${region}, Device=${userAgent}`);

    return NextResponse.json({ status: 200, message: "Visitor location logged" });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
}
