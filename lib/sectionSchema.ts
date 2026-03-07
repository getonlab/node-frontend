// lib/sectionSchema.ts

import { SectionType } from "./template";

export interface HeroSectionData {
  title: string;
  subtitle?: string;
  cta?: string;
}

export interface FeaturesSectionData {
  items: string[];
}

export interface ProductsSectionData {
  title: string;
  items: {
    name: string;
    price: string;
  }[];
}

export interface contactSectionData {
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  facebook?: string;
}

export interface StatsSectionData {
  items: {
    name: string;
    value: string;
  }[];
}

export interface DashboardSectionData {
  widgets: string[];
}

export interface CTASectionData {
  text: string;
  action: string;
}

export interface BenefitsSectionData {
  items: string[];
}

export interface AboutSectionData {
  description: string;
}

export interface ServicesSectionData {
  items: string[];
}

export interface DashboardOverviewSectionData {
  widgets: string[];
}

export interface UserManagementSectionData {
  items: string[];
}

export interface ContentManagementSectionData {
  items: string[];
}

export interface SystemSettingsSectionData {
  items: string[];
}

export interface CoursesSectionData {
  items: string[];
}

export interface LearningPathSectionData {
  steps: string[];
}

export interface StudentProjectsSectionData {
  items: string[];
}

export interface ProjectsSectionData {
  items: {
    name: string;
    description: string;
  }[];
}

export interface SkillsSectionData {
  items: string[];
}

export interface CategoriesSectionData {
  items: string[];
}

export interface ListingsSectionData {
  fields: string[];
}

export interface SellerBenefitsSectionData {
  items: string[];
}

export interface BuyerBenefitsSectionData {
  items: string[];
}

export interface AIFeaturesSectionData {
  items: string[];
}

export interface UseCasesSectionData {
  items: string[];
}

export interface DemoSectionData {
  note: string;
}

export interface DocsSectionData {
  items: string[];
}

export interface APIEndpointsSectionData {
  endpoints: string[];
}

export interface IntegrationSectionData {
  items: string[];
}

export interface ComplianceSectionData {
  items: string[];
}

export interface ResearchAreasSectionData {
  items: string[];
}

export interface PublicationsSectionData {
  items: string[];
}

export interface HighlightsSectionData {
  items: string[];
}

export interface GallerySectionData {
  layout: string;
}

export interface SummarySectionData {
  text: string;
}

export interface ExperienceSectionData {
  items: {
    role: string;
    company: string;
    period: string;
    description: string;
  }[];
}

export interface EducationSectionData {
  school: string;
  major: string;
  period: string;
}

export interface StrengthsSectionData {
  items: string[];
}

export interface GoalsSectionData {
  shortTerm: string;
  longTerm: string;
}

export interface PositionsSectionData {
  items: {
    title: string;
    type: string;
    requirements: string[];
  }[];
}

export interface ApplicationProcessSectionData {
  steps: string[];
}

export interface CompanyCultureSectionData {
  values: string[];
  benefits: string[];
}

export interface EmployeeTestimonialsSectionData {
  items: {
    name: string;
    role: string;
    quote: string;
  }[];
}

export interface ServicesSectionData {
  items: string[];
}

export interface TestimonialsSectionData {
  items: {
    name: string;
    role: string;
    quote: string;
  }[];
}

export interface ServiceListSectionData {
  items: {
    name: string;
    description: string;
  }[];
}

export interface WorksSectionData {
  items: {
    title: string;
    description: string;
  }[];
}

export interface InstructorsSectionData {
  items: {
    name: string;
    bio: string;
  }[];
}

export interface TeamSectionData {
  items: {
    name: string;
    role: string;
  }[];
}