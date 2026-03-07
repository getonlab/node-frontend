// app/templates/sections/DashboardOverviewSection.tsx
import { DashboardOverviewSectionData } from "@/lib/sectionSchema";

export function DashboardOverviewSection({ data }: { data: DashboardOverviewSectionData }) {
  if (!data?.widgets?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Tổng quan Dashboard</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.widgets.map((widget, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg flex items-center justify-center text-center">
              <p className="font-semibold text-slate-200">{widget}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}