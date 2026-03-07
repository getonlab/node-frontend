// app/templates/presets/recruitment.ts
import { TemplateConfig } from "@/lib/template";

export const recruitmentTemplate: TemplateConfig = {
  mode: "recruitment",
  sections: [
    {
      type: "hero",
      data: {
        title: "Tuyển cộng sự cho dự án sinh viên",
        subtitle:
          "Cùng xây dựng sản phẩm thực tế – học hỏi – phát triển kỹ năng",
        cta: "Xem vị trí đang tuyển",
      },
    },

    {
      type: "about",
      data: {
        description: "Chúng tôi là một nhóm sinh viên và mentor xây dựng nền tảng Lab giúp thử nghiệm và triển khai ý tưởng công nghệ thực tế.",
      },
    },

    {
      type: "positions",
      data: {
        items: [
          {
            title: "Frontend Developer",
            type: "Intern / Part-time",
            requirements: [
              "Biết React hoặc Next.js",
              "Có tư duy UI/UX cơ bản",
            ],
          },
          {
            title: "Backend Developer",
            type: "Part-time",
            requirements: [
              "Node.js hoặc PHP",
              "Hiểu REST API",
            ],
          },
        ],
      },
    },

    {
      type: "companyCulture",
      data: {
        values: [
          "Học qua dự án thật",
          "Mentor đồng hành",
          "Tôn trọng sáng tạo cá nhân",
        ],
        benefits: [
          "Xác nhận Lab / thực tập",
          "Cơ hội tiếp tục phát triển dự án",
          "Làm việc linh hoạt",
        ],
      },
    },

    {
      type: "employeeTestimonials",
      data: {
        items: [
          {
            name: "Nguyễn Văn B",
            role: "Frontend Intern",
            quote:
              "Mình học được rất nhiều từ dự án thật và cách làm việc nhóm.",
          },
          {
            name: "Trần Thị C",
            role: "Content Creator",
            quote: "Môi trường cởi mở, khuyến khích sự sáng tạo và chủ động.",
          },
        ],
      },
    },

    {
      type: "applicationProcess",
      data: {
        steps: [
          "Gửi thông tin ứng tuyển",
          "Trao đổi nhanh với mentor",
          "Tham gia dự án",
        ],
      },
    },

    {
      type: "cta",
      data: {
        text: "Sẵn sàng tham gia cùng chúng tôi?",
        action: "Ứng tuyển ngay",
      },
    },
  ],
};