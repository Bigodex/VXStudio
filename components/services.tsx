"use client"

import { Store, User, Rocket, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Store,
    title: "Página para negócios locais",
    description: "Restaurantes, barbearias, lojas, clínicas e outros comércios que precisam de presença online.",
  },
  {
    icon: User,
    title: "Página para marca pessoal",
    description: "Profissionais autônomos, consultores e criadores que querem apresentar seu trabalho.",
  },
  {
    icon: Rocket,
    title: "Página para produto ou lançamento",
    description: "Produtos digitais, cursos, eventos e lançamentos que precisam de uma página de vendas.",
  },
  {
    icon: Building2,
    title: "Página institucional simples",
    description: "Empresas que precisam de uma presença digital profissional e objetiva.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="relative py-20 lg:py-28 bg-background scroll-mt-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5 text-balance tracking-tight">
            O que fazemos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Criamos landing pages personalizadas para diferentes tipos de projetos e objetivos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group border border-border/50 shadow-lg shadow-foreground/[0.03] hover:shadow-xl hover:shadow-primary/[0.08] hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 py-8 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="text-center space-y-5">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-accent/10 rounded-2xl flex items-center justify-center mx-auto border border-primary/10 group-hover:border-primary/20 group-hover:from-primary/20 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground tracking-tight">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
