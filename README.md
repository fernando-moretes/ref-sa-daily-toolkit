# SA Daily Toolkit

Daily skills, scripts and templates that help a Solution Architect ship better
work faster: ADRs, Well-Architected reviews, threat modeling prompts, sizing
calculators and decision matrices — all in one place.

![CI](https://github.com/fernandofatech/sa-daily-toolkit/actions/workflows/ci.yml/badge.svg)
![Frontend](https://github.com/fernandofatech/sa-daily-toolkit/actions/workflows/frontend.yml/badge.svg)
![Security](https://github.com/fernandofatech/sa-daily-toolkit/actions/workflows/security.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)

## Live portfolio / Portfolio ao vivo

- **Production:** [SA Daily Toolkit](https://toolkit.moretes.com)
- **Documentation:** [Project docs](docs/architecture.md)
- **GitHub:** [fernandofatech/sa-daily-toolkit](https://github.com/fernandofatech/sa-daily-toolkit)
- **Author:** [Fernando Francisco Azevedo](https://fernando.moretes.com) · [LinkedIn](https://www.linkedin.com/in/fernando-francisco-azevedo/) · [GitHub](https://github.com/fernandofatech)

This public repository is part of a bilingual portfolio focused on solution
architecture, AWS, AI, MCP/tooling, DevSecOps, and production-ready engineering
practices.

Este repositório público faz parte de um portfólio bilíngue focado em
arquitetura de soluções, AWS, IA, MCP/tools, DevSecOps e boas práticas de
engenharia para produção.

## What it does

A curated set of skills used in the day-to-day of a Solution Architect:

- **ADR generator** with the MADR template.
- **Well-Architected checklists** for the six pillars.
- **Threat modeling prompts** ready to paste into LLM workflows.
- **Sizing calculators** for compute, storage and networking.
- **RFC template pack** for cross-team proposals.
- **Decision matrix** with weighted criteria.
- **Tech radar generator** for technology bets.
- **Architecture spike notes** template.

## Why this matters

Solution Architects switch context constantly. Having a small, opinionated
toolkit reduces the cognitive cost of producing high-quality artifacts on a
recurring basis — and keeps decisions traceable instead of scattered across
chats, slides and unfinished docs.

## Tech stack

- Next.js 16 (App Router) + React 19
- TypeScript 5
- Tailwind CSS 4
- GitHub Actions (CI, Frontend, Vercel, Security)
- Deployed on Vercel · DNS via Cloudflare

## Run locally

```bash
cd frontend
npm install
npm run dev
# open http://localhost:3000
```

## Repository layout

```
.github/workflows/   CI, Frontend, Vercel and Security pipelines
frontend/            Next.js 16 portfolio surface
docs/                Architecture, ADRs, diagrams
```

## Operations

See [OPERATIONS.md](OPERATIONS.md) for GitFlow, Vercel secrets and the security
pipeline. See [SETUP.md](SETUP.md) for connecting Vercel and Cloudflare.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). This project follows GitFlow and
Conventional Commits.

## License

[MIT](LICENSE) — Copyright © 2026 Fernando Francisco Azevedo.
