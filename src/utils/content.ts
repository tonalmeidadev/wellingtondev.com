import { AnswersProps } from '@/types'

export const answers = (a: string, b: string, c: string): AnswersProps[] => {
  return [
    { idx: 'a', path: '/work/featured', text: a },
    { idx: 'b', path: '/works', text: b },
    { idx: 'c', path: '/resume', text: c },
  ]
}

export const media = (a: string, b: string, c: string, d: string) => {
  return [
    { video: true, url: '/assets/work/featured/eba-home.mp4', title: a },
    { video: false, url: '/assets/work/featured/eba-test.webp', title: b },
    { video: false, url: '/assets/work/featured/eba-dashboard.webp', title: c },
    { video: false, url: '/assets/work/featured/eba-classroom.webp', title: d },
  ]
}

export const stack = [
  'Tailwind CSS',
  'shadcn/ui',
  'Storybook',
  'TypeScript',
  'React',
  'Context API',
  'Zustand',
  'Next.js',
  'Cypress',
  'Zod',
  'GraphQL',
  'Prisma ORM',
  'Headless CMS',
  'Git',
  'GitHub Actions',
  'Scrum',
]

export const stack_work = [
  'Next.js 14',
  'TypeScript',
  'Fetch API',
  'Zod',
  'Tailwind CSS',
  'CVA',
  'Radix UI',
  'shadcn/ui',
  'Framer Motion',
  'Git',
  'GitHub Actions',
]

export const navigation = [
  { path: '/resume', text: 'resume', disabled: false },
  { path: '/works', text: 'Works', disabled: false },
  { path: '/blog', text: 'Blog', disabled: true },
]
