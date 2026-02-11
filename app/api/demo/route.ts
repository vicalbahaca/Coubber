import { NextResponse } from "next/server";

import { demoRequestSchema } from "@/app/components/forms/demoSchema";

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);

  const parsed = demoRequestSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.flatten() },
      { status: 400 },
    );
  }

  // Prelaunch stub: integrate CRM/email automation here.
  return NextResponse.json({ ok: true }, { status: 200 });
}

