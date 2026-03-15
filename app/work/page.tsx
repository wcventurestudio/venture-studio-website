import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Header />
      <section className="pt-36 pb-12 px-6 md:px-10">
        <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] font-black leading-tight tracking-tighter text-fg mb-12 animate-fade-up">
          Selected Work
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl animate-fade-up animate-fade-up-delay-1">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}