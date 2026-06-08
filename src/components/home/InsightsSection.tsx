import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const articles = [
  {
    category: "GST Updates",
    title: "Key Changes in GST Compliance for the Current Financial Year",
    excerpt:
      "An overview of significant amendments and compliance requirements under GST that businesses need to be aware of.",
    date: "June 2026",
    slug: "gst-compliance-changes",
    color: "emerald",
  },
  {
    category: "Tax Updates",
    title: "Understanding the New Income Tax Return Filing Requirements",
    excerpt:
      "A comprehensive guide to the updated income tax return forms and their implications for individual and corporate taxpayers.",
    date: "May 2026",
    slug: "income-tax-return-requirements",
    color: "blue",
  },
  {
    category: "Compliance Updates",
    title: "MCA Compliance Calendar: Key Annual Filing Deadlines",
    excerpt:
      "An essential checklist of regulatory filings and deadlines under the Companies Act that every business must track.",
    date: "May 2026",
    slug: "mca-compliance-calendar",
    color: "slate",
  },
];

const categoryColors: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  slate: "bg-slate-100 text-slate-700 border-slate-200",
};

export function InsightsSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50" aria-labelledby="insights-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <FadeIn>
              <SectionLabel>Knowledge Centre</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                id="insights-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
              >
                Insights & Updates
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors group shrink-0"
            >
              View all articles
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <FadeIn key={article.slug} delay={0.1 + i * 0.1}>
              <Link
                href={`/insights/${article.slug}`}
                className="group block h-full bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-md hover:shadow-slate-900/5 transition-all duration-300 overflow-hidden"
                aria-label={`Read article: ${article.title}`}
              >
                {/* Top accent */}
                <div
                  className={`h-1 ${
                    article.color === "emerald"
                      ? "bg-emerald-500"
                      : article.color === "blue"
                      ? "bg-blue-600"
                      : "bg-slate-400"
                  }`}
                  aria-hidden="true"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                        categoryColors[article.color] || categoryColors.slate
                      }`}
                    >
                      {article.category}
                    </span>
                    <span className="text-slate-400 text-xs">{article.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-blue-600 text-xs font-semibold">
                    Read more
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
