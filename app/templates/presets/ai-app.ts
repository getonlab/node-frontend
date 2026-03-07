// app/templates/presets/ai-app.ts
import { TemplateConfig } from "@/lib/template";

export const aiAppTemplate: TemplateConfig = {
  mode: "aiApp",
  sections: [
    {
      type: "hero",
      data: {
        title: "Ứng dụng AI hỗ trợ công việc của bạn",
        subtitle: "Nhanh hơn · Thông minh hơn",
        cta: "Trải nghiệm ngay",
      },
    },
    {
      type: "aiFeatures",
      data: {
        items: [
          "Phân tích dữ liệu",
          "Gợi ý thông minh",
          "Tự động hóa",
        ],
      },
    },
    {
      type: "useCases",
      data: {
        items: [
          "Học tập",
          "Kinh doanh",
          "Quản lý",
        ],
      },
    },
    {
      type: "demo",
      data: {
        note: "Khu vực trải nghiệm AI",
      },
    },
  ],
};