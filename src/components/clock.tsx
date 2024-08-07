'use client'

import { useEffect, useState } from 'react'

export function Clock() {
  const [isClient, setIsClient] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    setIsClient(true)

    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formattedTime = currentTime.toLocaleTimeString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  })

  return (
    <span className="text-sm uppercase leading-[0.8125rem] text-neutral-400">
      SP, BRA — {isClient ? formattedTime : '00:00:00'}
    </span>
  )
}
