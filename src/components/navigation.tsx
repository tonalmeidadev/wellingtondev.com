'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigation } from '@/utils/content'
import { MoveRight } from 'lucide-react'

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav>
      <ul className="flex flex-col items-end md:items-start">
        {navigation.map((item, index) => (
          <li key={index}>
            {item.disabled ? (
              <>
                <button
                  aria-disabled
                  className="flex h-8 items-center gap-2 hover:cursor-not-allowed"
                >
                  <span className="pointer-events-none order-1 select-none text-sm uppercase text-neutral-400 line-through md:order-none">
                    {item.text}
                  </span>
                </button>
              </>
            ) : (
              <Link
                href={item.path}
                className="flex h-8 w-fit items-center gap-2"
              >
                {pathname === item.path && <MoveRight className="size-4" />}

                <span
                  data-active={pathname === item.path}
                  className="text-sm uppercase transition-colors duration-500 data-[active=false]:text-neutral-400 data-[active=true]:text-neutral-50 data-[active=false]:hover:text-neutral-50"
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
