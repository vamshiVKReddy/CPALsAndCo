import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { client, isSanityConfigured } from "@/sanity/client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your career at CPALS & Co. We welcome Chartered Accountants, semi-qualified professionals, and talented graduates to join our growing team.",
  alternates: { canonical: "/careers" },
};

const staticOpenings = [
  {
    title: "Article Assistant", type: "Full-time", category: "Training",
    description: "We are seeking motivated candidates who have passed the CA Intermediate examination to join us as Article Assistants. You will gain exposure to audit, taxation, and advisory work under the guidance of experienced professionals.",
    requirements: ["CA Intermediate (Both groups passed)", "Strong academic record", "Analytical and detail-oriented mindset", "Good communication skills"],
  },
  {
    title: "Audit Associate", type: "Full-time", category: "Audit",
    description: "We are looking for a qualified or semi-qualified CA with practical audit experience to join our audit team. The role involves conducting statutory and internal audits across various industries.",
    requirements: ["CA Qualified or CA Final (Either group)", "1–3 years of audit experience", "Knowledge of Companies Act and Standards on Auditing", "Attention to detail and integrity"],
  },
  {
    title: "Tax & Compliance Executive", type: "Full-time", category: "Taxation",
    description: "We are seeking a professional with hands-on experience in direct and indirect taxation to join our compliance team. The role involves ITR filing, GST returns, and regulatory compliance for a diverse client portfolio.",
    requirements: ["B.Com / M.Com / CA Inter or Final", "Working knowledge of Income Tax and GST", "Experience with Tally and tax software", "Organised and deadline-oriented"],
  },
  {
    title: "Accounts Executive", type: "Full-time", category: "Accounting",
    description: "We are looking for a meticulous accounts professional to maintain financial records for our clients, prepare financial statements, and support the audit and compliance teams.",
    requirements: ["B.Com / M.Com / CA Inter", "Proficiency in Tally ERP / accounting software", "1–2 years of accounting experience", "Strong numerical aptitude"],
  },
];

const benefits = [
  { title: "Professional Growth", desc: "Structured learning paths, in-house training, and opportunities to work across diverse industries and service lines.", icon: "📈" },
  { title: "Mentorship", desc: "Direct mentorship from experienced Chartered Accountants and senior professionals on every engagement.", icon: "🎯" },
  { title: "Learning Culture", desc: "We invest in continuous professional development including seminars, webinars, and ICAI programmes.", icon: "📚" },
  { title: "Inclusive Environment", desc: "A respectful, collaborative workplace that values diverse perspectives and rewards merit.", icon: "🤝" },
];

type Opening = { title: string; type: string; category: string; description: string; requirements: string[] };

