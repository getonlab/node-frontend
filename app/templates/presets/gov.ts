// app/templates/gov.ts
import { TemplateConfig } from "@/lib/template";

export const govTemplate: TemplateConfig = {
  mode: "gov",
  sections: [
    {
      type: "hero",
      data: {
        title: "Cổng dịch vụ & chuyển đổi số",
        subtitle: "Đơn giản hoá thủ tục – minh bạch – hiệu quả",
        cta: "Tra cứu dịch vụ",
      },
    },
    {
      type: "features",
      data: {
        items: [
          "Nộp hồ sơ trực tuyến",
          "Theo dõi tiến độ",
          "Giảm thời gian xử lý",
        ],
      },
    },
    {
      type: "contact",
      data: {
        email: "hotro@donvi.gov.vn",
        phone: "1900 xxxx",
      },
    },
  ],
};