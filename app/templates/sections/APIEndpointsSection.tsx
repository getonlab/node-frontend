// app/templates/sections/APIEndpointsSection.tsx
import { APIEndpointsSectionData } from "@/lib/sectionSchema";

export function APIEndpointsSection({ data }: { data: APIEndpointsSectionData }) {
  if (!data?.endpoints?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">API Endpoints</h2>
        <div className="bg-slate-800/50 p-6 rounded-lg font-mono text-sm text-emerald-300 space-y-2">
          {data.endpoints.map((endpoint, index) => (
            <div key={index}>
              <span className="text-cyan-400">GET</span> {endpoint}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}