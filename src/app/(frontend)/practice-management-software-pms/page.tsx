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

export const metadata: Metadata = {
  title: "Practice Management Software (PMS) | BellMedEx",
  description:
    "Free medical practice management software that merges EHR, billing, and clinic management. Simplify your practice and amplify results with BellMedEx PMS.",
};

export default function PracticeManagementSoftwarePmsPage() {
  return (
    <div className="relative min-h-screen">
      <PracticeManagementSoftwarePmsHero />
      <PmsSubNav />
      <PracticeManagementSoftwarePmsAbout />
      <PracticeManagementSoftwarePmsBalance />
      <PracticeManagementSoftwarePmsFeatures />
      <PracticeManagementSoftwarePmsManage />
      <PracticeManagementSoftwarePmsTelemedicineRcm />
      <PracticeManagementSoftwarePmsSpecialtyCta />
      <PracticeManagementSoftwarePmsHighlights />
      <PracticeManagementSoftwarePmsFaq />
      <PracticeManagementSoftwarePmsGetStartedCta />
    </div>
  );
}
