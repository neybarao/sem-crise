# Sem Crise — Design System

**Company:** Sem Crise – Assessoria de Comunicação  
**Tagline:** *A crise é inevitável. O estrago, não.*  
**Type:** Brazilian crisis communications consultancy  
**Language:** Portuguese (BR)

## What is Sem Crise?

Sem Crise ("No Crisis") is a communications advisory firm specializing in crisis management and strategic communications. Their positioning is confident and direct: crises will happen — their job is to minimize the damage. The brand communicates authority, urgency, calm under pressure, and expertise.

## Sources Provided

- `uploads/LOGO-dark.svg` — Full-lockup logo on navy background
- `uploads/LOGO-light.svg` — Full-lockup logo on cream background
- Color names + display/body/mono font preferences provided by client

> ⚠️ **Color data issue:** The brief listed OFF-WHITE, GRAFITE, and MOSTARDA all as `#0F1B2D` (same as NAVY) — this appears to be a paste error. Values below are derived from the SVG source files. Please confirm the true hex values for GRAFITE and MOSTARDA.

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Authoritative but not cold.** Sem Crise speaks with the confidence of an expert who has seen it all before.
- **Concise and direct.** No filler. Every sentence earns its place.
- **Urgent without panic.** The tone is measured urgency — serious, not alarmist.
- **Brazilian Portuguese.** Copy uses PT-BR idioms and professional register.

### Casing
- Headlines: **Sentence case** (never ALL CAPS except for emphasis labels)
- Body: normal sentence casing
- Brand name always: **Sem Crise** (two capitalized words, no hyphen)

### Voice Perspective
- Speaks in **first-person plural** ("nós" / "nosso") when describing the firm
- Addresses client as **"você"** (informal but respectful)
- Avoids jargon; prefers clear, concrete language

### Copy Style
- Short, punchy taglines with contrast structure: *"X é inevitável. Y, não."*
- Rhetorical confidence: no hedging, no disclaimers
- No emoji. No decorative punctuation.
- Numbers and statistics used sparingly and only when impactful

### Example Copy Patterns
> *"A crise é inevitável. O estrago, não."*  
> *"Quando a crise chega, a comunicação define o resultado."*  
> *"Assessoria estratégica em comunicação de crise."*

---

## VISUAL FOUNDATIONS

### Color System
| Name | Hex | Usage |
|---|---|---|
| NAVY | `#0F1B2D` | Primary background (dark mode), text on light |
| OFF-WHITE / CREME | `#EEE8DE` | Primary background (light mode) |
| PARCHMENT | `#F4F1EA` | Text on dark backgrounds, warm near-white |
| GRAFITE | `#0C0C0A` | Near-black for body text on light bg |
| LARANJA INTENSO | `#EB3F00` | Accent — CTAs, highlights, the orange dot in logo |
| MOSTARDA | *(TBD — see caveat above)* | Secondary accent — assumed warm amber/yellow |

> **Key contrast pairs:** NAVY↔PARCHMENT (dark mode), CREME↔GRAFITE (light mode), LARANJA on either.

### Typography
- **Display:** Lora (serif) — used for headlines, pull quotes, brand voice moments. Evokes editorial authority.
- **Body/UI:** Geist (sans-serif) — clean, modern, functional. Used for body copy, UI labels, navigation.
- **Mono/Secondary:** JetBrains Mono — for data, timestamps, codes, technical content.
- Type scale: Large, confident display sizes. Body at 16–18px. Headers rarely small.

### Logo & Motif
- The logo features **three concentric circles** radiating from a central orange dot — a visual metaphor for crisis ripple effects.
- The circles use an orange-to-transparent gradient (top-to-bottom), grounding the ripple in the brand accent.
- Wordmark: custom calligraphic serif letters, all lowercase except stylized — confident but slightly humanist.
- Subheading "Assessoria de Comunicação" appears at 30% opacity below the main mark.
- Two official logo lockups: dark (navy bg) and light (cream bg).

### Backgrounds & Surfaces
- Two primary surfaces: **NAVY** (dark, primary) and **CREME** (light, warm)
- No gradients on backgrounds — flat, confident color blocks
- Subtle texture implied by warm off-whites (not flat pure white)
- Cards: slight border or shadow against background, no heavy drop shadows

### Imagery & Visual Style
- Expected: editorial photography — press conferences, boardrooms, crisis scenarios
- Color grading: **warm-neutral** tones, slightly desaturated, serious
- No playful illustration or infographics
- Photography would be treated with navy/cream color overlays when needed

### Spacing & Layout
- Generous whitespace — authority communicates through space
- Grid-based; left-aligned text preferred for body copy
- Section breaks use full-width color blocks (navy ↔ cream contrast)

### Borders & Corners
- Minimal border-radius: `2px` to `4px` — nearly sharp, not rounded
- No pill buttons. Rectangular or very slightly softened.
- Borders used sparingly — prefer space to divide rather than lines

### Animation
- Subtle and professional: fade-in on scroll, no bouncy or playful animations
- Easing: `cubic-bezier(0.25, 0, 0.1, 1)` — ease-out, calm
- Duration: 200–400ms

### Hover / Press States
- Hover: slight opacity reduction (0.8) or color darkening
- Active/press: scale(0.98) + darker color
- No glow effects

### Shadows & Elevation
- Shadows are subtle: `0 2px 8px rgba(15,27,45,0.12)` (navy-tinted)
- Cards lift slightly on hover: `0 4px 16px rgba(15,27,45,0.16)`

### Icons
- No proprietary icon font identified in provided materials
- Lucide Icons (CDN) recommended: clean stroke-based, 1.5px weight, matches brand austerity
- See ICONOGRAPHY section below

---

## ICONOGRAPHY

### Approach
No custom icon library was found in the provided materials. The brand aesthetic (clean, editorial, professional) aligns with **Lucide Icons** — a stroke-based open-source set with consistent 1.5px stroke weight and minimal ornamentation.

### Usage Guidelines
- Icon size: 20px (UI), 24px (feature), 32px+ (decorative)
- Stroke: 1.5px, matches brand weight
- Color: inherit from surrounding text or LARANJA INTENSO for emphasis
- Never filled icons — stroke only
- CDN: `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`

### Logo Assets
- `assets/LOGO-dark.svg` — Full lockup on navy
- `assets/LOGO-light.svg` — Full lockup on cream

---

## FILE INDEX

```
README.md                    ← This file
SKILL.md                     ← Agent skill descriptor
colors_and_type.css          ← CSS variables (colors, type, spacing)
assets/
  LOGO-dark.svg              ← Logo on navy background
  LOGO-light.svg             ← Logo on cream background
preview/
  colors-brand.html          ← Brand color swatches
  colors-semantic.html       ← Semantic color tokens
  type-display.html          ← Lora display type specimens
  type-body.html             ← Geist body type specimens
  type-mono.html             ← JetBrains Mono specimens
  type-scale.html            ← Full type scale
  spacing-tokens.html        ← Spacing + radius tokens
  shadows.html               ← Shadow/elevation system
  logo-dark.html             ← Logo dark lockup
  logo-light.html            ← Logo light lockup
  logo-motif.html            ← Concentric circles motif
  btn-primary.html           ← Primary button states
  btn-secondary.html         ← Secondary button states
  form-inputs.html           ← Form input components
  card.html                  ← Card component
  badge.html                 ← Badge / tag component
ui_kits/
  website/
    README.md
    index.html               ← Marketing website prototype
    Hero.jsx
    Nav.jsx
    Services.jsx
    Contact.jsx
```
