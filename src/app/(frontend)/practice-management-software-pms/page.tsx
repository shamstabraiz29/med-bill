import type { Metadata } from "next";
import {
  PracticeManagementSoftwarePmsAbout,
  PracticeManagementSoftwarePmsBalance,
  PracticeManagementSoftwarePmsFeatures,
  PracticeManagementSoftwarePmsFaq,
  PracticeManagementSoftwarePmsGetStartedCta,
  PracticeManagementSoftwarePmsHero,
  PracticeManagementSoftwarePmsHighlights,
  PracticeManagementSoftwarePmsManage,
  PracticeManagementSoftwarePmsSpecialtyCta,
  PracticeManagementSoftwarePmsTelemedicineRcm,
  PmsSubNav,
} from "@/components/practice-management-software-pms";
import { getPracticeManagementSoftwarePmsData } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Practice Management Software (PMS) | BellMedEx",
  description:
    "Free medical practice management software that merges EHR, billing, and clinic management. Simplify your practice and amplify results with BellMedEx PMS.",
};

export default async function PracticeManagementSoftwarePmsPage() {
  const data = await getPracticeManagementSoftwarePmsData();

  return (
    <div className="relative min-h-screen">
      <PracticeManagementSoftwarePmsHero data={data.hero} />
      <PmsSubNav />
      <PracticeManagementSoftwarePmsAbout data={data.about} />
      <PracticeManagementSoftwarePmsBalance data={data.balance} />
      <PracticeManagementSoftwarePmsFeatures data={data.features} />
      <PracticeManagementSoftwarePmsManage data={data.manage} />
      <PracticeManagementSoftwarePmsTelemedicineRcm data={data.telemedicineRcm} />
      <PracticeManagementSoftwarePmsSpecialtyCta data={data.specialtyCta} />
      <PracticeManagementSoftwarePmsHighlights data={data.highlights} />
      <PracticeManagementSoftwarePmsFaq data={data.faq} />
      <PracticeManagementSoftwarePmsGetStartedCta data={data.getStartedCta} />
    </div>
  );
}
