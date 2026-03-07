// app/templates/sections/ExperienceSection.tsx
import { ExperienceSectionData } from "@/lib/sectionSchema";

export function ExperienceSection({ data }: { data: ExperienceSectionData }) {
  if (!data?.items?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-white mb-6">Kinh nghiệm làm việc</h2>
        <div className="space-y-6 border-l-2 border-slate-700 pl-6">
          {data.items.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[30px] top-1 h-4 w-4 rounded-full bg-emerald-500"></div>
              <p className="text-sm text-slate-400">{item.period}</p>
              <h3 className="text-xl font-bold text-white mt-1">{item.role}</h3>
              <p className="text-md text-slate-300 font-medium">{item.company}</p>
              <p className="mt-2 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}