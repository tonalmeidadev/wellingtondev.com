import Link from 'next/link'
import { MoveRight } from 'lucide-react'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'

export async function Answers() {
  const { dictionary } = await getLocaleAndDictionaryServer()

  const answers = [
    { idx: 'a', text: dictionary.answers.one },
    { idx: 'b', text: dictionary.answers.two },
    { idx: 'c', text: dictionary.answers.three },
  ]

  return (
    <nav className="w-full flex">
      <ul className="flex flex-col gap-1 w-full">
        {answers.map((item, index) => (
          <li key={index} className="w-full h-14 flex">
            <Link
              href="/"
              className="flex w-full px-7 gap-3 border group border-zinc-700 rounded h-full items-center justify-between transition-all duration-500 hover:px-4 hover:border-zinc-50"
            >
              <span className="text-zinc-600 size-4 flex items-center justify-center text-sm group-hover:text-zinc-50 group-active:text-zinc-50 transition-colors duration-500">
                {item.idx}
              </span>
              <span className="text-sm flex-grow leading-4">{item.text}</span>
              <MoveRight
                size={16}
                className="text-zinc-600 group-hover:text-zinc-50 group-active:text-zinc-50 transition-colors duration-500"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
