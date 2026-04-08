export type Spotlight = {
  id: string
  title: string
  author: string
  source: string
  type: 'Article' | 'Project'
  href: string
  image: string
}

export const spotlights: Spotlight[] = [
  {
    id: '1',
    title: "Eamon's Take on the Give-to-Get Model",
    author: 'Eamon O\'Brien',
    source: 'Substack',
    type: 'Article',
    href: 'https://eamonstake.substack.com/p/eamons-take-on-the-give-to-get-model',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
  },
]