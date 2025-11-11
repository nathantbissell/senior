import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[var(--color-shell)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-[var(--color-deep)]">
          Work Experience
        </h2>
        <div className="space-y-12">
          {experience.map((job, index) => (
            <div
              key={index}
              className="bg-[var(--color-foam)] rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--color-deep)]">
                    {job.role}
                  </h3>
                  <p className="text-xl text-[var(--color-primary)] font-semibold">
                    {job.company}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 md:text-right text-[var(--color-deep)]">
                  <p className="font-medium">
                    {job.period}
                  </p>
                  <p className="text-sm opacity-70">{job.location}</p>
                </div>
              </div>
              <p className="text-[var(--color-deep)] opacity-80 mb-4 leading-relaxed">
                {job.description}
              </p>
              <ul className="space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[var(--color-primary)] mr-2 mt-1">-</span>
                    <span className="text-[var(--color-deep)]">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


