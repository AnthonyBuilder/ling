# Copilot Instructions - Ling (React + Vite + TailwindCSS + shadcn/ui)

## Big Picture
- Single-page React 18 app built with Vite and TypeScript. Entry point is [src/main.tsx](src/main.tsx) which renders `App`.
- Primary UI lives in [src/App.tsx](src/App.tsx). Utility helpers live in [src/lib/utils.ts](src/lib/utils.ts).

## Styling + UI System
- TailwindCSS is the styling backbone; global styles and CSS variables are defined in [src/index.css](src/index.css).
- Base layer uses `@apply border-border` and `@apply bg-background text-foreground`, so CSS variables in `:root`/`.dark` drive theme tokens.
- shadcn/ui config is in [components.json](components.json); Tailwind config path is `tailwind.config.js` and CSS entry is `src/index.css`.

## Conventions
- Use the `cn(...)` helper from [src/lib/utils.ts](src/lib/utils.ts) to merge class names (Tailwind + conditional classes).
- Path alias `@/*` maps to `src/*` (see [tsconfig.json](tsconfig.json)); prefer `@/` imports for app code.

## Key Files
- App shell: [src/App.tsx](src/App.tsx)
- Entry point: [src/main.tsx](src/main.tsx)
- Global styles: [src/index.css](src/index.css)
- Tailwind config: [tailwind.config.js](tailwind.config.js)

## Developer Workflows
- Install: `npm install`
- Dev server: `npm run dev` (http://localhost:5173)
- Build: `npm run build`
- Preview build: `npm run preview`
- Lint: `npm run lint`

## Adding shadcn/ui Components
- Use `npx shadcn@latest add <component>`; the tool reads [components.json](components.json) for paths and Tailwind settings.
