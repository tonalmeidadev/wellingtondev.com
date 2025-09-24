import type { HoveredRootProps } from "@/types";

export async function Root({ title, children }: HoveredRootProps) {
  return (
    <section className="flex flex-col gap-8 md:gap-4">
      <h2 className="text-sm text-neutral-400 lowercase">{title}</h2>

      <ul className="xs:gap-8 flex flex-col gap-8 md:gap-1">{children}</ul>
    </section>
  );
}
