# Pack — Segunda seção cinematográfica com glass cards

## Objetivo
Evoluir a segunda seção `Páginas que não parecem templates` para uma experiência premium, futurista e interativa, sem transformar isso em imagem estática.

## Arquivos alterados
- `components/unique-pages.tsx`
- `app/globals.css`

## O que mudou
- Mantido o texto original da seção e dos seis cards.
- Adicionado fundo de malha de dados animada e sutil.
- Transformada a área da seção em um painel estilo monitor/OLED com vidro translúcido.
- Cards agora têm aparência glassmorphism, bordas luminosas, aura pulsante e profundidade.
- Adicionado parallax/tilt nos cards usando `react-parallax-tilt`, dependência que já existe no projeto.
- Ícones ganharam microanimações específicas:
  - Sparkles com rastro de cometa.
  - Eye com feixe de luz varrendo.
  - Smartphone com linhas internas fluidas.
  - Target com pulso.
  - Palette com brilho de passagem.
  - Ban com ponto orbital.
- Incluído fallback para `prefers-reduced-motion` e mobile, reduzindo animações pesadas.

## Como aplicar
Rode na raiz do projeto:

```bash
npm run pack:apply incoming_packs/vxstudio-pack-unique-pages-cinematic-glass.zip
npm run lint
npm run dev
```
