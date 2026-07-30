import type { StaticImageData } from "next/image";

import clearinghouseNurseHero from "../../public/clearinghouse-nurse-hero.png";
import consultantsLaptop from "../../public/consultants-laptop.png";
import doctorHero from "../../public/doctor-hero.png";
import doctorsTeam from "../../public/doctors-team.png";
import drNicole from "../../public/dr-nicole.png";
import faqDoctor from "../../public/faq-doctor.png";
import fusionediDashboard from "../../public/fusionedi-dashboard.png";
import gennayaMatt from "../../public/gennaya-matt.png";
import juliaWill from "../../public/julia-will.png";
import medicalBillingSoftwareDashboard from "../../public/medical-billing-software-dashboard.png";
import mikeLan from "../../public/mike-lan.png";
import pmsBillingRcmCycle from "../../public/pms-billing-rcm-cycle.png";
import pmsClaimMoreWorryLess from "../../public/pms-claim-more-worry-less.png";
import pmsConnectCareCure from "../../public/pms-connect-care-cure.png";
import pmsScoreBillingRcmWins from "../../public/pms-score-billing-rcm-wins.png";
import pmsSpecialtyDashboard from "../../public/pms-specialty-dashboard.png";
import rcmCardAudit from "../../public/rcm-card-audit.png";
import rcmCardBilling from "../../public/rcm-card-billing.png";
import rcmCardCoding from "../../public/rcm-card-coding.png";
import rcmDashboardLaptop1 from "../../public/rcm-dashboard-laptop1.png";
import rcmDashboardLaptop2 from "../../public/rcm-dashboard-laptop2.png";
import rcmDoctorImportance from "../../public/rcm-doctor-importance.png";
import usMap from "../../public/us-map.png";

const LOCALHOST_PATTERN = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?/i;

export const staticImages: Record<string, StaticImageData> = {
  "/clearinghouse-nurse-hero.png": clearinghouseNurseHero,
  "/consultants-laptop.png": consultantsLaptop,
  "/doctor-hero.png": doctorHero,
  "/doctors-team.png": doctorsTeam,
  "/dr-nicole.png": drNicole,
  "/faq-doctor.png": faqDoctor,
  "/fusionedi-dashboard.png": fusionediDashboard,
  "/gennaya-matt.png": gennayaMatt,
  "/julia-will.png": juliaWill,
  "/medical-billing-software-dashboard.png": medicalBillingSoftwareDashboard,
  "/mike-lan.png": mikeLan,
  "/pms-billing-rcm-cycle.png": pmsBillingRcmCycle,
  "/pms-claim-more-worry-less.png": pmsClaimMoreWorryLess,
  "/pms-connect-care-cure.png": pmsConnectCareCure,
  "/pms-score-billing-rcm-wins.png": pmsScoreBillingRcmWins,
  "/pms-specialty-dashboard.png": pmsSpecialtyDashboard,
  "/rcm-card-audit.png": rcmCardAudit,
  "/rcm-card-billing.png": rcmCardBilling,
  "/rcm-card-coding.png": rcmCardCoding,
  "/rcm-dashboard-laptop1.png": rcmDashboardLaptop1,
  "/rcm-dashboard-laptop2.png": rcmDashboardLaptop2,
  "/rcm-doctor-importance.png": rcmDoctorImportance,
  "/us-map.png": usMap,
};

