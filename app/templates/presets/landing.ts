// app/templates/presets/landing.ts
import { TemplateConfig } from "@/lib/template";

export const landingTemplate: TemplateConfig = {
  mode: "landing",
  sections: [
    {
      type: "hero",
      data: {
        title: "Giải pháp giúp bạn bắt đầu nhanh hơn",
        subtitle: "Landing page đơn giản, rõ ràng, tập trung chuyển đổi",
        cta: "Bắt đầu ngay",
      },
    },
    {
      type: "features",
      data: {
        items: [
          "Triển khai nhanh",
          "Thiết kế hiện đại",
          "Tối ưu chuyển đổi",
        ],
      },
    },
    {
      type: "benefits",
      data: {
        items: [
          "Tiết kiệm chi phí",
          "Dễ mở rộng",
          "Phù hợp nhiều ngành",
        ],
      },
    },
    {
      type: "cta",
      data: {
        text: "Thử ý tưởng của bạn ngay hôm nay",
        action: "Tạo Lab",
      },
    },
  ],
};