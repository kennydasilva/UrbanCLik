import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  tone?: "dark" | "light" | "gold";
}

export function Card({ className, tone = "dark", children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 transition-colors duration-300 sm:p-8",
        tone === "dark" &&
          "border-paper/10 bg-paper/[0.03] backdrop-blur-sm hover:border-gold-400/40",
        tone === "light" && "border-ink-100 bg-paper text-ink-500 shadow-sm",
        tone === "gold" && "border-transparent bg-gold-gradient text-ink-500",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
