"use client"

import { 
  Palette, 
  Sparkles,
  Eye,
  Target,
  Smartphone,
  Ban
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const uniqueFeatures = [
  {
    icon: Palette,
    title: "Direção visual personalizada",
    description: "Cores, tipografia, composição e estilo pensados para o tipo de negócio, público e personalidade da marca.",
  },
  {
    icon: Sparkles,
    title: "Movimento com intenção",
    description: "Animações, fades e microinterações usadas para guiar o olhar do visitante e valorizar a mensagem.",
  },
  {
    icon: Eye,
    title: "Experiência memorável",
    description: "Parallax, profundidade, contraste, imagens e efeitos sutis para criar uma página mais viva e marcante.",
  },
  {
    icon: Target,
    title: "Conversão bem posicionada",
    description: "Chamadas, botões e seções organizadas para conduzir o visitante até o contato, orçamento ou compra.",
  },
  {
    icon: Smartphone,
    title: "Responsivo com acabamento premium",
    description: "A experiência precisa impressionar no celular, tablet e desktop, mantendo velocidade e boa leitura.",
  },
  {
    icon: Ban,
    title: "Nada de visual genérico",
    description: "O objetivo é criar páginas com personalidade, não apenas adaptar um modelo pronto.",
  },
]

export function UniquePages() {
  return (
    <section id="diferencial" className="relative py-20 lg:py-28 bg-background scroll-mt-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5 text-balance tracking-tight">
            Páginas que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              não parecem templates
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada projeto recebe uma direção visual própria, combinando identidade, movimento e estrutura de conversão para criar uma página única e memorável.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {uniqueFeatures.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group border border-border/50 shadow-lg shadow-foreground/[0.03] hover:shadow-xl hover:shadow-primary/[0.08] hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 py-8 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="space-y-5">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-accent/10 rounded-2xl flex items-center justify-center border border-primary/10 group-hover:border-primary/20 group-hover:from-primary/20 group-hover:to-accent/15 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground tracking-tight mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
