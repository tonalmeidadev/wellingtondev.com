'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { MoveRight } from 'lucide-react'

interface AnswersProps {
  idx: string
  path: string
  external: boolean
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
    <nav className="flex w-full">
      <ul className="flex w-full flex-col gap-2">
        {answers.map((item, index) => (
          <li key={index} className="flex h-14 w-full">
            <Link
              href={item.path}
              target={item.external ? '_blank' : '_self'}
              ref={(el) => {
                refs.current[index] = el
              }}
              className="group flex h-full w-full items-center justify-between gap-4 px-3 transition-all duration-500 hover:px-5 focus-visible:px-5"
            >
              <span className="flex size-4 items-center justify-center text-sm font-medium uppercase text-neutral-600 transition-colors duration-500 group-hover:text-neutral-50 group-focus-visible:text-neutral-50">
                {item.idx}
              </span>

              <span className="text-center leading-4">{item.text}</span>

              <MoveRight className="size-5 flex-none text-neutral-600 transition-colors duration-500 group-hover:text-neutral-50 group-focus-visible:text-neutral-50" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
