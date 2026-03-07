// app/templates/sections/GallerySection.tsx
import { GallerySectionData } from "@/lib/sectionSchema";

export function GallerySection({ data }: { data: GallerySectionData }) {
  // Placeholder component
  const itemCount = 6;
  const items = Array.from({ length: itemCount }, (_, i) => i);

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Thư viện hình ảnh</h2>
        <div className={`grid gap-4 ${data.layout === 'grid' ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1'}`}>
          {items.map((item) => (
            <div key={item} className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center text-slate-400">
              Image {item + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}