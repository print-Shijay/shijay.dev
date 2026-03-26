# Portfolio Project Plan

## Project Overview

- **Project Name:** Shijay Portfolio
- **Owner:** Ciejay (Marc Ciejay Macaraig)
- **Brand:** Shijay / MotoCoder
- **Motto:** Code Hard, Ride Free
- **Stack:** Next.js + Tailwind CSS
- **Type:** Single-page portfolio website
- **Goal:** Showcase freelance full-stack development work, skills, and projects to attract clients and employers

---

## Site Sections

The site is a single page. Each section is a separate component. Users scroll through all sections from top to bottom.

| Order | Section   | Component File         | Purpose                                      |
|-------|-----------|------------------------|----------------------------------------------|
| 1     | Navbar    | `Navbar.tsx`           | Logo, nav links, hire me button              |
| 2     | Hero      | `Hero.tsx`             | Headline, tagline, CTA buttons               |
| 3     | About     | `About.tsx`            | Short bio, photo, background info            |
| 4     | Skills    | `Skills.tsx`           | Tech stack grouped by category               |
| 5     | Projects  | `Projects.tsx`         | Featured projects with bento grid layout     |
| 6     | Contact   | `Contact.tsx`          | Email, social links, short message form      |
| 7     | Footer    | `Footer.tsx`           | Copyright, watermark                         |

---

## Special UI Features

These are key animated or interactive elements to build:

- **News Ticker** — amber horizontal scrolling bar above the hero. Shows short text items that loop infinitely. Built as a standalone `Ticker.tsx` component.
- **Logo Marquee** — auto-scrolling tech stack icons at the bottom of the hero section.
- **Scroll-based fade-in** — sections fade in as the user scrolls down. Use Intersection Observer API.
- **Pulsing availability badge** — small green dot in the hero badge showing "Available for freelance."

---

## Folder Structure

```
my-app/
├── app/
│   ├── layout.tsx          ← root layout, fonts, metadata
│   ├── page.tsx            ← imports all section components
│   └── globals.css         ← global styles and CSS variables
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
│   └── images/             ← profile photo, project screenshots
├── PROJECT_PLAN.md
├── DESIGN_SYSTEM.md
├── SKILLS_CONTENT.md
├── CODE_RULES.md
├── AGENTS.md
└── CLAUDE.md
```

---

## Pages

This is a **single-page app**. There is only one route: `/` (the home page). All sections live inside `app/page.tsx` as stacked components.

No sub-pages needed for now.

---

## Content To Prepare

Before building, prepare the following real content:

- [ ] Profile photo (place in `/public/images/profile.jpg`)
- [ ] Short bio (2-3 sentences about yourself)
- [ ] Project list (name, description, tech used, link or screenshot)
- [ ] Contact email and social links (GitHub, LinkedIn, Facebook)

---

## Build Order

Build one component at a time in this order:

1. `globals.css` — set up CSS variables and base styles
2. `layout.tsx` — load fonts and set metadata
3. `Navbar.tsx` — top navigation
4. `Ticker.tsx` — news ticker animation
5. `Hero.tsx` — main hero section with ticker and logo marquee
6. `About.tsx` — about section
7. `Skills.tsx` — skills section
8. `Projects.tsx` — projects bento grid
9. `Contact.tsx` — contact section
10. `Footer.tsx` — footer
11. `page.tsx` — assemble all components

---

## Deployment

- **Platform:** Vercel (free tier)
- **Command:** `npm run build` then connect GitHub repo to Vercel
- **Domain:** Custom domain optional (e.g. shijay.dev)
