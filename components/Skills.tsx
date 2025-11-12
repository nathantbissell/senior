import { skills } from "@/data/resume";

const skillCategories = [
  { title: "Languages", items: skills.languages },
  { title: "Frontend", items: skills.frontend },
  { title: "Backend", items: skills.backend },
  { title: "Databases", items: skills.databases },
  { title: "Cloud & DevOps", items: skills.cloud },
  { title: "Tools & APIs", items: [...skills.tools, ...skills.apis] },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-4xl border-b border-[var(--page-border)] px-6 py-16 sm:py-20"
    >
      <header className="mb-10 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--page-meta)]">
          Skills
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--page-heading)] sm:text-4xl">
          Experience with modern technologies
        </h2>
        <p className="indented-paragraph text-sm leading-7 text-[var(--page-muted)]">
        Modern stack coverage from UI to infrastructure
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <article
            key={category.title}
            className="flex h-full flex-col gap-3 border-b border-[var(--page-border)] pb-6 last:border-none"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--page-meta)]">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span
                  key={`${category.title}-${skill}`}
                  className="rounded-full border border-[var(--page-border)] px-3 py-1 text-xs font-medium tracking-wide text-[var(--page-muted)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
