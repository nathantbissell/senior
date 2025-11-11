import { personalInfo } from "@/data/resume";

const initials = personalInfo.name
  .split(" ")
  .map((part) => part.charAt(0))
  .join("")
  .slice(0, 2)
  .toUpperCase();

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-4xl border-b border-[var(--page-border)] px-6 pb-16 pt-28 sm:pb-20 sm:pt-32"
    >
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-12">
        <div className="flex shrink-0 items-center justify-center">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border border-[var(--page-border)] bg-[var(--page-subtle)] md:h-32 md:w-32">
            <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_top,_#ffffff,_#e2e8f0)] text-3xl font-semibold tracking-[0.35em] text-[var(--page-heading)] md:text-4xl">
              {initials}
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--page-meta)]">
              {personalInfo.location}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--page-heading)] sm:text-5xl">
              {personalInfo.name}
            </h1>
            <p className="text-lg font-medium text-[var(--page-muted)]">
              {personalInfo.title}
            </p>
          </div>

          <p className="indented-paragraph text-base leading-7 text-[var(--page-muted)]">
            {personalInfo.summary}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--page-muted)]">
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--page-border)] px-4 py-2 font-medium tracking-wide text-[var(--page-muted)] transition-colors hover:border-[var(--page-meta)] hover:text-[var(--page-heading)]"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 flex-shrink-0 text-[var(--page-muted)]"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.28-1.71-1.28-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.14 1.18.91-.25 1.88-.38 2.85-.38.97 0 1.94.13 2.85.38 2.18-1.5 3.14-1.18 3.14-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.44-2.69 5.42-5.25 5.7.41.36.77 1.07.77 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12 24 5.65 18.35.5 12 .5z" />
                </svg>
                <span>GitHub</span>
              </a>
            )}

            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--page-border)] px-4 py-2 font-medium tracking-wide text-[var(--page-muted)] transition-colors hover:border-[var(--page-meta)] hover:text-[var(--page-heading)]"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 flex-shrink-0 text-[var(--page-muted)]"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.48 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM7 8h5v2h.1c.7-1.2 2-2.6 4.4-2.6 4.7 0 5.5 3.1 5.5 7.1V24h-5v-7.1c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24H7z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
