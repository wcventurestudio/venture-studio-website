import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { projects } from '@/lib/projects'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen bg-bg">
      <Header />

      <section className="pt-32 pb-16 px-6 md:px-10 max-w-5xl mx-auto">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-10 animate-fade-up">
          <Link
            href="/work"
            className="text-xs tracking-widest uppercase text-fg/30 hover:text-fg transition-colors"
          >
            Work
          </Link>
          <span className="text-fg/20 text-xs">\u2192</span>
          <span className="text-xs tracking-widest uppercase text-fg/60">{project.title}</span>
        </div>

        {/* Title block */}
        <div className="mb-12 animate-fade-up animate-fade-up-delay-1">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-[10px] font-medium tracking-widest uppercase bg-fg/8 text-fg/60 px-3 py-1 rounded-full border border-border">
              {project.category}
            </span>
          </div>
          <h1 className="font-display text-[clamp(3rem,10vw,8rem)] font-black leading-[0.9] tracking-tighter text-fg">
            {project.title}
          </h1>
          <p className="font-display text-[clamp(1.5rem,4vw,3rem)] font-black leading-tight tracking-tighter text-fg/30 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Hero image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-16 animate-fade-up animate-fade-up-delay-2">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_14rem] gap-16 animate-fade-up animate-fade-up-delay-3">
          <div>
            <p className="text-xs tracking-widest uppercase text-fg/30 mb-5">About</p>
            <p className="text-fg/70 leading-relaxed text-base">{project.about}</p>
          </div>

          {project.details && (
            <div className="space-y-6">
              {project.details.map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs tracking-widest uppercase text-fg/30 mb-1">{label}</p>
                  <p className="text-sm text-fg/70">{value}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </section>

      <Footer />
    </main>
  )
}