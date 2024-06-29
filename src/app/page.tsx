import { getCookie } from '@/config/cookies'
import { Locale, i18n } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-server-only'

export default async function Home() {
  const locale =
    ((await getCookie('NEXT_LOCALE')) as Locale) || i18n.defaultLocale

  const dictionary = getDictionaryServerOnly(locale)

  return (
    <main>
      <h1>{dictionary.home.name}</h1>
      <span>{dictionary.home.description}</span>
    </main>
  )
}
