import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  level = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  level?: "h1" | "h2";
  className?: string;
}) {
  const centered = align === "center";
  const HeadingTag = level;

  return (
    <div
      className={cn(
        "mb-10 space-y-4",
        centered && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <HeadingTag className="section-title text-balance">{title}</HeadingTag>
      {description ? <p className="body-copy">{description}</p> : null}
    </div>
  );
}
