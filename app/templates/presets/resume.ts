// app/templates/presets/resume.ts
import { TemplateConfig } from "@/lib/template";

export const resumeTemplate: TemplateConfig = {
  mode: "resume",
  sections: [
    {
      type: "hero",
      data: {
        title: "Nguyễn Văn A",
        subtitle: "Sinh viên Công nghệ Thông tin | Frontend Developer Intern",
        cta: "Tải CV",
      },
    },
    {
      type: "summary",
      data: {
        text: "Sinh viên năm cuối yêu thích phát triển web, có nền tảng React và UI/UX cơ bản.",
      },
    },
    {
      type: "skills",
      data: {
        items: ["HTML/CSS", "JavaScript", "React", "Git", "Figma"],
      },
    },
    {
      type: "experience",
      data: {
        items: [
          {
            role: "Frontend Intern",
            company: "Startup ABC",
            period: "2024",
            description: "Xây dựng giao diện React cho dashboard nội bộ.",
          },
          {
            role: "Thành viên CLB Tin học",
            company: "Đại học XYZ",
            period: "2022 – 2023",
            description: "Hỗ trợ tổ chức workshop và training cho sinh viên khóa mới.",
          },
        ],
      },
    },
    {
      type: "education",
      data: {
        school: "Đại học XYZ",
        major: "Công nghệ Thông tin",
        period: "2021 – 2025",
      },
    },
    {
      type: "projects",
      data: {
        items: [
          {
            name: "SmartEdu",
            description: "Nền tảng học tập cá nhân hóa cho sinh viên.",
          },
        ],
      },
    },
    {
      type: "contact",
      data: {
        email: "student@email.com",
        github: "github.com/username",
        linkedin: "linkedin.com/in/username",
      },
    },
  ],
};