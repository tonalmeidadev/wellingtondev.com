'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import type { QuestionProps } from '@/types'
import { ArrowUDownRightIcon } from '@phosphor-icons/react/dist/ssr'

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
      <ul className="flex w-full flex-col gap-2">
        {answers.map((item, index) => (
          <li key={index} className="flex h-14 w-full">
            <Link
              ref={(el) => {
                refs.current[index] = el
              }}
              href={item.path}
              className="group flex h-full w-full items-center gap-3 rounded-md border border-neutral-700 px-6 transition-all hover:border-neutral-50 active:border-neutral-50 focus-visible:border-neutral-50"
            >
              <ArrowUDownRightIcon
                className="-ml-8 size-5 flex-none text-neutral-50 transition-all opacity-0 group-hover:opacity-100 group-hover:ml-0 group-focus-visible:opacity-100 group-focus-visible:ml-0" 
              />
              <span className="leading-4 lowercase">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
