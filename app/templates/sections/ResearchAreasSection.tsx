// app/templates/sections/ResearchAreasSection.tsx
import { ResearchAreasSectionData } from "@/lib/sectionSchema";

export function ResearchAreasSection({ data }: { data: ResearchAreasSectionData }) {
  if (!data?.items?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Lĩnh vực nghiên cứu</h2>
        <div className="flex flex-wrap gap-3">
          {data.items.map((item, index) => (
            <span key={index} className="bg-sky-900 text-sky-200 px-4 py-2 rounded-full text-sm font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}