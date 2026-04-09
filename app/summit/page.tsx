import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PANELS = [
  { time: "10:00 – 10:50 AM", track: "Light Breakfast" },
  {
    time: "11:00 – 11:50 AM",
    track: "Panel 1: SaaS and AI",
    description:
      "Exploring the future of AI-native products, scaling software businesses, and what comes next.",
  },
  {
    time: "12:00 – 12:50 PM",
    track: "Panel 2: Venture Capital and Small Businesses",
    description:
      "How investors evaluate opportunities, support founders, and navigate today's market.",
  },
  { time: "1:00 – 1:30 PM", track: "Catered Lunch" },
  {
    time: "1:30 – 2:20 PM",
    track: "Panel 3: Biotech & Life Sciences",
    description:
      "Innovations in biotech, healthcare, and the next generation of life sciences startups.",
  },
  {
    time: "2:30 – 3:20 PM",
    track: "Panel 4: Energy",
    description:
      "The future of energy, sustainability, and the technologies driving global change.",
  },
  { time: "3:30 – 4:20 PM", track: "Student Venture Showcase" },
];

const PAST_SPEAKERS = [
  {
    name: "Mariam Naficy",
    title: "Founder & Co-CEO",
    firm: "Minted",
    image: "/images/summit/past-speakers/Mariam-Naficy.jpg",
  },
  {
    name: "Brad Svrluga",
    title: "Co-founder & General Partner",
    firm: "Primary Venture Partners",
    image: "/images/summit/past-speakers/Brad-Svrluga.jpg",
  },
  {
    name: "Margaret (Peggy) Kim",
    title: "Founder & CEO",
    firm: "FUTURE NOW Media Foundation, Inc.",
    image: "/images/summit/past-speakers/Margaret-Kim.jpg",
  },
  {
    name: "JC Bahr-de Stefano",
    title: "Partner",
    firm: "Better Tomorrow Ventures",
    image: "/images/summit/past-speakers/JC-Bahr-de-Stefano.png",
  },
  {
    name: "Bo Peabody",
    title: "Managing Member",
    firm: "Cornice Ventures",
    image: "/images/summit/past-speakers/Bo-Peabody.avif",
  },
  {
    name: "Mike Curtin",
    title: "CEO",
    firm: "DC Central Kitchen",
    image: "/images/summit/past-speakers/Mike-Curtin.jpg",
  },
];

const STATS = [
  { value: "100+", label: "Attendees" },
  { value: "10+", label: "Speakers" },
  { value: "4", label: "Industry Panels" },
  { value: "3rd", label: "Annual Summit" },
];

