import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 sm:gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
      {...props}
    >
      {eyebrow ? (
        <span
          className={cn(
            "text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]",
            tone === "light" ? "text-gold-400" : "text-gold-600",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight",
          tone === "light" ? "text-paper" : "text-ink-500",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed",
            tone === "light" ? "text-paper/70" : "text-ink-500/70",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}