# Skills Content

This file defines all skills and tech stack items to display in the Skills section. Update this file when your stack changes. The `Skills.tsx` component reads from this data.

---

## Skill Categories

Skills are grouped into categories. Each category is displayed as a labeled group with tags inside.

---

### Frontend

| Skill        | Display Label | Level      |
| ------------ | ------------- | ---------- |
| React        | React.js      | Expert     |
| Next.js      | Next.js       | Proficient |
| Inertia.js   | Inertia.js    | Expert     |
| Tailwind CSS | Tailwind CSS  | Expert     |
| HTML / CSS   | HTML & CSS    | Expert     |
| JavaScript   | JavaScript    | Expert     |
| TypeScript   | TypeScript    | Proficient |

---

### Backend

| Skill      | Display Label         | Level      |
| ---------- | --------------------- | ---------- |
| Laravel    | Laravel               | Expert     |
| PHP        | PHP                   | Expert     |
| FastAPI    | FastAPI               | Proficient |
| Python     | Python                | Proficient |
| REST APIs  | REST APIs             | Expert     |
| WebSockets | Laravel Echo + Soketi | Proficient |

---

### Database

| Skill        | Display Label | Level      |
| ------------ | ------------- | ---------- |
| MySQL        | MySQL         | Expert     |
| SQLite       | SQLite        | Proficient |
| Eloquent ORM | Eloquent ORM  | Expert     |

---

### AI / ML

| Skill        | Display Label         | Level      |
| ------------ | --------------------- | ---------- |
| PyTorch      | PyTorch               | Learning   |
| Scikit-learn | Scikit-learn          | Learning   |
| FastAPI ML   | FastAPI (ML API)      | Proficient |
| ML Models    | Classification Models | Proficient |

---

### DevOps & Tools

| Skill          | Display Label   | Level      |
| -------------- | --------------- | ---------- |
| Docker         | Docker          | Proficient |
| Azure          | Microsoft Azure | Proficient |
| Coolify        | Coolify         | Proficient |
| GitHub         | GitHub          | Expert     |
| GitHub Actions | GitHub Actions  | Learning   |
| Nixpacks       | Nixpacks        | Proficient |
| Termius        | SSH / Termius   | Proficient |

---

### Mobile & Other

| Skill      | Display Label        | Level      |
| ---------- | -------------------- | ---------- |
| PWA        | Progressive Web Apps | Proficient |
| Leaflet.js | Leaflet.js Maps      | Proficient |
| Arduino    | Arduino              | Familiar   |
| Android    | Android (Java)       | Familiar   |

---

## Skill Levels

Use these four levels only. Each level gets a different visual treatment in the component.

| Level      | Meaning                                     | Color suggestion        |
| ---------- | ------------------------------------------- | ----------------------- |
| Expert     | Used daily, fully comfortable               | Amber (`--color-amber`) |
| Proficient | Used in real projects, confident            | Teal (`--color-teal`)   |
| Learning   | Actively studying or using in side projects | Muted text with border  |
| Familiar   | Used before, can pick up quickly            | Faint text              |

---

## Tech Stack Marquee (Hero Section)

These are the items shown in the scrolling logo strip at the bottom of the hero. Keep this list short and focused on primary tools.

```js
const stackMarquee = [
  { label: "Laravel", initial: "L", color: "#FF2D20" },
  { label: "React", initial: "R", color: "#61DAFB" },
  { label: "Next.js", initial: "N", color: "#F0EEE8" },
  { label: "Tailwind", initial: "T", color: "#38BDF8" },
  { label: "Python", initial: "P", color: "#FFD43B" },
  { label: "Azure", initial: "A", color: "#0078D4" },
  { label: "Docker", initial: "D", color: "#2496ED" },
  { label: "GitHub", initial: "G", color: "#F0EEE8" },
  { label: "FastAPI", initial: "F", color: "#1D9E75" },
  { label: "MySQL", initial: "M", color: "#4479A1" },
];
```

---

## News Ticker Items (Hero Ticker)

These are the scrolling text items in the amber news ticker above the hero.

```js
const tickerItems = [
  "Laravel + React + Inertia.js",
  "Freelance Full-Stack Developer",
  "Next.js + Tailwind CSS",
  "FastAPI + PyTorch ML",
  "Azure + Coolify DevOps",
  "Available for Projects",
  "Code Hard, Ride Free — MotoCoder",
  "Based in San Pablo, Laguna, PH",
];
```

---

## Notes

- Only list skills you have actually used in a real project or study
- Do not list a skill just because you have heard of it
- Update the `Level` when your proficiency improves
- The component should display `Expert` and `Proficient` skills prominently, and `Learning` / `Familiar` in a secondary style
