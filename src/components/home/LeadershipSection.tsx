import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const team = [
  {
    name: "Partner Name",
    designation: "Founding Partner",
    qualifications: "B.Com, FCA",
    specialisation: "Audit & Assurance, Direct Taxation",
    initials: "PN",
  },
  {
    name: "Partner Name",
    designation: "Senior Partner",
    qualifications: "M.Com, FCA, DISA",
    specialisation: "GST, Corporate Compliance",
    initials: "PN",
  },
  {
    name: "Associate Name",
    designation: "Senior Manager",
    qualifications: "B.Com, ACA",
    specialisation: "Business Advisory, Financial Reporting",
    initials: "AN",
  },
];

export function LeadershipSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="leadership-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <FadeIn>
            <SectionLabel>Our People</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              id="leadership-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Leadership Team
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-slate-600 text-lg leading-relaxed">
              Experienced professionals committed to delivering high-quality
              advisory and compliance services.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <FadeIn key={member.name + i} delay={0.1 + i * 0.1}>
              <div className="group text-center">
                {/* Avatar */}
                <div className="relative mx-auto w-24 h-24 mb-5">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {member.initials}
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white" aria-hidden="true" />
                </div>

                <h3 className="font-bold text-slate-900 text-lg leading-tight mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium text-sm mb-1">
                  {member.designation}
                </p>
                <p className="text-slate-500 text-xs mb-3">
                  {member.qualifications}
                </p>
                <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-100 rounded-full px-3 py-1">
                  <span className="text-slate-600 text-xs">{member.specialisation}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="text-center text-slate-400 text-sm mt-10">
            Our team is supported by qualified associates and trained professionals across service lines.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
