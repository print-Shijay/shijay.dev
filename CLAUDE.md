# CLAUDE.md

This file gives Claude specific instructions for how to assist with the Shijay Portfolio project. Claude should read this file alongside `AGENTS.md` and `DESIGN_SYSTEM.md` before writing any code.

---

## About the Owner

- **Name:** Ciejay (preferred) — full name Marc Ciejay Macaraig
- **Role:** Freelance Full-Stack Developer and IT student
- **Location:** San Pablo, Laguna, Philippines
- **Brand:** Shijay
- **Primary stack:** Laravel + React + Inertia.js (day-to-day work)
- **This project stack:** Next.js + Tailwind CSS + TypeScript (portfolio only)
- **Experience level:** Intermediate developer — comfortable with Laravel and React, still learning advanced Next.js and TypeScript patterns

---

## How Claude Should Communicate

- Use simple, direct language — no unnecessary jargon
- If explaining a concept, follow this pattern: define it → explain what it does → give a short example
- Use phrases like "in short", "this is like", or "where" to simplify
- When writing code explanations, keep them short and focused
- Do not over-explain things Ciejay already knows (Laravel, React basics, Tailwind)
- Always explain Next.js-specific things (App Router, Server vs Client components) because this is a new stack for him

---

## How Claude Should Write Code

Follow all rules in `CODE_RULES.md`. Additionally:

- **Always show complete files.** Never show partial snippets unless asked. Ciejay should be able to copy-paste the entire file.
- **Build one component at a time.** Do not generate all components at once in one response.
- **Always state which file to create** and where it goes before showing the code.
- **After each component**, briefly explain the key decisions made — 2 to 3 bullet points max.
- **If a component needs a CSS animation**, define it in `globals.css`, not in the component file.
- **Prefer Tailwind classes** over custom CSS. Write custom CSS only when Tailwind cannot handle it.

---

## Build Order

Always follow this order when building components. Do not skip ahead.

1. `globals.css` — CSS variables, base styles, keyframe animations
2. `layout.tsx` — Google Fonts loading, HTML metadata
3. `Navbar.tsx` — sticky nav with logo and hire me button
4. `Ticker.tsx` — amber news ticker with infinite scroll animation
5. `Hero.tsx` — full hero section including ticker and logo marquee
6. `About.tsx` — about section
7. `Skills.tsx` — skills grouped by category
8. `Projects.tsx` — project cards in bento grid
9. `Contact.tsx` — contact section
10. `Footer.tsx` — footer with watermark
11. `page.tsx` — assemble all components

---

## Content Placeholders

Until Ciejay provides real content, use these placeholders:

| Content       | Placeholder                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| Name          | Ciejay                                                                                                     |
| Tagline       | "Full-Stack Dev. Code Hard, Ride Free."                                                                    |
| Bio           | "Freelance developer from San Pablo, Laguna, PH. I build web apps with Laravel, React, and a pinch of AI." |
| Email         | `hello@shijay.dev` (placeholder — update with real email)                                                  |
| GitHub        | `github.com/shijay` (placeholder — update)                                                                 |
| Profile photo | `/images/profile.jpg` (placeholder — add real photo)                                                       |
| Project 1     | CropWise v2 — Laravel + React + Inertia.js                                                                 |
| Project 2     | SAGIP — Laravel + React + Leaflet.js + Soketi                                                              |
| Project 3     | Blaze-Dispatch — Laravel + React + FastAPI + PyTorch                                                       |

---

## Project Data (Use in Components)

### Featured Projects

```ts
export const projects = [
  {
    title: "CropWise v2",
    description:
      "AI-powered crop recommendation web app. Suggests the best crops to plant based on soil data and economic factors.",
    tech: ["Laravel", "React", "Inertia.js", "PyTorch", "FastAPI"],
    type: "Full-Stack + ML",
    link: "#",
  },
  {
    title: "SAGIP",
    description:
      "Web-based incident report and response system for MDRRMO and BFP in San Pablo, Laguna. Features live map, GPS reporting, and auto-dispatch.",
    tech: ["Laravel", "React", "Leaflet.js", "Soketi", "WebSockets"],
    type: "Thesis Project",
    link: "#",
  },
  {
    title: "Blaze-Dispatch",
    description:
      "Smart fire incident response PWA for the Bureau of Fire Protection. Includes ML-powered alarm level prediction.",
    tech: ["Laravel", "React", "FastAPI", "PyTorch", "PWA"],
    type: "Thesis Project",
    link: "#",
  },
];
```

### Skills Data

See `SKILLS_CONTENT.md` for the full skills list. Import from there.

---

## Design Reminders for Claude

- Dark theme only — background is `#08080D`
- Amber (`#EF9F27`) is the primary accent — buttons, ticker bar, badge borders
- Teal (`#1D9E75`) is the secondary accent — code tags, tech labels
- Cream (`#F0EEE8`) is the primary text color
- Fonts: Playfair Display (headlines), DM Sans (body), DM Mono (ticker/code)
- Always reference `globals.css` CSS variables — never hardcode hex in components
- The news ticker animation is defined in `globals.css` as `@keyframes ticker`

---

## When Claude Is Unsure

- If a design decision is unclear, ask Ciejay before proceeding
- If a technical approach has two valid options, briefly show both and ask which to use
- Do not assume Ciejay wants advanced patterns — always default to the simpler option
- If something conflicts with `CODE_RULES.md`, follow `CODE_RULES.md`

---

## Watermark

The watermark for this project is **Shijay**. Include it in the footer as:

```tsx
<p>© {new Date().getFullYear()} Shijay. All rights reserved.</p>
```
