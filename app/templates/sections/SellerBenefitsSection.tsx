// app/templates/sections/SellerBenefitsSection.tsx
import { SellerBenefitsSectionData } from "@/lib/sectionSchema";

export function SellerBenefitsSection({ data }: { data: SellerBenefitsSectionData }) {
  if (!data?.items?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Lợi ích cho người bán</h2>
        <ul className="space-y-4">
          {data.items.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="text-emerald-400">✔</span>
              <span className="text-slate-200 text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}