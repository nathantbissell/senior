import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[var(--color-foam)]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-[var(--color-deep)]">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[var(--color-shell)] rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-[var(--color-sand)]"
            >
              <h3 className="text-xl font-bold text-[var(--color-deep)] mb-3">
                {project.title}
              </h3>
              <p className="text-[var(--color-ink)] opacity-80 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="mb-4">
                <p className="text-sm font-semibold text-[var(--color-deep)] mb-2">
                  Technologies:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[var(--color-dune)] text-[var(--color-ink)] px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-deep)] mb-2">
                  Highlights:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[var(--color-primary)] text-[var(--color-ink)] px-2 py-1 rounded"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

