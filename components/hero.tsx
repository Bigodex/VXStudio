"use client"

import { useEffect, useRef, useState } from "react"
import type { MouseEvent } from "react"
import Tilt from "react-parallax-tilt"
import gsap from "gsap"
import {
  ArrowRight,
  BadgeCheck,
  Gem,
  MessageCircle,
  Palette,
  RadioTower,
  Target,
  TrendingUp,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { MatrixBackground } from "@/components/matrix-background"

const headlineWords = ["Páginas", "únicas", "para", "marcas", "que", "querem", "ser", "lembradas."]

const trustBadges = [
  { icon: Palette, label: "Design autoral" },
  { icon: Target, label: "Foco em conversão" },
]

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null)
  const wordsRef = useRef<HTMLSpanElement[]>([])
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const actionsRef = useRef<HTMLDivElement | null>(null)
  const badgesRef = useRef<HTMLDivElement | null>(null)
  const mockupRef = useRef<HTMLDivElement | null>(null)
  const primaryButtonRef = useRef<HTMLAnchorElement | null>(null)
  const [parallax, setParallax] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return

    const ctx = gsap.context(() => {
      const introElements = [subtitleRef.current, actionsRef.current, badgesRef.current, mockupRef.current].filter(Boolean)
      const wordElements = wordsRef.current.filter(Boolean)

      gsap.set(introElements, {
        opacity: 0,
        y: 18,
      })

      gsap.set(wordElements, {
        yPercent: 110,
        opacity: 0,
        rotateX: -20,
        filter: "blur(10px)",
      })

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } })

      timeline
        .to(wordElements, {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 0.78,
          stagger: 0.055,
        })
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.65 }, "-=0.28")
        .to(actionsRef.current, { opacity: 1, y: 0, duration: 0.55 }, "-=0.24")
        .to(mockupRef.current, { opacity: 1, y: 0, duration: 0.85 }, "-=0.62")
        .to(badgesRef.current, { opacity: 1, y: 0, duration: 0.55 }, "-=0.35")
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const handleMockupMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    setParallax({ x, y })
  }

  const handleMagneticMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = primaryButtonRef.current
    if (!target) return

    const rect = target.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2

    gsap.to(target, {
      x: x * 0.16,
      y: y * 0.22,
      scale: 1.025,
      duration: 0.35,
      ease: "power3.out",
    })
  }

  const resetMagneticButton = () => {
    if (!primaryButtonRef.current) return

    gsap.to(primaryButtonRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.55,
      ease: "elastic.out(1, 0.45)",
    })
  }

  return (
    <section
      ref={heroRef}
      className="relative isolate overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-14 lg:min-h-[calc(100vh-4.75rem)] lg:pt-28 lg:pb-10"
    >
      <MatrixBackground className="-z-10" fontSize={18} speed={1.12} maxFps={42} density={1.04} opacity={0.42} />
      <div className="absolute left-1/2 top-16 h-px w-[72vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/45 to-transparent animate-line-draw" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div className="relative z-10 space-y-7">
            <div className="space-y-5">
              <h1 className="max-w-3xl text-balance font-[family-name:var(--font-editorial)] text-5xl font-black leading-[0.9] tracking-[-0.075em] text-foreground sm:text-6xl lg:text-[4.9rem] xl:text-[5.2rem]">
                {headlineWords.map((word, index) => {
                  const isLast = index === headlineWords.length - 1

                  return (
                    <span key={`${word}-${index}`} className="inline-block overflow-hidden pb-2 pr-2 align-bottom">
                      <span
                        ref={(node) => {
                          if (node) wordsRef.current[index] = node
                        }}
                        className={
                          isLast
                            ? "inline-block bg-gradient-to-r from-primary via-[#ffbf00] to-chart-2 bg-clip-text text-transparent"
                            : "inline-block"
                        }
                      >
                        {word}
                      </span>
                    </span>
                  )
                })}
              </h1>

              <p ref={subtitleRef} className="max-w-xl text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8 dark:text-muted-foreground">
                A VXStudio cria páginas personalizadas, modernas e vivas para negócios, marcas pessoais, produtos e
                serviços que precisam divulgar, vender e impressionar com uma experiência digital de verdade.
              </p>
            </div>

            <div ref={actionsRef} className="flex flex-col items-start gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group h-13 overflow-hidden rounded-full px-8 text-base font-black tracking-[-0.025em] shadow-2xl shadow-primary/25 transition-shadow duration-300 hover:shadow-[#ffbf00]/25"
                asChild
              >
                <a
                  ref={primaryButtonRef}
                  href="#contato"
                  onMouseMove={handleMagneticMove}
                  onMouseLeave={resetMagneticButton}
                  className="relative will-change-transform"
                >
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.34),transparent_38%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative inline-flex items-center">
                    Quero uma página única
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-13 rounded-full border-white/50 bg-card/42 px-8 text-base font-bold tracking-[-0.025em] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary/10 hover:shadow-lg dark:border-white/10"
                asChild
              >
                <a href="#exemplos">Ver experiências</a>
              </Button>
            </div>
          </div>

          <div
            ref={mockupRef}
            className="relative flex justify-center opacity-100 lg:-mt-10 lg:justify-end xl:-mt-0"
            onMouseMove={handleMockupMove}
            onMouseLeave={() => setParallax({ x: 0, y: 0 })}
          >
            <div className="w-full max-w-[31rem]">
              <Tilt
                tiltMaxAngleX={7}
                tiltMaxAngleY={9}
                perspective={1200}
                transitionSpeed={1100}
                scale={1.012}
                glareEnable
                glareMaxOpacity={0.18}
                glareColor="#ffbf00"
                glarePosition="all"
                glareBorderRadius="2.2rem"
                gyroscope={false}
                className="w-full rounded-[2.2rem]"
                style={{
                  borderRadius: "2.2rem",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative rounded-[2.2rem] will-change-transform">
                  <div className="absolute -inset-7 rounded-[2.2rem] bg-gradient-to-br from-primary/22 via-[#ffbf00]/14 to-chart-2/12 blur-3xl" />

                  <div className="relative overflow-hidden rounded-[2.2rem] border border-white/45 bg-card/60 shadow-[0_30px_90px_rgba(0,0,0,0.20)] backdrop-blur-md transition-all duration-500 hover:border-primary/35 hover:shadow-[0_34px_110px_rgba(255,191,0,0.16)] dark:border-white/10 dark:bg-card/50">
                    <div className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-br from-white/30 via-transparent to-[#ffbf00]/10 dark:from-white/[0.1]" />

                    <div className="relative border-b border-white/40 bg-white/30 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="h-3 w-3 rounded-full bg-red-400/90" />
                          <div className="h-3 w-3 rounded-full bg-[#ffbf00]" />
                          <div className="h-3 w-3 rounded-full bg-emerald-400/90" />
                        </div>

                        <div className="mx-4 flex-1 rounded-full border border-white/45 bg-background/70 px-4 py-1.5 text-center text-xs font-semibold text-muted-foreground backdrop-blur-md dark:border-white/10 dark:bg-background/45">
                          www.vxstudio.com.br
                        </div>
                      </div>
                    </div>

                    <div className="relative space-y-4 p-5 sm:p-6">
                      <div className="grid gap-4 rounded-[1.35rem] border border-white/50 bg-gradient-to-br from-white/70 to-white/28 p-5 shadow-sm backdrop-blur-md dark:border-white/10 dark:from-white/[0.12] dark:to-white/[0.06]">
                        <div className="flex items-center justify-between gap-4">
                          <div className="space-y-3">
                            <div className="h-2.5 w-20 rounded-full bg-gradient-to-r from-primary via-[#ffbf00] to-chart-2" />
                            <div className="h-5 w-52 max-w-full rounded-full bg-foreground/30 dark:bg-white/28" />
                            <div className="h-3 w-40 max-w-full rounded-full bg-foreground/18 dark:bg-white/18" />
                          </div>

                          <div className="grid h-14 w-14 place-items-center rounded-2xl border border-primary/25 bg-primary/18">
                            <Gem className="h-6 w-6 text-primary" />
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <div className="h-10 w-32 rounded-full bg-gradient-to-r from-primary to-[#ffbf00] shadow-lg shadow-primary/15" />
                          <div className="h-10 w-24 rounded-full border border-white/55 bg-white/45 dark:border-white/10 dark:bg-white/[0.08]" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { icon: BadgeCheck, title: "Autoridade", width: "w-20" },
                          { icon: RadioTower, title: "Alcance", width: "w-16" },
                        ].map((item) => (
                          <div
                            key={item.title}
                            className="group/card rounded-[1.25rem] border border-white/50 bg-white/52 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-white/70 dark:border-white/10 dark:bg-white/[0.09] dark:hover:bg-white/[0.13]"
                          >
                            <div className="mb-4 grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-primary/24 to-[#ffbf00]/20 text-primary transition-transform duration-300 group-hover/card:scale-110 group-hover/card:rotate-3">
                              <item.icon className="h-5 w-5" />
                            </div>

                            <div className={`mb-2 h-2.5 ${item.width} rounded-full bg-foreground/26 dark:bg-white/24`} />
                            <div className="h-2 w-12 rounded-full bg-foreground/16 dark:bg-white/16" />
                          </div>
                        ))}
                      </div>

                      <div className="rounded-[1.25rem] border border-white/50 bg-gradient-to-r from-primary/16 via-[#ffbf00]/16 to-chart-2/12 p-4 backdrop-blur-md dark:border-white/10 dark:from-primary/18 dark:via-[#ffbf00]/14 dark:to-chart-2/12">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                            performance
                          </span>
                          <span className="rounded-full bg-primary/18 px-2 py-1 text-xs font-bold text-primary">
                            live
                          </span>
                        </div>

                        <div className="flex h-14 items-end gap-2">
                          {[38, 54, 42, 76, 64, 88, 72].map((height, index) => (
                            <div
                              key={index}
                              className="flex-1 rounded-t-lg bg-gradient-to-t from-primary to-[#ffbf00] opacity-95"
                              style={{ height: `${height}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute -left-5 top-[17%] max-w-[12rem] rounded-[1.5rem] border border-white/55 bg-card/78 p-4 shadow-2xl shadow-primary/12 backdrop-blur-md transition-transform duration-300 dark:border-white/10 dark:bg-card/72 sm:-left-12"
                    style={{ transform: `translate3d(${parallax.x * -24}px, ${parallax.y * -18}px, 44px)` }}
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/20">
                        <Users className="h-[1.125rem] w-[1.125rem] text-primary" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-[0.14em] text-primary">Novo lead</span>
                    </div>

                    <p className="text-sm font-black tracking-[-0.03em] text-foreground">Cliente interessado</p>
                    <p className="text-xs text-muted-foreground">Briefing recebido agora</p>
                  </div>

                  <div
                    className="absolute -right-4 bottom-[28%] rounded-[1.5rem] border border-white/55 bg-card/78 p-4 shadow-2xl shadow-[#ffbf00]/10 backdrop-blur-md transition-transform duration-300 dark:border-white/10 dark:bg-card/72 sm:-right-9"
                    style={{ transform: `translate3d(${parallax.x * 22}px, ${parallax.y * 16}px, 54px)` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary/28 to-[#ffbf00]/24">
                        <TrendingUp className="h-5 w-5 text-primary" />
                      </div>

                      <div>
                        <p className="text-xl font-black tracking-[-0.05em] text-foreground">+147%</p>
                        <p className="text-xs text-muted-foreground">Mais contatos</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-[1.5rem] border border-white/55 bg-card/82 px-5 py-3 shadow-2xl shadow-primary/12 backdrop-blur-md transition-transform duration-300 dark:border-white/10 dark:bg-card/76"
                    style={{ transform: `translate3d(calc(-50% + ${parallax.x * -14}px), ${parallax.y * 14}px, 64px)` }}
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#25D366] shadow-lg shadow-emerald-500/20">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <p className="text-sm font-black tracking-[-0.03em] text-foreground">WhatsApp pronto</p>
                      <p className="text-xs text-muted-foreground">CTA integrado</p>
                    </div>
                  </div>
                </div>
              </Tilt>

              <div ref={badgesRef} className="mt-10 grid grid-cols-2 gap-3 sm:mt-11">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className="group/badge flex items-center gap-3 rounded-2xl border border-white/45 bg-card/58 p-2.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-card/78 hover:shadow-lg hover:shadow-primary/10 dark:border-white/10 dark:bg-card/46"
                  >
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/22 via-[#ffbf00]/16 to-chart-2/18 shadow-inner transition-all duration-300 group-hover/badge:scale-105 group-hover/badge:border-primary/40">
                      <span className="absolute inset-0 translate-x-[-130%] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover/badge:translate-x-[130%]" />
                      <badge.icon className="relative h-[1.125rem] w-[1.125rem] text-primary transition-all duration-300 group-hover/badge:rotate-[-6deg] group-hover/badge:text-[#b77900] dark:group-hover/badge:text-[#ffbf00]" />
                    </div>

                    <span className="text-sm font-bold tracking-[-0.02em] text-muted-foreground transition-colors duration-300 group-hover/badge:text-foreground">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}