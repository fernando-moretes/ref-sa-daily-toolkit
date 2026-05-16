# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project overview

`sa-daily-toolkit` is a portfolio-grade toolkit of skills, scripts and templates
used in the day-to-day of a Solution Architect: ADR generators, Well-Architected
checklists, threat-model prompts, sizing calculators, RFC templates and a
decision matrix. The frontend is a Next.js showcase deployed at
`toolkit.moretes.com`.

## Tech stack

- Next.js 16 (App Router), React 19, TypeScript 5
- Tailwind CSS 4
- ESLint via `eslint-config-next`
- GitHub Actions: CI, Frontend, Vercel, Security
- Deploy: Vercel · DNS: Cloudflare

## Development commands

```bash
cd frontend
npm install            # install deps
npm run dev            # http://localhost:3000
npm run build          # production build
npm run lint           # next lint
```

## Repository layout

- `frontend/app/` — App Router pages (`page.tsx`, `layout.tsx`, `globals.css`)
- `frontend/public/` — static assets
- `docs/` — architecture, ADRs, diagrams
- `.github/workflows/` — CI/CD/security pipelines

## Conventions

- Conventional Commits (`feat:`, `fix:`, `docs:`, `ci:`, `chore:`).
- GitFlow: `main` is always deployable, `develop` is the integration branch.
- Each meaningful technical decision becomes an ADR in `docs/adr/` (MADR format).
- Tailwind v4 uses `@import "tailwindcss";` in `globals.css` (no config file by default).
- Keep landing-page copy bilingual-friendly: clear, concise English.
