"use client"

import {
  Ban,
  Eye,
  Palette,
  Smartphone,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react"
import Tilt from "react-parallax-tilt"
import { Card, CardContent } from "@/components/ui/card"

const uniqueFeatures: Array<{
  icon: LucideIcon
  title: string
  description: string
  effect: "palette" | "spark" | "eye" | "target" | "phone" | "ban"
}> = [
  {
    icon: Palette,
    title: "Direção visual personalizada",
    description:
      "Cores, tipografia, composição e estilo pensados para o tipo de negócio, público e personalidade da marca.",
    effect: "palette",
  },
  {
    icon: Sparkles,
    title: "Movimento com intenção",
    description:
      "Animações, fades e microinterações usadas para guiar o olhar do visitante e valorizar a mensagem.",
    effect: "spark",
  },
  {
    icon: Eye,
    title: "Experiência memorável",
    description:
      "Parallax, profundidade, contraste, imagens e efeitos sutis para criar uma página mais viva e marcante.",
    effect: "eye",
  },
  {
    icon: Target,
    title: "Conversão bem posicionada",
    description:
      "Chamadas, botões e seções organizadas para conduzir o visitante até o contato, orçamento ou compra.",
    effect: "target",
  },
  {
    icon: Smartphone,
    title: "Responsivo com acabamento premium",
    description:
      "A experiência precisa impressionar no celular, tablet e desktop, mantendo velocidade e boa leitura.",
    effect: "phone",
  },
  {
    icon: Ban,
    title: "Nada de visual genérico",
    description:
      "O objetivo é criar páginas com personalidade, não apenas adaptar um modelo pronto.",
    effect: "ban",
  },
]

function FeatureIcon({ icon: Icon, effect }: { icon: LucideIcon; effect: string }) {
  return (
    <div className="vx-unique-icon-shell relative grid h-14 w-14 place-items-center rounded-2xl border border-primary/25 bg-primary/[0.12] shadow-[0_0_32px_rgba(245,158,11,0.14)]">
      <span className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.22),transparent_34%),linear-gradient(135deg,hsl(var(--primary)/0.22),rgba(56,189,248,0.08))]" />
      <Icon className="relative z-10 h-7 w-7 text-primary drop-shadow-[0_0_10px_rgba(245,158,11,0.55)]" strokeWidth={2.15} />

      {effect === "spark" && (
        <>
          <span className="vx-comet vx-comet-a" />
          <span className="vx-comet vx-comet-b" />
        </>
      )}

      {effect === "eye" && <span className="vx-eye-scan" />}

      {effect === "phone" && (
        <span className="vx-phone-flow">
          <span />
          <span />
          <span />
        </span>
      )}

      {effect === "target" && <span className="vx-target-pulse" />}
      {effect === "palette" && <span className="vx-palette-sheen" />}
      {effect === "ban" && <span className="vx-ban-orbit" />}
    </div>
  )
}

export function UniquePages() {
  return (
    <section
      id="diferencial"
      className="vx-unique-section relative isolate overflow-hidden bg-background pt-16 pb-20 scroll-mt-20 sm:pt-20 lg:pt-24 lg:pb-28"
    >
      <div className="vx-unique-hero-echo absolute inset-x-0 -top-28 -z-30 h-56" />
      <div className="vx-unique-mesh absolute inset-0 -z-20" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(245,158,11,0.14),transparent_28%),radial-gradient(circle_at_82%_26%,rgba(56,189,248,0.10),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.04),transparent_30%,rgba(0,0,0,0.12))]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="vx-unique-monitor relative overflow-hidden rounded-[2rem] border border-white/10 bg-card/42 px-4 py-12 shadow-[0_24px_92px_rgba(0,0,0,0.20)] backdrop-blur-2xl sm:px-6 lg:px-10 lg:py-14">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.08)_38%,transparent_46%)] opacity-40" />

          <div className="mx-auto mb-14 max-w-2xl text-center lg:mb-[4.5rem]">
            <span className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-primary shadow-[0_0_28px_rgba(245,158,11,0.12)]">
              Experiência premium
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Páginas que{" "}
              <span className="bg-gradient-to-r from-primary via-amber-500 to-orange-700 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(245,158,11,0.24)]">
                não parecem templates
              </span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Cada projeto recebe uma direção visual própria, combinando identidade,
              movimento e estrutura de conversão para criar uma página única e memorável.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {uniqueFeatures.map((feature, index) => (
              <Tilt
                key={feature.title}
                tiltMaxAngleX={2.4}
                tiltMaxAngleY={3}
                glareEnable
                glareMaxOpacity={0.055}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="24px"
                scale={1.006}
                transitionSpeed={1600}
                perspective={1600}
                className="h-full"
              >
                <Card
                  className="vx-unique-card group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-card/45 py-8 shadow-[0_18px_60px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/34 hover:shadow-[0_18px_64px_rgba(245,158,11,0.10)]"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <span className="pointer-events-none absolute inset-px rounded-[1.45rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.14),transparent_32%,rgba(56,189,248,0.06)_68%,rgba(245,158,11,0.11))] opacity-70" />
                  <span className="pointer-events-none absolute -inset-20 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,20%),rgba(245,158,11,0.20),transparent_30%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="vx-card-aura pointer-events-none absolute inset-0 rounded-3xl" />

                  <CardContent className="relative z-10 space-y-5">
                    <FeatureIcon icon={feature.icon} effect={feature.effect} />
                    <div>
                      <h3 className="mb-2 text-lg font-semibold tracking-tight text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
