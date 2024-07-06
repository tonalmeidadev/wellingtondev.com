'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { path: '/', text: 'Start here', disabled: false },
    { path: '/home', text: 'Home', disabled: false },
    { path: '/works', text: 'Works', disabled: false },
    { path: '/blog', text: 'Blog', disabled: true },
    { path: '/stack', text: 'Stack', disabled: false },
  ]

  return (
    <nav>
      <ul className="flex flex-col">
        {links.map((item, index) => (
          <li key={index}>
            {item.disabled ? (
              <>
                <span
                  aria-hidden="true"
                  role="presentation"
                  className="pointer-events-none flex h-7 select-none items-center text-xs text-zinc-600"
                >
                  {item.text}
                </span>
              </>
            ) : (
              <Link
                href={item.path}
                className="flex h-7 w-fit items-center gap-1"
              >
                {pathname === item.path && <ArrowRight size={12} />}
                <span
                  className={
                    pathname === item.path
                      ? 'text-xs text-zinc-50'
                      : 'text-xs text-zinc-400 transition-colors duration-500 hover:text-zinc-50'
                  }
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
