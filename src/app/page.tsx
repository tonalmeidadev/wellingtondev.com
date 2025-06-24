import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Button } from '@/components/button'
import { Language } from '@/components/language'
import { Profile } from '@/components/profile'
import { AtIcon, CalendarPlusIcon, GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react/ssr'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'
import { Question } from '@/components/question'
import { answers } from '@/utils/content'

export const metadata: Metadata = {
  description:
    'Desenvolvedor Front-end que aprecia UX e sites acessíveis, constrói produtos digitais e que vive em São Paulo.',
  openGraph: {
    title: 'Wellington Almeida — Front-end Developer',
    description:
      'Desenvolvedor Front-end que aprecia UX e sites acessíveis, constrói produtos digitais e que vive em São Paulo.',
    url: 'https://wellingtondev.com',
  },
  alternates: {
    canonical: 'https://wellingtondev.com/',
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
  const { dictionary, locale } = await getLocaleAndDictionaryServer()

  return (
    <div className="m-auto flex min-h-screen w-full max-w-lg flex-col items-center justify-center px-8">
      <header className="mb-12 flex max-w-80 flex-col items-center gap-16 md:mb-8">
        <Language currentLocale={locale} />

        <div className="flex w-fit flex-col items-center justify-center gap-6">
          <Profile orientation="row" size="lg" />

          <div className="flex w-full items-center gap-2">
            <Button asChild className="w-full justify-center px-4">
              <Link href="mailto:wellingtondev@icloud.com">
                <AtIcon className="size-5 text-neutral-50 transition-colors" />
                <span className="lowercase">E-mail</span>
              </Link>
            </Button>

            <Button asChild variant="secondary">
              <Link
                href="https://www.linkedin.com/in/wellingtondev/"
                target="_blank"
                className="flex items-center justify-center"
                aria-label={dictionary.pages.home.linkedin}
              >
                <LinkedinLogoIcon
                  className="size-6 fill-neutral-50"
                />
              </Link>
            </Button>

            <Button asChild variant="secondary">
              <Link
                href="https://www.github.com/tonalmeidadev/"
                target="_blank"
                className="flex items-center justify-center"
                aria-label={dictionary.pages.home.github}
              >
                <GithubLogoIcon
                  className="size-6 fill-neutral-50"
                />
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="group relative overflow-hidden"
            >
              <Link
                href="https://cal.com/wellingtondev"
                target="_blank"
                aria-label={dictionary.pages.home.schedule}
              >
                <CalendarPlusIcon className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:-translate-x-12" />
                <Image
                  src="/assets/resume/cal.webp"
                  width={22}
                  height={12}
                  quality={100}
                  className="pointer-events-none absolute left-1/2 top-1/2 h-3.5 w-6 -translate-y-1/2 translate-x-6 select-none transition-transform group-hover:-translate-x-1/2"
                  alt="Logo de Cal.com"
                />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex w-full max-w-96 flex-col items-center gap-2 sm:max-w-none">
        <Question
          answers={answers(
            dictionary.pages.home.answers.a,
            dictionary.pages.home.answers.b,
            dictionary.pages.home.answers.c,
          )}
          skip={dictionary.pages.home.skip}
        />
      </main>
    </div>
  )
}
