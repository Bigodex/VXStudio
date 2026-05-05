"use client"

import { useEffect, useRef } from "react"
import type React from "react"
import { cn } from "@/lib/utils"

export interface MatrixBackgroundProps {
  className?: string
  /** Font size in pixels. Lower values increase density. */
  fontSize?: number
  /** Fall speed multiplier. */
  speed?: number
  /** Density multiplier. Higher values create more columns without making text too small. */
  density?: number
  /** Canvas visual opacity. */
  opacity?: number
  /** Primary canvas color. Defaults to VXStudio amber. */
  color?: string
  /** Secondary canvas color used in the trail. */
  secondaryColor?: string
  /** Accent color used on some heads for visual variation. */
  accentColor?: string
  /** Character set to use in the rain. */
  charset?: string
  /** Maximum frames per second. */
  maxFps?: number
}

interface Column {
  x: number
  y: number
  speed: number
  chars: string[]
  length: number
  offset: number
  drift: number
  phase: number
}

interface RgbColor {
  r: number
  g: number
  b: number
}

const DEFAULT_CHARSET = "VXSTUDIO0123456789<>/{}[]()#@$%&+=UIWEBPIXELSEO"
const FALLBACK_PRIMARY: RgbColor = { r: 245, g: 184, b: 46 }
const FALLBACK_SECONDARY: RgbColor = { r: 181, g: 119, b: 0 }
const FALLBACK_ACCENT: RgbColor = { r: 255, g: 196, b: 64 }
const FALLBACK_HEAD: RgbColor = { r: 255, g: 240, b: 190 }

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

const parseColor = (value: string, fallback: RgbColor): RgbColor => {
  const hex = value.trim().match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)

  if (hex) {
    return {
      r: Number.parseInt(hex[1], 16),
      g: Number.parseInt(hex[2], 16),
      b: Number.parseInt(hex[3], 16),
    }
  }

  const rgb = value.trim().match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i)

  if (rgb) {
    return {
      r: Number.parseInt(rgb[1], 10),
      g: Number.parseInt(rgb[2], 10),
      b: Number.parseInt(rgb[3], 10),
    }
  }

  return fallback
}

const rgba = ({ r, g, b }: RgbColor, alpha: number) => `rgba(${r}, ${g}, ${b}, ${alpha})`

const randomChar = (chars: string[]) => chars[Math.floor(Math.random() * chars.length)] ?? "V"

