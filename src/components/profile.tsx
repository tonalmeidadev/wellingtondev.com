import Image from 'next/image'
import { clsx } from 'clsx'

interface ProfileProps {
  orientation: 'row' | 'column'
}

export async function Profile({ orientation }: ProfileProps) {
  return (
    <div
      className={clsx(
        'flex gap-3',
        orientation === 'row' && 'items-center',
        orientation === 'column' && 'flex-col',
      )}
    >
      <Image
        src="/assets/photo.webp"
        width={52}
        height={52}
        quality={100}
        className="pointer-events-none select-none rounded-full"
        alt="Foto de perfil de Ton Almeida"
      />

      <div className="flex flex-col">
        <span className="leading-5">Wellington Almeida</span>
        <span className="text-[13px] text-zinc-400">Front-end Developer</span>
      </div>
    </div>
  )
}
