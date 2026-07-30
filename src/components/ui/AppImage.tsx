"use client";

import NextImage, { type ImageProps } from "next/image";
import { resolveImageData } from "@/lib/images";

type AppImageProps = Omit<ImageProps, "src"> & {
  src?: ImageProps["src"] | null;
};

export default function AppImage({ src, alt, ...props }: AppImageProps) {
  const resolvedSrc = typeof src === "string" ? resolveImageData(src) : src;

  if (!resolvedSrc) {
    return null;
  }

  return <NextImage src={resolvedSrc} alt={alt} {...props} />;
}
