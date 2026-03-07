// app/templates/sections/ContactSection.tsx
import { contactSectionData } from "@/lib/sectionSchema";

export function ContactSection({ data }: { data: contactSectionData }) {
  return (
    <section className="py-12 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Liên hệ</h2>
        <div className="space-y-2 text-slate-300">
          {data.email && <p>Email: <a href={`mailto:${data.email}`} className="text-emerald-400 hover:underline">{data.email}</a></p>}
          {data.phone && <p>Phone: {data.phone}</p>}
          <div className="flex justify-center gap-4 pt-4">
            {data.github && <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">GitHub</a>}
            {data.linkedin && <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">LinkedIn</a>}
            {data.twitter && <a href={`https://twitter.com/${data.twitter}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">Twitter</a>}
            {data.facebook && <a href={`https://facebook.com/${data.facebook}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">Facebook</a>}
          </div>
        </div>
      </div>
    </section>
  );
}