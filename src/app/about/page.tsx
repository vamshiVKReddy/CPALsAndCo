import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { client, isSanityConfigured } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { SmartText } from "@/components/ui/PortableTextRenderer";

// Force dynamic rendering so Sanity updates appear without redeployment
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CPALS & Co — our vision, mission, values, leadership, and professional approach to chartered accountancy and advisory services.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Integrity",
    description:
      "We act with honesty and transparency in all professional and business relationships, maintaining the highest ethical standards.",
    icon: "⚖️",
  },
  {
    title: "Excellence",
    description:
      "We are committed to delivering work of the highest quality, continuously improving our knowledge and processes.",
    icon: "🏆",
  },
  {
    title: "Confidentiality",
    description:
      "Client information is treated with strict confidentiality, forming the foundation of the trust placed in us.",
    icon: "🔒",
  },
  {
    title: "Independence",
    description:
      "We maintain professional independence and objectivity in all assurance engagements, free from conflicts of interest.",
    icon: "🎯",
  },
  {
    title: "Responsibility",
    description:
      "We take ownership of our work and are accountable to our clients, the profession, and the public interest.",
    icon: "🤝",
  },
  {
    title: "Collaboration",
    description:
      "We work closely with clients as partners, fostering long-term relationships built on mutual understanding and trust.",
    icon: "🌐",
  },
];

const team = [
  {
    name: "Partner Name",
    designation: "Founding Partner",
    qualifications: "B.Com, FCA",
    specialisation: "Audit & Assurance, Direct Taxation",
    bio: "Fellow Member of the Institute of Chartered Accountants of India with professional experience in statutory audit, tax advisory and financial consulting.",
    initials: "PN",
  },
  {
    name: "Partner Name",
    designation: "Senior Partner",
    qualifications: "M.Com, FCA, DISA",
    specialisation: "GST, Corporate Compliance",
    bio: "Fellow Member of ICAI with professional experience in GST advisory, indirect taxation and corporate law compliance.",
    initials: "PN",
  },
  {
    name: "Associate Name",
    designation: "Senior Manager",
    qualifications: "B.Com, ACA",
    specialisation: "Business Advisory, Financial Reporting",
    bio: "Associate Member of ICAI engaged in financial reporting, management accounting and business advisory services.",
    initials: "AN",
  },
];

