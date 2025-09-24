import { headers } from 'next/headers'
import { getCookie } from './cookies'
import { Locale, i18n } from '@/config/i18n.config'

import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-server-only'
import { getDictionaryUseClient } from '@/dictionaries/default-dictionary-use-client'

export async function getLocaleAndDictionaryServer() {
  const reqHeaders = await headers()
  const fromHeader = reqHeaders.get('x-locale')

  const fromCookie = await getCookie('NEXT_LOCALE')

  const locale: Locale =
    (fromHeader as Locale) ||
    (fromCookie as Locale) ||
    i18n.defaultLocale

  const dictionary = getDictionaryServerOnly(locale)

  return { locale, dictionary }
}

export function getLocaleAndDictionaryClient() {
  const locale =
    (document.cookie.match(/NEXT_LOCALE=(.*?)(;|$)/)?.[1] as Locale) ||
    i18n.defaultLocale

  const dictionary = getDictionaryUseClient(locale)

  return { locale, dictionary }
}
