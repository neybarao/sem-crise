# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Sem Crise** is a design system and high-fidelity prototype handoff package for a Brazilian crisis communications consultancy. This is a **design-to-development package**, not a running application. The project contains comprehensive design documentation, HTML/CSS prototypes, and brand guidelines intended for developers to implement in their chosen framework.

**Current Status:** Design phase complete. Ready for implementation.

## Architecture

### Project Structure

```
design_handoff/
├── site/index.html              # Complete single-page website prototype (reference)
├── preview/                     # Component library (isolated component examples)
│   ├── btn-primary.html         # Button states and variants
│   ├── form-inputs.html         # Form fields
│   ├── badge.html               # Tags/badges
│   ├── card.html                # Card patterns
│   ├── type-display.html        # Lora typeface specimens
│   ├── type-body.html           # Geist typeface specimens
│   └── colors-brand.html        # Color palette
├── fonts/                       # Variable typeface files
│   ├── Lora-VariableFont_wght.ttf
│   ├── Geist-VariableFont_wght.ttf
│   └── JetBrainsMono-VariableFont_wght.ttf (+ italic variants)
├── assets/                      # Brand logo files
│   ├── LOGO-dark.svg
│   └── LOGO-light.svg
├── colors_and_type.css          # Design token registry (CSS variables)
├── brand_guidelines.md          # Brand voice and visual rules
└── README.md                    # Implementation handoff guide
```

### Design System

The design is built on a **CSS variable token system** (`colors_and_type.css`):

**Core Colors:**
- `--color-navy: #0F1B2D` (primary dark background)
- `--color-off-white: #F4F1EA` (primary light background & text on dark)
- `--color-creme: #EEE8DE` (secondary light background)
- `--color-grafite: #0C0C0A` (text on light)
- `--color-laranja: #EB3F00` (accent, CTAs)
- `--color-mostarda: #E8AD3B` (secondary accent)
- `--color-dark-footer: #080F1A` (footer background)

**Typography:**
- `Lora` (variable weight) — Headlines, quotes, prices, numbers
- `Geist` (variable weight) — Body text, labels, UI
- `JetBrains Mono` (variable weight) — Technical content
- Scale: `xs` (11–12px) → `sm` (13–14px) → `base` (15–16px) → `lg` (18px) → `2xl` (22–24px) → Display (clamp 48–88px)

**Spacing:** 4px base unit scale: 4px → 8px → 12px → 16px → 24px → 32px → 48px → 56px → 72px → 80px → 96px → 104px

**Border Radius:** `--radius-sm: 4px`, `--radius-md: 8px`, `--radius-lg: 16px`, `--radius-btn: 9999px` (buttons/pills)

**Animations:** All transitions `200–250ms cubic-bezier(0.25, 0, 0.1, 1)`. Key animation states documented in `brand_guidelines.md`.

### Website Structure

Single-page site with 7 sections (see `site/index.html`):
1. **Nav** — Fixed header (68px), transparent → opaque on scroll (40px threshold)
2. **Hero** — Full viewport, dark background with decorative SVG motif
3. **Método** — 2-column layout explaining process (3 numbered steps)
4. **Produtos** — 3-column product card grid with pricing
5. **Isca/Gratuitos** — Lead magnet section with email capture
6. **Testimonial** — Centered quote
7. **Newsletter** — Email subscription form
8. **Footer** — Dark footer with links

**Key Interaction Patterns:**
- Nav links scroll smoothly to sections
- Buttons: hover (color change) → active (scale 0.97)
- Form inputs: focus state shows orange border
- Product cards: hover translateY(-3px) + orange border
- Forms: submit hides form, shows confirmation message

### Recommended Implementation Stack

The README recommends:
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (or CSS modules)
- **Fonts:** `next/font/local` for self-hosted variable fonts
- **Email:** MailerLite or Brevo API (free tier ≤1,000 contacts)
- **Payments:** Stripe, Hotmart, or Kiwify for product checkout
- **Analytics:** Google Analytics 4 + Meta Pixel
- **Hosting:** Vercel (native Next.js support)
- **Domain:** `semcrise.com.br`

## Implementation Notes

1. **Design Fidelity:** All mockups are pixel-perfect. Recreate using exact colors, typography scales, spacing, and border radius from tokens.

2. **Fonts:** Variable fonts allow weight adjustments. Lora used at 600 weight (headlines), Geist at 400–500 (body/UI), JetBrains Mono for technical content.

3. **Dark/Light Themes:** No dynamic theme switching in design. Use navy+off-white for dark sections, off-white/creme+grafite for light sections.

4. **Decorative SVG Motif:** Concentric circles (orange→transparent gradient) appear as:
   - 28×28px in nav logo
   - 680×680px hero decoration (right-aligned, low opacity)
   - Can be exported from `site/index.html` (inline SVG code present)

5. **Component Variants:** Reference the 7 preview HTML files in `preview/` for button states, form field styles, badge variants, and card layouts.

6. **Accessibility:** Basic accessibility present (semantic HTML, focus states). Ensure WCAG 2.1 AA compliance during implementation.

7. **Mobile Responsiveness:** Design shows desktop layout. Implementation must handle mobile/tablet breakpoints. Use clamp() functions for responsive typography (`clamp(48px, 6.5vw, 88px)` for hero H1).

8. **Integration Points:** Email forms require backend API integration (MailerLite/Brevo). Product cards require payment gateway setup (Stripe/Hotmart). Both have API documentation and free tiers.

## Before Implementing

1. Review `design_handoff/README.md` for detailed section specs, interaction behaviors, and implementation notes.
2. Review `design_handoff/brand_guidelines.md` for tone of voice, visual rules, and brand metaphor (ripple effect from crisis).
3. Open `design_handoff/site/index.html` in a browser to see the complete prototype in action.
4. Reference the 7 component preview files (`design_handoff/preview/*.html`) for isolated component documentation.
5. Extract design tokens from `design_handoff/colors_and_type.css` into your framework (Tailwind config, CSS modules, etc.).

## Key Files to Reference

| File | Purpose |
|------|---------|
| `design_handoff/README.md` | Complete implementation guide (sections, interactions, assets) |
| `design_handoff/brand_guidelines.md` | Brand voice, tone, visual identity rules |
| `design_handoff/site/index.html` | Full website prototype (reference implementation) |
| `design_handoff/colors_and_type.css` | All design tokens (colors, typography, spacing, shadows) |
| `design_handoff/preview/*.html` | Component storybook (7 files, one per component type) |
