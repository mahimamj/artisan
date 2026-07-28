import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[14px] text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-magenta text-white hover:bg-magenta/90 hover:shadow-lg hover:shadow-magenta/20 active:scale-[0.98]",
        secondary:
          "border border-border bg-background-secondary text-foreground hover:border-foreground/20 hover:bg-background active:scale-[0.98]",
        ghost:
          "text-foreground hover:text-magenta hover:bg-magenta/5",
        outline:
          "border border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50",
        dark:
          "bg-dark text-white hover:bg-dark/90 active:scale-[0.98]",
      },
      size: {
        default: "h-12 px-7 text-[15px]",
        sm: "h-10 px-5 text-sm",
        lg: "h-14 px-9 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
