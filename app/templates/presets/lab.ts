// app/templates/lab.ts
import { TemplateConfig } from "@/lib/template";

export const labTemplate: TemplateConfig = {
  mode: "lab",
  sections: [
    {
      type: "hero",
      data: {
        title: "Dự án Lab sinh viên",
        subtitle: "Nghiên cứu – thử nghiệm – triển khai",
        cta: "Xem chi tiết",
      },
    },
    {
      type: "features",
      data: {
        items: [
          "Phân tích ý tưởng",
          "Thiết kế UI/UX",
          "Định hướng kiến trúc",
        ],
      },
    },
    {
      type: "cta",
      data: {
        text: "Phát triển dự án này thành sản phẩm thật",
        button: "Tham gia Lab",
      },
    },
  ],
};