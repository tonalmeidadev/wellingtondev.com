import Image from 'next/image'
import type { ProfileProps } from '@/types'
import { twMerge } from 'tailwind-merge'

export async function Profile({ orientation, size }: ProfileProps) {
  return (
    <div
      data-orientation={orientation}
      className={twMerge(
        'flex',
        orientation === 'row' && 'items-center gap-4',
        orientation === 'column' && 'flex-col gap-2.5',
      )}
    >
      <Image
        src="/assets/resume/photo.webp"
        alt="Foto de perfil de Ton Almeida"
        width={128}
        height={128}
        className={twMerge(
          'pointer-events-none select-none rounded-full border-2 border-neutral-800 contrast-[110%]',
          size === 'sm' && 'size-24 md:size-20',
          size === 'lg' && 'size-32',
        )}
      />

      <div className="flex flex-col gap-2">
        <span
          className={twMerge('lowercase',
            size === 'sm' && 'text-xl !leading-5',
            size === 'lg' && 'text-3xl leading-7',
          )}
        >
          Wellington de Almeida
        </span>
        <span
          className={twMerge(
            'lowercase text-base text-neutral-400',
            size === 'sm' && '!leading-4',
            size === 'lg' && 'text-lg !leading-4',
          )}
        >
          Senior Frontend Developer
        </span>
      </div>
    </div>
  )
}
