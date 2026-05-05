"use client"

import { MessageSquare, Lightbulb, Code, Share2 } from "lucide-react"

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: "Você chama a VXStudio",
    description: "Entre em contato pelo WhatsApp para conversarmos sobre seu projeto.",
  },
  {
    number: 2,
    icon: Lightbulb,
    title: "Organizamos sua ideia",
    description: "Entendemos seu objetivo e definimos a melhor direção visual e estrutura.",
  },
  {
    number: 3,
    icon: Code,
    title: "Criamos sua landing page",
    description: "Desenvolvemos sua página com design único, movimento e foco em resultado.",
  },
  {
    number: 4,
    icon: Share2,
    title: "Você divulga e recebe contatos",
    description: "Sua página vai ao ar e você começa a atrair clientes.",
  },
]

export function Steps() {
  return (
    <section id="como-funciona" className="relative py-20 lg:py-28 bg-muted/30 scroll-mt-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5 text-balance tracking-tight">
            Como funciona
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Um processo simples e direto para você ter sua landing page única.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-3rem)] h-0.5 bg-gradient-to-r from-primary/30 to-accent/20" />
              )}
              
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 p-6 shadow-lg shadow-foreground/[0.03] hover:shadow-xl hover:shadow-primary/[0.08] hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 text-center relative">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg shadow-primary/25">
                  {step.number}
                </div>
                
                <div className="pt-4 space-y-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-accent/10 rounded-2xl flex items-center justify-center mx-auto border border-primary/10 group-hover:border-primary/20 group-hover:from-primary/20 transition-all duration-300">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground tracking-tight">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
