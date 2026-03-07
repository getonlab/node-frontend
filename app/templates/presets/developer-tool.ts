// app/templates/presets/developer-tool.ts
import { TemplateConfig } from "@/lib/template";

export const developerToolTemplate: TemplateConfig = {
  mode: "developerTool",
  sections: [
    {
      type: "hero",
      data: {
        title: "Công cụ dành cho lập trình viên",
        subtitle: "Đơn giản · Hiệu quả · Mở rộng",
        cta: "Bắt đầu ngay",
      },
    },
    {
      type: "features",
      data: {
        items: ["API", "CLI", "SDK"],
      },
    },
    {
      type: "docs",
      data: {
        items: ["Cài đặt", "Sử dụng", "Ví dụ", "Tham chiếu API"],
      },
    },
    {
      type: "integration",
      data: {
        items: ["GitHub", "CI/CD", "Cloud"],
      },
    },
  ],
};