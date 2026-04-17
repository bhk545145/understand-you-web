"use client";

import Container from "@/components/container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main>
      <section className="section-shell">
        <Container className="text-center">
          <div className="mx-auto max-w-lg space-y-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[oklch(0.96_0.025_240)] text-2xl">
              ⚠
            </div>
            <h1 className="section-title">页面加载遇到问题</h1>
            <p className="body-copy">
              数据加载失败了，这通常是暂时的。请尝试刷新页面。
            </p>
            <button className="button-primary" onClick={reset} type="button">
              重新加载
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
