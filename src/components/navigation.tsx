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
      <ul className="flex flex-col">
        {links.map((item, index) => (
          <li key={index}>
            {item.disabled ? (
              <>
                <button
                  aria-disabled
                  className="flex h-6 items-center gap-1 hover:cursor-not-allowed"
                >
                  <span className="pointer-events-none select-none text-[11px] uppercase text-neutral-400">
                    {item.text}
                  </span>
                  <Clock size={12} className="text-neutral-400" />
                </button>
              </>
            ) : (
              <Link
                href={item.path}
                className="flex h-7 w-fit items-center gap-1"
              >
                {pathname === item.path && <MoveRight size={12} />}
                <span
                  className={clsx(
                    'text-[11px] uppercase',
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
