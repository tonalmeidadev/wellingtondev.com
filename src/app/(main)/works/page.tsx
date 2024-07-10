import Link from 'next/link'
import { Works } from '@/components/works/works'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'

export default async function WorksPage() {
  const { dictionary } = await getLocaleAndDictionaryServer()

  const projects = dictionary.works.projects.defaults
  const volunteering = dictionary.works.projects.volunteering

  return (
    <>
      <Works.Root title={dictionary.works.titles.works}>
        {projects.map((item, index) => (
          <>
            <li key={index}>
              {item.path === '/' ? (
                <Works.Hovered>
                  <Works.Item
                    startDate={item.startDate}
                    endDate={item.endDate}
                    company={item.company}
                    occupation={item.occupation}
                  />
                </Works.Hovered>
              ) : (
                <Works.Hovered asChild>
                  <Link href={item.path} target="_blank">
                    <Works.Item
                      startDate={item.startDate}
                      endDate={item.endDate}
                      company={item.company}
                      occupation={item.occupation}
                    />
                  </Link>
                </Works.Hovered>
              )}
            </li>
          </>
        ))}
      </Works.Root>

      <Works.Root title={dictionary.works.titles.volunteering}>
        {volunteering.map((item, index) => (
          <>
            <li key={index}>
              {item.path === '/' ? (
                <Works.Hovered>
                  <Works.Item
                    startDate={item.startDate}
                    endDate={item.endDate}
                    company={item.company}
                    occupation={item.occupation}
                  />
                </Works.Hovered>
              ) : (
                <Works.Hovered asChild>
                  <Link href={item.path} target="_blank">
                    <Works.Item
                      startDate={item.startDate}
                      endDate={item.endDate}
                      company={item.company}
                      occupation={item.occupation}
                    />
                  </Link>
                </Works.Hovered>
              )}
            </li>
          </>
        ))}
      </Works.Root>
    </>
  )
}
