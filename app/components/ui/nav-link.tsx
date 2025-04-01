import * as React from "react";
import { createLink, type LinkComponent } from "@tanstack/react-router";
import { theme } from "./theme";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const navStyles = {
  base: [
    "text-neutral-10",
    "hover:text-neutral-12",
    "font-bold",
    "transition-[background-color,border-color,box-shadow,color,opacity]",
    theme.duration,
  ].join(" "),
  size: {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  },
};

const navLinkVariants = cva(navStyles.base, {
  variants: {
    size: navStyles.size,
  },
  defaultVariants: {
    size: "sm",
  },
});

interface BasicLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof navLinkVariants> {}

const NavLinkComponent = React.forwardRef<HTMLAnchorElement, BasicLinkProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <a
        ref={ref}
        {...props}
        className={cn(navLinkVariants({ size }), className)}
      />
    );
  }
);

const CreatedLinkComponent = createLink(NavLinkComponent);

export const NavLink: LinkComponent<typeof NavLinkComponent> = (props) => {
  return (
    <CreatedLinkComponent
      preload={"intent"}
      activeProps={{ className: "text-neutral-12" }}
      {...props}
    />
  );
};
