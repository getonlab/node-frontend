// app/templates/sections/CategoriesSection.tsx
import { CategoriesSectionData } from "@/lib/sectionSchema";

export function CategoriesSection({ data }: { data: CategoriesSectionData }) {
  if (!data?.items?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Danh mục</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {data.items.map((item, index) => (
            <button key={index} className="bg-slate-700 hover:bg-slate-600 text-white px-5 py-2 rounded-lg">
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}