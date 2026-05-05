# Pack: Hero Awwwards com GSAP, Tilt 3D e Glassmorphism

## Objetivo
Elevar o header e o hero da VXStudio para uma experiência premium, com foco em movimento, direção visual e sensação editorial.

## Alterações principais
- `components/header.tsx`
  - Header com entrada suave em GSAP.
  - Navegação com ícones e underline dinâmico, sem largura fixa.
  - Identidade visual mais premium com glassmorphism e logo com brilho.

- `components/hero.tsx`
  - Timeline GSAP para revelar título palavra por palavra de baixo para cima.
  - Subtítulo, botões, badges e mockup entram com delay controlado.
  - Botão principal com efeito magnético.
  - Mockup com `react-parallax-tilt` para profundidade 3D.
  - Cards de Lead, WhatsApp e métricas separados em camadas de parallax.
  - Cards com glassmorphism avançado: blur, borda translúcida e fundo em gradiente.
  - Glow animado em âmbar `#FFBF00` atrás do conteúdo.

- `app/layout.tsx`
  - Corpo migrado para fonte Geist via `next/font/google`.

- `app/globals.css`
  - Variável `--font-editorial` adicionada para títulos com fallback compatível.
  - Animações globais para glow ambiente e movimento de profundidade.

- `package.json`
  - Adicionadas dependências:
    - `gsap`
    - `react-parallax-tilt`

## Cuidados
1. Depois de aplicar o pack, rode `npm install` para instalar as novas dependências.
2. Rode `npm run build` antes de commitar.
3. Não misture novas seções neste pack. Ele é focado em header, hero e base visual necessária.
4. Se o projeto estiver usando `pnpm`, prefira continuar com um único gerenciador de pacotes.
5. Caso o build aponte erro de lockfile, rode `npm install` localmente e commite o lockfile atualizado.

## Próximo pack sugerido
Refatorar a seção de exemplos para criar a animação “troca de nicho”, mostrando landing pages para restaurante, clínica, barbearia, marca pessoal e produto digital.
