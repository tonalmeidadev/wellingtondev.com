'use client'

import { ButtonHTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

const button = cva(
  'group flex gap-1 h-9 min-w-9 items-center rounded border transition-colors duration-500',
  {
    variants: {
      variant: {
        primary: 'border-zinc-700 hover:border-zinc-50',
        secondary: 'border-zinc-700/50 bg-zinc-800 hover:border-zinc-50',
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
