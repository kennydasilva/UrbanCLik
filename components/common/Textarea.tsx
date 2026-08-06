import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "min-h-[140px] w-full resize-none rounded-xl border bg-paper/[0.04] px-4 py-3.5 text-sm text-paper placeholder:text-paper/40 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold-400/60",
          error ? "border-red-400/60" : "border-paper/15 focus:border-gold-400/60",
          className,
        )}
        aria-invalid={Boolean(error)}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
