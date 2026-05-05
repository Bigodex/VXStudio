# Pack: Hero Background Beams otimizado

Este pack ajusta o background animado do Hero da VXStudio para manter o visual de linhas/beams, mas com menor custo de renderização.

## Problema corrigido

A primeira versão usava muitos paths SVG animados ao mesmo tempo. Em conjunto com outros efeitos do Hero, isso podia causar travamentos, queda de FPS e scroll menos fluido.

## Estratégia aplicada

- Redução dos paths estáticos de 20 para 8.
- Redução dos paths animados de 20 para 4.
- Remoção de `filter: drop-shadow()` nos paths animados, pois filtros em SVG animado são caros.
- Animações mais lentas e menos agressivas.
- Versão estática em telas menores e para usuários com `prefers-reduced-motion`.
- Uso de `contain: layout paint` no wrapper para isolar melhor o custo visual do componente.
- Manutenção das cores do tema da aplicação via CSS variables.

## Arquivos alterados

- `components/background-beams.tsx`
- `components/hero.tsx`
- `app/globals.css`
- `docs/PACK_NOTES_HERO_BACKGROUND_BEAMS.md`
- `docs/DEVELOPMENT_RULES.md`

## Boas práticas para backgrounds animados

1. Evite animar dezenas de elementos SVG simultaneamente.
2. Evite `filter`, `blur`, `drop-shadow` e `backdrop-filter` em elementos que animam em loop.
3. Prefira animações lentas e sutis para background.
4. Em mobile, use versão estática ou muito reduzida.
5. Sempre respeite `prefers-reduced-motion`.
6. Background deve complementar o conteúdo, não competir com ele.

## Validação recomendada

Após aplicar o pack:

```bash
npm run lint
npm run build
```

Para testar performance visualmente:

1. Abra o site no navegador.
2. Role a página algumas vezes.
3. Abra o DevTools > Performance.
4. Veja se há queda grande de FPS no Hero.

Se ainda pesar em máquinas mais fracas, a próxima etapa recomendada é deixar os beams totalmente estáticos e manter apenas os glows em CSS.
