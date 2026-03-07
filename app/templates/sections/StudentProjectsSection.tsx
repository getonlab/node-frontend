// app/templates/sections/StudentProjectsSection.tsx
import { StudentProjectsSectionData } from "@/lib/sectionSchema";

export function StudentProjectsSection({ data }: { data: StudentProjectsSectionData }) {
  if (!data?.items?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Dự án của sinh viên</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {data.items.map((item, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg text-center">
              <p className="text-lg font-semibold text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}