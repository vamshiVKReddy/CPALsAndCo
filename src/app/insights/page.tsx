import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Tax updates, GST updates, audit insights, compliance updates, and business advisory articles from CPALS & Co.",
  alternates: { canonical: "/insights" },
};

const categories = [
  "All",
  "Tax Updates",
  "GST Updates",
  "Audit Insights",
  "Compliance Updates",
  "Business Advisory",
];

const articles = [
  {
    category: "GST Updates",
    title: "Key Changes in GST Compliance for the Current Financial Year",
    excerpt:
      "An overview of significant amendments and compliance requirements under GST that businesses need to be aware of, including changes to return filing procedures and reconciliation requirements.",
    date: "June 2026",
    readTime: "5 min read",
    slug: "gst-compliance-changes",
    featured: true,
    color: "emerald",
  },
  {
    category: "Tax Updates",
    title: "Understanding the New Income Tax Return Filing Requirements",
    excerpt:
      "A comprehensive guide to the updated income tax return forms and their implications for individual and corporate taxpayers in the current assessment year.",
    date: "May 2026",
    readTime: "7 min read",
    slug: "income-tax-return-requirements",
    featured: true,
    color: "blue",
  },
  {
    category: "Compliance Updates",
    title: "MCA Compliance Calendar: Key Annual Filing Deadlines",
    excerpt:
      "An essential checklist of regulatory filings and deadlines under the Companies Act that every business must track to maintain good standing.",
    date: "May 2026",
    readTime: "4 min read",
    slug: "mca-compliance-calendar",
    featured: true,
    color: "slate",
  },
  {
    category: "Audit Insights",
    title: "Internal Controls Best Practices for Growing Businesses",
    excerpt:
      "As businesses scale, robust internal controls become critical. This article explores practical frameworks for implementing effective internal controls.",
    date: "April 2026",
    readTime: "6 min read",
    slug: "internal-controls-best-practices",
    featured: false,
    color: "blue",
  },
  {
    category: "Business Advisory",
    title: "Working Capital Management: Strategies for SMEs",
    excerpt:
      "Effective working capital management is crucial for business sustainability. We explore proven strategies for optimising cash flow and liquidity.",
    date: "April 2026",
    readTime: "5 min read",
    slug: "working-capital-management",
    featured: false,
    color: "emerald",
  },
  {
    category: "Tax Updates",
    title: "Tax Implications of ESOP Schemes for Employees and Employers",
    excerpt:
      "Employee Stock Option Plans have specific tax treatment at different stages. This article provides clarity on the applicable tax provisions.",
    date: "March 2026",
    readTime: "6 min read",
    slug: "esop-tax-implications",
    featured: false,
    color: "slate",
  },
];

const categoryColors: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  slate: "bg-slate-100 text-slate-700 border-slate-200",
};

const accentColors: Record<string, string> = {
  emerald: "bg-emerald-500",
  blue: "bg-blue-600",
  slate: "bg-slate-400",
};

export default function InsightsPage() {
  const featured = articles.filter((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 pt-32 pb-20" aria-labelledby="insights-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel light />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              id="insights-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mt-2 mb-5 max-w-3xl"
            >
              Insights & Updates
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl">
              Professional perspectives on taxation, compliance, audit, and
              business advisory to help you stay informed and ahead.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter (visual only) */}
          <FadeIn>
            <div className="flex flex-wrap gap-2 mb-12" role="navigation" aria-label="Article categories">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-default ${
                    cat === "All"
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Featured Articles */}
          <div className="mb-8">
            <FadeIn>
              <h2 className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-5">
                Latest Articles
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {featured.map((article, i) => (
                <FadeIn key={article.slug} delay={0.1 * i}>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="group block h-full bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300 overflow-hidden"
                    aria-label={`Read: ${article.title}`}
                  >
                    <div className={`h-1 ${accentColors[article.color] || "bg-slate-400"}`} aria-hidden="true" />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${categoryColors[article.color] || categoryColors.slate}`}>
                          {article.category}
                        </span>
                        <span className="text-slate-400 text-xs">{article.readTime}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-base leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                        <span className="text-slate-400 text-xs">{article.date}</span>
                        <div className="flex items-center gap-1.5 text-blue-600 text-xs font-semibold">
                          Read more
                          <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* More Articles */}
          <div>
            <FadeIn>
              <h2 className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-5">
                More Articles
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rest.map((article, i) => (
                <FadeIn key={article.slug} delay={0.1 * i}>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="group block h-full bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300 p-6"
                    aria-label={`Read: ${article.title}`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${categoryColors[article.color] || categoryColors.slate}`}>
                        {article.category}
                      </span>
                      <span className="text-slate-400 text-xs">{article.readTime}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                      <span className="text-slate-400 text-xs">{article.date}</span>
                      <div className="flex items-center gap-1 text-blue-600 text-xs font-semibold">
                        Read
                        <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-12 p-6 bg-blue-50 border border-blue-100 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Stay Updated</h3>
                <p className="text-slate-600 text-sm">
                  Subscribe to receive the latest tax and compliance updates from our team.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
