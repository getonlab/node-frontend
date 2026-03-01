// app/api/lab/architecture/route.ts
import { NextResponse } from "next/server";
import { callAI } from "@/lib/ai";

export async function POST(req: Request) {
  const { idea, analysis, design } = await req.json();

  if (!idea || !analysis || !design) {
    return NextResponse.json({ error: "Missing input" }, { status: 400 });
  }

  const prompt = `
Bạn là kiến trúc sư hệ thống cho startup sinh viên.

Ý tưởng:
${idea}

Phân tích:
${analysis}

Thiết kế:
${design}

Dựa trên ý tưởng, phân tích và thiết kế ở trên,
hãy suy luận đầy đủ nhưng
CHỈ TRẢ VỀ MỘT OBJECT JSON HỢP LỆ.
KHÔNG markdown.
KHÔNG \`\`\`.
KHÔNG text bên ngoài.

TRẢ VỀ JSON DUY NHẤT với cấu trúc ví dụ SAU.
TẤT CẢ giá trị trong "components", "flow", "deploy" BẮT BUỘC là CHUỖI (string).
KHÔNG dùng object trong mảng.

{
  "preview": {
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
  "markdown": "Mô tả chi tiết bằng markdown"
}

KHÔNG giải thích ngoài JSON.
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
    step: "architecture",
    content: parsed.markdown,
    preview: parsed.preview
  });
}