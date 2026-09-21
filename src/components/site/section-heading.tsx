import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  className,
}: {
  kicker?: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-8 flex flex-col items-start gap-3", className)}>
      <span className="gold-rule" aria-hidden="true" />
      {kicker ? (
        <p className="text-xs font-medium tracking-[0.22em] text-gold">{kicker}</p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold text-fg md:text-4xl">{title}</h2>
    </div>
  );
}
