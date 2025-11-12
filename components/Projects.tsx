import Image from "next/image";

import { projects } from "@/data/resume";
import { withBasePath } from "@/lib/basePath";

const TECH_ICON_MAP: Record<string, string> = {
  "Ruby on Rails": "/tech-icons/ruby-on-rails.svg",
  JavaScript: "/tech-icons/javascript.svg",
  React: "/tech-icons/react.svg",
  "Node.js": "/tech-icons/nodejs.svg",
  NodeJs: "/tech-icons/nodejs.svg",
  "ASP.NET Core": "/tech-icons/aspnet-core.svg",
};

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto max-w-4xl border-b border-[var(--page-border)] px-6 pb-16 pt-12 sm:pb-20 sm:pt-14"
    >
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--page-meta)]">
          Projects
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--page-heading)] sm:text-4xl">
          A showcase of my previous works
        </h2>
      </header>

      <div className="space-y-10">
        {projects.map((project, index) => {
          const hasImage = Boolean(project.image_url);
          const hasLink = Boolean(project.source_url);
          const primaryTechnology = project.technologies?.[0];
          const primaryTechnologyIcon =
            primaryTechnology && TECH_ICON_MAP[primaryTechnology];

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
                  Not Available
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
                {primaryTechnology ? (
                  <>
                    {primaryTechnologyIcon && (
                      <Image
                        src={withBasePath(primaryTechnologyIcon)}
                        alt={`${primaryTechnology} icon`}
                        width={32}
                        height={32}
                        className="h-8 w-8"
                      />
                    )}
                    <span>{primaryTechnology}</span>
                  </>
                ) : (
                  <span>{`0${index + 1}`}</span>
                )}
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
                        Visit Project
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
