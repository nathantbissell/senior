import Image from "next/image";

import { experience } from "@/data/resume";

const COMPANY_LOGO_MAP: Record<string, { src: string; size: number }> = {
  "College of the Holy Cross": { src: "/company-icons/holycross.svg", size: 72 },
  "Connex eCommerce": { src: "/company-icons/connex.svg", size: 84 },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-4xl border-b border-[var(--page-border)] px-6 py-16 sm:py-20"
    >
      <header className="mb-12 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--page-meta)]">
          Experience
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--page-heading)] sm:text-4xl">
          Led multi-disciplinary teams to ship clean, user-friendly products
        </h2>
        <p className="indented-paragraph text-sm leading-7 text-[var(--page-muted)]">
          I combine engineering leadership with proven, actionable output. I excel at collaborating
          closely with stakeholders, delivering measurable outcomes, and driving innovation
          initiatives whenever possible.
        </p>
      </header>

      <div className="space-y-12">
        {experience.map((job) => (
          <article
            key={`${job.company}-${job.role}`}
            className="grid gap-6 border-b border-[var(--page-border)] pb-10 last:border-none last:pb-0 sm:grid-cols-[160px_1fr]"
          >
            <div className="flex flex-col items-center gap-4 text-[var(--page-meta)]">
              <span className="text-center text-xs font-semibold uppercase tracking-[0.35em]">
                {job.period}
              </span>
              {COMPANY_LOGO_MAP[job.company] && (
                <Image
                  src={COMPANY_LOGO_MAP[job.company].src}
                  alt={`${job.company} logo`}
                  width={COMPANY_LOGO_MAP[job.company].size}
                  height={COMPANY_LOGO_MAP[job.company].size}
                  className="object-contain mt-3"
                  style={{
                    width: COMPANY_LOGO_MAP[job.company].size,
                    height: COMPANY_LOGO_MAP[job.company].size,
                  }}
                />
              )}
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[var(--page-heading)] sm:text-2xl">
                  {job.role}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--page-muted)]">
                  <span className="font-medium uppercase tracking-[0.25em] text-[var(--page-meta)]">
                    {job.company}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-[var(--page-border)]" />
                  <span>{job.location}</span>
                </div>
              </div>

              <p className="indented-paragraph text-sm leading-6 text-[var(--page-muted)]">
                {job.description}
              </p>

              <ul className="indented-paragraph space-y-3 text-sm leading-6 text-[var(--page-muted)]">
                {job.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--page-meta)]" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
