import { HoveredSlideProps } from '@/types'
import { Clock, MoveDown, MoveUp } from 'lucide-react'

export function Slide({ startDate, endDate }: HoveredSlideProps) {
  return (
    <div className="relative order-1 flex h-4 w-44 items-center gap-2 overflow-hidden transition-all duration-500 group-hover:opacity-100 md:absolute md:-left-32 md:order-none md:w-28 md:justify-end md:opacity-0 md:group-hover:-left-36">
      <div className="absolute right-0 top-0 flex h-full flex-col justify-center gap-0.5">
        <div className="size-1.5 animate-step-1 rounded-full bg-neutral-50" />
        <div className="size-1.5 animate-step-2 rounded-full bg-neutral-50" />
      </div>

      <div className="absolute right-4 flex w-full animate-slide-date-s items-center justify-end gap-1">
        <span className="text-sm md:text-sm">{startDate}</span>

        <MoveUp className="size-4" />
      </div>

      <div className="absolute right-4 flex w-full animate-slide-date-e items-center justify-end gap-1">
        <span className="text-sm md:text-sm">{endDate}</span>

        {endDate !== 'Current' &&
          endDate !== 'O momento' &&
          endDate !== 'Paused' &&
          endDate !== 'Pausado' && <MoveDown className="size-4" />}
        {(endDate === 'Paused' || endDate === 'Pausado') && (
          <Clock className="size-4" />
        )}
      </div>
    </div>
  )
}
