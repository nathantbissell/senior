import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">
          Work Experience
        </h2>
        <div className="space-y-12">
          {experience.map((job, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {job.role}
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold">
                    {job.company}
                  </p>
                </div>
                <div className="text-slate-600 mt-2 md:mt-0 md:text-right">
                  <p className="font-medium">{job.period}</p>
                  <p className="text-sm">{job.location}</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                {job.description}
              </p>
              <ul className="space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">▹</span>
                    <span className="text-slate-700">{achievement}</span>
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

