import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { FirmIntroSection } from "@/components/home/FirmIntroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { LeadershipSection } from "@/components/home/LeadershipSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { ContactCTASection } from "@/components/home/ContactCTASection";

export const metadata: Metadata = {
  title: "CPALS & Co | Chartered Accountants & Advisory",
  description:
    "Professional Chartered Accountancy, Taxation & Advisory Services with a commitment to professionalism, integrity and client confidentiality.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FirmIntroSection />
      <ServicesSection />
      <WhyChooseSection />
      <IndustriesSection />
      <LeadershipSection />
      <InsightsSection />
      <ContactCTASection />
    </>
  );
}
