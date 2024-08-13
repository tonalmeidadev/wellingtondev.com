import Image from 'next/image'
import { Metadata } from 'next'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'
import { Hovered } from '@/components/hovered'
import { stack } from '@/utils/content'

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Desenvolvimento de interfaces para web, aplicativos móveis, pwa (progressive web app), apoio em criações de UI/UX.',
  openGraph: {
    title: 'Resume | Wellington Almeida — Front-end Developer',
    description:
      'Desenvolvimento de interfaces para web, aplicativos móveis, pwa (progressive web app), apoio em criações de UI/UX.',
    url: 'https://wellingtondev.com',
  },
  alternates: {
    canonical: 'https://wellingtondev.com/resume',
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

export default async function ResumePage() {
  const { dictionary } = await getLocaleAndDictionaryServer()

  const biography = dictionary.pages.resume.biography
  const experiences = dictionary.pages.experiences.items.defaults
  const volunteering = dictionary.pages.experiences.items.volunteering

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          {biography.map((item, index) => (
            <p key={index} className="leading-6">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="relative">
        <Image
          src="/assets/resume/piano.webp"
          alt={dictionary.pages.resume.image.alt}
          width={760}
          height={640}
          quality={100}
          className="pointer-events-none h-[36rem] w-full select-none rounded object-cover object-top md:h-[44rem]"
          priority
        />

        <div className="absolute bottom-5 left-5 right-5 flex max-w-sm flex-col gap-2 xs:bottom-8 xs:left-8 xs:right-8 md:bottom-12 lg:left-12 lg:right-12">
          <h1 className="w-60 text-2xl leading-6">
            Wellington Almeida, front-end developer
          </h1>

          <p className="leading-5 text-neutral-400">
            {dictionary.pages.resume.description}
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-16">
        <Hovered.Root title="XP">
          {experiences.map((item, index) => (
            <li key={index}>
              <Hovered.Slot>
                <Hovered.Item
                  startDate={item.startDate}
                  endDate={item.endDate}
                  company={item.company}
                  occupation={item.occupation}
                />
              </Hovered.Slot>
            </li>
          ))}
        </Hovered.Root>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm uppercase text-neutral-400">Stack</h2>

        <ul className="grid grid-cols-2 gap-2">
          {stack.map((item, index) => (
            <li key={index} className="list-inside list-disc leading-6">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-16">
        <Hovered.Root title={dictionary.pages.works.titles.volunteering}>
          {volunteering.map((item, index) => (
            <li key={index}>
              <Hovered.Slot>
                <Hovered.Item
                  startDate={item.startDate}
                  endDate={item.endDate}
                  company={item.company}
                  occupation={item.occupation}
                />
              </Hovered.Slot>
            </li>
          ))}
        </Hovered.Root>
      </section>
    </>
  )
}
