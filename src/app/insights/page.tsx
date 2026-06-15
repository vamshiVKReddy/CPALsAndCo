import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { InsightsClient } from "./InsightsClient";
import { client, isSanityConfigured } from "@/sanity/client";

// Force dynamic rendering so new/edited articles appear without redeployment
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Tax updates, GST updates, audit insights, compliance updates, and business advisory articles from CPALS & Co.",
  alternates: { canonical: "/insights" },
};

function getArticleColor(category: string): "emerald" | "blue" | "slate" {
  const cat = category?.toLowerCase() || "";
  if (cat.includes("gst") || cat.includes("advisory")) return "emerald";
  if (cat.includes("tax") || cat.includes("audit")) return "blue";
  return "slate";
}

export default async function InsightsPage() {
  let cmsArticles = null;

  if (isSanityConfigured) {
    cmsArticles = await client
      .fetch(`*[_type == "article"] | order(publishDate desc)`)
      .catch(() => null);
  }

  const displayArticles =
    cmsArticles && cmsArticles.length > 0
      ? cmsArticles.map((art: Record<string, unknown>) => ({
          slug: (art.slug as { current: string }).current,
          title: art.title as string,
          category: art.category as string,
          date: art.publishDate
            ? new Date(art.publishDate as string).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
                timeZone: "UTC",
              })
            : "",
          readTime: (art.readingTime as string) || "5 min read",
          excerpt:
            (art.metaDescription as string) ||
            (art.content ? (art.content as string).slice(0, 160) + "..." : ""),
          color: getArticleColor(art.category as string),
          content: (art.content as string) || "",
        }))
      : null;

  return (
    <>
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
              business advisory to help you stay informed.
            </p>
          </FadeIn>
        </div>
      </section>

      <InsightsClient initialArticles={displayArticles} />
    </>
  );
}
