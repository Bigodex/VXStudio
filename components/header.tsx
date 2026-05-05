"use client"

import { useEffect, useState } from "react"
import {
  BadgeDollarSign,
  BriefcaseBusiness,
  Home,
  Layers3,
  Menu,
  Moon,
  Route,
  Sparkles,
  Sun,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Início", href: "#", icon: Home },
  { label: "Diferencial", href: "#diferencial", icon: Sparkles },
  { label: "O que fazemos", href: "#servicos", icon: BriefcaseBusiness },
  { label: "Exemplos", href: "#exemplos", icon: Layers3 },
  { label: "Como funciona", href: "#como-funciona", icon: Route },
  { label: "Investimento", href: "#investimento", icon: BadgeDollarSign },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    const initialTheme = savedTheme || systemTheme
    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-18">
          <a href="#" className="text-xl font-extrabold tracking-tight text-foreground" aria-label="Voltar para o início">
            <span className="text-primary">VX</span>Studio
          </a>

          <nav className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => {
              const Icon = link.icon

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="group/nav relative inline-flex items-center gap-2 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  <Icon className="h-4 w-4 text-primary/75 transition-all duration-200 group-hover/nav:-translate-y-0.5 group-hover/nav:text-primary" />
                  <span>{link.label}</span>
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary via-chart-2 to-chart-3 transition-transform duration-300 ease-out group-hover/nav:scale-x-100" />
                </a>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={toggleTheme}
              className="rounded-full border border-border/70 bg-secondary/70 p-2 text-muted-foreground shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent hover:text-accent-foreground"
              aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
            >
              {mounted && (theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />)}
            </button>

            <Button asChild className="shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25">
              <a href="#contato">Pedir orçamento</a>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="rounded-full border border-border/70 bg-secondary/70 p-2 text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
              aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
            >
              {mounted && (theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />)}
            </button>

            <button
              className="-mr-2 p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border/60 py-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group/nav relative inline-flex w-fit items-center gap-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4 text-primary/80 transition-all group-hover/nav:text-primary" />
                    <span>{link.label}</span>
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary via-chart-2 to-chart-3 transition-transform duration-300 ease-out group-hover/nav:scale-x-100" />
                  </a>
                )
              })}
              <Button asChild className="mt-3 shadow-md shadow-primary/20">
                <a href="#contato" onClick={() => setMobileMenuOpen(false)}>
                  Pedir orçamento
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
