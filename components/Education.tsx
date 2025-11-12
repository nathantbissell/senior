import { education } from "@/data/resume";

export default function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-4xl border-b border-[var(--page-border)] px-6 py-16 sm:py-20"
    >
      <header className="mb-10 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--page-meta)]">
          Education
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--page-heading)] sm:text-4xl">
          Lifelong learning grounded in applied practice
        </h2>
        <p className="indented-paragraph text-sm leading-7 text-[var(--page-muted)]">
          Formal computer science foundations complemented by immersive, hands-on
          programs focused on modern web development.
        </p>
      </header>

      <div className="space-y-8">
        {education.map((entry) => (
          <article
            key={`${entry.school}-${entry.degree}`}
            className="space-y-4 border-b border-[var(--page-border)] pb-6 last:border-none last:pb-0"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[var(--page-heading)] sm:text-xl">
                  {entry.degree}
                </h3>
                <p className="mt-2 text-sm text-[var(--page-muted)]">{entry.school}</p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--page-meta)]">
                {entry.year}
              </span>
            </div>

            {entry.awards?.length ? (
              <div className="space-y-2">
                <ul className="indented-paragraph space-y-2 text-sm text-[var(--page-muted)]">
                  {entry.awards.map((award) => (
                    <li key={`${entry.school}-${award}`} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--page-meta)]" />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
