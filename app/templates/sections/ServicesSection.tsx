// app/templates/sections/ServicesSection.tsx
import { ServicesSectionData } from "@/lib/sectionSchema";

export function ServicesSection({ data }: { data: ServicesSectionData }) {
  if (!data?.items?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Dịch vụ</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {data.items.map((item, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg">
              <p className="text-lg font-semibold text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}