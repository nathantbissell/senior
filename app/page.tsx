import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--page-background)] text-[var(--page-foreground)]">
      <Navigation />
      <main className="pb-24">
        <Hero />
        <Projects />
        <Experience />
        <Education />
      </main>
    </div>
  );
}
