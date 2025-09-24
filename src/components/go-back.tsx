"use client";

import { ArrowUUpLeftIcon } from "@phosphor-icons/react/dist/ssr";

import Link from "next/link";
import { useRouter } from "next/navigation";

import type { GoBackProps } from "@/types";

export function GoBack({ label }: GoBackProps) {
  const router = useRouter();

  return (
    <Link
      href="#"
      onClick={(e) => {
        e.preventDefault();
        router.back();
      }}
      className="flex items-center justify-center gap-1"
      aria-label={label}
    >
      <ArrowUUpLeftIcon className="size-5" />
      <span className="sr-only">{label}</span>
    </Link>
  );
}
