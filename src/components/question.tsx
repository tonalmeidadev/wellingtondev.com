interface QuestionProps {
  children: React.ReactNode
}

export function Question({ children }: QuestionProps) {
  return (
    <nav className="flex w-full">
      <ul className="flex w-full flex-col gap-1">{children}</ul>
    </nav>
  )
}
