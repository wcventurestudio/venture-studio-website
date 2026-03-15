import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// ── Data ───────────────────────────────────────────────────────────────────

const PANELS = [
  {
    time: '11:00 AM',
    track: 'Energy',
    description: 'The future of energy infrastructure, climate tech, and the capital flowing into the transition.',
  },
  {
    time: '12:00 PM',
    track: 'Venture Capital',
    description: 'How top VCs are deploying capital, what they look for in founders, and where the market is heading.',
  },
  {
    time: '1:30 PM',
    track: 'AI / SaaS',
    description: 'Building and scaling AI-native products — from zero to enterprise, and what comes next.',
  },
  {
    time: '2:30 PM',
    track: 'Biotech & Life Sciences',
    description: 'Breakthroughs in therapeutics, longevity, and the new generation of biotech startups.',
  },
  {
    time: '3:30 PM',
    track: 'Consumer Fintech',
    description: 'Reimagining financial access, payments, and wealth for the next generation of consumers.',
  },
]

const PAST_SPEAKERS = [
  {
    name: 'Alex Rivera',
    title: 'General Partner',
    firm: 'Sequoia Capital',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Priya Nair',
    title: 'Co-founder & CEO',
    firm: 'Luminary Health',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    name: 'Jordan Lee',
    title: 'Partner',
    firm: 'Andreessen Horowitz',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
  {
    name: 'Maya Okafor',
    title: 'Founder',
    firm: 'Clarity Finance',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
  },
  {
    name: 'Daniel Cho',
    title: 'Managing Director',
    firm: 'Tiger Global',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Sofia Martínez',
    title: 'VP of Product',
    firm: 'Stripe',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
]

const STATS = [
  { value: '500+', label: 'Attendees' },
  { value: '30+', label: 'Speakers' },
  { value: '5', label: 'Industry Panels' },
  { value: '3rd', label: 'Annual Summit' },
]

// ── Page ───────────────────────────────────────────────────────────────────

export default function SummitPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Header />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-24 px-6 md:px-10 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80"
            alt="Summit venue"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-fg/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <p className="text-sm tracking-widest uppercase text-bg/50 mb-6 animate-fade-up">
            ✦ Williams Venture Studio Presents
          </p>

          <h1
            className="font-display text-[clamp(4rem,13vw,10rem)] font-black leading-[0.88] tracking-tighter text-bg animate-fade-up animate-fade-up-delay-1"
          >
            The
            <br />
            Summit
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row gap-6 sm:gap-12 animate-fade-up animate-fade-up-delay-2">
            <div>
              <p className="text-xs tracking-widest uppercase text-bg/40 mb-1">Date</p>
              <p className="text-base text-bg/80">Saturday, April 25, 2026</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-bg/40 mb-1">Time</p>
              <p className="text-base text-bg/80">11:00 AM \u2013 6:00 PM</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-bg/40 mb-1">Format</p>
              <p className="text-base text-bg/80">Panels + Networking</p>
            </div>
          </div>

          <div className="mt-10 animate-fade-up animate-fade-up-delay-3">
            <a
              href="#register"
              className="inline-flex items-center gap-3 bg-bg text-fg text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-bg/90 transition-colors"
            >
              Register Now
              <span>\u2192</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-y border-border">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="font-display text-4xl md:text-5xl font-black text-fg">{value}</p>
              <p className="text-xs tracking-widest uppercase text-fg/40 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── About / Mission ── */}
      <section className="px-6 md:px-10 py-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-widest uppercase text-fg/30 mb-5">Why We Do This</p>
            <h2 className="font-display text-[clamp(2rem,6vw,4rem)] font-black leading-[0.95] tracking-tighter text-fg">
              Where the Next Generation Meets the People Building It
            </h2>
          </div>
          <div className="space-y-5 pt-2">
            <p className="text-fg/60 leading-relaxed text-sm">
              The Summit was born from a simple belief: that students with bold ideas deserve direct access
              to the investors, founders, and operators who turned their own ideas into reality. Not
              through a recruiter, not through a cold email — face to face.
            </p>
            <p className="text-fg/40 leading-relaxed text-sm">
              Each year we convene Williams students, alumni, and leading practitioners across five
              industries for a day of honest conversation, real mentorship, and the kind of connections
              that change the trajectory of a career. Speaker panels run through the afternoon, followed
              by an open networking session where you set the agenda.
            </p>
            <p className="text-fg/40 leading-relaxed text-sm">
              This is not a lecture. It is a room full of people who want to help you figure out what
              comes next.
            </p>
          </div>
        </div>

        {/* Photo grid */}
        <div className="mt-16 grid grid-cols-3 gap-3">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden col-span-1">
            <Image
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80"
              alt="Summit moment"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden col-span-1 mt-8">
            <Image
              src="https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&q=80"
              alt="Summit moment"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden col-span-1">
            <Image
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80"
              alt="Summit moment"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Schedule / Panels ── */}
      <section className="border-t border-border px-6 md:px-10 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-fg/30 mb-5">April 25 \u2014 Schedule</p>
          <h2 className="font-display text-[clamp(2rem,6vw,4rem)] font-black leading-tight tracking-tighter text-fg mb-16">
            Five Panels.
            <br />
            One Day.
          </h2>

          <div className="space-y-0">
            {PANELS.map((panel, i) => (
              <div
                key={panel.track}
                className="group grid grid-cols-[6rem_1fr] md:grid-cols-[8rem_1fr_auto] gap-4 md:gap-8 py-7 border-t border-border hover:bg-fg/[0.02] transition-colors px-2 -mx-2 rounded-lg items-start"
              >
                <p className="text-xs tracking-widest uppercase text-fg/30 pt-1">{panel.time}</p>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-black text-fg mb-1">
                    {panel.track}
                  </h3>
                  <p className="text-sm text-fg/50 leading-relaxed">{panel.description}</p>
                </div>
                <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-border text-fg/20 group-hover:text-fg group-hover:border-fg/20 transition-colors mt-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}

            {/* Networking cap */}
            <div className="grid grid-cols-[6rem_1fr] md:grid-cols-[8rem_1fr_auto] gap-4 md:gap-8 py-7 border-t border-b border-border px-2 -mx-2 items-start">
              <p className="text-xs tracking-widest uppercase text-fg/30 pt-1">5:00 PM</p>
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-black text-fg mb-1">
                  Networking
                </h3>
                <p className="text-sm text-fg/50 leading-relaxed">
                  Open floor networking with speakers, founders, and fellow attendees. Light refreshments provided.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Past Speakers ── */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs tracking-widest uppercase text-fg/30 mb-5">Who Has Spoken</p>
              <h2 className="font-display text-[clamp(2rem,6vw,4rem)] font-black leading-tight tracking-tighter text-fg">
                Past Speakers
              </h2>
            </div>
            <p className="text-sm text-fg/40 max-w-xs leading-relaxed">
              A glimpse at the practitioners and investors who have joined us in previous years.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {PAST_SPEAKERS.map((speaker) => (
              <div key={speaker.name} className="group">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-fg/5">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <p className="text-sm font-medium text-fg">{speaker.name}</p>
                <p className="text-xs text-fg/40 mt-0.5">{speaker.title}, {speaker.firm}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Register CTA ── */}
      <section id="register" className="border-t border-border px-6 md:px-10 py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-widest uppercase text-fg/30 mb-5">April 25, 2026</p>
            <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] font-black leading-[0.95] tracking-tighter text-fg">
              Come to
              <br />
              the Summit.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-fg/50 leading-relaxed text-sm">
              Spots are limited. Register to secure your place at the table.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-fg/60">
                <span className="w-1 h-1 rounded-full bg-fg-muted inline-block" />
                Saturday, April 25 \u2014 11:00 AM to 6:00 PM
              </div>
              <div className="flex items-center gap-3 text-sm text-fg/60">
                <span className="w-1 h-1 rounded-full bg-fg-muted inline-block" />
                Five speaker panels across key industries
              </div>
              <div className="flex items-center gap-3 text-sm text-fg/60">
                <span className="w-1 h-1 rounded-full bg-fg-muted inline-block" />
                Open networking session to close the day
              </div>
            </div>
            <a
              href="mailto:hello@williams.studio"
              className="inline-flex items-center gap-3 bg-fg text-bg text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-fg/90 transition-colors"
            >
              Request an Invite
              <span>\u2192</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}