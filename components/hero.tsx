"use client"

import { useState } from "react"
import type { MouseEvent } from "react"
import { ArrowRight, MessageCircle, MousePointer2, Smartphone, Sparkles, Target, TrendingUp, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const trustBadges = [
  { icon: Sparkles, label: "Design autoral" },
  { icon: Zap, label: "Movimento sutil" },
  { icon: Target, label: "Foco em conversão" },
  { icon: Smartphone, label: "Responsivo" },
]

const processSteps = ["Briefing", "Visual", "Movimento", "Conversão"]

export function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -10
    setTilt({ x, y })
  }

  return (
    <section
      className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_34%),radial-gradient(circle_at_74%_58%,color-mix(in_oklch,var(--chart-2)_14%,transparent),transparent_34%),linear-gradient(to_bottom,var(--background),color-mix(in_oklch,var(--muted)_45%,var(--background)))]" />
      <div className="absolute left-1/2 top-20 h-px w-[70vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/45 to-transparent animate-line-draw" />
      <div className="pointer-events-none absolute left-[6%] top-28 hidden h-32 w-32 rounded-full border border-primary/20 lg:block animate-orbit-slow" />
      <div className="pointer-events-none absolute right-[12%] bottom-24 hidden h-44 w-44 rounded-full border border-chart-2/20 lg:block animate-orbit-slow animation-delay-300" />
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary/5 to-transparent animate-scan-soft" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8 opacity-0 animate-hero-intro">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-md">
              <MousePointer2 className="h-3.5 w-3.5 text-primary" />
              Experiências digitais com intenção
            </div>

            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
                Landing pages únicas para marcas que querem ser{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-chart-2 to-chart-3">
                  lembradas.
                </span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                A VXStudio cria páginas personalizadas, modernas e vivas para negócios, marcas pessoais, produtos e serviços que precisam divulgar, vender e impressionar com uma experiência digital de verdade.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <Button size="lg" className="px-8 text-base shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30" asChild>
                <a href="#contato">
                  Quero uma página única
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="px-8 text-base shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-accent/60 hover:shadow-md" asChild>
                <a href="#exemplos">Ver experiências</a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {trustBadges.map((badge, index) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100 + 450}ms`, animationFillMode: "forwards" }}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/15 bg-gradient-to-br from-primary/20 to-accent/40 shadow-sm">
                    <badge.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div
              className="relative will-change-transform animate-float motion-reduce:animate-none"
              style={{ transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
            >
              <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-primary/20 via-chart-2/10 to-transparent blur-3xl" />

              <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border/70 bg-card shadow-2xl shadow-primary/10">
                <div className="relative overflow-hidden border-b border-border/60 bg-muted/60 px-4 py-3">
                  <div className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shine" />
                  <div className="relative flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-primary" />
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                    <div className="mx-4 flex-1">
                      <div className="rounded-lg bg-background/80 px-4 py-1.5 text-center text-xs text-muted-foreground">
                        suamarca.com.br
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 bg-gradient-to-br from-card to-muted/30 p-6">
                  <div className="space-y-3 opacity-0 animate-cascade-in animation-delay-100">
                    <div className="h-2.5 w-20 rounded-full bg-gradient-to-r from-primary to-chart-2" />
                    <div className="h-4 w-48 rounded-full bg-foreground/20" />
                    <div className="h-3 w-40 rounded-full bg-foreground/10" />
                  </div>

                  <div className="flex gap-3 opacity-0 animate-cascade-in animation-delay-200">
                    <div className="h-9 w-28 rounded-xl bg-gradient-to-r from-primary to-chart-2 shadow-lg shadow-primary/15" />
                    <div className="h-9 w-24 rounded-xl border border-border/60 bg-muted" />
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {[1, 2].map((i) => (
                      <div key={i} className="space-y-2 rounded-xl border border-border/50 bg-card/85 p-4 opacity-0 shadow-sm animate-cascade-in" style={{ animationDelay: `${i * 130 + 260}ms`, animationFillMode: "forwards" }}>
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary/25 to-accent/60" />
                        <div className="h-2.5 w-16 rounded-full bg-foreground/15" />
                        <div className="h-2 w-12 rounded-full bg-foreground/10" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 top-1/4 max-w-[180px] rounded-2xl border border-border/60 bg-card p-4 shadow-xl shadow-primary/10 animate-float-delay sm:-left-12">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-primary">Novo lead!</span>
                </div>
                <p className="text-sm font-semibold text-foreground">Cliente interessado</p>
                <p className="text-xs text-muted-foreground">Agora mesmo</p>
              </div>

              <div className="absolute -right-4 bottom-1/4 rounded-2xl border border-border/60 bg-card p-4 shadow-xl shadow-primary/10 animate-float-slow sm:-right-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-accent/70">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">+147%</p>
                    <p className="text-xs text-muted-foreground">Mais contatos</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-border/60 bg-card px-5 py-3 shadow-xl shadow-primary/10 animate-float-delay">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-500">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">WhatsApp pronto</p>
                  <p className="text-xs text-muted-foreground">Botão integrado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-3 rounded-2xl border border-border/70 bg-card/65 p-3 shadow-lg shadow-foreground/[0.03] backdrop-blur-xl sm:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step} className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-300 hover:bg-accent/60">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground shadow-sm">
                {index + 1}
              </span>
              <span className="text-sm font-semibold text-foreground">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
