import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, categoryColors } from "../articles";
import { client, isSanityConfigured } from "@/sanity/client";

// Force dynamic so article edits in Sanity appear without redeployment
export const dynamic = "force-dynamic";

function getArticleColor(category: string): "emerald" | "blue" | "slate" {
  const cat = category?.toLowerCase() || "";
  if (cat.includes("gst") || cat.includes("advisory")) {
    return "emerald";
  }
  if (cat.includes("tax") || cat.includes("audit")) {
    return "blue";
  }
  return "slate";
}

export async function generateStaticParams() {
  const hardcodedParams = articles.map((a) => ({ slug: a.slug }));
  if (!isSanityConfigured) return hardcodedParams;

  const cmsSlugs = await client
    .fetch(`*[_type == "article"]{ "slug": slug.current }`)
    .catch(() => []);
  const cmsParams = (cmsSlugs as { slug: string }[]).map((a) => ({ slug: a.slug }));

  // Merge, deduplicate
  const all = [...hardcodedParams, ...cmsParams];
  const seen = new Set<string>();
  return all.filter((s) => {
    if (seen.has(s.slug)) return false;
    seen.add(s.slug);
    return true;
  });
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;

  if (isSanityConfigured) {
    const cmsArticle = await client
      .fetch(`*[_type == "article" && slug.current == $slug][0]`, { slug })
      .catch(() => null);
    if (cmsArticle) {
      return {
        title: cmsArticle.metaTitle || cmsArticle.title,
        description: cmsArticle.metaDescription || (cmsArticle.content ? (cmsArticle.content as string).slice(0, 160) : ""),
        alternates: { canonical: `/insights/${slug}` },
      };
    }
  }

  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${slug}` },
  };
}

/* ── Inline bold renderer: **text** → <strong> ───────────────────── */
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

/* ── Table renderer ───────────────────────────────────────────────── */
function renderTable(tableLines: string[]) {
  const rows = tableLines
    .filter((l) => !l.match(/^\|[-| ]+\|$/)) // remove separator rows
    .map((l) =>
      l
        .split("|")
        .filter((_, i, arr) => i !== 0 && i !== arr.length - 1) // drop empty first/last
        .map((cell) => cell.trim())
    );

  if (rows.length === 0) return null;
  const [header, ...body] = rows;

  return (
    <div className="overflow-x-auto my-6 rounded-xl border border-slate-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            {header.map((cell, i) => (
              <th key={i} className="px-4 py-3 text-left font-semibold text-slate-700 whitespace-nowrap">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 text-slate-600 align-top">
                  {renderInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Main content renderer ────────────────────────────────────────── */
function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Table block — collect all table lines
    if (line.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const table = renderTable(tableLines);
      if (table) elements.push(<div key={`table-${i}`}>{table}</div>);
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100">
          {line.replace("## ", "")}
        </h2>
      );
      i++; continue;
    }

    // Bold standalone line = H3
    if (line.startsWith("**") && line.endsWith("**") && !line.slice(2, -2).includes("**")) {
      elements.push(
        <h3 key={i} className="font-bold text-slate-800 mt-6 mb-2 text-base">
          {line.slice(2, -2)}
        </h3>
      );
      i++; continue;
    }

    // List item
    if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-4 space-y-2">
          {listItems.map((item, li) => (
            <li key={li} className="flex items-start gap-2 text-slate-600">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" aria-hidden="true" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Italic disclaimer line (skip — shown in footer box)
    if (line.startsWith("*") && line.endsWith("*") && !line.startsWith("**")) {
      i++; continue;
    }

    // Empty line
    if (line.trim() === "") { i++; continue; }

    // Regular paragraph
    elements.push(
      <p key={i} className="text-slate-600 leading-relaxed mb-4">
        {renderInline(line)}
      </p>
    );
    i++;
  }

  return elements;
}

export default async function ArticlePage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  
  let cmsArticle = null;
  if (isSanityConfigured) {
    cmsArticle = await client
      .fetch(`*[_type == "article" && slug.current == $slug][0]`, { slug })
      .catch(() => null);
  }

  let article;
  if (cmsArticle) {
    article = {
      slug: cmsArticle.slug.current,
      title: cmsArticle.title,
      category: cmsArticle.category,
      date: cmsArticle.publishDate
        ? new Date(cmsArticle.publishDate).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
            timeZone: "UTC",
          })
        : "",
      readTime: cmsArticle.readingTime || "5 min read",
      excerpt: cmsArticle.metaDescription || "",
      color: getArticleColor(cmsArticle.category),
      content: cmsArticle.content || "",
    };
  } else {
    article = articles.find((a) => a.slug === slug);
  }

  if (!article) notFound();

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-slate-900 pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors mb-8 group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Insights
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[article.color]}`}>
              {article.category}
            </span>
            <span className="text-slate-400 text-xs">{article.date}</span>
            <span className="text-slate-500 text-xs">·</span>
            <span className="text-slate-400 text-xs">{article.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div>{renderContent(article.content)}</div>

        {/* Bottom nav */}
        <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to all articles
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Speak to Our Team
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Footer box */}
        <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <p className="text-slate-400 text-xs leading-relaxed">
            For guidance on matters specific to your business or compliance requirements, please{" "}
            <a href="/contact" className="text-blue-500 hover:underline">contact CPALS & Co</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
