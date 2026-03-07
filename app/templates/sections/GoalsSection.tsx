// app/templates/sections/GoalsSection.tsx
import { GoalsSectionData } from "@/lib/sectionSchema";

export function GoalsSection({ data }: { data: GoalsSectionData }) {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-white mb-4">Mục tiêu</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 p-6 rounded-lg">
            <h3 className="font-bold text-slate-300 mb-2">Ngắn hạn</h3>
            <p className="text-white">{data.shortTerm}</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-lg">
            <h3 className="font-bold text-slate-300 mb-2">Dài hạn</h3>
            <p className="text-white">{data.longTerm}</p>
          </div>
        </div>
      </div>
    </section>
  );
}