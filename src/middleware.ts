import { NextResponse } from "next/server";

import { i18n } from "@/config/i18n.config";

import { getCookie } from "./config/cookies";

export default async function middleware() {
  const { defaultLocale, locales } = i18n;

  let locale = (await getCookie("NEXT_LOCALE")) || defaultLocale;

  if (!locales.includes(locale)) {
    locale = defaultLocale;
  }

  const res = NextResponse.next();

  res.headers.set("x-locale", locale);

  return res;
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
