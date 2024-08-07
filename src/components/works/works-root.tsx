interface WorksRootProps {
  title: string
  children: React.ReactNode
}

export async function WorksRoot({ title, children }: WorksRootProps) {
  return (
    <section className="flex flex-col gap-8 md:gap-4">
      <h2 className="text-sm uppercase text-neutral-400">{title}</h2>

      <ul className="flex flex-col gap-8 xs:gap-8 md:gap-1">{children}</ul>
    </section>
  )
}
