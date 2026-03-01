export default async function LabPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold">
        Lab: {resolvedParams.slug}
      </h1>

      <p className="mt-4 text-slate-400">
        Trang Lab cho dự án sinh viên – đang phát triển 🚧
      </p>
    </main>
  );
}