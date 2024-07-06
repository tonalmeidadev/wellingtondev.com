import Link from 'next/link'
import { format } from 'date-fns'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'

export async function Available() {
  const { dictionary } = await getLocaleAndDictionaryServer()

  const currentDate = format(new Date(), "MMM''yyyy")

  return (
    <Link href="/" className="group flex sm:max-w-none sm:items-center">
      <div className="mt-[3px] flex size-[9px] items-center justify-center rounded-full bg-zinc-800 sm:mt-0">
        <div className="size-[7px] animate-ping rounded-full bg-zinc-50" />
      </div>

      <span className="ml-1.5 text-[13px] leading-4 tracking-wide text-zinc-400 transition-all duration-500 hover:text-zinc-50 group-hover:ml-2.5">
        {dictionary.home.available} — {currentDate}
      </span>
    </Link>
  )
}
