import { skills } from "@/data/resume";

export default function Skills() {
  const skillCategories = [
    { title: "Languages", items: skills.languages, color: "blue" },
    { title: "Frontend", items: skills.frontend, color: "emerald" },
    { title: "Backend", items: skills.backend, color: "purple" },
    { title: "Databases", items: skills.databases, color: "orange" },
    { title: "Cloud & DevOps", items: skills.cloud, color: "cyan" },
    { title: "Tools & APIs", items: skills.tools.concat(skills.apis), color: "pink" },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: "bg-blue-100 text-blue-800",
      emerald: "bg-emerald-100 text-emerald-800",
      purple: "bg-purple-100 text-purple-800",
      orange: "bg-orange-100 text-orange-800",
      cyan: "bg-cyan-100 text-cyan-800",
      pink: "bg-pink-100 text-pink-800",
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <span
                    key={i}
                    className={`text-sm px-3 py-1 rounded-full font-medium ${getColorClasses(
                      category.color
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

