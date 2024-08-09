import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'
import { CalendarPlus } from 'lucide-react'
import { Button } from '@/components/button'

export const metadata: Metadata = {
  title: 'Profile',
  description:
    'Desenvolvimento de interfaces para web, aplicativos móveis, pwa (progressive web app), apoio em criações de UI/UX.',
  openGraph: {
    title: 'Profile — Wellington Almeida | Front-end Developer',
    description:
      'Desenvolvimento de interfaces para web, aplicativos móveis, pwa (progressive web app), apoio em criações de UI/UX.',
    url: 'https://wellingtondev.com',
  },
  alternates: {
    canonical: 'https://wellingtondev.com/profile',
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

export default async function ProfilePage() {
  const { dictionary } = await getLocaleAndDictionaryServer()

  const biography = dictionary.profile.biography

  const stack = [
    'Tailwind CSS',
    'shadcn/ui',
    'Storybook',
    'TypeScript',
    'React',
    'React Query',
    'Redux',
    'Zustand',
    'Next.js',
    'Cypress',
    'Vitest',
    'PlayWright',
    'Zod',
    'GraphQL',
    'Prisma ORM',
    'Headless CMS',
    'Git',
    'GitHub Actions',
    'Scrum',
  ]

  return (
    <>
      <div>
        <div className="relative">
          <Image
            src="/assets/profile.webp"
            alt={dictionary.profile.alt}
            width={760}
            height={640}
            quality={100}
            className="pointer-events-none h-96 w-full select-none rounded object-cover md:h-[inherit]"
          />

          <div className="absolute right-3 top-3 md:right-6 md:top-6">
            <Button
              asChild
              variant="primary"
              className="group relative overflow-hidden"
            >
              <Link href="https://cal.com/tonalmeidadev" target="_blank">
                <CalendarPlus className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:-translate-x-12" />

                <Image
                  src="/assets/cal.webp"
                  width={26}
                  height={10}
                  quality={100}
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-6 select-none transition-transform duration-500 group-hover:-translate-x-1/2"
                  alt="Logo de Cal.com"
                />
              </Link>
            </Button>
          </div>

          <div className="absolute bottom-3 left-5 right-5 flex max-w-sm flex-col gap-2 xs:bottom-5 xs:left-8 xs:right-8 md:bottom-8 lg:left-12 lg:right-12 lg:gap-4">
            <h1 className="w-3/5 text-xl leading-5 md:w-full">
              Wellington Almeida, front-end developer
            </h1>

            <p className="leading-6 text-neutral-400">
              {dictionary.profile.description}
            </p>
          </div>
        </div>

        <section className="mt-16 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-sm uppercase text-neutral-400">About-me</h2>

            <div className="flex flex-col gap-3">
              {biography.map((item, index) => (
                <p key={index} className="leading-6">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 flex flex-col gap-4">
          <h2 className="text-sm uppercase text-neutral-400">Stack</h2>

          <ul className="grid grid-cols-2 gap-2">
            {stack.map((item, index) => (
              <li key={index} className="list-inside list-disc leading-6">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}
