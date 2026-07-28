import type { Metadata } from "next";
import {
  LargePracticesAddOnServices,
  LargePracticesAuditMetricsSection,
  LargePracticesBillingFlowchart,
  LargePracticesBillingInfrastructure,
  LargePracticesCommonGoals,
  LargePracticesHero,
  LargePracticesKpisSection,
  LargePracticesPersonalizedServices,
  LargePracticesWorkProcessSection,
} from "@/components/large-practices";

export const metadata: Metadata = {
  title: "Large Practice Billing Services | BellMedEx",
  description:
    "BellMedEx billing services for large practices help reduce claim denials by 97%, mitigate lost revenue, and save up to 30-60% on annual payroll. Available in all 50 states.",
};

export default function LargePracticesPage() {
  return (
    <div className="relative min-h-screen">
      <LargePracticesHero />
      <LargePracticesCommonGoals />
      <LargePracticesBillingInfrastructure />
      <LargePracticesKpisSection />
      <LargePracticesAuditMetricsSection />
      <LargePracticesPersonalizedServices />
      <LargePracticesBillingFlowchart />
      <LargePracticesWorkProcessSection />
      <LargePracticesAddOnServices />
    </div>
  );
}