export default async function CareersPage() {
  let openings: Opening[] = staticOpenings;

  if (isSanityConfigured) {
    const cms = await client
      .fetch(`*[_type == "careerOpening" && isActive != false] | order(displayOrder asc) { title, type, category, description, requirements }`)
      .catch(() => null);
    if (cms && cms.length > 0) {
      openings = cms.map((j: Record<string, unknown>) => ({
        title: j.title as string,
        type: (j.type as string) || "Full-time",
        category: (j.category as string) || "",
        description: (j.description as string) || "",
        requirements: (j.requirements as string[]) || [],
      }));
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 pt-32 pb-20" aria-labelledby="careers-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn><SectionLabel light /></FadeIn>
          <FadeIn delay={0.1}>
            <h1 id="careers-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mt-2 mb-5 max-w-3xl">
              Build Your Career With Us
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl">
              Join a professional team that values integrity, expertise, and continuous growth. We offer meaningful work and real career development.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-white" aria-labelledby="why-join-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <FadeIn><SectionLabel>Why CPALS & Co</SectionLabel></FadeIn>
            <FadeIn delay={0.1}>
              <h2 id="why-join-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Why Join Our Team</h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={0.1 * i}>
                <div className="p-7 rounded-2xl bg-slate-50 border border-slate-100 text-center h-full">
                  <div className="text-4xl mb-4" role="img" aria-label={b.title}>{b.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{b.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-slate-50" aria-labelledby="culture-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <FadeIn><SectionLabel>Our Culture</SectionLabel></FadeIn>
              <FadeIn delay={0.1}>
                <h2 id="culture-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-5">
                  Professional. Collaborative. Purposeful.
                </h2>
              </FadeIn>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <FadeIn delay={0.15}><p>At CPALS & Co, we believe that our people are our most valuable asset. We have cultivated a culture that combines professional rigour with a supportive environment where individuals can thrive and contribute meaningfully.</p></FadeIn>
                <FadeIn delay={0.2}><p>Every team member is treated with respect, given responsibility aligned to their abilities, and supported in their professional development journey. We believe in recognising effort and rewarding performance.</p></FadeIn>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ label: "Respect", desc: "Every person is valued" }, { label: "Learning", desc: "Growth is continuous" }, { label: "Accountability", desc: "Own your work" }, { label: "Excellence", desc: "Quality in everything" }].map((item) => (
                <FadeIn key={item.label} direction="up">
                  <div className="p-5 bg-white rounded-2xl border border-slate-100 text-center">
                    <p className="font-bold text-blue-600 text-lg mb-1">{item.label}</p>
                    <p className="text-slate-500 text-xs">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-white" aria-labelledby="openings-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <FadeIn><SectionLabel>Join Us</SectionLabel></FadeIn>
            <FadeIn delay={0.1}>
              <h2 id="openings-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Current Opportunities</h2>
            </FadeIn>
          </div>
          <div className="space-y-5 max-w-3xl mx-auto">
            {openings.length === 0 ? (
              <FadeIn>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-10 text-center">
                  <p className="text-slate-500 text-lg font-medium mb-2">No Current Openings</p>
                  <p className="text-slate-400 text-sm">We do not have any active openings at this time. You are welcome to send a general application using the form below.</p>
                </div>
              </FadeIn>
            ) : (
              openings.map((job, i) => (
                <FadeIn key={job.title} delay={0.1 * i}>
                  <div className="bg-white border border-slate-100 rounded-2xl p-7 hover:border-blue-100 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                        <div className="flex items-center gap-3 mt-1.5">
                          <span className="text-xs font-medium text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full">{job.category}</span>
                          <span className="text-xs text-slate-500">{job.type}</span>
                        </div>
                      </div>
                      <a href="#application-form" className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors">Apply</a>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{job.description}</p>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Requirements</p>
                      <ul className="space-y-1.5">
                        {job.requirements.map((req) => (
                          <li key={req} className="flex items-center gap-2 text-sm text-slate-600">
                            <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0" aria-hidden="true">
                              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                              </svg>
                            </div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-slate-50" aria-labelledby="apply-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <SectionLabel>Apply Now</SectionLabel>
              <h2 id="apply-heading" className="text-3xl font-bold text-slate-900 tracking-tight mt-1">Send Your Application</h2>
              <p className="text-slate-600 mt-3">Interested in joining our team? Submit your details and we will be in touch.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <form className="bg-white rounded-2xl border border-slate-100 p-8 space-y-5" noValidate aria-label="Job application form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="careers-name" className="block text-sm font-medium text-slate-700 mb-1.5">Full Name <span className="text-red-500" aria-hidden="true">*</span></label>
                  <input id="careers-name" type="text" name="name" autoComplete="name" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="careers-email" className="block text-sm font-medium text-slate-700 mb-1.5">Email Address <span className="text-red-500" aria-hidden="true">*</span></label>
                  <input id="careers-email" type="email" name="email" autoComplete="email" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="you@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="careers-phone" className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                <input id="careers-phone" type="tel" name="phone" autoComplete="tel" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div>
                <label htmlFor="careers-position" className="block text-sm font-medium text-slate-700 mb-1.5">Position Applied For <span className="text-red-500" aria-hidden="true">*</span></label>
                <select id="careers-position" name="position" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white">
                  <option value="">Select a position</option>
                  {openings.map((job) => (<option key={job.title} value={job.title}>{job.title}</option>))}
                  <option value="other">Other / General Application</option>
                </select>
              </div>
              <div>
                <label htmlFor="careers-qualification" className="block text-sm font-medium text-slate-700 mb-1.5">Qualifications & Experience</label>
                <textarea id="careers-qualification" name="qualification" rows={3} className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none" placeholder="Brief overview of your qualifications and relevant experience" />
              </div>
              <div>
                <label htmlFor="careers-cover" className="block text-sm font-medium text-slate-700 mb-1.5">Cover Note</label>
                <textarea id="careers-cover" name="cover" rows={4} className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none" placeholder="Why you would like to join CPALS & Co" />
              </div>
              <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm">Submit Application</button>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
