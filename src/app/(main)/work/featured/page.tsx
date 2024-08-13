import Link from 'next/link'
import { Metadata } from 'next'
import { Carousel } from '@/components/carousel'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'
import { MoveUpRight } from 'lucide-react'
import { WorksFeatured } from '@/types'
import { media, stack_work } from '@/utils/content'

export const metadata: Metadata = {
  title: 'EBA Escola Bíblica ADAI',
  description:
    'Nesse projeto, atuei principalmente como Front-end Developer, contribuindo também para o desenvolvimento da interface visual (UI) e experiência do usuário (UX).',
  openGraph: {
    title: 'EBA Escola Bíblica ADAI | Wellington Almeida — Front-end Developer',
    description:
      'Nesse projeto, atuei principalmente como Front-end Developer, contribuindo também para o desenvolvimento da interface visual (UI) e experiência do usuário (UX).',
    url: 'https://wellingtondev.com',
  },
  alternates: {
    canonical: 'https://wellingtondev.com/work/featured',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default async function WorksFeaturedPage() {
  const { dictionary } = await getLocaleAndDictionaryServer()

  const work = dictionary.pages.works.items.defaults.find(
    (project: WorksFeatured) => project.featured !== undefined,
  )

  if (!work || !work.featured) {
    return (
      <>
        <h1 className="text-sm">
          {dictionary.pages.works.titles.featured_error}
        </h1>
      </>
    )
  }

  return (
    <>
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-0">
        <section className="flex flex-col gap-2">
          <span className="text-sm">
            {work.startDate}, {work.endDate}
          </span>

          <h1 className="text-lg">{work.company}</h1>
        </section>

        <Link
          href={work.path}
          target="_blank"
          className="group flex h-6 w-fit items-center text-neutral-400 hover:text-neutral-50"
        >
          <span className="leading-4 tracking-wide transition-all duration-500">
            {work.featured.cta}
          </span>

          <MoveUpRight className="ml-1 size-4 transition-all duration-500 group-hover:ml-2" />
        </Link>
      </section>

      <section className="flex flex-col gap-4">
        <Carousel
          media={media(
            work?.featured?.media.home_title,
            work?.featured?.media.test_title,
            work?.featured?.media.dashboard_title,
            work?.featured?.media.classrom_title,
          )}
        />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm uppercase text-neutral-400">
          {work.featured.description_title}
        </h2>

        <div
          className="leading-6"
          dangerouslySetInnerHTML={{ __html: work.featured.description }}
        />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm uppercase text-neutral-400">Stack</h2>

        <ul className="grid grid-cols-2 gap-2">
          {stack_work.map((item, index) => (
            <li key={index} className="list-inside list-disc leading-6">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
