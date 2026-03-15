import Header from '@/components/Header'
import Footer from '@/components/Footer'

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Twitter / X', href: '#' },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Header />
      <section className="pt-36 pb-16 px-6 md:px-10 max-w-2xl mx-auto">
        <h1 className="font-display text-[clamp(3rem,10vw,7rem)] font-black leading-[0.9] tracking-tighter text-fg mb-16 animate-fade-up">
          Let&apos;s
          <br />
          Talk.
        </h1>

        <div className="space-y-8 animate-fade-up animate-fade-up-delay-1">
          <div>
            <p className="text-xs tracking-widest uppercase text-fg/30 mb-2">Email</p>
            <a
              href="mailto:hello@williams.studio"
              className="text-lg text-fg/70 hover:text-fg transition-colors nav-link"
            >
              hello@williams.studio
            </a>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-fg/30 mb-4">Socials</p>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-fg/50 hover:text-fg transition-colors nav-link w-fit"
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