import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

export function ProjectsGrid() {
  return (
    <section
      id="calismalarim"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl px-6 py-16 md:py-24"
    >
      <div className="mb-10 flex flex-wrap items-baseline gap-x-3">
        <h2
          id="projects-heading"
          className="text-3xl font-bold tracking-tight text-[var(--yeni-fg)] md:text-4xl"
        >
          Seçilmiş çalışmalar.
        </h2>
        <h2
          aria-hidden="true"
          className="text-3xl font-bold tracking-tight text-[var(--yeni-muted)] md:text-4xl"
        >
          Gerçek müşteriler, ölçülebilir sonuçlar.
        </h2>
      </div>

      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/yeni/proje/${project.slug}`}
              className="group block cursor-pointer overflow-hidden rounded-2xl border border-[var(--yeni-border)] bg-[var(--yeni-bg)] transition-shadow duration-300 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--yeni-accent)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--yeni-subtle)]">
                <Image
                  src={project.cover}
                  alt={`${project.title} kapak görseli`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
                />
                {project.result.metric && (
                  <div className="absolute bottom-3 left-3 rounded-full bg-[var(--yeni-fg)]/90 px-3 py-1 text-xs font-semibold text-[var(--yeni-bg)] backdrop-blur-sm">
                    {project.result.metric}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between text-xs font-medium text-[var(--yeni-muted)]">
                  <span>
                    {project.year} · {project.client ?? "Bağımsız"}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[var(--yeni-accent)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    Vaka çalışması
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M7 5l6 5-6 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--yeni-fg)] md:text-xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--yeni-muted)]">
                  {project.summary}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((s) => (
                    <li
                      key={s}
                      className="rounded-full bg-[var(--yeni-subtle)] px-2.5 py-1 text-xs font-medium text-[var(--yeni-muted)]"
                    >
                      {s}
                    </li>
                  ))}
                  {project.stack.length > 4 && (
                    <li className="rounded-full px-2.5 py-1 text-xs font-medium text-[var(--yeni-muted)]">
                      +{project.stack.length - 4}
                    </li>
                  )}
                </ul>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
