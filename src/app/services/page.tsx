import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { client, isSanityConfigured } from "@/sanity/client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Services",
  description:
    "CPALS & Co offers audit & assurance, direct taxation, indirect taxation (GST), business advisory, accounting & financial reporting, corporate compliance, startup support and certification services.",
  alternates: { canonical: "/services" },
};

// ── Static fallback data ─────────────────────────────────────────────
const staticServices = [
  {
    id: "audit", title: "Audit & Assurance", color: "blue", icon: "🛡️",
    tagline: "Independent audit and assurance services to strengthen compliance and financial reporting.",
    description: "Independent audit and assurance services for corporates, LLPs and business entities to strengthen compliance and financial reporting.",
    sections: [
      { heading: "Statutory Audit", items: ["Companies Audit", "LLP Audit", "Partnership Firm Audit"] },
      { heading: "Internal Audit", items: ["Internal Control Review", "Process Evaluation", "Risk Assessment"] },
      { heading: "Tax Audit", items: ["Tax Audit under Income Tax Act", "Compliance Review"] },
      { heading: "Other Assurance Services", items: ["Stock Audit", "Due Diligence", "Certification Assignments"] },
    ],
  },
  {
    id: "taxation", title: "Direct Taxation", color: "emerald", icon: "📊",
    tagline: "Comprehensive direct tax compliance and advisory services.",
    description: "Comprehensive direct tax compliance and advisory services for companies, LLPs, firms, individuals and other business entities.",
    sections: [
      { heading: "Tax Compliance", items: ["Income Tax Return Filing", "TDS Compliance", "Advance Tax Computation"] },
      { heading: "Tax Planning", items: ["Corporate Tax Planning", "Capital Gains Planning", "NRI Taxation"] },
      { heading: "Assessment & Representation", items: ["Income Tax Notices", "Assessment Proceedings", "Appeals & Representation"] },
    ],
  },
  {
    id: "gst", title: "Indirect Taxation (GST)", color: "blue", icon: "🧾",
    tagline: "End-to-end GST compliance and advisory services.",
    description: "End-to-end GST compliance and advisory services for manufacturers, traders and service providers across different industries.",
    sections: [
      { heading: "GST Compliance", items: ["GST Registration", "GST Return Filing", "Annual Returns"] },
      { heading: "GST Advisory", items: ["Input Tax Credit Review", "Classification & Valuation", "GST Transaction Review"] },
      { heading: "GST Assessments", items: ["Departmental Notices", "Assessments & Proceedings", "Litigation Support"] },
      { heading: "Refund Services", items: ["Export Refunds", "GST Refund Claims"] },
    ],
  },
  {
    id: "advisory", title: "Business Advisory & Support", color: "emerald", icon: "💡",
    tagline: "Specialised financial support for due diligence, valuations and funding.",
    description: "Providing specialised financial support for due diligence, valuations and funding requirements to businesses and corporate entities.",
    sections: [
      { heading: "Valuation Services", items: ["Business Valuation", "Share Valuation"] },
      { heading: "Due Diligence", items: ["Financial Due Diligence", "Compliance Due Diligence"] },
      { heading: "Banking & Finance Support", items: ["CMA Data Preparation", "Bank Loan Documentation", "Working Capital Assessment"] },
      { heading: "Financial Projections", items: ["Projected Financial Statements", "Cash Flow Projections"] },
    ],
  },
  {
    id: "accounting", title: "Accounting & Financial Reporting", color: "blue", icon: "📒",
    tagline: "Reliable accounting and financial reporting solutions.",
    description: "Providing reliable accounting and financial reporting solutions to support reporting and business decisions.",
    sections: [
      { heading: "Accounting Services", items: ["Bookkeeping", "Accounts Finalization", "Ledger Scrutiny", "Reconciliation Services"] },
      { heading: "Financial Reporting", items: ["Financial Statements", "MIS Reporting", "Management Reports"] },
      { heading: "Payroll Services", items: ["Payroll Processing", "Employee Tax Compliance"] },
    ],
  },
  {
    id: "compliance", title: "Corporate & Regulatory Compliance", color: "emerald", icon: "🏛️",
    tagline: "Supporting businesses in meeting statutory and regulatory requirements.",
    description: "Supporting companies and LLPs, startups and other business entities in meeting statutory and regulatory requirements.",
    sections: [
      { heading: "Corporate Compliance", items: ["ROC Filings", "Annual Compliance", "Statutory Registers"] },
      { heading: "LLP Compliance", items: ["Annual Filings", "Regulatory Compliance"] },
      { heading: "Incorporation & Registrations", items: ["Company Incorporation", "LLP Registration", "Business Registrations"] },
    ],
  },
  {
    id: "startup", title: "Emerging & Startup Business Support", color: "blue", icon: "🚀",
    tagline: "Supporting entrepreneurs and startups through every stage of growth.",
    description: "Supporting entrepreneurs and startups through every stage of growth by providing business setup and compliance services.",
    sections: [
      { heading: "Business Formation", items: ["Company Registration", "LLP Formation", "Partnership Registration", "MSME Registration"] },
      { heading: "Finance Function Setup", items: ["Accounting System Setup", "Compliance Calendar", "Reporting Framework"] },
      { heading: "Ongoing Support", items: ["Accounting Support", "Compliance Management", "Virtual CFO Services"] },
    ],
  },
  {
    id: "certification", title: "Other Certification Services", color: "emerald", icon: "📜",
    tagline: "Professional certifications and attestations for regulatory and banking requirements.",
    description: "Providing professional certifications and attestations for regulatory, banking and other business requirements.",
    sections: [
      { heading: "Financial Certifications", items: ["Net Worth Certificates", "Turnover Certificates", "Financial Information Certificates"] },
      { heading: "Banking Certifications", items: ["Fund Utilization Certificates", "Certificates for Credit Facilities"] },
      { heading: "Regulatory Certifications", items: ["Certificates under Various Laws", "Compliance Certifications"] },
    ],
  },
];

