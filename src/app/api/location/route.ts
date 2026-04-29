import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { headerContext, logError, logInfo, errorToJSON } from "@/lib/logger";

export async function POST(request: Request) {
  const requestId = crypto.randomUUID();
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("sessionId")?.value;
  const { ip, country, region, userAgent, path, referer } = headerContext(request);
  const baseCtx = {
    route: "/api/location",
    method: "POST",
    requestId,
    sessionId,
    ip,
    country,
    region,
    userAgent,
    path,
    referer,
  };

  try {
    await logInfo("visitor_location", baseCtx);
    return NextResponse.json({ status: 200, message: "Visitor location logged", requestId });
  } catch (error: any) {
    const err = errorToJSON(error);
    await logError("api_error", baseCtx, { error: err });
    return new Response(error?.message || "Internal Server Error", { status: 500, statusText: "Internal Server Error" });
  }
}
