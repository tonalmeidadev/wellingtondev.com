import { NextRequest, NextResponse } from 'next/server'
import { getCookie } from './config/cookies'
import { i18n } from '@/config/i18n.config'

export default async function middleware(req: NextRequest) {
  const { defaultLocale, locales } = i18n

  let locale = (await getCookie('NEXT_LOCALE')) || defaultLocale

  if (!locales.includes(locale)) {
    locale = defaultLocale
  }

  req.nextUrl.locale = locale

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
