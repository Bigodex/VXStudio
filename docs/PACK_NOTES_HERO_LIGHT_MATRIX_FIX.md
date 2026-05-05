# Pack — Correção do Hero Matrix no tema claro

## Objetivo

Corrigir o visual do Hero no tema claro sem alterar a versão dark, que já ficou boa.

## Problema identificado

O light mode estava usando uma camada escura por cima do Matrix. Isso deixava o Hero acinzentado, criava uma sombra visual pesada e fazia o subtítulo perder contraste.

## Arquivos alterados

- `components/hero.tsx`
- `components/matrix-background.tsx`
- `docs/DEVELOPMENT_RULES.md`
- `docs/PACK_NOTES_HERO_LIGHT_MATRIX_FIX.md`

## O que mudou

### `components/matrix-background.tsx`

- O canvas agora tem opacidade diferente para light e dark.
- No light mode, o Matrix fica bem mais sutil.
- No light mode, o overlay escuro foi substituído por um overlay branco/creme.
- No dark mode, a estrutura visual anterior foi preservada.
- O vignette final agora também tem versão específica para light/dark.

### `components/hero.tsx`

- O subtítulo ganhou mais contraste no light mode:
  - `text-neutral-700`
  - mantendo `dark:text-muted-foreground`

## Intenção visual

- Light mode: limpo, claro, premium, com Matrix discreto no fundo.
- Dark mode: mantém o visual atual forte e elegante.

## Como aplicar

```bash
npm run pack:apply incoming_packs/vxstudio-hero-light-matrix-fix-pack.zip
npm run build
```
