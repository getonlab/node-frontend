// app/p/[slug]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import LabClient from "./LabClient";
import { Project } from "@/lib/project";

export default function LabPage() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!slug) return;

    const raw = localStorage.getItem(`lab:${slug}`);
    if (raw) {
      setProject(JSON.parse(raw));
    }
  }, [slug]);

  if (!project) {
    return <div className="p-10">❌ Không tìm thấy Lab</div>;
  }

  return <LabClient project={project} />;
}