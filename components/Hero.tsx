import { personalInfo } from "@/data/resume";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-ink)] via-[var(--color-shadow)] to-[var(--color-ink)] text-[var(--color-shell)]">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
          {personalInfo.name}
        </h1>
        <h2 className="text-2xl md:text-3xl text-[var(--color-primary-soft)] mb-8">
          {personalInfo.title}
        </h2>
        <p className="text-lg md:text-xl text-[var(--color-accent)] mb-12 max-w-3xl mx-auto leading-relaxed">
          {personalInfo.summary}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-soft)] text-[var(--color-ink)] rounded-lg font-semibold transition-colors duration-200 shadow-md"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-[var(--color-ink)] hover:bg-[var(--color-shadow)] text-[var(--color-shell)] rounded-lg font-semibold transition-colors duration-200 shadow-md"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

