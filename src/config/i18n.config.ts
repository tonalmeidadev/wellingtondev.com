const defaultLocale = 'pt-BR'
const langs = [defaultLocale, 'en-US'] as const

const locales = langs as unknown as string[]
export const i18n = { defaultLocale, locales, localeDetection: false }

export type Locale = (typeof langs)[number]
