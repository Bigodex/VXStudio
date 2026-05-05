# Regras de desenvolvimento — VXStudio

Este projeto deve evoluir por alterações pequenas, testáveis e fáceis de reverter. A regra principal é: **melhorar sem quebrar o que já funciona**.

## Antes de alterar

- Entenda o componente atual antes de reescrever.
- Preserve nomes de rotas, ids de seções e âncoras existentes.
- Não invente login, dashboard, SaaS, área do cliente, carrinho ou assinatura mensal.
- A VXStudio continua sendo uma landing page comercial para vender criação de landing pages.

## Design system

- Use os tokens globais de `app/globals.css` antes de criar cores soltas.
- Prefira `bg-primary`, `text-primary`, `bg-card`, `border-border`, `text-muted-foreground` e tokens derivados.
- Evite misturar paletas sem necessidade.
- Qualquer novo efeito precisa funcionar em tema claro e escuro.

## Animações e efeitos

- Animação deve guiar o olhar, não disputar atenção com o conteúdo.
- Mantenha transições sutis entre 200ms e 500ms.
- Evite efeitos pesados ou dependências novas sem necessidade.
- Sempre respeite `prefers-reduced-motion` em animações novas.

## Componentização

- Componentes grandes devem ser quebrados apenas quando isso realmente melhorar a manutenção.
- Evite duplicar arrays de dados ou estilos longos sem motivo.
- Use lucide-react para ícones e mantenha tamanho/estilo consistentes.

## Backgrounds animados

- Prefira Canvas 2D otimizado para efeitos contínuos de fundo.
- Evite animar dezenas de paths SVG simultaneamente no Hero.
- Limite FPS quando o efeito for apenas decorativo.
- Pause animações quando o elemento sair da viewport.
- Use `prefers-reduced-motion` para entregar uma alternativa estática.
- Em telas grandes, evite densidade alta demais; no Matrix Background, aumente `fontSize` antes de aumentar `maxFps`.
- Cores de background devem partir dos tokens do tema ou da paleta oficial da VXStudio, evitando verde Matrix puro quando isso quebrar a identidade visual.

## Packs

- Um pack deve conter apenas os arquivos necessários para a alteração.
- Não incluir `node_modules`, `.next`, `build`, `dist`, `packs`, `incoming_packs` ou backups.
- Depois de aplicar um pack, rodar:

```bash
npm install
npm run lint
npm run build
```

## Checklist antes de finalizar

- Tema claro ok.
- Tema escuro ok.
- Mobile ok.
- Header ok.
- Build ok.
- Nenhuma funcionalidade inventada.
- Nenhuma âncora quebrada.\n\n## Ajuste de fluidez do Matrix Background

Quando o Matrix Background parecer travado, prefira ajustar nesta ordem:

1. Aumentar `maxFps` moderadamente.
2. Aumentar `speed`.
3. Reduzir levemente `fontSize`.
4. Só depois aumentar `density`.

Evite resolver fluidez apenas colocando muitos elementos na tela, porque isso pode melhorar visualmente em máquina forte e piorar em notebook/celular mais fraco.

## Tema claro em backgrounds animados

No tema claro, backgrounds animados precisam de uma camada de leitura mais clara, não escura. Evite aplicar o mesmo overlay do dark mode no light mode, porque isso deixa a página acinzentada, reduz contraste do texto e cria sombra visual pesada.

Boa prática usada neste ajuste:

- Light mode: canvas mais discreto + overlay branco/creme.
- Dark mode: mantém overlay escuro e contraste alto.
- Texto secundário no light deve usar contraste real, como `text-neutral-700`, em vez de depender sempre de `text-muted-foreground`.
