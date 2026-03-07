// app/web/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { TemplateRenderer } from "@/app/templates/TemplateRenderer";
import { Website } from "@/lib/website";

export default function WebPage() {
  const { slug } = useParams<{ slug: string }>();
  const [website, setWebsite] = useState<Website | null>(null);

  useEffect(() => {
    if (!slug) return;

    const raw = localStorage.getItem(`web:${slug}`);
    if (raw) setWebsite(JSON.parse(raw));
  }, [slug]);

  if (!website) {
    return <div className="p-10">❌ Website chưa được tạo</div>;
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <TemplateRenderer template={website.template} />
    </main>
  );
}