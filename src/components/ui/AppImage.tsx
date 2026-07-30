"use client";

import NextImage, { type ImageProps, type StaticImageData } from "next/image";
import { pickImageSrc, staticImages } from "@/lib/images";

// Retain all static imports in the client bundle (DoctorsTeamSection pattern)
void staticImages;

type AppImageProps = Omit<ImageProps, "src"> & {
  /** Primary source (CMS path, full URL, `/filename.png`, or Payload Media object) */
  src?: ImageProps["src"] | { url?: string; src?: string } | null;
  /** Used when primary source is missing or invalid */
  fallbackSrc?: string | { url?: string; src?: string } | null;
};

export default function AppImage({
  src,
  fallbackSrc,
  alt = "",
  unoptimized = true,
  ...props
}: AppImageProps) {
  const resolved = pickImageSrc(src, fallbackSrc);

  if (!resolved) {
    return null;
  }

  return (
    <NextImage
      src={resolved}
      alt={alt}
      unoptimized={unoptimized}
      {...props}
    />
  );
}
