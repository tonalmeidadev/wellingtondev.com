'use client'

import { useRouter } from 'next/navigation'
import { i18n, Locale } from '@/config/i18n.config'
import { createCookie } from '@/config/cookies'
import clsx from 'clsx'

interface LanguageProps {
  currentLocale: Locale
  size: 'sm' | 'lg'
}

export function Language({ currentLocale, size }: LanguageProps) {
  const router = useRouter()

  const changeLanguage = async (newLocale: Locale) => {
    await createCookie('NEXT_LOCALE', newLocale)
    router.refresh()
  }

  return (
    <div
      className={clsx(
        'flex items-center',
        size === 'sm' && 'gap-1.5',
        size === 'lg' && 'gap-2',
      )}
    >
      {i18n.locales.map((lng) => (
        <button
          key={lng}
          disabled={currentLocale === lng}
          className={clsx(
            'uppercase text-zinc-400 transition-colors duration-500 disabled:text-zinc-50',
            size === 'sm' && 'text-[11px]',
            size === 'lg' && 'text-xs',
          )}
          onClick={() => changeLanguage(lng as Locale)}
        >
          {lng === 'en-US' ? 'en-US' : 'pt-BR'}
        </button>
      ))}
    </div>
  )
}
