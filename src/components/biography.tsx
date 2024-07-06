import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'

export async function Biography() {
  const { dictionary } = await getLocaleAndDictionaryServer()

  return (
    <section className="flex max-w-sm flex-col gap-4">
      <p className="text-sm leading-5">{dictionary.biography.one}</p>
      <p className="text-sm leading-5">{dictionary.biography.two}</p>
    </section>
  )
}
