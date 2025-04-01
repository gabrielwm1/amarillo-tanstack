import { cn } from "@/lib/utils";
import { createLink, type LinkComponent } from "@tanstack/react-router";
import { type VariantProps } from "class-variance-authority";
import * as React from "react";
import { iconButtonVariants } from "./icon-button";

interface IconButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof iconButtonVariants> {}

const IconButtonLinkComponent = React.forwardRef<
  HTMLAnchorElement,
  IconButtonLinkProps
>(({ className, variant, size, children, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(iconButtonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </a>
  );
});

IconButtonLinkComponent.displayName = "IconButtonLinkComponent";

const CreatedLinkComponent = createLink(IconButtonLinkComponent);

export const IconButtonLink: LinkComponent<typeof IconButtonLinkComponent> = (
  props
) => {
  return <CreatedLinkComponent preload="intent" {...props} />;
};
