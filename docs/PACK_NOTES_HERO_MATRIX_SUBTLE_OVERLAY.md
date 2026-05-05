# Pack — Hero Matrix mais sutil com overlay e ajuste do mockup

## Objetivo

Ajustar o background Matrix do Hero para ficar mais sutil e não competir com o conteúdo, além de subir um pouco mais o mockup da direita.

## Arquivos alterados

- `components/hero.tsx`
- `components/matrix-background.tsx`
- `docs/DEVELOPMENT_RULES.md`
- `docs/PACK_NOTES_HERO_MATRIX_SUBTLE_OVERLAY.md`

## O que mudou

### Hero

- O `MatrixBackground` ficou um pouco mais opaco/sutil:

```tsx
<MatrixBackground className="-z-10" fontSize={18} speed={1.12} maxFps={42} density={1.04} opacity={0.42} />
```

- O mockup da direita subiu um pouco mais:

```tsx
className="relative flex justify-center opacity-100 lg:-mt-5 lg:justify-end xl:-mt-7"
```

### Matrix background

- Redução da intensidade visual do canvas.
- Inclusão de um overlay escuro suave acima da animação.
- Redução leve dos gradientes decorativos.
- Grid de fundo mais discreto.

## Resultado esperado

- O background continua vivo, mas sem roubar atenção do texto e dos CTAs.
- O card/mockup da direita fica um pouco mais alto, como você pediu.
- O Hero preserva fluidez sem pesar.

## Como aplicar

```bash
npm run pack:apply incoming_packs/vxstudio-hero-matrix-subtle-overlay-pack.zip
npm run build
```