type ServiceSection = { heading: string; items: string[] };
type Service = { id: string; title: string; tagline: string; description: string; color: string; icon: string; sections: ServiceSection[] };

export default async function ServicesPage() {
  let services: Service[] = staticServices;

  if (isSanityConfigured) {
    const cms = await client
      .fetch(`*[_type == "service"] | order(displayOrder asc) { serviceId, title, tagline, description, color, icon, sections }`)
      .catch(() => null);
    if (cms && cms.length > 0) {
      services = cms.map((s: Record<string, unknown>) => ({
        id: s.serviceId as string,
        title: s.title as string,
        tagline: (s.tagline as string) || "",
        description: (s.description as string) || "",
        color: (s.color as string) || "blue",
        icon: (s.icon as string) || "📋",
        sections: ((s.sections as ServiceSection[]) || []),
      }));
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 pt-32 pb-20" aria-labelledby="services-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn><SectionLabel light /></FadeIn>
          <FadeIn delay={0.1}>
            <h1 id="services-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mt-2 mb-5 max-w-3xl">
              Our Services
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl">
              A simple, transparent and efficient approach to deliver value to our clients across all areas of professional practice.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-slate-50" aria-label="Service details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service) => (
              <FadeIn key={service.id} delay={0.05}>
                <div id={service.id} className="bg-white rounded-3xl border border-slate-100 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    {/* Left panel */}
                    <div className={`lg:col-span-2 p-8 lg:p-10 ${service.color === "blue" ? "bg-blue-600" : "bg-slate-900"}`}>
                      <div className="text-4xl mb-5" role="img" aria-label={service.title}>{service.icon}</div>
                      <h2 className="text-2xl font-bold text-white mb-2">{service.title}</h2>
                      <p className={`text-sm font-medium mb-4 ${service.color === "blue" ? "text-blue-200" : "text-slate-400"}`}>{service.tagline}</p>
                      <p className={`leading-relaxed text-sm ${service.color === "blue" ? "text-blue-100" : "text-slate-400"}`}>{service.description}</p>
                    </div>
                    {/* Right panel */}
                    <div className="lg:col-span-3 p-8 lg:p-10">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {(service.sections || []).map((section) => (
                          <div key={section.heading}>
                            <h3 className={`text-xs font-bold uppercase tracking-widest mb-3 ${service.color === "blue" ? "text-blue-600" : "text-emerald-600"}`}>
                              {section.heading}
                            </h3>
                            <ul className="space-y-2">
                              {(section.items || []).map((item) => (
                                <li key={item} className="flex items-center gap-2.5">
                                  <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${service.color === "blue" ? "bg-blue-50 text-blue-600" : "bg-emerald-50 text-emerald-600"}`} aria-hidden="true">
                                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                  </div>
                                  <span className="text-slate-700 text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
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
