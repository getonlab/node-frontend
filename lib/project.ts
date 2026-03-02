// lib/project.ts
import { AnalysisPreview, ArchitecturePreview, DesignPreview } from "@/app/previewSections";

// lib/projects.ts
export interface Project {
  slug: string;
  title: string;
  brand: string;

  preview: {
    analysis?: AnalysisPreview;
    design?: DesignPreview;
    architecture?: ArchitecturePreview;
  };

  content: {
    analysis?: string;
    design?: string;
    architecture?: string;
  };

  ownerEmail?: string;
}

export const projects: Record<string, Project> = {};