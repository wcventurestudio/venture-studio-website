import Header from '@/components/Header'
import Footer from '@/components/Footer'

const CAPABILITIES = [
  'Brand Strategy',
  'Event Production',
  'Digital Experiences',
  'Creative Direction',
  'Content & Media',
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Header />
      <section className="pt-36 pb-16 px-6 md:px-10 max-w-4xl mx-auto">
        <h1 className="font-display text-[clamp(3rem,10vw,8rem)] font-black leading-[0.9] tracking-tighter text-fg mb-16 animate-fade-up">
          About
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 animate-fade-up animate-fade-up-delay-1">
          <div>
            <h2 className="font-display text-2xl font-black mb-5 text-fg">
              Williams Venture Studio
            </h2>
            <p className="text-fg/60 leading-relaxed text-sm mb-4">
              We are a creative venture studio building bold ideas at the intersection of culture and
              technology. Our work spans events, digital experiences, brand strategy, and beyond.
            </p>
            <p className="text-fg/40 leading-relaxed text-sm">
              Based everywhere. Working with people who care about craft.
            </p>
          </div>

          <div>
            <h3 className="text-xs tracking-widest uppercase text-fg/30 mb-5">Capabilities</h3>
            <ul className="space-y-3">
              {CAPABILITIES.map((cap) => (
                <li key={cap} className="text-sm text-fg/60 flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-fg-muted inline-block" />
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}