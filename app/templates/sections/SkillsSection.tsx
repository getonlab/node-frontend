// app/templates/sections/SkillsSection.tsx
import { SkillsSectionData } from "@/lib/sectionSchema";

export function SkillsSection({ data }: { data: SkillsSectionData }) {
  if (!data?.items?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Kỹ năng</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {data.items.map((item, index) => (
            <span key={index} className="bg-emerald-900 text-emerald-200 px-4 py-2 rounded-full text-sm font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}