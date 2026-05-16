import {
  FileText,
  ShieldCheck,
  Calculator,
  GitBranch,
  Compass,
  Target,
  Radar,
  NotebookPen,
} from "lucide-react";

const skills = [
  {
    icon: FileText,
    title: "ADR Generator",
    description: "MADR template with context, decision, consequences and links.",
  },
  {
    icon: ShieldCheck,
    title: "Well-Architected Checklist",
    description: "Six-pillar review prompts for any AWS workload.",
  },
  {
    icon: Compass,
    title: "Threat Model Prompts",
    description: "STRIDE prompts ready for AI-assisted threat modeling.",
  },
  {
    icon: Calculator,
    title: "Sizing Calculators",
    description: "Compute, storage and network back-of-envelope estimates.",
  },
  {
    icon: GitBranch,
    title: "RFC Template Pack",
    description: "Lightweight RFCs for cross-team proposals.",
  },
  {
    icon: Target,
    title: "Decision Matrix",
    description: "Weighted-criteria matrix with reproducible scoring.",
  },
  {
    icon: Radar,
    title: "Tech Radar Generator",
    description: "Adopt / Trial / Assess / Hold technology radar.",
  },
  {
    icon: NotebookPen,
    title: "Spike Notes",
    description: "Structured architecture spike note template.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-10">
      <section className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm uppercase tracking-widest text-indigo-400">
          Portfolio · Solution Architecture
        </p>
        <h1 className="text-4xl font-bold sm:text-6xl">SA Daily Toolkit</h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Daily skills, scripts and templates that help a Solution Architect ship
          better work faster — ADRs, Well-Architected reviews, threat modeling
          prompts, sizing calculators and decision matrices, all in one place.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/fernandofatech/sa-daily-toolkit"
            className="rounded-md bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400"
          >
            View on GitHub
          </a>
          <a
            href="https://fernando.moretes.com"
            className="rounded-md border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800"
          >
            Portfolio
          </a>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-5xl">
        <h2 className="text-2xl font-semibold">Included skills</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
            >
              <s.icon className="h-6 w-6 text-amber-400" aria-hidden />
              <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mx-auto mt-24 max-w-5xl border-t border-slate-800 pt-8 text-sm text-slate-400">
        <p>
          Built by{" "}
          <a className="text-indigo-300 hover:underline" href="https://fernando.moretes.com">
            Fernando Francisco Azevedo
          </a>{" "}
          ·{" "}
          <a
            className="text-indigo-300 hover:underline"
            href="https://www.linkedin.com/in/fernando-francisco-azevedo/"
          >
            LinkedIn
          </a>{" "}
          ·{" "}
          <a className="text-indigo-300 hover:underline" href="https://github.com/fernandofatech">
            GitHub
          </a>
        </p>
        <p className="mt-2">MIT License · © 2026</p>
      </footer>
    </main>
  );
}
