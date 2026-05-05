"use client"

import { 
  UtensilsCrossed, 
  Scissors, 
  ShoppingBag, 
  Briefcase, 
  Stethoscope,
  Monitor,
  Calendar,
  User
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const examples = [
  {
    icon: UtensilsCrossed,
    title: "Restaurante",
    gradient: "from-orange-500 to-red-500",
    mockupBg: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30",
  },
  {
    icon: Scissors,
    title: "Barbearia",
    gradient: "from-slate-600 to-slate-800",
    mockupBg: "bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/30",
  },
  {
    icon: ShoppingBag,
    title: "Loja",
    gradient: "from-pink-500 to-rose-500",
    mockupBg: "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30",
  },
  {
    icon: Briefcase,
    title: "Profissional autônomo",
    gradient: "from-blue-500 to-indigo-500",
    mockupBg: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30",
  },
  {
    icon: Stethoscope,
    title: "Clínica",
    gradient: "from-teal-500 to-cyan-500",
    mockupBg: "bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30",
  },
  {
    icon: Monitor,
    title: "Produto digital",
    gradient: "from-purple-500 to-violet-500",
    mockupBg: "bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30",
  },
  {
    icon: Calendar,
    title: "Evento",
    gradient: "from-amber-500 to-yellow-500",
    mockupBg: "bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30",
  },
  {
    icon: User,
    title: "Portfólio pessoal",
    gradient: "from-emerald-500 to-green-500",
    mockupBg: "bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30",
  },
]

export function Examples() {
  return (
    <section id="exemplos" className="relative py-20 lg:py-28 bg-background scroll-mt-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[250px] h-[250px] bg-primary/5 rounded-full blur-[80px] translate-x-1/2" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5 text-balance tracking-tight">
            Exemplos de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              experiências
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Veja alguns tipos de páginas personalizadas que podemos criar para diferentes segmentos.
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {examples.map((example) => (
            <Card 
              key={example.title} 
              className="group border border-border/50 shadow-lg shadow-foreground/[0.03] overflow-hidden hover:shadow-xl hover:shadow-primary/[0.08] hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-0">
                {/* Mockup Preview */}
                <div className={`h-36 sm:h-44 ${example.mockupBg} p-4 relative overflow-hidden`}>
                  {/* Mini Browser Frame */}
                  <div className="absolute inset-3 bg-card rounded-xl shadow-md border border-border/30 overflow-hidden">
                    {/* Browser Bar */}
                    <div className="h-5 bg-muted/80 flex items-center px-2 gap-1 border-b border-border/30">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    </div>
                    {/* Content Preview */}
                    <div className="p-2.5 space-y-2">
                      <div className={`h-8 rounded-lg bg-gradient-to-r ${example.gradient} opacity-80`} />
                      <div className="space-y-1.5">
                        <div className="h-1.5 w-3/4 bg-foreground/10 rounded-full" />
                        <div className="h-1.5 w-1/2 bg-foreground/10 rounded-full" />
                      </div>
                      <div className="flex gap-1.5">
                        <div className={`h-4 w-12 rounded bg-gradient-to-r ${example.gradient}`} />
                        <div className="h-4 w-10 rounded bg-muted border border-border/50" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Label */}
                <div className="p-4 text-center">
                  <div className={`w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br ${example.gradient} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    <example.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground tracking-tight">{example.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
