import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

// Shared components — styled to match site design exactly
const components = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-slate-600 text-sm leading-relaxed mb-3 last:mb-0">{children}</p>
    ),
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-xl font-bold text-slate-900 mt-5 mb-2">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-lg font-bold text-slate-900 mt-5 mb-2">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-base font-bold text-slate-800 mt-4 mb-1.5">{children}</h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-blue-200 pl-4 italic text-slate-500 text-sm my-3">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="space-y-1 my-2">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside space-y-1 my-2 text-sm text-slate-600">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex items-start gap-2 text-sm text-slate-600">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" aria-hidden="true" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-sm text-slate-600">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-slate-800">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    underline: ({ children }: { children?: React.ReactNode }) => (
      <span className="underline">{children}</span>
    ),
    link: ({ value, children }: { value?: { href: string }; children?: React.ReactNode }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700 underline"
      >
        {children}
      </a>
    ),
  },
};

// Variant for article/insights pages — larger text
const articleComponents = {
  ...components,
  block: {
    ...components.block,
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-slate-600 leading-relaxed mb-4">{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-bold text-slate-800 mt-6 mb-2 text-base">{children}</h3>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="my-4 space-y-2">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="my-4 space-y-2 list-decimal list-inside text-slate-600">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex items-start gap-2 text-slate-600">
        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" aria-hidden="true" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-slate-600">{children}</li>
    ),
  },
};

// Helper: check if a value is Portable Text (array of blocks) or plain string
export function isPortableText(value: unknown): value is PortableTextBlock[] {
  return Array.isArray(value) && value.length > 0 && typeof value[0] === "object" && "_type" in (value[0] as object);
}

// Renders Portable Text blocks with default (compact) styling
export function PTRenderer({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components as Parameters<typeof PortableText>[0]["components"]} />;
}

// Renders Portable Text blocks with article (full-page) styling
export function PTArticleRenderer({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={articleComponents as Parameters<typeof PortableText>[0]["components"]} />;
}

// Smart renderer: handles both plain string and Portable Text
export function SmartText({
  value,
  className = "",
  variant = "default",
}: {
  value: string | PortableTextBlock[] | unknown;
  className?: string;
  variant?: "default" | "article";
}) {
  if (!value) return null;

  if (isPortableText(value)) {
    return (
      <div className={className}>
        {variant === "article" ? (
          <PTArticleRenderer value={value} />
        ) : (
          <PTRenderer value={value} />
        )}
      </div>
    );
  }

  // Plain text fallback — preserves whitespace/newlines
  return (
    <p className={`text-slate-600 text-sm leading-relaxed whitespace-pre-line ${className}`}>
      {String(value)}
    </p>
  );
}
