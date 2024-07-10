import { Clock, MoveDown, MoveUp } from 'lucide-react'

interface WorkSlideProps {
  startDate: string
  endDate: string
}

export function WorkSlide({ startDate, endDate }: WorkSlideProps) {
  return (
    <div className="relative order-1 flex h-4 items-center gap-2 overflow-hidden transition-all duration-500 group-hover:opacity-100 xs:w-32 md:absolute md:-left-28 md:order-none md:w-24 md:justify-end md:opacity-0 md:group-hover:-left-32">
      <div className="absolute right-0 top-0 hidden h-full flex-col justify-center gap-0.5 xs:flex md:left-0">
        <div className="size-1 animate-step-1 rounded-full bg-neutral-50" />
        <div className="size-1 animate-step-2 rounded-full bg-neutral-50" />
      </div>

      <div className="right-3 flex items-center justify-end gap-1 xs:absolute xs:w-full xs:animate-slide-date-s md:right-0">
        <span className="text-sm md:text-xs">{startDate}</span>
        <MoveUp size={12} />
      </div>

      <div className="h-px w-2.5 bg-neutral-50 xs:hidden" />

      <div className="right-3 flex items-center justify-end gap-1 xs:absolute xs:w-full xs:animate-slide-date-e md:right-0">
        <span className="text-sm md:text-xs">{endDate}</span>
        {endDate !== 'Current' &&
          endDate !== 'O momento' &&
          endDate !== 'Paused' &&
          endDate !== 'Pausado' && <MoveDown size={12} />}
        {(endDate === 'Paused' || endDate === 'Pausado') && <Clock size={12} />}
      </div>
    </div>
  )
}
