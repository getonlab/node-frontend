// app/templates/sections/DemoSection.tsx
import { DemoSectionData } from "@/lib/sectionSchema";

export function DemoSection({ data }: { data: DemoSectionData }) {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-slate-800/50 p-12 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Demo sản phẩm</h2>
          <p className="text-slate-300">{data.note}</p>
          <div className="mt-6 h-64 bg-slate-700 rounded-md flex items-center justify-center text-slate-400">
            (Khu vực demo tương tác)
          </div>
        </div>
      </div>
    </section>
  );
}