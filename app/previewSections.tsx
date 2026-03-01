//PreviewSection.tsx
/// Analysis Preview
export interface AnalysisPreview {
  title: string;
  brand: string;
  summary: string;
  type: string;
  target: string;
  problem: string;
  goal: string;
}

export function AnalysisPreviewSection({ preview }: { preview: AnalysisPreview }) {
  if (!preview) return null;

  return (
    <section className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-4">💡 Tóm tắt ý tưởng</h3>

      <ul className="space-y-2 text-slate-300 text-sm">
          <li>
          <span className="font-semibold text-slate-200">Tên đề tài:</span>{" "}
          {preview.title}
        </li>
        <li>
          <span className="font-semibold text-slate-200">Tóm tắt:</span>{" "}
          {preview.summary}
        </li>
        <li>
          <span className="font-semibold text-slate-200">Loại:</span>{" "}
          {preview.type}
        </li>
        <li>
          <span className="font-semibold text-slate-200">Đối tượng:</span>{" "}
          {preview.target}
        </li>
        <li>
          <span className="font-semibold text-slate-200">Vấn đề:</span>{" "}
          {preview.problem}
        </li>
        <li>
          <span className="font-semibold text-slate-200">Mục tiêu:</span>{" "}
          {preview.goal}
        </li>
      </ul>
    </section>
  );
}

/// Design Preview

export interface DesignPreview {
  platform: string;
  screens: {
    id: string;
    name: string;
    layout: string;
    mainBlocks: string[];
  }[];
  uxHighlights: string[];
  style: {
    tone: string;
    color: string;
    font: string;
  };
}

export function DesignPreviewSection({ preview }: { preview: DesignPreview }) {
  if (!preview) return null;

  return (
    <section className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6 space-y-6">
      {/* HEADER */}
      <div>
        <h3 className="text-xl font-semibold">
          🎨 Design Preview ({preview.platform})
        </h3>
      </div>

      {/* SCREENS */}
      <div className="grid md:grid-cols-2 gap-4">
        {preview.screens.map((screen) => (
          <div
            key={screen.id}
            className="rounded-xl border border-slate-700 bg-slate-800/60 p-4"
          >
            <h4 className="font-semibold mb-1">{screen.name}</h4>
            <p className="text-sm text-slate-400 mb-2">
              Layout: {screen.layout}
            </p>

            <div className="flex flex-wrap gap-2">
              {screen.mainBlocks.map((block) => (
                <span
                  key={block}
                  className="text-xs px-2 py-1 rounded-md bg-slate-700 text-slate-200"
                >
                  {block}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* UX HIGHLIGHTS */}
      {preview.uxHighlights.length > 0 && (
        <div>
          <h4 className="font-semibold mb-2">✨ UX nổi bật</h4>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            {preview.uxHighlights.map((ux, i) => (
              <li key={i}>{ux}</li>
            ))}
          </ul>
        </div>
      )}

      {/* STYLE */}
      <div>
        <h4 className="font-semibold mb-2">🎭 Phong cách thiết kế</h4>
        <ul className="text-slate-300 space-y-1 text-sm">
          <li>• Tone: {preview.style.tone}</li>
          <li>• Màu sắc: {preview.style.color}</li>
          <li>• Font: {preview.style.font}</li>
        </ul>
      </div>
    </section>
  );
}

//// Architecture Preview

export interface ArchitecturePreview {
  layers: {
    id: string;
    name: string;
    components: string[];
  }[];
  flow: string[];
  deploy: string[];
}

export function ArchitecturePreviewSection({ preview }: { preview: ArchitecturePreview }) {
  if (!preview) return null;
  
  return (
    <section className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-6">🏗 Kiến trúc hệ thống</h3>

      {/* LAYERS */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {preview.layers.map((layer) => (
          <div
            key={layer.id}
            className="rounded-xl bg-slate-800/60 border border-slate-700 p-4"
          >
            <h4 className="font-semibold mb-2">{layer.name}</h4>
            <ul className="text-sm text-slate-300 space-y-1">
              {layer.components.map((c, i) => (
                <li key={`${layer.id}-${i}`}>• {c}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* FLOW */}
      <div className="mb-6">
        <h4 className="font-semibold mb-2">🔁 Luồng xử lý</h4>
        <ul className="text-sm text-slate-300 space-y-1">
          {preview.flow.map((step, i) => (
            <li key={i}>→ {step}</li>
          ))}
        </ul>
      </div>

      {/* DEPLOY */}
      <div>
        <h4 className="font-semibold mb-2">🚀 Triển khai</h4>
        <div className="flex flex-wrap gap-2">
          {preview.deploy.map((d) => (
            <span
              key={d}
              className="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}