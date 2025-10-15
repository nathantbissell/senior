import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-200"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {project.title}
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="mb-4">
                <p className="text-sm font-semibold text-slate-700 mb-2">
                  Technologies:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-2">
                  Highlights:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded"
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

