import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-paper text-ink-500 hover:bg-gold-100 active:bg-gold-200 shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset]",
        gold: "bg-gold-gradient text-ink-500 hover:brightness-110",
        outline:
          "border border-ink-100/25 text-paper hover:border-gold-300 hover:text-gold-300",
        ghost: "text-paper hover:text-gold-300",
        dark: "bg-ink-500 text-paper hover:bg-ink-400",
      },
      size: {
        default: "h-10 sm:h-12 px-4 sm:px-6 text-xs sm:text-sm",
        sm: "h-8 sm:h-10 px-3 sm:px-5 text-[11px] sm:text-[13px]",
        lg: "h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };