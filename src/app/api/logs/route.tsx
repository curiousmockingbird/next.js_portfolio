import { NextResponse } from "next/server";

export async function POST(request: Request) {
    if (request.method !== "POST") {
        return new Response(null, { status: 404, statusText: "Not Found" });
    }

    try {
        const { buttonName } = await request.json();

        if (!buttonName) {
            return new Response("Missing button name", { status: 400 });
        }

        // Log button click to Vercel logs
        console.log(`🔘 Button Click Logged: ${buttonName}`);

        // // Extract visitor details
        // const ip = request.headers.get("x-forwarded-for") || "Unknown IP";
        // const country = request.headers.get("x-vercel-ip-country") || "Unknown Country";
        // const region = request.headers.get("x-vercel-ip-country-region") || "Unknown Region";
        // const userAgent = request.headers.get("user-agent") || "Unknown User-Agent";

        // Log button click & visitor info to Vercel logs
        console.log(`🔘 Button Click Logged: ${buttonName}`);
        // console.log(`🌍 Visitor Info: IP=${ip}, Country=${country}, Region=${region}, Device=${userAgent}`);

        return NextResponse.json({ status: 200, message: `Button click logged: ${buttonName}` });
    } catch (error: any) {
        return new Response(error.message, { status: 500 });
    }
}