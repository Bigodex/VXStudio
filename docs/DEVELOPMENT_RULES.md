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
- Nenhuma âncora quebrada.
