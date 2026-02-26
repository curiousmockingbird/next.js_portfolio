import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { headerContext, logError, logInfo, errorToJSON } from "@/lib/logger";

export async function POST(request: Request) {
  if (request.method !== "POST") {
    return new Response(null, { status: 404, statusText: "Not Found" });
  }

  const started = Date.now();
  const requestId = crypto.randomUUID();
  const sessionId = cookies().get("sessionId")?.value;
  const { ip, country, region, userAgent, path } = headerContext(request);
  const baseCtx = {
    route: "/api/logs",
    method: "POST",
    requestId,
    sessionId,
    ip,
    country,
    region,
    userAgent,
    path,
  };

  try {
    const body = await request.json().catch(() => ({}));
    const { event, buttonName, source, label, meta } = body || {};
    const finalLabel: string = label || buttonName || "(no-label)";
    const finalSource: string = source || "unknown";
    const ev: string = event || "button_click";

    await logInfo(ev, baseCtx, { source: finalSource, label: finalLabel, meta });

    const duration_ms = Date.now() - started;
    return NextResponse.json({ status: 200, message: `Logged: ${ev}`, source: finalSource, label: finalLabel, requestId, duration_ms });
  } catch (error: any) {
    const err = errorToJSON(error);
    await logError("api_error", baseCtx, { error: err });
    return new Response(error?.message || "Internal Server Error", { status: 500, statusText: "Internal Server Error" });
  }
}
