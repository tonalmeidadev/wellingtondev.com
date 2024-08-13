import Link from 'next/link'
import { HomeIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { NavigationBarProps } from '@/types'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'
import { Language } from './language'
import { GoBack } from './go-back'

export async function NavigationBar({ className }: NavigationBarProps) {
  const { dictionary, locale } = await getLocaleAndDictionaryServer()

  return (
    <div className={twMerge('flex items-center gap-6 md:gap-8', className)}>
      <GoBack label={dictionary.layout.go_back} />

      <Link
        href="/"
        className="flex size-4 items-center justify-center gap-1"
        aria-label={dictionary.layout.go_home}
      >
        <HomeIcon className="size-4" />
      </Link>

      <Language currentLocale={locale} />
    </div>
  )
}
