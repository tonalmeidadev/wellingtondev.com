import { HouseSimpleIcon } from "@phosphor-icons/react/ssr";
import { twMerge } from "tailwind-merge";

import Link from "next/link";

import { getLocaleAndDictionaryServer } from "@/config/i18n-helper";
import type { NavigationBarProps } from "@/types";

import { GoBack } from "./go-back";
import { Language } from "./language";

export async function NavigationBar({ className }: NavigationBarProps) {
  const { dictionary, locale } = await getLocaleAndDictionaryServer();

  return (
    <div className={twMerge("flex items-center gap-6 md:gap-8", className)}>
      <GoBack label={dictionary.layout.go_back} />

      <Link
        href="/"
        className="flex size-4 items-center justify-center gap-1"
        aria-label={dictionary.layout.go_home}
      >
        <HouseSimpleIcon className="size-5" />
      </Link>

      <Language currentLocale={locale} />
    </div>
  );
}
