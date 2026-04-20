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
    <section aria-labelledby="trust-heading" className="section-shell pt-0">
      <Container>
        {/* Quick entry — header + horizontal list */}
        <div className="trust-shortcuts">
          <div>
            <span className="eyebrow">快捷入口</span>
            <h2 className="scene-card-title mt-4" id="trust-heading">
              不只是输入更快，入口也更顺手
            </h2>
            <p className="scene-card-subtitle mt-2">
              财务记录这件事，应该比打开表单更短。
            </p>
          </div>

          <div className="trust-shortcuts-list">
            {shortcuts.map((s) => (
              <div className="trust-shortcut-item" key={s.platform}>
                <span className="trust-shortcut-platform">{s.platform}</span>
                <span className="trust-shortcut-separator">·</span>
                <span className="trust-shortcut-method">{s.method}</span>
                <p className="trust-shortcut-desc">{s.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data boundary — full-width statement panel */}
        <div className="trust-privacy">
          <span className="eyebrow">数据边界</span>
          <h3 className="scene-card-title mt-4">本地优先，边界清楚</h3>
          <p className="scene-card-subtitle mt-2">
            核心记录优先围绕本地数据展开。
          </p>

          <div className="trust-privacy-items">
            <div className="trust-privacy-item">
              <p className="text-sm font-semibold">记录存储</p>
              <p className="mt-1 text-sm leading-6 text-[color:var(--muted)]">
                支出、预算、借还款和提醒默认存储在本机，不需要先上传到服务器。
              </p>
            </div>
            <div className="trust-privacy-item">
              <p className="text-sm font-semibold">AI 请求</p>
              <p className="mt-1 text-sm leading-6 text-[color:var(--muted)]">
                需要调用 AI 识别时，系统会明确说明处理范围。模型不会存储原始输入。
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
