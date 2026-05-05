"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  "Direção visual personalizada",
  "Design moderno e responsivo",
  "Estrutura pensada para conversão",
  "Animações e microinterações sutis",
  "Botões estratégicos para contato",
  "Página única e memorável",
]

export function Pricing() {
  return (
    <section id="investimento" className="relative py-20 lg:py-28 bg-background scroll-mt-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-accent/5 rounded-full blur-[80px]" />
      
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5 text-balance tracking-tight">
            Investimento
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Uma página com identidade própria que trabalha pelo seu negócio.
          </p>
        </div>

        <Card className="border border-border/50 shadow-2xl shadow-primary/[0.08] overflow-hidden bg-card/80 backdrop-blur-sm">
          <CardContent className="p-0">
            <div className="p-8 lg:p-10 space-y-8">
              {/* Title */}
              <div className="text-center">
                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/15 to-accent/10 text-primary text-xs font-semibold rounded-xl uppercase tracking-wide mb-4 border border-primary/10">
                  Serviço único
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                  Landing page{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    personalizada
                  </span>
                </h3>
              </div>

              {/* Features */}
              <ul className="space-y-4 max-w-md mx-auto">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 bg-gradient-to-br from-primary/15 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary/10 group-hover:border-primary/20 transition-all duration-300">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Pricing Info */}
              <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-6 text-center border border-border/30">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  O valor depende do tipo de página, quantidade de seções e nível de personalização visual.
                </p>
                <Button 
                  size="lg" 
                  className="shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] text-base px-10 transition-all duration-300" 
                  asChild
                >
                  <a href="#contato">Pedir orçamento</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
