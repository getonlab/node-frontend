// app/templates/sections/PublicationsSection.tsx
import { PublicationsSectionData } from "@/lib/sectionSchema";

export function PublicationsSection({ data }: { data: PublicationsSectionData }) {
  if (!data?.items?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Công bố khoa học</h2>
        <div className="bg-slate-800/50 p-6 rounded-lg">
          <ul className="list-decimal list-inside space-y-3 text-slate-200">
            {data.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}