// app/templates/sections/StatsSection.tsx
import { StatsSectionData } from "@/lib/sectionSchema";

export function StatsSection({ data }: { data: StatsSectionData }) {
  if (!data?.items?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {data.items.map((item, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg">
              <p className="text-3xl font-bold text-emerald-400">{item.value}</p>
              <p className="mt-2 text-sm text-slate-300">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}