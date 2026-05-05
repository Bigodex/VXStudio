const footerLinks = [
  { label: "Início", href: "#" },
  { label: "Diferencial", href: "#diferencial" },
  { label: "O que fazemos", href: "#servicos" },
  { label: "Exemplos", href: "#exemplos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Investimento", href: "#investimento" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-14 bg-card border-t border-border/50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute bottom-0 left-1/4 w-[200px] h-[200px] bg-primary/5 rounded-full blur-[80px]" />
      <div className="absolute top-0 right-1/4 w-[150px] h-[150px] bg-accent/5 rounded-full blur-[60px]" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Logo & Tagline */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">VX</span>Studio
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Landing pages únicas para marcas que querem ser lembradas.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            {currentYear} VXStudio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
