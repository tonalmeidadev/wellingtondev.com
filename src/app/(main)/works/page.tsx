import Link from 'next/link'
import { Metadata } from 'next'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'
import { Hovered } from '@/components/hovered'

export const metadata: Metadata = {
  title: 'Works',
  description:
    'Um pouco mais sobre o que construí durante a minha carreira como desenvolvedor',
  openGraph: {
    title: 'Works | Wellington Almeida — Front-end Developer',
    description:
      'Um pouco mais sobre o que construí durante a minha carreira como desenvolvedor',
    url: 'https://wellingtondev.com',
  },
  alternates: {
    canonical: 'https://wellingtondev.com/works',
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

export default async function WorksPage() {
  const { dictionary } = await getLocaleAndDictionaryServer()

  const projectsFeatured = dictionary.pages.works.items.defaults.filter(
    (project) => project.featured,
  )

  const projects = dictionary.pages.works.items.defaults.filter(
    (project) => !project.featured,
  )

  const volunteering = dictionary.pages.works.items.volunteering

  return (
    <>
      <Hovered.Root title={dictionary.pages.works.titles.featured}>
        {projectsFeatured.map((item, index) => (
          <li key={index}>
            <Hovered.Slot asChild>
              <Link href="/work/featured">
                <Hovered.Item
                  startDate={item.startDate}
                  endDate={item.endDate}
                  company={item.company}
                  occupation={item.occupation}
                />
              </Link>
            </Hovered.Slot>
          </li>
        ))}
      </Hovered.Root>

      <Hovered.Root title={dictionary.pages.works.titles.works}>
        {projects.map((item, index) => (
          <>
            <li key={index}>
              {item.path === '/' ? (
                <Hovered.Slot>
                  <Hovered.Item
                    startDate={item.startDate}
                    endDate={item.endDate}
                    company={item.company}
                    occupation={item.occupation}
                  />
                </Hovered.Slot>
              ) : (
                <Hovered.Slot asChild>
                  <Link href={item.path} target="_blank">
                    <Hovered.Item
                      startDate={item.startDate}
                      endDate={item.endDate}
                      company={item.company}
                      occupation={item.occupation}
                    />
                  </Link>
                </Hovered.Slot>
              )}
            </li>
          </>
        ))}
      </Hovered.Root>

      <Hovered.Root title={dictionary.pages.works.titles.volunteering}>
        {volunteering.map((item, index) => (
          <>
            <li key={index}>
              {item.path === '/' ? (
                <Hovered.Slot>
                  <Hovered.Item
                    startDate={item.startDate}
                    endDate={item.endDate}
                    company={item.company}
                    occupation={item.occupation}
                  />
                </Hovered.Slot>
              ) : (
                <Hovered.Slot asChild>
                  <Link href={item.path} target="_blank">
                    <Hovered.Item
                      startDate={item.startDate}
                      endDate={item.endDate}
                      company={item.company}
                      occupation={item.occupation}
                    />
                  </Link>
                </Hovered.Slot>
              )}
            </li>
          </>
        ))}
      </Hovered.Root>
    </>
  )
}
