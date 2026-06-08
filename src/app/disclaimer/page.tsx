import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Website disclaimer of LS & Company.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-2">
            Disclaimer
          </h1>
          <p className="text-slate-500 text-sm mb-10">Last updated: June 2026</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
            <p>
              The information provided on this website is for general informational purposes only. While we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
            </p>
            <p>
              Nothing on this website constitutes professional advice. The content is not a substitute for professional chartered accountancy, taxation, legal, or financial advice. You should not act or refrain from acting based on any content on this website without seeking appropriate professional advice from a qualified professional who can assess your specific circumstances.
            </p>
            <p>
              As per the guidelines of the Bar Council of India and the Institute of Chartered Accountants of India, professionals are not permitted to solicit work or advertise. By accessing this website, you acknowledge that you are seeking information about LS & Company on your own accord, and that there has been no form of solicitation, advertisement, or inducement by LS & Company or its members.
            </p>
            <p>
              LS & Company shall not be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from use of or reliance on the information on this website.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
