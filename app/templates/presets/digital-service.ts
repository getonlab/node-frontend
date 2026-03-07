// app/templates/presets/digital-service.ts
import { TemplateConfig } from "@/lib/template";

export const digitalServiceTemplate: TemplateConfig = {
  mode: "digitalService",
  sections: [
    {
      type: "hero",
      data: {
        title: "Giải pháp chuyển đổi số",
        subtitle: "Dành cho địa phương & doanh nghiệp",
        cta: "Tìm hiểu thêm",
      },
    },
    {
      type: "services",
      data: {
        items: [
          "Quản lý hồ sơ",
          "Dịch vụ công trực tuyến",
          "Báo cáo & thống kê",
        ],
      },
    },
    {
      type: "process",
      data: {
        steps: [
          "Tiếp nhận",
          "Xử lý",
          "Phê duyệt",
          "Hoàn tất",
        ],
      },
    },
    {
      type: "compliance",
      data: {
        items: ["Bảo mật", "Pháp lý", "Lưu trữ"],
      },
    },
  ],
};