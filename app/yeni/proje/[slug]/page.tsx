import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAdjacentProjects,
  getProject,
  projects,
} from "../../data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return { title: "Proje bulunamadı" };
  return {
    title: `${project.title} — Emre Kardaş`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.cover }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [project.cover],
    },
  };
}

export default async function ProjectPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <article className="mx-auto max-w-3xl px-6 pt-10 pb-24 md:pt-16">
      <Link
        href="/yeni"
        className="inline-flex items-center gap-2 rounded text-sm font-medium text-[var(--yeni-muted)] transition-colors duration-200 hover:text-[var(--yeni-fg)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--yeni-accent)]"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M13 5l-6 5 6 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Tüm çalışmalar
      </Link>

      <header className="mt-10">
        <p className="text-sm font-medium text-[var(--yeni-accent)]">
          {project.year} · Vaka çalışması
        </p>
        <h1 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-[var(--yeni-fg)] md:text-5xl md:leading-[1.05]">
          {project.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-[var(--yeni-muted)]">
          {project.summary}
        </p>
      </header>

      <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-[var(--yeni-border)] py-5 md:grid-cols-4">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--yeni-muted)]">
            Müşteri
          </dt>
          <dd className="mt-1 text-sm font-medium text-[var(--yeni-fg)]">
            {project.client ?? "Bağımsız"}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--yeni-muted)]">
            Yıl
          </dt>
          <dd className="mt-1 text-sm font-medium text-[var(--yeni-fg)]">
            {project.year}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--yeni-muted)]">
            Süre
          </dt>
          <dd className="mt-1 text-sm font-medium text-[var(--yeni-fg)]">
            {project.duration}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--yeni-muted)]">
            Ekip
          </dt>
          <dd className="mt-1 text-sm font-medium text-[var(--yeni-fg)]">
            {project.teamSize}
          </dd>
        </div>
      </dl>

      <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-2xl bg-[var(--yeni-subtle)]">
        <Image
          src={project.cover}
          alt={`${project.title} kapak görseli`}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
          priority
        />
      </div>

      {project.result.metric && (
        <section
          aria-label="Ana sonuç"
          className="mt-14 rounded-2xl bg-gradient-to-br from-[var(--yeni-accent)] to-[var(--yeni-accent-2)] px-6 py-10 text-center text-white md:py-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Ana sonuç
          </p>
          <p className="mt-3 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            {project.result.metric}
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/85 md:text-base">
            {project.result.outcome}
          </p>
        </section>
      )}

      <section className="mt-14">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--yeni-fg)]">
          Problem
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--yeni-muted)] md:text-lg">
          {project.problem}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--yeni-fg)]">
          Rolüm
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--yeni-muted)] md:text-lg">
          {project.role}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--yeni-fg)]">
          Süreç
        </h2>
        <ol className="mt-5 space-y-3">
          {project.process.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--yeni-fg)] text-xs font-bold text-[var(--yeni-bg)]"
              >
                {i + 1}
              </span>
              <p className="pt-1 text-base leading-relaxed text-[var(--yeni-fg)]">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--yeni-fg)]">
          Yığın
        </h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <li
              key={s}
              className="rounded-full border border-[var(--yeni-border)] bg-[var(--yeni-subtle)] px-3 py-1.5 text-sm font-medium text-[var(--yeni-fg)]"
            >
              {s}
            </li>
          ))}
        </ul>
      </section>

      {project.screenshots && project.screenshots.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--yeni-fg)]">
            Ekran görüntüleri
          </h2>
          <div className="mt-6 space-y-8">
            {project.screenshots.map((shot, i) => (
              <figure key={i}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--yeni-border)] bg-[var(--yeni-subtle)]">
                  <Image
                    src={shot.src}
                    alt={shot.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-[var(--yeni-muted)]">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {project.testimonial && (
        <figure className="mt-14 rounded-2xl border border-[var(--yeni-border)] bg-[var(--yeni-subtle)] p-8 md:p-10">
          <svg
            aria-hidden="true"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[var(--yeni-accent)]"
          >
            <path
              d="M8 10H5C5 6 7 4 10 4V6C8 6 7 7.5 7 9H8C9.105 9 10 9.895 10 11V14C10 15.105 9.105 16 8 16H5C3.895 16 3 15.105 3 14V11C3 10.448 3.448 10 4 10H8ZM18 10H15C15 6 17 4 20 4V6C18 6 17 7.5 17 9H18C19.105 9 20 9.895 20 11V14C20 15.105 19.105 16 18 16H15C13.895 16 13 15.105 13 14V11C13 10.448 13.448 10 14 10H18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote className="mt-4 text-lg leading-relaxed text-[var(--yeni-fg)] md:text-xl">
            {project.testimonial.quote}
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--yeni-accent)] to-[var(--yeni-accent-2)] text-sm font-bold text-white"
            >
              {project.testimonial.author
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 2)}
            </span>
            <div>
              <p className="text-sm font-semibold text-[var(--yeni-fg)]">
                {project.testimonial.author}
              </p>
              <p className="text-xs text-[var(--yeni-muted)]">
                {project.testimonial.role}
              </p>
            </div>
          </figcaption>
        </figure>
      )}

      {project.links && (project.links.live || project.links.github) && (
        <section className="mt-12 flex flex-wrap gap-3">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--yeni-fg)] px-5 py-2.5 text-sm font-semibold text-[var(--yeni-bg)] transition-colors duration-200 hover:bg-[var(--yeni-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--yeni-accent)]"
            >
              Canlıyı gör
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 5h8v8M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--yeni-border)] px-5 py-2.5 text-sm font-semibold text-[var(--yeni-fg)] transition-colors duration-200 hover:bg-[var(--yeni-subtle)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--yeni-accent)]"
            >
              Kaynak kodu
            </a>
          )}
        </section>
      )}

      {(prev || next) && (
        <nav
          aria-label="Diğer çalışmalar"
          className="mt-20 grid gap-3 border-t border-[var(--yeni-border)] pt-10 md:grid-cols-2"
        >
          {prev ? (
            <Link
              href={`/yeni/proje/${prev.slug}`}
              className="group flex flex-col rounded-xl border border-[var(--yeni-border)] p-5 transition-colors duration-200 hover:bg-[var(--yeni-subtle)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--yeni-accent)]"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--yeni-muted)]">
                ← Önceki
              </span>
              <span className="mt-2 text-sm font-semibold text-[var(--yeni-fg)] transition-colors group-hover:text-[var(--yeni-accent)]">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/yeni/proje/${next.slug}`}
              className="group flex flex-col items-end rounded-xl border border-[var(--yeni-border)] p-5 text-right transition-colors duration-200 hover:bg-[var(--yeni-subtle)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--yeni-accent)]"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--yeni-muted)]">
                Sonraki →
              </span>
              <span className="mt-2 text-sm font-semibold text-[var(--yeni-fg)] transition-colors group-hover:text-[var(--yeni-accent)]">
                {next.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}

      <section className="mt-20 rounded-2xl bg-[var(--yeni-subtle)] px-6 py-10 text-center md:px-10">
        <h2 className="text-xl font-bold text-[var(--yeni-fg)] md:text-2xl">
          Benzer bir şey mi geliştirmek istiyorsun?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-[var(--yeni-muted)]">
          Proje fikrinden konuşalım. İlk 30 dakikalık keşif görüşmesi ücretsiz.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:eekardas@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--yeni-accent)] to-[var(--yeni-accent-2)] px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--yeni-accent)] motion-reduce:transform-none"
          >
            Yaz bana
          </a>
          <a
            href="https://cal.com/emrekardas/30min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[var(--yeni-border)] px-6 py-3 text-sm font-semibold text-[var(--yeni-fg)] transition-colors duration-200 hover:bg-[#d1d5db] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--yeni-accent)]"
          >
            Görüşme ayarla
          </a>
        </div>
      </section>
    </article>
  );
}
