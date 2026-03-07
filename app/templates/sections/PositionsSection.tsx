// app/templates/sections/PositionsSection.tsx
import { PositionsSectionData } from "@/lib/sectionSchema";

export function PositionsSection({ data }: { data: PositionsSectionData }) {
  if (!data?.items?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Vị trí đang tuyển</h2>
        <div className="space-y-8">
          {data.items.map((item, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="text-md text-slate-400">{item.type}</p>
                </div>
                <button className="px-4 py-2 bg-emerald-600 rounded-lg font-semibold text-sm">Ứng tuyển</button>
              </div>
              <div className="mt-4 border-t border-slate-700 pt-4">
                <h4 className="font-semibold text-slate-200 mb-2">Yêu cầu:</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  {item.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}