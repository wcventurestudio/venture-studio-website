import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="project-card block rounded-2xl bg-fg group">
      <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority={project.id === '1' || project.id === '2'}
        />

        {/* Dark gradient overlay — always subtle, more on hover */}
        <div className="absolute inset-0 bg-linear-to-t from-fg/80 via-fg/10 to-transparent opacity-70" />

        {/* Category pill */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-medium tracking-widest uppercase bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full border border-white/20">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="font-display text-2xl md:text-3xl font-black leading-tight text-bg">
            {project.title}
          </h3>
        </div>

        {/* Arrow — appears on hover */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-bg/10 backdrop-blur-sm border border-bg/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </Link>
  )
}