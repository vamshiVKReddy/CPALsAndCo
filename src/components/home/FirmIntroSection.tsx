import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const highlights = [
  {
    title: "Professionalism",
    description: "We uphold the highest standards of professional conduct in every engagement, ensuring quality and accuracy across all our services.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Confidentiality",
    description: "Client information is handled with strict confidentiality. We maintain professional secrecy as a core obligation of our practice.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    title: "Timely Service",
    description: "We understand that deadlines matter. Our team is committed to delivering work on time, every time, without compromising on quality.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "Diligence",
    description: "Every engagement receives our full attention and careful consideration. We take ownership of our work and see it through to completion.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

export function FirmIntroSection() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="firm-intro-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <FadeIn>
              <SectionLabel>About CPALS & Co</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.06}>
              <h2
                id="firm-intro-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-6 mt-1"
              >
                A Chartered Accountant
                <span className="block text-blue-600">Practice in Hyderabad</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-slate-600 text-lg leading-relaxed mb-5">
                CPALS & Co. is a firm of Chartered Accountants committed to
                delivering high-quality professional services in the areas of
                accounting, taxation, audit, compliance and financial advisory.
              </p>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="text-slate-500 leading-relaxed mb-8">
                We work closely with businesses, entrepreneurs and professionals
                to help them navigate financial complexities, ensure regulatory
                compliance and achieve sustainable growth. Our objective is not
                only to address compliance needs but also to serve as a trusted
                advisor in supporting informed business decisions.
              </p>
            </FadeIn>
            <FadeIn delay={0.18}>
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group text-sm"
              >
                Learn more about our firm
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
              </a>
            </FadeIn>
          </div>

          {/* Right: Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <FadeIn key={item.title} delay={0.1 + i * 0.06} direction="left">
                <div className="flex flex-col gap-3 p-6 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/40 transition-all duration-300 group h-full">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1.5 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
