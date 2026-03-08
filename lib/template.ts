// lib/template.ts
export const templateModes = [
  "ecommerce",
  "dashboard",
  "lab",
  "gov",
  "landing",
  "businessSite",
  "service",
  "admin",
  "education",
  "portfolio",
  "marketplace",
  "aiApp",
  "developerTool",
  "digitalService",
  "research",
  "showcase",
  "resume",
  "careerProfile",
  "recruitment",
] as const;

export type TemplateMode = (typeof templateModes)[number];

export type SectionType =
  | "hero"
  | "features"
  | "products"
  | "stats"
  | "dashboard"
  | "contact"
  | "cta"
  | "benefits"
  | "about"
  | "services"
  | "testimonials"
  | "serviceList"
  | "process"
  | "dashboardOverview"
  | "userManagement"
  | "contentManagement"
  | "systemSettings"
  | "courses"
  | "learningPath"
  | "studentProjects"
  | "projects"
  | "skills"
  | "categories"
  | "listings"
  | "sellerBenefits"
  | "buyerBenefits"
  | "aiFeatures"
  | "useCases"
  | "demo"
  | "docs"
  | "apiEndpoints"
  | "integration"
  | "compliance"
  | "researchAreas"
  | "publications"
  | "highlights"
  | "gallery"
  | "summary"
  | "experience"
  | "education"
  | "strengths"
  | "goals"
  | "positions"
  | "applicationProcess"
  | "companyCulture"
  | "employeeTestimonials"
  | "works"
  | "instructors"
  | "team";

export interface TemplateConfig {
  mode: TemplateMode;
  sections: SectionConfig[];
}

export interface SectionConfig {
  type: SectionType;
  data: Record<string, any>;
}
