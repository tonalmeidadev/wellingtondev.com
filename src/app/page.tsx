import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Button } from '@/components/button'
import { Language } from '@/components/language'
import { Profile } from '@/components/profile'
import { AtSign, CalendarPlus, MoveRight } from 'lucide-react'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'
import { Question } from '@/components/question'

export const metadata: Metadata = {
  description:
    'Desenvolvedor Front-end que aprecia UX e sites acessíveis, constrói produtos digitais e que vive em São Paulo.',
  openGraph: {
    title: 'Wellington Almeida | Front-end Developer',
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

export default async function StartPage() {
  const { dictionary, locale } = await getLocaleAndDictionaryServer()

  const answers = [
    {
      idx: 'a',
      path: '/work/highlight',
      external: false,
      text: dictionary.answers.one,
    },
    {
      idx: 'b',
      path: '/profile',
      external: false,
      text: dictionary.answers.two,
    },
    {
      idx: 'c',
      path: 'https://api.whatsapp.com/send?phone=5511960245642',
      external: true,
      text: dictionary.answers.three,
    },
  ]

  return (
    <div className="m-auto flex min-h-screen w-full max-w-2xl flex-col items-center justify-center px-8">
      <header className="mb-12 flex flex-col items-center gap-16 md:mb-8">
        <Language currentLocale={locale} />

        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
          <Profile orientation="row" size="lg" />

          <div className="flex items-center gap-2">
            <Button asChild className="px-4">
              <Link href="mailto:wellingtondev@icloud.com">
                <AtSign className="size-4 text-neutral-600 transition-colors duration-500 group-hover:text-neutral-50" />

                <span className="text-sm font-medium uppercase">E-mail</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="group relative overflow-hidden"
            >
              <Link href="https://cal.com/tonalmeidadev" target="_blank">
                <CalendarPlus className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:-translate-x-10" />

                <Image
                  src="/assets/cal.webp"
                  width={22}
                  height={10}
                  quality={100}
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-5 select-none transition-transform duration-500 group-hover:-translate-x-1/2"
                  alt="Logo de Cal.com"
                />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="mb-14 flex w-full max-w-96 flex-col items-center gap-2 sm:max-w-none">
        <Question answers={answers} />
      </main>

      <footer className="flex w-full flex-col items-center justify-center">
        <Link
          href="/home"
          className="group flex h-6 w-fit items-center text-neutral-400 hover:text-neutral-50"
        >
          <span className="leading-4 tracking-wide transition-all duration-500">
            {dictionary.home.next}
          </span>

          <MoveRight className="ml-2 size-5 transition-all duration-500 group-hover:ml-1" />
        </Link>
      </footer>
    </div>
  )
}
