// app/templates/sections/ListingsSection.tsx
import { ListingsSectionData } from "@/lib/sectionSchema";

export function ListingsSection({ data }: { data: ListingsSectionData }) {
  if (!data?.fields?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Danh sách sản phẩm</h2>
        <div className="bg-slate-800/50 p-6 rounded-lg">
          <div className="grid grid-cols-4 gap-4 font-semibold text-slate-300 border-b border-slate-600 pb-3 mb-3">
            {data.fields.map((field, index) => (
              <div key={index}>{field}</div>
            ))}
          </div>
          {/* Placeholder for actual listings */}
          <div className="text-center text-slate-400 py-8">
            (Khu vực hiển thị danh sách sản phẩm)
          </div>
        </div>
      </div>
    </section>
  );
}