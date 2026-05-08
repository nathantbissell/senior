import Image from "next/image";

import { education } from "@/data/resume";
import { withBasePath } from "@/lib/basePath";

const SCHOOL_LOGO_MAP: Record<string, { src: string; size: number }> = {
  "Rhode Island College": { src: "/company-icons/rhode-island-college.svg", size: 84 },
  "General Assembly": { src: "/company-icons/general-assembly.jpg", size: 72 },
};

export default function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-4xl border-b border-[var(--page-border)] px-6 py-16 sm:py-20"
    >
      <header className="mb-12 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--page-meta)]">
          Education
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--page-heading)] sm:text-4xl">
          Higher Education and Job Training
        </h2>
        <p className="indented-paragraph text-sm leading-7 text-[var(--page-muted)]">
          Wielding experience in both a formal computer science degree, and completion of a modern web development bootcamp.
        </p>
      </header>

      <div className="space-y-12">
        {education.map((entry) => (
          <article
            key={`${entry.school}-${entry.degree}`}
            className="grid gap-6 border-b border-[var(--page-border)] pb-10 last:border-none last:pb-0 sm:grid-cols-[160px_1fr]"
          >
            <div className="flex flex-col items-center gap-4 text-[var(--page-meta)]">
              <span className="text-center text-xs font-semibold uppercase tracking-[0.35em]">
                {entry.year}
              </span>
              {SCHOOL_LOGO_MAP[entry.school] && (
                <Image
                  src={withBasePath(SCHOOL_LOGO_MAP[entry.school].src)}
                  alt={`${entry.school} logo`}
                  width={SCHOOL_LOGO_MAP[entry.school].size}
                  height={SCHOOL_LOGO_MAP[entry.school].size}
                  className="mt-3 object-contain"
                  style={{
                    width: SCHOOL_LOGO_MAP[entry.school].size,
                    height: SCHOOL_LOGO_MAP[entry.school].size,
                  }}
                />
              )}
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[var(--page-heading)] sm:text-xl">
                  {entry.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--page-muted)]">
                  <span className="font-medium uppercase tracking-[0.25em] text-[var(--page-meta)]">
                    {entry.school}
                  </span>
                </div>
              </div>

              {entry.awards?.length ? (
                <ul className="indented-paragraph space-y-3 text-sm leading-6 text-[var(--page-muted)]">
                  {entry.awards.map((award) => (
                    <li key={`${entry.school}-${award}`} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--page-meta)]" />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
