# Sem Crise - Website Implementation

A fully-built Next.js website for **Sem Crise**, a crisis communications consultancy. This project implements the high-fidelity design system from `design_handoff/` using React, TypeScript, and Tailwind CSS.

## Quick Start

### Prerequisites
- Node.js 18+ and npm 9+

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

---

## Project Structure

```
/Users/neybarao/Local Sites/sem-crise/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with fonts and metadata
│   ├── page.tsx                 # Homepage (main entry point)
│   └── globals.css              # Global styles (Tailwind)
├── src/
│   ├── components/              # React components
│   │   ├── Button.tsx           # Primary & ghost button variants
│   │   ├── Card.tsx             # Interactive card component
│   │   ├── Badge.tsx            # Tag/badge variants (entrada, essencial, premium)
│   │   ├── Input.tsx            # Form input field
│   │   ├── Logo.tsx             # Logo with SVG motif
│   │   ├── Nav.tsx              # Fixed navigation (scroll-aware)
│   │   ├── Hero.tsx             # Hero section with stats
│   │   ├── Metodo.tsx           # 3-step methodology section
│   │   ├── Produtos.tsx         # Product/service cards with pricing
│   │   ├── Isca.tsx             # Lead magnet (free resources)
│   │   ├── Testimonial.tsx      # Customer quote
│   │   ├── Newsletter.tsx       # Email subscription form
│   │   ├── Footer.tsx           # Footer with links
│   │   └── index.ts             # Component exports
│   └── lib/
│       └── fonts.ts             # Local font configuration
├── public/
│   └── fonts/                   # Variable TrueType fonts
│       ├── Lora-VariableFont_wght.ttf
│       ├── Lora-Italic-VariableFont_wght.ttf
│       ├── Geist-VariableFont_wght.ttf
│       ├── JetBrainsMono-VariableFont_wght.ttf
│       └── JetBrainsMono-Italic-VariableFont_wght.ttf
├── design_handoff/              # Original design reference
│   ├── site/index.html          # Full prototype
│   ├── preview/                 # Component examples
│   ├── assets/                  # Logo files
│   ├── fonts/                   # Font sources
│   ├── colors_and_type.css      # Design tokens
│   ├── brand_guidelines.md      # Brand voice & rules
│   └── README.md                # Implementation guide
├── tailwind.config.js           # Tailwind configuration with design tokens
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Dependencies and scripts
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore rules
├── CLAUDE.md                    # Claude Code guidance
└── README.md                    # This file
```

---

## Design System

### Colors
All colors are defined as Tailwind CSS custom utilities:

| Token | Value | Usage |
|-------|-------|-------|
| `navy` | `#0F1B2D` | Primary dark background |
| `off-white` | `#F4F1EA` | Primary light background & text on dark |
| `creme` | `#EEE8DE` | Secondary light background |
| `grafite` | `#0C0C0A` | Text on light backgrounds |
| `laranja` | `#EB3F00` | Accent & CTAs |
| `laranja-hover` | `#C93500` | Hover state for orange |
| `mostarda` | `#E8AD3B` | Secondary accent |
| `dark-footer` | `#080F1A` | Footer background |

### Typography
- **Display:** Lora (serif) — Headlines, quotes, prices, numbers
- **Body:** Geist (sans-serif) — Body text, UI labels, navigation
- **Mono:** JetBrains Mono — Technical content

Font sizes use `clamp()` for fluid scaling:
- Hero H1: `clamp(48px, 6.5vw, 88px)`

### Spacing
Base unit: 4px
Scale: 1 (4px) → 2 (8px) → 3 (12px) → 4 (16px) → 6 (24px) → ... → 26 (104px)

### Animations
- Default duration: 250ms
- Default easing: `cubic-bezier(0.25, 0, 0.1, 1)` (smooth)
- Button active state: `scale(0.97)`

---

## Components

### Button
```tsx
import { Button } from '@/src/components';

<Button variant="primary" size="md">Solicitar proposta</Button>
<Button variant="ghost">Ver metodologia</Button>
```
**Variants:** `primary` (orange) | `ghost` (bordered)
**Sizes:** `sm` | `md` | `lg`

### Card
```tsx
<Card interactive>Content</Card>
```
**Props:** `interactive` (hover effects)

### Badge
```tsx
<Badge variant="entrada">Entrada</Badge>
<Badge variant="essencial">Essencial</Badge>
<Badge variant="premium">Premium</Badge>
```

