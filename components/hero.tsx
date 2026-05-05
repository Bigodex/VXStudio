"use client"

import { Sparkles, Target, Zap, Smartphone, ArrowRight, TrendingUp, Users, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const trustBadges = [
  { icon: Sparkles, label: "Design autoral" },
  { icon: Zap, label: "Movimento sutil" },
  { icon: Target, label: "Foco em conversão" },
  { icon: Smartphone, label: "Responsivo" },
]

export function Hero() {
  return (
    <section className="relative pt-28 lg:pt-36 pb-20 lg:pb-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
      
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-glow-pulse animation-delay-200" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] text-balance tracking-tight">
                Landing pages únicas para marcas que querem ser{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">lembradas.</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                A VXStudio cria páginas personalizadas, modernas e vivas para negócios, marcas pessoais, produtos e serviços que precisam divulgar, vender e impressionar com uma experiência digital de verdade.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button size="lg" className="shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300 text-base px-8" asChild>
                <a href="#contato">
                  Quero uma página única
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 text-base px-8" asChild>
                <a href="#exemplos">Ver experiências</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {trustBadges.map((badge, index) => (
                <div 
                  key={badge.label} 
                  className="flex items-center gap-3 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100 + 400}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-primary/10">
                    <badge.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Premium Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main Mockup */}
            <div className="relative animate-float">
              {/* Browser Window */}
              <div className="w-full max-w-md bg-card rounded-2xl shadow-2xl shadow-primary/10 border border-border/50 overflow-hidden">
                {/* Browser Header */}
                <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-background/80 rounded-lg px-4 py-1.5 text-xs text-muted-foreground text-center">
                      suamarca.com.br
                    </div>
                  </div>
                </div>
                
                {/* Page Content Preview */}
                <div className="p-6 space-y-5 bg-gradient-to-br from-card to-muted/20">
                  {/* Hero Preview */}
                  <div className="space-y-3">
                    <div className="w-20 h-2.5 bg-gradient-to-r from-primary/40 to-accent/30 rounded-full" />
                    <div className="w-48 h-4 bg-foreground/20 rounded-full" />
                    <div className="w-40 h-3 bg-foreground/10 rounded-full" />
                  </div>
                  
                  {/* CTA Preview */}
                  <div className="flex gap-3">
                    <div className="w-28 h-9 bg-gradient-to-r from-primary to-primary/80 rounded-xl" />
                    <div className="w-24 h-9 bg-muted rounded-xl border border-border/50" />
                  </div>
                  
                  {/* Cards Preview */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {[1, 2].map((i) => (
                      <div key={i} className="bg-card/80 rounded-xl p-4 space-y-2 border border-border/30 shadow-sm">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/10 rounded-lg" />
                        <div className="w-16 h-2.5 bg-foreground/15 rounded-full" />
                        <div className="w-12 h-2 bg-foreground/10 rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Card - Lead Notification */}
              <div className="absolute -left-6 sm:-left-12 top-1/4 bg-card rounded-2xl p-4 shadow-xl shadow-primary/10 border border-border/50 max-w-[180px] animate-float-delay">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-xs font-semibold text-green-600">Novo lead!</span>
                </div>
                <p className="text-sm font-medium text-foreground">Cliente interessado</p>
                <p className="text-xs text-muted-foreground">Agora mesmo</p>
              </div>

              {/* Floating Card - Stats */}
              <div className="absolute -right-4 sm:-right-8 bottom-1/4 bg-card rounded-2xl p-4 shadow-xl shadow-primary/10 border border-border/50 animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">+147%</p>
                    <p className="text-xs text-muted-foreground">Mais contatos</p>
                  </div>
                </div>
              </div>

              {/* Floating Card - WhatsApp */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 bg-card rounded-2xl px-5 py-3 shadow-xl shadow-primary/10 border border-border/50 flex items-center gap-3 animate-float-delay">
                <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">WhatsApp pronto</p>
                  <p className="text-xs text-muted-foreground">Botão integrado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
