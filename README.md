# MuxDigitals — Agency Website

A dark, animation-rich single-page website for MuxDigitals, a software company. Built with a smooth-scroll, scroll-reveal design in the style of modern agency sites.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (scroll reveals, staggered text, count-up stats, drag slider)
- Lenis (smooth scrolling with anchor support)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Highlights

- Intro preloader that plays the animated MuxDigitals logo video (`public/MuxDigital.mp4`), with a skip button
- Navbar that hides on scroll down and reveals on scroll up
- Hero with word-by-word staggered headline and pulsing glow orb
- Infinite client logo marquee (pauses on hover)
- Count-up statistics and animated performance score rings triggered on scroll
- Draggable project showcase slider
- Auto-scrolling testimonial marquee
- Animated FAQ accordion
- Fully responsive (desktop / tablet / mobile)

## Structure

- `src/app/` — layout (fonts, metadata) and page entry
- `src/components/` — one component per section plus shared UI helpers in `ui.tsx`
- `public/` — logo assets and intro video
- `scripts/process-logo.mjs` — one-off script that generated the transparent `logo-mark.png`
# newmuxdigitals
