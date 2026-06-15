"use client";

import { useState } from "react";
import Link from "next/link";
import { articles as hardcodedArticles, categoryColors, accentColors } from "./articles";

export function InsightsClient({ initialArticles }: { initialArticles: any[] | null }) {
  const articles = initialArticles || hardcodedArticles;
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(articles.map((a: any) => a.category))),
  ];

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a: any) => a.category === activeCategory);

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12" role="navigation" aria-label="Article categories">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article count */}
        <p className="text-slate-400 text-xs mb-6">
          Showing {filtered.length} article{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "All" && ` in ${activeCategory}`}
        </p>

        {/* Articles grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No articles in this category yet.</p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-4 text-blue-600 hover:text-blue-700 font-semibold text-sm"
            >
              View all articles
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <Link
                key={article.slug}
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
                  <h2 className="font-bold text-slate-900 text-base leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
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
            ))}
          </div>
        )}

        {/* Stay Updated banner */}
        <div className="mt-12 p-6 bg-blue-50 border border-blue-100 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-slate-900 mb-1">Stay Updated</h3>
            <p className="text-slate-600 text-sm">
              Contact us to receive the latest tax and compliance updates from our team.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
