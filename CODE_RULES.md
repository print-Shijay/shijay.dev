# Code Rules

This file defines how all code in this project must be written. The goal is to keep the code simple, readable, and easy to maintain. Avoid clever or advanced patterns. Write code that a junior developer can understand.

---

## General Philosophy

- **Simple over smart.** If two approaches work, always pick the simpler one.
- **One thing per file.** Each component does one job and one job only.
- **Name things clearly.** Variable and function names must describe exactly what they do.
- **No premature optimization.** Do not optimize code before it has a performance problem.
- **Read it out loud.** If you cannot explain a line of code in plain English, rewrite it.

---

## Project Language

- Use **TypeScript** for all files (`.tsx` for components, `.ts` for utilities)
- Do not use `any` as a type. Always define proper types or interfaces
- Keep type definitions simple — avoid deeply nested generics

---

## Component Rules

### One component per file

Each file exports one component. Do not put two components in the same file.

```tsx
// CORRECT
// Ticker.tsx
export default function Ticker() {
  return <div>...</div>
}

// WRONG — two components in one file
export function Ticker() { ... }
export function TickerItem() { ... }  // move this to its own file
```

### Use function components only

Do not use class components.

```tsx
// CORRECT
export default function Hero() {
  return <section>...</section>
}

// WRONG
class Hero extends React.Component { ... }
```

### Keep components short

If a component file is longer than 100 lines, it is doing too much. Split it into smaller components.

### Props must have types

Always define a TypeScript interface for component props.

```tsx
// CORRECT
interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  link: string
}

export default function ProjectCard({ title, description, techStack, link }: ProjectCardProps) {
  return <div>...</div>
}

// WRONG — no types defined
export default function ProjectCard({ title, description }) {
  return <div>...</div>
}
```

---

## Styling Rules

### Use Tailwind CSS for all styling

Write styles as Tailwind utility classes in the `className` prop. Do not write custom CSS in component files except for animations that Tailwind cannot do.

```tsx
// CORRECT
<button className="bg-amber-400 text-black rounded-full px-6 py-2.5 text-sm font-medium">
  Hire Me
</button>

// WRONG — inline styles for basic things
<button style={{ backgroundColor: '#EF9F27', borderRadius: '999px' }}>
  Hire Me
</button>
```

### Use CSS variables for brand colors

Custom brand colors are defined in `globals.css` as CSS variables. Use them with Tailwind's arbitrary value syntax or inline style only when needed.

```tsx
// Acceptable for brand colors
<div style={{ color: 'var(--color-amber)' }}>...</div>

// Or define them in Tailwind config and use as class
<div className="text-amber">...</div>
```

### Do not mix Tailwind and custom CSS on the same element

Pick one approach per element. Mixing both creates confusion.

---

## Data Rules

### Keep data out of components

Do not hardcode lists of items directly inside JSX. Put the data in a separate constant or file.

```tsx
// CORRECT — data lives outside JSX
const projects = [
  { title: "CropWise v2", description: "...", tech: ["Laravel", "React"] },
  { title: "SAGIP", description: "...", tech: ["Laravel", "Leaflet"] },
]

export default function Projects() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  )
}

// WRONG — data mixed into JSX
export default function Projects() {
  return (
    <div>
      <div>CropWise v2 — Laravel, React...</div>
      <div>SAGIP — Laravel, Leaflet...</div>
    </div>
  )
}
```

### Arrays need a `key` prop

Always add a `key` prop when mapping over arrays in JSX. Use a unique value like a name or ID — not the array index.

```tsx
// CORRECT
{skills.map((skill) => (
  <span key={skill.label}>{skill.label}</span>
))}

// WRONG — using index as key
{skills.map((skill, index) => (
  <span key={index}>{skill.label}</span>
))}
```

---

## Hooks Rules

### Only use simple hooks

You will mostly only need these hooks in this project:

| Hook           | Use for                                      |
|----------------|----------------------------------------------|
| `useState`     | Storing simple values like `true/false`      |
| `useEffect`    | Running code after the component mounts      |
| `useRef`       | Referencing a DOM element directly           |

Do not use `useReducer`, `useContext`, `useMemo`, or `useCallback` unless there is a specific and obvious need for them.

### Keep useEffect simple

Each `useEffect` should do one thing. If it is doing multiple unrelated things, split it into separate effects.

```tsx
// CORRECT — one job per effect
useEffect(() => {
  // only handles the scroll observer
  const observer = new IntersectionObserver(...)
  return () => observer.disconnect()
}, [])

// WRONG — two unrelated things in one effect
useEffect(() => {
  const observer = new IntersectionObserver(...)
  document.title = "Shijay Portfolio"  // unrelated
}, [])
```

---

## File and Folder Naming

| Type            | Convention       | Example              |
|-----------------|------------------|----------------------|
| Components      | PascalCase       | `Hero.tsx`           |
| Utility files   | camelCase        | `formatDate.ts`      |
| Data files      | camelCase        | `projectsData.ts`    |
| CSS files       | kebab-case       | `globals.css`        |
| Public assets   | kebab-case       | `profile-photo.jpg`  |

---

## Import Order

Always organize imports in this order with a blank line between groups:

```tsx
// 1. React and Next.js
import { useState, useEffect } from "react"
import Image from "next/image"

// 2. Third-party libraries
import { someLibrary } from "some-library"

// 3. Local components
import ProjectCard from "@/components/ProjectCard"

// 4. Data and types
import { projects } from "@/data/projectsData"
```

---

## Comments

Write comments to explain **why**, not **what**. The code itself shows what. The comment explains the reason behind a decision.

```tsx
// CORRECT — explains why
// Duplicate ticker items so the loop is seamless with no visible gap
const tickerItems = [...items, ...items]

// WRONG — restates what the code already says
// map over the items array
const result = items.map(...)
```

Do not leave commented-out code in the codebase. Delete it instead.

---

## What to Avoid

- `!important` in CSS — if you need it, your CSS is fighting itself
- Nested ternaries — use an `if` statement or a variable instead
- Functions longer than 20 lines — break them into smaller functions
- `console.log` left in final code — remove all debug logs before committing
- Anonymous arrow functions as component names — always name your components
- Deeply nested JSX — if there are more than 4 levels of nesting, extract a component

---

## Server vs Client Components (Next.js App Router)

By default, all components in Next.js App Router are **Server Components**. This is good for performance.

Only add `"use client"` at the top of a file when the component:

- Uses `useState` or `useEffect`
- Has event listeners like `onClick`
- Uses browser APIs like `window` or `document`

```tsx
// Add this only when needed
"use client"

import { useState } from "react"
```

Components like `Hero`, `Ticker`, and `Navbar` will need `"use client"` because they have animations and interactions.

Static components like `Footer` do not need it.
