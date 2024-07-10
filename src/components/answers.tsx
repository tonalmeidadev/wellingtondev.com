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
          <li key={index} className="flex h-12 w-full">
            <Link
              href={item.path}
              className="group flex h-full w-full items-center justify-between gap-4 px-3 transition-all duration-500 hover:px-5"
            >
              <span className="flex size-4 items-center justify-center text-sm text-neutral-600 transition-colors duration-500 group-hover:text-neutral-50">
                {item.idx}
              </span>

              <span className="text-center text-sm leading-4">{item.text}</span>

              <MoveRight
                size={16}
                className="text-neutral-600 transition-colors duration-500 group-hover:text-neutral-50"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
