"use client"

import { 
  Palette, 
  Smartphone, 
  Target, 
  MessageCircle, 
  FileText, 
  Sparkles,
  Layout,
  Eye
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: Palette,
    title: "Identidade visual própria",
    description: "Design criado especialmente para seu negócio, público e posicionamento.",
  },
  {
    icon: Sparkles,
    title: "Animações modernas",
    description: "Movimento sutil que guia o olhar e valoriza cada seção da página.",
  },
  {
    icon: Layout,
    title: "Layout pensado para seu público",
    description: "Estrutura personalizada que conecta com quem você quer alcançar.",
  },
  {
    icon: Smartphone,
    title: "Página responsiva",
    description: "Experiência impecável em celular, tablet e desktop.",
  },
  {
    icon: FileText,
    title: "Copy voltada para conversão",
    description: "Textos estratégicos que comunicam valor e levam à ação.",
  },
  {
    icon: Eye,
    title: "Experiência memorável",
    description: "Visual marcante que diferencia sua marca da concorrência.",
  },
  {
    icon: MessageCircle,
    title: "Botões estratégicos para contato",
    description: "WhatsApp, formulários e CTAs posicionados para converter.",
  },
  {
    icon: Target,
    title: "Visual profissional e único",
    description: "Estética premium que transmite confiança e autoridade.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-20 lg:py-28 bg-muted/30 scroll-mt-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5 text-balance tracking-tight">
            Por que escolher a VXStudio?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Criamos experiências digitais personalizadas, não apenas páginas bonitas.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title} 
              className="group border border-border/50 shadow-lg shadow-foreground/[0.03] hover:shadow-xl hover:shadow-primary/[0.06] hover:-translate-y-0.5 hover:border-primary/20 transition-all duration-300 py-6 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/15 to-accent/10 rounded-2xl flex items-center justify-center border border-primary/10 group-hover:border-primary/20 group-hover:from-primary/20 transition-all duration-300">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground tracking-tight mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
