import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-11 sm:h-13 w-full rounded-lg sm:rounded-xl border bg-paper/[0.04] px-3 sm:px-4 py-2.5 sm:py-3.5 text-xs sm:text-sm text-paper placeholder:text-paper/40 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold-400/60",
          error ? "border-red-400/60" : "border-paper/15 focus:border-gold-400/60",
          className,
        )}
        aria-invalid={Boolean(error)}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };