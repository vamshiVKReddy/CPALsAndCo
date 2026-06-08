import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the LS & Company website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-2">
            Terms of Use
          </h1>
          <p className="text-slate-500 text-sm mb-10">Last updated: June 2026</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">2. Use of Website</h2>
              <p>
                This website is provided for informational purposes only. You may use this website for lawful purposes only and in a manner consistent with all applicable laws and regulations.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">3. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of LS & Company and is protected by applicable intellectual property laws. Unauthorised reproduction or use is prohibited.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">4. No Professional Relationship</h2>
              <p>
                Accessing this website or submitting an enquiry does not create a professional advisor-client relationship. A formal engagement agreement must be entered into before any professional relationship is established.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">5. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