export default async function AboutPage() {
  let cmsTeam = null;
  if (isSanityConfigured) {
    cmsTeam = await client
      .fetch(`*[_type == "leadership"] | order(displayOrder asc)`)
      .catch(() => null);
  }

  const displayTeam =
    cmsTeam && cmsTeam.length > 0
      ? cmsTeam.map((member: any) => ({
          name: member.name,
          designation: member.designation,
          qualifications: member.qualification || "",
          specialisationOrMembership: member.membershipNumber
            ? `ICAI Membership No: ${member.membershipNumber}`
            : "",
          bio: member.experienceSummary || "",
          profileImage: member.profileImage,
          initials: member.name
            ? member.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()
            : "CP",
        }))
      : team.map((member) => ({
          name: member.name,
          designation: member.designation,
          qualifications: member.qualifications,
          specialisationOrMembership: member.specialisation,
          bio: member.bio,
          profileImage: null,
          initials: member.initials,
        }));

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 pt-32 pb-20" aria-labelledby="about-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel light />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              id="about-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mt-2 mb-5 max-w-3xl"
            >
              About CPALS & Co
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl">
              A professional Chartered Accountant firm founded on the principles
              of integrity, transparency, and professional excellence.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Firm Overview */}
      <section className="py-20 bg-white" aria-labelledby="overview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <FadeIn>
                <SectionLabel>Our Story</SectionLabel>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2
                  id="overview-heading"
                  className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6"
                >
                  Firm Overview
                </h2>
              </FadeIn>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <FadeIn delay={0.15}>
                  <p>
                    CPALS & Co. is a firm of Chartered Accountants committed to
                    delivering high-quality professional services in the areas of
                    accounting, taxation, audit, compliance and financial advisory.
                    Our practice is established on a commitment to professional
                    excellence and the ethical standards set by the Institute of
                    Chartered Accountants of India.
                  </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p>
                    We work closely with businesses, entrepreneurs and
                    professionals to help them navigate financial complexities,
                    ensure regulatory compliance and achieve sustainable growth.
                    With a client-focused approach and strong professional ethics,
                    we strive to provide practical, timely, and value-driven
                    solutions tailored to the unique requirements of each client.
                  </p>
                </FadeIn>
                <FadeIn delay={0.25}>
                  <p>
                    Our objective is not only to address compliance needs but
                    also to serve as a trusted advisor in supporting informed
                    business decisions.
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "8", label: "Service Areas", sub: "Professional services" },
                { value: "10+", label: "Industries", sub: "Sector coverage" },
                { value: "ICAI", label: "Registered Firm", sub: "Member of ICAI" },
                { value: "CA", label: "Qualified Team", sub: "FCA & ACA members" },
              ].map((stat) => (
                <FadeIn key={stat.label} direction="up" delay={0.1}>
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                    <p className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</p>
                    <p className="font-semibold text-slate-900 text-sm mb-0.5">{stat.label}</p>
                    <p className="text-slate-400 text-xs">{stat.sub}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50" aria-labelledby="vision-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn direction="left">
              <div className="h-full p-8 lg:p-10 bg-blue-600 rounded-3xl text-white">
                <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mb-5" aria-hidden="true">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <h2 id="vision-heading" className="text-2xl font-bold mb-3">Our Vision</h2>
                <p className="text-blue-100 leading-relaxed">
                  To be a trusted professional services firm committed to
                  technical excellence, ethical conduct, and adherence to the
                  professional standards prescribed by the Institute of
                  Chartered Accountants of India.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="h-full p-8 lg:p-10 bg-slate-900 rounded-3xl text-white">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-5" aria-hidden="true">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
                <p className="text-slate-400 leading-relaxed">
                  To deliver comprehensive, high-quality professional services
                  that empower businesses to navigate complex financial and
                  regulatory environments, while upholding the highest
                  standards of integrity and professional ethics.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <FadeIn>
              <SectionLabel>What Guides Us</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                id="values-heading"
                className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
              >
                Our Core Values
              </h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={0.08 * i}>
                <div className="p-6 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-md transition-all duration-300">
                  <div className="text-3xl mb-4" role="img" aria-label={value.title}>
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-slate-50" aria-labelledby="about-leadership-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <FadeIn>
              <SectionLabel>Our People</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                id="about-leadership-heading"
                className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
              >
                Leadership Team
              </h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {displayTeam.map((member: { name: string; designation: string; qualifications: string; specialisationOrMembership: string; bio: unknown; profileImage: unknown; initials: string }, i: number) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-white rounded-2xl border border-slate-100 p-7 text-center">
                  {member.profileImage ? (
                    <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-4 border border-slate-100 flex items-center justify-center shrink-0">
                      <Image
                        src={urlFor(member.profileImage).width(80).height(80).url()}
                        alt={member.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-2xl">{member.initials}</span>
                    </div>
                  )}
                  <h3 className="font-bold text-slate-900 text-lg leading-tight">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mt-1 mb-1">{member.designation}</p>
                  <p className="text-slate-500 text-xs mb-4">{member.qualifications}</p>
                  <SmartText value={member.bio} />
                  {member.specialisationOrMembership && (
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <p className="text-slate-400 text-xs">{member.specialisationOrMembership}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Approach */}
      <section className="py-20 bg-white" aria-labelledby="approach-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <SectionLabel>How We Work</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                id="approach-heading"
                className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6"
              >
                Our Professional Approach
              </h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
            {[
              { step: "01", title: "Understand", desc: "We start by deeply understanding your business, objectives, and specific requirements." },
              { step: "02", title: "Plan", desc: "A tailored engagement plan is developed, outlining scope, timelines, and resource allocation." },
              { step: "03", title: "Execute", desc: "Work is carried out with technical rigour, using updated knowledge and professional judgement." },
              { step: "04", title: "Deliver", desc: "Clear, actionable deliverables are provided with ongoing support and follow-through." },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={0.1 * i}>
                <div className="relative">
                  {i < 3 && (
                    <div className="hidden md:block absolute top-6 left-full w-full h-px bg-slate-100 z-0" aria-hidden="true" />
                  )}
                  <div className="relative z-10 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="text-4xl font-bold text-blue-600/20 mb-3">{item.step}</div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
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
