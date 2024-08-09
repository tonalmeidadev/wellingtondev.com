import Link from 'next/link'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'
import { Clock } from '@/components/clock'
import { Language } from '@/components/language'
import { Sidebar } from '@/components/sidebar'
import { Available } from '@/components/available'
import { HomeIcon } from 'lucide-react'
import { GoBack } from '@/components/go-back'

export default async function LayoutMain({
  children,
}: {
  children: React.ReactNode
}) {
  const { dictionary, locale } = await getLocaleAndDictionaryServer()

  return (
    <div className="h-screen md:pl-72">
      <Sidebar />

      <div className="m-auto flex max-w-5xl flex-col gap-40 px-8 py-8 xs:px-16">
        <header className="hidden grid-cols-1 items-center gap-8 md:grid md:grid-cols-[auto_auto] md:gap-0 lg:grid-cols-2">
          <div className="flex items-center gap-6 md:gap-8">
            <GoBack label={dictionary.layout.go_back} />

            <Link
              href="/"
              className="flex size-4 items-center justify-center gap-1"
              aria-label={dictionary.layout.go_back}
            >
              <HomeIcon className="size-4" />
            </Link>

            <Language currentLocale={locale} />
          </div>

          <div className="flex flex-col gap-2">
            <Clock />

            <span className="text-sm uppercase text-neutral-400 md:hidden">
              @2024 — Wellington Almeida
            </span>
          </div>
        </header>

        <main className="flex flex-col gap-16">
          <Available />

          {children}
        </main>

        <footer className="flex flex-col gap-4 md:hidden">
          <Clock />

          <span className="text-sm uppercase text-neutral-400">
            @2024 — Wellington Almeida
          </span>
        </footer>
      </div>
    </div>
  )
}
