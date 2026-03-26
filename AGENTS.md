# AGENTS.md

This file is read by AI coding agents (GitHub Copilot, Claude, Gemini, etc.) to understand the project structure, conventions, and rules before generating any code.

---

## Project Summary

- **Project:** Shijay Portfolio Website
- **Owner:** Ciejay (Marc Ciejay Macaraig) — Freelance Full-Stack Developer
- **Brand:** Shijay / MotoCoder ("Code Hard, Ride Free")
- **Framework:** Next.js (App Router) + Tailwind CSS + TypeScript
- **Type:** Single-page portfolio — scroll-based, no sub-routes

---

## Core Documentation

Before writing any code, read these files:

| File                | What it covers                                      |
|---------------------|-----------------------------------------------------|
| `PROJECT_PLAN.md`   | Sections, folder structure, build order             |
| `DESIGN_SYSTEM.md`  | Colors, fonts, spacing, animation rules             |
| `SKILLS_CONTENT.md` | All tech stack data, ticker items, marquee data     |
| `CODE_RULES.md`     | How to write simple, clean, readable code           |
| `CLAUDE.md`         | Claude-specific instructions                        |

---

## Tech Stack

```
Next.js (App Router)
TypeScript
Tailwind CSS v4
DM Sans (body font)
Playfair Display (display/serif font)
DM Mono (monospace/code font)
```

No additional libraries are installed unless explicitly requested by the owner.

---

## Folder Structure

```
my-app/
├── app/
│   ├── layout.tsx        ← root layout, fonts, metadata
│   ├── page.tsx          ← assembles all section components
│   └── globals.css       ← CSS variables and base styles
├── components/
│   ├── Navbar.tsx
│   ├── Ticker.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
│   └── images/
├── PROJECT_PLAN.md
├── DESIGN_SYSTEM.md
├── SKILLS_CONTENT.md
├── CODE_RULES.md
├── AGENTS.md
└── CLAUDE.md
```

---

## Key Coding Rules (Summary)

Full rules are in `CODE_RULES.md`. Here is the short version:

1. One component per file, always
2. Use function components only — no class components
3. Always define TypeScript interfaces for props
4. Use Tailwind classes for styling — no inline styles for basic things
5. Use CSS variables (defined in `globals.css`) for brand colors
6. Keep data arrays outside JSX — put them in constants above the return
7. Use `key` prop on all mapped elements — use name or ID, not index
8. Add `"use client"` only when the component uses state, effects, or browser APIs
9. Keep components under 100 lines — split if longer
10. Write comments to explain WHY, not WHAT

---

## Design Rules (Summary)

Full rules are in `DESIGN_SYSTEM.md`. Here is the short version:

- Background: `#08080D` (very dark, near black)
- Primary accent: `#EF9F27` (amber) — used for CTA buttons, ticker, highlights
- Secondary accent: `#1D9E75` (teal) — used for code tags, tech items
- Text: `#F0EEE8` (warm white/cream)
- Fonts: Playfair Display (headlines), DM Sans (body), DM Mono (code/ticker)
- No white backgrounds, no purple gradients, no glow effects, no heavy shadows
- All colors via CSS variables — never hardcode hex in component files

---

## What Agents Should NOT Do

- Do not install new npm packages without being asked
- Do not change the folder structure without being asked
- Do not use libraries like Framer Motion, GSAP, or Three.js unless explicitly requested
- Do not use `any` as a TypeScript type
- Do not write class-based React components
- Do not add pages or routes — this is a single-page app
- Do not use colors outside the defined design system
- Do not use fonts outside the three defined font families
- Do not add `console.log` statements in final code

---

## Generating Components

When asked to generate a component, always:

1. Start with `"use client"` if the component needs interactivity
2. Import types and data at the top, before the component
3. Define the props interface before the component function
4. Use Tailwind classes for all styles
5. Use CSS variables for brand colors
6. Keep the JSX clean and readable
7. Export the component as default at the bottom (or inline)

---

## Animations

- The news ticker uses a CSS `@keyframes ticker` animation — defined in `globals.css`
- The logo marquee uses the same keyframe with a different duration
- Scroll fade-in uses `IntersectionObserver` inside `useEffect`
- The pulsing availability badge uses a CSS `@keyframes pulse` animation
- Do not use JavaScript-based animation libraries for these effects
