// app/api/lab/design/route.ts
import { NextResponse } from "next/server";
import { callAI } from "@/lib/ai";

export async function POST(req: Request) {
  const { idea, analysis } = await req.json();

  if (!idea || !analysis) {
    return NextResponse.json({ error: "Missing input" }, { status: 400 });
  }

  const prompt = `
Bạn là chuyên gia UI/UX cho startup công nghệ.

Ý tưởng:
${idea}

Phân tích:
${analysis}

CHỈ TRẢ VỀ MỘT OBJECT JSON HỢP LỆ.
KHÔNG markdown.
KHÔNG \`\`\`.
KHÔNG text bên ngoài.

JSON phải có đúng cấu trúc sau:

{
  "preview": {
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
  "markdown": "Mô tả chi tiết bằng markdown"
}
`;

  const raw = await callAI(prompt);

  let parsed;
  try {
    parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
  } catch {
    return NextResponse.json(
      { error: "AI returned invalid JSON", raw },
      { status: 500 }
    );
  }

  return NextResponse.json({
    step: "design",
    content: parsed.markdown,
    preview: parsed.preview
  });
}