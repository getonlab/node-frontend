// app/templates/TemplateRenderer.tsx
import { sectionMap } from "./sectionMap";

export function TemplateRenderer({ template }: { template: any }) {
  return (
    <>
      {template.sections.map((section: any, i: number) => {
        const SectionComponent = sectionMap[section.type];
        if (!SectionComponent) return null;

        return <SectionComponent key={i} data={section.data} />;
      })}
    </>
  );
}