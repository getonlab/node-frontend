// app/api/lab/analyze/route.ts
import { NextRequest, NextResponse } from "next/server";
import { callAI } from "@/lib/ai";
import { templateModes } from "@/lib/template";

async function handler(req: NextRequest) {
  const { idea } = await req.json();

  if (!idea?.trim()) {
    return NextResponse.json({ error: "Missing idea" }, { status: 400 });
  }

  const availableModes = templateModes.join(" | ");

  const prompt = `
Bạn là mentor khởi nghiệp và kỹ sư phần mềm cấp cao.

Phân tích ý tưởng sau:

"${idea}"

YÊU CẦU OUTPUT (BẮT BUỘC):

1. Trả về JSON hợp lệ, KHÔNG kèm giải thích ngoài JSON.
2. Gồm 2 phần:

A. preview (ngắn gọn, dùng cho UI):
A.1. analysis:
- title: tiêu đề ngắn gọn gồm brand-word và tên đề tài, ví dụ "SmartEdu – Hệ thống học tập cá nhân hóa"
- brand: lấy brand-word từ title, thường là phần đầu, ví dụ "SmartEdu"
- summary: tóm tắt ngắn gọn (≤ 50 từ) về ý tưởng, tập trung vào điểm khác biệt và giá trị cốt lõi.
- type: loại sản phẩm (Web / App / AI / Khác)
- target: đối tượng người dùng chính
- problem: vấn đề chính (≤ 20 từ)
- goal: mục tiêu cốt lõi (≤ 20 từ)
A.2. design:
- platform: web | mobile
- screens: danh sách màn hình
  - id: định danh duy nhất
  - name: tên màn hình
  - layout: 1 cột | 2 cột
  - mainBlocks: danh sách các khối
- uxHighlights: tối đa 3 điểm nổi bật về UX
- style: tone, color, font
A.3. architecture:
- layers: danh sách các layer kiến trúc
  - id: định danh duy nhất
    - name: tên layer
    - components: danh sách thành phần chính
- flow: mô tả luồng chính giữa các layer, ví dụ "User → Frontend → Backend → AI Service"
- deploy: danh sách công nghệ triển khai, ví dụ "Docker, Nginx, lab.sviuh.net"

B. content (markdown):
- Phân tích chi tiết bằng Markdown, tiếng Việt
- Gồm các mục:
  1. Thực trạng vấn đề (đánh giá 1–10)
  2. Đối tượng người dùng (đánh giá 1–10)
  3. Giá trị cốt lõi (đánh giá 1–10)
  4. Mức độ khả thi (đánh giá 1–10)
  5. Khả năng triển khai (đánh giá 1–10)
- Viết ngắn gọn, rõ ràng

C. mode: Phân loại ý tưởng vào MỘT trong các loại sau: ${availableModes}. CHỈ trả về một loại duy nhất.

FORMAT MẪU:

{
  "preview": {
    "analysis": {
        "title": "...",
        "brand": "...",
        "summary": "...",
        "type": "...",
        "target": "...",
        "problem": "...",
        "goal": "..."
    },
    "design": {
      "platform": "web | mobile",
      "screens": [
        {
            "id": "home",
            "name": "Tên màn hình",
            "layout": "1 cột | 2 cột",
            "mainBlocks": ["Header", "Feed"]
        }
      ],
      "uxHighlights": ["tối đa 3 ý"],
      "style": {
        "tone": "",
        "color": "",
        "font": ""
        }
    },
    "architecture": {
      "layers": [
        {
            "id": "frontend",
            "name": "Frontend",
            "components": ["Next.js", "TailwindCSS"]
        }
      ],
      "flow": [
        "User → Frontend: Giới thiệu sơ lược về luồng",
        "Frontend → Backend API: Giới thiệu sơ lược về luồng",
        "Backend → AI Service: Giới thiệu sơ lược về luồng"
      ],
      "deploy": [
        "Docker",
        "Nginx",
        "lab.sviuh.net"
      ]
  },
  "content": "## Vấn đề thực tế\\n..."
  "mode": "Một trong các loại trong templateModes"
}
`;

  const aiResult = await callAI(prompt);

  let parsed;
  try {
    parsed = JSON.parse(aiResult);
  } catch (e) {
    // fallback an toàn: không làm sập hệ thống
    return NextResponse.json({
      step: "analyze",
      preview: null,
      content: aiResult,
      warning: "AI output is not valid JSON",
    });
  }

  return NextResponse.json({
    step: "analyze",
    title: parsed.title ?? "",
    summary: parsed.summary ?? "",
    preview: parsed.preview ?? null,
    content: parsed.content ?? "",
    mode: parsed.mode ?? "landing",
  });
}

export { handler as POST };
