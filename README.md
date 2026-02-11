## Coubber Marketing Site (Prelaunch)

Coubber is an AI-powered sports performance analysis platform that unifies athlete data (force plates, VBT, GPS/wearables, rehab testing, CSV imports) and generates decision-ready reports in ~30 seconds.

This repository contains the prelaunch marketing site built with:
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- shadcn-style UI components (Radix + cva)

## Quickstart
Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

Open `http://localhost:3000`.

## Routes
Marketing pages:
- `/` (homepage)
- `/product`
- `/reports`
- `/integrations`
- `/pricing`
- `/resources` (+ placeholder articles at `/resources/[slug]`)
- `/demo` (demo request form)

API:
- `POST /api/demo` (prelaunch stub used by the demo form; validates input with Zod and returns `{ ok: true }`).

## Project Structure
Key folders:
- `app/(marketing)` — marketing pages + layout (header/footer)
- `app/components/ui` — UI primitives (button, card, select, tabs, sheet, etc.)
- `app/components/sections` — homepage + pricing sections
- `app/components/forms` — demo request form + Zod schema
- `app/lib/constants.ts` — copy + data sources (reports, integrations, testimonials, resources)

## Notes
- Fonts are loaded locally via `@fontsource-variable/inter` (no Google Fonts fetch at build time).
- `npm run build` is configured to use webpack (`next build --webpack`) for compatibility in restricted environments.
