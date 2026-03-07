// app/templates/sections/ProductsSection.tsx
import { ProductsSectionData } from "@/lib/sectionSchema";

export function ProductsSection({ data }: { data: ProductsSectionData }) {
  if (!data?.items?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">{data.title || "Sản phẩm"}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {data.items.map((item, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-white">{item.name}</h3>
              <p className="mt-2 text-lg text-emerald-400">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}