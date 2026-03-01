// app/api/lab/analyze/route.ts
import { NextResponse } from "next/server";
import { callAI } from "@/lib/ai";

export async function POST(req: Request) {
  const { idea } = await req.json();

  if (!idea?.trim()) {
    return NextResponse.json({ error: "Missing idea" }, { status: 400 });
  }

  const prompt = `
Bạn là mentor khởi nghiệp và kỹ sư phần mềm cấp cao.

Phân tích ý tưởng sau:

"${idea}"

YÊU CẦU OUTPUT (BẮT BUỘC):

1. Trả về JSON hợp lệ, KHÔNG kèm giải thích ngoài JSON.
2. Gồm 2 phần:

A. preview (ngắn gọn, dùng cho UI):
- title: tiêu đề ngắn gọn gồm brand-word và tên đề tài, ví dụ "SmartEdu – Hệ thống học tập cá nhân hóa"
- brand: lấy brand-word từ title, thường là phần đầu, ví dụ "SmartEdu"
- summary: tóm tắt ngắn gọn (≤ 50 từ) về ý tưởng, tập trung vào điểm khác biệt và giá trị cốt lõi.
- type: loại sản phẩm (Web / App / AI / Khác)
- target: đối tượng người dùng chính
- problem: vấn đề chính (≤ 20 từ)
- goal: mục tiêu cốt lõi (≤ 20 từ)

B. content (markdown):
- Phân tích chi tiết bằng Markdown, tiếng Việt
- Gồm các mục:
  1. Thực trạng vấn đề (đánh giá 1–10)
  2. Đối tượng người dùng (đánh giá 1–10)
  3. Giá trị cốt lõi (đánh giá 1–10)
  4. Mức độ khả thi (đánh giá 1–10)
  5. Khả năng triển khai (đánh giá 1–10)
- Viết ngắn gọn, rõ ràng

FORMAT MẪU:

{
  "preview": {
    "title": "...",
    "brand": "...",
    "summary": "...",
    "type": "...",
    "target": "...",
    "problem": "...",
    "goal": "..."
  },
  "content": "## Vấn đề thực tế\\n..."
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
  });
}