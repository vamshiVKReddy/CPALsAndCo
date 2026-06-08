import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy of CPALS & Co.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm mb-10">Last updated: June 2026</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">1. Introduction</h2>
              <p>
                LS & Company (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting the privacy
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
                <li>Name, email address, phone number, and organisation name when you submit an enquiry</li>
                <li>Information you voluntarily provide in correspondence with us</li>
                <li>Technical information such as IP address and browser type for website analytics</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">3. How We Use Your Information</h2>
              <p>Information collected is used solely to:</p>
              <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
                <li>Respond to your enquiries and provide requested services</li>
                <li>Comply with legal and professional obligations</li>
                <li>Improve our website and service quality</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">4. Confidentiality</h2>
              <p>
                As a Chartered Accountant firm, we are bound by the ICAI Code of Ethics to maintain strict confidentiality of all client information. We do not sell, rent, or share personal information with third parties except where required by law or with your explicit consent.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">5. Contact</h2>
              <p>
                For any privacy-related queries, please contact us at{" "}
                <a href="mailto:ca@cpalsandco.com" className="text-blue-600 hover:underline">
                  ca@cpalsandco.com
                </a>
                .
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
