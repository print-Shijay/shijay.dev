# Hero Background Design

This file documents the hero section background design for the Shijay Portfolio. It is an addendum to `DESIGN_SYSTEM.md`. Follow this file specifically when building or modifying `Hero.tsx` and `globals.css` animations.

---

## Background Concept

**Style:** Deep space — planet glow / galactic horizon
**Inspiration:** Galactic-04 style background (dark cosmic scene with glowing planetary arc)
**Implementation:** Pure CSS + HTML Canvas — no images, no external assets, no libraries

The background is built from multiple stacked layers. Each layer is an absolutely positioned element inside a `.hero-bg` wrapper div. The hero content sits above all layers using `position: relative; z-index: 10`.

---

## Layer Stack (Bottom to Top)

Build these layers in this exact order inside `.hero-bg`. Order matters — later layers appear on top.

### Layer 1 — Base Background

```css
.hero-bg {
  position: absolute;
  inset: 0;
  background: #04040A;
  overflow: hidden;
}
```

This is the deepest base. Near-black with a very slight blue tint — not pure `#000000`.

---

### Layer 2 — Twinkling Stars (Canvas)

```tsx
<canvas id="stars" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
```

Draw stars using the HTML Canvas API inside a `useEffect`. Stars only appear in the top 75% of the hero — the bottom is covered by the planet glow.

```ts
const stars = Array.from({ length: 120 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height * 0.75,
  r: Math.random() * 1.2 + 0.2,
  opacity: Math.random() * 0.6 + 0.1,
  speed: Math.random() * 0.004 + 0.002,
}))
```

Animate each star with a sine wave to create a twinkling effect:

```ts
const twinkle = star.opacity * (0.7 + 0.3 * Math.sin(time * star.speed * 60 + star.x))
ctx.fillStyle = `rgba(200, 220, 255, ${twinkle})`
```

Use `requestAnimationFrame` for the animation loop. Clean it up in the `useEffect` return.

```ts
useEffect(() => {
  const canvas = canvasRef.current
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  let animId: number
  let t = 0

  const stars = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height * 0.75,
    r: Math.random() * 1.2 + 0.2,
    o: Math.random() * 0.6 + 0.1,
    speed: Math.random() * 0.004 + 0.002,
  }))

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    t += 0.016
    stars.forEach((s) => {
      const tw = s.o * (0.7 + 0.3 * Math.sin(t * s.speed * 60 + s.x))
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(200, 220, 255, ${tw})`
      ctx.fill()
    })
    animId = requestAnimationFrame(draw)
  }

  draw()
  return () => cancelAnimationFrame(animId)
}, [])
```

---

### Layer 3 — Planet Body

A large circle positioned below the bottom edge of the hero. Only the top arc is visible.

```css
.planet-glow {
  position: absolute;
  bottom: -180px;
  left: 50%;
  transform: translateX(-50%);
  width: 900px;
  height: 900px;
  border-radius: 50%;
  background: radial-gradient(ellipse at 50% 38%,
    #0a1f3d 0%,
    #071428 25%,
    #040c1c 55%,
    transparent 70%
  );
  box-shadow:
    0 0 120px 40px rgba(29, 100, 200, 0.18),
    0 0 60px 20px rgba(29, 80, 180, 0.12),
    inset 0 30px 80px rgba(100, 160, 255, 0.08);
}
```

---

### Layer 4 — Planet Edge Arc

A transparent circle with a thin blue border that defines the planet's edge.

```css
.planet-arc {
  position: absolute;
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 900px;
  height: 900px;
  border-radius: 50%;
  border: 1.5px solid rgba(80, 140, 255, 0.15);
  background: transparent;
}
```

---

### Layer 5 — Horizon Atmospheric Glow

A soft blue gradient rising from the bottom, simulating atmosphere.

```css
.horizon-glow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 220px;
  background: linear-gradient(
    to top,
    rgba(20, 80, 200, 0.22) 0%,
    rgba(10, 50, 150, 0.12) 40%,
    transparent 100%
  );
}
```

---

### Layer 6 — Horizon Line

The brightest part of the scene. A thin glowing line mimicking sunlight hitting the planet's edge.

```css
.horizon-line {
  position: absolute;
  bottom: 108px;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 2px;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(120, 180, 255, 0.5) 35%,
    rgba(200, 230, 255, 0.9) 50%,
    rgba(120, 180, 255, 0.5) 65%,
    transparent 100%
  );
  filter: blur(1px);
}
```

---

### Layer 7 — Horizon Bloom

A soft blurred glow centered on the brightest point of the horizon line.

```css
.horizon-bloom {
  position: absolute;
  bottom: 88px;
  left: 50%;
  transform: translateX(-50%);
  width: 380px;
  height: 60px;
  background: radial-gradient(ellipse at center,
    rgba(140, 190, 255, 0.28) 0%,
    rgba(80, 140, 255, 0.1) 50%,
    transparent 80%
  );
  filter: blur(8px);
}
```

---

### Layer 8 — Amber Grid Overlay

A very subtle grid that adds depth to the hero surface. Same grid defined in `DESIGN_SYSTEM.md`.

```css
.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(239, 159, 39, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(239, 159, 39, 0.025) 1px, transparent 1px);
  background-size: 48px 48px;
}
```

---

### Layer 9 — Edge Vignette

Darkens the corners and edges to keep the viewer's focus on the center content.

```css
.vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 0%,
    transparent 50%,
    rgba(4, 4, 10, 0.7) 100%
  );
}
```

---

## Hero Section Full CSS Class List

Add all of the above classes to `globals.css`. Do not define them inside `Hero.tsx`.

```
.hero-bg
.planet-glow
.planet-arc
.horizon-glow
.horizon-line
.horizon-bloom
.grid-overlay
.vignette
```

---

## Hero.tsx Structure

```tsx
"use client"

