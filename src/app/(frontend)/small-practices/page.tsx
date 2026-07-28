import type { Metadata } from "next";
import {
  SmallPracticesAffordableBillingSection,
  SmallPracticesBillingProcessSection,
  SmallPracticesCollaborateSection,
  SmallPracticesEaseBillingSection,
  SmallPracticesHero,
  SmallPracticesPartnerCtaSection,
  SmallPracticesRevenueLossSection,
  SmallPracticesSpecialtyFormSection,
  SmallPracticesTransparencySection,
} from "@/components/small-practices";

export const metadata: Metadata = {
  title: "Medical Billing Services for Small Practices | BellMedEx",
  description:
    "BellMedEx medical billing services for small practices transform patient encounters into clean, payer-ready claims with 98% clean claim rates and dedicated RCM support.",
};

export default function SmallPracticesPage() {
  return (
    <div className="relative min-h-screen">
      <SmallPracticesHero />
      <SmallPracticesCollaborateSection />
      <SmallPracticesAffordableBillingSection />
      <SmallPracticesSpecialtyFormSection />
      <SmallPracticesRevenueLossSection />
      <SmallPracticesBillingProcessSection />
      <SmallPracticesEaseBillingSection />
      <SmallPracticesTransparencySection />
      <SmallPracticesPartnerCtaSection />
    </div>
  );
}
