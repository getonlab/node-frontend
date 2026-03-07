// app/templates/presets/marketplace.ts
import { TemplateConfig } from "@/lib/template";

export const marketplaceTemplate: TemplateConfig = {
  mode: "marketplace",
  sections: [
    {
      type: "hero",
      data: {
        title: "Nền tảng kết nối người mua & người bán",
        subtitle:
          "Tìm kiếm sản phẩm, dịch vụ và tài nguyên bạn cần một cách dễ dàng.",
        cta: "Khám phá ngay",
      },
    },
    {
      type: "categories",
      data: {
        items: ["Sản phẩm số", "Dịch vụ", "Tài nguyên"],
      },
    },
    {
      type: "listings",
      data: {
        fields: ["Tên sản phẩm/dịch vụ", "Giá", "Người bán", "Đánh giá"],
      },
    },
    {
      type: "sellerBenefits",
      data: {
        items: [
          "Tiếp cận hàng ngàn khách hàng",
          "Hệ thống thanh toán an toàn, tiện lợi",
          "Công cụ quản lý cửa hàng đơn giản",
        ],
      },
    },
    {
      type: "buyerBenefits",
      data: {
        items: [
          "Dễ dàng tìm kiếm và so sánh",
          "Đánh giá từ cộng đồng minh bạch",
          "Chương trình bảo vệ người mua",
        ],
      },
    },
  ],
};