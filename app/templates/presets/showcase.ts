// app/templates/presets/showcase.ts
import { TemplateConfig } from "@/lib/template";

export const showcaseTemplate: TemplateConfig = {
  mode: "showcase",
  sections: [
    {
      type: "hero",
      data: {
        title: "Trình diễn sản phẩm & ý tưởng",
        subtitle: "Nơi ý tưởng được nhìn thấy",
        cta: "Khám phá các dự án",
      },
    },
    {
      type: "highlights",
      data: {
        items: ["Sản phẩm nổi bật", "Dự án tiêu biểu"],
      },
    },
    {
      type: "gallery",
      data: {
        layout: "grid",
      },
    },
    {
      type: "cta",
      data: {
        text: "Bắt đầu dự án của bạn",
        action: "Tạo Lab",
      },
    },
  ],
};