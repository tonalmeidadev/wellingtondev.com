'use client'

import { ButtonHTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

const button = cva(
  'group flex gap-1.5 h-11 min-w-11 rounded-md items-center transition-colors duration-500',
  {
    variants: {
      variant: {
        primary: 'border border-neutral-700 hover:border-neutral-50',
        secondary:
          'border border-neutral-800 bg-neutral-800 hover:border-neutral-50',
      },
    },
  },
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  className?: string
  variant?: 'primary' | 'secondary'
}

export function Button({
  asChild,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return <Component {...props} className={button({ variant, className })} />
}
