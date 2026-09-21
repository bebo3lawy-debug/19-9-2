import { CalendarCheck, LayoutGrid, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/nav";
import { cn } from "@/lib/utils";

const ICONS = {
  about: UserRound,
  services: LayoutGrid,
  booking: CalendarCheck,
} as const;

export function BottomNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.id);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -45% 0px", threshold: [0.15, 0.35, 0.55] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="التنقل السفلي"
      className="nav-glass fixed inset-x-0 bottom-0 z-40 border-t border-gold/25 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="grid grid-cols-3">
        {NAV_ITEMS.map((item) => {
          const Icon = ICONS[item.id];
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={item.href}
                className={cn(
                  "flex min-h-14 flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors duration-150",
                  isActive ? "text-gold" : "text-muted",
                )}
              >
                <Icon className="size-5" strokeWidth={isActive ? 2.2 : 1.8} />
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
