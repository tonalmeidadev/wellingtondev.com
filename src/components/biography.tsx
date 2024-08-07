import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'

export async function Biography() {
  const { dictionary } = await getLocaleAndDictionaryServer()

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        <p className="leading-6">{dictionary.biography.one}</p>
        <p className="leading-6">{dictionary.biography.two}</p>
      </div>
    </section>
  )
}
