import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex min-h-9 items-center rounded-full border border-gold/40 bg-gold/8 px-3.5 text-sm font-medium text-gold",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
