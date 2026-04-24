# Handoff: Sem Crise — Design System + Site

## Overview

Este pacote contém o design system completo da **Sem Crise** (assessoria de comunicação de crise) e o protótipo do site institucional. O objetivo é permitir que um desenvolvedor implemente o site e o sistema de design em um ambiente de produção real.

## Sobre os arquivos de design

Os arquivos `.html` neste bundle são **referências de design criadas como protótipos** — não são código de produção para copiar diretamente. A tarefa é **recriar esses designs no ambiente e framework escolhido** (Next.js, Astro, etc.), usando seus padrões e bibliotecas estabelecidos.

## Fidelidade

**Alta fidelidade (hifi).** Os protótipos são mockups pixel-precisos com cores finais, tipografia, espaçamento e interações. O desenvolvedor deve recriar a UI com fidelidade usando o sistema de design documentado abaixo.

---

## Telas / Views

### 1. Site Institucional (`site/index.html`)

Página única (single-page) com scroll, 7 seções:

#### Nav
- **Posição:** `fixed`, `top: 0`, `z-index: 100`, altura `68px`, padding horizontal `56px`
- **Comportamento:** transparente no topo → `background: rgba(15,27,45,0.95)` + `backdrop-filter: blur(16px)` + borda inferior `1px solid rgba(244,241,234,0.08)` ao scroll (threshold: 40px)
- **Logo:** SVG dos círculos concêntricos (28×28) + texto "Sem Crise" em Lora 600 19px `#F4F1EA`
- **Links:** Geist 14px `rgba(244,241,234,0.65)` → `#F4F1EA` no hover
- **CTA:** botão pill `#EB3F00`, Geist 13px 500, padding `9px 22px`, `border-radius: 9999px`

#### Hero
- **Background:** `#0F1B2D`, altura mínima `100vh`
- **Padding:** `120px 56px 80px`
- **Eyebrow:** Geist 11px 500, `letter-spacing: 0.14em`, uppercase, `#EB3F00`
- **H1 linha 1:** Lora 600, `clamp(48px, 6.5vw, 88px)`, `#F4F1EA`, `line-height: 1.04`, `letter-spacing: -0.035em`
- **H1 linha 2:** mesma fonte, cor `rgba(244,241,234,0.32)` (efeito de contraste)
- **Subtítulo:** Geist `clamp(15px, 1.4vw, 18px)`, `rgba(244,241,234,0.58)`, `line-height: 1.7`, `max-width: 500px`
- **CTAs:** botão primário pill + botão ghost com borda `rgba(244,241,234,0.18)`
- **Motivo decorativo:** SVG 680×680px com 4 círculos concêntricos em gradiente laranja→transparente, posicionado `right: -40px`, `opacity: 0.13`
- **Stats strip:** 3 colunas, separadas por borda superior `rgba(244,241,234,0.07)`, números em Lora 600 32px `#F4F1EA`, labels em Geist 12px `rgba(244,241,234,0.4)`

#### Seção Método
- **Background:** `#F4F1EA`
- **Layout:** grid 2 colunas, gap `72px`, alinhado ao centro
- **Coluna esquerda:** texto + CTA
- **Coluna direita:** 3 steps numerados (01, 02, 03), separados por bordas `rgba(15,27,45,0.07)`
- **Número do step:** Lora 600 13px `#EB3F00`
- **Título do step:** Lora 600 18px `#0C0C0A`
- **Corpo do step:** Geist 14px `rgba(12,12,10,0.58)`, `line-height: 1.6`

#### Seção Produtos
- **Background:** `#0F1B2D`
- **Grid:** 3 colunas, gap `16px`
- **Cards:** `border-radius: 16px`, `background: rgba(244,241,234,0.04)`, `border: 1px solid rgba(244,241,234,0.08)`
- **Hover:** background `rgba(244,241,234,0.08)`, border `rgba(235,63,0,0.4)`, `translateY(-3px)`
- **Tags:** pill, 3 variantes — Entrada (mostarda), Essencial (laranja), Premium (neutro)
- **Título:** Lora 600 18px `#F4F1EA`
- **Corpo:** Geist 13px `rgba(244,241,234,0.5)`, `line-height: 1.65`
- **Preço:** Lora 600 22px `#F4F1EA`
- **Último card (Clube):** `grid-column: span 2`

#### Seção Gratuitos (Isca)
- **Background:** `#EEE8DE`
- **Layout:** grid 2 colunas, gap `80px`
- **Input de e-mail:** pill, `background: #F4F1EA`, borda focus `#EB3F00`
- **Cards de isca:** `border-radius: 12px`, `background: #F4F1EA`, ícone circular laranja, título 13px 600, descrição 12px

#### Depoimento
- **Background:** `#0F1B2D`
- **Quote:** Lora italic `clamp(20px, 2.4vw, 30px)` `#F4F1EA`, `max-width: 760px`, centrado
- **Cite:** Geist 13px 500 uppercase `rgba(244,241,234,0.4)`

#### Newsletter
- **Background:** `#F4F1EA`
- **Centrado:** `max-width: 560px`
- **Form:** input pill + botão primário

#### Footer
- **Background:** `#080F1A`
- **Layout:** flex, `justify-content: space-between`
- **Logo mini + links + copyright**

---

## Interações & Comportamento

