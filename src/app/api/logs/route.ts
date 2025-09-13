import { NextResponse } from "next/server";

export async function POST(request: Request) {
    if (request.method !== "POST") {
        return new Response(null, { status: 404, statusText: "Not Found" });
    }

    try {
        const body = await request.json().catch(() => ({}));
        const { buttonName, source, label, meta, path } = body || {};

        const finalLabel: string = label || buttonName || "(no-label)";
        const finalSource: string = source || "unknown";

        // Log structured info to Vercel logs
        console.log(
          `🔘 Button Click [${finalSource}] ${finalLabel}` + (path ? ` @ ${path}` : ""),
          meta ? { meta } : ""
        );

        return NextResponse.json({ status: 200, message: `Button click logged: ${finalLabel}`, source: finalSource });
    } catch (error: any) {
        return new Response(error.message, { status: 500 });
    }
}
