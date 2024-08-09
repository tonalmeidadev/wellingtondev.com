'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { MoveRight } from 'lucide-react'

interface AnswersProps {
  idx: string
  path: string
  text: string
}

interface QuestionProps {
  answers: AnswersProps[]
}

export function Question({ answers }: QuestionProps) {
  const refs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key.toLowerCase()) {
        case 'a':
          refs.current[0]?.focus()
          break
        case 'b':
          refs.current[1]?.focus()
          break
        case 'c':
          refs.current[2]?.focus()
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <nav className="flex w-full justify-center">
      <ul className="flex w-fit flex-col gap-2">
        {answers.map((item, index) => (
          <li key={index} className="flex h-14 w-full">
            <Link
              href={item.path}
              ref={(el) => {
                refs.current[index] = el
              }}
              className="group flex h-full w-full items-center gap-5 rounded-md border border-neutral-700 px-6 transition-all duration-500 hover:border-neutral-50 active:border-neutral-50"
            >
              <span className="font-medium text-neutral-400 transition-colors duration-500 group-hover:text-neutral-50 group-focus-visible:text-neutral-50">
                {item.idx}
              </span>

              <span className="leading-4">{item.text}</span>

              <MoveRight className="ml-auto size-5 flex-none text-neutral-400 transition-colors duration-500 group-hover:text-neutral-50 group-focus-visible:text-neutral-50" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
