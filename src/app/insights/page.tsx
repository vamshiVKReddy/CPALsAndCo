import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { InsightsClient } from "./InsightsClient";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Tax updates, GST updates, audit insights, compliance updates, and business advisory articles from CPALS & Co.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
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
              business advisory to help you stay informed.
            </p>
          </FadeIn>
        </div>
      </section>

      <InsightsClient />
    </>
  );
}
