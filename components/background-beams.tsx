"use client"

import React, { useId } from "react"

import { cn } from "@/lib/utils"

export interface BackgroundBeamsProps {
  className?: string
}

/**
 * Lightweight animated beams for the VXStudio hero.
 *
 * Performance notes:
 * - Keep the animated paths count low. SVG path drawing is expensive when repeated many times.
 * - Avoid CSS filters/drop-shadow on every path. Glow is handled by soft gradients instead.
 * - Mobile and reduced-motion users receive a static version.
 */
const staticPathData = [
  "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
  "M-336 -237C-336 -237 -268 168 196 295C660 422 728 827 728 827",
  "M-292 -285C-292 -285 -224 120 240 247C704 374 772 779 772 779",
  "M-248 -333C-248 -333 -180 72 284 199C748 326 816 731 816 731",
  "M-204 -381C-204 -381 -136 24 328 151C792 278 860 683 860 683",
  "M-160 -429C-160 -429 -92 -24 372 103C836 230 904 635 904 635",
  "M-116 -477C-116 -477 -48 -72 416 55C880 182 948 587 948 587",
  "M-72 -525C-72 -525 -4 -120 460 7C924 134 992 539 992 539",
]

const animatedPathData = [
  staticPathData[1],
  staticPathData[3],
  staticPathData[5],
  staticPathData[7],
]

const animations = animatedPathData.map((_, index) => ({
  duration: `${11 + index * 1.5}s`,
  delay: `${index * 1.2}s`,
}))

export const BackgroundBeams = React.memo(({ className }: BackgroundBeamsProps) => {
  const gradientPrefix = useId().replaceAll(":", "")

  return (
    <div className={cn("vx-background-beams pointer-events-none absolute inset-0 h-full w-full", className)}>
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 696 316"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="vx-background-beams-static">
          {staticPathData.map((d, index) => (
            <path key={`static-${index}`} d={d} strokeLinecap="round" strokeWidth="0.55" />
          ))}
        </g>

        {animatedPathData.map((d, index) => (
          <path
            key={`beam-${index}`}
            className="vx-background-beam-path"
            d={d}
            pathLength={1}
            stroke={`url(#${gradientPrefix}-gradient-${index})`}
            strokeLinecap="round"
            strokeWidth="1"
            style={
              {
                "--beam-delay": animations[index].delay,
                "--beam-duration": animations[index].duration,
              } as React.CSSProperties
            }
          />
        ))}

        <defs>
          {animatedPathData.map((_, index) => (
            <linearGradient
              key={`gradient-${index}`}
              id={`${gradientPrefix}-gradient-${index}`}
              x1="0%"
              x2="100%"
              y1="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
              <stop offset="24%" stopColor="var(--primary)" stopOpacity="0.72" />
              <stop offset="52%" stopColor="var(--vx-amber)" stopOpacity="0.9" />
              <stop offset="78%" stopColor="var(--chart-2)" stopOpacity="0.68" />
              <stop offset="100%" stopColor="var(--chart-3)" stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  )
})

BackgroundBeams.displayName = "BackgroundBeams"
