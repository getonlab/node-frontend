// app/templates/sections/DashboardSection.tsx
import { DashboardSectionData } from "@/lib/sectionSchema";

export function DashboardSection({ data }: { data: DashboardSectionData }) {
  if (!data?.widgets?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Dashboard</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {data.widgets.map((widget, index) => (
            <div key={index} className="bg-slate-800/50 p-10 rounded-lg flex items-center justify-center">
              <p className="text-lg font-semibold text-slate-200">{widget}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}