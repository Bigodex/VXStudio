"use client"

import { MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-muted/30 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)' }}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          </div>
          
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance tracking-tight leading-tight">
              Vamos criar uma página que tenha a cara da sua ideia?
            </h2>
            <p className="text-white/85 text-lg sm:text-xl mb-10 leading-relaxed">
              Se você quer sair do visual genérico e ter uma landing page com identidade, movimento e estratégia, a VXStudio transforma sua ideia em uma experiência digital memorável.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-[#7C3AED] hover:bg-white/90 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/25 hover:scale-[1.02] text-base px-8 transition-all duration-300"
                asChild
              >
                <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Começar meu projeto
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 text-base px-8 transition-all duration-300"
                asChild
              >
                <a href="#como-funciona">
                  Entender como funciona
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
