// app/templates/sections/ProjectsSection.tsx
import { ProjectsSectionData } from "@/lib/sectionSchema";

export function ProjectsSection({ data }: { data: ProjectsSectionData }) {
  if (!data?.items?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Dự án tiêu biểu</h2>
        <div className="space-y-6">
          {data.items.map((item, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white">{item.name}</h3>
              <p className="mt-2 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}