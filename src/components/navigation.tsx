'use client'

import Link from 'next/link'
import { Clock, MoveRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { path: '/home', text: 'Home', disabled: false },
    { path: '/profile', text: 'Profile', disabled: false },
    { path: '/works', text: 'Works', disabled: false },
    { path: '/blog', text: 'Blog', disabled: true },
  ]

  return (
    <nav>
      <ul className="flex flex-col items-end md:items-start">
        {links.map((item, index) => (
          <li key={index}>
            {item.disabled ? (
              <>
                <button
                  aria-disabled
                  className="flex h-8 items-center gap-2 hover:cursor-not-allowed"
                >
                  <span className="pointer-events-none order-1 select-none text-sm uppercase text-neutral-400 md:order-none">
                    {item.text}
                  </span>

                  <Clock className="size-4 text-neutral-400" />
                </button>
              </>
            ) : (
              <Link
                href={item.path}
                className="flex h-8 w-fit items-center gap-2"
              >
                {pathname === item.path && <MoveRight className="size-4" />}

                <span
                  className={clsx(
                    'text-sm uppercase',
                    pathname === item.path
                      ? 'text-neutral-50'
                      : 'text-neutral-400 transition-colors duration-500 hover:text-neutral-50',
                  )}
                >
                  {item.text}
                </span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
