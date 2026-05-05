# Pack — Examples Niche Switcher

## Objetivo

Transformar a seção de exemplos da VXStudio em uma vitrine viva, reforçando a promessa: **páginas que não parecem templates**.

## Arquivos alterados

- `components/examples.tsx`

## O que mudou

- Substituição do grid estático por uma experiência interativa.
- Mockup central que troca automaticamente entre nichos.
- Nichos incluídos:
  - Restaurante
  - Barbearia
  - Clínica
  - Marca pessoal
  - Loja
  - Evento
- Botões de seleção manual por nicho.
- Cards internos com glassmorphism.
- Background com gradientes radiais e profundidade.
- Microinterações em cards, botões e ícones.
- Copy mais alinhada ao posicionamento premium da VXStudio.

## Regras de desenvolvimento preservadas

- Não foi criado login.
- Não foi criado dashboard.
- Não foi criado SaaS.
- Não foi criada área do cliente.
- Não foi criada funcionalidade fora da landing page.
- A alteração ficou isolada na seção de exemplos.

## Validação recomendada

Após aplicar o pack, rodar:

```bash
npm install
npm run build
npm run dev
```

Validar especialmente:

- seção `#exemplos` no desktop;
- seção `#exemplos` no mobile;
- troca automática de nicho;
- clique manual nos botões;
- legibilidade em tema claro e escuro;
- se nenhuma cor antiga conflita com o tema atual.
