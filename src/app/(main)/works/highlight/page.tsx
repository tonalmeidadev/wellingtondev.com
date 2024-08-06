import { Carousel } from '@/components/carousel'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'
import { MoveUpRight } from 'lucide-react'
import Link from 'next/link'

type WorksHighlight = {
  path: string
  startDate: string
  endDate: string
  company: string
  occupation: string
  highlight?: {
    cta: string
    description_title: string
    description: string
  }
}

export default async function WorksHighlightPage() {
  const { dictionary } = await getLocaleAndDictionaryServer()

  const work = dictionary.works.projects.defaults.find(
    (project: WorksHighlight) => project.highlight !== undefined,
  )

  const media = [
    {
      video: true,
      url: '/assets/work-highlight/eba-home.mp4',
      title: work?.highlight?.media.home_title,
    },
    {
      video: false,
      url: '/assets/work-highlight/eba-test.webp',
      title: work?.highlight?.media.test_title,
    },
    {
      video: false,
      url: '/assets/work-highlight/eba-dashboard.webp',
      title: work?.highlight?.media.dashboard_title,
    },
    {
      video: false,
      url: '/assets/work-highlight/eba-classroom.webp',
      title: work?.highlight?.media.classrom_title,
    },
  ]

  const stack = [
    'Next.js 14',
    'TypeScript',
    'Fetch API',
    'Zod',
    'Tailwind CSS',
    'CVA',
    'shadcn/ui',
    'Framer Motion',
    'Git',
    'GitHub Actions',
  ]

  if (!work || !work.highlight) {
    return (
      <>
        <h1 className="text-sm">{dictionary.works.highlight.error}</h1>
      </>
    )
  }

  return (
    <>
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-0">
        <section className="flex flex-col gap-2">
          <span className="text-xs">
            {work.startDate}, {work.endDate}
          </span>
          <h1>{work.company}</h1>
        </section>

        <Link
          href={work.path}
          target="_blank"
          className="group flex h-6 w-fit items-center text-neutral-400 hover:text-neutral-50"
        >
          <span className="text-[13px] leading-4 tracking-wide transition-all duration-500">
            {work.highlight.cta}
          </span>

          <MoveUpRight
            size={16}
            className="ml-1 transition-all duration-500 group-hover:ml-1"
          />
        </Link>
      </section>

      <section className="flex flex-col gap-4">
        <Carousel media={media} />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-[11px] uppercase text-neutral-400">
          {work.highlight.description_title}
        </h2>

        <div
          className="text-sm"
          dangerouslySetInnerHTML={{ __html: work.highlight.description }}
        />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-[11px] uppercase text-neutral-400">Stack</h2>

        <ul className="grid grid-cols-2 gap-2">
          {stack.map((item, index) => (
            <li key={index} className="list-inside list-disc text-sm leading-5">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
