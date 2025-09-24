import type { HoveredItemProps } from "@/types";

import { Hovered } from ".";

export function Item({
  startDate,
  endDate,
  company,
  occupation,
}: HoveredItemProps) {
  return (
    <>
      <Hovered.Slide startDate={startDate} endDate={endDate} />

      <div className="xs:gap-1 grid w-full grid-cols-1 gap-1 md:grid-cols-2">
        <span className="order-1 text-sm lowercase md:order-0">{company}</span>

        <div className="flex items-center gap-2 transition-all group-hover:translate-x-0 group-hover:opacity-100 md:-translate-x-4 md:opacity-0">
          <span className="text-sm lowercase">{occupation}</span>
        </div>
      </div>
    </>
  );
}
