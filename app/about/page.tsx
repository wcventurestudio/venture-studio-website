import Header from '@/components/Header'
import Footer from '@/components/Footer'

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/williams-venture-studio/' },
  { label: 'Instagram', href: 'https://www.instagram.com/wcventurestudio' },
  { label: 'Twitter / X', href: 'https://x.com/wcventurestudio' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Header />
      <section className="pt-36 pb-16 px-6 md:px-10 max-w-2xl mx-auto">
        <h1 className="font-display text-[clamp(3rem,10vw,8rem)] font-black leading-[0.9] tracking-tighter text-fg mb-16 animate-fade-up">
          About
        </h1>

        <div className="space-y-12 animate-fade-up animate-fade-up-delay-1">
          <div>
            <h2 className="font-display text-2xl font-black mb-5 text-fg">
              Williams Venture Studio
            </h2>
            <p className="text-fg/60 leading-relaxed text-md mb-4">
              We are a student organization at Williams College exploring startups, venture, and
              providing access to resources and mentorship.
            </p>
          </div>

          <div>
            <p className="text-sm tracking-widest uppercase text-fg/30 mb-2">Email</p>
            <a
              href="mailto:hello@williams.studio"
              className="text-lg text-fg/70 hover:text-fg transition-colors nav-link"
            >
              wcventurestudio@gmail.com
            </a>
          </div>

          <div>
            <p className="text-sm tracking-widest uppercase text-fg/30 mb-4">Socials</p>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-fg/50 hover:text-fg transition-colors nav-link w-fit"
                >
                  {label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}