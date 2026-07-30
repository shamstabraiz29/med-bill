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
const REMOTE_URL_PATTERN = /^https?:\/\//i;
const NEXT_STATIC_MEDIA_PATTERN = /^\/_next\/static\/media\//;

/** Bundled images — pass these or a `/filename.png` path to AppImage */
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

export {
  clearinghouseNurseHero,
  consultantsLaptop,
  doctorHero,
  doctorsTeam,
  drNicole,
  faqDoctor,
  fusionediDashboard,
  gennayaMatt,
  juliaWill,
  medicalBillingSoftwareDashboard,
  mikeLan,
  pmsBillingRcmCycle,
  pmsClaimMoreWorryLess,
  pmsConnectCareCure,
  pmsScoreBillingRcmWins,
  pmsSpecialtyDashboard,
  rcmCardAudit,
  rcmCardBilling,
  rcmCardCoding,
  rcmDashboardLaptop1,
  rcmDashboardLaptop2,
  rcmDoctorImportance,
  usMap,
};

function isLikelyImageFieldKey(key: string): boolean {
  return (
    /image|avatar|photo|thumbnail|picture|poster|banner/i.test(key) &&
    !/Alt|alt|Label|label|Caption|caption|Title|title|Name|name|Text|text|Href|href/i.test(key)
  );
}

function isRemoteUrl(src: string): boolean {
  return (
    REMOTE_URL_PATTERN.test(src) ||
    src.startsWith("//") ||
    src.startsWith("data:") ||
    src.startsWith("blob:")
  );
}

function normalizeLocalPath(src: string): string | undefined {
  const trimmed = src.trim();
  if (!trimmed) {
    return undefined;
  }

  if (LOCALHOST_PATTERN.test(trimmed)) {
    try {
      const url = new URL(trimmed);
      return url.pathname + url.search || undefined;
    } catch {
      return undefined;
    }
  }

  if (trimmed.startsWith("//")) {
    return `https:${trimmed}`;
  }

  if (isRemoteUrl(trimmed)) {
    return trimmed;
  }

  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

function getFilename(path: string): string {
  return path.split("/").pop() || path;
}

function lookupStaticImage(path: string): StaticImageData | undefined {
  const normalized = normalizeLocalPath(path);
  if (!normalized || isRemoteUrl(normalized)) {
    return undefined;
  }

  if (staticImages[normalized]) {
    return staticImages[normalized];
  }

  const filename = getFilename(normalized);
  const byFilename = staticImages[`/${filename}`];
  if (byFilename) {
    return byFilename;
  }

  // Recover from previously-sanitized `/_next/static/media/<name>.<hash>.png` strings
  if (NEXT_STATIC_MEDIA_PATTERN.test(normalized)) {
    const mediaFile = getFilename(normalized);
    const baseName = mediaFile.replace(/\.[a-f0-9]{8,}\.(png|jpe?g|webp|gif)$/i, ".$1");
    return staticImages[`/${baseName}`];
  }

  return undefined;
}

export function isKnownLocalImage(path: string | null | undefined): boolean {
  return typeof path === "string" && Boolean(lookupStaticImage(path));
}

/**
 * Returns a URL string for <img> or CSS. Prefer AppImage for local assets.
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

  return normalized;
}

/**
 * Returns StaticImageData for known local assets (same as DoctorsTeamSection).
 * Remote URLs are returned as plain strings.
 */
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

  if (isRemoteUrl(normalized)) {
    return normalized;
  }

  return undefined;
}

export function sanitizeImageSources<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((item) => sanitizeImageSources(item)) as T;
  }

  if (value && typeof value === "object") {
    const record = { ...(value as Record<string, unknown>) };

    for (const [key, nestedValue] of Object.entries(record)) {
      if (typeof nestedValue === "string" && isLikelyImageFieldKey(key)) {
        const normalized = normalizeLocalPath(nestedValue);

        if (!normalized) {
          delete record[key];
          continue;
        }

        // Keep canonical `/file.png` paths — AppImage resolves to StaticImageData at render.
        // Drop unknown local CMS paths so component fallbacks (e.g. `/doctor-hero.png`) apply.
        if (isRemoteUrl(normalized) || lookupStaticImage(normalized)) {
          const canonical = getCanonicalPath(normalized);
          record[key] = canonical ?? normalized;
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

function getCanonicalPath(path: string): string | undefined {
  const normalized = normalizeLocalPath(path);
  if (!normalized) {
    return undefined;
  }

  if (staticImages[normalized]) {
    return normalized;
  }

  const filename = getFilename(normalized);
  const canonical = `/${filename}`;
  if (staticImages[canonical]) {
    return canonical;
  }

  return undefined;
}
