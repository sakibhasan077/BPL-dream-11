# BPL Dream 11

> A single-page fantasy cricket app where users assemble their ultimate **Dream 11** team within a fixed credit budget.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat-square&logo=vite&logoColor=white)

---

## Overview

BPL Dream 11 is a frontend-only React application for picking a fantasy cricket squad. Players are loaded from a static JSON file, each with a price, rating, and role. Users browse the available roster, spend their budget to pick players, and review their squad in a separate **Selected** view — all in a responsive, mobile-first interface.

There is no backend, no authentication, and no routing: it is a focused single-page experience built with modern React and Tailwind CSS.

## Features

- **Hero banner** with a call-to-action to claim free credit
- **Available / Selected tabs** to switch between the full roster and your current squad
- **Credit budget** tracked live in the navbar — players can't be bought without sufficient credit
- **Squad limit** of 6 players with clear button states (`✓ Selected`, `Limit Reached`, `Can't Afford`)
- **Remove & refund** — removing a selected player returns their price to your balance
- **Newsletter subscribe** card overlapping the footer for a layered visual effect
- **Responsive layout** across mobile, tablet, and desktop, including a collapsible mobile navigation menu

## Tech Stack

| Layer      | Choice                                                                  |
| ---------- | ----------------------------------------------------------------------- |
| Build tool | [Vite 8](https://vite.dev)                                              |
| UI library | [React 19](https://react.dev) (including the `use()` API + Suspense)    |
| Language   | [TypeScript](https://www.typescriptlang.org) (strict)                   |
| Styling    | [Tailwind CSS 4](https://tailwindcss.com) via `@tailwindcss/vite`       |
| Linting    | [ESLint](https://eslint.org) (flat config)                              |
| Compiler   | [React Compiler](https://react.dev/learn/react-compiler) (automatic memoization) |

## Getting Started

### Prerequisites

- **Node.js** 20.19+ (or 22.12+)
- **npm** 10+ (this project ships with `package-lock.json` — please don't introduce pnpm/yarn)

### Installation

```bash
git clone https://github.com/sakibhasan077/BPL-dream-11.git
cd BPL-dream-11
npm install
```

### Development

```bash
npm run dev
```

Starts the dev server with hot module replacement at `http://localhost:5173`.

### Production

```bash
npm run build     # type-check (tsc -b) + production bundle (vite build)
npm run preview   # serve the built output from dist/ locally
```

## Available Scripts

| Script          | Description                                                       |
| --------------- | ----------------------------------------------------------------- |
| `npm run dev`   | Start the Vite dev server with HMR                                |
| `npm run build` | Run `tsc -b` (the project's type-check) and build `dist/`         |
| `npm run lint`  | Run ESLint over the codebase                                      |
| `npm run preview` | Preview the production build                                     |

> There is currently no test suite or CI pipeline. Verify changes with `npm run lint` and `npm run build`.

## Project Structure

```
bpl-dream-11/
├── public/
│   └── playersData.json          # Static roster data (source of truth)
├── src/
│   ├── main.tsx                  # Entry point
│   ├── App.tsx                   # Root component: data promise + global state
│   ├── type.ts                   # PlayerInfoType definition
│   ├── index.css                 # Tailwind import + global helpers
│   ├── assets/                   # Images (logo, banner, player photos)
│   └── component/
│       ├── navbar/Navbar.tsx     # Fixed header, credit counter, mobile menu
│       ├── hero-section/         # Hero banner with CTA
│       ├── players/              # Roster grid, tabs, player cards
│       │   ├── players.tsx
│       │   ├── AvailablePlayerInfo.tsx
│       │   └── SelectedPlayerInfo.tsx
│       ├── newsletter/           # Subscribe card (overlaps footer)
│       └── footer/               # Footer with links & subscribe form
├── index.html                    # HTML shell (Sora font, viewport meta)
├── vite.config.ts                # Vite + Tailwind + React Compiler
└── package.json
```

## Architecture Notes

- **Data flow:** `App.tsx` fetches `public/playersData.json` once at module scope and passes the **promise itself** as the `playerData` prop. `players.tsx` unwraps it with React 19's `use()` inside a `<Suspense>` boundary. Keep this pattern consistent — don't mix it with `useEffect`/`useState` fetching in the same flow.
- **State:** all selection state (`choosePlayer`) and the remaining `credit` live in `App` and are threaded down via props. There is no state-management library or router.
- **Types:** the player shape is defined once in `src/type.ts`. Update it and `public/playersData.json` together when adding fields.
- **Styling:** Tailwind v4 is configured entirely through `@tailwindcss/vite` — there is no `tailwind.config.js`. Utilities are applied inline with arbitrary values (e.g. `text-[#131313]`).
- **React Compiler:** enabled in `vite.config.ts`. Avoid patterns it can't memoize, such as mutating props or impure render logic.

### Adding Players

Edit `public/playersData.json` — no code changes required:

```json
{
  "id": 11,
  "playerName": "Player Name",
  "playerImage": "https://example.com/player-photo.jpg",
  "playerOrigin": "Bangladesh",
  "playerType": "All-rounder",
  "bowlingStyle": "Right-arm offbreak",
  "battingStyle": "Right-hand bat",
  "price": 950000,
  "rating": 8.5
}
```

## Responsive Design

The UI adapts across Tailwind's default breakpoints:

| Breakpoint | Width   | Behaviour                                                       |
| ---------- | ------- | --------------------------------------------------------------- |
| base       | < 640px | Single-column player grid, stacked newsletter form, mobile menu  |
| `sm`       | 640px+  | Two-column player grid, inline newsletter form                   |
| `md`       | 768px+  | Three-column footer                                              |
| `lg`       | 1024px+ | Three-column player grid, full desktop navigation                |
