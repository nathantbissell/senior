import { personalInfo } from "@/data/resume";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          {personalInfo.name}
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-300 mb-8">
          {personalInfo.title}
        </h2>
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          {personalInfo.summary}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

