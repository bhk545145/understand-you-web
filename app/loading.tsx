import Container from "@/components/container";

export default function Loading() {
  return (
    <main>
      <section className="section-shell">
        <Container>
          <div className="space-y-8">
            {/* Heading skeleton */}
            <div className="space-y-4">
              <div className="h-4 w-20 animate-pulse rounded-full bg-[oklch(0.94_0.02_240)]" />
              <div className="h-10 w-3/4 animate-pulse rounded-lg bg-[oklch(0.94_0.02_240)]" />
              <div className="h-5 w-1/2 animate-pulse rounded-lg bg-[oklch(0.94_0.02_240)]" />
            </div>

            {/* Content skeleton */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="h-64 animate-pulse rounded-[var(--radius-xl)] border border-[oklch(0.94_0.01_240)] bg-[oklch(0.98_0.005_240)]" />
              <div className="h-64 animate-pulse rounded-[var(--radius-xl)] border border-[oklch(0.94_0.01_240)] bg-[oklch(0.98_0.005_240)]" />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
