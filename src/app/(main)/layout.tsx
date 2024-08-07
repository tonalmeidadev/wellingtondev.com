import Link from 'next/link'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'
import { Clock } from '@/components/clock'
import { Language } from '@/components/language'
import { Sidebar } from '@/components/sidebar'
import { Available } from '@/components/available'
import { MoveLeft } from 'lucide-react'

export default async function LayoutMain({
  children,
}: {
  children: React.ReactNode
}) {
  const { dictionary, locale } = await getLocaleAndDictionaryServer()

  return (
    <div className="h-screen md:pl-72">
      <Sidebar />

      <div className="m-auto flex max-w-5xl flex-col-reverse gap-40 px-8 py-8 xs:px-16 md:flex-col">
        <header className="grid grid-cols-1 items-center gap-8 md:grid-cols-[auto_auto] md:gap-0 lg:grid-cols-2">
          <div className="flex items-center gap-6 md:gap-8">
            <Link
              href="/"
              className="flex size-4 items-center justify-center gap-1"
              aria-label={dictionary.layout.go_back}
            >
              <MoveLeft className="size-4" />
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
      </div>
    </div>
  )
}
