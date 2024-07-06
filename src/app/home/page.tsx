import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'

import { Biography } from '@/components/biography'
import { Compass } from '@/components/compass'
import { Language } from '@/components/language'
import { Sidebar } from '@/components/sidebar'
import { Available } from '@/components/available'
import { ListHovered } from '@/components/list-hovered'

export default async function HomePage() {
  const { dictionary, locale } = await getLocaleAndDictionaryServer()

  const experiences = [
    {
      date: dictionary.experiences.freelance.one.date,
      company: 'Freelance',
      occupation: 'Front-end Developer',
    },
    {
      date: dictionary.experiences.smartbrain.one.date,
      company: 'Smartbrain Financial Systems',
      occupation: 'Front-end Developer',
    },
    {
      date: dictionary.experiences.parxtech.one.date,
      company: 'Parxtech Informática',
      occupation: 'Support Analyst',
    },
    {
      date: dictionary.experiences.parxtech.two.date,
      company: 'Parxtech Informática',
      occupation: 'Front-end Developer',
    },
  ]

  const volunteering = [
    {
      date: dictionary.volunteering.adai.one.date,
      company: 'Igreja ADAI',
      occupation: 'Front-end Developer',
    },
  ]

  return (
    <div className="h-screen md:pl-60">
      <Sidebar />

      <div className="m-auto flex max-w-5xl flex-col-reverse gap-40 px-8 py-8 xs:px-16 md:flex-col">
        <header className="grid grid-cols-1 items-center gap-4 md:grid-cols-[auto_auto] md:gap-0 lg:grid-cols-2">
          <Language currentLocale={locale} size="sm" />
          <Compass />
        </header>

        <main className="flex flex-col gap-16">
          <Available />
          <Biography />

          <ListHovered
            title={dictionary.experiences.title}
            list={experiences}
          />
          <ListHovered
            title={dictionary.volunteering.title}
            list={volunteering}
          />
        </main>
      </div>
    </div>
  )
}
