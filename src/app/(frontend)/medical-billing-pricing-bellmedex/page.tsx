import type { Metadata } from "next";
import PricingHero from "@/components/medical-billing-pricing/PricingHero";
import PricingUnlockForm from "@/components/medical-billing-pricing/PricingUnlockForm";
import { getMedicalBillingPricingData } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Medical Billing Pricing | BellMedEx Healthcare RCM Rates",
  description:
    "Unlock BellMedEx medical billing pricing and rates starting as low as 2.49%. Fill in your practice details to get instant access to custom fee schedules.",
};

export default async function MedicalBillingPricingPage() {
  const data = await getMedicalBillingPricingData();

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <PricingHero data={data.hero} />
      <PricingUnlockForm data={data.unlockForm} />
    </div>
  );
}
