import { NextResponse } from "next/server";
import { getWaitlistCount } from "@/lib/notion";

export const revalidate = 60; // cache for 60s

export async function GET() {
  try {
    const count = await getWaitlistCount();
    return NextResponse.json({ count }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ count: 0 }, { status: 200 });
  }
}
