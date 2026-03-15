export type Project = {
  id: string
  title: string
  subtitle: string
  category: string
  image: string
  slug: string
  about: string
  details?: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Series',
    subtitle: 'Weekly Hackathons',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    slug: 'ai-series',
    about:
      'Williams Venture Studio hosts weekly mini-hackathons on campus focused on AI/ML. These sessions bring together students from across disciplines to build, experiment, and ship real projects in a single afternoon. No experience required — just curiosity and a laptop.',
    details: [
      { label: 'Format', value: 'Weekly on-campus sessions' },
      { label: 'Focus', value: 'AI / ML' },
      { label: 'Open to', value: 'All Williams students' },
    ],
  },
  {
    id: '2',
    title: 'Summit',
    subtitle: 'Annual Industry Conference',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    slug: 'summit',
    about: '',
    details: [],
  },
  {
    id: '3',
    title: 'Meetings',
    subtitle: 'Studio Sessions',
    category: 'Studio',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    slug: 'meetings',
    about:
      'Regular studio meetings where members share what they are working on, workshop ideas, and hold each other accountable. Part pitch practice, part peer mentorship, part community.',
    details: [
      { label: 'Cadence', value: 'Weekly' },
      { label: 'Format', value: 'Open floor + workshops' },
    ],
  },
  {
    id: '4',
    title: 'Spotlights',
    subtitle: 'Celebrating our People',
    category: 'Reading',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    slug: 'spotlights',
    about:
      'Spotlights celebrates the writing and thinking coming out of our community. We surface the essays, frameworks, and ideas that members are putting into the world — starting with the work that deserves a wider audience.',
    details: [
      { label: 'Format', value: 'Written profiles & essays' },
      { label: 'Featured', value: "Eamon's Take on the Give-to-Get Model" },
      { label: 'Read it', value: 'eamonstake.substack.com/p/eamons-take-on-the-give-to-get-model' },
    ],
  },
]