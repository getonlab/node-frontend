// app/templates/sections/CompanyCultureSection.tsx
import { CompanyCultureSectionData } from "@/lib/sectionSchema";

export function CompanyCultureSection({ data }: { data: CompanyCultureSectionData }) {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Văn hoá & Môi trường</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Giá trị cốt lõi</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-200">
              {data.values.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quyền lợi</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-200">
              {data.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}