export function MatrixBackground({
  className,
  fontSize = 18,
  speed = 1.12,
  density = 1,
  opacity = 0.42,
  color = "#f5b82e",
  secondaryColor = "#b77900",
  accentColor = "#ffbf00",
  charset = DEFAULT_CHARSET,
  maxFps = 45,
}: MatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current

    if (!canvas || !container) return

    const ctx = canvas.getContext("2d", { alpha: true })

    if (!ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const chars = charset.split("")
    const primary = parseColor(color, FALLBACK_PRIMARY)
    const secondary = parseColor(secondaryColor, FALLBACK_SECONDARY)
    const accent = parseColor(accentColor, FALLBACK_ACCENT)

    let width = 0
    let height = 0
    let animationId = 0
    let lastFrame = 0
    let isVisible = true
    let columns: Column[] = []

    const safeFontSize = clamp(fontSize, 14, 30)
    const safeDensity = clamp(density, 0.7, 1.35)
    const columnGap = safeFontSize * (1.18 / safeDensity)

    const setCanvasSize = () => {
      const rect = container.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 1.35)

      width = Math.max(1, Math.floor(rect.width))
      height = Math.max(1, Math.floor(rect.height))

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const createColumn = (index: number): Column => ({
      x: index * columnGap,
      y: Math.random() * -height,
      speed: (0.72 + Math.random() * 0.9) * speed,
      chars: Array.from({ length: 22 }, () => randomChar(chars)),
      length: 12 + Math.floor(Math.random() * 14),
      offset: Math.floor(Math.random() * chars.length),
      drift: (Math.random() - 0.5) * 0.28,
      phase: Math.random() * Math.PI * 2,
    })

    const rebuildColumns = () => {
      const columnCount = Math.ceil(width / columnGap) + 2
      columns = Array.from({ length: columnCount }, (_, index) => createColumn(index))
    }

    const fillBase = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = "rgba(9, 7, 4, 0.2)"
      ctx.fillRect(0, 0, width, height)
    }

    const resize = () => {
      setCanvasSize()
      rebuildColumns()
      fillBase()
    }

    const drawStaticPreview = () => {
      fillBase()
      ctx.font = `600 ${safeFontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
      ctx.textBaseline = "top"

      for (const column of columns) {
        for (let i = 0; i < Math.min(7, column.length); i += 1) {
          const charY = 18 + i * safeFontSize * 1.05
          ctx.fillStyle = rgba(i === 0 ? FALLBACK_HEAD : primary, i === 0 ? 0.34 : 0.16)
          ctx.fillText(column.chars[(i + column.offset) % column.chars.length] ?? "V", column.x, charY)
        }
      }
    }

    const animate = (timestamp: number) => {
      if (!isVisible) {
        animationId = requestAnimationFrame(animate)
        return
      }

      const frameInterval = 1000 / clamp(maxFps, 24, 60)

      if (timestamp - lastFrame < frameInterval) {
        animationId = requestAnimationFrame(animate)
        return
      }

      const delta = Math.min(2.2, (timestamp - lastFrame) / frameInterval || 1)
      lastFrame = timestamp

      ctx.fillStyle = "rgba(10, 8, 5, 0.078)"
      ctx.fillRect(0, 0, width, height)
      ctx.font = `600 ${safeFontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
      ctx.textBaseline = "top"

      for (const column of columns) {
        column.y += column.speed * safeFontSize * 0.52 * delta

        const waveX = Math.sin(timestamp * 0.0012 + column.phase) * column.drift * safeFontSize

        for (let i = 0; i < column.length; i += 1) {
          const charY = column.y - i * safeFontSize * 1.02

          if (charY < -safeFontSize || charY > height + safeFontSize) continue

          const trailProgress = i / column.length
          const opacityValue =
            i === 0 ? 0.82 : i < 3 ? 0.54 - trailProgress * 0.1 : Math.max(0.06, 0.42 - trailProgress * 0.45)

          const char = column.chars[(i + column.offset) % column.chars.length] ?? "V"
          const headColor = column.offset % 4 === 0 ? accent : FALLBACK_HEAD
          const bodyColor = i < 5 ? primary : secondary

          ctx.fillStyle = rgba(i === 0 ? headColor : bodyColor, opacityValue)
          ctx.fillText(char, column.x + waveX, charY)

          if (i === 0 && Math.random() < 0.18) {
            column.offset = (column.offset + 1) % chars.length
          }
        }

        if (Math.random() < 0.028) {
          const index = Math.floor(Math.random() * column.chars.length)
          column.chars[index] = randomChar(chars)
        }

        if (column.y - column.length * safeFontSize > height + safeFontSize * 2) {
          column.y = Math.random() * -height * 0.38
          column.speed = (0.72 + Math.random() * 0.9) * speed
          column.length = 12 + Math.floor(Math.random() * 14)
          column.drift = (Math.random() - 0.5) * 0.28
          column.phase = Math.random() * Math.PI * 2
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()

    if (reduceMotion) {
      drawStaticPreview()
      return () => undefined
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = Boolean(entry?.isIntersecting)
      },
      { threshold: 0.04 },
    )
    visibilityObserver.observe(container)

    const handleVisibility = () => {
      isVisible = document.visibilityState === "visible"
    }

    document.addEventListener("visibilitychange", handleVisibility)
    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
      resizeObserver.disconnect()
      visibilityObserver.disconnect()
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [fontSize, speed, density, opacity, color, secondaryColor, accentColor, charset, maxFps])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,color-mix(in_oklch,var(--primary)_12%,transparent),transparent_30%),radial-gradient(circle_at_78%_25%,color-mix(in_oklch,var(--chart-2)_8%,transparent),transparent_34%),radial-gradient(circle_at_50%_80%,color-mix(in_oklch,var(--vx-amber)_9%,transparent),transparent_38%),linear-gradient(to_bottom,#fbfaf7,color-mix(in_oklch,var(--background)_88%,#f5efe1))] dark:bg-[radial-gradient(circle_at_18%_14%,color-mix(in_oklch,var(--primary)_22%,transparent),transparent_30%),radial-gradient(circle_at_78%_25%,color-mix(in_oklch,var(--chart-2)_16%,transparent),transparent_34%),radial-gradient(circle_at_50%_80%,color-mix(in_oklch,var(--vx-amber)_14%,transparent),transparent_38%),linear-gradient(to_bottom,var(--background),color-mix(in_oklch,var(--muted)_28%,var(--background)))]" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-[var(--matrix-light-opacity)] mix-blend-multiply dark:opacity-[var(--matrix-dark-opacity)] dark:mix-blend-screen"
        style={
          {
            "--matrix-light-opacity": clamp(opacity * 0.52, 0.16, 0.32),
            "--matrix-dark-opacity": clamp(opacity, 0.24, 0.58),
          } as React.CSSProperties
        }
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.72),rgba(255,255,255,0.62),rgba(255,255,255,0.76))] dark:bg-[linear-gradient(to_bottom,rgba(3,3,3,0.46),rgba(3,3,3,0.3),rgba(3,3,3,0.42))]" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.012)_1px,transparent_1px),linear-gradient(0deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:36px_36px] opacity-12 dark:opacity-12" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.22)_50%,var(--background)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_56%,var(--background)_100%)]" />
    </div>
  )
}
