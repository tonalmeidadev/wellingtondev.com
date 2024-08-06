import { Metadata } from 'next'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'
import { Biography } from '@/components/biography'
import { Works } from '@/components/works/works'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Desenvolvedor Front-end que aprecia UX e sites acessíveis, constrói produtos digitais e que vive em São Paulo.',
  openGraph: {
    title: 'Home — Wellington Almeida | Front-end Developer',
    description:
      'Desenvolvedor Front-end que aprecia UX e sites acessíveis, constrói produtos digitais e que vive em São Paulo.',
    url: 'https://wellingtondev.com',
  },
  alternates: {
    canonical: 'https://wellingtondev.com/home',
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

export default async function HomePage() {
  const { dictionary } = await getLocaleAndDictionaryServer()

  const experiences = dictionary.works.experiences.defaults
  const volunteering = dictionary.works.experiences.volunteering

  return (
    <>
      <Biography />

      <Works.Root title={dictionary.works.titles.experiences}>
        {experiences.map((item, index) => (
          <li key={index}>
            <Works.Hovered>
              <Works.Item
                startDate={item.startDate}
                endDate={item.endDate}
                company={item.company}
                occupation={item.occupation}
              />
            </Works.Hovered>
          </li>
        ))}
      </Works.Root>

      <Works.Root title={dictionary.works.titles.volunteering}>
        {volunteering.map((item, index) => (
          <li key={index}>
            <Works.Hovered>
              <Works.Item
                startDate={item.startDate}
                endDate={item.endDate}
                company={item.company}
                occupation={item.occupation}
              />
            </Works.Hovered>
          </li>
        ))}
      </Works.Root>
    </>
  )
}
