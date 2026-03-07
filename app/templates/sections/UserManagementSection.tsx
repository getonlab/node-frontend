// app/templates/sections/UserManagementSection.tsx
import { UserManagementSectionData } from "@/lib/sectionSchema";

export function UserManagementSection({ data }: { data: UserManagementSectionData }) {
  if (!data?.items?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Quản lý người dùng</h2>
        <div className="bg-slate-800/50 p-6 rounded-lg">
          <ul className="list-disc list-inside space-y-2 text-slate-200">
            {data.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}