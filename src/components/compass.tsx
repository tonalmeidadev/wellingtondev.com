import Link from 'next/link'
import { CompassIcon } from 'lucide-react'

export function Compass() {
  return (
    <Link
      href="https://goo.gl/maps/U8mehYfFZdSgxF1W8"
      className="flex items-center gap-1"
      target="_blank"
    >
      <CompassIcon size={12} className="animate-compass" />

      <div className="flex items-center gap-1 text-[11px] text-zinc-400">
        <span>{`23° 36‘ 53.135" S, 46° 35’ 44.957" W`}</span>
        <div className="size-[3px] rounded-full bg-zinc-400" />
        <span>SSP, BRA</span>
      </div>
    </Link>
  )
}
