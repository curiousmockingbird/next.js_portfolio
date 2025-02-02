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


        // Log button click & visitor info to Vercel logs
        console.log(`🔘 Button Click Logged: ${buttonName}`);

        return NextResponse.json({ status: 200, message: `Button click logged: ${buttonName}` });
    } catch (error: any) {
        return new Response(error.message, { status: 500 });
    }
}