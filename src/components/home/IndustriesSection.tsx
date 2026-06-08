import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const industries = [
  { name: "Manufacturing", icon: "🏭", desc: "Production & industrial units" },
  { name: "Real Estate", icon: "🏗️", desc: "Developers & property firms" },
  { name: "Technology", icon: "💻", desc: "IT & software companies" },
  { name: "Healthcare", icon: "🏥", desc: "Hospitals & clinics" },
  { name: "Retail & FMCG", icon: "🛒", desc: "Retail chains & distributors" },
  { name: "Logistics", icon: "🚛", desc: "Transport & supply chain" },
  { name: "Education", icon: "🎓", desc: "Schools & institutions" },
  { name: "Financial Services", icon: "🏦", desc: "NBFCs & financial firms" },
  { name: "Professional Services", icon: "💼", desc: "Consulting & advisory firms" },
  { name: "Startups", icon: "🚀", desc: "Early-stage companies" },
];

export function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white" aria-labelledby="industries-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <FadeIn>
            <SectionLabel light />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              id="industries-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
            >
              Industries We Serve
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-slate-400 text-lg leading-relaxed">
              Our cross-sector experience enables us to bring relevant
              industry perspective to every engagement.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {industries.map((industry, i) => (
            <FadeIn key={industry.name} delay={0.05 + (i % 5) * 0.05}>
              <div className="group p-5 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-white/15 transition-all duration-300 text-center cursor-default">
                <div className="text-3xl mb-3" role="img" aria-label={industry.name}>
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-white text-sm leading-tight mb-1">
                  {industry.name}
                </h3>
                <p className="text-slate-500 text-xs">{industry.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors group"
            >
              Explore industry expertise
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
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
