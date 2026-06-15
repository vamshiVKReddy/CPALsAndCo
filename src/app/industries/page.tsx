import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { client, isSanityConfigured } from "@/sanity/client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "CPALS & Co serves businesses across manufacturing, real estate, technology, healthcare, retail, logistics, education, financial services, and more.",
  alternates: { canonical: "/industries" },
};

const staticIndustries = [
  { name: "Manufacturing", icon: "🏭", description: "Manufacturing businesses have unique requirements around cost accounting, inventory valuation, excise duty, and GST compliance. We provide tailored services to help manufacturers maintain accurate financial records, optimise tax positions, and comply with sector-specific regulations.", services: ["Cost Accounting", "GST Compliance", "Statutory Audit", "Transfer Pricing", "Tax Planning"] },
  { name: "Real Estate", icon: "🏗️", description: "The real estate sector involves complex accounting treatments for revenue recognition, project costing, and joint development arrangements. We assist developers, builders, and property management companies with specialised accounting, GST advisory, and compliance services.", services: ["Project Accounting", "GST Advisory", "Income Tax Planning", "JDA Structuring", "Audit"] },
  { name: "Technology", icon: "💻", description: "Technology companies including IT services, software product firms, and digital businesses require expert guidance on ESOP accounting, software revenue recognition, R&D tax benefits, and international tax. We support tech companies from startup to scale.", services: ["ESOP Advisory", "Revenue Recognition", "R&D Benefits", "International Tax", "Startup Compliance"] },
  { name: "Healthcare", icon: "🏥", description: "Healthcare organisations including hospitals, diagnostic centres, and pharmaceutical companies operate in a highly regulated environment. We provide audit, tax, and compliance services specifically adapted to the healthcare sector's unique financial and regulatory requirements.", services: ["Statutory Audit", "Tax Compliance", "GST Advisory", "License Management", "Trust Audit"] },
  { name: "Retail & FMCG", icon: "🛒", description: "Retail businesses and FMCG companies face challenges around inventory management, supply chain accounting, and multi-state GST compliance. We provide streamlined services to help retail businesses manage their financial operations efficiently.", services: ["Inventory Accounting", "GST Compliance", "Trade Discount Advisory", "Retail Audit", "Tax Planning"] },
  { name: "Logistics", icon: "🚛", description: "Logistics and transport companies require expertise in GST on freight services, vehicle-related deductions, and cross-border transactions. We support logistics businesses with comprehensive tax and compliance services.", services: ["GST on Services", "Income Tax", "Asset Management", "Transport Audit", "Compliance"] },
  { name: "Education", icon: "🎓", description: "Educational institutions, coaching centres, and EdTech companies have specific regulatory and accounting requirements. We assist schools, colleges, universities, and private educational enterprises with their financial and compliance needs.", services: ["Trust/Society Audit", "Tax Exemptions", "Fee Structure Advisory", "FCRA Compliance", "GST"] },
  { name: "Financial Services", icon: "🏦", description: "NBFCs, investment firms, insurance intermediaries, and other financial services businesses operate under stringent regulatory frameworks. We provide specialised audit, accounting, and compliance services for financial sector entities.", services: ["NBFC Compliance", "RBI Reporting", "Statutory Audit", "IND AS Accounting", "Tax Advisory"] },
  { name: "Professional Services", icon: "💼", description: "Law firms, consulting practices, architects, and other professional service providers have unique professional income taxation considerations. We provide tax-efficient solutions and compliance services designed specifically for professionals.", services: ["Professional Tax Planning", "GST Registration", "Partnership Advisory", "LLP Services", "Audit"] },
  { name: "Startups", icon: "🚀", description: "Startups require agile, cost-effective financial and compliance support as they scale. We help early-stage companies set up proper financial systems, navigate regulatory requirements, and ensure compliance from day one.", services: ["Incorporation", "Startup India", "ESOP Structuring", "Fundraising Support", "Compliance Setup"] },
];

type Industry = { name: string; icon: string; description: string; services: string[] };

export default async function IndustriesPage() {
  let industries: Industry[] = staticIndustries;

  if (isSanityConfigured) {
    const cms = await client
      .fetch(`*[_type == "industry"] | order(displayOrder asc) { name, icon, description, services }`)
      .catch(() => null);
    if (cms && cms.length > 0) {
      industries = cms.map((ind: Record<string, unknown>) => ({
        name: ind.name as string,
        icon: (ind.icon as string) || "🏢",
        description: (ind.description as string) || "",
        services: (ind.services as string[]) || [],
      }));
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 pt-32 pb-20" aria-labelledby="industries-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn><SectionLabel light /></FadeIn>
          <FadeIn delay={0.1}>
            <h1 id="industries-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mt-2 mb-5 max-w-3xl">
              Industries We Serve
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl">
              Cross-sector expertise enables us to bring relevant industry perspective and practical solutions to every engagement.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-slate-50" aria-label="Industry details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {industries.map((industry, i) => (
              <FadeIn key={industry.name} delay={0.05 + (i % 2) * 0.05}>
                <div className="h-full bg-white rounded-2xl border border-slate-100 p-7 hover:border-slate-200 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="text-4xl shrink-0" role="img" aria-label={industry.name}>{industry.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl font-bold text-slate-900 mb-2">{industry.name}</h2>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{industry.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {industry.services.map((svc) => (
                          <span key={svc} className="inline-flex items-center px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium rounded-full">
                            {svc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}
