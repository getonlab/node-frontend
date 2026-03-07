// app/templates/ecommerce.ts
import { TemplateConfig } from "@/lib/template";

export const ecommerceTemplate: TemplateConfig = {
  mode: "ecommerce",
  sections: [
    {
      type: "hero",
      data: {
        title: "Sản phẩm giúp bạn bán hàng hiệu quả",
        subtitle: "Giải pháp thương mại điện tử đơn giản – hiện đại – dễ triển khai",
        cta: "Xem sản phẩm",
      },
    },
    {
      type: "features",
      data: {
        items: [
          "Giao diện hiện đại",
          "Thanh toán dễ dàng",
          "Quản lý đơn hàng đơn giản",
        ],
      },
    },
    {
      type: "products",
      data: {
        title: "Sản phẩm nổi bật",
        items: [
          { name: "Sản phẩm A", price: "199.000đ" },
          { name: "Sản phẩm B", price: "299.000đ" },
        ],
      },
    },
    {
      type: "cta",
      data: {
        text: "Bắt đầu bán hàng ngay hôm nay",
        action: "Liên hệ tư vấn",
      },
    },
    {
      type: "contact",
      data: {
        email: "contact@yourshop.vn",
        phone: "0123 456 789",
        facebook: "facebook.com/yourshop",
      },
    },
  ],
};