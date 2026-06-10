import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const team = [
  {
    initials: "CP",
    name: "CA Partner",
    designation: "Founding Partner",
    qualifications: ["FCA", "B.Com (Hons)"],
    expertise: ["Statutory Audit", "Direct Taxation", "Business Advisory"],
    bio: "Fellow Member of the Institute of Chartered Accountants of India with professional experience in statutory audit, tax advisory and financial consulting.",
    color: "blue",
  },
  {
    initials: "AL",
    name: "CA Partner",
    designation: "Senior Partner",
    qualifications: ["FCA", "M.Com", "DISA (ICAI)"],
    expertise: ["GST & Indirect Tax", "Corporate Compliance", "LLP Advisory"],
    bio: "Fellow Member of ICAI with professional experience in GST advisory, indirect taxation and corporate law compliance.",
    color: "slate",
  },
];

export function LeadershipSection() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="leadership-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <SectionLabel>Our People</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2
              id="leadership-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4 mt-1"
            >
              Leadership Team
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-slate-500 text-lg leading-relaxed">
              Experienced Chartered Accountants committed to delivering
              professional excellence in every engagement.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member, i) => (
            <FadeIn key={i} delay={0.08 + i * 0.08}>
              <div className="group relative bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-900/8 transition-all duration-300 overflow-hidden">
                {/* Top color strip */}
                <div
                  className={`h-1.5 ${
                    member.color === "blue" ? "bg-gradient-to-r from-blue-500 to-blue-600" : "bg-gradient-to-r from-slate-700 to-slate-800"
                  }`}
                  aria-hidden="true"
                />

                <div className="p-7">
                  {/* Avatar + name */}
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 font-bold text-xl text-white ${
                        member.color === "blue"
                          ? "bg-gradient-to-br from-blue-500 to-blue-700"
                          : "bg-gradient-to-br from-slate-700 to-slate-900"
                      }`}
                    >
                      {member.initials}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-slate-900 text-base leading-tight">{member.name}</h3>
                      <p className={`font-semibold text-sm mt-0.5 ${member.color === "blue" ? "text-blue-600" : "text-slate-600"}`}>
                        {member.designation}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {member.qualifications.map((q) => (
                          <span
                            key={q}
                            className="inline-flex items-center px-2 py-0.5 bg-slate-100 text-slate-600 text-[11px] font-semibold rounded-md"
                          >
                            {q}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{member.bio}</p>

                  {/* Expertise tags */}
                  <div className="pt-5 border-t border-slate-100">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2.5">Areas of Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                            member.color === "blue"
                              ? "bg-blue-50 text-blue-700 border-blue-100"
                              : "bg-slate-50 text-slate-700 border-slate-200"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="text-center text-slate-400 text-sm mt-10">
            Supported by a team of qualified associates, article assistants and trained professionals across all service lines.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
