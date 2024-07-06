import Link from 'next/link'
import { MoveRight } from 'lucide-react'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'

export async function Answers() {
  const { dictionary } = await getLocaleAndDictionaryServer()

  const answers = [
    { idx: 'a', path: '/works/highlight', text: dictionary.answers.one },
    { idx: 'b', path: '/profile', text: dictionary.answers.two },
    { idx: 'c', path: '/get-in-touch', text: dictionary.answers.three },
  ]

  return (
    <nav className="flex w-full">
      <ul className="flex w-full flex-col gap-1">
        {answers.map((item, index) => (
          <li key={index} className="flex h-14 w-full">
            <Link
              href={item.path}
              className="group flex h-full w-full items-center justify-between gap-3 border-b border-zinc-700 px-7 transition-all duration-500 hover:border-zinc-50 hover:px-4"
            >
              <span className="flex size-4 items-center justify-center text-sm text-zinc-600 transition-colors duration-500 group-hover:text-zinc-50 group-active:text-zinc-50">
                {item.idx}
              </span>
              <span className="flex-grow text-sm leading-4">{item.text}</span>
              <MoveRight
                size={16}
                className="text-zinc-600 transition-colors duration-500 group-hover:text-zinc-50 group-active:text-zinc-50"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
