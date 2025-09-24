'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigation } from '@/utils/content'
import { ArrowBendDownRightIcon } from '@phosphor-icons/react/dist/ssr'

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
                  <span className="pointer-events-none order-1 select-none lowercase text-sm text-neutral-400 line-through md:order-none">
                    {item.text}
                  </span>
                </button>
              </>
            ) : (
              <Link
                href={item.path}
                className="flex h-8 w-fit items-center gap-2"
              >
                {pathname === item.path && <ArrowBendDownRightIcon className="size-5" />}

                <span
                  data-active={pathname === item.path}
                  className="lowercase transition-colors text-sm data-[active=false]:text-neutral-400 data-[active=true]:text-neutral-50 data-[active=false]:hover:text-neutral-50"
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
