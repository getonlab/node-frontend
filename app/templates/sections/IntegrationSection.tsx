// app/templates/sections/IntegrationSection.tsx
import { IntegrationSectionData } from "@/lib/sectionSchema";

export function IntegrationSection({ data }: { data: IntegrationSectionData }) {
  if (!data?.items?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Tích hợp</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {data.items.map((item, index) => (
            <div key={index} className="bg-slate-700 p-4 rounded-lg text-white">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}