export default function SummitPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Header />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/williamscollegexbanner.jpg"
            alt="Summit venue"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-sm tracking-widest uppercase text-white/80 mb-6 animate-fade-up">
            ✦ Williams Venture Studio Presents
          </p>

          <h1 className="font-display text-[clamp(4rem,13vw,10rem)] font-black leading-[0.88] tracking-tighter text-white animate-fade-up animate-fade-up-delay-1">
            The
            <br />
            Summit
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row gap-6 sm:gap-12 animate-fade-up animate-fade-up-delay-2">
            <div>
              <p className="text-sm tracking-widest uppercase text-white/80 mb-1">Date</p>
              <p className="text-base text-white">Saturday, May 2, 2026</p>
            </div>
            <div>
              <p className="text-sm tracking-widest uppercase text-white/80 mb-1">Time</p>
              <p className="text-base text-white">11:00 AM → 4:30 PM</p>
            </div>
            <div>
              <p className="text-sm tracking-widest uppercase text-white/80 mb-1">Format</p>
              <p className="text-base text-white">Panels + Networking</p>
            </div>
          </div>

          <div className="mt-10 animate-fade-up animate-fade-up-delay-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSelyB71bqBAPMhyMke9rvbOBCPPmz99VbTtJTpoYd9BUUshyg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-white/90 transition-colors"
            >
              Register Now
              <span>→</span>
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
      <section className="px-6 md:px-10 py-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-widest uppercase text-fg/30 mb-5">Why We Do This</p>
            <h2 className="font-display text-[clamp(2rem,6vw,4rem)] font-black leading-[0.95] tracking-tighter text-fg">
              Where Ambition Meets Experience
            </h2>
          </div>
          <div className="space-y-5 pt-2">
            <p className="text-fg/80 leading-relaxed text-md">
              The Summit exists to close the gap between those with ideas and those who have built
              them. It brings students face to face with founders, investors, and operators who have
              shaped industries — and are still doing it.
            </p>
            <p className="text-fg/60 leading-relaxed text-md">
              Across a full day of panels and discussion, we explore how companies are built, how
              capital moves, and how decisions are made at the highest level. The day ends not with
              a conclusion, but with connection — an open networking session where conversations turn
              into opportunities.
            </p>
            <p className="text-fg/60 leading-relaxed text-md">
              This is not a lecture. It is a room full of people who want to help you figure out
              what comes next.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-2">
          <div className="md:col-span-3 grid grid-cols-1 grid-rows-2 gap-2">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image src="/images/summit/DSC00432.JPEG" fill className="object-cover" alt="" />
            </div>
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/images/summit/DSC00491.JPEG"
                fill
                className="object-cover object-bottom"
                alt=""
              />
            </div>
          </div>
          <div className="relative aspect-[16/9] md:aspect-auto md:col-span-2 rounded-xl overflow-hidden">
            <Image src="/images/summit/DSC00373.JPEG" fill className="object-cover" alt="" />
          </div>
        </div>
      </section>

      {/* ── Schedule / Panels ── */}
      <section className="border-t border-border px-6 md:px-10 pt-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-fg/30 mb-5">May 2 — Schedule</p>
          <h2 className="font-display text-[clamp(2rem,6vw,4rem)] font-black leading-tight tracking-tighter text-fg mb-16">
            Five Panels, One Day.
          </h2>
          <div className="space-y-0">
            {PANELS.map((panel) => (
              <div
                key={panel.track}
                className="group grid grid-cols-[9rem_1fr] gap-4 md:gap-8 py-7 border-t border-border transition-colors px-2 -mx-2 rounded-lg items-start"
              >
                <p className="text-sm uppercase text-fg/60 pt-1 whitespace-nowrap font-bold">
                  {panel.time}
                </p>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-black text-fg mb-1">
                    {panel.track}
                  </h3>
                  <p className="text-sm text-fg/60 leading-relaxed">{panel.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Past Speakers ── */}
      <section className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <h2 className="font-display text-[clamp(2rem,6vw,4rem)] font-black leading-tight tracking-tighter text-fg">
              Past Speakers
            </h2>
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
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-fg">{speaker.name}</p>
                <p className="text-sm text-fg/60 mt-0.5">
                  {speaker.title}, {speaker.firm}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Register CTA ── */}
      <section id="register" className="border-t border-border px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs tracking-widest uppercase text-fg/60 mb-5">May 2, 2026</p>
            <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] font-black leading-[0.95] tracking-tighter text-fg">
              Come to
              <br />
              the Summit.
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-fg leading-relaxed text-sm">
              Spots are limited. Register to secure your place at the table.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-fg/60">
                <span className="w-1 h-1 rounded-full bg-fg-muted inline-block" />
                Saturday, May 2 — 11:00 AM to 4:30 PM
              </div>
              <div className="flex items-center gap-3 text-sm text-fg/60">
                <span className="w-1 h-1 rounded-full bg-fg-muted inline-block" />
                Four speaker panels across key industries
              </div>
              <div className="flex items-center gap-3 text-sm text-fg/60">
                <span className="w-1 h-1 rounded-full bg-fg-muted inline-block" />
                Open networking session to close the day
              </div>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSelyB71bqBAPMhyMke9rvbOBCPPmz99VbTtJTpoYd9BUUshyg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-fg text-bg text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-fg/90 transition-colors"
            >
              Register Now
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}