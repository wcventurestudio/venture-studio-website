import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { spotlights } from '@/lib/spotlights'

export default function SpotlightsPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Header />
      <section className="pt-36 pb-16 px-6 md:px-10 max-w-3xl mx-auto">
        <h1 className="font-display text-[clamp(3rem,10vw,8rem)] font-black leading-[0.9] tracking-tighter text-fg mb-4 animate-fade-up">
          Spotlights
        </h1>
        <p className="text-sm text-fg/40 mb-12 animate-fade-up animate-fade-up-delay-1">
          Celebrating the members of our community.
        </p>

        <div className="flex flex-col gap-3 animate-fade-up animate-fade-up-delay-2">
          {spotlights.map((item, i) => (
            <Link
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-stretch rounded-2xl border border-fg/10 overflow-hidden hover:bg-fg/5 transition-colors group h-28"
            >
              {/* Left: text */}
              <div className="flex-1 flex flex-col justify-center px-6 py-5 min-w-0">
                <p className="text-[10px] tracking-widest text-fg/30 mb-1">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="font-display text-lg font-black leading-tight text-fg truncate mb-1">
                  {item.title}
                </h2>
                <p className="text-xs text-fg/40">
                  {item.author} · {item.source}
                  <span className="ml-2 border border-fg/15 text-fg/40 text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full">
                    {item.type}
                  </span>
                </p>
              </div>

              {/* Right: diagonal image with arrow bubble */}
              <div className="relative w-36 flex-shrink-0 overflow-hidden">
                <svg
                  viewBox="0 0 144 112"
                  preserveAspectRatio="xMidYMid slice"
                  className="absolute inset-0 w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath id={`diag-${item.id}`}>
                      <polygon points="28,0 144,0 144,112 0,112" />
                    </clipPath>
                  </defs>
                  <image
                    href={item.image}
                    width="144"
                    height="112"
                    clipPath={`url(#diag-${item.id})`}
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>

                {/* Arrow bubble */}
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 10L10 2M10 2H4M10 2V8"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}