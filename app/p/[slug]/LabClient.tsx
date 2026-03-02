// app/p/[slug]/LabClient.tsx
"use client";

import { DesignPreviewSection } from "@/app/previewSections";
//import { projects } from "@/lib/project";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function LabClient({ project }: { project: any }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function LabSection({
    title,
    children,
    }: {
    title: string;
    children: React.ReactNode;
    }) {
    return (
        <section className="
          bg-slate-900
          border border-slate-600
          rounded-2xl
          p-6
          shadow-sm prose-headings:text-white
        ">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        {children}
        </section>
    );
    }

  if (!project) {
    return <div className="p-20">❌ Không tìm thấy Lab trong LabClient</div>;
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-20 space-y-10">
      <header>
        <h1 className="text-4xl font-bold tracking-tight">
          {project.title}
        </h1>
        <p className="text-slate-300 mt-2"> Dự án · <span className="text-emerald-400">{project.brand}</span></p>
      </header>

      <section className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-600 rounded-2xl p-6 space-y-4 prose-headings:text-white">
        <div>
            <h2 className="text-lg font-semibold">💡 Tổng quan</h2>
            <p className="text-base text-slate-200 leading-relaxed">
            {project.preview?.analysis?.summary}
            </p>
        </div>

        <div className="text-sm space-y-1 text-slate-300">
            <div><b>Loại:</b> {project.preview?.analysis?.type}</div>
            <div><b>Đối tượng:</b> {project.preview?.analysis?.target}</div>
            <div><b>Vấn đề:</b> {project.preview?.analysis?.problem}</div>
            <div><b>Mục tiêu:</b> {project.preview?.analysis?.goal}</div>
        </div>

        <div className="pt-4 border-t border-slate-700 text-xs text-slate-400">
            <div>Slug: /p/{project.slug}</div>
            <div>Owner: ẩn</div>
        </div>
      </section>

      {/* ANALYSIS */}
      <LabSection title="🔍 Phân tích ý tưởng">
        <article className="prose prose-invert max-w-none">
            <ReactMarkdown>
            {project.content.analysis}
            </ReactMarkdown>
        </article>
      </LabSection>

      <LabSection title="🎨 Thiết kế UI/UX">
        {project.preview.design && <DesignPreviewSection preview={project.preview.design} />}
      </LabSection>

      <LabSection title="🎨 Phân tích chi tiết UI/UX">
        <div className="mt-6 prose prose-invert max-w-none">
            <ReactMarkdown>
            {project.content.design}
            </ReactMarkdown>
        </div>
      </LabSection>

      <LabSection title="🏗️ Phân tích chi tiết kiến trúc">
        <article className="prose prose-invert max-w-none">
            <ReactMarkdown>
            {project.content.architecture}
            </ReactMarkdown>
        </article>
      </LabSection>

      <section className="text-center pt-20">
          <h3 className="text-2xl font-bold">
              Bạn có thể phát triển dự án này 🚀
          </h3>

          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <button className="
              px-6 py-3 rounded-xl
              bg-emerald-600 hover:bg-emerald-500
              text-white font-semibold
              shadow
            ">
              ✏️ Chỉnh sửa Lab
            </button>

            <button className="
              px-6 py-3 rounded-xl
              bg-slate-700 hover:bg-slate-600
              text-slate-100
            ">
              📤 Chia sẻ
            </button>
          </div>
      </section>

    </main>
  );
}