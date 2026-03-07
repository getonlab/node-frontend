// app/templates/presets/portfolio.ts
import { TemplateConfig } from "@/lib/template";

export const portfolioTemplate: TemplateConfig = {
  mode: "portfolio",
  sections: [
    {
      type: "hero",
      data: {
        title: "Xin chào, tôi là [Tên]",
        subtitle: "Sinh viên / Nhà phát triển / Nhà thiết kế",
        cta: "Xem dự án",
      },
    },
    {
      type: "about",
      data: {
        description: "Giới thiệu ngắn gọn về bản thân, kỹ năng và định hướng.",
      },
    },
    {
      type: "projects",
      data: {
        items: [
          {
            name: "Dự án Portfolio",
            description: "Website cá nhân giới thiệu kỹ năng và các dự án đã thực hiện.",
          },
          {
            name: "Ứng dụng Ghi chú",
            description: "Một ứng dụng đơn giản để ghi chú nhanh, xây dựng bằng React.",
          },
          {
            name: "Trang Landing Page",
            description: "Thiết kế và phát triển landing page cho một sản phẩm giả định.",
          },
        ],
      },
    },
    {
      type: "skills",
      data: {
        items: ["React", "Node.js", "UI/UX"],
      },
    },
    {
      type: "contact",
      data: {
        email: "me@portfolio.com",
        github: "github.com/username",
        linkedin: "linkedin.com/in/username",
      },
    },
  ],
};