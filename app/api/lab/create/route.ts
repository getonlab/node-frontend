// app/api/lab/create/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const project = await req.json();

  if (!project.slug || !project.preview?.analysis?.title) {
    return NextResponse.json({ error: "Invalid project" }, { status: 400 });
  }

  // TODO: save DB / file / KV
  // tạm thời return OK
  return NextResponse.json({
    ok: true,
    slug: project.slug,
  });
}