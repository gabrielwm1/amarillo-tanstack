import * as React from "react";

import { theme } from "@/components/ui/theme";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  start?: React.ReactNode;
  end?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, start, end, ...props }, ref) => {
    return (
      <div className={cn("w-full relative", className)}>
        {start && (
          <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-neutral-9 pointer-events-none">
            {start}
          </div>
        )}
        <input
          type={type}
          className={cn(
            [
              "py-1",
              "h-10",
              "px-5.5",
              "text-start",
              "text-sm",
              "leading-10",
              "w-full",
              "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-12",
              "placeholder:select-none",
              "placeholder:text-neutral-9",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-9 focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              theme.border.base,
              theme.border.color.active,
              theme.border.color.base,
              theme.border.color.disabled,
              theme.border.color.focus,
              theme.border.color.hover,
              theme.disabled,
              theme.duration,
              theme.outline,
              theme.rounded,
              theme.shadow.box,
            ].join(" "),
            start ? "px-8" : "pl-2",
            end ? "pr-8" : "",
            className
          )}
          ref={ref}
          {...props}
        />
        {end && (
          <div className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-neutral-9 pointer-events-none">
            {end}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
export { Input };
