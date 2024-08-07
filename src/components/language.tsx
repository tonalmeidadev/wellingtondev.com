'use client'

import { useRouter } from 'next/navigation'
import { i18n, Locale } from '@/config/i18n.config'
import { createCookie } from '@/config/cookies'

interface LanguageProps {
  currentLocale: Locale
}

export function Language({ currentLocale }: LanguageProps) {
  const router = useRouter()

  const changeLanguage = async (newLocale: Locale) => {
    await createCookie('NEXT_LOCALE', newLocale)
    router.refresh()
  }

  return (
    <div className="flex items-center gap-2">
      {i18n.locales.map((lng) => (
        <button
          key={lng}
          disabled={currentLocale === lng}
          className="text-sm uppercase leading-[0.8125rem] text-neutral-400 transition-colors duration-500 disabled:text-neutral-50"
          onClick={() => changeLanguage(lng as Locale)}
        >
          {lng === 'en-US' ? 'en-US' : 'pt-BR'}
        </button>
      ))}
    </div>
  )
}
