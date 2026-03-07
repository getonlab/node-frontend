// lib/website.ts
import { TemplateConfig } from "./template";

export interface Website {
  slug: string;
  projectId?: string;

  template: TemplateConfig;

  status: "generated" | "published";

  createdAt: string;
}

export const websites: Record<string, Website> = {};