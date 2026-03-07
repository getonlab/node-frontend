// app/templates/sections/EmployeeTestimonialsSection.tsx
import { EmployeeTestimonialsSectionData } from "@/lib/sectionSchema";

export function EmployeeTestimonialsSection({ data }: { data: EmployeeTestimonialsSectionData }) {
  if (!data?.items?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Cộng sự nói gì về chúng tôi</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.items.map((item, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg">
              <p className="text-slate-300 italic">"{item.quote}"</p>
              <div className="mt-4 text-right">
                <p className="font-bold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}