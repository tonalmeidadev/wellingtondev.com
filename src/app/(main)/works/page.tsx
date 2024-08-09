import Link from 'next/link'
import { Metadata } from 'next'
import { Works } from '@/components/works/works'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'

export const metadata: Metadata = {
  title: 'Works',
  description:
    'Um pouco mais sobre o que construí durante a minha carreira como desenvolvedor',
  openGraph: {
    title: 'Works — Wellington Almeida | Front-end Developer',
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

  const projectsHighlight = dictionary.works.projects.defaults.filter(
    (project) => project.highlight,
  )

  const projects = dictionary.works.projects.defaults.filter(
    (project) => !project.highlight,
  )

  const volunteering = dictionary.works.projects.volunteering

  return (
    <>
      <Works.Root title={dictionary.works.highlight.button}>
        {projectsHighlight.map((item, index) => (
          <li key={index}>
            <Works.Hovered asChild>
              <Link href="/work/highlight">
                <Works.Item
                  startDate={item.startDate}
                  endDate={item.endDate}
                  company={item.company}
                  occupation={item.occupation}
                />
              </Link>
            </Works.Hovered>
          </li>
        ))}
      </Works.Root>

      <Works.Root title={dictionary.works.titles.works}>
        {projects.map((item, index) => (
          <>
            <li key={index}>
              {item.path === '/' ? (
                <Works.Hovered>
                  <Works.Item
                    startDate={item.startDate}
                    endDate={item.endDate}
                    company={item.company}
                    occupation={item.occupation}
                  />
                </Works.Hovered>
              ) : (
                <Works.Hovered asChild>
                  <Link href={item.path} target="_blank">
                    <Works.Item
                      startDate={item.startDate}
                      endDate={item.endDate}
                      company={item.company}
                      occupation={item.occupation}
                    />
                  </Link>
                </Works.Hovered>
              )}
            </li>
          </>
        ))}
      </Works.Root>

      <Works.Root title={dictionary.works.titles.volunteering}>
        {volunteering.map((item, index) => (
          <>
            <li key={index}>
              {item.path === '/' ? (
                <Works.Hovered>
                  <Works.Item
                    startDate={item.startDate}
                    endDate={item.endDate}
                    company={item.company}
                    occupation={item.occupation}
                  />
                </Works.Hovered>
              ) : (
                <Works.Hovered asChild>
                  <Link href={item.path} target="_blank">
                    <Works.Item
                      startDate={item.startDate}
                      endDate={item.endDate}
                      company={item.company}
                      occupation={item.occupation}
                    />
                  </Link>
                </Works.Hovered>
              )}
            </li>
          </>
        ))}
      </Works.Root>
    </>
  )
}
