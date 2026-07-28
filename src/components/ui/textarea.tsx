import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[140px] w-full rounded-[14px] border border-border bg-background-secondary px-4 py-3 text-[15px] text-foreground transition-colors placeholder:text-foreground-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta/20 focus-visible:border-magenta/30 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
