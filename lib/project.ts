// lib/project.ts
import { AnalysisPreview, ArchitecturePreview, DesignPreview } from "@/app/previewSections";
import { SectionType, TemplateConfig, TemplateMode } from "./template";

export type ProjectStatus =
  | "draft"
  | "configured"
  | "generated"
  | "published"
  | "need-support";

export interface SectionDraft {
  type: SectionType;
  enabled: boolean;
  source?: "ai" | "preset" | "user";
  note?: string;
}

export interface Project {
  idea: string;

  id?: string;
  slug?: string;
  title?: string;
  brand?: string;

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

  template?: TemplateConfig;

  mode?: TemplateMode;
  goals?: string[];
  audience?: string[];
  tone?: string;

  ownerEmail?: string;
  ownerUserId?: string;

  sectionsDraft?: SectionDraft[];

  status?: ProjectStatus;

  createdAt?: string;
  updatedAt?: string;
}

export const projects: Record<string, Project> = {};