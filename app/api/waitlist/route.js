import { NextResponse } from "next/server";
import { addToWaitlist } from "@/lib/notion";

export async function POST(request) {
  try {
    const { email, whatsapp } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    await addToWaitlist(email.toLowerCase().trim(), whatsapp?.trim() || "");

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
