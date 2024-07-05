import Link from 'next/link'
import Image from 'next/image'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'
import { ArrowUpRight, AtSign, Calendar } from 'lucide-react'
import { Answers } from './answers'
import { Available } from './available'
import { Language } from './language'
import { Profile } from './profile'
import { Button } from './button'

export async function Welcome() {
  const { dictionary, locale } = await getLocaleAndDictionaryServer()

  return (
    <div className="flex flex-col w-full m-auto max-w-xl min-h-screen items-center justify-center px-8">
      <header className="flex flex-col mb-8 gap-16 items-center">
        <Language currentLocale={locale} />

        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
          <Profile orientation="row" />

          <div className="flex items-center gap-1">
            <Button asChild className="px-4">
              <Link href="mailto:wellingtondev@icloud.com">
                <AtSign
                  size={14}
                  className="text-zinc-600 group-hover:text-zinc-50 transition-colors duration-500"
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
                <Calendar
                  size={14}
                  className="absolute top-1/2 -translate-y-1/2 left-1/2 transition-transform duration-500 -translate-x-1/2 group-hover:-translate-x-8"
                />
                <Image
                  src="/assets/cal.webp"
                  width={18}
                  height={10}
                  quality={100}
                  className="pointer-events-none select-none absolute top-1/2 duration-500 -translate-y-1/2 left-1/2 transition-transform translate-x-5 group-hover:-translate-x-1/2"
                  alt="Logo de Cal.com"
                />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="w-full mb-8 max-w-96 sm:max-w-none">
        <Answers />
      </main>

      <footer className="flex flex-col justify-center items-center w-full">
        <Available />

        <Link
          href="/home"
          className="group mt-16 flex h-6 w-fit items-center text-zinc-400 hover:text-zinc-50"
        >
          <span className="text-[13px] leading-4 tracking-wide transition-all duration-500">
            {dictionary.home.next}
          </span>

          <ArrowUpRight
            size={16}
            className="group-hover:ml-1 ml-0.5 transition-all duration-500"
          />
        </Link>
      </footer>
    </div>
  )
}