### Input
```tsx
<Input
  type="email"
  placeholder="seu@email.com"
  variant="light"
  label="Email"
/>
```

### Logo
```tsx
<Logo size="md" variant="light" showText={true} />
```
**Sizes:** `sm` | `md` | `lg`
**Variants:** `light` | `dark`

---

## Sections & Features

### 1. Navigation
- Fixed header (68px height)
- Transparent at top, opaque on scroll (40px threshold)
- Backdrop blur effect when scrolled
- Smooth navigation to sections

### 2. Hero
- Full viewport height
- Decorative SVG motif (concentric circles with gradient)
- Statistics strip with 3 KPIs
- Two CTA buttons
- Responsive typography with `clamp()`

### 3. Método (Method)
- 2-column layout (text + steps)
- 3 numbered steps with descriptions
- Light background

### 4. Produtos (Products)
- 3-column grid of service cards
- Badge variants for tier classification
- Pricing and feature lists
- Premium card spans 2 columns
- Interactive hover effects

### 5. Isca (Lead Magnet)
- Email capture form
- 4 free resources preview
- Form submission handling (currently logs to console)
- Confirmation message on submit

### 6. Testimonial
- Centered quote
- Attribution

### 7. Newsletter
- Email subscription form
- Centered layout
- Confirmation message

### 8. Footer
- Logo and branding
- Footer navigation links
- Copyright notice

---

## Adding Features

### Email Integration (Isca & Newsletter)
Currently, form submissions are logged to console. To integrate with MailerLite or Brevo:

1. **Isca.tsx** (line 24-28):
   ```tsx
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     // Call your email service API
     // await mailerliteApi.subscribe(email);
     setSubmitted(true);
   };
   ```

2. **Newsletter.tsx** (line 12-18):
   Same pattern as Isca component.

### API Integration Example
```tsx
// src/lib/mailerlite.ts
export async function subscribeEmail(email: string) {
  const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
  return response.json();
}
```

### Product Checkout Integration
Products section has "Consultar" buttons ready for checkout integration (Stripe, Hotmart, Kiwify).

Update `Produtos.tsx` line 95:
```tsx
<Button
  variant="primary"
  size="sm"
  onClick={() => redirectToCheckout(product.id)}
>
  Consultar
</Button>
```

---

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

Environment variables:
```env
NEXT_PUBLIC_MAILERLITE_API_KEY=your_key
NEXT_PUBLIC_GA_ID=your_ga_id
```

### Other Platforms
- **Netlify:** Works with static export or serverless functions
- **AWS Amplify:** Native Next.js support
- **Docker:** Create `Dockerfile` and deploy to any container registry

---

## Performance

- **Bundle size:** ~105 KB (First Load JS)
- **Static generation:** All pages pre-rendered at build time
- **Optimized fonts:** Variable fonts reduce font files by 60%
- **Image optimization:** Ready for `next/image` integration

---

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Focus states with orange outline
- Keyboard navigation support
- Sufficient color contrast (WCAG AA)

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

---

## Environment Variables

`.env.local` (optional):
```env
NEXT_PUBLIC_SITE_URL=https://semcrise.com.br
NEXT_PUBLIC_ANALYTICS_ID=
MAILERLITE_API_KEY=
```

---

## Troubleshooting

### Fonts not loading
- Ensure fonts are in `public/fonts/` (already included)
- Check browser DevTools → Network tab for font requests

### Build errors
```bash
npm run build
```
Check for TypeScript errors: `npm run lint`

### Slow dev server
Clear cache and node_modules:
```bash
rm -rf node_modules .next package-lock.json
npm install
```

---

## Next Steps

1. **Email integration:** Connect MailerLite or Brevo API
2. **Analytics:** Add Google Analytics 4 and Meta Pixel
3. **Domain:** Register `semcrise.com.br` and point DNS
4. **CMS (optional):** Add Contentful or Sanity for dynamic content
5. **Testing:** Add Playwright or Cypress for end-to-end tests
6. **Monitoring:** Set up Sentry for error tracking

---

## References

- **Design System:** See `design_handoff/README.md` and `design_handoff/brand_guidelines.md`
- **Component Examples:** Open `design_handoff/preview/*.html` in browser
- **Full Prototype:** Open `design_handoff/site/index.html` for reference

---

## Support

For questions about the codebase, refer to:
- `CLAUDE.md` — Claude Code guidance
- `design_handoff/README.md` — Implementation specifications
- TypeScript types in component files for API documentation

---

**Status:** ✅ Ready for development and integration
**Last Updated:** 2026-04-24
