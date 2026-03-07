// app/templates/presets/research.ts
import { TemplateConfig } from "@/lib/template";

export const researchTemplate: TemplateConfig = {
  mode: "research",
  sections: [
    {
      type: "hero",
      data: {
        title: "Phòng Lab & Nghiên cứu",
        subtitle: "Ý tưởng · Thực nghiệm · Công bố",
        cta: "Xem các công trình",
      },
    },
    {
      type: "researchAreas",
      data: {
        items: [
          "AI",
          "IoT",
          "Chuyển đổi số",
        ],
      },
    },
    {
      type: "projects",
      data: {
        items: [
          {
            name: "Nghiên cứu về AI trong Y tế",
            description: "Ứng dụng học máy để chẩn đoán sớm bệnh tật từ hình ảnh y khoa.",
          },
          {
            name: "Hệ thống IoT cho Nông nghiệp thông minh",
            description: "Phát triển các cảm biến và hệ thống tự động hóa tưới tiêu.",
          },
        ],
      },
    },
    {
      type: "publications",
      data: {
        items: [
          "Ứng dụng học máy trong chẩn đoán y khoa (Tạp chí KH&CN, 2024)",
          "Mô hình IoT cho nông nghiệp thông minh (Hội thảo quốc gia, 2023)",
        ],
      },
    },
  ],
};