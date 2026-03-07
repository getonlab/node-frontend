// app/templates/sections/StrengthsSection.tsx
import { StrengthsSectionData } from "@/lib/sectionSchema";

export function StrengthsSection({ data }: { data: StrengthsSectionData }) {
  if (!data?.items?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-white mb-4">Điểm mạnh</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-200">
          {data.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}