// app/templates/sections/HighlightsSection.tsx
import { HighlightsSectionData } from "@/lib/sectionSchema";

export function HighlightsSection({ data }: { data: HighlightsSectionData }) {
  if (!data?.items?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Điểm nổi bật</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.items.map((item, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg text-center">
              <p className="text-xl font-semibold text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}