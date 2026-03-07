// app/templates/presets/admin.ts
import { TemplateConfig } from "@/lib/template";

export const adminTemplate: TemplateConfig = {
  mode: "admin",
  sections: [
    {
      type: "dashboardOverview",
      data: {
        widgets: [
          "Thống kê người dùng",
          "Quản lý đơn hàng",
          "Báo cáo doanh thu",
          "Hoạt động gần đây",
        ],
      },
    },
    {
      type: "userManagement",
      data: {
        items: [
          "Thêm người dùng",
          "Sửa thông tin",
          "Vô hiệu hoá tài khoản",
          "Phân quyền",
        ],
      },
    },
    {
      type: "contentManagement",
      data: {
        items: [
          "Quản lý trang tĩnh",
          "Quản lý bài viết",
          "Quản lý sản phẩm",
          "Quản lý danh mục",
        ],
      },
    },
    {
      type: "systemSettings",
      data: {
        items: ["Phân quyền", "Tích hợp API", "Cấu hình hệ thống", "Bảo mật"],
      },
    },
  ],
};