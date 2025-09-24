import {
  ArrowDownIcon,
  ArrowUpIcon,
  LockKeyIcon,
} from "@phosphor-icons/react/dist/ssr";

import type { HoveredSlideProps } from "@/types";

export function Slide({ startDate, endDate }: HoveredSlideProps) {
  return (
    <div className="relative order-1 flex h-4 w-44 items-center gap-2 overflow-hidden transition-all group-hover:opacity-100 md:absolute md:-left-32 md:order-0 md:w-28 md:justify-end md:opacity-0 md:group-hover:-left-36">
      <div className="absolute top-0 right-0 flex h-full flex-col justify-center gap-0.5">
        <div className="animate-step-1 size-1.5 rounded-full bg-neutral-50" />
        <div className="animate-step-2 size-1.5 rounded-full bg-neutral-50" />
      </div>

      <div className="animate-slide-date-s absolute right-4 flex w-full items-center justify-end gap-1">
        <span className="text-xs lowercase">{startDate}</span>
        <ArrowDownIcon className="size-5" />
      </div>

      <div className="animate-slide-date-e absolute right-4 flex w-full items-center justify-end gap-1 lowercase">
        <span className="text-xs">{endDate}</span>

        {endDate !== "Current" &&
          endDate !== "O momento" &&
          endDate !== "Paused" &&
          endDate !== "Pausado" && <ArrowUpIcon className="size-5" />}
        {(endDate === "Paused" || endDate === "Pausado") && (
          <LockKeyIcon className="size-5" />
        )}
      </div>
    </div>
  );
}
