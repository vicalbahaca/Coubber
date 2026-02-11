import type { Metadata } from "next";

import { CustomerProofSection } from "@/app/components/sections/home/CustomerProofSection";
import { FinalCTASection } from "@/app/components/sections/home/FinalCTASection";
import { HeroSection } from "@/app/components/sections/home/HeroSection";
import { HowItWorksSection } from "@/app/components/sections/home/HowItWorksSection";
import { IntegrationsSection } from "@/app/components/sections/home/IntegrationsSection";
import { PlatformAdvantagesSection } from "@/app/components/sections/home/PlatformAdvantagesSection";
import { PricingPreviewSection } from "@/app/components/sections/home/PricingPreviewSection";
import { ProblemFramingSection } from "@/app/components/sections/home/ProblemFramingSection";
import { ReportsSection } from "@/app/components/sections/home/ReportsSection";
import { TrustLayerSection } from "@/app/components/sections/home/TrustLayerSection";
import { UseCasesByRoleSection } from "@/app/components/sections/home/UseCasesByRoleSection";

export const metadata: Metadata = {
  title: "Coubber - AI Performance Reports in 30 Seconds",
  description:
    "AI-powered analysis that unifies your athlete data and delivers decision-ready insights for coaches and practitioners.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />
      {/* 2. Trust Layer */}
      <TrustLayerSection />
      {/* 3. Problem Framing */}
      <ProblemFramingSection />
      {/* 4. How It Works */}
      <HowItWorksSection />
      {/* 5. Reports Section */}
      <ReportsSection />
      {/* 6. Integrations Section */}
      <IntegrationsSection />
      {/* 7. Use Cases by Role */}
      <UseCasesByRoleSection />
      {/* 8. Platform Advantages */}
      <PlatformAdvantagesSection />
      {/* 9. Customer Proof */}
      <CustomerProofSection />
      {/* 10. Pricing Preview */}
      <PricingPreviewSection />
      {/* 11. Final CTA Section */}
      <FinalCTASection />
      {/* 12. Footer is in the marketing layout */}
    </>
  );
}
