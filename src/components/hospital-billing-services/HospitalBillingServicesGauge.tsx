"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface HospitalBillingServicesGaugeProps {
  percent: number;
  className?: string;
}

const TICK_COUNT = 36;
const START_ANGLE = 135;
const SWEEP = 270;

function polarToCartesian(cx: number, cy: number, radius: number, angleDeg: number) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(angleRad),
    y: cy + radius * Math.sin(angleRad),
  };
}

export default function HospitalBillingServicesGauge({
  percent,
  className,
}: HospitalBillingServicesGaugeProps) {
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !started) {
          started = true;
          const duration = 1400;
          const startTime = performance.now();

          function update(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = progress === 1 ? 1 : 1 - 2 ** (-10 * progress);
            setAnimatedPercent(percent * easeProgress);

            if (progress < 1) {
              requestAnimationFrame(update);
            }
          }

          requestAnimationFrame(update);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [percent]);

  const cx = 60;
  const cy = 60;
  const radius = 42;
  const needleAngle = START_ANGLE + (animatedPercent / 100) * SWEEP;
  const needleTip = polarToCartesian(cx, cy, radius - 8, needleAngle);
  const needleBaseLeft = polarToCartesian(cx, cy, 6, needleAngle - 90);
  const needleBaseRight = polarToCartesian(cx, cy, 6, needleAngle + 90);

  return (
    <svg
      ref={ref}
      viewBox="0 0 120 120"
      className={cn("h-24 w-24 sm:h-28 sm:w-28", className)}
      aria-hidden="true"
    >
      {Array.from({ length: TICK_COUNT }).map((_, index) => {
        const tickPercent = (index / (TICK_COUNT - 1)) * 100;
        const angle = START_ANGLE + (index / (TICK_COUNT - 1)) * SWEEP;
        const inner = polarToCartesian(cx, cy, radius - 5, angle);
        const outer = polarToCartesian(cx, cy, radius + 2, angle);
        const isActive = tickPercent <= animatedPercent;

        return (
          <line
            key={index}
            x1={inner.x}
            y1={inner.y}
            x2={outer.x}
            y2={outer.y}
            stroke={isActive ? "#1D4ED8" : "#CBD5E1"}
            strokeWidth={2}
            strokeLinecap="round"
          />
        );
      })}

      <polygon
        points={`${needleTip.x},${needleTip.y} ${needleBaseLeft.x},${needleBaseLeft.y} ${needleBaseRight.x},${needleBaseRight.y}`}
        fill="#1D4ED8"
      />
      <circle cx={cx} cy={cy} r="5" fill="#1D4ED8" />
    </svg>
  );
}
