import Link from 'next/link'
import { Navigation } from './navigation'
import { Profile } from './profile'
import { Language } from './language'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'
import { MoveLeft } from 'lucide-react'

export async function Sidebar() {
  const { dictionary, locale } = await getLocaleAndDictionaryServer()

  return (
    <aside className="relative flex flex-col items-center justify-between gap-12 p-8 xs:px-16 md:fixed md:bottom-0 md:left-0 md:top-0 md:h-screen md:w-full md:max-w-72 md:gap-0 md:py-8">
      <div className="flex items-center gap-6 md:hidden">
        <Link
          href="/"
          className="flex size-4 items-center justify-center gap-1"
          aria-label={dictionary.layout.go_back}
        >
          <MoveLeft className="size-4" />
        </Link>

        <Language currentLocale={locale} />
      </div>

      <div className="flex w-full items-center justify-between md:h-full md:flex-col md:items-start">
        <Profile orientation="column" size="sm" />
        <Navigation />
      </div>
    </aside>
  )
}
