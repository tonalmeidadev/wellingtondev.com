'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { GoBackProps } from '@/types'
import { MoveLeft } from 'lucide-react'

export function GoBack({ label }: GoBackProps) {
  const router = useRouter()

  return (
    <Link
      href="#"
      onClick={(e) => {
        e.preventDefault()
        router.back()
      }}
      className="flex items-center justify-center gap-1"
      aria-label={label}
    >
      <MoveLeft className="size-4" />
      <span className="sr-only">{label}</span>
    </Link>
  )
}
