// app/templates/presets/business-site.ts
import { TemplateConfig } from "@/lib/template";

export const businessSiteTemplate: TemplateConfig = {
  mode: "businessSite",
  sections: [
    {
      type: "hero",
      data: {
        title: "Doanh nghiệp của bạn – Hiện diện chuyên nghiệp",
        subtitle: "Giới thiệu rõ ràng, tạo niềm tin với khách hàng",
        cta: "Xem dịch vụ",
      },
    },
    {
      type: "about",
      data: {
        description: "Chúng tôi cung cấp giải pháp phù hợp cho doanh nghiệp vừa và nhỏ.",
      },
    },
    {
      type: "services",
      data: {
        items: [
          "Tư vấn giải pháp",
          "Triển khai hệ thống",
          "Bảo trì & hỗ trợ",
        ],
      },
    },
    {
      type: "testimonials",
      data: {
        items: [
          {
            name: "Anh Nguyễn Văn A",
            role: "Giám đốc Công ty ABC",
            quote: "Dịch vụ tuyệt vời, đội ngũ hỗ trợ rất chuyên nghiệp và nhiệt tình. Chúng tôi rất hài lòng.",
          },
          {
            name: "Chị Trần Thị B",
            role: "Trưởng phòng Marketing, Tập đoàn XYZ",
            quote: "Giải pháp của các bạn đã giúp chúng tôi tối ưu hóa quy trình và tăng hiệu quả rõ rệt.",
          },
        ],
      },
    },
    {
      type: "contact",
      data: {
        email: "contact@company.vn",
        phone: "0123 456 789",
        facebook: "facebook.com/yourcompany",
        linkedin: "linkedin.com/company/yourcompany",
      },
    },
  ],
};