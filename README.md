# Gundam Project 2

An interactive Mobile Suit Gundam character selector built with Next.js 16, React 19, and TypeScript. Pick a character to load their video scene with smooth animated transitions.

## Features

- **Character selection** — choose between Gundam, Zaku, and Unicorn
- **Animated transitions** — fade in/out between the title screen and video player via Framer Motion
- **Video playback** — full-width video scene for each character with native controls
- **Back navigation** — return to the selector at any time
- **Responsive layout** — cards scale with `clamp()` and wrap on small screens
- **Accessibility** — keyboard navigable cards, ARIA labels, `prefers-reduced-motion` support

## Tech Stack

| Tool | Version |
|------|---------|
| Next.js (App Router) | 16.x |
| React | 19.x |
| TypeScript | 6.x |
| Framer Motion | latest |
| CSS Modules | — |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx          # Root layout — Google Fonts (Orbitron, Rajdhani)
  globals.css         # CSS custom properties (palette, typography, reset)
  page.tsx            # Entry point → renders SceneLoader
  components/
    SceneLoader.tsx   # Scene state, AnimatePresence, back button
    SceneLoader.module.css
    ImageCard.tsx     # Character cards with stagger animation and labels
    ImageCard.module.css
public/
  assets/             # gundam.jpg/mp4, zaku.jpg/mp4, unicorn.jpg/mp4
types/
  Character.d.ts      # "gundam" | "zaku" | "unicorn" | ""
```

## Scripts

```bash
npm run dev     # Start development server (Turbopack)
npm run build   # Production build
npm run start   # Serve production build
npm run lint    # ESLint
```
