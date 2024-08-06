import { useRef, useEffect } from 'react'

interface HoverVideoProps {
  src: string
}

export function Video({ src }: HoverVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play()
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <video
      muted
      ref={videoRef}
      src={src}
      controls={false}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 h-full w-full select-none object-cover"
    />
  )
}
