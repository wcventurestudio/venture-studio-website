export type Project = {
  id: string
  title: string
  category: string
  image: string
  slug: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Series',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    slug: 'ai-series',
  },
  {
    id: '2',
    title: 'Summit',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    slug: 'summit',
  },
  {
    id: '3',
    title: 'Meetings',
    category: 'Studio',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    slug: 'meetings',
  },
  {
    id: '4',
    title: 'Spotlights',
    category: 'Reading',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    slug: 'spotlights',
  },
]
