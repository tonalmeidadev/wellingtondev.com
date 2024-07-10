import { WorkSlide } from './works-slide'

interface WorksItemProps {
  startDate: string
  endDate: string
  company: string
  occupation: string
}

export function WorksItem({
  startDate,
  endDate,
  company,
  occupation,
}: WorksItemProps) {
  return (
    <>
      <WorkSlide startDate={startDate} endDate={endDate} />

      <div className="grid w-full grid-cols-1 gap-1 md:grid-cols-2">
        <span className="order-1 text-sm xs:order-none">{company}</span>

        <div className="flex items-center gap-2 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 md:-translate-x-4 md:opacity-0">
          <div className="hidden h-px w-5 bg-neutral-50" />
          <span className="text-sm md:text-xs">{occupation}</span>
        </div>
      </div>
    </>
  )
}
