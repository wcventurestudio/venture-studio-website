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
    image: '/images/summit/DSC00478.JPEG',
    slug: 'summit',
    about: '',
    details: [],
  },
  {
    id: '2',
    title: 'Spotlights',
    subtitle: 'Celebrating our People',
    category: 'Reading',
    image: '/images/summit/DSC00379.JPEG',
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