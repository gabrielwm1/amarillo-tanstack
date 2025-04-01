import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ButtonSpinner } from "@/components/ui/button-spinner";
import { buttonStyles } from "./button";

const iconButtonVariants = cva(buttonStyles.base, {
  variants: {
    variant: buttonStyles.variant,
    size: {
      sm: "h-8 w-8",
      md: "h-9 w-9",
      lg: "h-10 w-10",
      xl: "h-11 w-11",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      children,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(iconButtonVariants({ variant, className, size }))}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? <ButtonSpinner /> : children}
      </Comp>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton, iconButtonVariants };
