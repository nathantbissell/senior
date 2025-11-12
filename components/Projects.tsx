import Image from "next/image";

import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-4xl border-b border-[var(--page-border)] px-6 py-16 sm:py-20"
    >
      <header className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--page-heading)] sm:text-3xl">
          Projects
        </h2>
      </header>

      <div className="space-y-10">
        {projects.map((project, index) => {
          const hasImage = Boolean(project.image_url);
          const hasLink = Boolean(project.source_url);

          const media = (
            <div
              className="group relative block overflow-hidden rounded-lg border border-[var(--page-border)] shadow-sm"
              style={{ aspectRatio: "16 / 9" }}
            >
              {hasImage ? (
                <Image
                  src={project.image_url}
                  alt={`${project.title} demo preview`}
                  fill
                  sizes="(min-width: 640px) 224px, 100vw"
                  className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-[var(--page-surface)] text-[11px] uppercase tracking-[0.24em] text-[var(--page-muted)]">
                  Demo Preview
                </div>
              )}
            </div>
          );

          return (
            <article
              key={project.title}
              className="space-y-4 border-b border-[var(--page-border)] pb-8 last:border-none last:pb-0"
            >
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--page-meta)]">
                <span>{(project.technologies && project.technologies[0]) || `0${index + 1}`}</span>
                <span className="hidden h-px w-12 bg-[var(--page-border)] sm:block" />
              </div>

              <div className="space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-semibold text-[var(--page-heading)] sm:text-2xl">
                    {project.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-12">
                  <div className="space-y-3 sm:flex-1 sm:pl-8">
                    <p className="indented-paragraph text-sm leading-6 text-[var(--page-muted)]">
                      {project.description}
                    </p>
                    {project.highlights.length > 0 && (
                      <ul className="indented-paragraph space-y-2 text-sm leading-6 text-[var(--page-muted)]">
                        {project.highlights.map((highlight) => (
                          <li key={`${project.title}-${highlight}`} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--page-meta)]" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.24em] text-[var(--page-meta)]">
                      {project.technologies.map((tech) => (
                        <span key={`${project.title}-${tech}`}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="sm:w-56 sm:flex-none">
                    {hasLink ? (
                      <a
                        href={project.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        aria-label={`View demo for ${project.title}`}
                      >
                        {media}
                      </a>
                    ) : (
                      media
                    )}
                    {hasLink && (
                      <p className="mt-3 text-xs uppercase tracking-[0.24em] text-[var(--page-meta)]">
                        View Demo
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
