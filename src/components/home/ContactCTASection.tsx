import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export function ContactCTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 px-8 py-16 lg:px-16 lg:py-20 overflow-hidden text-center">
          {/* Background decoration */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative">
            <FadeIn>
              <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-4">
                Get in Touch
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                id="cta-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5"
              >
                Let&apos;s Discuss Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-300">
                  Requirements
                </span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                Our team is ready to understand your needs and provide
                professional guidance tailored to your business.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/30 active:scale-[0.98] text-base"
                >
                  Get In Touch
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+917670804206"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 hover:bg-white/12 border border-white/10 text-white font-semibold rounded-xl transition-all duration-200 text-base"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  Call Us
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
