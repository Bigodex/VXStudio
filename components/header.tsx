"use client"

import { useEffect, useRef, useState } from "react"
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
  WandSparkles,
  X,
} from "lucide-react"
import gsap from "gsap"
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
  const headerRef = useRef<HTMLElement | null>(null)
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

  useEffect(() => {
    if (!headerRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: -18, opacity: 0, filter: "blur(10px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.7, ease: "power3.out", delay: 0.15 },
      )
    }, headerRef)

    return () => ctx.revert()
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/72 opacity-0 shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl supports-[backdrop-filter]:bg-background/62"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-[4.75rem]">
          <a
            href="#"
            className="group/logo inline-flex items-center gap-3 text-xl font-black tracking-tight text-foreground"
            aria-label="Voltar para o início"
          >
            <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/95 via-primary to-chart-2 text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 group-hover/logo:-rotate-3 group-hover/logo:scale-105">
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.42),transparent_38%)]" />
              <WandSparkles className="relative h-5 w-5" />
            </span>
            <span className="font-[family-name:var(--font-editorial)] text-[1.35rem] tracking-[-0.045em]">
              <span className="text-primary">VX</span>Studio
            </span>
          </a>

          <nav className="hidden items-center gap-1.5 lg:flex">
            {navLinks.map((link) => {
              const Icon = link.icon

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="group/nav relative inline-flex w-fit items-center gap-2 overflow-hidden rounded-full px-3 py-2 text-sm font-semibold tracking-[-0.02em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  <span className="absolute inset-0 rounded-full bg-primary/0 transition-colors duration-300 group-hover/nav:bg-primary/[0.07]" />
                  <Icon className="relative h-4 w-4 text-primary/75 transition-all duration-300 group-hover/nav:-translate-y-0.5 group-hover/nav:scale-110 group-hover/nav:text-primary" />
                  <span className="relative">{link.label}</span>
                  <span className="absolute bottom-1 left-3 right-3 h-px origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary via-[#ffbf00] to-chart-2 transition-transform duration-500 ease-out group-hover/nav:scale-x-100" />
                </a>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={toggleTheme}
              className="group/theme relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-border/70 bg-card/60 text-muted-foreground shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground hover:shadow-lg hover:shadow-primary/15"
              aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
            >
              <span className="absolute inset-0 bg-gradient-to-br from-primary/10 to-chart-2/10 opacity-0 transition-opacity duration-300 group-hover/theme:opacity-100" />
              {mounted &&
                (theme === "light" ? (
                  <Moon className="relative h-5 w-5" />
                ) : (
                  <Sun className="relative h-5 w-5 text-primary" />
                ))}
            </button>

            <Button
              asChild
              className="rounded-full px-5 font-bold tracking-[-0.02em] shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
            >
              <a href="#contato">Pedir orçamento</a>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-card/70 text-muted-foreground backdrop-blur-xl transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
              aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
            >
              {mounted && (theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5 text-primary" />)}
            </button>

            <button
              className="-mr-2 grid h-10 w-10 place-items-center rounded-full text-foreground transition-colors hover:bg-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border/60 py-4 lg:hidden">
            <nav className="grid gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group/nav relative inline-flex w-fit items-center gap-2 overflow-hidden rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4 text-primary/80 transition-transform group-hover/nav:-translate-y-0.5" />
                    <span>{link.label}</span>
                    <span className="absolute bottom-1 left-3 right-3 h-px origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary via-[#ffbf00] to-chart-2 transition-transform duration-500 ease-out group-hover/nav:scale-x-100" />
                  </a>
                )
              })}
              <Button asChild className="mt-3 rounded-full shadow-md shadow-primary/20">
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
