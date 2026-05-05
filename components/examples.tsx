"use client"

import { useEffect, useMemo, useState } from "react"
import {
  ArrowUpRight,
  CalendarDays,
  ChefHat,
  Gem,
  HeartPulse,
  Megaphone,
  Palette,
  Scissors,
  ShoppingBag,
  Sparkles,
  UserRound,
  WandSparkles,
} from "lucide-react"

const niches = [
  {
    id: "restaurante",
    label: "Restaurante",
    eyebrow: "Cardápio vivo",
    title: "Mesa cheia começa por uma página que abre o apetite.",
    description: "Visual quente, fotos em destaque, CTA para reservas e cardápio com leitura rápida no celular.",
    cta: "Ver cardápio",
    icon: ChefHat,
    gradient: "from-orange-500 via-amber-400 to-red-500",
    soft: "from-orange-500/20 via-amber-300/20 to-red-400/20",
    accent: "bg-orange-500",
    metric: "+38%",
    metricLabel: "pedidos pelo WhatsApp",
  },
  {
    id: "barbearia",
    label: "Barbearia",
    eyebrow: "Agenda premium",
    title: "Uma experiência urbana para transformar visita em horário marcado.",
    description: "Contraste forte, estética masculina, cards de serviços e chamada direta para agendamento.",
    cta: "Agendar corte",
    icon: Scissors,
    gradient: "from-slate-800 via-zinc-700 to-amber-500",
    soft: "from-slate-500/20 via-zinc-500/20 to-amber-400/20",
    accent: "bg-zinc-800 dark:bg-zinc-200",
    metric: "2.1x",
    metricLabel: "mais cliques no CTA",
  },
  {
    id: "clinica",
    label: "Clínica",
    eyebrow: "Confiança visual",
    title: "Clareza, cuidado e autoridade em uma página que passa segurança.",
    description: "Hierarquia limpa, prova social, serviços bem organizados e CTA para avaliação.",
    cta: "Agendar avaliação",
    icon: HeartPulse,
    gradient: "from-cyan-500 via-teal-400 to-emerald-400",
    soft: "from-cyan-400/20 via-teal-300/20 to-emerald-300/20",
    accent: "bg-cyan-500",
    metric: "94%",
    metricLabel: "leitura no mobile",
  },
  {
    id: "marca-pessoal",
    label: "Marca pessoal",
    eyebrow: "Presença autoral",
    title: "Sua história apresentada com estética, ritmo e posicionamento.",
    description: "Tipografia editorial, narrativa visual, portfólio e links estratégicos para contato.",
    cta: "Conhecer trajetória",
    icon: UserRound,
    gradient: "from-violet-600 via-fuchsia-500 to-cyan-400",
    soft: "from-violet-500/20 via-fuchsia-400/20 to-cyan-300/20",
    accent: "bg-violet-600",
    metric: "+62%",
    metricLabel: "retenção na dobra inicial",
  },
  {
    id: "loja",
    label: "Loja",
    eyebrow: "Vitrine digital",
    title: "Produtos organizados em uma vitrine rápida, bonita e comprável.",
    description: "Categorias claras, destaques visuais, ofertas e botões para compra ou orçamento.",
    cta: "Ver produtos",
    icon: ShoppingBag,
    gradient: "from-pink-500 via-rose-500 to-orange-400",
    soft: "from-pink-400/20 via-rose-400/20 to-orange-300/20",
    accent: "bg-pink-500",
    metric: "4 min",
    metricLabel: "até o primeiro contato",
  },
  {
    id: "evento",
    label: "Evento",
    eyebrow: "Impacto imediato",
    title: "Uma página com energia para vender presença antes do primeiro clique.",
    description: "Contagem visual, line-up, lote de ingressos, localização e CTA forte para conversão.",
    cta: "Garantir presença",
    icon: CalendarDays,
    gradient: "from-amber-400 via-yellow-300 to-violet-500",
    soft: "from-amber-300/20 via-yellow-200/20 to-violet-400/20",
    accent: "bg-amber-400",
    metric: "24h",
    metricLabel: "campanha no ar",
  },
]

const principles = [
  { icon: Palette, title: "Direção visual", text: "Cores, tipografia e composição pensadas para o nicho." },
  { icon: WandSparkles, title: "Movimento sutil", text: "Transições e camadas que guiam o olhar sem pesar." },
  { icon: Megaphone, title: "CTA com contexto", text: "A chamada muda conforme o objetivo da página." },
]

