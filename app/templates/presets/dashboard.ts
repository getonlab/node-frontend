// app/templates/dashboard.ts
import { TemplateConfig } from "@/lib/template";

export const dashboardTemplate: TemplateConfig = {
  mode: "dashboard",
  sections: [
    {
      type: "hero",
      data: {
        title: "Hệ thống Dashboard thông minh",
        subtitle: "Theo dõi dữ liệu – phân tích – ra quyết định",
        cta: "Xem báo cáo",
      },
    },
    {
      type: "stats",
      data: {
        items: [
          { name: "Người dùng", value: "1.240" },
          { name: "Doanh thu", value: "320M" },
          { name: "Tăng trưởng", value: "+18%" },
          { name: "Đơn hàng mới", value: "85" },
        ],
      },
    },
    {
      type: "dashboard",
      data: {
        widgets: [
          "Biểu đồ doanh thu",
          "Biểu đồ người dùng",
          "Bảng dữ liệu",
          "Hoạt động gần đây",
          "Phân tích theo khu vực",
        ],
      },
    },
  ],
};