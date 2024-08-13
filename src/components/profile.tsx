import Image from 'next/image'
import { ProfileProps } from '@/types'
import { twMerge } from 'tailwind-merge'

export async function Profile({ orientation, size }: ProfileProps) {
  return (
    <div
      data-orientation={orientation}
      className={twMerge(
        'flex',
        orientation === 'row' && 'items-end gap-4',
        orientation === 'column' && 'flex-col gap-2.5',
      )}
    >
      <Image
        src="/assets/resume/photo.webp"
        alt="Foto de perfil de Ton Almeida"
        width={96}
        height={96}
        quality={100}
        className={twMerge(
          'pointer-events-none select-none rounded-full border-2 border-neutral-800 contrast-[110%]',
          size === 'sm' && 'size-20 md:size-16',
          size === 'lg' && 'size-24',
        )}
      />

      <div className={twMerge('flex flex-col', size === 'lg' && 'gap-0.5')}>
        <span
          className={twMerge(
            size === 'sm' && 'text-lg md:text-base',
            size === 'lg' && 'text-3xl leading-7',
          )}
        >
          Wellington
          {size === 'lg' ? <br /> : ' '}
          Almeida
        </span>
        <span
          className={twMerge(
            'text-base text-neutral-400',
            size === 'sm' && 'md:text-sm',
          )}
        >
          Front-end Developer
        </span>
      </div>
    </div>
  )
}