const imageLoaders: Record<string, () => Promise<{ default: StaticImageData }>> = {
  "/clearinghouse-nurse-hero.png": () => import("../../public/clearinghouse-nurse-hero.png"),
  "/consultants-laptop.png": () => import("../../public/consultants-laptop.png"),
  "/doctor-hero.png": () => import("../../public/doctor-hero.png"),
  "/doctors-team.png": () => import("../../public/doctors-team.png"),
  "/dr-nicole.png": () => import("../../public/dr-nicole.png"),
  "/faq-doctor.png": () => import("../../public/faq-doctor.png"),
  "/fusionedi-dashboard.png": () => import("../../public/fusionedi-dashboard.png"),
  "/gennaya-matt.png": () => import("../../public/gennaya-matt.png"),
  "/julia-will.png": () => import("../../public/julia-will.png"),
  "/medical-billing-software-dashboard.png": () =>
    import("../../public/medical-billing-software-dashboard.png"),
  "/mike-lan.png": () => import("../../public/mike-lan.png"),
  "/pms-billing-rcm-cycle.png": () => import("../../public/pms-billing-rcm-cycle.png"),
  "/pms-claim-more-worry-less.png": () => import("../../public/pms-claim-more-worry-less.png"),
  "/pms-connect-care-cure.png": () => import("../../public/pms-connect-care-cure.png"),
  "/pms-score-billing-rcm-wins.png": () => import("../../public/pms-score-billing-rcm-wins.png"),
  "/pms-specialty-dashboard.png": () => import("../../public/pms-specialty-dashboard.png"),
  "/rcm-card-audit.png": () => import("../../public/rcm-card-audit.png"),
  "/rcm-card-billing.png": () => import("../../public/rcm-card-billing.png"),
  "/rcm-card-coding.png": () => import("../../public/rcm-card-coding.png"),
  "/rcm-dashboard-laptop1.png": () => import("../../public/rcm-dashboard-laptop1.png"),
  "/rcm-dashboard-laptop2.png": () => import("../../public/rcm-dashboard-laptop2.png"),
  "/rcm-doctor-importance.png": () => import("../../public/rcm-doctor-importance.png"),
  "/us-map.png": () => import("../../public/us-map.png"),
};

function isLikelyImageFieldKey(key: string): boolean {
  return (
    /image|avatar|photo|thumbnail|picture|poster|banner|logo/i.test(key) &&
    !/Alt|alt|Label|label|Caption|caption|Title|title|Name|name|Text|text|Href|href/i.test(key)
  );
}

function normalizeLocalPath(src: string): string {
  const trimmed = src.trim();

  if (LOCALHOST_PATTERN.test(trimmed)) {
    try {
      const url = new URL(trimmed);
      return url.pathname + url.search;
    } catch {
      return trimmed;
    }
  }

  if (trimmed.startsWith("//")) {
    return `https:${trimmed}`;
  }

  if (/^https?:\/\//i.test(trimmed) || trimmed.startsWith("data:") || trimmed.startsWith("blob:")) {
    return trimmed;
  }

  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

function lookupStaticImage(path: string): StaticImageData | undefined {
  return staticImages[path] || staticImages[`/${path.replace(/^\//, "")}`];
}

/**
 * Normalizes CMS / user-provided image paths for production.
 * Known local assets resolve to bundled `/_next/static/media/...` URLs.
 */
export function resolveImageSrc(src: string | null | undefined): string | undefined {
  if (typeof src !== "string") {
    return undefined;
  }

  const normalized = normalizeLocalPath(src);
  if (!normalized) {
    return undefined;
  }

  const staticImage = lookupStaticImage(normalized);
  if (staticImage) {
    return staticImage.src;
  }

  return normalized || undefined;
}

export function resolveImageData(
  src: string | null | undefined,
): StaticImageData | string | undefined {
  if (typeof src !== "string") {
    return undefined;
  }

  const normalized = normalizeLocalPath(src);
  if (!normalized) {
    return undefined;
  }

  const staticImage = lookupStaticImage(normalized);
  if (staticImage) {
    return staticImage;
  }

  return normalized || undefined;
}

export async function loadImageSrc(src: string | null | undefined): Promise<string | undefined> {
  const normalized = typeof src === "string" ? normalizeLocalPath(src) : undefined;
  if (!normalized) {
    return undefined;
  }

  const staticImage = lookupStaticImage(normalized);
  if (staticImage) {
    return staticImage.src;
  }

  const loader = imageLoaders[normalized];
  if (loader) {
    const mod = await loader();
    return mod.default.src;
  }

  return normalized;
}

export function sanitizeImageSources<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((item) => sanitizeImageSources(item)) as T;
  }

  if (value && typeof value === "object") {
    const record = { ...(value as Record<string, unknown>) };

    for (const [key, nestedValue] of Object.entries(record)) {
      if (typeof nestedValue === "string" && isLikelyImageFieldKey(key)) {
        const resolved = resolveImageSrc(nestedValue);
        if (resolved) {
          record[key] = resolved;
        } else {
          delete record[key];
        }
        continue;
      }

      record[key] = sanitizeImageSources(nestedValue);
    }

    return record as T;
  }

  return value;
}