| Elemento | Comportamento |
|---|---|
| Nav | Transparente → opaco ao scroll (threshold 40px) |
| Botão primário | Hover: `#C93500`; Active: `scale(0.97)` |
| Botão ghost | Hover: borda e texto mais opacos |
| Cards de produto | Hover: translateY(-3px) + border laranja |
| Form de isca | Submit: esconde form, mostra mensagem de confirmação |
| Form newsletter | Submit: esconde form, mostra mensagem de confirmação |
| Nav links | Scroll suave para as seções (`scroll-behavior: smooth`) |

**Transição padrão:** `200–250ms cubic-bezier(0.25, 0, 0.1, 1)`

---

## Design Tokens

### Cores

| Token | Valor | Uso |
|---|---|---|
| `--color-navy` | `#0F1B2D` | Background primário dark |
| `--color-off-white` | `#F4F1EA` | Background primário light, texto on-dark |
| `--color-creme` | `#EEE8DE` | Background secundário light |
| `--color-dark-footer` | `#080F1A` | Footer |
| `--color-grafite` | `#0C0C0A` | Texto primário light |
| `--color-laranja` | `#EB3F00` | Accent, CTAs, destaque |
| `--color-laranja-hover` | `#C93500` | Hover do laranja |
| `--color-mostarda` | `#E8AD3B` | Badge entrada/secundário |

### Tipografia

| Fonte | Uso | Formato |
|---|---|---|
| **Lora** | Headlines, quotes, preços, numeração | Variable TTF (incluído em `fonts/`) |
| **Geist** | Corpo, labels, navegação, UI | Variable TTF (incluído em `fonts/`) |
| **JetBrains Mono** | Dados técnicos, códigos, timestamps | Variable TTF (incluído em `fonts/`) |

### Escala de tipo

| Nome | px | Uso |
|---|---|---|
| `xs` | 11–12px | Labels uppercase, captions |
| `sm` | 13–14px | Corpo secundário, cards |
| `base` | 15–16px | Corpo principal |
| `lg` | 18px | Steps, títulos de card |
| `2xl` | 22–24px | Preços, sub-headlines |
| Display | `clamp(48px, 6.5vw, 88px)` | Hero H1 |

### Espaçamento

Escala base: `4px → 8px → 12px → 16px → 24px → 32px → 48px → 56px → 72px → 80px → 96px → 104px`

### Border Radius

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | `4px` | Pequenos elementos |
| `--radius-md` | `8px` | Elementos médios |
| `--radius-lg` | `16px` | Cards |
| `--radius-btn` | `9999px` | Botões, inputs, badges |

### Sombras

```
shadow-sm:  0 1px 3px rgba(15,27,45,0.10)
shadow-md:  0 2px 8px  rgba(15,27,45,0.12)
shadow-lg:  0 4px 16px rgba(15,27,45,0.16)
```

---

## Assets

| Arquivo | Descrição |
|---|---|
| `assets/LOGO-dark.svg` | Logo completo sobre fundo navy |
| `assets/LOGO-light.svg` | Logo completo sobre fundo creme |
| `fonts/Lora-VariableFont_wght.ttf` | Fonte display (normal) |
| `fonts/Lora-Italic-VariableFont_wght.ttf` | Fonte display (itálico) |
| `fonts/Geist-VariableFont_wght.ttf` | Fonte corpo |
| `fonts/JetBrainsMono-VariableFont_wght.ttf` | Fonte mono |
| `fonts/JetBrainsMono-Italic-VariableFont_wght.ttf` | Fonte mono (itálico) |

O **motivo dos círculos concêntricos** (logomarca reduzida, seções decorativas) é construído em SVG inline — ver `site/index.html` para o código. Gradiente: laranja `#EB3F00` → transparente, de cima para baixo.

---

## Arquivos de referência

| Arquivo | Descrição |
|---|---|
| `site/index.html` | **Site institucional completo** — referência principal |
| `colors_and_type.css` | Todos os tokens CSS documentados |
| `preview/colors-brand.html` | Paleta de cores |
| `preview/btn-primary.html` | Estados de botão |
| `preview/card.html` | Componente card |
| `preview/badge.html` | Componente badge/tag |
| `preview/form-inputs.html` | Inputs e formulários |
| `preview/type-display.html` | Specimens tipográficos Lora |
| `preview/type-body.html` | Specimens tipográficos Geist |
| `README.md` | Brand guidelines completos (voz, tom, identidade visual) |

---

## Notas para implementação

1. **Framework recomendado:** Next.js (App Router) com Tailwind CSS — ideal para o padrão de seções e funil de e-mail.
2. **E-mail capture:** integrar com MailerLite ou Brevo via API (ambas têm plano gratuito até 1.000 contatos).
3. **Produtos:** integrar checkout com Hotmart, Kiwify ou Stripe — os cards já têm estrutura de CTA por produto.
4. **Fontes:** todas as variáveis TTF estão incluídas — usar `next/font/local` ou `@font-face` CSS direto.
5. **SEO:** copiar os `<title>` e meta descriptions do protótipo; adicionar `og:image` com o logotipo.
6. **Analytics:** Google Analytics 4 + Meta Pixel (conforme plano de negócio).
7. **Domínio:** `semcrise.com.br` (registrar em Registro.br).
