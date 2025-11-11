import { skills } from "@/data/resume";

export default function Skills() {
  const skillCategories = [
    { title: "Languages", items: skills.languages, tone: "ink" },
    { title: "Frontend", items: skills.frontend, tone: "primary" },
    { title: "Backend", items: skills.backend, tone: "dune" },
    { title: "Databases", items: skills.databases, tone: "sand" },
    { title: "Cloud & DevOps", items: skills.cloud, tone: "shadow" },
    {
      title: "Tools & APIs",
      items: skills.tools.concat(skills.apis),
      tone: "foam",
    },
  ];

  const getToneClasses = (tone: string) => {
    const tones: Record<string, string> = {
      primary: "bg-[var(--color-primary)] text-[var(--color-ink)]",
      dune: "bg-[var(--color-dune)] text-[var(--color-ink)]",
      sand: "bg-[var(--color-sand)] text-[var(--color-ink)]",
      foam: "bg-[var(--color-foam)] text-[var(--color-ink)] border border-[var(--color-sand)]",
      ink: "bg-[var(--color-ink)] text-[var(--color-shell)]",
      shadow: "bg-[var(--color-shadow)] text-[var(--color-shell)]",
    };
    return tones[tone] || tones.primary;
  };

  return (
    <section id="skills" className="py-20 bg-[var(--color-shell)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-[var(--color-deep)]">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[var(--color-foam)] rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border border-[var(--color-sand)]"
            >
              <h3 className="text-xl font-bold text-[var(--color-deep)] mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <span
                    key={i}
                    className={`text-sm px-3 py-1 rounded-full font-medium ${getToneClasses(
                      category.tone
                    )}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

