import { HTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

interface WorksHoveredProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

export async function WorksHovered({ asChild, ...props }: WorksHoveredProps) {
  const Component = asChild ? Slot : 'div'

  return (
    <Component
      className={clsx(
        'group relative flex flex-col gap-2 xs:flex-row xs:items-center xs:gap-4 xs:border-none xs:p-0 md:min-h-8',
        !asChild && 'cursor-default',
      )}
      {...props}
    />
  )
}
