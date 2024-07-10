import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'

import { Biography } from '@/components/biography'
import { Works } from '@/components/works/works'

export default async function HomePage() {
  const { dictionary } = await getLocaleAndDictionaryServer()

  const experiences = dictionary.works.experiences.defaults
  const volunteering = dictionary.works.experiences.volunteering

  return (
    <>
      <Biography />

      <Works.Root title={dictionary.works.titles.experiences}>
        {experiences.map((item, index) => (
          <li key={index}>
            <Works.Hovered>
              <Works.Item
                startDate={item.startDate}
                endDate={item.endDate}
                company={item.company}
                occupation={item.occupation}
              />
            </Works.Hovered>
          </li>
        ))}
      </Works.Root>

      <Works.Root title={dictionary.works.titles.volunteering}>
        {volunteering.map((item, index) => (
          <li key={index}>
            <Works.Hovered>
              <Works.Item
                startDate={item.startDate}
                endDate={item.endDate}
                company={item.company}
                occupation={item.occupation}
              />
            </Works.Hovered>
          </li>
        ))}
      </Works.Root>
    </>
  )
}
