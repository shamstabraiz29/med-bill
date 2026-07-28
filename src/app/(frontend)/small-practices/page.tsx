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
import { getSmallPracticesData } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Medical Billing Services for Small Practices | BellMedEx",
  description:
    "BellMedEx medical billing services for small practices transform patient encounters into clean, payer-ready claims with 98% clean claim rates and dedicated RCM support.",
};

export default async function SmallPracticesPage() {
  const data = await getSmallPracticesData();

  return (
    <div className="relative min-h-screen">
      <SmallPracticesHero data={data.hero} />
      <SmallPracticesCollaborateSection data={data.collaborate} />
      <SmallPracticesAffordableBillingSection data={data.affordableBilling} />
      <SmallPracticesSpecialtyFormSection data={data.specialtyForm} />
      <SmallPracticesRevenueLossSection data={data.revenueLoss} />
      <SmallPracticesBillingProcessSection data={data.billingProcess} />
      <SmallPracticesEaseBillingSection data={data.easeBilling} />
      <SmallPracticesTransparencySection data={data.transparency} />
      <SmallPracticesPartnerCtaSection data={data.partnerCta} />
    </div>
  );
}
