// app/templates/sections/AboutSection.tsx
import { AboutSectionData } from "@/lib/sectionSchema";

export function AboutSection({ data }: { data: AboutSectionData }) {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Về chúng tôi</h2>
        <p className="text-lg text-slate-300 leading-relaxed">
          {data.description}
        </p>
      </div>
    </section>
  );
}