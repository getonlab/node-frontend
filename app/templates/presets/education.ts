// app/templates/presets/education.ts
import { TemplateConfig } from "@/lib/template";

export const educationTemplate: TemplateConfig = {
  mode: "education",
  sections: [
    {
      type: "hero",
      data: {
        title: "Nền tảng học tập hiện đại",
        subtitle: "Học tập – Thực hành – Đánh giá",
        cta: "Khám phá khóa học",
      },
    },
    {
      type: "courses",
      data: {
        items: [
          "Lập trình cơ bản",
          "Kinh tế số",
          "Chuyển đổi số",
        ],
      },
    },
    {
      type: "learningPath",
      data: {
        steps: [
          "Nhập môn",
          "Thực hành",
          "Dự án",
          "Đánh giá",
        ],
      },
    },
    {
      type: "studentProjects",
      data: {
        items: ["Dự án website lớp học", "Ứng dụng di động quản lý thời gian", "Game giáo dục đơn giản"],
      },
    },
  ],
};