// app/templates/sections/CTASection.tsx
import { CTASectionData } from "@/lib/sectionSchema";

export function CTASection({ data }: { data: CTASectionData }) {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white">{data.text}</h2>
        <button className="mt-6 px-8 py-3 bg-emerald-600 rounded-xl font-semibold text-lg">
          {data.action}
        </button>
      </div>
    </section>
  );
}