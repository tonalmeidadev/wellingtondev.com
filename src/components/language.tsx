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
    <div className="gap-2 flex items-center">
      {i18n.locales.map((lng) => (
        <button
          key={lng}
          disabled={currentLocale === lng}
          aria-hidden={currentLocale === lng}
          className="text-xs uppercase transition-colors duration-500 text-zinc-600 disabled:text-zinc-50"
          onClick={() => changeLanguage(lng as Locale)}
        >
          {lng === 'en-US' ? 'en-US' : 'pt-BR'}
        </button>
      ))}
    </div>
  )
}