export function Examples() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = niches[activeIndex]
  const ActiveIcon = active.icon

  const nextIndex = useMemo(() => (activeIndex + 1) % niches.length, [activeIndex])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % niches.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="exemplos" className="relative isolate overflow-hidden bg-background py-24 scroll-mt-24 sm:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.12),transparent_32%),radial-gradient(circle_at_85%_15%,hsl(var(--accent)/0.16),transparent_30%),linear-gradient(180deg,transparent,rgba(0,0,0,0.02))]" />
      <div className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-pulse" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/70 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-primary" />
            Páginas que não parecem templates
          </div>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tighter text-foreground text-balance sm:text-5xl lg:text-6xl">
            Uma página para cada história, nicho e intenção.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            A VXStudio não troca só cor e logo. A experiência muda conforme o tipo de negócio: ritmo, tipografia,
            CTA, hierarquia e movimento são desenhados para fazer sentido naquele contexto.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {principles.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-border/60 bg-card/65 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/70 p-4 shadow-2xl shadow-foreground/10 backdrop-blur-xl sm:p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/60 bg-background/60 px-4 py-3 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="rounded-full border border-border/60 bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                preview/{active.id}
              </div>
            </div>

            <div className={`relative min-h-[500px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-br ${active.soft} p-5 transition-all duration-700 sm:p-7`}>
              <div className={`absolute -right-20 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${active.gradient} opacity-30 blur-3xl transition-all duration-700`} />
              <div className={`absolute -bottom-28 left-4 h-72 w-72 rounded-full bg-gradient-to-tr ${active.gradient} opacity-20 blur-3xl transition-all duration-700`} />

              <div className="relative flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${active.gradient} text-white shadow-lg transition-all duration-700`}>
                    <ActiveIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">{active.eyebrow}</p>
                    <p className="text-lg font-semibold tracking-tight text-foreground">{active.label}</p>
                  </div>
                </div>
                <div className="hidden rounded-full border border-border/50 bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-md sm:block">
                  identidade ativa
                </div>
              </div>

              <div key={active.id} className="relative mt-14 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="max-w-xl">
                  <h3 className="text-3xl font-semibold tracking-tighter text-foreground text-balance sm:text-5xl">
                    {active.title}
                  </h3>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">{active.description}</p>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <button className={`group inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${active.gradient} px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-foreground/10 transition-all duration-300 hover:scale-[1.02]`}>
                    {active.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <span className="rounded-full border border-border/60 bg-card/70 px-4 py-3 text-sm font-medium text-muted-foreground backdrop-blur-md">
                    Mobile-first
                  </span>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-[1fr_0.78fr]">
                  <div className="rounded-3xl border border-white/20 bg-card/65 p-4 shadow-xl shadow-foreground/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-card/80">
                    <div className="mb-4 h-36 overflow-hidden rounded-2xl border border-border/50 bg-background/70 p-3">
                      <div className={`h-16 rounded-xl bg-gradient-to-r ${active.gradient} opacity-90`} />
                      <div className="mt-3 space-y-2">
                        <div className="h-2 w-4/5 rounded-full bg-foreground/15" />
                        <div className="h-2 w-3/5 rounded-full bg-foreground/10" />
                        <div className="h-2 w-2/3 rounded-full bg-foreground/10" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">Hero personalizado</p>
                        <p className="text-xs text-muted-foreground">Composição e CTA por nicho</p>
                      </div>
                      <Gem className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-3xl border border-white/20 bg-card/65 p-5 shadow-xl shadow-foreground/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-card/80">
                      <p className="text-4xl font-semibold tracking-tighter text-foreground">{active.metric}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{active.metricLabel}</p>
                    </div>
                    <div className="rounded-3xl border border-white/20 bg-card/65 p-5 shadow-xl shadow-foreground/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-card/80">
                      <div className="mb-3 flex -space-x-2">
                        {[0, 1, 2].map((item) => (
                          <span key={item} className={`h-8 w-8 rounded-full border-2 border-card bg-gradient-to-br ${active.gradient}`} />
                        ))}
                      </div>
                      <p className="text-sm font-semibold text-foreground">Experiência lembrável</p>
                      <p className="mt-1 text-xs text-muted-foreground">Mais personalidade, menos template.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {niches.map((niche, index) => {
              const Icon = niche.icon
              const isActive = index === activeIndex
              return (
                <button
                  key={niche.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "border-primary/40 bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "border-border/70 bg-card/70 text-muted-foreground backdrop-blur-md hover:-translate-y-0.5 hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  {niche.label}
                </button>
              )
            })}
          </div>

          <div className="pointer-events-none absolute -right-2 top-20 hidden rounded-2xl border border-border/60 bg-card/75 px-4 py-3 text-sm font-medium text-foreground shadow-xl backdrop-blur-md animate-bounce lg:block">
            Próximo: {niches[nextIndex].label}
          </div>
        </div>
      </div>
    </section>
  )
}
