// app/templates/sections/ApplicationProcessSection.tsx
import { ApplicationProcessSectionData } from "@/lib/sectionSchema";

export function ApplicationProcessSection({ data }: { data: ApplicationProcessSectionData }) {
  if (!data?.steps?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Quy trình ứng tuyển</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {data.steps.map((step, index) => (
            <>
              <div key={index} className="bg-slate-800/50 p-4 rounded-lg text-center">
                <p className="font-semibold text-slate-200">{step}</p>
              </div>
              {index < data.steps.length - 1 && <span className="text-emerald-400 text-2xl hidden md:block">&rarr;</span>}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}