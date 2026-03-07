// app/templates/presets/service.ts
import { TemplateConfig } from "@/lib/template";

export const serviceTemplate: TemplateConfig = {
  mode: "service",
  sections: [
    {
      type: "hero",
      data: {
        title: "Dịch vụ chuyên nghiệp cho nhu cầu của bạn",
        subtitle:
          "Chúng tôi cung cấp các giải pháp hiệu quả và đáng tin cậy để giúp bạn thành công.",
        cta: "Đăng ký tư vấn",
      },
    },
    {
      type: "serviceList",
      data: {
        items: [
          {
            name: "Dịch vụ A",
            description: "Giải quyết vấn đề nhanh chóng",
          },
          {
            name: "Dịch vụ B",
            description: "Chi phí hợp lý, hiệu quả cao",
          },
        ],
      },
    },
    {
      type: "process",
      data: {
        steps: [
          "Tiếp nhận yêu cầu",
          "Tư vấn giải pháp",
          "Triển khai",
          "Hỗ trợ",
        ],
      },
    },
    {
      type: "contact",
      data: {
        email: "contact@service.com",
        phone: "0987 654 321",
      },
    },
  ],
};