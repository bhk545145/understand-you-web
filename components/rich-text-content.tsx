import { cn } from "@/lib/utils";
import type { RichTextNode, RichTextValue } from "@/types/site";

function hasHtml(content: string) {
  return /<\/?[a-z][\s\S]*>/i.test(content);
}

function getNodeText(node: RichTextNode): string {
  if (node.text) {
    return node.text;
  }

  if (!node.children?.length) {
    return "";
  }

  return node.children.map((child) => getNodeText(child)).join("");
}

function renderBlock(node: RichTextNode, index: number) {
  const text = getNodeText(node).trim();

  if (!text) {
    return null;
  }

  if (node.type === "heading") {
    const HeadingTag = node.level === 3 ? "h3" : "h2";
    return (
      <HeadingTag className="text-2xl leading-tight text-[color:var(--ink)]" key={index}>
        {text}
      </HeadingTag>
    );
  }

  if (node.type === "list") {
    return (
      <ul className="list-disc space-y-3 pl-6 text-base leading-7 text-[color:var(--muted)]" key={index}>
        {node.children?.map((child, childIndex) => (
          <li key={`${index}-${childIndex}`}>{getNodeText(child)}</li>
        ))}
      </ul>
    );
  }

  return (
    <p className="body-copy" key={index}>
      {text}
    </p>
  );
}

export default function RichTextContent({
  content,
  className,
}: {
  content: RichTextValue;
  className?: string;
}) {
  if (!content) {
    return null;
  }

  if (typeof content === "string") {
    const trimmed = content.trim();

    if (!trimmed) {
      return null;
    }

    if (hasHtml(trimmed)) {
      return (
        <div
          className={cn("rich-text-body space-y-4", className)}
          dangerouslySetInnerHTML={{ __html: trimmed }}
        />
      );
    }

    return (
      <div className={cn("space-y-4", className)}>
        {trimmed.split(/\n{2,}/).map((paragraph) => (
          <p className="body-copy" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      {content.map((node, index) => renderBlock(node, index))}
    </div>
  );
}
