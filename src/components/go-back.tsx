'use client'

import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface GoBackProps {
  label: string
}

export function GoBack({ label }: GoBackProps) {
  const router = useRouter()

  return (
    <Link
      href="#"
      onClick={(e) => {
        e.preventDefault() // Evita que o link padrão seja seguido
        router.back() // Volta uma página no histórico
      }}
      className="flex items-center justify-center gap-1"
      aria-label={label}
    >
      <MoveLeft className="size-4" />
      <span className="sr-only">{label}</span>{' '}
      {/* Isso melhora a acessibilidade */}
    </Link>
  )
}
