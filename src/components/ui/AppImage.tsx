"use client";

import NextImage, { type ImageProps, type StaticImageData } from "next/image";
import { pickImageSrc, resolveImageData, staticImages } from "@/lib/images";

// Retain all static imports in the client bundle (DoctorsTeamSection pattern)
void staticImages;

type AppImageProps = Omit<ImageProps, "src"> & {
  /** Primary source (CMS path, full URL, or `/filename.png`) */
  src?: ImageProps["src"] | null;
  /** Used when primary source is missing or invalid (same pattern as DoctorsTeamSection hardcoded paths) */
  fallbackSrc?: string | null;
};

function isStaticImageData(value: AppImageProps["src"]): value is StaticImageData {
  return typeof value === "object" && value !== null && "src" in value;
}

export default function AppImage({
  src,
  fallbackSrc,
  alt = "",
  unoptimized,
  ...props
}: AppImageProps) {
  let resolved: StaticImageData | string | undefined;

  if (isStaticImageData(src)) {
    resolved = src;
  } else if (typeof src === "string") {
    resolved = pickImageSrc(src, fallbackSrc ?? undefined);
  } else if (typeof fallbackSrc === "string") {
    resolved = resolveImageData(fallbackSrc);
  }

  if (!resolved) {
    return null;
  }

  // Local `/filename.png` paths must resolve to bundled StaticImageData — never raw public URLs
  if (
    typeof resolved === "string" &&
    resolved.startsWith("/") &&
    !resolved.startsWith("//")
  ) {
    const bundled = resolveImageData(resolved);
    if (bundled && typeof bundled !== "string") {
      resolved = bundled;
    }
  }

  const isRemoteString = typeof resolved === "string";

  return (
    <NextImage
      src={resolved}
      alt={alt}
      unoptimized={unoptimized ?? isRemoteString}
      {...props}
    />
  );
}
