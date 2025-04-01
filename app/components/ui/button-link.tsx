import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { createLink, type LinkComponent } from "@tanstack/react-router";
import { type VariantProps } from "class-variance-authority";
import * as React from "react";

interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  start?: React.ReactNode;
  end?: React.ReactNode;
  fullWidth?: boolean;
}

const ButtonLinkComponent = React.forwardRef<
  HTMLAnchorElement,
  ButtonLinkProps
>(
  (
    {
      children,
      className,
      end,
      fullWidth = false,
      size = "md",
      start,
      variant = "primary",
      ...props
    },
    ref
  ) => {
    return (
      <a
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
            width: fullWidth ? "full" : "fit",
          }),
          className
        )}
        {...props}
      >
        {start}
        {children}
        {end}
      </a>
    );
  }
);

ButtonLinkComponent.displayName = "ButtonLinkComponent";

const CreatedLinkComponent = createLink(ButtonLinkComponent);

export const ButtonLink: LinkComponent<typeof ButtonLinkComponent> = (
  props
) => {
  return <CreatedLinkComponent preload="intent" {...props} />;
};
