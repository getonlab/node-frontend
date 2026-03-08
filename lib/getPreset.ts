import { TemplateConfig, TemplateMode } from "@/lib/template";
import { Project, SectionDraft } from "@/lib/project";
import { adminTemplate, aiAppTemplate, businessSiteTemplate, careerProfileTemplate, dashboardTemplate, developerToolTemplate, digitalServiceTemplate, ecommerceTemplate, educationTemplate, govTemplate, labTemplate, landingTemplate, marketplaceTemplate, portfolioTemplate, recruitmentTemplate, researchTemplate, resumeTemplate, serviceTemplate, showcaseTemplate } from "@/app/templates/presets";
// sau này có thể map nhiều preset

export function getPresetByMode(mode: TemplateMode): TemplateConfig {
  switch (mode) {
    case "service":
      return serviceTemplate;
    case "ecommerce":
      return ecommerceTemplate;
    case "dashboard":
      return dashboardTemplate;
    case "admin":
      return adminTemplate;
    case "education":
      return educationTemplate;
    case "portfolio":
      return portfolioTemplate;
    case "marketplace":
      return marketplaceTemplate;
    case "aiApp":
      return aiAppTemplate;
    case "developerTool":
      return developerToolTemplate;
    case "digitalService":
      return digitalServiceTemplate;
    case "research":
      return researchTemplate;
    case "showcase":
      return showcaseTemplate;
    case "resume":
      return resumeTemplate;
    case "careerProfile":
      return careerProfileTemplate;
    case "recruitment":
      return recruitmentTemplate;
    case "landing":
      return landingTemplate;
    case "businessSite":
      return businessSiteTemplate;
    case "gov":
      return govTemplate;
    case "lab":
      return labTemplate;

    default:
      return ecommerceTemplate;
  }
}