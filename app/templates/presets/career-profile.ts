// app/templates/presets/career-profile.ts
import { TemplateConfig } from "@/lib/template";

export const careerProfileTemplate: TemplateConfig = {
  mode: "careerProfile",
  sections: [
    {
      type: "hero",
      data: {
        title: "Hồ sơ nghề nghiệp",
        subtitle: "Xây dựng thương hiệu cá nhân & định hướng dài hạn",
        cta: "Liên hệ",
      },
    },
    {
      type: "about",
      data: {
        description: "Tôi quan tâm đến việc ứng dụng công nghệ để giải quyết các vấn đề thực tế trong giáo dục và doanh nghiệp nhỏ.",
      },
    },
    {
      type: "strengths",
      data: {
        items: [
          "Tư duy hệ thống",
          "Khả năng học nhanh",
          "Làm việc nhóm tốt",
        ],
      },
    },
    {
      type: "projects",
      data: {
        items: [
          {
            name: "Lab Platform",
            description: "Nền tảng giúp sinh viên thử nghiệm ý tưởng nhanh.",
          },
        ],
      },
    },
    {
      type: "goals",
      data: {
        shortTerm: "Trở thành full-stack developer",
        longTerm: "Xây dựng sản phẩm công nghệ có tác động xã hội",
      },
    },
    {
      type: "contact",
      data: {
        email: "profile@email.com",
        github: "github.com/username",
        linkedin: "linkedin.com/in/username",
      },
    },
  ],
};