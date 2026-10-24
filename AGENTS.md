# AGENTS.md

Single-page "BPL Dream 11" fantasy-cricket app: Vite + React 19 + TypeScript + Tailwind CSS v4. No monorepo, no backend — player data is a static JSON file. Uses npm (`package-lock.json`); do not introduce pnpm/yarn.

## Commands

- `npm run dev` — dev server
- `npm run build` — `tsc -b && vite build`; this is also the only typecheck (there is no separate `typecheck` script)
- `npm run lint` — ESLint (only checks `**/*.{ts,tsx}`; `dist/` is ignored)
- No test suite, no CI workflows, no formatter config exist. Do not invent test commands; verify changes with `lint` + `build`.

## Architecture

- Entry: `src/main.tsx` → `src/App.tsx`. Components live under `src/component/<feature>/`.
- `src/App.tsx` fetches `public/playersData.json` via a plain `fetch` and passes the **Promise itself** as the `playerData` prop; `src/component/players/players.tsx` unwraps it with React 19's `use()` under a `<Suspense>` in `App`. Keep this promise-as-prop pattern — or refactor consistently; do not mix it with `useEffect`/`useState` fetching in the same flow.
- Player shape is defined once in `src/type.ts` (`PlayerInfoType`); edit that file and `public/playersData.json` together when adding fields.
- `choosePlayer` state lives in `App` and is threaded down via props (no state library, no router).

## Toolchain quirks

- Tailwind v4: configured entirely through `@tailwindcss/vite` in `vite.config.ts` and `@import "tailwindcss"` in `src/index.css`. There is no `tailwind.config.js` and no PostCSS config. Components rely heavily on arbitrary-value utilities (`text-[#131313]`, `mt-6.25`); follow that style.
- React Compiler is enabled via `babel({ presets: [reactCompilerPreset()] })` in `vite.config.ts` — avoid patterns React Compiler can't memoize (mutating props, impure renders).
- The "Sora" font is loaded from Google Fonts in `index.html`; the `.font-sora` helper class is hand-written in `src/index.css`.
- tsconfig is strict in non-obvious ways: `noUnusedLocals`/`noUnusedParameters` (unused imports fail the build), `verbatimModuleSyntax` (type-only imports must use `import type`), and `erasableSyntaxOnly` (no TS enums or parameter properties).

## Known work-in-progress (as of writing)

- `App.tsx` creates a new fetch promise on every render, so any `setChoosePlayer` update re-suspends and refetches. Hoisting the promise (e.g. module scope or `use()`) is the likely fix if this becomes a problem.
- The "Selected" tab button in `players.tsx` shows a hardcoded `Selected(0)` and the selected list view is an empty div — selection count/list UI is unfinished. `AvailablePlayerInfo.tsx` disables its own button per-card but doesn't dedupe against `choosePlayer`.
- Debug leftovers exist (e.g. `console.log(choosePlayer)` in `App.tsx`); don't replicate them.
