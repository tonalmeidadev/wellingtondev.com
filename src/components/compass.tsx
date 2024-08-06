import Link from 'next/link'
import { CompassIcon } from 'lucide-react'

export function Compass() {
  return (
    <Link
      href="https://goo.gl/maps/U8mehYfFZdSgxF1W8"
      className="group flex w-fit items-center gap-1 text-neutral-400"
      target="_blank"
    >
      <div className="flex size-4 items-center justify-center overflow-hidden">
        <CompassIcon
          size={14}
          className="animate-compass-date transition-colors group-hover:animate-none group-hover:text-neutral-50"
        />
      </div>

      <div className="flex items-center gap-1 text-[11px]">
        <span>{`23° 36‘ 53.135" S, 46° 35’ 44.957" W`}</span>
        <div className="size-[3px] rounded-full bg-neutral-400" />
        <span>SSP, BRA</span>
      </div>
    </Link>
  )
}
