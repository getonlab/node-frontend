// app/templates/sections/SummarySection.tsx
import { SummarySectionData } from "@/lib/sectionSchema";

export function SummarySection({ data }: { data: SummarySectionData }) {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-white mb-4">Tóm tắt</h2>
        <p className="text-slate-300 leading-relaxed">
          {data.text}
        </p>
      </div>
    </section>
  );
}