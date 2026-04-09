import Container from "@/components/container";

const shortcuts = [
  {
    platform: "iOS",
    method: "Siri",
    description: "语音唤起，一句话完成记录。",
  },
  {
    platform: "Android",
    method: "桌面快捷方式",
    description: "一触即达，不需要先打开 App。",
  },
  {
    platform: "macOS",
    method: "自动化",
    description: "支持快捷指令和脚本调用。",
  },
];

export default function TrustSection() {
  return (
    <section className="section-shell pt-0">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          {/* 快捷入口 */}
          <div className="scene-card">
            <div className="scene-card-copy">
              <span className="eyebrow">快捷入口</span>
              <h2 className="scene-card-title mt-4">不只是输入更快，入口也更顺手</h2>
              <p className="scene-card-subtitle mt-2">
                记录这件事，应该比打开表单更短。
              </p>

              <div className="mt-6 grid gap-3">
                {shortcuts.map((s) => (
                  <div
                    key={s.platform}
                    className="rounded-xl border border-[color:var(--line)] px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-[color:var(--accent-strong)]">
                        {s.platform}
                      </span>
                      <span className="text-sm text-[color:var(--muted)]">·</span>
                      <span className="text-sm font-medium">{s.method}</span>
                    </div>
                    <p className="mt-1 text-sm text-[color:var(--muted)]">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 本地优先 */}
          <div className="scene-card">
            <div className="scene-card-copy">
              <span className="eyebrow">数据边界</span>
              <h2 className="scene-card-title mt-4">本地优先，边界清楚</h2>
              <p className="scene-card-subtitle mt-2">
                核心记录优先围绕本地数据展开。
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-[color:var(--line)] px-4 py-4">
                  <p className="text-sm font-semibold">记录存储</p>
                  <p className="mt-1 text-sm text-[color:var(--muted)]">
                    支出、待办、随笔默认存储在本机，不需要先上传到服务器。
                  </p>
                </div>
                <div className="rounded-xl border border-[color:var(--line)] px-4 py-4">
                  <p className="text-sm font-semibold">AI 请求</p>
                  <p className="mt-1 text-sm text-[color:var(--muted)]">
                    需要调用 AI 识别时，系统会明确说明处理范围。模型不会存储原始输入。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
