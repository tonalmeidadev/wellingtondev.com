interface List {
  date: string
  company: string
  occupation: string
}

interface ListHovered {
  title: string
  list: List[]
}

export async function ListHovered({ title, list }: ListHovered) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-[11px] uppercase text-zinc-400">{title}</h2>

      <ul className="flex flex-col gap-6 md:gap-1">
        {list.map((item, index) => (
          <li
            key={index}
            className="group relative flex cursor-pointer flex-col gap-1 xs:flex-row xs:items-center xs:gap-4 md:h-8"
          >
            <span className="text-xs text-zinc-400 transition-all duration-500 group-hover:-left-32 group-hover:opacity-100 xs:w-24 md:absolute md:-left-28 md:text-end md:text-zinc-50 md:opacity-0">
              {item.date}
            </span>

            <div className="grid w-full grid-cols-[1fr_auto] items-center gap-8 md:grid-cols-2">
              <span className="text-sm">{item.company}</span>

              <div className="flex -translate-x-4 items-center gap-2 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 md:opacity-0">
                <div className="h-px w-5 bg-zinc-50" />
                <span className="text-xs">{item.occupation}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
