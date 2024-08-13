import Link from 'next/link'
import { format } from 'date-fns'
import { ptBR, enUS } from 'date-fns/locale'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'
import { AvailableProps } from '@/types'

export async function Available({ status }: AvailableProps) {
  const { dictionary, locale } = await getLocaleAndDictionaryServer()

  const available = dictionary.layout.available.status[status]

  const month = format(new Date(), 'MMM', {
    locale: locale === 'pt-BR' ? ptBR : enUS,
  })

  const year = format(new Date(), 'yyyy')

  const currentDate =
    (locale === 'pt-BR'
      ? month.charAt(0).toUpperCase() + month.slice(1)
      : month) +
    `'` +
    year

  return (
    <Link
      href="https://api.whatsapp.com/send?phone=5511960245642"
      className="group flex w-fit sm:max-w-none sm:items-center"
      target="_blank"
    >
      <div className="grid size-[1.125rem] flex-none items-center rounded-full bg-neutral-800 sm:mt-0">
        <div
          data-status={status}
          className="mx-auto size-2 animate-ping rounded-full bg-neutral-50 data-[status=off]:bg-red-500 data-[status=on]:bg-neutral-50"
        />
      </div>

      <span className="ml-1.5 leading-4 tracking-wide text-neutral-400 transition-all duration-500 hover:text-neutral-50 group-hover:ml-2.5">
        {available} — {currentDate}
      </span>
    </Link>
  )
}
