// app/templates/sections/HeroSection.tsx
import { HeroSectionData } from "@/lib/sectionSchema";

export function HeroSection({ data }: { data: HeroSectionData }) {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold text-white">
        {data.title}
      </h1>

      {data.subtitle && (
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
          {data.subtitle}
        </p>
      )}

      {data.cta && (
        <button className="mt-6 px-6 py-3 bg-emerald-600 rounded-xl font-semibold">
          {data.cta}
        </button>
      )}
    </section>
  );
}