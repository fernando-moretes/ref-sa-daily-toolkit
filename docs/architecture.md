# Architecture

`sa-daily-toolkit` is a static-first portfolio surface backed by a Next.js 16
application. The toolkit content (ADR templates, checklists, prompts) lives as
code in `frontend/app/` so it can evolve through pull requests, peer review and
versioning.

## Components

- **Frontend (Next.js 16, App Router):** the public landing page and any
  interactive tools.
- **Templates (Markdown / TS):** stored under `frontend/app/(skills)/` as the
  toolkit grows. Each skill is one route + one source file.
- **Docs (`docs/`):** ADRs, architecture notes and diagrams.
- **CI/CD (GitHub Actions):** validate, build, scan, deploy.
- **Hosting:** Vercel for the Next.js app; Cloudflare DNS for
  `toolkit.moretes.com`.

## Quality gates

- `frontend.yml` — lint + build + `npm audit`.
- `security.yml` — CodeQL, Trivy, Gitleaks, dependency review.
- `vercel.yml` — preview on PR, production on `main` (skips cleanly without
  secrets).
- `ci.yml` — repository hygiene + workflow YAML validation.

## Roadmap

1. Ship interactive ADR generator route (`/adr`).
2. Add the Well-Architected six-pillar review form.
3. Embed the sizing calculators with shareable URLs.
4. Add a `/cli` companion (Python or Node) for offline use.
