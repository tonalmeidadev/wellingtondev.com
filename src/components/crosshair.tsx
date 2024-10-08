'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export function Crosshair() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [opacity, setOpacity] = useState(false)

  const springX = useSpring(mouseX, {
    stiffness: 1000,
    damping: 40,
  })

  const springY = useSpring(mouseY, {
    stiffness: 1000,
    damping: 40,
  })

  const topH = useTransform(springY, (y) => `calc(${y}px - 8px)`)
  const rightW = useTransform(springX, (x) => `calc(100vw - ${x}px - 8px)`)
  const bottomH = useTransform(springY, (y) => `calc(100vh - ${y}px - 8px)`)
  const leftW = useTransform(springX, (x) => `calc(${x}px - 8px)`)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
    }

    const handleMouseHover = (event: MouseEvent, isHover: boolean) => {
      const target = event.target as HTMLElement

      if (target.closest('a') || target.closest('button')) setOpacity(isHover)
    }

    const handleMouseOver = (event: MouseEvent) => handleMouseHover(event, true)
    const handleMouseOut = (event: MouseEvent) => handleMouseHover(event, false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [mouseX, mouseY, opacity])

  return (
    <div
      data-opacity={opacity}
      className="hidden transition-opacity duration-500 data-[opacity=false]:opacity-100 data-[opacity=true]:opacity-0 md:block"
    >
      <motion.div
        className="pointer-events-none fixed left-0 bg-neutral-100/5"
        style={{ height: topH, top: 0, width: '1px', x: springX }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 bg-neutral-100/5"
        style={{ height: bottomH, bottom: 0, width: '1px', x: springX }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 bg-neutral-100/5"
        style={{ width: leftW, left: 0, height: '1px', y: springY }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 bg-neutral-100/5"
        style={{ width: rightW, right: 0, height: '1px', y: springY }}
      />
    </div>
  )
}
