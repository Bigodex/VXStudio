# Pack — Hero com Matrix Background otimizado

## Objetivo

Trocar o background animado atual do Hero por um efeito estilo Matrix/código caindo, adaptado ao tema visual da VXStudio e otimizado para não travar a página.

## Arquivos alterados

- `components/hero.tsx`
- `components/matrix-background.tsx`
- `docs/DEVELOPMENT_RULES.md`
- `docs/PACK_NOTES_HERO_MATRIX_BACKGROUND.md`

## O que mudou

### `components/matrix-background.tsx`

Novo componente client-side em Canvas 2D para renderizar o efeito de caracteres caindo.

Boas práticas aplicadas:

- Sem dependência nova.
- Sem `framer-motion`.
- Sem SVG com muitos paths animados.
- Canvas com `devicePixelRatio` limitado a `1.5` para reduzir custo em telas de alta densidade.
- FPS limitado por padrão para evitar consumo desnecessário.
- Quantidade de colunas reduzida usando espaçamento maior que o tamanho da fonte.
- Animação pausada quando o Hero sai da viewport via `IntersectionObserver`.
- Animação respeita aba inativa via `visibilitychange`.
- `prefers-reduced-motion` renderiza apenas uma prévia estática.
- Cores adaptadas para o tema âmbar/dourado da VXStudio.

### `components/hero.tsx`

- Remove o background anterior baseado em múltiplos gradientes/glows animados.
- Adiciona `MatrixBackground` atrás do conteúdo do Hero.
- Mantém o conteúdo, botões, card flutuante, tilt e copy atuais.
- Remove imports não usados de ícones que estavam gerando warnings no lint.

## Performance

O efeito Matrix original desenhava uma coluna para praticamente cada largura de caractere e rodava em todo frame livre do navegador. Para a landing page, isso pode pesar junto com GSAP, tilt, glassmorphism, sombras e blur.

Nesta versão, o efeito foi ajustado para landing page:

- `fontSize={24}` no Hero para diminuir densidade.
- `speed={0.54}` para movimento mais suave.
- `maxFps={28}` para reduzir consumo sem parecer travado.
- Sem `shadowBlur` em cada caractere, porque isso pesa bastante no Canvas.

## Como aplicar

Coloque o zip em `incoming_packs` e rode:

```bash
npm run pack:apply incoming_packs/vxstudio-hero-matrix-background-pack.zip
```

Depois valide:

```bash
npm run build
```

Se o ESLint estiver configurado no projeto:

```bash
npm run lint
```

## Ajustes rápidos

No `components/hero.tsx`, o componente está assim:

```tsx
<MatrixBackground className="-z-10" fontSize={24} speed={0.54} maxFps={28} />
```

Para mais performance:

```tsx
<MatrixBackground className="-z-10" fontSize={28} speed={0.45} maxFps={24} />
```

Para mais presença visual:

```tsx
<MatrixBackground className="-z-10" fontSize={20} speed={0.62} maxFps={30} />
```

Evite passar `fontSize` menor que `18` no Hero, porque aumenta muito a quantidade de colunas.
