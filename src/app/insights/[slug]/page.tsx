import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, categoryColors, accentColors } from "../articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${slug}` },
  };
}

export default async function ArticlePage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  // Convert plain markdown-style content to paragraphs and headings
  const lines = article.content.split("\n");

  return (
    <div className="bg-white">
      {/* Article Hero */}
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

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="prose prose-slate prose-lg max-w-none">
          {lines.map((line, i) => {
            if (line.startsWith("## ")) {
              return (
                <h2 key={i} className="text-xl font-bold text-slate-900 mt-10 mb-4">
                  {line.replace("## ", "")}
                </h2>
              );
            }
            if (line.startsWith("**") && line.endsWith("**")) {
              return (
                <h3 key={i} className="font-bold text-slate-900 mt-6 mb-2 text-base">
                  {line.replace(/\*\*/g, "")}
                </h3>
              );
            }
            if (line.startsWith("- ")) {
              return (
                <li key={i} className="text-slate-600 leading-relaxed ml-4 list-disc mb-1">
                  {line.replace("- ", "")}
                </li>
              );
            }
            if (line.startsWith("*") && line.endsWith("*")) {
              return (
                <p key={i} className="text-slate-400 text-sm italic mt-8 pt-6 border-t border-slate-100">
                  {line.replace(/^\*|\*$/g, "")}
                </p>
              );
            }
            if (line.trim() === "") return null;
            return (
              <p key={i} className="text-slate-600 leading-relaxed mb-4">
                {line}
              </p>
            );
          })}
        </div>

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

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <p className="text-slate-400 text-xs leading-relaxed">
            The content on this page is for general informational purposes only and does not constitute professional advice. Please consult a qualified Chartered Accountant before acting on any information contained herein.
          </p>
        </div>
      </div>
    </div>
  );
}
