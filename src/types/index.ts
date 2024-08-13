import { Locale } from '@/config/i18n.config'
import { ButtonHTMLAttributes, HTMLAttributes } from 'react'

export type AnswersProps = {
  idx: string
  path: string
  text: string
}

export interface AvailableProps {
  status: 'on' | 'off'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  className?: string
  variant?: 'primary' | 'secondary'
}

type CarouselList = {
  video: boolean
  url: string
  title: string | undefined
}
export interface CarouselProps {
  media: CarouselList[]
}

export interface GoBackProps {
  label: string
}

export interface HoveredRootProps {
  title: string
  children: React.ReactNode
}

export interface HoveredSlotProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

export interface HoveredItemProps {
  startDate: string
  endDate: string
  company: string
  occupation: string
}

export interface HoveredSlideProps {
  startDate: string
  endDate: string
}

export interface HoverVideoProps {
  src: string
}

export interface NavigationBarProps {
  className?: string
}

export interface LanguageProps {
  currentLocale: Locale
}

export interface ProfileProps {
  orientation: 'row' | 'column'
  size: 'sm' | 'lg'
}

export interface QuestionProps {
  answers: AnswersProps[]
}

export type WorksFeatured = {
  path: string
  startDate: string
  endDate: string
  company: string
  occupation: string
  featured?: {
    cta: string
    description_title: string
    description: string
  }
}
