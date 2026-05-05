# Pack — Hero Matrix Background mais fluido

## Objetivo

Ajustar o background Matrix do Hero para parecer mais vivo e fluido, corrigindo a sensação de travamento por baixa densidade e baixa velocidade visual.

## Arquivos alterados

- `components/hero.tsx`
- `components/matrix-background.tsx`
- `docs/DEVELOPMENT_RULES.md`
- `docs/PACK_NOTES_HERO_MATRIX_BACKGROUND_FLUID.md`

## O que mudou

No Hero, a chamada ficou assim:

```tsx
<MatrixBackground className="-z-10" fontSize={18} speed={1.18} maxFps={45} density={1.08} opacity={0.56} />
```

Isso aumenta:

- Quantidade de colunas.
- Velocidade de queda.
- FPS máximo.
- Presença visual do efeito.

## Performance mantida

Mesmo mais vivo, o componente mantém:

- Canvas 2D.
- `devicePixelRatio` limitado a `1.35`.
- `maxFps` limitado internamente.
- Pausa quando o Hero sai da viewport.
- Respeito a `prefers-reduced-motion`.
- Sem `shadowBlur` por caractere.

## Tema VXStudio

O verde Matrix original não foi usado. As cores foram adaptadas para âmbar/dourado usando a identidade da página e os tokens globais.

## Como aplicar

```bash
npm run pack:apply incoming_packs/vxstudio-hero-matrix-background-fluid-pack.zip
npm run build
```
