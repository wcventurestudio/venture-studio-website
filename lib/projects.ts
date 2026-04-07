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
    title: 'Summit',
    subtitle: 'Annual Industry Conference',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    slug: 'summit',
    about: '',
    details: [],
  },
  {
    id: '2',
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