import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-bg">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-10 text-center">
        <p className="text-sm tracking-widest uppercase text-fg/50 mb-4 animate-fade-up">
          ✦ Williams
        </p>
        <h1
          className="font-display text-[clamp(4rem,15vw,11rem)] font-black leading-[0.9] tracking-tighter text-fg animate-fade-up animate-fade-up-delay-1"
        >
          Venture
          <br />
          Studio
        </h1>
        <p className="mt-8 text-sm text-fg/40 tracking-wide max-w-xs mx-auto leading-relaxed animate-fade-up animate-fade-up-delay-2">
          Exploring startups, venture, and providing access to resources and mentorship.
        </p>
      </section>

      {/* Project Grid */}
      <section className="px-6 md:px-10 pb-8 animate-fade-up animate-fade-up-delay-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}