// lib/modeConfig.ts
import { TemplateMode } from "./template";

interface ModeOptions {
  goals: string[];
  audience: string[];
  tones: string[];
}

export const modeOptions: Record<TemplateMode, ModeOptions> = {
  // Default options
  landing: {
    goals: ["Thu thập email", "Giới thiệu sản phẩm", "Tăng nhận diện thương hiệu"],
    audience: ["Người dùng cuối", "Khách hàng tiềm năng", "Cộng đồng"],
    tones: ["Thân thiện – hiện đại", "Tối giản – tinh tế", "Sáng tạo – đột phá"],
  },
  businessSite: {
    goals: ["Giới thiệu doanh nghiệp", "Tạo uy tín", "Cung cấp thông tin liên hệ"],
    audience: ["Đối tác", "Khách hàng doanh nghiệp", "Nhà đầu tư"],
    tones: ["Trang trọng – chính thống", "Chuyên nghiệp – đáng tin cậy", "Hiện đại – năng động"],
  },
  service: {
    goals: ["Mô tả dịch vụ", "Báo giá", "Tiếp nhận yêu cầu"],
    audience: ["Khách hàng cá nhân", "Doanh nghiệp nhỏ", "Người có nhu-cầu-cụ-thể"],
    tones: ["Rõ ràng – hiệu quả", "Thân thiện – hỗ trợ", "Chuyên nghiệp – đáng tin cậy"],
  },
  portfolio: {
    goals: ["Trưng bày dự án", "Thể hiện kỹ năng", "Tìm kiếm cơ hội việc làm"],
    audience: ["Nhà tuyển dụng", "Khách hàng tự do (freelance)", "Cộng đồng chuyên môn"],
    tones: ["Sáng tạo – cá tính", "Tối giản – chuyên nghiệp", "Hiện đại – nghệ thuật"],
  },
  resume: {
    goals: ["Ứng tuyển công việc", "Tóm tắt kinh nghiệm", "Thể hiện kỹ năng"],
    audience: ["Nhà tuyển dụng", "HR", "Headhunter"],
    tones: ["Chuyên nghiệp – rõ ràng", "Trang trọng – chính thống", "Tự tin – năng động"],
  },
  // Add other modes here, they will fallback to 'landing' if not specified
  ecommerce: {
    goals: ["Bán sản phẩm", "Tăng doanh thu", "Xây dựng thương hiệu"],
    audience: ["Người mua sắm online", "Khách hàng trung thành", "Người tìm kiếm ưu đãi"],
    tones: ["Hiện đại – trẻ trung", "Sang trọng – cao cấp", "Thân thiện – gần gũi"],
  },
  dashboard: {
    goals: ["Theo dõi số liệu", "Phân tích dữ liệu", "Quản lý hoạt động"],
    audience: ["Quản trị viên", "Nhà phân tích", "Người quản lý"],
    tones: ["Rõ ràng – chính xác", "Tối giản – hiệu quả", "Chuyên nghiệp – bảo mật"],
  },
  education: {
    goals: ["Cung cấp khóa học", "Quản lý học viên", "Chia sẻ tài liệu"],
    audience: ["Học viên", "Giảng viên", "Phụ huynh"],
    tones: ["Thân thiện – khuyến khích", "Học thuật – nghiêm túc", "Sáng tạo – tương tác"],
  },
  marketplace: {
    goals: ["Kết nối người mua và người bán", "Tạo cộng đồng", "Tăng số lượng giao dịch"],
    audience: ["Người bán", "Người mua", "Đối tác"],
    tones: ["Năng động – sôi nổi", "Tin cậy – an toàn", "Đa dạng – phong phú"],
  },
  aiApp: {
    goals: ["Trình diễn tính năng AI", "Giải quyết vấn đề bằng AI", "Thu hút người dùng thử"],
    audience: ["Người yêu công nghệ", "Doanh nghiệp", "Nhà phát triển"],
    tones: ["Thông minh – tương lai", "Sáng tạo – đột phá", "Hiệu quả – nhanh chóng"],
  },
  research: {
    goals: ["Công bố nghiên cứu", "Chia sẻ kiến thức", "Thu hút hợp tác"],
    audience: ["Nhà nghiên cứu", "Sinh viên", "Cộng đồng học thuật"],
    tones: ["Học thuật – chính xác", "Sáng tạo – khám phá", "Trang trọng – uy tín"],
  },
  recruitment: {
    goals: ["Thu hút ứng viên", "Giới thiệu văn hóa công ty", "Xây dựng thương hiệu tuyển dụng"],
    audience: ["Ứng viên tiềm năng", "Sinh viên mới ra trường", "Người có kinh nghiệm"],
    tones: ["Chuyên nghiệp – thân thiện", "Năng động – sáng tạo", "Trọng thị – minh bạch"],
  },
  // Fallback for modes without specific options yet
  lab: { goals: [], audience: [], tones: [] },
  gov: { goals: [], audience: [], tones: [] },
  admin: { goals: [], audience: [], tones: [] },
  developerTool: { goals: [], audience: [], tones: [] },
  digitalService: { goals: [], audience: [], tones: [] },
  showcase: { goals: [], audience: [], tones: [] },
  careerProfile: { goals: [], audience: [], tones: [] },
};

export function getOptionsForMode(mode?: TemplateMode): ModeOptions {
  if (mode && modeOptions[mode] && modeOptions[mode].goals.length > 0) {
    return modeOptions[mode];
  }
  return modeOptions.landing; // Fallback to default 'landing' options
}
