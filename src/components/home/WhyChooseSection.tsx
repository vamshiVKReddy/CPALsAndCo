import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const reasons = [
  {
    title: "Professional Excellence",
    description: "Our team upholds the highest standards of professional practice, ensuring quality and accuracy in every engagement.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
    accent: "blue",
  },
  {
    title: "Integrity & Ethics",
    description: "Guided by the ICAI Code of Ethics, we maintain independence, objectivity, and professional scepticism in all our work.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.491Z" />
      </svg>
    ),
    accent: "emerald",
  },
  {
    title: "Confidentiality",
    description: "Client information is handled with the utmost confidentiality. We maintain strict data security and professional secrecy.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    accent: "blue",
  },
  {
    title: "Industry Expertise",
    description: "Depth of knowledge across multiple industries enables us to provide sector-relevant insights and practical solutions.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    accent: "emerald",
  },
  {
    title: "Personalised Service",
    description: "Every client receives dedicated attention. We invest time to understand your business before offering solutions.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    accent: "blue",
  },
  {
    title: "Partner-Led Approach",
    description: "Senior professionals are directly involved in your engagement, ensuring decision-level attention and accountability.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
    accent: "emerald",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="why-choose-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <FadeIn>
            <SectionLabel>Our Commitment</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2
              id="why-choose-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4 mt-1"
            >
              Why Choose CPALS & Co
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our practice is defined by values that put your interests first
              and standards that never compromise on quality.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <FadeIn key={reason.title} delay={0.06 + (i % 3) * 0.06}>
              <div className="group h-full p-7 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-900/6 transition-all duration-300 bg-white">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                    reason.accent === "blue"
                      ? "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                      : "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white"
                  }`}
                  aria-hidden="true"
                >
                  {reason.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2.5">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
