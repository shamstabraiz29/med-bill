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

const REMOTE_URL_PATTERN = /^https?:\/\//i;
const NEXT_STATIC_MEDIA_PATTERN = /^\/_next\/static\/media\//;

/** Bundled images — pass `/filename.png` to AppImage (same as DoctorsTeamSection) */
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
    /image|avatar|photo|thumbnail|picture|poster|banner|logo|url/i.test(key) &&
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

function getFilename(path: string): string {
  return path.split("/").pop()?.split("?")[0] || path;
}

/** Collect path candidates for static image matching */
function collectPathCandidates(src: string): string[] {
  const trimmed = src.trim();
  if (!trimmed) {
    return [];
  }

  const candidates = new Set<string>();

  const add = (value?: string) => {
    if (!value) return;
    candidates.add(value);
    if (!value.startsWith("/")) {
      candidates.add(`/${value}`);
    }
  };

  add(trimmed);

  if (isRemoteUrl(trimmed)) {
    try {
      const url = new URL(trimmed.startsWith("//") ? `https:${trimmed}` : trimmed);
      add(url.pathname);
      add(`/${getFilename(url.pathname)}`);
    } catch {
      // ignore invalid URLs
    }
  } else {
    add(trimmed.startsWith("/") ? trimmed : `/${trimmed}`);
    add(`/${getFilename(trimmed)}`);
  }

  if (NEXT_STATIC_MEDIA_PATTERN.test(trimmed)) {
    const mediaFile = getFilename(trimmed);
    const baseName = mediaFile.replace(/\.[a-f0-9]{8,}\.(png|jpe?g|webp|gif)$/i, ".$1");
    add(`/${baseName}`);
  }

  return [...candidates];
}

function lookupStaticImage(src: string): StaticImageData | undefined {
  for (const candidate of collectPathCandidates(src)) {
    if (staticImages[candidate]) {
      return staticImages[candidate];
    }

    const byFilename = staticImages[`/${getFilename(candidate)}`];
    if (byFilename) {
      return byFilename;
    }
  }

  return undefined;
}

function getCanonicalPath(src: string): string | undefined {
  const match = lookupStaticImage(src);
  if (!match) {
    return undefined;
  }

  for (const [path, image] of Object.entries(staticImages)) {
    if (image === match) {
      return path;
    }
  }

  return undefined;
}

export function isKnownLocalImage(path: string | null | undefined): boolean {
  return typeof path === "string" && Boolean(lookupStaticImage(path));
}

/**
 * Pick the first valid image source from a list (CMS value + hardcoded fallbacks).
 */
export function pickImageSrc(
  ...candidates: Array<unknown>
): StaticImageData | string | undefined {
  for (const candidate of candidates) {
    const resolved = resolveImageData(candidate);
    if (resolved) {
      return resolved;
    }
  }

  return undefined;
}

/** URL string for plain <img> tags */
export function resolveImageSrc(src: unknown): string | undefined {
  const resolved = resolveImageData(src);
  if (!resolved) {
    return undefined;
  }

  return typeof resolved === "string" ? resolved : resolved.src;
}

const LOCALHOST_PATTERN = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?/i;
const REMOTE_HTTPS_PATTERN = /^https?:\/\//i;

/**
 * Returns StaticImageData for bundled local assets (DoctorsTeamSection pattern).
 * Resolves relative public assets, CMS media objects, and remote URLs (Vercel, S3, Blob, Unsplash, etc.)
 */
export function resolveImageData(
  src: unknown,
): StaticImageData | string | undefined {
  if (!src) {
    return undefined;
  }

  // Handle StaticImageData directly (Next.js imported object: { src: '/_next/static/...', height: ..., width: ... })
  if (
    typeof src === "object" &&
    src !== null &&
    "src" in src &&
    typeof (src as { src: unknown }).src !== "string"
  ) {
    return src as StaticImageData;
  }

  let strSrc: string | undefined;

  if (typeof src === "string") {
    strSrc = src;
  } else if (typeof src === "object" && src !== null) {
    if ("url" in src && typeof (src as { url: unknown }).url === "string") {
      strSrc = (src as { url: string }).url;
    } else if ("src" in src && typeof (src as { src: unknown }).src === "string") {
      strSrc = (src as { src: string }).src;
    }
  }

  if (!strSrc) {
    return undefined;
  }

  const trimmed = strSrc.trim();
  if (!trimmed) {
    return undefined;
  }

  // 1. Try matching against bundled static imports (e.g. /doctor-hero.png or http://localhost:3000/doctor-hero.png)
  const staticImage = lookupStaticImage(trimmed);
  if (staticImage) {
    return staticImage;
  }

  // 2. Reject localhost / 127.0.0.1 URLs if they did not match a bundled static image
  if (LOCALHOST_PATTERN.test(trimmed)) {
    return undefined;
  }

  // 3. Reject unbundled local `/uploads/` paths that do not exist on Vercel deployment
  if (trimmed.startsWith("/uploads/") || trimmed.includes("/uploads/")) {
    return undefined;
  }

  // 4. Allow valid relative public paths (e.g. /custom-public-asset.png)
  if (trimmed.startsWith("/") && !trimmed.startsWith("//")) {
    return trimmed;
  }

  // 5. Allow valid remote HTTPS URLs (e.g. https://images.unsplash.com/..., https://blob..., etc.)
  if (
    REMOTE_HTTPS_PATTERN.test(trimmed) ||
    trimmed.startsWith("//") ||
    trimmed.startsWith("data:") ||
    trimmed.startsWith("blob:")
  ) {
    return trimmed.startsWith("//") ? `https:${trimmed}` : trimmed;
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
      if (isLikelyImageFieldKey(key)) {
        if (!nestedValue) {
          delete record[key];
          continue;
        }

        const resolved = resolveImageData(nestedValue);
        if (resolved) {
          if (typeof resolved === "string") {
            record[key] = resolved;
          } else if (typeof nestedValue === "string") {
            record[key] = getCanonicalPath(nestedValue) ?? resolved.src;
          }
          continue;
        }

        // Broken or empty media URL — drop so component fallback applies
        delete record[key];
        continue;
      }

      record[key] = sanitizeImageSources(nestedValue);
    }

    return record as T;
  }

  return value;
}
