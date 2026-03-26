# Design System

This file defines all visual rules for the Shijay portfolio website. Every component must follow these rules. Do not use colors, fonts, or spacing values that are not listed here.

---

## Theme

- **Mode:** Dark only
- **Style reference:** Setrex SaaS template (https://setrex-saas-template.framer.ai/)
- **Design feel:** Clean dark editorial — premium, minimal, developer-focused
- **Key inspiration elements:**
  - Amber news ticker scrolling above the hero
  - Full-screen dark hero with centered serif headline
  - Auto-scrolling logo/tech strip
  - Subtle grid background overlay on hero

---

## Colors

Define all colors as CSS custom properties inside `globals.css`. Never use raw hex values directly in component files. Always use the variable name.

```css
:root {
  --color-bg:          #08080D;   /* page background */
  --color-surface:     #1A1A24;   /* card and section backgrounds */
  --color-border:      #2C2C3A;   /* borders and dividers */

  --color-text:        #F0EEE8;   /* primary text, headings */
  --color-text-muted:  rgba(240, 238, 232, 0.5); /* secondary text, descriptions */
  --color-text-faint:  rgba(240, 238, 232, 0.25); /* labels, hints */

  --color-amber:       #EF9F27;   /* primary accent — buttons, ticker, highlights */
  --color-amber-bg:    rgba(239, 159, 39, 0.1);   /* amber backgrounds, badges */
  --color-amber-border: rgba(239, 159, 39, 0.3);  /* amber borders */
  --color-amber-text:  #1a0f00;   /* text on amber backgrounds */

  --color-teal:        #1D9E75;   /* secondary accent — code labels, tags */
  --color-teal-bg:     rgba(29, 158, 117, 0.1);
}
```

### Color Usage Rules

| Element                    | Variable to use              |
|----------------------------|------------------------------|
| Page background            | `--color-bg`                 |
| Cards, sections            | `--color-surface`            |
| Borders, dividers          | `--color-border`             |
| Headings, main text        | `--color-text`               |
| Descriptions, subtitles    | `--color-text-muted`         |
| Labels, hints, fine print  | `--color-text-faint`         |
| CTA buttons, ticker bar    | `--color-amber`              |
| Badges, tag backgrounds    | `--color-amber-bg`           |
| Text inside amber elements | `--color-amber-text`         |
| Tech tags, code highlights | `--color-teal`               |

---

## Typography

### Font Families

Load these from Google Fonts inside `layout.tsx` using `next/font/google`.

| Role             | Font Family        | Use for                                      |
|------------------|--------------------|----------------------------------------------|
| Display / Serif  | Playfair Display   | Hero headline, section titles                |
| Body / UI        | DM Sans            | Body text, buttons, nav links, descriptions  |
| Code / Mono      | DM Mono            | Ticker text, badge labels, tech tags         |

### Font Sizes

Use these exact sizes. Do not invent new sizes.

| Name         | Size                      | Use for                        |
|--------------|---------------------------|--------------------------------|
| Hero title   | `clamp(32px, 5vw, 60px)`  | Main hero heading              |
| Section title| `clamp(28px, 4vw, 44px)`  | About, Skills, Projects titles |
| Card title   | `18px`                    | Project card headings          |
| Body         | `15px`                    | Paragraph text                 |
| Small        | `13px`                    | Nav links, button text, labels |
| Tiny         | `11px`                    | Ticker text, badges, hints     |

### Font Weights

| Weight | Value | Use for                          |
|--------|-------|----------------------------------|
| Bold   | 700   | Hero title (Playfair Display)    |
| Black  | 900   | Hero title emphasis words        |
| Medium | 500   | Section titles, button text      |
| Regular| 400   | Body text, descriptions          |

### Line Height

| Context       | Line Height |
|---------------|-------------|
| Headlines     | `1.1`       |
| Body text     | `1.7`       |
| UI / labels   | `1.4`       |

---

## Spacing

Use multiples of 8px for all spacing. These are the standard values:

| Token  | Value  | Use for                             |
|--------|--------|-------------------------------------|
| `xs`   | `8px`  | Gap between small inline items      |
| `sm`   | `16px` | Internal component padding          |
| `md`   | `24px` | Gap between elements inside a section |
| `lg`   | `48px` | Padding inside sections             |
| `xl`   | `80px` | Vertical space between sections     |
| `2xl`  | `120px`| Top and bottom padding on hero      |

In Tailwind terms: use `p-8`, `p-12`, `py-20`, `gap-6`, `mb-12`, etc.

---

## Border Radius

| Element         | Value        | Tailwind class  |
|-----------------|--------------|-----------------|
| Buttons, badges | `999px`      | `rounded-full`  |
| Cards           | `12px`       | `rounded-xl`    |
| Tags            | `6px`        | `rounded-md`    |
| Input fields    | `8px`        | `rounded-lg`    |

---

## Borders

All borders use `0.5px` width and the `--color-border` variable.

```css
border: 0.5px solid var(--color-border);
```

For amber-bordered elements (like the availability badge):
```css
border: 0.5px solid var(--color-amber-border);
```

---

## Shadows

Do not use heavy drop shadows. Keep it flat. The only shadow allowed is a very soft ambient shadow on cards:

```css
box-shadow: 0 1px 20px rgba(0, 0, 0, 0.3);
```

---

## Background Grid Overlay

The hero section has a subtle grid pattern overlay to add depth. Add this as a `::before` pseudo-element or an absolutely positioned `div` inside the hero.

```css
background-image:
  linear-gradient(rgba(239, 159, 39, 0.04) 1px, transparent 1px),
  linear-gradient(90deg, rgba(239, 159, 39, 0.04) 1px, transparent 1px);
background-size: 48px 48px;
```

---

## Animations

### News Ticker (Marquee)

```css
@keyframes ticker {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.ticker-track {
  animation: ticker 22s linear infinite;
}
```

**Rule:** Always duplicate ticker content so the loop is seamless.

### Logo Marquee

Same as ticker but use `24s` duration and scroll in the same direction.

### Pulsing Dot (availability badge)

```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}
```

### Scroll Fade-In

Use `IntersectionObserver` in a `useEffect` to add a `visible` class when a section enters the viewport.

```css
.fade-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-section.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## Component-Specific Rules

### Navbar
- Sticky at top (`position: sticky; top: 0`)
- Background: `--color-bg` with `backdrop-filter: blur(12px)`
- Bottom border: `0.5px solid var(--color-border)`
- Logo uses Playfair Display. The accent letter uses `--color-amber`
- "Hire Me" button is amber, full rounded, small

### Ticker
- Full width, amber background (`--color-amber`)
- Text color: `--color-amber-text` (dark)
- Font: DM Mono, 11px–12px
- Separate items with a small filled dot

### Hero
- Full viewport height (`min-height: 100vh`)
- Content centered horizontally and vertically
- Availability badge sits above the headline
- Two CTA buttons: primary (amber) and secondary (transparent with border)
- Logo marquee strip at the very bottom of the hero

### Cards (Projects)
- Background: `--color-surface`
- Border: `0.5px solid var(--color-border)`
- Hover: slight border brightening and `translateY(-2px)` lift
- Radius: `rounded-xl`

### Buttons
- Primary: amber background, dark text, `rounded-full`, `px-6 py-2.5`
- Secondary: transparent, muted text, border, `rounded-full`, same size
- No uppercase text on buttons

---

## What NOT to Do

- Do not use white or light backgrounds anywhere
- Do not use Inter, Roboto, or system fonts
- Do not use purple gradients — this is amber and teal accented
- Do not use heavy shadows or glow effects
- Do not hardcode hex values in component files — always use CSS variables
- Do not use font sizes outside the defined scale
- Do not add new colors without updating `globals.css` and this file
