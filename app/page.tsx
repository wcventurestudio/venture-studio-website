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
                <p className="text-sm tracking-widest uppercase text-fg/50 mb-4 animate-fade-up pb-6">
                    <a href="https://www.williams.edu/" target="_blank" rel="noopener noreferrer">
                        ✦ Williams
                    </a>
                </p>
                <h1 className="font-display text-[clamp(4rem,15vw,11rem)] font-black leading-[0.9] tracking-tighter text-fg animate-fade-up animate-fade-up-delay-1">
                    Venture
                    <br />
                    Studio
                </h1>
                <p className="mt-8 text-sm text-fg/40 tracking-wide max-w-xs mx-auto leading-relaxed animate-fade-up animate-fade-up-delay-2">
                    Exploring startups, venture, and providing access to resources and mentorship.
                </p>
                {/* Meetings pill */}
                <div className="mt-6 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-fg/10 bg-fg/5 animate-fade-up animate-fade-up-delay-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-700 shrink-0" />
                    <span className="text-sm text-fg/50">
                        Meetings every <strong className="text-fg/80 font-medium">Thursday at 7pm, Sawyer 508</strong>
                    </span>
                    <span className="text-fg/20">·</span>

                    <a href="YOUR_GROUPME_LINK" target="_blank" rel="noopener noreferrer">
                        Join GroupMe ↗
                    </a>
                </div>
            </section>

            {/* Project Grid */}
            <section className="px-6 md:px-10 pb-8 animate-fade-up animate-fade-up-delay-4">
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