import { useEffect, useRef } from "react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // star animation — see Layer 2 above
  }, [])

  return (
    <section className="hero-section">

      {/* Background layers */}
      <div className="hero-bg">
        <canvas ref={canvasRef} className="hero-stars" />
        <div className="planet-glow" />
        <div className="planet-arc" />
        <div className="horizon-glow" />
        <div className="horizon-line" />
        <div className="horizon-bloom" />
        <div className="grid-overlay" />
        <div className="vignette" />
      </div>

      {/* Hero content — always z-index above bg */}
      <div className="hero-content">
        {/* badge, title, subtitle, CTAs */}
      </div>

      {/* Logo marquee strip */}
      <div className="logo-strip">
        {/* scrolling tech stack */}
      </div>

    </section>
  )
}
```

---

## globals.css — Hero Section Base

```css
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.hero-stars {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hero-content {
  position: relative;
  z-index: 10;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 32px 100px;
  text-align: center;
}
```

---

## Tuning Guide

Use these values to adjust the look without breaking the overall design.

| What to change            | Property to edit                          | Effect                                    |
|---------------------------|-------------------------------------------|-------------------------------------------|
| Planet size               | `width` and `height` on `.planet-glow`   | Larger = more of the planet is visible    |
| Planet vertical position  | `bottom` on `.planet-glow`               | Less negative = planet rises higher       |
| Blue glow intensity       | `box-shadow` opacity on `.planet-glow`   | Higher = stronger blue outer glow         |
| Horizon brightness        | rgba alpha on `.horizon-line` center     | Higher = brighter glowing line            |
| Horizon bloom size        | `width` on `.horizon-bloom`              | Wider = glow spreads more horizontally    |
| Star count                | Array length in `useEffect`              | More stars = denser sky                   |
| Star brightness           | Base `opacity` range in star data        | Higher max = brighter individual stars    |
| Grid visibility           | rgba alpha in `.grid-overlay`            | Higher = more visible grid lines          |
| Vignette strength         | rgba alpha in `.vignette`                | Higher = darker edges                     |

---

## What NOT to Change

- Do not change the base background from `#04040A` — lighter values kill the space feel
- Do not use warm colors (orange, red) for the planet — keep it cool blue
- Do not increase `filter: blur()` beyond `10px` on horizon layers — it gets muddy
- Do not add more than 150 stars — performance drops on mobile
- Do not use `position: fixed` on any background layer — it breaks scroll behavior
