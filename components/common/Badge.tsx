import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: "gold" | "dark" | "outline";
}

export function Badge({ className, tone = "gold", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-medium",
        tone === "gold" && "bg-gold-100 text-gold-800",
        tone === "dark" && "bg-ink-500 text-paper",
        tone === "outline" && "border border-paper/20 text-paper",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}