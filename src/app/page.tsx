import Link from 'next/link'
import Image from 'next/image'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'
import { Answers } from '@/components/answers'
import { Button } from '@/components/button'
import { Language } from '@/components/language'
import { Profile } from '@/components/profile'
import { AtSign, CalendarPlus, MoveRight } from 'lucide-react'

export default async function StartPage() {
  const { dictionary, locale } = await getLocaleAndDictionaryServer()

  return (
    <div className="m-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-center px-8">
      <header className="mb-8 flex flex-col items-center gap-16">
        <Language currentLocale={locale} />

        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
          <Profile orientation="row" size="lg" />

          <div className="flex items-center gap-1">
            <Button asChild className="px-4">
              <Link href="mailto:wellingtondev@icloud.com">
                <AtSign
                  size={14}
                  className="text-neutral-600 transition-colors duration-500 group-hover:text-neutral-50"
                />
                <span className="text-[11px] font-medium uppercase">
                  E-mail
                </span>
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="group relative overflow-hidden"
            >
              <Link href="https://cal.com/tonalmeidadev" target="_blank">
                <CalendarPlus
                  size={14}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:-translate-x-8"
                />
                <Image
                  src="/assets/cal.webp"
                  width={18}
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

      <main className="mb-8 w-full max-w-96 sm:max-w-none">
        <Answers />
      </main>

      <footer className="flex w-full flex-col items-center justify-center">
        <Link
          href="/home"
          className="group flex h-6 w-fit items-center text-neutral-400 hover:text-neutral-50"
        >
          <span className="text-[13px] leading-4 tracking-wide transition-all duration-500">
            {dictionary.home.next}
          </span>

          <MoveRight
            size={16}
            className="ml-1 transition-all duration-500 group-hover:ml-1"
          />
        </Link>
      </footer>
    </div>
  )
}
