import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
// import { ButtonSpinner } from "@/app/components/ui/button-spinner";
import { theme } from "@/components/ui/theme";
import { ButtonSpinner } from "./button-spinner";

const buttonStyles = {
  base: [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "cursor-pointer",
    "whitespace-nowrap",
    "rounded-md",
    "text-sm",
    "font-medium",
    "ring-offset-background",
    "transition-colors",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
    "focus-visible:ring-offset-2",
    "shrink-0",
    "transition-[background-color,border-color,box-shadow,color,opacity]",
    theme.border.base,
    theme.disabled,
    theme.duration,
    theme.outline,
    theme.rounded,
  ].join(" "),
  size: {
    sm: "h-8 rounded-md px-2 text-xs",
    md: "h-9 px-4 py-3",
    lg: "h-10 rounded-md px-4",
    xl: "h-11 rounded-md px-5",
  },
  variant: {
    primary: [
      "bg-neutral-12",
      "text-neutral-1",
      "border-transparent",
      "shadow-[inset_0_-1px_0_1px_color-mix(in_oklab,var(--color-neutral-12)_100%,transparent),inset_0_0_0_1px_rgba(255,255,255,0.25)]",
      "hover:bg-neutral-12/85",
      "hover:shadow-[inset_0_0_0_0_transparent]",
      "data-[active=true]:bg-neutral-12/75",
      "active:bg-neutral-12/75",
      "active:shadow-[inset_0_0_0_0_transparent]",
      "disabled:!bg-neutral-12",
      "disabled:!shadow-[inset_0_-1px_0_1px_color-mix(in_oklab,var(--bg-neutral-12)_100%,transparent),inset_0_0_0_1px_rgba(255,255,255,0.25)]",
      theme.shadow.filter,
      theme.shadow.text,
    ].join(" "),
    secondary: [
      "bg-neutral-1",
      "text-neutral-11",
      "hover:bg-neutral-2",
      "hover:text-neutral-12",
      "active:bg-neutral-3",
      "active:text-foreground",
      "data-[active=true]:bg-neutral-3",
      "disabled:text-neutral-11",
      theme.bg.disabled,
      theme.border.color.active,
      theme.border.color.base,
      theme.border.color.disabled,
      theme.border.color.focus,
      theme.border.color.hover,
      theme.shadow.box,
    ].join(" "),
    brand: [
      "bg-brand-9",
      "text-neutral-1",
      "border-transparent",
      "shadow-[inset_0_-1px_0_1px_color-mix(in_oklab,var(--color-brand-9)_100%,transparent),inset_0_0_0_1px_rgba(255,255,255,0.25)]",
      "hover:bg-brand-9/85",
      "hover:shadow-[inset_0_0_0_0_transparent]",
      "active:bg-brand-9/75",
      "active:shadow-[inset_0_0_0_0_transparent]",
      "data-[active=true]:bg-brand-9/75",
      "disabled:!bg-brand-9",
      "disabled:!shadow-[inset_0_-1px_0_1px_color-mix(in_oklab,var(--color-brand-9)_100%,transparent),inset_0_0_0_1px_rgba(255,255,255,0.25)]",
      theme.shadow.filter,
      theme.shadow.text,
    ].join(" "),
    ghost: [
      "bg-transparent",
      "text-neutral-11",
      "border-transparent",
      "hover:bg-neutral-3",
      "hover:text-foreground",
      "active:bg-neutral-4",
      "data-[active=true]:bg-neutral-4",
      "disabled:!bg-neutral-1",
      theme.bg.disabled,
    ].join(" "),
    error: [
      "bg-red-9",
      "text-neutral-1",
      "border-transparent",
      "shadow-[inset_0_-1px_0_1px_color-mix(in_oklab,var(--error)_100%,transparent),inset_0_0_0_1px_rgba(255,255,255,0.25)]",
      "hover:bg-red-9/85",
      "hover:shadow-[inset_0_0_0_0_transparent]",
      "data-[active=true]:bg-red-9/75",
      "active:bg-red-9/75",
      "active:shadow-[inset_0_0_0_0_transparent]",
      "disabled:!bg-red-9",
      "disabled:!shadow-[inset_0_-1px_0_1px_color-mix(in_oklab,var(--red-9)_100%,transparent),inset_0_0_0_1px_rgba(255,255,255,0.25)]",
      theme.shadow.filter,
      theme.shadow.text,
    ].join(" "),
    success: [
      "bg-green-9",
      "text-neutral-1",
      "border-transparent",
      "shadow-[inset_0_-1px_0_1px_color-mix(in_oklab,var(--green-9)_100%,transparent),inset_0_0_0_1px_rgba(255,255,255,0.25)]",
      "hover:bg-green-9/85",
      "hover:shadow-[inset_0_0_0_0_transparent]",
      "data-[active=true]:bg-green-9/75",
      "active:bg-green-9/75",
      "active:shadow-[inset_0_0_0_0_transparent]",
      "disabled:!bg-green-9",
      "disabled:!shadow-[inset_0_-1px_0_1px_color-mix(in_oklab,var(--green-9)_100%,transparent),inset_0_0_0_1px_rgba(255,255,255,0.25)]",
      theme.shadow.filter,
      theme.shadow.text,
    ].join(" "),
    warning: [
      "bg-yellow-9",
      "text-yellow-12",
      "border-transparent",
      "shadow-[inset_0_-1px_0_1px_color-mix(in_oklab,var(--yellow-9)_100%,transparent),inset_0_0_0_1px_rgba(255,255,255,0.25)]",
      "hover:bg-yellow-9/85",
      "hover:shadow-[inset_0_0_0_0_transparent]",
      "data-[active=true]:bg-yellow-9/75",
      "active:bg-yellow-9/75",
      "active:shadow-[inset_0_0_0_0_transparent]",
      "disabled:!bg-yellow-9",
      "disabled:!shadow-[inset_0_-1px_0_1px_color-mix(in_oklab,var(--yellow-9)_100%,transparent),inset_0_0_0_1px_rgba(255,255,255,0.25)]",
      theme.disabled,
      theme.shadow.filter,
    ].join(" "),
    info: [
      "bg-blue-9",
      "text-neutral-1",
      "border-transparent",
      "shadow-[inset_0_-1px_0_1px_color-mix(in_oklab,var(--blue-9)_100%,transparent),inset_0_0_0_1px_rgba(255,255,255,0.25)]",
      "hover:bg-blue-9/85",
      "hover:shadow-[inset_0_0_0_0_transparent]",
      "data-[active=true]:bg-blue-9/75",
      "active:bg-blue-9/75",
      "active:shadow-[inset_0_0_0_0_transparent]",
      "disabled:!bg-blue-9",
      "disabled:!shadow-[inset_0_-1px_0_1px_color-mix(in_oklab,var(--blue-9)_100%,transparent),inset_0_0_0_1px_rgba(255,255,255,0.25)]",
      theme.shadow.filter,
      theme.shadow.text,
    ].join(" "),
  },
  width: {
    fit: "w-fit",
    full: "w-full",
  },
};

const buttonVariants = cva(buttonStyles.base, {
  variants: {
    variant: {
      primary: buttonStyles.variant.primary,
      secondary: buttonStyles.variant.secondary,
      brand: buttonStyles.variant.brand,
      ghost: buttonStyles.variant.ghost,
      error: buttonStyles.variant.error,
      success: buttonStyles.variant.success,
      warning: buttonStyles.variant.warning,
      info: buttonStyles.variant.info,
    },
    size: buttonStyles.size,
    width: buttonStyles.width,
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    width: "fit",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  start?: React.ReactNode;
  end?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  fullWidth = false,
  asChild = false,
  isLoading = false,
  start,
  end,
  children,
  disabled = false,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        buttonVariants({
          variant,
          size,
          width: fullWidth ? "full" : "fit",
        }),
        className
      )}
      disabled={isLoading || disabled}
      data-loading={isLoading}
      {...props}
    >
      {!isLoading && start}
      {isLoading && <ButtonSpinner />}
      <span>{children}</span>
      {!isLoading && end}
    </Comp>
  );
};

Button.displayName = "Button";

export { Button, buttonStyles, buttonVariants };
