import Link from 'next/link'
import { format } from 'date-fns'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'

export async function Available() {
  const { dictionary } = await getLocaleAndDictionaryServer()

  const currentDate = format(new Date(), "MMM''yyyy")

  return (
    <Link
      href="https://api.whatsapp.com/send?phone=5511960245642"
      className="group flex w-fit sm:max-w-none sm:items-center"
      target="_blank"
    >
      <div className="mt-[3px] flex size-[9px] items-center justify-center rounded-full bg-neutral-800 sm:mt-0">
        <div className="size-[7px] animate-ping rounded-full bg-neutral-50" />
      </div>

      <span className="ml-1.5 text-[13px] leading-4 tracking-wide text-neutral-400 transition-all duration-500 hover:text-neutral-50 group-hover:ml-2.5">
        {dictionary.home.available} — {currentDate}
      </span>
    </Link>
  )
}
